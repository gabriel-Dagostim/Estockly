CREATE TABLE IF NOT EXISTS `FORNECEDOR` (
	`id` integer primary key NOT NULL UNIQUE,
	`nome` TEXT NOT NULL,
	`cnpj` TEXT NOT NULL UNIQUE,
	`contato` TEXT NOT NULL,
	`endereco` TEXT NOT NULL
);
CREATE TABLE IF NOT EXISTS `CLIENTE` (
	`id` integer primary key NOT NULL UNIQUE,
	`nome` TEXT NOT NULL,
	`cpf_cnpj` TEXT NOT NULL UNIQUE,
	`contato` TEXT NOT NULL,
	`endereco` TEXT NOT NULL
);
CREATE TABLE IF NOT EXISTS `USUARIO` (
	`id` integer primary key NOT NULL UNIQUE,
	`nome` TEXT NOT NULL,
	`email` TEXT NOT NULL UNIQUE,
	`senha` TEXT NOT NULL
);
CREATE TABLE IF NOT EXISTS `PRODUTO` (
	`id` integer primary key NOT NULL UNIQUE,
	`nome` TEXT NOT NULL,
	`descricao` TEXT NOT NULL,
	`preco` REAL NOT NULL,
	`quantidade` INTEGER NOT NULL,
	`imagem` TEXT NOT NULL,
	`fornecedorId` INTEGER NOT NULL,
FOREIGN KEY(`fornecedorId`) REFERENCES `FORNECEDOR`(`id`)
);
CREATE TABLE IF NOT EXISTS `PEDIDO` (
	`id` integer primary key NOT NULL UNIQUE,
	`data` REAL NOT NULL,
	`clienteId` INTEGER NOT NULL,
	`status` TEXT NOT NULL,
	`total` REAL NOT NULL,
	`usuarioId` INTEGER NOT NULL,
FOREIGN KEY(`clienteId`) REFERENCES `CLIENTE`(`id`),
FOREIGN KEY(`usuarioId`) REFERENCES `USUARIO`(`id`)
);
CREATE TABLE IF NOT EXISTS `ITEM_PEDIDO` (
	`id` integer primary key NOT NULL UNIQUE,
	`pedidoId` INTEGER NOT NULL,
	`produtoId` INTEGER NOT NULL,
	`quantidade` INTEGER NOT NULL,
	`precoUnitario` REAL NOT NULL,
FOREIGN KEY(`pedidoId`) REFERENCES `PEDIDO`(`id`),
FOREIGN KEY(`produtoId`) REFERENCES `PRODUTO`(`id`)
);
CREATE TABLE IF NOT EXISTS `TRANSACAO` (
	`id` integer primary key NOT NULL UNIQUE,
	`data` REAL NOT NULL,
	`tipo` TEXT NOT NULL,
	`valor` REAL NOT NULL,
	`produtoId` INTEGER NOT NULL,
	`pedidoId` INTEGER NOT NULL,
FOREIGN KEY(`produtoId`) REFERENCES `PRODUTO`(`id`),
FOREIGN KEY(`pedidoId`) REFERENCES `PEDIDO`(`id`)
);