/*
  Warnings:

  - Added the required column `boat` to the `photos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "photos" ADD COLUMN     "boat" TEXT NOT NULL;
