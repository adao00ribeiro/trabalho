/*
  Warnings:

  - Added the required column `usuarioId` to the `receita` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "receita" ADD COLUMN     "usuarioId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "receita" ADD CONSTRAINT "receita_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
