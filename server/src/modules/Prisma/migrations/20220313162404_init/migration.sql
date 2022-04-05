/*
  Warnings:

  - Added the required column `topic` to the `Topic` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Topic" ADD COLUMN     "topic" TEXT NOT NULL;
