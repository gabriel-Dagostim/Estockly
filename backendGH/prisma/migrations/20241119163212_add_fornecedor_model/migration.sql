/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Produto` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Produto` table. All the data in the column will be lost.
  - Added the required column `cnpj` to the `Fornecedor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `contato` to the `Fornecedor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `endereco` to the `Fornecedor` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Fornecedor" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "cnpj" TEXT NOT NULL,
    "contato" TEXT NOT NULL,
    "endereco" TEXT NOT NULL
);
INSERT INTO "new_Fornecedor" ("id", "nome") SELECT "id", "nome" FROM "Fornecedor";
DROP TABLE "Fornecedor";
ALTER TABLE "new_Fornecedor" RENAME TO "Fornecedor";
CREATE UNIQUE INDEX "Fornecedor_cnpj_key" ON "Fornecedor"("cnpj");
CREATE TABLE "new_Produto" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "preco" REAL NOT NULL,
    "quantidade" INTEGER NOT NULL,
    "imagem" TEXT,
    "fornecedorId" INTEGER NOT NULL,
    CONSTRAINT "Produto_fornecedorId_fkey" FOREIGN KEY ("fornecedorId") REFERENCES "Fornecedor" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Produto" ("descricao", "fornecedorId", "id", "imagem", "nome", "preco", "quantidade") SELECT "descricao", "fornecedorId", "id", "imagem", "nome", "preco", "quantidade" FROM "Produto";
DROP TABLE "Produto";
ALTER TABLE "new_Produto" RENAME TO "Produto";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
