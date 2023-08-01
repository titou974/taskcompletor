/*
  Warnings:

  - You are about to drop the column `downloaded` on the `Document` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `Document` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Document" DROP COLUMN "downloaded",
DROP COLUMN "type";
