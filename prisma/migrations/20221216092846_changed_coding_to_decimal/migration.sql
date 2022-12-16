/*
  Warnings:

  - You are about to alter the column `css` on the `Coding` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Decimal`.
  - You are about to alter the column `html` on the `Coding` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Decimal`.
  - You are about to alter the column `javascript` on the `Coding` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Decimal`.
  - You are about to alter the column `others` on the `Coding` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Decimal`.
  - You are about to alter the column `typescript` on the `Coding` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Decimal`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Coding" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "typescript" DECIMAL NOT NULL DEFAULT 0.0,
    "javascript" DECIMAL NOT NULL DEFAULT 0.0,
    "html" DECIMAL NOT NULL DEFAULT 0.0,
    "css" DECIMAL NOT NULL DEFAULT 0.0,
    "others" DECIMAL NOT NULL DEFAULT 0.0,
    CONSTRAINT "Coding_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Coding" ("css", "html", "id", "javascript", "others", "typescript", "userId") SELECT "css", "html", "id", "javascript", "others", "typescript", "userId" FROM "Coding";
DROP TABLE "Coding";
ALTER TABLE "new_Coding" RENAME TO "Coding";
CREATE UNIQUE INDEX "Coding_userId_key" ON "Coding"("userId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
