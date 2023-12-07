/*
  Warnings:

  - Added the required column `machine_number` to the `Batch` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Batch" ADD COLUMN     "machine_number" TEXT NOT NULL;
