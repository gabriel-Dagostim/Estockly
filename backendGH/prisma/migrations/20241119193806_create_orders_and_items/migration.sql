/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Cliente` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "Pedido" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "clienteId" INTEGER NOT NULL,
    "data" DATETIME NOT NULL,
    "status" TEXT NOT NULL,
    "total" REAL NOT NULL,
    CONSTRAINT "Pedido_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "Cliente" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ItemPedido" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "pedidoId" INTEGER NOT NULL,
    "produtoId" INTEGER NOT NULL,
    "quantidade" INTEGER NOT NULL,
    "precoUnitario" REAL NOT NULL,
    "subtotal" REAL NOT NULL,
    CONSTRAINT "ItemPedido_pedidoId_fkey" FOREIGN KEY ("pedidoId") REFERENCES "Pedido" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ItemPedido_produtoId_fkey" FOREIGN KEY ("produtoId") REFERENCES "Produto" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Cliente" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "cpf_cnpj" TEXT NOT NULL,
    "contato" TEXT NOT NULL,
    "endereco" TEXT NOT NULL
);
INSERT INTO "new_Cliente" ("contato", "cpf_cnpj", "endereco", "id", "nome") SELECT "contato", "cpf_cnpj", "endereco", "id", "nome" FROM "Cliente";
DROP TABLE "Cliente";
ALTER TABLE "new_Cliente" RENAME TO "Cliente";
CREATE UNIQUE INDEX "Cliente_cpf_cnpj_key" ON "Cliente"("cpf_cnpj");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
