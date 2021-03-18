import {
  Collection,
  CollectionCreateManyWithoutOwnerInput,
  CollectionUpdateInput,
  CollectionWhereUniqueInput,
  Item,
  ItemUpdateInput,
  ItemWhereUniqueInput,
  Section,
  SectionUpdateInput,
  SectionWhereUniqueInput,
  User,
  UserCreateInput,
  UserCreateOneWithoutCollectionsInput,
  UserUpdateInput,
  UserWhereUniqueInput,
} from '../schema/Object'
import cuid from 'cuid'
import {
  objectType,
  arg,
  intArg,
  idArg,
  nonNull,
  stringArg,
  booleanArg,
  mutationType,
  inputObjectType,
  enumType,
  scalarType,
} from 'nexus'
import { Context } from '../context'
import { getInitialSections } from '../data/new-user'
import { createNewItemFromSearch, inferNewItemFromUrl } from '../parsers'
import aws from 'aws-sdk'

interface Positonnable {
  position: number
}

export function reAssignPosition<T extends Positonnable>(
  array: T[],
  startIndex: number,
  endIndex: number,
) {
  const result = Array.from(array)
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)
  return result.flatMap((x, index) => {
    if (index === x.position) {
      return []
    } else {
      return {
        ...x,
        position: index,
      }
    }
  })
}

