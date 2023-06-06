-- CreateTable
CREATE TABLE "receita" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "tempodepreparo" INTEGER NOT NULL,

    CONSTRAINT "receita_pkey" PRIMARY KEY ("id")
);
