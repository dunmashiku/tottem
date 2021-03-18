import { makeSchema, connectionPlugin } from 'nexus'
import * as path from 'path'
import * as Objects from './Object'
import * as Query from './Query'
import * as Mutation from './Mutation'

export const schema = makeSchema({
  types: [Objects, Query, Mutation],
  plugins: [connectionPlugin()],
  outputs: {
    schema: __dirname + '/../schema.graphql',
    typegen: __dirname + '/../nexus.ts',
  },
  contextType: {
    module: require.resolve('../context'),
    export: 'Context',
  },
  sourceTypes: {
    modules: [
      {
        module: '@prisma/client',
        alias: 'prisma',
      },
    ],
  },
})
