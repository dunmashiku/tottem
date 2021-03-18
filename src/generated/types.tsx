import gql from 'graphql-tag'
import * as ApolloReactCommon from '@apollo/react-common'
import * as ApolloReactHooks from '@apollo/react-hooks'
export type Maybe<T> = T | undefined
export type Exact<T extends { [key: string]: unknown }> = {
    [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
    { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
    { [SubKey in K]: Maybe<T[SubKey]> }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: string
    String: string
    Boolean: boolean
    Int: number
    Float: number
    DateTime: any
}

export type BooleanFilter = {
    equals?: Maybe<Scalars['Boolean']>
    not?: Maybe<Scalars['Boolean']>
}

export type Breadcrumb = {
    __typename?: 'Breadcrumb'
    title: Scalars['String']
    href: Scalars['String']
    as: Scalars['String']
}

export type Collection = {
    __typename?: 'Collection'
    createdAt: Scalars['DateTime']
    detail?: Maybe<Scalars['String']>
    id: Scalars['String']
    isDeleted: Scalars['Boolean']
    items: Array<Item>
    name?: Maybe<Scalars['String']>
    owner: User
    section: Section
    slug: Scalars['String']
    updatedAt: Scalars['DateTime']
}

export type CollectionItemsArgs = {
    after?: Maybe<ItemWhereUniqueInput>
    before?: Maybe<ItemWhereUniqueInput>
    first?: Maybe<Scalars['Int']>
    last?: Maybe<Scalars['Int']>
    orderBy?: Maybe<CollectionItemsOrderByInput>
    skip?: Maybe<Scalars['Int']>
    where?: Maybe<CollectionItemsWhereInput>
}

export type CollectionCreateManyWithoutOwnerInput = {
    connect?: Maybe<Array<CollectionWhereUniqueInput>>
    create?: Maybe<Array<CollectionCreateWithoutOwnerInput>>
}

export type CollectionCreateManyWithoutSectionInput = {
    connect?: Maybe<Array<CollectionWhereUniqueInput>>
    create?: Maybe<Array<CollectionCreateWithoutSectionInput>>
}

export type CollectionCreateOneWithoutItemsInput = {
    connect?: Maybe<CollectionWhereUniqueInput>
    create?: Maybe<CollectionCreateWithoutItemsInput>
}

export type CollectionCreateWithoutItemsInput = {
    createdAt?: Maybe<Scalars['DateTime']>
    detail?: Maybe<Scalars['String']>
    id?: Maybe<Scalars['String']>
    isDeleted?: Maybe<Scalars['Boolean']>
    name?: Maybe<Scalars['String']>
    owner: UserCreateOneWithoutCollectionsInput
    section: SectionCreateOneWithoutCollectionsInput
    slug: Scalars['String']
    updatedAt?: Maybe<Scalars['DateTime']>
}

export type CollectionCreateWithoutOwnerInput = {
    createdAt?: Maybe<Scalars['DateTime']>
    detail?: Maybe<Scalars['String']>
    id?: Maybe<Scalars['String']>
    isDeleted?: Maybe<Scalars['Boolean']>
    items?: Maybe<ItemCreateManyWithoutCollectionInput>
    name?: Maybe<Scalars['String']>
    section: SectionCreateOneWithoutCollectionsInput
    slug: Scalars['String']
    updatedAt?: Maybe<Scalars['DateTime']>
}

export type CollectionCreateWithoutSectionInput = {
    createdAt?: Maybe<Scalars['DateTime']>
    detail?: Maybe<Scalars['String']>
    id?: Maybe<Scalars['String']>
    isDeleted?: Maybe<Scalars['Boolean']>
    items?: Maybe<ItemCreateManyWithoutCollectionInput>
    name?: Maybe<Scalars['String']>
    owner: UserCreateOneWithoutCollectionsInput
    slug: Scalars['String']
    updatedAt?: Maybe<Scalars['DateTime']>
}

export type CollectionFilter = {
    every?: Maybe<CollectionWhereInput>
    none?: Maybe<CollectionWhereInput>
    some?: Maybe<CollectionWhereInput>
}

export type CollectionItemsOrderByInput = {
    createdAt?: Maybe<OrderByArg>
    position?: Maybe<OrderByArg>
}

export type CollectionItemsWhereInput = {
    isDeleted?: Maybe<BooleanFilter>
}

export type CollectionScalarWhereInput = {
    AND?: Maybe<Array<CollectionScalarWhereInput>>
    createdAt?: Maybe<DateTimeFilter>
    detail?: Maybe<NullableStringFilter>
    id?: Maybe<StringFilter>
    isDeleted?: Maybe<BooleanFilter>
    items?: Maybe<ItemFilter>
    name?: Maybe<NullableStringFilter>
    NOT?: Maybe<Array<CollectionScalarWhereInput>>
    OR?: Maybe<Array<CollectionScalarWhereInput>>
    ownerId?: Maybe<StringFilter>
    sectionId?: Maybe<StringFilter>
    slug?: Maybe<StringFilter>
    updatedAt?: Maybe<DateTimeFilter>
}

export type CollectionUpdateInput = {
    createdAt?: Maybe<Scalars['DateTime']>
    detail?: Maybe<Scalars['String']>
    id?: Maybe<Scalars['String']>
    isDeleted?: Maybe<Scalars['Boolean']>
    items?: Maybe<ItemUpdateManyWithoutCollectionInput>
    name?: Maybe<Scalars['String']>
    owner?: Maybe<UserUpdateOneRequiredWithoutCollectionsInput>
    section?: Maybe<SectionUpdateOneRequiredWithoutCollectionsInput>
    slug?: Maybe<Scalars['String']>
    updatedAt?: Maybe<Scalars['DateTime']>
}

export type CollectionUpdateManyDataInput = {
    createdAt?: Maybe<Scalars['DateTime']>
    detail?: Maybe<Scalars['String']>
    id?: Maybe<Scalars['String']>
    isDeleted?: Maybe<Scalars['Boolean']>
    name?: Maybe<Scalars['String']>
    slug?: Maybe<Scalars['String']>
    updatedAt?: Maybe<Scalars['DateTime']>
}

export type CollectionUpdateManyWithoutOwnerInput = {
    connect?: Maybe<Array<CollectionWhereUniqueInput>>
    create?: Maybe<Array<CollectionCreateWithoutOwnerInput>>
    delete?: Maybe<Array<CollectionWhereUniqueInput>>
    deleteMany?: Maybe<Array<CollectionScalarWhereInput>>
    disconnect?: Maybe<Array<CollectionWhereUniqueInput>>
    set?: Maybe<Array<CollectionWhereUniqueInput>>
    update?: Maybe<Array<CollectionUpdateWithWhereUniqueWithoutOwnerInput>>
    updateMany?: Maybe<Array<CollectionUpdateManyWithWhereNestedInput>>
    upsert?: Maybe<Array<CollectionUpsertWithWhereUniqueWithoutOwnerInput>>
}

export type CollectionUpdateManyWithoutSectionInput = {
    connect?: Maybe<Array<CollectionWhereUniqueInput>>
    create?: Maybe<Array<CollectionCreateWithoutSectionInput>>
    delete?: Maybe<Array<CollectionWhereUniqueInput>>
    deleteMany?: Maybe<Array<CollectionScalarWhereInput>>
    disconnect?: Maybe<Array<CollectionWhereUniqueInput>>
    set?: Maybe<Array<CollectionWhereUniqueInput>>
    update?: Maybe<Array<CollectionUpdateWithWhereUniqueWithoutSectionInput>>
    updateMany?: Maybe<Array<CollectionUpdateManyWithWhereNestedInput>>
    upsert?: Maybe<Array<CollectionUpsertWithWhereUniqueWithoutSectionInput>>
}

export type CollectionUpdateManyWithWhereNestedInput = {
    data: CollectionUpdateManyDataInput
    where: CollectionScalarWhereInput
}

export type CollectionUpdateOneWithoutItemsInput = {
    connect?: Maybe<CollectionWhereUniqueInput>
    create?: Maybe<CollectionCreateWithoutItemsInput>
    delete?: Maybe<Scalars['Boolean']>
    disconnect?: Maybe<Scalars['Boolean']>
    update?: Maybe<CollectionUpdateWithoutItemsDataInput>
    upsert?: Maybe<CollectionUpsertWithoutItemsInput>
}

export type CollectionUpdateWithoutItemsDataInput = {
    createdAt?: Maybe<Scalars['DateTime']>
    detail?: Maybe<Scalars['String']>
    id?: Maybe<Scalars['String']>
    isDeleted?: Maybe<Scalars['Boolean']>
    name?: Maybe<Scalars['String']>
    owner?: Maybe<UserUpdateOneRequiredWithoutCollectionsInput>
    section?: Maybe<SectionUpdateOneRequiredWithoutCollectionsInput>
    slug?: Maybe<Scalars['String']>
    updatedAt?: Maybe<Scalars['DateTime']>
}

export type CollectionUpdateWithoutOwnerDataInput = {
    createdAt?: Maybe<Scalars['DateTime']>
    detail?: Maybe<Scalars['String']>
    id?: Maybe<Scalars['String']>
    isDeleted?: Maybe<Scalars['Boolean']>
    items?: Maybe<ItemUpdateManyWithoutCollectionInput>
    name?: Maybe<Scalars['String']>
    section?: Maybe<SectionUpdateOneRequiredWithoutCollectionsInput>
    slug?: Maybe<Scalars['String']>
    updatedAt?: Maybe<Scalars['DateTime']>
}

export type CollectionUpdateWithoutSectionDataInput = {
    createdAt?: Maybe<Scalars['DateTime']>
    detail?: Maybe<Scalars['String']>
    id?: Maybe<Scalars['String']>
    isDeleted?: Maybe<Scalars['Boolean']>
    items?: Maybe<ItemUpdateManyWithoutCollectionInput>
    name?: Maybe<Scalars['String']>
    owner?: Maybe<UserUpdateOneRequiredWithoutCollectionsInput>
    slug?: Maybe<Scalars['String']>
    updatedAt?: Maybe<Scalars['DateTime']>
}

export type CollectionUpdateWithWhereUniqueWithoutOwnerInput = {
    data: CollectionUpdateWithoutOwnerDataInput
    where: CollectionWhereUniqueInput
}

export type CollectionUpdateWithWhereUniqueWithoutSectionInput = {
    data: CollectionUpdateWithoutSectionDataInput
    where: CollectionWhereUniqueInput
}

export type CollectionUpsertWithoutItemsInput = {
    create: CollectionCreateWithoutItemsInput
    update: CollectionUpdateWithoutItemsDataInput
}

export type CollectionUpsertWithWhereUniqueWithoutOwnerInput = {
    create: CollectionCreateWithoutOwnerInput
    update: CollectionUpdateWithoutOwnerDataInput
    where: CollectionWhereUniqueInput
}

export type CollectionUpsertWithWhereUniqueWithoutSectionInput = {
    create: CollectionCreateWithoutSectionInput
    update: CollectionUpdateWithoutSectionDataInput
    where: CollectionWhereUniqueInput
}

export type CollectionWhereInput = {
    AND?: Maybe<Array<CollectionWhereInput>>
    createdAt?: Maybe<DateTimeFilter>
    detail?: Maybe<NullableStringFilter>
    id?: Maybe<StringFilter>
    isDeleted?: Maybe<BooleanFilter>
    items?: Maybe<ItemFilter>
    name?: Maybe<NullableStringFilter>
    NOT?: Maybe<Array<CollectionWhereInput>>
    OR?: Maybe<Array<CollectionWhereInput>>
    owner?: Maybe<UserWhereInput>
    ownerId?: Maybe<StringFilter>
    section?: Maybe<SectionWhereInput>
    sectionId?: Maybe<StringFilter>
    slug?: Maybe<StringFilter>
    updatedAt?: Maybe<DateTimeFilter>
}

export type CollectionWhereUniqueInput = {
    id?: Maybe<Scalars['String']>
    slug?: Maybe<Scalars['String']>
}

export type DateTimeFilter = {
    equals?: Maybe<Scalars['DateTime']>
    gt?: Maybe<Scalars['DateTime']>
    gte?: Maybe<Scalars['DateTime']>
    in?: Maybe<Array<Scalars['DateTime']>>
    lt?: Maybe<Scalars['DateTime']>
    lte?: Maybe<Scalars['DateTime']>
    not?: Maybe<Scalars['DateTime']>
    notIn?: Maybe<Array<Scalars['DateTime']>>
}

/** Inbox user relative content */
export type Inbox = {
    __typename?: 'Inbox'
    id?: Maybe<Scalars['String']>
    /** Non deleted items count in inbox */
    count?: Maybe<Scalars['Int']>
    items?: Maybe<Array<Maybe<Item>>>
}

export type IntFilter = {
    equals?: Maybe<Scalars['Int']>
    gt?: Maybe<Scalars['Int']>
    gte?: Maybe<Scalars['Int']>
    in?: Maybe<Array<Scalars['Int']>>
    lt?: Maybe<Scalars['Int']>
    lte?: Maybe<Scalars['Int']>
    not?: Maybe<Scalars['Int']>
    notIn?: Maybe<Array<Scalars['Int']>>
}

export type Item = {
    __typename?: 'Item'
    author?: Maybe<Scalars['String']>
    comment?: Maybe<Scalars['String']>
    createdAt: Scalars['DateTime']
    description?: Maybe<Scalars['String']>
    id: Scalars['String']
    imageUrl?: Maybe<Scalars['String']>
    isDeleted: Scalars['Boolean']
    meta?: Maybe<Scalars['String']>
    position: Scalars['Int']
    productUrl?: Maybe<Scalars['String']>
    provider?: Maybe<Scalars['String']>
    title: Scalars['String']
    type: ItemType
}

export type ItemCreateManyWithoutCollectionInput = {
    connect?: Maybe<Array<ItemWhereUniqueInput>>
    create?: Maybe<Array<ItemCreateWithoutCollectionInput>>
}

export type ItemCreateManyWithoutInboxOwnerInput = {
    connect?: Maybe<Array<ItemWhereUniqueInput>>
    create?: Maybe<Array<ItemCreateWithoutInboxOwnerInput>>
}

export type ItemCreateWithoutCollectionInput = {
    author?: Maybe<Scalars['String']>
    comment?: Maybe<Scalars['String']>
    createdAt?: Maybe<Scalars['DateTime']>
    description?: Maybe<Scalars['String']>
    id?: Maybe<Scalars['String']>
    imageUrl?: Maybe<Scalars['String']>
    inboxOwner?: Maybe<UserCreateOneWithoutInboxedItemsInput>
    isDeleted?: Maybe<Scalars['Boolean']>
    meta?: Maybe<Scalars['String']>
    position?: Maybe<Scalars['Int']>
    productUrl?: Maybe<Scalars['String']>
    provider?: Maybe<Scalars['String']>
    title: Scalars['String']
    type: ItemType
    updatedAt?: Maybe<Scalars['DateTime']>
}

export type ItemCreateWithoutInboxOwnerInput = {
    author?: Maybe<Scalars['String']>
    collection?: Maybe<CollectionCreateOneWithoutItemsInput>
    comment?: Maybe<Scalars['String']>
    createdAt?: Maybe<Scalars['DateTime']>
    description?: Maybe<Scalars['String']>
    id?: Maybe<Scalars['String']>
    imageUrl?: Maybe<Scalars['String']>
    isDeleted?: Maybe<Scalars['Boolean']>
    meta?: Maybe<Scalars['String']>
    position?: Maybe<Scalars['Int']>
    productUrl?: Maybe<Scalars['String']>
    provider?: Maybe<Scalars['String']>
    title: Scalars['String']
    type: ItemType
    updatedAt?: Maybe<Scalars['DateTime']>
}

export type ItemFilter = {
    every?: Maybe<ItemWhereInput>
    none?: Maybe<ItemWhereInput>
    some?: Maybe<ItemWhereInput>
}

export type ItemScalarWhereInput = {
    AND?: Maybe<Array<ItemScalarWhereInput>>
    author?: Maybe<NullableStringFilter>
    collectionId?: Maybe<NullableStringFilter>
    comment?: Maybe<NullableStringFilter>
    createdAt?: Maybe<DateTimeFilter>
    description?: Maybe<NullableStringFilter>
    id?: Maybe<StringFilter>
    imageUrl?: Maybe<NullableStringFilter>
    inboxOwnerId?: Maybe<NullableStringFilter>
    isDeleted?: Maybe<BooleanFilter>
    meta?: Maybe<NullableStringFilter>
    NOT?: Maybe<Array<ItemScalarWhereInput>>
    OR?: Maybe<Array<ItemScalarWhereInput>>
    position?: Maybe<IntFilter>
    productUrl?: Maybe<NullableStringFilter>
    provider?: Maybe<NullableStringFilter>
    title?: Maybe<StringFilter>
    type?: Maybe<ItemType>
    updatedAt?: Maybe<DateTimeFilter>
}

export enum ItemType {
    Album = 'album',
    Article = 'article',
    Book = 'book',
    Movie = 'movie',
    People = 'people',
    Podcast = 'podcast',
    Repository = 'repository',
    Video = 'video',
    Website = 'website',
}

export type ItemUpdateInput = {
    author?: Maybe<Scalars['String']>
    collection?: Maybe<CollectionUpdateOneWithoutItemsInput>
    comment?: Maybe<Scalars['String']>
    createdAt?: Maybe<Scalars['DateTime']>
    description?: Maybe<Scalars['String']>
    id?: Maybe<Scalars['String']>
    imageUrl?: Maybe<Scalars['String']>
    inboxOwner?: Maybe<UserUpdateOneWithoutInboxedItemsInput>
    isDeleted?: Maybe<Scalars['Boolean']>
    meta?: Maybe<Scalars['String']>
    position?: Maybe<Scalars['Int']>
    productUrl?: Maybe<Scalars['String']>
    provider?: Maybe<Scalars['String']>
    title?: Maybe<Scalars['String']>
    type?: Maybe<ItemType>
    updatedAt?: Maybe<Scalars['DateTime']>
}

export type ItemUpdateManyDataInput = {
    author?: Maybe<Scalars['String']>
    comment?: Maybe<Scalars['String']>
    createdAt?: Maybe<Scalars['DateTime']>
    description?: Maybe<Scalars['String']>
    id?: Maybe<Scalars['String']>
    imageUrl?: Maybe<Scalars['String']>
    isDeleted?: Maybe<Scalars['Boolean']>
    meta?: Maybe<Scalars['String']>
    position?: Maybe<Scalars['Int']>
    productUrl?: Maybe<Scalars['String']>
    provider?: Maybe<Scalars['String']>
    title?: Maybe<Scalars['String']>
    type?: Maybe<ItemType>
    updatedAt?: Maybe<Scalars['DateTime']>
}

export type ItemUpdateManyWithoutCollectionInput = {
    connect?: Maybe<Array<ItemWhereUniqueInput>>
    create?: Maybe<Array<ItemCreateWithoutCollectionInput>>
    delete?: Maybe<Array<ItemWhereUniqueInput>>
    deleteMany?: Maybe<Array<ItemScalarWhereInput>>
    disconnect?: Maybe<Array<ItemWhereUniqueInput>>
    set?: Maybe<Array<ItemWhereUniqueInput>>
    update?: Maybe<Array<ItemUpdateWithWhereUniqueWithoutCollectionInput>>
    updateMany?: Maybe<Array<ItemUpdateManyWithWhereNestedInput>>
    upsert?: Maybe<Array<ItemUpsertWithWhereUniqueWithoutCollectionInput>>
}

export type ItemUpdateManyWithoutInboxOwnerInput = {
    connect?: Maybe<Array<ItemWhereUniqueInput>>
    create?: Maybe<Array<ItemCreateWithoutInboxOwnerInput>>
    delete?: Maybe<Array<ItemWhereUniqueInput>>
    deleteMany?: Maybe<Array<ItemScalarWhereInput>>
    disconnect?: Maybe<Array<ItemWhereUniqueInput>>
    set?: Maybe<Array<ItemWhereUniqueInput>>
    update?: Maybe<Array<ItemUpdateWithWhereUniqueWithoutInboxOwnerInput>>
    updateMany?: Maybe<Array<ItemUpdateManyWithWhereNestedInput>>
    upsert?: Maybe<Array<ItemUpsertWithWhereUniqueWithoutInboxOwnerInput>>
}

export type ItemUpdateManyWithWhereNestedInput = {
    data: ItemUpdateManyDataInput
    where: ItemScalarWhereInput
}

export type ItemUpdateWithoutCollectionDataInput = {
    author?: Maybe<Scalars['String']>
    comment?: Maybe<Scalars['String']>
    createdAt?: Maybe<Scalars['DateTime']>
    description?: Maybe<Scalars['String']>
    id?: Maybe<Scalars['String']>
    imageUrl?: Maybe<Scalars['String']>
    inboxOwner?: Maybe<UserUpdateOneWithoutInboxedItemsInput>
    isDeleted?: Maybe<Scalars['Boolean']>
    meta?: Maybe<Scalars['String']>
    position?: Maybe<Scalars['Int']>
    productUrl?: Maybe<Scalars['String']>
    provider?: Maybe<Scalars['String']>
    title?: Maybe<Scalars['String']>
    type?: Maybe<ItemType>
    updatedAt?: Maybe<Scalars['DateTime']>
}

export type ItemUpdateWithoutInboxOwnerDataInput = {
    author?: Maybe<Scalars['String']>
    collection?: Maybe<CollectionUpdateOneWithoutItemsInput>
    comment?: Maybe<Scalars['String']>
    createdAt?: Maybe<Scalars['DateTime']>
    description?: Maybe<Scalars['String']>
    id?: Maybe<Scalars['String']>
    imageUrl?: Maybe<Scalars['String']>
    isDeleted?: Maybe<Scalars['Boolean']>
    meta?: Maybe<Scalars['String']>
    position?: Maybe<Scalars['Int']>
    productUrl?: Maybe<Scalars['String']>
    provider?: Maybe<Scalars['String']>
    title?: Maybe<Scalars['String']>
    type?: Maybe<ItemType>
    updatedAt?: Maybe<Scalars['DateTime']>
}

export type ItemUpdateWithWhereUniqueWithoutCollectionInput = {
    data: ItemUpdateWithoutCollectionDataInput
    where: ItemWhereUniqueInput
}

export type ItemUpdateWithWhereUniqueWithoutInboxOwnerInput = {
    data: ItemUpdateWithoutInboxOwnerDataInput
    where: ItemWhereUniqueInput
}

export type ItemUpsertWithWhereUniqueWithoutCollectionInput = {
    create: ItemCreateWithoutCollectionInput
    update: ItemUpdateWithoutCollectionDataInput
    where: ItemWhereUniqueInput
}

export type ItemUpsertWithWhereUniqueWithoutInboxOwnerInput = {
    create: ItemCreateWithoutInboxOwnerInput
    update: ItemUpdateWithoutInboxOwnerDataInput
    where: ItemWhereUniqueInput
}

export type ItemWhereInput = {
    AND?: Maybe<Array<ItemWhereInput>>
    author?: Maybe<NullableStringFilter>
    collection?: Maybe<CollectionWhereInput>
    collectionId?: Maybe<NullableStringFilter>
    comment?: Maybe<NullableStringFilter>
    createdAt?: Maybe<DateTimeFilter>
    description?: Maybe<NullableStringFilter>
    id?: Maybe<StringFilter>
    imageUrl?: Maybe<NullableStringFilter>
    inboxOwner?: Maybe<UserWhereInput>
    inboxOwnerId?: Maybe<NullableStringFilter>
    isDeleted?: Maybe<BooleanFilter>
    meta?: Maybe<NullableStringFilter>
    NOT?: Maybe<Array<ItemWhereInput>>
    OR?: Maybe<Array<ItemWhereInput>>
    position?: Maybe<IntFilter>
    productUrl?: Maybe<NullableStringFilter>
    provider?: Maybe<NullableStringFilter>
    title?: Maybe<StringFilter>
    type?: Maybe<ItemType>
    updatedAt?: Maybe<DateTimeFilter>
}

export type ItemWhereUniqueInput = {
    id?: Maybe<Scalars['String']>
}

export type Modal = {
    __typename?: 'Modal'
    isNavigationOpen?: Maybe<Scalars['Boolean']>
}

export type Mutation = {
    __typename?: 'Mutation'
    updateOneSection?: Maybe<Section>
    createOneUser: User
    updateOneUser?: Maybe<User>
    updateOneItem?: Maybe<Item>
    updateOneCollection?: Maybe<Collection>
    signS3?: Maybe<S3SignedPath>
    createNewUser?: Maybe<User>
    createEmptyCollection?: Maybe<Collection>
    createEmptySection?: Maybe<Section>
    /**
     * Mutation changing the position of an item from his $oldIndex to the $newIndex.
     *             It takes *indexes* (not position) and return changed items with new position.
     */
    changeItemPosition: Array<Item>
    createItemFromSearch: Item
    createItemFromUrl: Item
}

export type MutationUpdateOneSectionArgs = {
    data: SectionUpdateInput
    where: SectionWhereUniqueInput
}

export type MutationCreateOneUserArgs = {
    data: UserCreateInput
}

export type MutationUpdateOneUserArgs = {
    data: UserUpdateInput
    where: UserWhereUniqueInput
}

export type MutationUpdateOneItemArgs = {
    data: ItemUpdateInput
    where: ItemWhereUniqueInput
}

export type MutationUpdateOneCollectionArgs = {
    data: CollectionUpdateInput
    where: CollectionWhereUniqueInput
}

export type MutationSignS3Args = {
    fileName: Scalars['String']
    fileType: Scalars['String']
}

export type MutationCreateNewUserArgs = {
    authUserId: Scalars['String']
    firstname: Scalars['String']
    pictureUrl: Scalars['String']
    slug: Scalars['String']
}

export type MutationCreateEmptyCollectionArgs = {
    sectionId: Scalars['ID']
}

export type MutationChangeItemPositionArgs = {
    collectionId: Scalars['ID']
    newIndex: Scalars['Int']
    oldIndex: Scalars['Int']
}

export type MutationCreateItemFromSearchArgs = {
    collectionId?: Maybe<Scalars['String']>
    id: Scalars['String']
    inbox?: Maybe<Scalars['Boolean']>
    kind: Scalars['String']
}

export type MutationCreateItemFromUrlArgs = {
    collectionId?: Maybe<Scalars['String']>
    inbox?: Maybe<Scalars['Boolean']>
    url: Scalars['String']
}

export type NullableStringFilter = {
    contains?: Maybe<Scalars['String']>
    endsWith?: Maybe<Scalars['String']>
    equals?: Maybe<Scalars['String']>
    gt?: Maybe<Scalars['String']>
    gte?: Maybe<Scalars['String']>
    in?: Maybe<Array<Scalars['String']>>
    lt?: Maybe<Scalars['String']>
    lte?: Maybe<Scalars['String']>
    not?: Maybe<Scalars['String']>
    notIn?: Maybe<Array<Scalars['String']>>
    startsWith?: Maybe<Scalars['String']>
}

export enum OrderByArg {
    Asc = 'asc',
    Desc = 'desc',
}

export type Query = {
    __typename?: 'Query'
    breadcrumbs: Array<Breadcrumb>
    collection?: Maybe<Collection>
    collections: Array<Collection>
    /** Inbox user relative content */
    inbox?: Maybe<Inbox>
    items: Array<Item>
    modal: Modal
    search: Array<SearchItem>
    section?: Maybe<Section>
    sections: Array<Section>
    statusMessage?: Maybe<Scalars['String']>
    user?: Maybe<User>
}

export type QueryCollectionArgs = {
    where: CollectionWhereUniqueInput
}

export type QueryCollectionsArgs = {
    after?: Maybe<CollectionWhereUniqueInput>
    before?: Maybe<CollectionWhereUniqueInput>
    first?: Maybe<Scalars['Int']>
    last?: Maybe<Scalars['Int']>
    orderBy?: Maybe<QueryCollectionsOrderByInput>
    skip?: Maybe<Scalars['Int']>
    where?: Maybe<QueryCollectionsWhereInput>
}

export type QueryItemsArgs = {
    after?: Maybe<ItemWhereUniqueInput>
    before?: Maybe<ItemWhereUniqueInput>
    first?: Maybe<Scalars['Int']>
    last?: Maybe<Scalars['Int']>
    orderBy?: Maybe<QueryItemsOrderByInput>
    skip?: Maybe<Scalars['Int']>
    where?: Maybe<QueryItemsWhereInput>
}

export type QuerySearchArgs = {
    kind: Scalars['String']
    q: Scalars['String']
}

export type QuerySectionArgs = {
    where: SectionWhereUniqueInput
}

export type QuerySectionsArgs = {
    after?: Maybe<SectionWhereUniqueInput>
    before?: Maybe<SectionWhereUniqueInput>
    first?: Maybe<Scalars['Int']>
    last?: Maybe<Scalars['Int']>
    orderBy?: Maybe<QuerySectionsOrderByInput>
    skip?: Maybe<Scalars['Int']>
    where?: Maybe<QuerySectionsWhereInput>
}

export type QueryUserArgs = {
    where: UserWhereUniqueInput
}

export type QueryCollectionsOrderByInput = {
    createdAt?: Maybe<OrderByArg>
}

export type QueryCollectionsWhereInput = {
    isDeleted?: Maybe<BooleanFilter>
    owner?: Maybe<UserWhereInput>
    section?: Maybe<SectionWhereInput>
}

export type QueryItemsOrderByInput = {
    position?: Maybe<OrderByArg>
}

export type QueryItemsWhereInput = {
    collection?: Maybe<CollectionWhereInput>
    isDeleted?: Maybe<BooleanFilter>
}

export type QuerySectionsOrderByInput = {
    createdAt?: Maybe<OrderByArg>
}

export type QuerySectionsWhereInput = {
    index?: Maybe<IntFilter>
    isDeleted?: Maybe<BooleanFilter>
    owner?: Maybe<UserWhereInput>
}

export type S3SignedPath = {
    __typename?: 'S3SignedPath'
    signedRequest: Scalars['String']
    url: Scalars['String']
}

export type SearchItem = {
    __typename?: 'SearchItem'
    id?: Maybe<Scalars['String']>
    title?: Maybe<Scalars['String']>
    author?: Maybe<Scalars['String']>
    type?: Maybe<Scalars['String']>
}

export type Section = {
    __typename?: 'Section'
    collections: Array<Collection>
    createdAt: Scalars['DateTime']
    id: Scalars['String']
    index: Scalars['Int']
    isExpanded: Scalars['Boolean']
    name?: Maybe<Scalars['String']>
    slug: Scalars['String']
}

export type SectionCollectionsArgs = {
    after?: Maybe<CollectionWhereUniqueInput>
    before?: Maybe<CollectionWhereUniqueInput>
    first?: Maybe<Scalars['Int']>
    last?: Maybe<Scalars['Int']>
    orderBy?: Maybe<SectionCollectionsOrderByInput>
    skip?: Maybe<Scalars['Int']>
    where?: Maybe<SectionCollectionsWhereInput>
}

export type SectionCollectionsOrderByInput = {
    createdAt?: Maybe<OrderByArg>
    updatedAt?: Maybe<OrderByArg>
}

export type SectionCollectionsWhereInput = {
    isDeleted?: Maybe<BooleanFilter>
}

export type SectionCreateManyWithoutOwnerInput = {
    connect?: Maybe<Array<SectionWhereUniqueInput>>
    create?: Maybe<Array<SectionCreateWithoutOwnerInput>>
}

export type SectionCreateOneWithoutCollectionsInput = {
    connect?: Maybe<SectionWhereUniqueInput>
    create?: Maybe<SectionCreateWithoutCollectionsInput>
}

export type SectionCreateWithoutCollectionsInput = {
    createdAt?: Maybe<Scalars['DateTime']>
    id?: Maybe<Scalars['String']>
    index?: Maybe<Scalars['Int']>
    isDeleted?: Maybe<Scalars['Boolean']>
    isExpanded?: Maybe<Scalars['Boolean']>
    name?: Maybe<Scalars['String']>
    owner: UserCreateOneWithoutSectionsInput
    slug: Scalars['String']
    updatedAt?: Maybe<Scalars['DateTime']>
}

export type SectionCreateWithoutOwnerInput = {
    collections?: Maybe<CollectionCreateManyWithoutSectionInput>
    createdAt?: Maybe<Scalars['DateTime']>
    id?: Maybe<Scalars['String']>
    index?: Maybe<Scalars['Int']>
    isDeleted?: Maybe<Scalars['Boolean']>
    isExpanded?: Maybe<Scalars['Boolean']>
    name?: Maybe<Scalars['String']>
    slug: Scalars['String']
    updatedAt?: Maybe<Scalars['DateTime']>
}

export type SectionFilter = {
    every?: Maybe<SectionWhereInput>
    none?: Maybe<SectionWhereInput>
    some?: Maybe<SectionWhereInput>
}

export type SectionScalarWhereInput = {
    AND?: Maybe<Array<SectionScalarWhereInput>>
    collections?: Maybe<CollectionFilter>
    createdAt?: Maybe<DateTimeFilter>
    id?: Maybe<StringFilter>
    index?: Maybe<IntFilter>
    isDeleted?: Maybe<BooleanFilter>
    isExpanded?: Maybe<BooleanFilter>
    name?: Maybe<NullableStringFilter>
    NOT?: Maybe<Array<SectionScalarWhereInput>>
    OR?: Maybe<Array<SectionScalarWhereInput>>
    ownerId?: Maybe<StringFilter>
    slug?: Maybe<StringFilter>
    updatedAt?: Maybe<DateTimeFilter>
}

export type SectionUpdateInput = {
    collections?: Maybe<CollectionUpdateManyWithoutSectionInput>
    createdAt?: Maybe<Scalars['DateTime']>
    id?: Maybe<Scalars['String']>
    index?: Maybe<Scalars['Int']>
    isDeleted?: Maybe<Scalars['Boolean']>
    isExpanded?: Maybe<Scalars['Boolean']>
    name?: Maybe<Scalars['String']>
    owner?: Maybe<UserUpdateOneRequiredWithoutSectionsInput>
    slug?: Maybe<Scalars['String']>
    updatedAt?: Maybe<Scalars['DateTime']>
}

export type SectionUpdateManyDataInput = {
    createdAt?: Maybe<Scalars['DateTime']>
    id?: Maybe<Scalars['String']>
    index?: Maybe<Scalars['Int']>
    isDeleted?: Maybe<Scalars['Boolean']>
    isExpanded?: Maybe<Scalars['Boolean']>
    name?: Maybe<Scalars['String']>
    slug?: Maybe<Scalars['String']>
    updatedAt?: Maybe<Scalars['DateTime']>
}

export type SectionUpdateManyWithoutOwnerInput = {
    connect?: Maybe<Array<SectionWhereUniqueInput>>
    create?: Maybe<Array<SectionCreateWithoutOwnerInput>>
    delete?: Maybe<Array<SectionWhereUniqueInput>>
    deleteMany?: Maybe<Array<SectionScalarWhereInput>>
    disconnect?: Maybe<Array<SectionWhereUniqueInput>>
    set?: Maybe<Array<SectionWhereUniqueInput>>
    update?: Maybe<Array<SectionUpdateWithWhereUniqueWithoutOwnerInput>>
    updateMany?: Maybe<Array<SectionUpdateManyWithWhereNestedInput>>
    upsert?: Maybe<Array<SectionUpsertWithWhereUniqueWithoutOwnerInput>>
}

export type SectionUpdateManyWithWhereNestedInput = {
    data: SectionUpdateManyDataInput
    where: SectionScalarWhereInput
}

export type SectionUpdateOneRequiredWithoutCollectionsInput = {
    connect?: Maybe<SectionWhereUniqueInput>
    create?: Maybe<SectionCreateWithoutCollectionsInput>
    update?: Maybe<SectionUpdateWithoutCollectionsDataInput>
    upsert?: Maybe<SectionUpsertWithoutCollectionsInput>
}

export type SectionUpdateWithoutCollectionsDataInput = {
    createdAt?: Maybe<Scalars['DateTime']>
    id?: Maybe<Scalars['String']>
    index?: Maybe<Scalars['Int']>
    isDeleted?: Maybe<Scalars['Boolean']>
    isExpanded?: Maybe<Scalars['Boolean']>
    name?: Maybe<Scalars['String']>
    owner?: Maybe<UserUpdateOneRequiredWithoutSectionsInput>
    slug?: Maybe<Scalars['String']>
    updatedAt?: Maybe<Scalars['DateTime']>
}

export type SectionUpdateWithoutOwnerDataInput = {
    collections?: Maybe<CollectionUpdateManyWithoutSectionInput>
    createdAt?: Maybe<Scalars['DateTime']>
    id?: Maybe<Scalars['String']>
    index?: Maybe<Scalars['Int']>
    isDeleted?: Maybe<Scalars['Boolean']>
    isExpanded?: Maybe<Scalars['Boolean']>
    name?: Maybe<Scalars['String']>
    slug?: Maybe<Scalars['String']>
    updatedAt?: Maybe<Scalars['DateTime']>
}

export type SectionUpdateWithWhereUniqueWithoutOwnerInput = {
    data: SectionUpdateWithoutOwnerDataInput
    where: SectionWhereUniqueInput
}

export type SectionUpsertWithoutCollectionsInput = {
    create: SectionCreateWithoutCollectionsInput
    update: SectionUpdateWithoutCollectionsDataInput
}

export type SectionUpsertWithWhereUniqueWithoutOwnerInput = {
    create: SectionCreateWithoutOwnerInput
    update: SectionUpdateWithoutOwnerDataInput
    where: SectionWhereUniqueInput
}

export type SectionWhereInput = {
    AND?: Maybe<Array<SectionWhereInput>>
    collections?: Maybe<CollectionFilter>
    createdAt?: Maybe<DateTimeFilter>
    id?: Maybe<StringFilter>
    index?: Maybe<IntFilter>
    isDeleted?: Maybe<BooleanFilter>
    isExpanded?: Maybe<BooleanFilter>
    name?: Maybe<NullableStringFilter>
    NOT?: Maybe<Array<SectionWhereInput>>
    OR?: Maybe<Array<SectionWhereInput>>
    owner?: Maybe<UserWhereInput>
    ownerId?: Maybe<StringFilter>
    slug?: Maybe<StringFilter>
    updatedAt?: Maybe<DateTimeFilter>
}

export type SectionWhereUniqueInput = {
    id?: Maybe<Scalars['String']>
}

export type StringFilter = {
    contains?: Maybe<Scalars['String']>
    endsWith?: Maybe<Scalars['String']>
    equals?: Maybe<Scalars['String']>
    gt?: Maybe<Scalars['String']>
    gte?: Maybe<Scalars['String']>
    in?: Maybe<Array<Scalars['String']>>
    lt?: Maybe<Scalars['String']>
    lte?: Maybe<Scalars['String']>
    not?: Maybe<Scalars['String']>
    notIn?: Maybe<Array<Scalars['String']>>
    startsWith?: Maybe<Scalars['String']>
}

export type User = {
    __typename?: 'User'
    authUserId?: Maybe<Scalars['String']>
    biography?: Maybe<Scalars['String']>
    firstname: Scalars['String']
    github?: Maybe<Scalars['String']>
    id: Scalars['String']
    label?: Maybe<Scalars['String']>
    linkedin?: Maybe<Scalars['String']>
    mail?: Maybe<Scalars['String']>
    pictureUrl: Scalars['String']
    sections: Array<Section>
    slug: Scalars['String']
    website?: Maybe<Scalars['String']>
    youtube?: Maybe<Scalars['String']>
}

export type UserSectionsArgs = {
    after?: Maybe<SectionWhereUniqueInput>
    before?: Maybe<SectionWhereUniqueInput>
    first?: Maybe<Scalars['Int']>
    last?: Maybe<Scalars['Int']>
    skip?: Maybe<Scalars['Int']>
}

export type UserCreateInput = {
    authUserId?: Maybe<Scalars['String']>
    biography?: Maybe<Scalars['String']>
    collections?: Maybe<CollectionCreateManyWithoutOwnerInput>
    createdAt?: Maybe<Scalars['DateTime']>
    firstname: Scalars['String']
    github?: Maybe<Scalars['String']>
    id?: Maybe<Scalars['String']>
    inboxedItems?: Maybe<ItemCreateManyWithoutInboxOwnerInput>
    label?: Maybe<Scalars['String']>
    linkedin?: Maybe<Scalars['String']>
    mail?: Maybe<Scalars['String']>
    pictureUrl: Scalars['String']
    sections?: Maybe<SectionCreateManyWithoutOwnerInput>
    slug: Scalars['String']
    updatedAt?: Maybe<Scalars['DateTime']>
    website?: Maybe<Scalars['String']>
    youtube?: Maybe<Scalars['String']>
}

export type UserCreateOneWithoutCollectionsInput = {
    connect?: Maybe<UserWhereUniqueInput>
    create?: Maybe<UserCreateWithoutCollectionsInput>
}

export type UserCreateOneWithoutInboxedItemsInput = {
    connect?: Maybe<UserWhereUniqueInput>
    create?: Maybe<UserCreateWithoutInboxedItemsInput>
}

export type UserCreateOneWithoutSectionsInput = {
    connect?: Maybe<UserWhereUniqueInput>
    create?: Maybe<UserCreateWithoutSectionsInput>
}

export type UserCreateWithoutCollectionsInput = {
    authUserId?: Maybe<Scalars['String']>
    biography?: Maybe<Scalars['String']>
    createdAt?: Maybe<Scalars['DateTime']>
    firstname: Scalars['String']
    github?: Maybe<Scalars['String']>
    id?: Maybe<Scalars['String']>
    inboxedItems?: Maybe<ItemCreateManyWithoutInboxOwnerInput>
    label?: Maybe<Scalars['String']>
    linkedin?: Maybe<Scalars['String']>
    mail?: Maybe<Scalars['String']>
    pictureUrl: Scalars['String']
    sections?: Maybe<SectionCreateManyWithoutOwnerInput>
    slug: Scalars['String']
    updatedAt?: Maybe<Scalars['DateTime']>
    website?: Maybe<Scalars['String']>
    youtube?: Maybe<Scalars['String']>
}

export type UserCreateWithoutInboxedItemsInput = {
    authUserId?: Maybe<Scalars['String']>
    biography?: Maybe<Scalars['String']>
    collections?: Maybe<CollectionCreateManyWithoutOwnerInput>
    createdAt?: Maybe<Scalars['DateTime']>
    firstname: Scalars['String']
    github?: Maybe<Scalars['String']>
    id?: Maybe<Scalars['String']>
    label?: Maybe<Scalars['String']>
    linkedin?: Maybe<Scalars['String']>
    mail?: Maybe<Scalars['String']>
    pictureUrl: Scalars['String']
    sections?: Maybe<SectionCreateManyWithoutOwnerInput>
    slug: Scalars['String']
    updatedAt?: Maybe<Scalars['DateTime']>
    website?: Maybe<Scalars['String']>
    youtube?: Maybe<Scalars['String']>
}

export type UserCreateWithoutSectionsInput = {
    authUserId?: Maybe<Scalars['String']>
    biography?: Maybe<Scalars['String']>
    collections?: Maybe<CollectionCreateManyWithoutOwnerInput>
    createdAt?: Maybe<Scalars['DateTime']>
    firstname: Scalars['String']
    github?: Maybe<Scalars['String']>
    id?: Maybe<Scalars['String']>
    inboxedItems?: Maybe<ItemCreateManyWithoutInboxOwnerInput>
    label?: Maybe<Scalars['String']>
    linkedin?: Maybe<Scalars['String']>
    mail?: Maybe<Scalars['String']>
    pictureUrl: Scalars['String']
    slug: Scalars['String']
    updatedAt?: Maybe<Scalars['DateTime']>
    website?: Maybe<Scalars['String']>
    youtube?: Maybe<Scalars['String']>
}

export type UserUpdateInput = {
    authUserId?: Maybe<Scalars['String']>
    biography?: Maybe<Scalars['String']>
    collections?: Maybe<CollectionUpdateManyWithoutOwnerInput>
    createdAt?: Maybe<Scalars['DateTime']>
    firstname?: Maybe<Scalars['String']>
    github?: Maybe<Scalars['String']>
    id?: Maybe<Scalars['String']>
    inboxedItems?: Maybe<ItemUpdateManyWithoutInboxOwnerInput>
    label?: Maybe<Scalars['String']>
    linkedin?: Maybe<Scalars['String']>
    mail?: Maybe<Scalars['String']>
    pictureUrl?: Maybe<Scalars['String']>
    sections?: Maybe<SectionUpdateManyWithoutOwnerInput>
    slug?: Maybe<Scalars['String']>
    updatedAt?: Maybe<Scalars['DateTime']>
    website?: Maybe<Scalars['String']>
    youtube?: Maybe<Scalars['String']>
}

export type UserUpdateOneRequiredWithoutCollectionsInput = {
    connect?: Maybe<UserWhereUniqueInput>
    create?: Maybe<UserCreateWithoutCollectionsInput>
    update?: Maybe<UserUpdateWithoutCollectionsDataInput>
    upsert?: Maybe<UserUpsertWithoutCollectionsInput>
}

export type UserUpdateOneRequiredWithoutSectionsInput = {
    connect?: Maybe<UserWhereUniqueInput>
    create?: Maybe<UserCreateWithoutSectionsInput>
    update?: Maybe<UserUpdateWithoutSectionsDataInput>
    upsert?: Maybe<UserUpsertWithoutSectionsInput>
}

export type UserUpdateOneWithoutInboxedItemsInput = {
    connect?: Maybe<UserWhereUniqueInput>
    create?: Maybe<UserCreateWithoutInboxedItemsInput>
    delete?: Maybe<Scalars['Boolean']>
    disconnect?: Maybe<Scalars['Boolean']>
    update?: Maybe<UserUpdateWithoutInboxedItemsDataInput>
    upsert?: Maybe<UserUpsertWithoutInboxedItemsInput>
}

export type UserUpdateWithoutCollectionsDataInput = {
    authUserId?: Maybe<Scalars['String']>
    biography?: Maybe<Scalars['String']>
    createdAt?: Maybe<Scalars['DateTime']>
    firstname?: Maybe<Scalars['String']>
    github?: Maybe<Scalars['String']>
    id?: Maybe<Scalars['String']>
    inboxedItems?: Maybe<ItemUpdateManyWithoutInboxOwnerInput>
    label?: Maybe<Scalars['String']>
    linkedin?: Maybe<Scalars['String']>
    mail?: Maybe<Scalars['String']>
    pictureUrl?: Maybe<Scalars['String']>
    sections?: Maybe<SectionUpdateManyWithoutOwnerInput>
    slug?: Maybe<Scalars['String']>
    updatedAt?: Maybe<Scalars['DateTime']>
    website?: Maybe<Scalars['String']>
    youtube?: Maybe<Scalars['String']>
}

export type UserUpdateWithoutInboxedItemsDataInput = {
    authUserId?: Maybe<Scalars['String']>
    biography?: Maybe<Scalars['String']>
    collections?: Maybe<CollectionUpdateManyWithoutOwnerInput>
    createdAt?: Maybe<Scalars['DateTime']>
    firstname?: Maybe<Scalars['String']>
    github?: Maybe<Scalars['String']>
    id?: Maybe<Scalars['String']>
    label?: Maybe<Scalars['String']>
    linkedin?: Maybe<Scalars['String']>
    mail?: Maybe<Scalars['String']>
    pictureUrl?: Maybe<Scalars['String']>
    sections?: Maybe<SectionUpdateManyWithoutOwnerInput>
    slug?: Maybe<Scalars['String']>
    updatedAt?: Maybe<Scalars['DateTime']>
    website?: Maybe<Scalars['String']>
    youtube?: Maybe<Scalars['String']>
}

export type UserUpdateWithoutSectionsDataInput = {
    authUserId?: Maybe<Scalars['String']>
    biography?: Maybe<Scalars['String']>
    collections?: Maybe<CollectionUpdateManyWithoutOwnerInput>
    createdAt?: Maybe<Scalars['DateTime']>
    firstname?: Maybe<Scalars['String']>
    github?: Maybe<Scalars['String']>
    id?: Maybe<Scalars['String']>
    inboxedItems?: Maybe<ItemUpdateManyWithoutInboxOwnerInput>
    label?: Maybe<Scalars['String']>
    linkedin?: Maybe<Scalars['String']>
    mail?: Maybe<Scalars['String']>
    pictureUrl?: Maybe<Scalars['String']>
    slug?: Maybe<Scalars['String']>
    updatedAt?: Maybe<Scalars['DateTime']>
    website?: Maybe<Scalars['String']>
    youtube?: Maybe<Scalars['String']>
}

export type UserUpsertWithoutCollectionsInput = {
    create: UserCreateWithoutCollectionsInput
    update: UserUpdateWithoutCollectionsDataInput
}

export type UserUpsertWithoutInboxedItemsInput = {
    create: UserCreateWithoutInboxedItemsInput
    update: UserUpdateWithoutInboxedItemsDataInput
}

export type UserUpsertWithoutSectionsInput = {
    create: UserCreateWithoutSectionsInput
    update: UserUpdateWithoutSectionsDataInput
}

export type UserWhereInput = {
    AND?: Maybe<Array<UserWhereInput>>
    authUserId?: Maybe<NullableStringFilter>
    biography?: Maybe<NullableStringFilter>
    collections?: Maybe<CollectionFilter>
    createdAt?: Maybe<DateTimeFilter>
    firstname?: Maybe<StringFilter>
    github?: Maybe<NullableStringFilter>
    id?: Maybe<StringFilter>
    inboxedItems?: Maybe<ItemFilter>
    label?: Maybe<NullableStringFilter>
    linkedin?: Maybe<NullableStringFilter>
    mail?: Maybe<NullableStringFilter>
    NOT?: Maybe<Array<UserWhereInput>>
    OR?: Maybe<Array<UserWhereInput>>
    pictureUrl?: Maybe<StringFilter>
    sections?: Maybe<SectionFilter>
    slug?: Maybe<StringFilter>
    updatedAt?: Maybe<DateTimeFilter>
    website?: Maybe<NullableStringFilter>
    youtube?: Maybe<NullableStringFilter>
}

export type UserWhereUniqueInput = {
    authUserId?: Maybe<Scalars['String']>
    id?: Maybe<Scalars['String']>
    slug?: Maybe<Scalars['String']>
}

export type CreateNewUserMutationVariables = Exact<{
    slug: Scalars['String']
    authUserId: Scalars['String']
    pictureUrl: Scalars['String']
    firstname: Scalars['String']
}>

export type CreateNewUserMutation = { __typename?: 'Mutation' } & {
    user?: Maybe<{ __typename?: 'User' } & UserBasicFragment>
}

export type UpdateCollectionMutationVariables = Exact<{
    collectionId: Scalars['String']
    slug: Scalars['String']
    name?: Maybe<Scalars['String']>
    detail?: Maybe<Scalars['String']>
}>

export type UpdateCollectionMutation = { __typename?: 'Mutation' } & {
    collection?: Maybe<
        { __typename?: 'Collection' } & Pick<
            Collection,
            'id' | 'slug' | 'name' | 'detail'
        >
    >
}

export type GetCollectionIdQueryVariables = Exact<{
    collectionId: Scalars['String']
}>

export type GetCollectionIdQuery = { __typename?: 'Query' } & {
    collection?: Maybe<
        { __typename?: 'Collection' } & Pick<Collection, 'createdAt'> &
            CollectionBasicFragment
    >
}

export type DeleteCollectionMutationVariables = Exact<{
    id: Scalars['String']
}>

export type DeleteCollectionMutation = { __typename?: 'Mutation' } & {
    updateOneCollection?: Maybe<
        { __typename?: 'Collection' } & Pick<
            Collection,
            'id' | 'slug' | 'isDeleted'
        > & { section: { __typename?: 'Section' } & Pick<Section, 'id'> }
    >
}

export type UnDeleteCollectionMutationVariables = Exact<{
    id: Scalars['String']
}>

export type UnDeleteCollectionMutation = { __typename?: 'Mutation' } & {
    updateOneCollection?: Maybe<
        { __typename?: 'Collection' } & Pick<
            Collection,
            'id' | 'slug' | 'isDeleted'
        >
    >
}

export type MoveItemFromCollectionToCollectionMutationVariables = Exact<{
    itemId: Scalars['String']
    collectionId: Scalars['String']
}>

export type MoveItemFromCollectionToCollectionMutation = {
    __typename?: 'Mutation'
} & { updateOneItem?: Maybe<{ __typename?: 'Item' } & Pick<Item, 'id'>> }

export type MoveItemFromCollectionToInboxMutationVariables = Exact<{
    itemId: Scalars['String']
    authUserId: Scalars['String']
}>

export type MoveItemFromCollectionToInboxMutation = {
    __typename?: 'Mutation'
} & { updateOneItem?: Maybe<{ __typename?: 'Item' } & Pick<Item, 'id'>> }

export type GetInboxQueryVariables = Exact<{ [key: string]: never }>

export type GetInboxQuery = { __typename?: 'Query' } & {
    inbox?: Maybe<
        { __typename?: 'Inbox' } & Pick<Inbox, 'id'> & {
                items?: Maybe<
                    Array<
                        Maybe<
                            { __typename?: 'Item' } & ItemPreviewFragment &
                                ItemDetailFragment
                        >
                    >
                >
            }
    >
}

export type MoveItemFromInboxToCollectionMutationVariables = Exact<{
    itemId: Scalars['String']
    collectionId: Scalars['String']
}>

export type MoveItemFromInboxToCollectionMutation = {
    __typename?: 'Mutation'
} & { updateOneItem?: Maybe<{ __typename?: 'Item' } & Pick<Item, 'id'>> }

export type GetSectionQueryVariables = Exact<{
    sectionId: Scalars['String']
}>

export type GetSectionQuery = { __typename?: 'Query' } & {
    section?: Maybe<{ __typename?: 'Section' } & SectionDetailsFragment>
}

export type DeleteSectionMutationVariables = Exact<{
    sectionId: Scalars['String']
}>

export type DeleteSectionMutation = { __typename?: 'Mutation' } & {
    updateOneSection?: Maybe<
        { __typename?: 'Section' } & Pick<Section, 'id' | 'slug'> & {
                title: Section['name']
            }
    >
}

export type UpdateSectionMutationVariables = Exact<{
    sectionId: Scalars['String']
    title?: Maybe<Scalars['String']>
}>

export type UpdateSectionMutation = { __typename?: 'Mutation' } & {
    updateOneSection?: Maybe<
        { __typename?: 'Section' } & Pick<Section, 'id' | 'slug' | 'index'> & {
                title: Section['name']
            }
    >
}

export type CreateEmptyCollectionMutationVariables = Exact<{
    sectionId: Scalars['ID']
}>

export type CreateEmptyCollectionMutation = { __typename?: 'Mutation' } & {
    collection?: Maybe<
        { __typename?: 'Collection' } & Pick<Collection, 'id' | 'slug' | 'name'>
    >
}

export type GetSettingsQueryVariables = Exact<{
    authUserId: Scalars['String']
}>

export type GetSettingsQuery = { __typename?: 'Query' } & {
    user?: Maybe<{ __typename?: 'User' } & UserBasicFragment>
}

export type UpdateAvatarMutationVariables = Exact<{
    authUserId: Scalars['String']
    pictureUrl: Scalars['String']
}>

export type UpdateAvatarMutation = { __typename?: 'Mutation' } & {
    updateOneUser?: Maybe<{ __typename?: 'User' } & UserBasicFragment>
}

export type UpdateSettingsMutationVariables = Exact<{
    authUserId: Scalars['String']
    slug: Scalars['String']
    biography: Scalars['String']
    firstname: Scalars['String']
}>

export type UpdateSettingsMutation = { __typename?: 'Mutation' } & {
    updateOneUser?: Maybe<{ __typename?: 'User' } & UserBasicFragment>
}

export type CheckUserSlugQueryVariables = Exact<{
    slug: Scalars['String']
}>

export type CheckUserSlugQuery = { __typename?: 'Query' } & {
    user?: Maybe<{ __typename?: 'User' } & Pick<User, 'id' | 'slug'>>
}

export type SignS3MutationVariables = Exact<{
    fileName: Scalars['String']
    fileType: Scalars['String']
}>

export type SignS3Mutation = { __typename?: 'Mutation' } & {
    signS3?: Maybe<
        { __typename?: 'S3SignedPath' } & Pick<
            S3SignedPath,
            'signedRequest' | 'url'
        >
    >
}

export type CreateItemFromUrlMutationVariables = Exact<{
    url: Scalars['String']
    collectionId?: Maybe<Scalars['String']>
    inbox?: Maybe<Scalars['Boolean']>
}>

export type CreateItemFromUrlMutation = { __typename?: 'Mutation' } & {
    items: { __typename?: 'Item' } & ItemPreviewFragment & ItemDetailFragment
}

export type CreateItemFromSearchMutationVariables = Exact<{
    id: Scalars['String']
    kind: Scalars['String']
    collectionId?: Maybe<Scalars['String']>
    inbox?: Maybe<Scalars['Boolean']>
}>

export type CreateItemFromSearchMutation = { __typename?: 'Mutation' } & {
    items: { __typename?: 'Item' } & ItemPreviewFragment & ItemDetailFragment
}

export type SearchItemQueryVariables = Exact<{
    query: Scalars['String']
    kind: Scalars['String']
}>

export type SearchItemQuery = { __typename?: 'Query' } & {
    search: Array<
        { __typename?: 'SearchItem' } & Pick<
            SearchItem,
            'id' | 'title' | 'author' | 'type'
        >
    >
}

export type DeleteItemMutationVariables = Exact<{
    id: Scalars['String']
}>

export type DeleteItemMutation = { __typename?: 'Mutation' } & {
    updateOneItem?: Maybe<
        { __typename?: 'Item' } & Pick<Item, 'id' | 'isDeleted'>
    >
}

export type SaveCommentItemMutationVariables = Exact<{
    id: Scalars['String']
    comment: Scalars['String']
}>

export type SaveCommentItemMutation = { __typename?: 'Mutation' } & {
    updateOneItem?: Maybe<
        { __typename?: 'Item' } & Pick<Item, 'id' | 'comment'>
    >
}

export type UndeleteItemMutationVariables = Exact<{
    id: Scalars['String']
}>

export type UndeleteItemMutation = { __typename?: 'Mutation' } & {
    updateOneItem?: Maybe<
        { __typename?: 'Item' } & Pick<Item, 'id' | 'isDeleted'>
    >
}

export type ChangePositionMutationVariables = Exact<{
    oldIndex: Scalars['Int']
    newIndex: Scalars['Int']
    collectionId: Scalars['ID']
}>

export type ChangePositionMutation = { __typename?: 'Mutation' } & {
    changeItemPosition: Array<
        { __typename?: 'Item' } & Pick<Item, 'id' | 'position'>
    >
}

export type GetItemsQueryVariables = Exact<{
    collectionId?: Maybe<Scalars['String']>
}>

export type GetItemsQuery = { __typename?: 'Query' } & {
    items: Array<
        { __typename?: 'Item' } & ItemPreviewFragment & ItemDetailFragment
    >
}

export type GetCollectionModalQueryVariables = Exact<{
    authUserId: Scalars['String']
}>

export type GetCollectionModalQuery = { __typename?: 'Query' } & {
    collections: Array<
        { __typename?: 'Collection' } & Pick<Collection, 'id'> & {
                title: Collection['name']
            }
    >
}

export type GetStatusMessageQueryVariables = Exact<{ [key: string]: never }>

export type GetStatusMessageQuery = { __typename?: 'Query' } & Pick<
    Query,
    'statusMessage'
>

export type GetNavigationStateQueryVariables = Exact<{ [key: string]: never }>

export type GetNavigationStateQuery = { __typename?: 'Query' } & {
    modal: { __typename?: 'Modal' } & Pick<Modal, 'isNavigationOpen'>
}

export type GetSectionsQueryVariables = Exact<{
    authUserId: Scalars['String']
}>

export type GetSectionsQuery = { __typename?: 'Query' } & {
    user?: Maybe<{ __typename?: 'User' } & Pick<User, 'id' | 'slug'>>
    inbox?: Maybe<{ __typename?: 'Inbox' } & Pick<Inbox, 'id' | 'count'>>
    sections: Array<
        { __typename?: 'Section' } & Pick<
            Section,
            'id' | 'createdAt' | 'isExpanded'
        > & { title: Section['name'] } & {
                collections: Array<
                    { __typename?: 'Collection' } & Pick<
                        Collection,
                        'id' | 'slug' | 'isDeleted'
                    > & { title: Collection['name'] }
                >
            }
    >
}

export type CreateSectionMutationVariables = Exact<{ [key: string]: never }>

export type CreateSectionMutation = { __typename?: 'Mutation' } & {
    createEmptySection?: Maybe<
        { __typename?: 'Section' } & Pick<
            Section,
            'id' | 'slug' | 'createdAt' | 'index' | 'isExpanded'
        > & { title: Section['name'] } & {
                collections: Array<
                    { __typename?: 'Collection' } & Pick<
                        Collection,
                        'id' | 'slug' | 'isDeleted'
                    > & { title: Collection['name'] }
                >
            }
    >
}

export type UpdateSectionExpandedMutationVariables = Exact<{
    isExpanded: Scalars['Boolean']
    sectionId: Scalars['String']
}>

export type UpdateSectionExpandedMutation = { __typename?: 'Mutation' } & {
    updateOneSection?: Maybe<
        { __typename?: 'Section' } & Pick<Section, 'id' | 'isExpanded'>
    >
}

export type GetCollectionProfileQueryVariables = Exact<{
    collectionId: Scalars['String']
}>

export type GetCollectionProfileQuery = { __typename?: 'Query' } & {
    collection?: Maybe<
        { __typename?: 'Collection' } & Pick<Collection, 'createdAt'> & {
                owner: { __typename?: 'User' } & Pick<
                    User,
                    'pictureUrl' | 'firstname' | 'slug'
                >
                items: Array<
                    { __typename?: 'Item' } & ItemPreviewFragment &
                        ItemDetailFragment
                >
                section: { __typename?: 'Section' } & Pick<
                    Section,
                    'id' | 'name' | 'slug'
                >
            } & CollectionBasicFragment
    >
}

export type GetProfileQueryVariables = Exact<{
    slug?: Maybe<Scalars['String']>
}>

export type GetProfileQuery = { __typename?: 'Query' } & {
    user?: Maybe<{ __typename?: 'User' } & UserBasicFragment & SocialFragment>
    sections: Array<
        { __typename?: 'Section' } & Pick<
            Section,
            'id' | 'slug' | 'name' | 'index'
        >
    >
}

export type GetBreadcrumbsQueryVariables = Exact<{ [key: string]: never }>

export type GetBreadcrumbsQuery = { __typename?: 'Query' } & {
    breadcrumbs: Array<
        { __typename?: 'Breadcrumb' } & Pick<
            Breadcrumb,
            'title' | 'as' | 'href'
        >
    >
}

export type GetUserByAuthIdQueryVariables = Exact<{
    authId: Scalars['String']
}>

export type GetUserByAuthIdQuery = { __typename?: 'Query' } & {
    user?: Maybe<{ __typename?: 'User' } & UserBasicFragment>
}

export type SectionDetailsFragment = { __typename?: 'Section' } & {
    collections: Array<
        { __typename?: 'Collection' } & {
            owner: { __typename?: 'User' } & Pick<User, 'pictureUrl'>
        } & CollectionWithPreviewFragment
    >
} & SectionBasicFragment

export type CollectionWithPreviewFragment = { __typename?: 'Collection' } & {
    items: Array<{ __typename?: 'Item' } & ItemPreviewFragment>
} & CollectionBasicFragment

export type ItemPreviewFragment = { __typename?: 'Item' } & Pick<
    Item,
    | 'id'
    | 'imageUrl'
    | 'title'
    | 'author'
    | 'type'
    | 'isDeleted'
    | 'position'
    | 'createdAt'
>

export type ItemDetailFragment = { __typename?: 'Item' } & Pick<
    Item,
    'productUrl' | 'provider' | 'meta' | 'comment' | 'description'
>

export type SectionBasicFragment = { __typename?: 'Section' } & Pick<
    Section,
    'id' | 'index' | 'slug'
> & { title: Section['name'] }

export type CollectionBasicFragment = { __typename?: 'Collection' } & Pick<
    Collection,
    'id' | 'slug' | 'updatedAt' | 'isDeleted' | 'detail'
> & { title: Collection['name'] }

export type UserBasicFragment = { __typename?: 'User' } & Pick<
    User,
    | 'id'
    | 'slug'
    | 'authUserId'
    | 'firstname'
    | 'pictureUrl'
    | 'biography'
    | 'label'
>

export type SocialFragment = { __typename?: 'User' } & Pick<
    User,
    'mail' | 'linkedin' | 'youtube' | 'website' | 'github'
>

export type InboxCountItemFragment = { __typename?: 'Inbox' } & Pick<
    Inbox,
    'count'
>

export const SectionBasicFragmentDoc = gql`
    fragment SectionBasic on Section {
        id
        title: name
        index
        slug
    }
`
export const CollectionBasicFragmentDoc = gql`
    fragment CollectionBasic on Collection {
        id
        slug
        updatedAt
        isDeleted
        title: name
        detail
    }
`
export const ItemPreviewFragmentDoc = gql`
    fragment ItemPreview on Item {
        id
        imageUrl
        title
        author
        type
        isDeleted
        position
        createdAt
    }
`
export const CollectionWithPreviewFragmentDoc = gql`
    fragment CollectionWithPreview on Collection {
        ...CollectionBasic
        items(
            first: 5
            where: { isDeleted: { equals: false } }
            orderBy: { position: asc }
        ) {
            ...ItemPreview
        }
    }
    ${CollectionBasicFragmentDoc}
    ${ItemPreviewFragmentDoc}
`
export const SectionDetailsFragmentDoc = gql`
    fragment SectionDetails on Section {
        ...SectionBasic
        collections(
            where: { isDeleted: { equals: false } }
            orderBy: { createdAt: asc }
        ) {
            ...CollectionWithPreview
            owner {
                pictureUrl
            }
        }
    }
    ${SectionBasicFragmentDoc}
    ${CollectionWithPreviewFragmentDoc}
`
export const ItemDetailFragmentDoc = gql`
    fragment ItemDetail on Item {
        productUrl
        provider
        meta
        comment
        description
    }
`
export const UserBasicFragmentDoc = gql`
    fragment UserBasic on User {
        id
        slug
        authUserId
        firstname
        pictureUrl
        biography
        label
    }
`
export const SocialFragmentDoc = gql`
    fragment Social on User {
        mail
        linkedin
        youtube
        website
        github
    }
`
export const InboxCountItemFragmentDoc = gql`
    fragment InboxCountItem on Inbox {
        count
    }
`
export const CreateNewUserDocument = gql`
    mutation createNewUser(
        $slug: String!
        $authUserId: String!
        $pictureUrl: String!
        $firstname: String!
    ) {
        user: createNewUser(
            slug: $slug
            authUserId: $authUserId
            pictureUrl: $pictureUrl
            firstname: $firstname
        ) {
            ...UserBasic
        }
    }
    ${UserBasicFragmentDoc}
`

/**
 * __useCreateNewUserMutation__
 *
 * To run a mutation, you first call `useCreateNewUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateNewUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createNewUserMutation, { data, loading, error }] = useCreateNewUserMutation({
 *   variables: {
 *      slug: // value for 'slug'
 *      authUserId: // value for 'authUserId'
 *      pictureUrl: // value for 'pictureUrl'
 *      firstname: // value for 'firstname'
 *   },
 * });
 */
export function useCreateNewUserMutation(
    baseOptions?: ApolloReactHooks.MutationHookOptions<
        CreateNewUserMutation,
        CreateNewUserMutationVariables
    >
) {
    return ApolloReactHooks.useMutation<
        CreateNewUserMutation,
        CreateNewUserMutationVariables
    >(CreateNewUserDocument, baseOptions)
}
export type CreateNewUserMutationHookResult = ReturnType<
    typeof useCreateNewUserMutation
>
export type CreateNewUserMutationResult = ApolloReactCommon.MutationResult<
    CreateNewUserMutation
>
export type CreateNewUserMutationOptions = ApolloReactCommon.BaseMutationOptions<
    CreateNewUserMutation,
    CreateNewUserMutationVariables
>
export const UpdateCollectionDocument = gql`
    mutation UpdateCollection(
        $collectionId: String!
        $slug: String!
        $name: String
        $detail: String
    ) {
        collection: updateOneCollection(
            where: { id: $collectionId }
            data: { name: $name, detail: $detail, slug: $slug }
        ) {
            id
            slug
            name
            detail
        }
    }
`

/**
 * __useUpdateCollectionMutation__
 *
 * To run a mutation, you first call `useUpdateCollectionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCollectionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCollectionMutation, { data, loading, error }] = useUpdateCollectionMutation({
 *   variables: {
 *      collectionId: // value for 'collectionId'
 *      slug: // value for 'slug'
 *      name: // value for 'name'
 *      detail: // value for 'detail'
 *   },
 * });
 */
export function useUpdateCollectionMutation(
    baseOptions?: ApolloReactHooks.MutationHookOptions<
        UpdateCollectionMutation,
        UpdateCollectionMutationVariables
    >
) {
    return ApolloReactHooks.useMutation<
        UpdateCollectionMutation,
        UpdateCollectionMutationVariables
    >(UpdateCollectionDocument, baseOptions)
}
export type UpdateCollectionMutationHookResult = ReturnType<
    typeof useUpdateCollectionMutation
>
export type UpdateCollectionMutationResult = ApolloReactCommon.MutationResult<
    UpdateCollectionMutation
>
export type UpdateCollectionMutationOptions = ApolloReactCommon.BaseMutationOptions<
    UpdateCollectionMutation,
    UpdateCollectionMutationVariables
>
export const GetCollectionIdDocument = gql`
    query getCollectionId($collectionId: String!) {
        collection(where: { id: $collectionId }) {
            ...CollectionBasic
            createdAt
        }
    }
    ${CollectionBasicFragmentDoc}
`

/**
 * __useGetCollectionIdQuery__
 *
 * To run a query within a React component, call `useGetCollectionIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCollectionIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCollectionIdQuery({
 *   variables: {
 *      collectionId: // value for 'collectionId'
 *   },
 * });
 */
export function useGetCollectionIdQuery(
    baseOptions?: ApolloReactHooks.QueryHookOptions<
        GetCollectionIdQuery,
        GetCollectionIdQueryVariables
    >
) {
    return ApolloReactHooks.useQuery<
        GetCollectionIdQuery,
        GetCollectionIdQueryVariables
    >(GetCollectionIdDocument, baseOptions)
}
export function useGetCollectionIdLazyQuery(
    baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
        GetCollectionIdQuery,
        GetCollectionIdQueryVariables
    >
) {
    return ApolloReactHooks.useLazyQuery<
        GetCollectionIdQuery,
        GetCollectionIdQueryVariables
    >(GetCollectionIdDocument, baseOptions)
}
export type GetCollectionIdQueryHookResult = ReturnType<
    typeof useGetCollectionIdQuery
>
export type GetCollectionIdLazyQueryHookResult = ReturnType<
    typeof useGetCollectionIdLazyQuery
>
export type GetCollectionIdQueryResult = ApolloReactCommon.QueryResult<
    GetCollectionIdQuery,
    GetCollectionIdQueryVariables
>
export const DeleteCollectionDocument = gql`
    mutation deleteCollection($id: String!) {
        updateOneCollection(data: { isDeleted: true }, where: { id: $id }) {
            id
            slug
            isDeleted
            section {
                id
            }
        }
    }
`

/**
 * __useDeleteCollectionMutation__
 *
 * To run a mutation, you first call `useDeleteCollectionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCollectionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCollectionMutation, { data, loading, error }] = useDeleteCollectionMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteCollectionMutation(
    baseOptions?: ApolloReactHooks.MutationHookOptions<
        DeleteCollectionMutation,
        DeleteCollectionMutationVariables
    >
) {
    return ApolloReactHooks.useMutation<
        DeleteCollectionMutation,
        DeleteCollectionMutationVariables
    >(DeleteCollectionDocument, baseOptions)
}
export type DeleteCollectionMutationHookResult = ReturnType<
    typeof useDeleteCollectionMutation
>
export type DeleteCollectionMutationResult = ApolloReactCommon.MutationResult<
    DeleteCollectionMutation
>
export type DeleteCollectionMutationOptions = ApolloReactCommon.BaseMutationOptions<
    DeleteCollectionMutation,
    DeleteCollectionMutationVariables
>
export const UnDeleteCollectionDocument = gql`
    mutation unDeleteCollection($id: String!) {
        updateOneCollection(data: { isDeleted: false }, where: { id: $id }) {
            id
            slug
            isDeleted
        }
    }
`

/**
 * __useUnDeleteCollectionMutation__
 *
 * To run a mutation, you first call `useUnDeleteCollectionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUnDeleteCollectionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [unDeleteCollectionMutation, { data, loading, error }] = useUnDeleteCollectionMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUnDeleteCollectionMutation(
    baseOptions?: ApolloReactHooks.MutationHookOptions<
        UnDeleteCollectionMutation,
        UnDeleteCollectionMutationVariables
    >
) {
    return ApolloReactHooks.useMutation<
        UnDeleteCollectionMutation,
        UnDeleteCollectionMutationVariables
    >(UnDeleteCollectionDocument, baseOptions)
}
export type UnDeleteCollectionMutationHookResult = ReturnType<
    typeof useUnDeleteCollectionMutation
>
export type UnDeleteCollectionMutationResult = ApolloReactCommon.MutationResult<
    UnDeleteCollectionMutation
>
export type UnDeleteCollectionMutationOptions = ApolloReactCommon.BaseMutationOptions<
    UnDeleteCollectionMutation,
    UnDeleteCollectionMutationVariables
>
export const MoveItemFromCollectionToCollectionDocument = gql`
    mutation moveItemFromCollectionToCollection(
        $itemId: String!
        $collectionId: String!
    ) {
        updateOneItem(
            data: { collection: { connect: { id: $collectionId } } }
            where: { id: $itemId }
        ) {
            id
        }
    }
`

/**
 * __useMoveItemFromCollectionToCollectionMutation__
 *
 * To run a mutation, you first call `useMoveItemFromCollectionToCollectionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMoveItemFromCollectionToCollectionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [moveItemFromCollectionToCollectionMutation, { data, loading, error }] = useMoveItemFromCollectionToCollectionMutation({
 *   variables: {
 *      itemId: // value for 'itemId'
 *      collectionId: // value for 'collectionId'
 *   },
 * });
 */
export function useMoveItemFromCollectionToCollectionMutation(
    baseOptions?: ApolloReactHooks.MutationHookOptions<
        MoveItemFromCollectionToCollectionMutation,
        MoveItemFromCollectionToCollectionMutationVariables
    >
) {
    return ApolloReactHooks.useMutation<
        MoveItemFromCollectionToCollectionMutation,
        MoveItemFromCollectionToCollectionMutationVariables
    >(MoveItemFromCollectionToCollectionDocument, baseOptions)
}
export type MoveItemFromCollectionToCollectionMutationHookResult = ReturnType<
    typeof useMoveItemFromCollectionToCollectionMutation
>
export type MoveItemFromCollectionToCollectionMutationResult = ApolloReactCommon.MutationResult<
    MoveItemFromCollectionToCollectionMutation
>
export type MoveItemFromCollectionToCollectionMutationOptions = ApolloReactCommon.BaseMutationOptions<
    MoveItemFromCollectionToCollectionMutation,
    MoveItemFromCollectionToCollectionMutationVariables
>
export const MoveItemFromCollectionToInboxDocument = gql`
    mutation moveItemFromCollectionToInbox(
        $itemId: String!
        $authUserId: String!
    ) {
        updateOneItem(
            data: {
                collection: { disconnect: true }
                inboxOwner: { connect: { authUserId: $authUserId } }
            }
            where: { id: $itemId }
        ) {
            id
        }
    }
`

/**
 * __useMoveItemFromCollectionToInboxMutation__
 *
 * To run a mutation, you first call `useMoveItemFromCollectionToInboxMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMoveItemFromCollectionToInboxMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [moveItemFromCollectionToInboxMutation, { data, loading, error }] = useMoveItemFromCollectionToInboxMutation({
 *   variables: {
 *      itemId: // value for 'itemId'
 *      authUserId: // value for 'authUserId'
 *   },
 * });
 */
export function useMoveItemFromCollectionToInboxMutation(
    baseOptions?: ApolloReactHooks.MutationHookOptions<
        MoveItemFromCollectionToInboxMutation,
        MoveItemFromCollectionToInboxMutationVariables
    >
) {
    return ApolloReactHooks.useMutation<
        MoveItemFromCollectionToInboxMutation,
        MoveItemFromCollectionToInboxMutationVariables
    >(MoveItemFromCollectionToInboxDocument, baseOptions)
}
export type MoveItemFromCollectionToInboxMutationHookResult = ReturnType<
    typeof useMoveItemFromCollectionToInboxMutation
>
export type MoveItemFromCollectionToInboxMutationResult = ApolloReactCommon.MutationResult<
    MoveItemFromCollectionToInboxMutation
>
export type MoveItemFromCollectionToInboxMutationOptions = ApolloReactCommon.BaseMutationOptions<
    MoveItemFromCollectionToInboxMutation,
    MoveItemFromCollectionToInboxMutationVariables
>
export const GetInboxDocument = gql`
    query getInbox {
        inbox {
            id
            items {
                ...ItemPreview
                ...ItemDetail
            }
        }
    }
    ${ItemPreviewFragmentDoc}
    ${ItemDetailFragmentDoc}
`

/**
 * __useGetInboxQuery__
 *
 * To run a query within a React component, call `useGetInboxQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetInboxQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetInboxQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetInboxQuery(
    baseOptions?: ApolloReactHooks.QueryHookOptions<
        GetInboxQuery,
        GetInboxQueryVariables
    >
) {
    return ApolloReactHooks.useQuery<GetInboxQuery, GetInboxQueryVariables>(
        GetInboxDocument,
        baseOptions
    )
}
export function useGetInboxLazyQuery(
    baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
        GetInboxQuery,
        GetInboxQueryVariables
    >
) {
    return ApolloReactHooks.useLazyQuery<GetInboxQuery, GetInboxQueryVariables>(
        GetInboxDocument,
        baseOptions
    )
}
export type GetInboxQueryHookResult = ReturnType<typeof useGetInboxQuery>
export type GetInboxLazyQueryHookResult = ReturnType<
    typeof useGetInboxLazyQuery
>
export type GetInboxQueryResult = ApolloReactCommon.QueryResult<
    GetInboxQuery,
    GetInboxQueryVariables
>
export const MoveItemFromInboxToCollectionDocument = gql`
    mutation moveItemFromInboxToCollection(
        $itemId: String!
        $collectionId: String!
    ) {
        updateOneItem(
            data: {
                collection: { connect: { id: $collectionId } }
                inboxOwner: { disconnect: true }
            }
            where: { id: $itemId }
        ) {
            id
        }
    }
`

/**
 * __useMoveItemFromInboxToCollectionMutation__
 *
 * To run a mutation, you first call `useMoveItemFromInboxToCollectionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMoveItemFromInboxToCollectionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [moveItemFromInboxToCollectionMutation, { data, loading, error }] = useMoveItemFromInboxToCollectionMutation({
 *   variables: {
 *      itemId: // value for 'itemId'
 *      collectionId: // value for 'collectionId'
 *   },
 * });
 */
export function useMoveItemFromInboxToCollectionMutation(
    baseOptions?: ApolloReactHooks.MutationHookOptions<
        MoveItemFromInboxToCollectionMutation,
        MoveItemFromInboxToCollectionMutationVariables
    >
) {
    return ApolloReactHooks.useMutation<
        MoveItemFromInboxToCollectionMutation,
        MoveItemFromInboxToCollectionMutationVariables
    >(MoveItemFromInboxToCollectionDocument, baseOptions)
}
export type MoveItemFromInboxToCollectionMutationHookResult = ReturnType<
    typeof useMoveItemFromInboxToCollectionMutation
>
export type MoveItemFromInboxToCollectionMutationResult = ApolloReactCommon.MutationResult<
    MoveItemFromInboxToCollectionMutation
>
export type MoveItemFromInboxToCollectionMutationOptions = ApolloReactCommon.BaseMutationOptions<
    MoveItemFromInboxToCollectionMutation,
    MoveItemFromInboxToCollectionMutationVariables
>
export const GetSectionDocument = gql`
    query getSection($sectionId: String!) {
        section(where: { id: $sectionId }) {
            ...SectionDetails
        }
    }
    ${SectionDetailsFragmentDoc}
`

/**
 * __useGetSectionQuery__
 *
 * To run a query within a React component, call `useGetSectionQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSectionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSectionQuery({
 *   variables: {
 *      sectionId: // value for 'sectionId'
 *   },
 * });
 */
export function useGetSectionQuery(
    baseOptions?: ApolloReactHooks.QueryHookOptions<
        GetSectionQuery,
        GetSectionQueryVariables
    >
) {
    return ApolloReactHooks.useQuery<GetSectionQuery, GetSectionQueryVariables>(
        GetSectionDocument,
        baseOptions
    )
}
export function useGetSectionLazyQuery(
    baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
        GetSectionQuery,
        GetSectionQueryVariables
    >
) {
    return ApolloReactHooks.useLazyQuery<
        GetSectionQuery,
        GetSectionQueryVariables
    >(GetSectionDocument, baseOptions)
}
export type GetSectionQueryHookResult = ReturnType<typeof useGetSectionQuery>
export type GetSectionLazyQueryHookResult = ReturnType<
    typeof useGetSectionLazyQuery
>
export type GetSectionQueryResult = ApolloReactCommon.QueryResult<
    GetSectionQuery,
    GetSectionQueryVariables
>
export const DeleteSectionDocument = gql`
    mutation deleteSection($sectionId: String!) {
        updateOneSection(data: { isDeleted: true }, where: { id: $sectionId }) {
            id
            slug
            title: name
        }
    }
`

/**
 * __useDeleteSectionMutation__
 *
 * To run a mutation, you first call `useDeleteSectionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteSectionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteSectionMutation, { data, loading, error }] = useDeleteSectionMutation({
 *   variables: {
 *      sectionId: // value for 'sectionId'
 *   },
 * });
 */
export function useDeleteSectionMutation(
    baseOptions?: ApolloReactHooks.MutationHookOptions<
        DeleteSectionMutation,
        DeleteSectionMutationVariables
    >
) {
    return ApolloReactHooks.useMutation<
        DeleteSectionMutation,
        DeleteSectionMutationVariables
    >(DeleteSectionDocument, baseOptions)
}
export type DeleteSectionMutationHookResult = ReturnType<
    typeof useDeleteSectionMutation
>
export type DeleteSectionMutationResult = ApolloReactCommon.MutationResult<
    DeleteSectionMutation
>
export type DeleteSectionMutationOptions = ApolloReactCommon.BaseMutationOptions<
    DeleteSectionMutation,
    DeleteSectionMutationVariables
>
export const UpdateSectionDocument = gql`
    mutation updateSection($sectionId: String!, $title: String) {
        updateOneSection(data: { name: $title }, where: { id: $sectionId }) {
            id
            slug
            index
            title: name
        }
    }
`

/**
 * __useUpdateSectionMutation__
 *
 * To run a mutation, you first call `useUpdateSectionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateSectionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateSectionMutation, { data, loading, error }] = useUpdateSectionMutation({
 *   variables: {
 *      sectionId: // value for 'sectionId'
 *      title: // value for 'title'
 *   },
 * });
 */
export function useUpdateSectionMutation(
    baseOptions?: ApolloReactHooks.MutationHookOptions<
        UpdateSectionMutation,
        UpdateSectionMutationVariables
    >
) {
    return ApolloReactHooks.useMutation<
        UpdateSectionMutation,
        UpdateSectionMutationVariables
    >(UpdateSectionDocument, baseOptions)
}
export type UpdateSectionMutationHookResult = ReturnType<
    typeof useUpdateSectionMutation
>
export type UpdateSectionMutationResult = ApolloReactCommon.MutationResult<
    UpdateSectionMutation
>
export type UpdateSectionMutationOptions = ApolloReactCommon.BaseMutationOptions<
    UpdateSectionMutation,
    UpdateSectionMutationVariables
>
export const CreateEmptyCollectionDocument = gql`
    mutation CreateEmptyCollection($sectionId: ID!) {
        collection: createEmptyCollection(sectionId: $sectionId) {
            id
            slug
            name
        }
    }
`

/**
 * __useCreateEmptyCollectionMutation__
 *
 * To run a mutation, you first call `useCreateEmptyCollectionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateEmptyCollectionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createEmptyCollectionMutation, { data, loading, error }] = useCreateEmptyCollectionMutation({
 *   variables: {
 *      sectionId: // value for 'sectionId'
 *   },
 * });
 */
export function useCreateEmptyCollectionMutation(
    baseOptions?: ApolloReactHooks.MutationHookOptions<
        CreateEmptyCollectionMutation,
        CreateEmptyCollectionMutationVariables
    >
) {
    return ApolloReactHooks.useMutation<
        CreateEmptyCollectionMutation,
        CreateEmptyCollectionMutationVariables
    >(CreateEmptyCollectionDocument, baseOptions)
}
export type CreateEmptyCollectionMutationHookResult = ReturnType<
    typeof useCreateEmptyCollectionMutation
>
export type CreateEmptyCollectionMutationResult = ApolloReactCommon.MutationResult<
    CreateEmptyCollectionMutation
>
export type CreateEmptyCollectionMutationOptions = ApolloReactCommon.BaseMutationOptions<
    CreateEmptyCollectionMutation,
    CreateEmptyCollectionMutationVariables
>
export const GetSettingsDocument = gql`
    query getSettings($authUserId: String!) {
        user(where: { authUserId: $authUserId }) {
            ...UserBasic
        }
    }
    ${UserBasicFragmentDoc}
`

/**
 * __useGetSettingsQuery__
 *
 * To run a query within a React component, call `useGetSettingsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSettingsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSettingsQuery({
 *   variables: {
 *      authUserId: // value for 'authUserId'
 *   },
 * });
 */
export function useGetSettingsQuery(
    baseOptions?: ApolloReactHooks.QueryHookOptions<
        GetSettingsQuery,
        GetSettingsQueryVariables
    >
) {
    return ApolloReactHooks.useQuery<
        GetSettingsQuery,
        GetSettingsQueryVariables
    >(GetSettingsDocument, baseOptions)
}
export function useGetSettingsLazyQuery(
    baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
        GetSettingsQuery,
        GetSettingsQueryVariables
    >
) {
    return ApolloReactHooks.useLazyQuery<
        GetSettingsQuery,
        GetSettingsQueryVariables
    >(GetSettingsDocument, baseOptions)
}
export type GetSettingsQueryHookResult = ReturnType<typeof useGetSettingsQuery>
export type GetSettingsLazyQueryHookResult = ReturnType<
    typeof useGetSettingsLazyQuery
>
export type GetSettingsQueryResult = ApolloReactCommon.QueryResult<
    GetSettingsQuery,
    GetSettingsQueryVariables
>
export const UpdateAvatarDocument = gql`
    mutation updateAvatar($authUserId: String!, $pictureUrl: String!) {
        updateOneUser(
            data: { pictureUrl: $pictureUrl }
            where: { authUserId: $authUserId }
        ) {
            ...UserBasic
        }
    }
    ${UserBasicFragmentDoc}
`

/**
 * __useUpdateAvatarMutation__
 *
 * To run a mutation, you first call `useUpdateAvatarMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateAvatarMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAvatarMutation, { data, loading, error }] = useUpdateAvatarMutation({
 *   variables: {
 *      authUserId: // value for 'authUserId'
 *      pictureUrl: // value for 'pictureUrl'
 *   },
 * });
 */
export function useUpdateAvatarMutation(
    baseOptions?: ApolloReactHooks.MutationHookOptions<
        UpdateAvatarMutation,
        UpdateAvatarMutationVariables
    >
) {
    return ApolloReactHooks.useMutation<
        UpdateAvatarMutation,
        UpdateAvatarMutationVariables
    >(UpdateAvatarDocument, baseOptions)
}
export type UpdateAvatarMutationHookResult = ReturnType<
    typeof useUpdateAvatarMutation
>
export type UpdateAvatarMutationResult = ApolloReactCommon.MutationResult<
    UpdateAvatarMutation
>
export type UpdateAvatarMutationOptions = ApolloReactCommon.BaseMutationOptions<
    UpdateAvatarMutation,
    UpdateAvatarMutationVariables
>
export const UpdateSettingsDocument = gql`
    mutation updateSettings(
        $authUserId: String!
        $slug: String!
        $biography: String!
        $firstname: String!
    ) {
        updateOneUser(
            data: { slug: $slug, biography: $biography, firstname: $firstname }
            where: { authUserId: $authUserId }
        ) {
            ...UserBasic
        }
    }
    ${UserBasicFragmentDoc}
`

/**
 * __useUpdateSettingsMutation__
 *
 * To run a mutation, you first call `useUpdateSettingsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateSettingsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateSettingsMutation, { data, loading, error }] = useUpdateSettingsMutation({
 *   variables: {
 *      authUserId: // value for 'authUserId'
 *      slug: // value for 'slug'
 *      biography: // value for 'biography'
 *      firstname: // value for 'firstname'
 *   },
 * });
 */
export function useUpdateSettingsMutation(
    baseOptions?: ApolloReactHooks.MutationHookOptions<
        UpdateSettingsMutation,
        UpdateSettingsMutationVariables
    >
) {
    return ApolloReactHooks.useMutation<
        UpdateSettingsMutation,
        UpdateSettingsMutationVariables
    >(UpdateSettingsDocument, baseOptions)
}
export type UpdateSettingsMutationHookResult = ReturnType<
    typeof useUpdateSettingsMutation
>
export type UpdateSettingsMutationResult = ApolloReactCommon.MutationResult<
    UpdateSettingsMutation
>
export type UpdateSettingsMutationOptions = ApolloReactCommon.BaseMutationOptions<
    UpdateSettingsMutation,
    UpdateSettingsMutationVariables
>
export const CheckUserSlugDocument = gql`
    query checkUserSlug($slug: String!) {
        user(where: { slug: $slug }) {
            id
            slug
        }
    }
`

/**
 * __useCheckUserSlugQuery__
 *
 * To run a query within a React component, call `useCheckUserSlugQuery` and pass it any options that fit your needs.
 * When your component renders, `useCheckUserSlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCheckUserSlugQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useCheckUserSlugQuery(
    baseOptions?: ApolloReactHooks.QueryHookOptions<
        CheckUserSlugQuery,
        CheckUserSlugQueryVariables
    >
) {
    return ApolloReactHooks.useQuery<
        CheckUserSlugQuery,
        CheckUserSlugQueryVariables
    >(CheckUserSlugDocument, baseOptions)
}
export function useCheckUserSlugLazyQuery(
    baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
        CheckUserSlugQuery,
        CheckUserSlugQueryVariables
    >
) {
    return ApolloReactHooks.useLazyQuery<
        CheckUserSlugQuery,
        CheckUserSlugQueryVariables
    >(CheckUserSlugDocument, baseOptions)
}
export type CheckUserSlugQueryHookResult = ReturnType<
    typeof useCheckUserSlugQuery
>
export type CheckUserSlugLazyQueryHookResult = ReturnType<
    typeof useCheckUserSlugLazyQuery
>
export type CheckUserSlugQueryResult = ApolloReactCommon.QueryResult<
    CheckUserSlugQuery,
    CheckUserSlugQueryVariables
>
export const SignS3Document = gql`
    mutation signS3($fileName: String!, $fileType: String!) {
        signS3(fileName: $fileName, fileType: $fileType) {
            signedRequest
            url
        }
    }
`

/**
 * __useSignS3Mutation__
 *
 * To run a mutation, you first call `useSignS3Mutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignS3Mutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signS3Mutation, { data, loading, error }] = useSignS3Mutation({
 *   variables: {
 *      fileName: // value for 'fileName'
 *      fileType: // value for 'fileType'
 *   },
 * });
 */
export function useSignS3Mutation(
    baseOptions?: ApolloReactHooks.MutationHookOptions<
        SignS3Mutation,
        SignS3MutationVariables
    >
) {
    return ApolloReactHooks.useMutation<
        SignS3Mutation,
        SignS3MutationVariables
    >(SignS3Document, baseOptions)
}
export type SignS3MutationHookResult = ReturnType<typeof useSignS3Mutation>
export type SignS3MutationResult = ApolloReactCommon.MutationResult<
    SignS3Mutation
>
export type SignS3MutationOptions = ApolloReactCommon.BaseMutationOptions<
    SignS3Mutation,
    SignS3MutationVariables
>
export const CreateItemFromUrlDocument = gql`
    mutation CreateItemFromUrl(
        $url: String!
        $collectionId: String
        $inbox: Boolean
    ) {
        items: createItemFromUrl(
            collectionId: $collectionId
            url: $url
            inbox: $inbox
        ) {
            ...ItemPreview
            ...ItemDetail
        }
    }
    ${ItemPreviewFragmentDoc}
    ${ItemDetailFragmentDoc}
`

/**
 * __useCreateItemFromUrlMutation__
 *
 * To run a mutation, you first call `useCreateItemFromUrlMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateItemFromUrlMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createItemFromUrlMutation, { data, loading, error }] = useCreateItemFromUrlMutation({
 *   variables: {
 *      url: // value for 'url'
 *      collectionId: // value for 'collectionId'
 *      inbox: // value for 'inbox'
 *   },
 * });
 */
export function useCreateItemFromUrlMutation(
    baseOptions?: ApolloReactHooks.MutationHookOptions<
        CreateItemFromUrlMutation,
        CreateItemFromUrlMutationVariables
    >
) {
    return ApolloReactHooks.useMutation<
        CreateItemFromUrlMutation,
        CreateItemFromUrlMutationVariables
    >(CreateItemFromUrlDocument, baseOptions)
}
export type CreateItemFromUrlMutationHookResult = ReturnType<
    typeof useCreateItemFromUrlMutation
>
export type CreateItemFromUrlMutationResult = ApolloReactCommon.MutationResult<
    CreateItemFromUrlMutation
>
export type CreateItemFromUrlMutationOptions = ApolloReactCommon.BaseMutationOptions<
    CreateItemFromUrlMutation,
    CreateItemFromUrlMutationVariables
>
export const CreateItemFromSearchDocument = gql`
    mutation CreateItemFromSearch(
        $id: String!
        $kind: String!
        $collectionId: String
        $inbox: Boolean
    ) {
        items: createItemFromSearch(
            collectionId: $collectionId
            id: $id
            kind: $kind
            inbox: $inbox
        ) {
            ...ItemPreview
            ...ItemDetail
        }
    }
    ${ItemPreviewFragmentDoc}
    ${ItemDetailFragmentDoc}
`

/**
 * __useCreateItemFromSearchMutation__
 *
 * To run a mutation, you first call `useCreateItemFromSearchMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateItemFromSearchMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createItemFromSearchMutation, { data, loading, error }] = useCreateItemFromSearchMutation({
 *   variables: {
 *      id: // value for 'id'
 *      kind: // value for 'kind'
 *      collectionId: // value for 'collectionId'
 *      inbox: // value for 'inbox'
 *   },
 * });
 */
export function useCreateItemFromSearchMutation(
    baseOptions?: ApolloReactHooks.MutationHookOptions<
        CreateItemFromSearchMutation,
        CreateItemFromSearchMutationVariables
    >
) {
    return ApolloReactHooks.useMutation<
        CreateItemFromSearchMutation,
        CreateItemFromSearchMutationVariables
    >(CreateItemFromSearchDocument, baseOptions)
}
export type CreateItemFromSearchMutationHookResult = ReturnType<
    typeof useCreateItemFromSearchMutation
>
export type CreateItemFromSearchMutationResult = ApolloReactCommon.MutationResult<
    CreateItemFromSearchMutation
>
export type CreateItemFromSearchMutationOptions = ApolloReactCommon.BaseMutationOptions<
    CreateItemFromSearchMutation,
    CreateItemFromSearchMutationVariables
>
export const SearchItemDocument = gql`
    query SearchItem($query: String!, $kind: String!) {
        search(q: $query, kind: $kind) {
            id
            title
            author
            type
        }
    }
`

/**
 * __useSearchItemQuery__
 *
 * To run a query within a React component, call `useSearchItemQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchItemQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchItemQuery({
 *   variables: {
 *      query: // value for 'query'
 *      kind: // value for 'kind'
 *   },
 * });
 */
export function useSearchItemQuery(
    baseOptions?: ApolloReactHooks.QueryHookOptions<
        SearchItemQuery,
        SearchItemQueryVariables
    >
) {
    return ApolloReactHooks.useQuery<SearchItemQuery, SearchItemQueryVariables>(
        SearchItemDocument,
        baseOptions
    )
}
export function useSearchItemLazyQuery(
    baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
        SearchItemQuery,
        SearchItemQueryVariables
    >
) {
    return ApolloReactHooks.useLazyQuery<
        SearchItemQuery,
        SearchItemQueryVariables
    >(SearchItemDocument, baseOptions)
}
export type SearchItemQueryHookResult = ReturnType<typeof useSearchItemQuery>
export type SearchItemLazyQueryHookResult = ReturnType<
    typeof useSearchItemLazyQuery
>
export type SearchItemQueryResult = ApolloReactCommon.QueryResult<
    SearchItemQuery,
    SearchItemQueryVariables
>
export const DeleteItemDocument = gql`
    mutation deleteItem($id: String!) {
        updateOneItem(data: { isDeleted: true }, where: { id: $id }) {
            id
            isDeleted
        }
    }
`

/**
 * __useDeleteItemMutation__
 *
 * To run a mutation, you first call `useDeleteItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteItemMutation, { data, loading, error }] = useDeleteItemMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteItemMutation(
    baseOptions?: ApolloReactHooks.MutationHookOptions<
        DeleteItemMutation,
        DeleteItemMutationVariables
    >
) {
    return ApolloReactHooks.useMutation<
        DeleteItemMutation,
        DeleteItemMutationVariables
    >(DeleteItemDocument, baseOptions)
}
export type DeleteItemMutationHookResult = ReturnType<
    typeof useDeleteItemMutation
>
export type DeleteItemMutationResult = ApolloReactCommon.MutationResult<
    DeleteItemMutation
>
export type DeleteItemMutationOptions = ApolloReactCommon.BaseMutationOptions<
    DeleteItemMutation,
    DeleteItemMutationVariables
>
export const SaveCommentItemDocument = gql`
    mutation saveCommentItem($id: String!, $comment: String!) {
        updateOneItem(data: { comment: $comment }, where: { id: $id }) {
            id
            comment
        }
    }
`

/**
 * __useSaveCommentItemMutation__
 *
 * To run a mutation, you first call `useSaveCommentItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSaveCommentItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [saveCommentItemMutation, { data, loading, error }] = useSaveCommentItemMutation({
 *   variables: {
 *      id: // value for 'id'
 *      comment: // value for 'comment'
 *   },
 * });
 */
export function useSaveCommentItemMutation(
    baseOptions?: ApolloReactHooks.MutationHookOptions<
        SaveCommentItemMutation,
        SaveCommentItemMutationVariables
    >
) {
    return ApolloReactHooks.useMutation<
        SaveCommentItemMutation,
        SaveCommentItemMutationVariables
    >(SaveCommentItemDocument, baseOptions)
}
export type SaveCommentItemMutationHookResult = ReturnType<
    typeof useSaveCommentItemMutation
>
export type SaveCommentItemMutationResult = ApolloReactCommon.MutationResult<
    SaveCommentItemMutation
>
export type SaveCommentItemMutationOptions = ApolloReactCommon.BaseMutationOptions<
    SaveCommentItemMutation,
    SaveCommentItemMutationVariables
>
export const UndeleteItemDocument = gql`
    mutation undeleteItem($id: String!) {
        updateOneItem(data: { isDeleted: false }, where: { id: $id }) {
            id
            isDeleted
        }
    }
`

/**
 * __useUndeleteItemMutation__
 *
 * To run a mutation, you first call `useUndeleteItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUndeleteItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [undeleteItemMutation, { data, loading, error }] = useUndeleteItemMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUndeleteItemMutation(
    baseOptions?: ApolloReactHooks.MutationHookOptions<
        UndeleteItemMutation,
        UndeleteItemMutationVariables
    >
) {
    return ApolloReactHooks.useMutation<
        UndeleteItemMutation,
        UndeleteItemMutationVariables
    >(UndeleteItemDocument, baseOptions)
}
export type UndeleteItemMutationHookResult = ReturnType<
    typeof useUndeleteItemMutation
>
export type UndeleteItemMutationResult = ApolloReactCommon.MutationResult<
    UndeleteItemMutation
>
export type UndeleteItemMutationOptions = ApolloReactCommon.BaseMutationOptions<
    UndeleteItemMutation,
    UndeleteItemMutationVariables
>
export const ChangePositionDocument = gql`
    mutation changePosition(
        $oldIndex: Int!
        $newIndex: Int!
        $collectionId: ID!
    ) {
        changeItemPosition(
            oldIndex: $oldIndex
            newIndex: $newIndex
            collectionId: $collectionId
        ) {
            id
            position
        }
    }
`

/**
 * __useChangePositionMutation__
 *
 * To run a mutation, you first call `useChangePositionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangePositionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changePositionMutation, { data, loading, error }] = useChangePositionMutation({
 *   variables: {
 *      oldIndex: // value for 'oldIndex'
 *      newIndex: // value for 'newIndex'
 *      collectionId: // value for 'collectionId'
 *   },
 * });
 */
export function useChangePositionMutation(
    baseOptions?: ApolloReactHooks.MutationHookOptions<
        ChangePositionMutation,
        ChangePositionMutationVariables
    >
) {
    return ApolloReactHooks.useMutation<
        ChangePositionMutation,
        ChangePositionMutationVariables
    >(ChangePositionDocument, baseOptions)
}
export type ChangePositionMutationHookResult = ReturnType<
    typeof useChangePositionMutation
>
export type ChangePositionMutationResult = ApolloReactCommon.MutationResult<
    ChangePositionMutation
>
export type ChangePositionMutationOptions = ApolloReactCommon.BaseMutationOptions<
    ChangePositionMutation,
    ChangePositionMutationVariables
>
export const GetItemsDocument = gql`
    query getItems($collectionId: String) {
        items(where: { collection: { id: { equals: $collectionId } } }) {
            ...ItemPreview
            ...ItemDetail
        }
    }
    ${ItemPreviewFragmentDoc}
    ${ItemDetailFragmentDoc}
`

/**
 * __useGetItemsQuery__
 *
 * To run a query within a React component, call `useGetItemsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetItemsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetItemsQuery({
 *   variables: {
 *      collectionId: // value for 'collectionId'
 *   },
 * });
 */
export function useGetItemsQuery(
    baseOptions?: ApolloReactHooks.QueryHookOptions<
        GetItemsQuery,
        GetItemsQueryVariables
    >
) {
    return ApolloReactHooks.useQuery<GetItemsQuery, GetItemsQueryVariables>(
        GetItemsDocument,
        baseOptions
    )
}
export function useGetItemsLazyQuery(
    baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
        GetItemsQuery,
        GetItemsQueryVariables
    >
) {
    return ApolloReactHooks.useLazyQuery<GetItemsQuery, GetItemsQueryVariables>(
        GetItemsDocument,
        baseOptions
    )
}
export type GetItemsQueryHookResult = ReturnType<typeof useGetItemsQuery>
export type GetItemsLazyQueryHookResult = ReturnType<
    typeof useGetItemsLazyQuery
>
export type GetItemsQueryResult = ApolloReactCommon.QueryResult<
    GetItemsQuery,
    GetItemsQueryVariables
>
export const GetCollectionModalDocument = gql`
    query getCollectionModal($authUserId: String!) {
        collections(
            where: {
                isDeleted: { equals: false }
                owner: { authUserId: { equals: $authUserId } }
            }
        ) {
            id
            title: name
        }
    }
`

/**
 * __useGetCollectionModalQuery__
 *
 * To run a query within a React component, call `useGetCollectionModalQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCollectionModalQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCollectionModalQuery({
 *   variables: {
 *      authUserId: // value for 'authUserId'
 *   },
 * });
 */
export function useGetCollectionModalQuery(
    baseOptions?: ApolloReactHooks.QueryHookOptions<
        GetCollectionModalQuery,
        GetCollectionModalQueryVariables
    >
) {
    return ApolloReactHooks.useQuery<
        GetCollectionModalQuery,
        GetCollectionModalQueryVariables
    >(GetCollectionModalDocument, baseOptions)
}
export function useGetCollectionModalLazyQuery(
    baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
        GetCollectionModalQuery,
        GetCollectionModalQueryVariables
    >
) {
    return ApolloReactHooks.useLazyQuery<
        GetCollectionModalQuery,
        GetCollectionModalQueryVariables
    >(GetCollectionModalDocument, baseOptions)
}
export type GetCollectionModalQueryHookResult = ReturnType<
    typeof useGetCollectionModalQuery
>
export type GetCollectionModalLazyQueryHookResult = ReturnType<
    typeof useGetCollectionModalLazyQuery
>
export type GetCollectionModalQueryResult = ApolloReactCommon.QueryResult<
    GetCollectionModalQuery,
    GetCollectionModalQueryVariables
>
export const GetStatusMessageDocument = gql`
    query getStatusMessage {
        statusMessage @client
    }
`

/**
 * __useGetStatusMessageQuery__
 *
 * To run a query within a React component, call `useGetStatusMessageQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetStatusMessageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetStatusMessageQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetStatusMessageQuery(
    baseOptions?: ApolloReactHooks.QueryHookOptions<
        GetStatusMessageQuery,
        GetStatusMessageQueryVariables
    >
) {
    return ApolloReactHooks.useQuery<
        GetStatusMessageQuery,
        GetStatusMessageQueryVariables
    >(GetStatusMessageDocument, baseOptions)
}
export function useGetStatusMessageLazyQuery(
    baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
        GetStatusMessageQuery,
        GetStatusMessageQueryVariables
    >
) {
    return ApolloReactHooks.useLazyQuery<
        GetStatusMessageQuery,
        GetStatusMessageQueryVariables
    >(GetStatusMessageDocument, baseOptions)
}
export type GetStatusMessageQueryHookResult = ReturnType<
    typeof useGetStatusMessageQuery
>
export type GetStatusMessageLazyQueryHookResult = ReturnType<
    typeof useGetStatusMessageLazyQuery
>
export type GetStatusMessageQueryResult = ApolloReactCommon.QueryResult<
    GetStatusMessageQuery,
    GetStatusMessageQueryVariables
>
export const GetNavigationStateDocument = gql`
    query getNavigationState {
        modal @client {
            isNavigationOpen
        }
    }
`

/**
 * __useGetNavigationStateQuery__
 *
 * To run a query within a React component, call `useGetNavigationStateQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetNavigationStateQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetNavigationStateQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetNavigationStateQuery(
    baseOptions?: ApolloReactHooks.QueryHookOptions<
        GetNavigationStateQuery,
        GetNavigationStateQueryVariables
    >
) {
    return ApolloReactHooks.useQuery<
        GetNavigationStateQuery,
        GetNavigationStateQueryVariables
    >(GetNavigationStateDocument, baseOptions)
}
export function useGetNavigationStateLazyQuery(
    baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
        GetNavigationStateQuery,
        GetNavigationStateQueryVariables
    >
) {
    return ApolloReactHooks.useLazyQuery<
        GetNavigationStateQuery,
        GetNavigationStateQueryVariables
    >(GetNavigationStateDocument, baseOptions)
}
export type GetNavigationStateQueryHookResult = ReturnType<
    typeof useGetNavigationStateQuery
>
export type GetNavigationStateLazyQueryHookResult = ReturnType<
    typeof useGetNavigationStateLazyQuery
>
export type GetNavigationStateQueryResult = ApolloReactCommon.QueryResult<
    GetNavigationStateQuery,
    GetNavigationStateQueryVariables
>
export const GetSectionsDocument = gql`
    query getSections($authUserId: String!) {
        user(where: { authUserId: $authUserId }) {
            id
            slug
        }
        inbox {
            id
            count
        }
        sections(
            where: {
                isDeleted: { equals: false }
                owner: { authUserId: { equals: $authUserId } }
            }
        ) {
            id
            createdAt
            isExpanded
            title: name
            collections(
                where: { isDeleted: { equals: false } }
                orderBy: { createdAt: asc }
            ) {
                id
                slug
                isDeleted
                title: name
            }
        }
    }
`

/**
 * __useGetSectionsQuery__
 *
 * To run a query within a React component, call `useGetSectionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSectionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSectionsQuery({
 *   variables: {
 *      authUserId: // value for 'authUserId'
 *   },
 * });
 */
export function useGetSectionsQuery(
    baseOptions?: ApolloReactHooks.QueryHookOptions<
        GetSectionsQuery,
        GetSectionsQueryVariables
    >
) {
    return ApolloReactHooks.useQuery<
        GetSectionsQuery,
        GetSectionsQueryVariables
    >(GetSectionsDocument, baseOptions)
}
export function useGetSectionsLazyQuery(
    baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
        GetSectionsQuery,
        GetSectionsQueryVariables
    >
) {
    return ApolloReactHooks.useLazyQuery<
        GetSectionsQuery,
        GetSectionsQueryVariables
    >(GetSectionsDocument, baseOptions)
}
export type GetSectionsQueryHookResult = ReturnType<typeof useGetSectionsQuery>
export type GetSectionsLazyQueryHookResult = ReturnType<
    typeof useGetSectionsLazyQuery
>
export type GetSectionsQueryResult = ApolloReactCommon.QueryResult<
    GetSectionsQuery,
    GetSectionsQueryVariables
>
export const CreateSectionDocument = gql`
    mutation createSection {
        createEmptySection {
            id
            slug
            createdAt
            title: name
            index
            isExpanded
            collections(where: { isDeleted: { equals: false } }) {
                id
                slug
                isDeleted
                title: name
            }
        }
    }
`

/**
 * __useCreateSectionMutation__
 *
 * To run a mutation, you first call `useCreateSectionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSectionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSectionMutation, { data, loading, error }] = useCreateSectionMutation({
 *   variables: {
 *   },
 * });
 */
export function useCreateSectionMutation(
    baseOptions?: ApolloReactHooks.MutationHookOptions<
        CreateSectionMutation,
        CreateSectionMutationVariables
    >
) {
    return ApolloReactHooks.useMutation<
        CreateSectionMutation,
        CreateSectionMutationVariables
    >(CreateSectionDocument, baseOptions)
}
export type CreateSectionMutationHookResult = ReturnType<
    typeof useCreateSectionMutation
>
export type CreateSectionMutationResult = ApolloReactCommon.MutationResult<
    CreateSectionMutation
>
export type CreateSectionMutationOptions = ApolloReactCommon.BaseMutationOptions<
    CreateSectionMutation,
    CreateSectionMutationVariables
>
export const UpdateSectionExpandedDocument = gql`
    mutation updateSectionExpanded($isExpanded: Boolean!, $sectionId: String!) {
        updateOneSection(
            where: { id: $sectionId }
            data: { isExpanded: $isExpanded }
        ) {
            id
            isExpanded
        }
    }
`

/**
 * __useUpdateSectionExpandedMutation__
 *
 * To run a mutation, you first call `useUpdateSectionExpandedMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateSectionExpandedMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateSectionExpandedMutation, { data, loading, error }] = useUpdateSectionExpandedMutation({
 *   variables: {
 *      isExpanded: // value for 'isExpanded'
 *      sectionId: // value for 'sectionId'
 *   },
 * });
 */
export function useUpdateSectionExpandedMutation(
    baseOptions?: ApolloReactHooks.MutationHookOptions<
        UpdateSectionExpandedMutation,
        UpdateSectionExpandedMutationVariables
    >
) {
    return ApolloReactHooks.useMutation<
        UpdateSectionExpandedMutation,
        UpdateSectionExpandedMutationVariables
    >(UpdateSectionExpandedDocument, baseOptions)
}
export type UpdateSectionExpandedMutationHookResult = ReturnType<
    typeof useUpdateSectionExpandedMutation
>
export type UpdateSectionExpandedMutationResult = ApolloReactCommon.MutationResult<
    UpdateSectionExpandedMutation
>
export type UpdateSectionExpandedMutationOptions = ApolloReactCommon.BaseMutationOptions<
    UpdateSectionExpandedMutation,
    UpdateSectionExpandedMutationVariables
>
export const GetCollectionProfileDocument = gql`
    query getCollectionProfile($collectionId: String!) {
        collection(where: { id: $collectionId }) {
            ...CollectionBasic
            createdAt
            owner {
                pictureUrl
                firstname
                slug
            }
            items {
                ...ItemPreview
                ...ItemDetail
            }
            section {
                id
                name
                slug
            }
        }
    }
    ${CollectionBasicFragmentDoc}
    ${ItemPreviewFragmentDoc}
    ${ItemDetailFragmentDoc}
`

/**
 * __useGetCollectionProfileQuery__
 *
 * To run a query within a React component, call `useGetCollectionProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCollectionProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCollectionProfileQuery({
 *   variables: {
 *      collectionId: // value for 'collectionId'
 *   },
 * });
 */
export function useGetCollectionProfileQuery(
    baseOptions?: ApolloReactHooks.QueryHookOptions<
        GetCollectionProfileQuery,
        GetCollectionProfileQueryVariables
    >
) {
    return ApolloReactHooks.useQuery<
        GetCollectionProfileQuery,
        GetCollectionProfileQueryVariables
    >(GetCollectionProfileDocument, baseOptions)
}
export function useGetCollectionProfileLazyQuery(
    baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
        GetCollectionProfileQuery,
        GetCollectionProfileQueryVariables
    >
) {
    return ApolloReactHooks.useLazyQuery<
        GetCollectionProfileQuery,
        GetCollectionProfileQueryVariables
    >(GetCollectionProfileDocument, baseOptions)
}
export type GetCollectionProfileQueryHookResult = ReturnType<
    typeof useGetCollectionProfileQuery
>
export type GetCollectionProfileLazyQueryHookResult = ReturnType<
    typeof useGetCollectionProfileLazyQuery
>
export type GetCollectionProfileQueryResult = ApolloReactCommon.QueryResult<
    GetCollectionProfileQuery,
    GetCollectionProfileQueryVariables
>
export const GetProfileDocument = gql`
    query getProfile($slug: String) {
        user(where: { slug: $slug }) {
            ...UserBasic
            ...Social
        }
        sections(
            where: {
                owner: { slug: { equals: $slug } }
                isDeleted: { equals: false }
            }
        ) {
            id
            slug
            name
            index
        }
    }
    ${UserBasicFragmentDoc}
    ${SocialFragmentDoc}
`

/**
 * __useGetProfileQuery__
 *
 * To run a query within a React component, call `useGetProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProfileQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useGetProfileQuery(
    baseOptions?: ApolloReactHooks.QueryHookOptions<
        GetProfileQuery,
        GetProfileQueryVariables
    >
) {
    return ApolloReactHooks.useQuery<GetProfileQuery, GetProfileQueryVariables>(
        GetProfileDocument,
        baseOptions
    )
}
export function useGetProfileLazyQuery(
    baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
        GetProfileQuery,
        GetProfileQueryVariables
    >
) {
    return ApolloReactHooks.useLazyQuery<
        GetProfileQuery,
        GetProfileQueryVariables
    >(GetProfileDocument, baseOptions)
}
export type GetProfileQueryHookResult = ReturnType<typeof useGetProfileQuery>
export type GetProfileLazyQueryHookResult = ReturnType<
    typeof useGetProfileLazyQuery
>
export type GetProfileQueryResult = ApolloReactCommon.QueryResult<
    GetProfileQuery,
    GetProfileQueryVariables
>
export const GetBreadcrumbsDocument = gql`
    query getBreadcrumbs {
        breadcrumbs @client {
            title
            as
            href
        }
    }
`

/**
 * __useGetBreadcrumbsQuery__
 *
 * To run a query within a React component, call `useGetBreadcrumbsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBreadcrumbsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBreadcrumbsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetBreadcrumbsQuery(
    baseOptions?: ApolloReactHooks.QueryHookOptions<
        GetBreadcrumbsQuery,
        GetBreadcrumbsQueryVariables
    >
) {
    return ApolloReactHooks.useQuery<
        GetBreadcrumbsQuery,
        GetBreadcrumbsQueryVariables
    >(GetBreadcrumbsDocument, baseOptions)
}
export function useGetBreadcrumbsLazyQuery(
    baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
        GetBreadcrumbsQuery,
        GetBreadcrumbsQueryVariables
    >
) {
    return ApolloReactHooks.useLazyQuery<
        GetBreadcrumbsQuery,
        GetBreadcrumbsQueryVariables
    >(GetBreadcrumbsDocument, baseOptions)
}
export type GetBreadcrumbsQueryHookResult = ReturnType<
    typeof useGetBreadcrumbsQuery
>
export type GetBreadcrumbsLazyQueryHookResult = ReturnType<
    typeof useGetBreadcrumbsLazyQuery
>
export type GetBreadcrumbsQueryResult = ApolloReactCommon.QueryResult<
    GetBreadcrumbsQuery,
    GetBreadcrumbsQueryVariables
>
export const GetUserByAuthIdDocument = gql`
    query getUserByAuthId($authId: String!) {
        user(where: { authUserId: $authId }) {
            ...UserBasic
        }
    }
    ${UserBasicFragmentDoc}
`

/**
 * __useGetUserByAuthIdQuery__
 *
 * To run a query within a React component, call `useGetUserByAuthIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserByAuthIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserByAuthIdQuery({
 *   variables: {
 *      authId: // value for 'authId'
 *   },
 * });
 */
export function useGetUserByAuthIdQuery(
    baseOptions?: ApolloReactHooks.QueryHookOptions<
        GetUserByAuthIdQuery,
        GetUserByAuthIdQueryVariables
    >
) {
    return ApolloReactHooks.useQuery<
        GetUserByAuthIdQuery,
        GetUserByAuthIdQueryVariables
    >(GetUserByAuthIdDocument, baseOptions)
}
export function useGetUserByAuthIdLazyQuery(
    baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
        GetUserByAuthIdQuery,
        GetUserByAuthIdQueryVariables
    >
) {
    return ApolloReactHooks.useLazyQuery<
        GetUserByAuthIdQuery,
        GetUserByAuthIdQueryVariables
    >(GetUserByAuthIdDocument, baseOptions)
}
export type GetUserByAuthIdQueryHookResult = ReturnType<
    typeof useGetUserByAuthIdQuery
>
export type GetUserByAuthIdLazyQueryHookResult = ReturnType<
    typeof useGetUserByAuthIdLazyQuery
>
export type GetUserByAuthIdQueryResult = ApolloReactCommon.QueryResult<
    GetUserByAuthIdQuery,
    GetUserByAuthIdQueryVariables
>
