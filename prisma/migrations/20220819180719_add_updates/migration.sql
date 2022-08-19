/*
  Warnings:

  - You are about to drop the column `reaction` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `support` on the `Post` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "_reactedPosts" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_reactedPosts_A_fkey" FOREIGN KEY ("A") REFERENCES "Post" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_reactedPosts_B_fkey" FOREIGN KEY ("B") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_supportedPosts" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_supportedPosts_A_fkey" FOREIGN KEY ("A") REFERENCES "Post" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_supportedPosts_B_fkey" FOREIGN KEY ("B") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Post" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "content" TEXT,
    "published" BOOLEAN NOT NULL DEFAULT false,
    "userId" TEXT,
    "authorId" TEXT,
    CONSTRAINT "Post_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Post" ("authorId", "content", "id", "published", "title", "userId") SELECT "authorId", "content", "id", "published", "title", "userId" FROM "Post";
DROP TABLE "Post";
ALTER TABLE "new_Post" RENAME TO "Post";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "_reactedPosts_AB_unique" ON "_reactedPosts"("A", "B");

-- CreateIndex
CREATE INDEX "_reactedPosts_B_index" ON "_reactedPosts"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_supportedPosts_AB_unique" ON "_supportedPosts"("A", "B");

-- CreateIndex
CREATE INDEX "_supportedPosts_B_index" ON "_supportedPosts"("B");
