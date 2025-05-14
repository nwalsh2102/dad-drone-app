/*
  Warnings:

  - Made the column `message` on table `contactResponses` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "contactResponses" ALTER COLUMN "message" SET NOT NULL;
