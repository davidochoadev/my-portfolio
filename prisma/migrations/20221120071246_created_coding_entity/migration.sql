-- CreateTable
CREATE TABLE "Coding" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "typescript" INTEGER NOT NULL DEFAULT 0,
    "javascript" INTEGER NOT NULL DEFAULT 0,
    "html" INTEGER NOT NULL DEFAULT 0,
    "css" INTEGER NOT NULL DEFAULT 0,
    "others" INTEGER NOT NULL DEFAULT 0,
    CONSTRAINT "Coding_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Coding_userId_key" ON "Coding"("userId");
