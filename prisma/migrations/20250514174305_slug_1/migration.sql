/*
  Warnings:

  - Added the required column `slug` to the `contactResponses` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "contactResponses" ADD COLUMN     "slug" TEXT NOT NULL;
