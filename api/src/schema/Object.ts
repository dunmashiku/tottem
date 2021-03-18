import {
  objectType,
  arg,
  intArg,
  idArg,
  nonNull,
  stringArg,
  booleanArg,
  inputObjectType,
  enumType,
  scalarType,
} from 'nexus'
import { Context } from '../context'

export const User = objectType({
  name: 'User',
  definition(t) {
    t.string('authUserId')
    t.string('biography')
    t.nonNull.string('firstname')
    t.string('github')
    t.nonNull.string('id')
    t.string('label')
    t.string('linkedin')
    t.string('mail')
    t.nonNull.string('pictureUrl')
    t.nonNull.list.nonNull.field('sections', {
      type: Section,
      args: {
        after: arg({ type: SectionWhereUniqueInput }),
        before: arg({ type: SectionWhereUniqueInput }),
        first: intArg(),
        last: intArg(),
        skip: intArg(),
      },
    })
    t.nonNull.string('slug')
    t.string('website')
    t.string('youtube')
  },
})

export const Section = objectType({
  name: 'Section',
  definition(t) {
    t.nonNull.list.nonNull.field('collections', {
      type: Collection,
      args: {
        after: arg({ type: CollectionWhereUniqueInput }),
        before: arg({ type: CollectionWhereUniqueInput }),
        first: intArg(),
        last: intArg(),
        orderBy: arg({ type: SectionCollectionsOrderByInput }),
        skip: intArg(),
        where: arg({ type: SectionCollectionsWhereInput }),
      },
    })
    t.nonNull.field('createdAt', { type: DateTime })
    t.nonNull.string('id')
    t.nonNull.int('index')
    t.nonNull.boolean('isExpanded')
    t.string('name')
    t.nonNull.string('slug')
  },
})

export const Collection = objectType({
  name: 'Collection',
  definition(t) {
    t.nonNull.field('createdAt', { type: DateTime })
    t.string('detail')
    t.nonNull.string('id')
    t.nonNull.boolean('isDeleted')
    t.nonNull.list.nonNull.field('items', {
      type: Item,
      args: {
        after: arg({ type: ItemWhereUniqueInput }),
        before: arg({ type: ItemWhereUniqueInput }),
        first: intArg(),
        last: intArg(),
        orderBy: arg({ type: CollectionItemsOrderByInput }),
        skip: intArg(),
        where: arg({ type: CollectionItemsWhereInput }),
      },
    })
    t.string('name')
    t.nonNull.field('owner', { type: User })
    t.nonNull.field('section', { type: Section })
    t.nonNull.string('slug')
    t.nonNull.field('updatedAt', { type: DateTime })
  },
})

export const Item = objectType({
  name: 'Item',
  definition(t) {
    t.string('author')
    t.string('comment')
    t.nonNull.field('createdAt', { type: DateTime })
    t.string('description')
    t.nonNull.string('id')
    t.string('imageUrl')
    t.nonNull.boolean('isDeleted')
    t.string('meta')
    t.nonNull.int('position')
    t.string('productUrl')
    t.string('provider')
    t.nonNull.string('title')
    t.nonNull.field('type', { type: ItemType })
  },
})

export const S3SignedPath = objectType({
  name: 'S3SignedPath',
  definition(t) {
    t.nonNull.string('signedRequest')
    t.nonNull.string('url')
  },
})

export const SearchItem = objectType({
  name: 'SearchItem',
  definition(t) {
    t.string('id')
    t.string('title')
    t.nullable.string('author')
    t.string('type')
  },
})

export const Inbox = objectType({
  name: 'Inbox',
  description: 'Inbox user relative content',
  definition(t) {
    t.string('id', {
      resolve: () => 'me',
    })
    t.int('count', {
      description: 'Non deleted items count in inbox',
      resolve: async (_, {}, ctx) => {
        const user = await ctx.user
        const userInbox = await ctx.prisma.user.findUnique({
          where: { authUserId: user?.auth0Id },
          select: { inboxedItems: { where: { isDeleted: false } } },
        })

        if (userInbox?.inboxedItems === undefined) {
          return Promise.reject(`Inbox ${user?.auth0Id} not found`)
        }
        return userInbox?.inboxedItems.length // FIXME waiting for photon agg
      },
    })
    t.list.field('items', {
      type: 'Item',
      async resolve(_, {}, ctx: Context) {
        const user = await ctx.user
        const userInbox = await ctx.prisma.user.findUnique({
          where: { authUserId: user?.auth0Id },
          select: { inboxedItems: { where: { isDeleted: false } } },
        })

        if (userInbox?.inboxedItems === undefined) {
          return Promise.reject(`Inbox ${user?.auth0Id} not found`)
        }
        return userInbox?.inboxedItems
      },
    })
  },
})

export const BooleanFilter = inputObjectType({
  name: 'BooleanFilter',
  definition(t) {
    t.boolean('equals')
    t.boolean('not')
  },
})

export const CollectionCreateManyWithoutOwnerInput = inputObjectType({
  name: 'CollectionCreateManyWithoutOwnerInput',
  definition(t) {
    t.list.nonNull.field('connect', { type: CollectionWhereUniqueInput })
    t.list.nonNull.field('create', { type: CollectionCreateWithoutOwnerInput })
  },
})

