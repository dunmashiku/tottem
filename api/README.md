# Blog

### Try It

Just go to step 2 and skip the docker setup if you already have a postgres db server running locally

```
docker run --detach --publish 5432:5432 -e POSTGRES_PASSWORD=postgres --name 'nexus-schema-plugin-prisma-blog' postgres:10.12
```

```
yarn -s prisma generate
yarn -s prisma migrate reset --preview-feature
```

```
yarn && yarn dev
```
