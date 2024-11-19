"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const usuarioRoutes_1 = __importDefault(require("./usuarioRoutes"));
const fornecedorRoutes_1 = __importDefault(require("./fornecedorRoutes"));
const produtoRoutes_1 = __importDefault(require("./produtoRoutes"));
const clienteRoutes_1 = __importDefault(require("./clienteRoutes"));
const itemPedidoRoutes_1 = __importDefault(require("./itemPedidoRoutes"));
const pedidoRoutes_1 = __importDefault(require("./pedidoRoutes"));
const transacaoRoutes_1 = __importDefault(require("./transacaoRoutes"));
const app = (0, express_1.default)();
const PORT = 3001;
app.use(express_1.default.json());
// Rotas
app.use('/api/usuarios', usuarioRoutes_1.default); // Rotas para usuários
app.use('/api/fornecedores', fornecedorRoutes_1.default); // Rotas para fornecedores
app.use('/api/produtos', produtoRoutes_1.default); // Rotas para produtos
app.use('/api/clientes', clienteRoutes_1.default); // Rotas para clientes
app.use('/api/item_pedidos', itemPedidoRoutes_1.default); // Rotas para itens de pedido
app.use('/api/pedidos', pedidoRoutes_1.default); // Rotas para pedidos
app.use('/api/transacoes', transacaoRoutes_1.default); // Rotas para transações
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