export const CollectionCreateManyWithoutSectionInput = inputObjectType({
  name: 'CollectionCreateManyWithoutSectionInput',
  definition(t) {
    t.list.nonNull.field('connect', { type: CollectionWhereUniqueInput })
    t.list.nonNull.field('create', {
      type: CollectionCreateWithoutSectionInput,
    })
  },
})
export const CollectionCreateOneWithoutItemsInput = inputObjectType({
  name: 'CollectionCreateOneWithoutItemsInput',
  definition(t) {
    t.field('connect', { type: CollectionWhereUniqueInput })
    t.field('create', { type: CollectionCreateWithoutItemsInput })
  },
})
export const CollectionCreateWithoutItemsInput = inputObjectType({
  name: 'CollectionCreateWithoutItemsInput',
  definition(t) {
    t.field('createdAt', { type: DateTime })
    t.string('detail')
    t.string('id')
    t.boolean('isDeleted')
    t.string('name')
    t.nonNull.field('owner', { type: UserCreateOneWithoutCollectionsInput })
    t.nonNull.field('section', {
      type: SectionCreateOneWithoutCollectionsInput,
    })
    t.nonNull.string('slug')
    t.field('updatedAt', { type: DateTime })
  },
})
export const CollectionCreateWithoutOwnerInput = inputObjectType({
  name: 'CollectionCreateWithoutOwnerInput',
  definition(t) {
    t.field('createdAt', { type: DateTime })
    t.string('detail')
    t.string('id')
    t.boolean('isDeleted')
    t.field('items', { type: ItemCreateManyWithoutCollectionInput })
    t.string('name')
    t.nonNull.field('section', {
      type: SectionCreateOneWithoutCollectionsInput,
    })
    t.nonNull.string('slug')
    t.field('updatedAt', { type: DateTime })
  },
})
export const CollectionCreateWithoutSectionInput = inputObjectType({
  name: 'CollectionCreateWithoutSectionInput',
  definition(t) {
    t.field('createdAt', { type: DateTime })
    t.string('detail')
    t.string('id')
    t.boolean('isDeleted')
    t.field('items', { type: ItemCreateManyWithoutCollectionInput })
    t.string('name')
    t.nonNull.field('owner', { type: UserCreateOneWithoutCollectionsInput })
    t.nonNull.string('slug')
    t.field('updatedAt', { type: DateTime })
  },
})
export const CollectionFilter = inputObjectType({
  name: 'CollectionFilter',
  definition(t) {
    t.field('every', { type: CollectionWhereInput })
    t.field('none', { type: CollectionWhereInput })
    t.field('some', { type: CollectionWhereInput })
  },
})
export const CollectionItemsOrderByInput = inputObjectType({
  name: 'CollectionItemsOrderByInput',
  definition(t) {
    t.field('createdAt', { type: OrderByArg })
    t.field('position', { type: OrderByArg })
  },
})
export const CollectionItemsWhereInput = inputObjectType({
  name: 'CollectionItemsWhereInput',
  definition(t) {
    t.field('isDeleted', { type: BooleanFilter })
  },
})
export const CollectionScalarWhereInput = inputObjectType({
  name: 'CollectionScalarWhereInput',
  definition(t) {
    t.list.nonNull.field('AND', { type: CollectionScalarWhereInput })
    t.field('createdAt', { type: DateTimeFilter })
    t.field('detail', { type: NullableStringFilter })
    t.field('id', { type: StringFilter })
    t.field('isDeleted', { type: BooleanFilter })
    t.field('items', { type: ItemFilter })
    t.field('name', { type: NullableStringFilter })
    t.list.nonNull.field('NOT', { type: CollectionScalarWhereInput })
    t.list.nonNull.field('OR', { type: CollectionScalarWhereInput })
    t.field('ownerId', { type: StringFilter })
    t.field('sectionId', { type: StringFilter })
    t.field('slug', { type: StringFilter })
    t.field('updatedAt', { type: DateTimeFilter })
  },
})
export const CollectionUpdateInput = inputObjectType({
  name: 'CollectionUpdateInput',
  definition(t) {
    t.field('createdAt', { type: DateTime })
    t.string('detail')
    t.string('id')
    t.boolean('isDeleted')
    t.field('items', { type: ItemUpdateManyWithoutCollectionInput })
    t.string('name')
    t.field('owner', { type: UserUpdateOneRequiredWithoutCollectionsInput })
    t.field('section', {
      type: SectionUpdateOneRequiredWithoutCollectionsInput,
    })
    t.string('slug')
    t.field('updatedAt', { type: DateTime })
  },
})
export const CollectionUpdateManyDataInput = inputObjectType({
  name: 'CollectionUpdateManyDataInput',
  definition(t) {
    t.field('createdAt', { type: DateTime })
    t.string('detail')
    t.string('id')
    t.boolean('isDeleted')
    t.string('name')
    t.string('slug')
    t.field('updatedAt', { type: DateTime })
  },
})
export const CollectionUpdateManyWithWhereNestedInput = inputObjectType({
  name: 'CollectionUpdateManyWithWhereNestedInput',
  definition(t) {
    t.nonNull.field('data', { type: CollectionUpdateManyDataInput })
    t.nonNull.field('where', { type: CollectionScalarWhereInput })
  },
})
export const CollectionUpdateManyWithoutOwnerInput = inputObjectType({
  name: 'CollectionUpdateManyWithoutOwnerInput',
  definition(t) {
    t.list.nonNull.field('connect', { type: CollectionWhereUniqueInput })
    t.list.nonNull.field('create', { type: CollectionCreateWithoutOwnerInput })
    t.list.nonNull.field('delete', { type: CollectionWhereUniqueInput })
    t.list.nonNull.field('deleteMany', { type: CollectionScalarWhereInput })
    t.list.nonNull.field('disconnect', { type: CollectionWhereUniqueInput })
    t.list.nonNull.field('set', { type: CollectionWhereUniqueInput })
    t.list.nonNull.field('update', {
      type: CollectionUpdateWithWhereUniqueWithoutOwnerInput,
    })
    t.list.nonNull.field('updateMany', {
      type: CollectionUpdateManyWithWhereNestedInput,
    })
    t.list.nonNull.field('upsert', {
      type: CollectionUpsertWithWhereUniqueWithoutOwnerInput,
    })
  },
})
export const CollectionUpdateManyWithoutSectionInput = inputObjectType({
  name: 'CollectionUpdateManyWithoutSectionInput',
  definition(t) {
    t.list.nonNull.field('connect', { type: CollectionWhereUniqueInput })
    t.list.nonNull.field('create', {
      type: CollectionCreateWithoutSectionInput,
    })
    t.list.nonNull.field('delete', { type: CollectionWhereUniqueInput })
    t.list.nonNull.field('deleteMany', { type: CollectionScalarWhereInput })
    t.list.nonNull.field('disconnect', { type: CollectionWhereUniqueInput })
    t.list.nonNull.field('set', { type: CollectionWhereUniqueInput })
    t.list.nonNull.field('update', {
      type: CollectionUpdateWithWhereUniqueWithoutSectionInput,
    })
    t.list.nonNull.field('updateMany', {
      type: CollectionUpdateManyWithWhereNestedInput,
    })
    t.list.nonNull.field('upsert', {
      type: CollectionUpsertWithWhereUniqueWithoutSectionInput,
    })
  },
})
export const CollectionUpdateOneWithoutItemsInput = inputObjectType({
  name: 'CollectionUpdateOneWithoutItemsInput',
  definition(t) {
    t.field('connect', { type: CollectionWhereUniqueInput })
    t.field('create', { type: CollectionCreateWithoutItemsInput })
    t.boolean('delete')
    t.boolean('disconnect')
    t.field('update', { type: CollectionUpdateWithoutItemsDataInput })
    t.field('upsert', { type: CollectionUpsertWithoutItemsInput })
  },
})
export const CollectionUpdateWithWhereUniqueWithoutOwnerInput = inputObjectType(
  {
    name: 'CollectionUpdateWithWhereUniqueWithoutOwnerInput',
    definition(t) {
      t.nonNull.field('data', { type: CollectionUpdateWithoutOwnerDataInput })
      t.nonNull.field('where', { type: CollectionWhereUniqueInput })
    },
  },
)
const CollectionUpdateWithWhereUniqueWithoutSectionInput = inputObjectType({
  name: 'CollectionUpdateWithWhereUniqueWithoutSectionInput',
  definition(t) {
    t.nonNull.field('data', { type: CollectionUpdateWithoutSectionDataInput })
    t.nonNull.field('where', { type: CollectionWhereUniqueInput })
  },
})
export const CollectionUpdateWithoutItemsDataInput = inputObjectType({
  name: 'CollectionUpdateWithoutItemsDataInput',
  definition(t) {
    t.field('createdAt', { type: DateTime })
    t.string('detail')
    t.string('id')
    t.boolean('isDeleted')
    t.string('name')
    t.field('owner', { type: UserUpdateOneRequiredWithoutCollectionsInput })
    t.field('section', {
      type: SectionUpdateOneRequiredWithoutCollectionsInput,
    })
    t.string('slug')
    t.field('updatedAt', { type: DateTime })
  },
})
export const CollectionUpdateWithoutOwnerDataInput = inputObjectType({
  name: 'CollectionUpdateWithoutOwnerDataInput',
  definition(t) {
    t.field('createdAt', { type: DateTime })
    t.string('detail')
    t.string('id')
    t.boolean('isDeleted')
    t.field('items', { type: ItemUpdateManyWithoutCollectionInput })
    t.string('name')
    t.field('section', {
      type: SectionUpdateOneRequiredWithoutCollectionsInput,
    })
    t.string('slug')
    t.field('updatedAt', { type: DateTime })
  },
})
export const CollectionUpdateWithoutSectionDataInput = inputObjectType({
  name: 'CollectionUpdateWithoutSectionDataInput',
  definition(t) {
    t.field('createdAt', { type: DateTime })
    t.string('detail')
    t.string('id')
    t.boolean('isDeleted')
    t.field('items', { type: ItemUpdateManyWithoutCollectionInput })
    t.string('name')
    t.field('owner', { type: UserUpdateOneRequiredWithoutCollectionsInput })
    t.string('slug')
    t.field('updatedAt', { type: DateTime })
  },
})
export const CollectionUpsertWithWhereUniqueWithoutOwnerInput = inputObjectType(
  {
    name: 'CollectionUpsertWithWhereUniqueWithoutOwnerInput',
    definition(t) {
      t.nonNull.field('create', { type: CollectionCreateWithoutOwnerInput })
      t.nonNull.field('update', { type: CollectionUpdateWithoutOwnerDataInput })
      t.nonNull.field('where', { type: CollectionWhereUniqueInput })
    },
  },
)
export const CollectionUpsertWithWhereUniqueWithoutSectionInput = inputObjectType(
  {
    name: 'CollectionUpsertWithWhereUniqueWithoutSectionInput',
    definition(t) {
      t.nonNull.field('create', { type: CollectionCreateWithoutSectionInput })
      t.nonNull.field('update', {
        type: CollectionUpdateWithoutSectionDataInput,
      })
      t.nonNull.field('where', { type: CollectionWhereUniqueInput })
    },
  },
)
export const CollectionUpsertWithoutItemsInput = inputObjectType({
  name: 'CollectionUpsertWithoutItemsInput',
  definition(t) {
    t.nonNull.field('create', { type: CollectionCreateWithoutItemsInput })
    t.nonNull.field('update', { type: CollectionUpdateWithoutItemsDataInput })
  },
})
export const CollectionWhereInput = inputObjectType({
  name: 'CollectionWhereInput',
  definition(t) {
    t.list.nonNull.field('AND', { type: CollectionWhereInput })
    t.field('createdAt', { type: DateTimeFilter })
    t.field('detail', { type: NullableStringFilter })
    t.field('id', { type: StringFilter })
    t.field('isDeleted', { type: BooleanFilter })
    t.field('items', { type: ItemFilter })
    t.field('name', { type: NullableStringFilter })
    t.list.nonNull.field('NOT', { type: CollectionWhereInput })
    t.list.nonNull.field('OR', { type: CollectionWhereInput })
    t.field('owner', { type: UserWhereInput })
    t.field('ownerId', { type: StringFilter })
    t.field('section', { type: SectionWhereInput })
    t.field('sectionId', { type: StringFilter })
    t.field('slug', { type: StringFilter })
    t.field('updatedAt', { type: DateTimeFilter })
  },
})
export const CollectionWhereUniqueInput = inputObjectType({
  name: 'CollectionWhereUniqueInput',
  definition(t) {
    t.string('id')
    t.string('slug')
  },
})
export const DateTimeFilter = inputObjectType({
  name: 'DateTimeFilter',
  definition(t) {
    t.field('equals', { type: DateTime })
    t.field('gt', { type: DateTime })
    t.field('gte', { type: DateTime })
    t.list.nonNull.field('in', { type: DateTime })
    t.field('lt', { type: DateTime })
    t.field('lte', { type: DateTime })
    t.field('not', { type: DateTime })
    t.list.nonNull.field('notIn', { type: DateTime })
  },
})
export const IntFilter = inputObjectType({
  name: 'IntFilter',
  definition(t) {
    t.int('equals')
    t.int('gt')
    t.int('gte')
    t.list.nonNull.int('in')
    t.int('lt')
    t.int('lte')
    t.int('not')
    t.list.nonNull.int('notIn')
  },
})
export const ItemCreateManyWithoutCollectionInput = inputObjectType({
  name: 'ItemCreateManyWithoutCollectionInput',
  definition(t) {
    t.list.nonNull.field('connect', { type: ItemWhereUniqueInput })
    t.list.nonNull.field('create', { type: ItemCreateWithoutCollectionInput })
  },
})
export const ItemCreateManyWithoutInboxOwnerInput = inputObjectType({
  name: 'ItemCreateManyWithoutInboxOwnerInput',
  definition(t) {
    t.list.nonNull.field('connect', { type: ItemWhereUniqueInput })
    t.list.nonNull.field('create', { type: ItemCreateWithoutInboxOwnerInput })
  },
})
export const ItemCreateWithoutCollectionInput = inputObjectType({
  name: 'ItemCreateWithoutCollectionInput',
  definition(t) {
    t.string('author')
    t.string('comment')
    t.field('createdAt', { type: DateTime })
    t.string('description')
    t.string('id')
    t.string('imageUrl')
    t.field('inboxOwner', { type: UserCreateOneWithoutInboxedItemsInput })
    t.boolean('isDeleted')
    t.string('meta')
    t.int('position')
    t.string('productUrl')
    t.string('provider')
    t.nonNull.string('title')
    t.nonNull.field('type', { type: ItemType })
    t.field('updatedAt', { type: DateTime })
  },
})
export const ItemCreateWithoutInboxOwnerInput = inputObjectType({
  name: 'ItemCreateWithoutInboxOwnerInput',
  definition(t) {
    t.string('author')
    t.field('collection', { type: CollectionCreateOneWithoutItemsInput })
    t.string('comment')
    t.field('createdAt', { type: DateTime })
    t.string('description')
    t.string('id')
    t.string('imageUrl')
    t.boolean('isDeleted')
    t.string('meta')
    t.int('position')
    t.string('productUrl')
    t.string('provider')
    t.nonNull.string('title')
    t.nonNull.field('type', { type: ItemType })
    t.field('updatedAt', { type: DateTime })
  },
})
export const ItemFilter = inputObjectType({
  name: 'ItemFilter',
  definition(t) {
    t.field('every', { type: ItemWhereInput })
    t.field('none', { type: ItemWhereInput })
    t.field('some', { type: ItemWhereInput })
  },
})
export const ItemScalarWhereInput = inputObjectType({
  name: 'ItemScalarWhereInput',
  definition(t) {
    t.list.nonNull.field('AND', { type: ItemScalarWhereInput })
    t.field('author', { type: NullableStringFilter })
    t.field('collectionId', { type: NullableStringFilter })
    t.field('comment', { type: NullableStringFilter })
    t.field('createdAt', { type: DateTimeFilter })
    t.field('description', { type: NullableStringFilter })
    t.field('id', { type: StringFilter })
    t.field('imageUrl', { type: NullableStringFilter })
    t.field('inboxOwnerId', { type: NullableStringFilter })
    t.field('isDeleted', { type: BooleanFilter })
    t.field('meta', { type: NullableStringFilter })
    t.list.nonNull.field('NOT', { type: ItemScalarWhereInput })
    t.list.nonNull.field('OR', { type: ItemScalarWhereInput })
    t.field('position', { type: IntFilter })
    t.field('productUrl', { type: NullableStringFilter })
    t.field('provider', { type: NullableStringFilter })
    t.field('title', { type: StringFilter })
    t.field('type', { type: ItemType })
    t.field('updatedAt', { type: DateTimeFilter })
  },
})
export const ItemUpdateInput = inputObjectType({
  name: 'ItemUpdateInput',
  definition(t) {
    t.string('author')
    t.field('collection', { type: CollectionUpdateOneWithoutItemsInput })
    t.string('comment')
    t.field('createdAt', { type: DateTime })
    t.string('description')
    t.string('id')
    t.string('imageUrl')
    t.field('inboxOwner', { type: UserUpdateOneWithoutInboxedItemsInput })
    t.boolean('isDeleted')
    t.string('meta')
    t.int('position')
    t.string('productUrl')
    t.string('provider')
    t.string('title')
    t.field('type', { type: ItemType })
    t.field('updatedAt', { type: DateTime })
  },
})
export const ItemUpdateManyDataInput = inputObjectType({
  name: 'ItemUpdateManyDataInput',
  definition(t) {
    t.string('author')
    t.string('comment')
    t.field('createdAt', { type: DateTime })
    t.string('description')
    t.string('id')
    t.string('imageUrl')
    t.boolean('isDeleted')
    t.string('meta')
    t.int('position')
    t.string('productUrl')
    t.string('provider')
    t.string('title')
    t.field('type', { type: ItemType })
    t.field('updatedAt', { type: DateTime })
  },
})
export const ItemUpdateManyWithWhereNestedInput = inputObjectType({
  name: 'ItemUpdateManyWithWhereNestedInput',
  definition(t) {
    t.nonNull.field('data', { type: ItemUpdateManyDataInput })
    t.nonNull.field('where', { type: ItemScalarWhereInput })
  },
})
export const ItemUpdateManyWithoutCollectionInput = inputObjectType({
  name: 'ItemUpdateManyWithoutCollectionInput',
  definition(t) {
    t.list.nonNull.field('connect', { type: ItemWhereUniqueInput })
    t.list.nonNull.field('create', { type: ItemCreateWithoutCollectionInput })
    t.list.nonNull.field('delete', { type: ItemWhereUniqueInput })
    t.list.nonNull.field('deleteMany', { type: ItemScalarWhereInput })
    t.list.nonNull.field('disconnect', { type: ItemWhereUniqueInput })
    t.list.nonNull.field('set', { type: ItemWhereUniqueInput })
    t.list.nonNull.field('update', {
      type: ItemUpdateWithWhereUniqueWithoutCollectionInput,
    })
    t.list.nonNull.field('updateMany', {
      type: ItemUpdateManyWithWhereNestedInput,
    })
    t.list.nonNull.field('upsert', {
      type: ItemUpsertWithWhereUniqueWithoutCollectionInput,
    })
  },
})
export const ItemUpdateManyWithoutInboxOwnerInput = inputObjectType({
  name: 'ItemUpdateManyWithoutInboxOwnerInput',
  definition(t) {
    t.list.nonNull.field('connect', { type: ItemWhereUniqueInput })
    t.list.nonNull.field('create', { type: ItemCreateWithoutInboxOwnerInput })
    t.list.nonNull.field('delete', { type: ItemWhereUniqueInput })
    t.list.nonNull.field('deleteMany', { type: ItemScalarWhereInput })
    t.list.nonNull.field('disconnect', { type: ItemWhereUniqueInput })
    t.list.nonNull.field('set', { type: ItemWhereUniqueInput })
    t.list.nonNull.field('update', {
      type: ItemUpdateWithWhereUniqueWithoutInboxOwnerInput,
    })
    t.list.nonNull.field('updateMany', {
      type: ItemUpdateManyWithWhereNestedInput,
    })
    t.list.nonNull.field('upsert', {
      type: ItemUpsertWithWhereUniqueWithoutInboxOwnerInput,
    })
  },
})
export const ItemUpdateWithWhereUniqueWithoutCollectionInput = inputObjectType({
  name: 'ItemUpdateWithWhereUniqueWithoutCollectionInput',
  definition(t) {
    t.nonNull.field('data', { type: ItemUpdateWithoutCollectionDataInput })
    t.nonNull.field('where', { type: ItemWhereUniqueInput })
  },
})
export const ItemUpdateWithWhereUniqueWithoutInboxOwnerInput = inputObjectType({
  name: 'ItemUpdateWithWhereUniqueWithoutInboxOwnerInput',
  definition(t) {
    t.nonNull.field('data', { type: ItemUpdateWithoutInboxOwnerDataInput })
    t.nonNull.field('where', { type: ItemWhereUniqueInput })
  },
})
export const ItemUpdateWithoutCollectionDataInput = inputObjectType({
  name: 'ItemUpdateWithoutCollectionDataInput',
  definition(t) {
    t.string('author')
    t.string('comment')
    t.field('createdAt', { type: DateTime })
    t.string('description')
    t.string('id')
    t.string('imageUrl')
    t.field('inboxOwner', { type: UserUpdateOneWithoutInboxedItemsInput })
    t.boolean('isDeleted')
    t.string('meta')
    t.int('position')
    t.string('productUrl')
    t.string('provider')
    t.string('title')
    t.field('type', { type: ItemType })
    t.field('updatedAt', { type: DateTime })
  },
})
export const ItemUpdateWithoutInboxOwnerDataInput = inputObjectType({
  name: 'ItemUpdateWithoutInboxOwnerDataInput',
  definition(t) {
    t.string('author')
    t.field('collection', { type: CollectionUpdateOneWithoutItemsInput })
    t.string('comment')
    t.field('createdAt', { type: DateTime })
    t.string('description')
    t.string('id')
    t.string('imageUrl')
    t.boolean('isDeleted')
    t.string('meta')
    t.int('position')
    t.string('productUrl')
    t.string('provider')
    t.string('title')
    t.field('type', { type: ItemType })
    t.field('updatedAt', { type: DateTime })
  },
})
export const ItemUpsertWithWhereUniqueWithoutCollectionInput = inputObjectType({
  name: 'ItemUpsertWithWhereUniqueWithoutCollectionInput',
  definition(t) {
    t.nonNull.field('create', { type: ItemCreateWithoutCollectionInput })
    t.nonNull.field('update', { type: ItemUpdateWithoutCollectionDataInput })
    t.nonNull.field('where', { type: ItemWhereUniqueInput })
  },
})
export const ItemUpsertWithWhereUniqueWithoutInboxOwnerInput = inputObjectType({
  name: 'ItemUpsertWithWhereUniqueWithoutInboxOwnerInput',
  definition(t) {
    t.nonNull.field('create', { type: ItemCreateWithoutInboxOwnerInput })
    t.nonNull.field('update', { type: ItemUpdateWithoutInboxOwnerDataInput })
    t.nonNull.field('where', { type: ItemWhereUniqueInput })
  },
})
export const ItemWhereInput = inputObjectType({
  name: 'ItemWhereInput',
  definition(t) {
    t.list.nonNull.field('AND', { type: ItemWhereInput })
    t.field('author', { type: NullableStringFilter })
    t.field('collection', { type: CollectionWhereInput })
    t.field('collectionId', { type: NullableStringFilter })
    t.field('comment', { type: NullableStringFilter })
    t.field('createdAt', { type: DateTimeFilter })
    t.field('description', { type: NullableStringFilter })
    t.field('id', { type: StringFilter })
    t.field('imageUrl', { type: NullableStringFilter })
    t.field('inboxOwner', { type: UserWhereInput })
    t.field('inboxOwnerId', { type: NullableStringFilter })
    t.field('isDeleted', { type: BooleanFilter })
    t.field('meta', { type: NullableStringFilter })
    t.list.nonNull.field('NOT', { type: ItemWhereInput })
    t.list.nonNull.field('OR', { type: ItemWhereInput })
    t.field('position', { type: IntFilter })
    t.field('productUrl', { type: NullableStringFilter })
    t.field('provider', { type: NullableStringFilter })
    t.field('title', { type: StringFilter })
    t.field('type', { type: ItemType })
    t.field('updatedAt', { type: DateTimeFilter })
  },
})
export const ItemWhereUniqueInput = inputObjectType({
  name: 'ItemWhereUniqueInput',
  definition(t) {
    t.string('id')
  },
})
export const NullableStringFilter = inputObjectType({
  name: 'NullableStringFilter',
  definition(t) {
    t.string('contains')
    t.string('endsWith')
    t.string('equals')
    t.string('gt')
    t.string('gte')
    t.list.nonNull.string('in')
    t.string('lt')
    t.string('lte')
    t.string('not')
    t.list.nonNull.string('notIn')
    t.string('startsWith')
  },
})
export const QueryCollectionsOrderByInput = inputObjectType({
  name: 'QueryCollectionsOrderByInput',
  definition(t) {
    t.field('createdAt', { type: OrderByArg })
  },
})
export const QueryCollectionsWhereInput = inputObjectType({
  name: 'QueryCollectionsWhereInput',
  definition(t) {
    t.field('isDeleted', { type: BooleanFilter })
    t.field('owner', { type: UserWhereInput })
    t.field('section', { type: SectionWhereInput })
  },
})
export const QueryItemsOrderByInput = inputObjectType({
  name: 'QueryItemsOrderByInput',
  definition(t) {
    t.field('position', { type: OrderByArg })
  },
})
export const QueryItemsWhereInput = inputObjectType({
  name: 'QueryItemsWhereInput',
  definition(t) {
    t.field('collection', { type: CollectionWhereInput })
    t.field('isDeleted', { type: BooleanFilter })
  },
})
export const QuerySectionsOrderByInput = inputObjectType({
  name: 'QuerySectionsOrderByInput',
  definition(t) {
    t.field('createdAt', { type: OrderByArg })
  },
})
export const QuerySectionsWhereInput = inputObjectType({
  name: 'QuerySectionsWhereInput',
  definition(t) {
    t.field('index', { type: IntFilter })
    t.field('isDeleted', { type: BooleanFilter })
    t.field('owner', { type: UserWhereInput })
  },
})
export const SectionCollectionsOrderByInput = inputObjectType({
  name: 'SectionCollectionsOrderByInput',
  definition(t) {
    t.field('createdAt', { type: OrderByArg })
    t.field('updatedAt', { type: OrderByArg })
  },
})
export const SectionCollectionsWhereInput = inputObjectType({
  name: 'SectionCollectionsWhereInput',
  definition(t) {
    t.field('isDeleted', { type: BooleanFilter })
  },
})
export const SectionCreateManyWithoutOwnerInput = inputObjectType({
  name: 'SectionCreateManyWithoutOwnerInput',
  definition(t) {
    t.list.nonNull.field('connect', { type: SectionWhereUniqueInput })
    t.list.nonNull.field('create', { type: SectionCreateWithoutOwnerInput })
  },
})
export const SectionCreateOneWithoutCollectionsInput = inputObjectType({
  name: 'SectionCreateOneWithoutCollectionsInput',
  definition(t) {
    t.field('connect', { type: SectionWhereUniqueInput })
    t.field('create', { type: SectionCreateWithoutCollectionsInput })
  },
})
export const SectionCreateWithoutCollectionsInput = inputObjectType({
  name: 'SectionCreateWithoutCollectionsInput',
  definition(t) {
    t.field('createdAt', { type: DateTime })
    t.string('id')
    t.int('index')
    t.boolean('isDeleted')
    t.boolean('isExpanded')
    t.string('name')
    t.nonNull.field('owner', { type: UserCreateOneWithoutSectionsInput })
    t.nonNull.string('slug')
    t.field('updatedAt', { type: DateTime })
  },
})
export const SectionCreateWithoutOwnerInput = inputObjectType({
  name: 'SectionCreateWithoutOwnerInput',
  definition(t) {
    t.field('collections', { type: CollectionCreateManyWithoutSectionInput })
    t.field('createdAt', { type: DateTime })
    t.string('id')
    t.int('index')
    t.boolean('isDeleted')
    t.boolean('isExpanded')
    t.string('name')
    t.nonNull.string('slug')
    t.field('updatedAt', { type: DateTime })
  },
})
export const SectionFilter = inputObjectType({
  name: 'SectionFilter',
  definition(t) {
    t.field('every', { type: SectionWhereInput })
    t.field('none', { type: SectionWhereInput })
    t.field('some', { type: SectionWhereInput })
  },
})
export const SectionScalarWhereInput = inputObjectType({
  name: 'SectionScalarWhereInput',
  definition(t) {
    t.list.nonNull.field('AND', { type: SectionScalarWhereInput })
    t.field('collections', { type: CollectionFilter })
    t.field('createdAt', { type: DateTimeFilter })
    t.field('id', { type: StringFilter })
    t.field('index', { type: IntFilter })
    t.field('isDeleted', { type: BooleanFilter })
    t.field('isExpanded', { type: BooleanFilter })
    t.field('name', { type: NullableStringFilter })
    t.list.nonNull.field('NOT', { type: SectionScalarWhereInput })
    t.list.nonNull.field('OR', { type: SectionScalarWhereInput })
    t.field('ownerId', { type: StringFilter })
    t.field('slug', { type: StringFilter })
    t.field('updatedAt', { type: DateTimeFilter })
  },
})
export const SectionUpdateInput = inputObjectType({
  name: 'SectionUpdateInput',
  definition(t) {
    t.field('collections', { type: CollectionUpdateManyWithoutSectionInput })
    t.field('createdAt', { type: DateTime })
    t.string('id')
    t.int('index')
    t.boolean('isDeleted')
    t.boolean('isExpanded')
    t.string('name')
    t.field('owner', { type: UserUpdateOneRequiredWithoutSectionsInput })
    t.string('slug')
    t.field('updatedAt', { type: DateTime })
  },
})
export const SectionUpdateManyDataInput = inputObjectType({
  name: 'SectionUpdateManyDataInput',
  definition(t) {
    t.field('createdAt', { type: DateTime })
    t.string('id')
    t.int('index')
    t.boolean('isDeleted')
    t.boolean('isExpanded')
    t.string('name')
    t.string('slug')
    t.field('updatedAt', { type: DateTime })
  },
})
export const SectionUpdateManyWithWhereNestedInput = inputObjectType({
  name: 'SectionUpdateManyWithWhereNestedInput',
  definition(t) {
    t.nonNull.field('data', { type: SectionUpdateManyDataInput })
    t.nonNull.field('where', { type: SectionScalarWhereInput })
  },
})
export const SectionUpdateManyWithoutOwnerInput = inputObjectType({
  name: 'SectionUpdateManyWithoutOwnerInput',
  definition(t) {
    t.list.nonNull.field('connect', { type: SectionWhereUniqueInput })
    t.list.nonNull.field('create', { type: SectionCreateWithoutOwnerInput })
    t.list.nonNull.field('delete', { type: SectionWhereUniqueInput })
    t.list.nonNull.field('deleteMany', { type: SectionScalarWhereInput })
    t.list.nonNull.field('disconnect', { type: SectionWhereUniqueInput })
    t.list.nonNull.field('set', { type: SectionWhereUniqueInput })
    t.list.nonNull.field('update', {
      type: SectionUpdateWithWhereUniqueWithoutOwnerInput,
    })
    t.list.nonNull.field('updateMany', {
      type: SectionUpdateManyWithWhereNestedInput,
    })
    t.list.nonNull.field('upsert', {
      type: SectionUpsertWithWhereUniqueWithoutOwnerInput,
    })
  },
})
export const SectionUpdateOneRequiredWithoutCollectionsInput = inputObjectType({
  name: 'SectionUpdateOneRequiredWithoutCollectionsInput',
  definition(t) {
    t.field('connect', { type: SectionWhereUniqueInput })
    t.field('create', { type: SectionCreateWithoutCollectionsInput })
    t.field('update', { type: SectionUpdateWithoutCollectionsDataInput })
    t.field('upsert', { type: SectionUpsertWithoutCollectionsInput })
  },
})
export const SectionUpdateWithWhereUniqueWithoutOwnerInput = inputObjectType({
  name: 'SectionUpdateWithWhereUniqueWithoutOwnerInput',
  definition(t) {
    t.nonNull.field('data', { type: SectionUpdateWithoutOwnerDataInput })
    t.nonNull.field('where', { type: SectionWhereUniqueInput })
  },
})
export const SectionUpdateWithoutCollectionsDataInput = inputObjectType({
  name: 'SectionUpdateWithoutCollectionsDataInput',
  definition(t) {
    t.field('createdAt', { type: DateTime })
    t.string('id')
    t.int('index')
    t.boolean('isDeleted')
    t.boolean('isExpanded')
    t.string('name')
    t.field('owner', { type: UserUpdateOneRequiredWithoutSectionsInput })
    t.string('slug')
    t.field('updatedAt', { type: DateTime })
  },
})
export const SectionUpdateWithoutOwnerDataInput = inputObjectType({
  name: 'SectionUpdateWithoutOwnerDataInput',
  definition(t) {
    t.field('collections', { type: CollectionUpdateManyWithoutSectionInput })
    t.field('createdAt', { type: DateTime })
    t.string('id')
    t.int('index')
    t.boolean('isDeleted')
    t.boolean('isExpanded')
    t.string('name')
    t.string('slug')
    t.field('updatedAt', { type: DateTime })
  },
})
export const SectionUpsertWithWhereUniqueWithoutOwnerInput = inputObjectType({
  name: 'SectionUpsertWithWhereUniqueWithoutOwnerInput',
  definition(t) {
    t.nonNull.field('create', { type: SectionCreateWithoutOwnerInput })
    t.nonNull.field('update', { type: SectionUpdateWithoutOwnerDataInput })
    t.nonNull.field('where', { type: SectionWhereUniqueInput })
  },
})
export const SectionUpsertWithoutCollectionsInput = inputObjectType({
  name: 'SectionUpsertWithoutCollectionsInput',
  definition(t) {
    t.nonNull.field('create', { type: SectionCreateWithoutCollectionsInput })
    t.nonNull.field('update', {
      type: SectionUpdateWithoutCollectionsDataInput,
    })
  },
})
export const SectionWhereInput = inputObjectType({
  name: 'SectionWhereInput',
  definition(t) {
    t.list.nonNull.field('AND', { type: SectionWhereInput })
    t.field('collections', { type: CollectionFilter })
    t.field('createdAt', { type: DateTimeFilter })
    t.field('id', { type: StringFilter })
    t.field('index', { type: IntFilter })
    t.field('isDeleted', { type: BooleanFilter })
    t.field('isExpanded', { type: BooleanFilter })
    t.field('name', { type: NullableStringFilter })
    t.list.nonNull.field('NOT', { type: SectionWhereInput })
    t.list.nonNull.field('OR', { type: SectionWhereInput })
    t.field('owner', { type: UserWhereInput })
    t.field('ownerId', { type: StringFilter })
    t.field('slug', { type: StringFilter })
    t.field('updatedAt', { type: DateTimeFilter })
  },
})
export const SectionWhereUniqueInput = inputObjectType({
  name: 'SectionWhereUniqueInput',
  definition(t) {
    t.string('id')
  },
})
export const StringFilter = inputObjectType({
  name: 'StringFilter',
  definition(t) {
    t.string('contains')
    t.string('endsWith')
    t.string('equals')
    t.string('gt')
    t.string('gte')
    t.list.nonNull.string('in')
    t.string('lt')
    t.string('lte')
    t.string('not')
    t.list.nonNull.string('notIn')
    t.string('startsWith')
  },
})
export const UserCreateInput = inputObjectType({
  name: 'UserCreateInput',
  definition(t) {
    t.string('authUserId')
    t.string('biography')
    t.field('collections', { type: CollectionCreateManyWithoutOwnerInput })
    t.field('createdAt', { type: DateTime })
    t.nonNull.string('firstname')
    t.string('github')
    t.string('id')
    t.field('inboxedItems', { type: ItemCreateManyWithoutInboxOwnerInput })
    t.string('label')
    t.string('linkedin')
    t.string('mail')
    t.nonNull.string('pictureUrl')
    t.field('sections', { type: SectionCreateManyWithoutOwnerInput })
    t.nonNull.string('slug')
    t.field('updatedAt', { type: DateTime })
    t.string('website')
    t.string('youtube')
  },
})
export const UserCreateOneWithoutCollectionsInput = inputObjectType({
  name: 'UserCreateOneWithoutCollectionsInput',
  definition(t) {
    t.field('connect', { type: UserWhereUniqueInput })
    t.field('create', { type: UserCreateWithoutCollectionsInput })
  },
})
export const UserCreateOneWithoutInboxedItemsInput = inputObjectType({
  name: 'UserCreateOneWithoutInboxedItemsInput',
  definition(t) {
    t.field('connect', { type: UserWhereUniqueInput })
    t.field('create', { type: UserCreateWithoutInboxedItemsInput })
  },
})
export const UserCreateOneWithoutSectionsInput = inputObjectType({
  name: 'UserCreateOneWithoutSectionsInput',
  definition(t) {
    t.field('connect', { type: UserWhereUniqueInput })
    t.field('create', { type: UserCreateWithoutSectionsInput })
  },
})
export const UserCreateWithoutCollectionsInput = inputObjectType({
  name: 'UserCreateWithoutCollectionsInput',
  definition(t) {
    t.string('authUserId')
    t.string('biography')
    t.field('createdAt', { type: DateTime })
    t.nonNull.string('firstname')
    t.string('github')
    t.string('id')
    t.field('inboxedItems', { type: ItemCreateManyWithoutInboxOwnerInput })
    t.string('label')
    t.string('linkedin')
    t.string('mail')
    t.nonNull.string('pictureUrl')
    t.field('sections', { type: SectionCreateManyWithoutOwnerInput })
    t.nonNull.string('slug')
    t.field('updatedAt', { type: DateTime })
    t.string('website')
    t.string('youtube')
  },
})
export const UserCreateWithoutInboxedItemsInput = inputObjectType({
  name: 'UserCreateWithoutInboxedItemsInput',
  definition(t) {
    t.string('authUserId')
    t.string('biography')
    t.field('collections', { type: CollectionCreateManyWithoutOwnerInput })
    t.field('createdAt', { type: DateTime })
    t.nonNull.string('firstname')
    t.string('github')
    t.string('id')
    t.string('label')
    t.string('linkedin')
    t.string('mail')
    t.nonNull.string('pictureUrl')
    t.field('sections', { type: SectionCreateManyWithoutOwnerInput })
    t.nonNull.string('slug')
    t.field('updatedAt', { type: DateTime })
    t.string('website')
    t.string('youtube')
  },
})
export const UserCreateWithoutSectionsInput = inputObjectType({
  name: 'UserCreateWithoutSectionsInput',
  definition(t) {
    t.string('authUserId')
    t.string('biography')
    t.field('collections', { type: CollectionCreateManyWithoutOwnerInput })
    t.field('createdAt', { type: DateTime })
    t.nonNull.string('firstname')
    t.string('github')
    t.string('id')
    t.field('inboxedItems', { type: ItemCreateManyWithoutInboxOwnerInput })
    t.string('label')
    t.string('linkedin')
    t.string('mail')
    t.nonNull.string('pictureUrl')
    t.nonNull.string('slug')
    t.field('updatedAt', { type: DateTime })
    t.string('website')
    t.string('youtube')
  },
})
export const UserUpdateInput = inputObjectType({
  name: 'UserUpdateInput',
  definition(t) {
    t.string('authUserId')
    t.string('biography')
    t.field('collections', { type: CollectionUpdateManyWithoutOwnerInput })
    t.field('createdAt', { type: DateTime })
    t.string('firstname')
    t.string('github')
    t.string('id')
    t.field('inboxedItems', { type: ItemUpdateManyWithoutInboxOwnerInput })
    t.string('label')
    t.string('linkedin')
    t.string('mail')
    t.string('pictureUrl')
    t.field('sections', { type: SectionUpdateManyWithoutOwnerInput })
    t.string('slug')
    t.field('updatedAt', { type: DateTime })
    t.string('website')
    t.string('youtube')
  },
})
export const UserUpdateOneRequiredWithoutCollectionsInput = inputObjectType({
  name: 'UserUpdateOneRequiredWithoutCollectionsInput',
  definition(t) {
    t.field('connect', { type: UserWhereUniqueInput })
    t.field('create', { type: UserCreateWithoutCollectionsInput })
    t.field('update', { type: UserUpdateWithoutCollectionsDataInput })
    t.field('upsert', { type: UserUpsertWithoutCollectionsInput })
  },
})
export const UserUpdateOneRequiredWithoutSectionsInput = inputObjectType({
  name: 'UserUpdateOneRequiredWithoutSectionsInput',
  definition(t) {
    t.field('connect', { type: UserWhereUniqueInput })
    t.field('create', { type: UserCreateWithoutSectionsInput })
    t.field('update', { type: UserUpdateWithoutSectionsDataInput })
    t.field('upsert', { type: UserUpsertWithoutSectionsInput })
  },
})
export const UserUpdateOneWithoutInboxedItemsInput = inputObjectType({
  name: 'UserUpdateOneWithoutInboxedItemsInput',
  definition(t) {
    t.field('connect', { type: UserWhereUniqueInput })
    t.field('create', { type: UserCreateWithoutInboxedItemsInput })
    t.boolean('delete')
    t.boolean('disconnect')
    t.field('update', { type: UserUpdateWithoutInboxedItemsDataInput })
    t.field('upsert', { type: UserUpsertWithoutInboxedItemsInput })
  },
})
export const UserUpdateWithoutCollectionsDataInput = inputObjectType({
  name: 'UserUpdateWithoutCollectionsDataInput',
  definition(t) {
    t.string('authUserId')
    t.string('biography')
    t.field('createdAt', { type: DateTime })
    t.string('firstname')
    t.string('github')
    t.string('id')
    t.field('inboxedItems', { type: ItemUpdateManyWithoutInboxOwnerInput })
    t.string('label')
    t.string('linkedin')
    t.string('mail')
    t.string('pictureUrl')
    t.field('sections', { type: SectionUpdateManyWithoutOwnerInput })
    t.string('slug')
    t.field('updatedAt', { type: DateTime })
    t.string('website')
    t.string('youtube')
  },
})
export const UserUpdateWithoutInboxedItemsDataInput = inputObjectType({
  name: 'UserUpdateWithoutInboxedItemsDataInput',
  definition(t) {
    t.string('authUserId')
    t.string('biography')
    t.field('collections', { type: CollectionUpdateManyWithoutOwnerInput })
    t.field('createdAt', { type: DateTime })
    t.string('firstname')
    t.string('github')
    t.string('id')
    t.string('label')
    t.string('linkedin')
    t.string('mail')
    t.string('pictureUrl')
    t.field('sections', { type: SectionUpdateManyWithoutOwnerInput })
    t.string('slug')
    t.field('updatedAt', { type: DateTime })
    t.string('website')
    t.string('youtube')
  },
})
export const UserUpdateWithoutSectionsDataInput = inputObjectType({
  name: 'UserUpdateWithoutSectionsDataInput',
  definition(t) {
    t.string('authUserId')
    t.string('biography')
    t.field('collections', { type: CollectionUpdateManyWithoutOwnerInput })
    t.field('createdAt', { type: DateTime })
    t.string('firstname')
    t.string('github')
    t.string('id')
    t.field('inboxedItems', { type: ItemUpdateManyWithoutInboxOwnerInput })
    t.string('label')
    t.string('linkedin')
    t.string('mail')
    t.string('pictureUrl')
    t.string('slug')
    t.field('updatedAt', { type: DateTime })
    t.string('website')
    t.string('youtube')
  },
})
export const UserUpsertWithoutCollectionsInput = inputObjectType({
  name: 'UserUpsertWithoutCollectionsInput',
  definition(t) {
    t.nonNull.field('create', { type: UserCreateWithoutCollectionsInput })
    t.nonNull.field('update', { type: UserUpdateWithoutCollectionsDataInput })
  },
})
export const UserUpsertWithoutInboxedItemsInput = inputObjectType({
  name: 'UserUpsertWithoutInboxedItemsInput',
  definition(t) {
    t.nonNull.field('create', { type: UserCreateWithoutInboxedItemsInput })
    t.nonNull.field('update', { type: UserUpdateWithoutInboxedItemsDataInput })
  },
})
export const UserUpsertWithoutSectionsInput = inputObjectType({
  name: 'UserUpsertWithoutSectionsInput',
  definition(t) {
    t.nonNull.field('create', { type: UserCreateWithoutSectionsInput })
    t.nonNull.field('update', { type: UserUpdateWithoutSectionsDataInput })
  },
})
export const UserWhereInput = inputObjectType({
  name: 'UserWhereInput',
  definition(t) {
    t.list.nonNull.field('AND', { type: UserWhereInput })
    t.field('authUserId', { type: NullableStringFilter })
    t.field('biography', { type: NullableStringFilter })
    t.field('collections', { type: CollectionFilter })
    t.field('createdAt', { type: DateTimeFilter })
    t.field('firstname', { type: StringFilter })
    t.field('github', { type: NullableStringFilter })
    t.field('id', { type: StringFilter })
    t.field('inboxedItems', { type: ItemFilter })
    t.field('label', { type: NullableStringFilter })
    t.field('linkedin', { type: NullableStringFilter })
    t.field('mail', { type: NullableStringFilter })
    t.list.nonNull.field('NOT', { type: UserWhereInput })
    t.list.nonNull.field('OR', { type: UserWhereInput })
    t.field('pictureUrl', { type: StringFilter })
    t.field('sections', { type: SectionFilter })
    t.field('slug', { type: StringFilter })
    t.field('updatedAt', { type: DateTimeFilter })
    t.field('website', { type: NullableStringFilter })
    t.field('youtube', { type: NullableStringFilter })
  },
})
export const UserWhereUniqueInput = inputObjectType({
  name: 'UserWhereUniqueInput',
  definition(t) {
    t.string('authUserId')
    t.string('id')
    t.string('slug')
  },
})

export const ItemType = enumType({
  name: 'ItemType',
  members: [
    'album',
    'article',
    'book',
    'movie',
    'people',
    'podcast',
    'repository',
    'video',
    'website',
  ],
})

export const OrderByArg = enumType({
  name: 'OrderByArg',
  members: ['asc', 'desc'],
})

export const DateTime = scalarType({
  name: 'DateTime',
  serialize() {
    /* Todo */
  },
  parseValue() {
    /* Todo */
  },
  parseLiteral() {
    /* Todo */
  },
})
