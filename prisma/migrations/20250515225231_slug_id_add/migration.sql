/*
  Warnings:

  - The required column `slugId` was added to the `contactResponses` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- AlterTable
ALTER TABLE "contactResponses" ADD COLUMN     "slugId" TEXT NOT NULL;
