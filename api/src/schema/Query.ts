import { arg, intArg, nonNull, queryType, stringArg } from 'nexus'
import { Context } from '../context'
import {
  GoogleBookSearch,
  MovieDBSearch,
  SpotifySearch,
} from '../parsers/searchers'
import {
  Collection,
  CollectionWhereUniqueInput,
  Inbox,
  Item,
  ItemWhereUniqueInput,
  QueryCollectionsOrderByInput,
  QueryCollectionsWhereInput,
  QueryItemsOrderByInput,
  QueryItemsWhereInput,
  QuerySectionsOrderByInput,
  QuerySectionsWhereInput,
  Section,
  SectionWhereUniqueInput,
  User,
  UserWhereUniqueInput,
} from './Object'

export const Query = queryType({
  definition(t) {
    t.field('user', {
      type: User,
      args: {
        where: arg({ type: nonNull(UserWhereUniqueInput) }),
      },
    })
    t.field('collection', {
      type: Collection,
      args: {
        where: arg({ type: nonNull(CollectionWhereUniqueInput) }),
      },
    })
    t.field('section', {
      type: Section,
      args: {
        where: arg({ type: nonNull(SectionWhereUniqueInput) }),
      },
    })
    t.nonNull.list.nonNull.field('items', {
      type: Item,
      args: {
        after: arg({ type: ItemWhereUniqueInput }),
        before: arg({ type: ItemWhereUniqueInput }),
        first: intArg(),
        last: intArg(),
        orderBy: arg({ type: QueryItemsOrderByInput }),
        skip: intArg(),
        where: arg({ type: QueryItemsWhereInput }),
      },
    })
    t.nonNull.list.nonNull.field('sections', {
      type: Section,
      args: {
        after: arg({ type: SectionWhereUniqueInput }),
        before: arg({ type: SectionWhereUniqueInput }),
        first: intArg(),
        last: intArg(),
        orderBy: arg({ type: QuerySectionsOrderByInput }),
        skip: intArg(),
        where: arg({ type: QuerySectionsWhereInput }),
      },
    })
    t.nonNull.list.nonNull.field('collections', {
      type: Collection,
      args: {
        after: arg({ type: CollectionWhereUniqueInput }),
        before: arg({ type: CollectionWhereUniqueInput }),
        first: intArg(),
        last: intArg(),
        orderBy: arg({ type: QueryCollectionsOrderByInput }),
        skip: intArg(),
        where: arg({ type: QueryCollectionsWhereInput }),
      },
    })
    t.field('inbox', {
      type: Inbox,
      description: 'Inbox user relative content',
      resolve: (_, {}) => {
        return {}
      },
    })
    t.nonNull.list.nonNull.field('search', {
      type: 'SearchItem',
      args: {
        kind: nonNull(stringArg()),
        q: nonNull(stringArg()),
      },
      async resolve(_, { q, kind }, ctx: Context) {
        if (kind === 'movie') {
          const res = await MovieDBSearch(q, undefined, 'fr')
          return res.map(x => {
            return {
              id: x.id,
              title: x.title,
              author: x.release_date,
              type: 'movie',
            }
          })
        } else if (kind === 'book') {
          const res = await GoogleBookSearch(q)
          return res.items.map(x => {
            return {
              id: x.id,
              title: x.volumeInfo.title,
              author: x.volumeInfo.authors && x.volumeInfo.authors[0],
              type: 'book',
            }
          })
        } else if (kind === 'album') {
          const res = await SpotifySearch(q)
          return (
            res?.albums?.items?.map(x => {
              return {
                id: x.id,
                title: x.name,
                author: x.artists.map(artist => artist.name).join(', '),
                type: 'album',
              }
            }) || []
          )
        }
        return Promise.reject(`Kind ${kind} not supported`)
      },
    })
  },
})
