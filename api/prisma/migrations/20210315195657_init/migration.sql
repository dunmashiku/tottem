-- CreateEnum
CREATE TYPE "ItemType" AS ENUM ('book', 'album', 'movie', 'video', 'people', 'article', 'podcast', 'website', 'repository');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "authUserId" TEXT,
    "slug" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "firstname" TEXT NOT NULL,
    "pictureUrl" TEXT NOT NULL,
    "biography" TEXT,
    "linkedin" TEXT,
    "github" TEXT,
    "mail" TEXT,
    "youtube" TEXT,
    "website" TEXT,
    "label" TEXT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Section" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "slug" TEXT NOT NULL,
    "name" TEXT,
    "index" INTEGER NOT NULL DEFAULT 0,
    "ownerId" TEXT NOT NULL,
    "isExpanded" BOOLEAN NOT NULL DEFAULT true,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Collection" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "slug" TEXT NOT NULL,
    "name" TEXT,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "detail" TEXT,
    "sectionId" TEXT NOT NULL,
    "ownerId" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Item" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "position" INTEGER NOT NULL DEFAULT 0,
    "title" TEXT NOT NULL,
    "provider" TEXT,
    "author" TEXT,
    "type" "ItemType" NOT NULL,
    "productUrl" TEXT,
    "imageUrl" TEXT,
    "description" TEXT,
    "comment" TEXT,
    "collectionId" TEXT,
    "meta" TEXT DEFAULT E'{}',
    "inboxOwnerId" TEXT,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User.authUserId_unique" ON "User"("authUserId");

-- CreateIndex
CREATE UNIQUE INDEX "User.slug_unique" ON "User"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Collection.slug_unique" ON "Collection"("slug");

-- AddForeignKey
ALTER TABLE "Section" ADD FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Collection" ADD FOREIGN KEY ("sectionId") REFERENCES "Section"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Collection" ADD FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Item" ADD FOREIGN KEY ("collectionId") REFERENCES "Collection"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Item" ADD FOREIGN KEY ("inboxOwnerId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
