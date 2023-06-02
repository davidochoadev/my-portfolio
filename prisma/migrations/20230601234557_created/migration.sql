-- CreateTable
CREATE TABLE "Work" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "picture_url" TEXT NOT NULL,
    "preview_url" TEXT NOT NULL,
    "repo_url" TEXT NOT NULL
);