export const Mutation = mutationType({
  definition(t) {
    t.field('updateOneSection', {
      type: Section,
      args: {
        data: arg({ type: nonNull(SectionUpdateInput) }),
        where: arg({ type: nonNull(SectionWhereUniqueInput) }),
      },
    })
    t.nonNull.field('createOneUser', {
      type: User,
      args: {
        data: arg({ type: nonNull(UserCreateInput) }),
      },
    })
    t.field('updateOneUser', {
      type: User,
      args: {
        data: arg({ type: nonNull(UserUpdateInput) }),
        where: arg({ type: nonNull(UserWhereUniqueInput) }),
      },
    })
    t.field('updateOneItem', {
      type: Item,
      args: {
        data: arg({ type: nonNull(ItemUpdateInput) }),
        where: arg({ type: nonNull(ItemWhereUniqueInput) }),
      },
    })
    t.field('updateOneCollection', {
      type: Collection,
      args: {
        data: arg({ type: nonNull(CollectionUpdateInput) }),
        where: arg({ type: nonNull(CollectionWhereUniqueInput) }),
      },
    })
    t.field('signS3', {
      type: 'S3SignedPath',
      args: {
        fileName: nonNull(stringArg()),
        fileType: nonNull(stringArg()),
      },
      async resolve(_, { fileName, fileType }, ctx: Context) {
        const s3 = new aws.S3({
          accessKeyId: process.env.ACCESS_KEY_ID_AWS,
          secretAccessKey: process.env.SECRET_ACCESS_KEY_AWS,
          signatureVersion: 'v4',
          region: 'eu-west-1',
        })
        const s3Bucket = 'tottem-media' // FIXME config
        const s3Params = {
          Bucket: s3Bucket,
          Key: fileName,
          Expires: 60,
          ContentType: 'multipart/form-data',
          ACL: 'public-read',
        }

        const signedRequest = await s3.getSignedUrl('putObject', s3Params)
        const url = `https://${s3Bucket}.s3.amazonaws.com/${fileName}`

        return {
          signedRequest,
          url,
        }
      },
    })
    t.field('createNewUser', {
      type: 'User',
      args: {
        authUserId: nonNull(stringArg()),
        firstname: nonNull(stringArg()),
        pictureUrl: nonNull(stringArg()),
        slug: nonNull(stringArg()),
      },
      async resolve(
        _,
        { slug, authUserId, pictureUrl, firstname },
        ctx: Context,
      ) {
        return ctx.prisma.user.create({
          data: {
            firstname,
            pictureUrl,
            slug,
            authUserId,
            sections: getInitialSections(authUserId),
          },
        })
      },
    })
    t.field('createEmptyCollection', {
      type: 'Collection',
      args: {
        sectionId: nonNull(idArg()),
      },
      async resolve(_, { sectionId }, ctx: Context) {
        const user = await ctx.user
        if (user === undefined) {
          return Promise.reject('User not authenticated')
        }
        const id = cuid()
        return ctx.prisma.collection.create({
          data: {
            id,
            owner: {
              connect: {
                authUserId: user.auth0Id,
              },
            },
            section: {
              connect: {
                id: sectionId,
              },
            },
            slug: `new-collection-${id}`,
          },
        })
      },
    })
    t.field('createEmptySection', {
      type: 'Section',
      async resolve(_, __, ctx: Context) {
        const user = await ctx.user
        if (user === undefined) {
          return Promise.reject('User not authenticated')
        }
        const sectionsCount = (
          await ctx.prisma.section.findMany({
            where: { AND: { owner: { authUserId: user.auth0Id } } },
          })
        ).length
        const id = cuid()
        return ctx.prisma.section.create({
          data: {
            id,
            owner: {
              connect: {
                authUserId: user.auth0Id,
              },
            },
            slug: `new-space-${id}`,
            index: sectionsCount,
          },
        })
      },
    })
    t.nonNull.list.nonNull.field('changeItemPosition', {
      type: 'Item',
      description: `Mutation changing the position of an item from his $oldIndex to the $newIndex.
            It takes *indexes* (not position) and return changed items with new position.
            `,
      args: {
        collectionId: nonNull(idArg()),
        newIndex: nonNull(intArg()),
        oldIndex: nonNull(intArg()),
      },
      async resolve(_, { oldIndex, newIndex, collectionId }, ctx: Context) {
        const items = (
          await ctx.prisma.item.findMany({
            where: {
              collection: { id: collectionId },
              isDeleted: false,
            },
            select: { id: true, position: true },
            // this order is related to items order on the page
            // Should be nested order not supported by photon yet FIXME
            orderBy: { createdAt: 'desc' },
          })
        ).sort((a, b) => a.position - b.position) // FIXME here!

        const newIndexedItems = reAssignPosition(items, oldIndex, newIndex)
        const updates: Array<ReturnType<typeof ctx.prisma.item.update>> = []
        for (const item of newIndexedItems) {
          updates.push(
            ctx.prisma.item.update({
              data: {
                position: item.position,
              },
              where: { id: item.id },
            }),
          )
        }
        await Promise.all(updates)
        return ctx.prisma.item.findMany({
          where: {
            OR: newIndexedItems.map(x => {
              return {
                id: x.id,
              }
            }),
          },
        })
      },
    })
    t.nonNull.field('createItemFromSearch', {
      type: 'Item',
      args: {
        collectionId: stringArg(),
        id: nonNull(stringArg()),
        inbox: booleanArg(),
        kind: nonNull(stringArg()),
      },
      async resolve(_, { id, kind, collectionId, inbox }, ctx: Context) {
        return createNewItemFromSearch(id, kind).then(async item => {
          const user = await ctx.user
          if (user === undefined) {
            return Promise.reject('User not authenticated')
          }
          let connect
          if (collectionId) {
            connect = {
              collection: {
                connect: {
                  id: collectionId,
                },
              },
            }
          } else if (inbox) {
            connect = {
              inboxOwner: {
                connect: {
                  authUserId: user.auth0Id,
                },
              },
            }
          }
          return ctx.prisma.item.create({
            data: {
              title: item.title,
              author: item.author,
              type: item.type,
              meta: item.meta && JSON.stringify(item.meta), // FIXME JSON fields not supported yet
              provider: item.provider,
              productUrl: item.productUrl,
              imageUrl: item.imageUrl,
              ...connect,
            },
          })
        })
      },
    })
    t.nonNull.field('createItemFromUrl', {
      type: 'Item',
      args: {
        collectionId: stringArg(),
        inbox: booleanArg(),
        url: nonNull(stringArg()),
      },
      async resolve(_, { url, collectionId, inbox }, ctx: Context) {
        return inferNewItemFromUrl(url).then(async item => {
          const user = await ctx.user
          if (user === undefined) {
            return Promise.reject('User not authenticated')
          }
          let connect: {
            collection?: any
            inboxOwner?: any
          } = {}

          if (collectionId) {
            connect = {
              collection: {
                connect: {
                  id: collectionId,
                },
              },
            }
          } else if (inbox) {
            connect = {
              inboxOwner: {
                connect: {
                  authUserId: user.auth0Id,
                },
              },
            }
          }
          return ctx.prisma.item.create({
            data: {
              title: item.title,
              author: item.author,
              type: item.type,
              meta: item.meta && JSON.stringify(item.meta), // FIXME JSON fields not supported yet
              provider: item.provider,
              productUrl: item.productUrl,
              imageUrl: item.imageUrl,
              ...connect,
            },
          })
        })
      },
    })
  },
})
