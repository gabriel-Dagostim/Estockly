"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const usuarioRoutes_1 = __importDefault(require("./usuarioRoutes"));
const fornecedorRoutes_1 = __importDefault(require("./fornecedorRoutes"));
const produtoRoutes_1 = __importDefault(require("./produtoRoutes"));
const app = (0, express_1.default)();
const PORT = 3000;
app.use(express_1.default.json());
app.use('/api/usuarios', usuarioRoutes_1.default);
app.use('/api/fornecedores', fornecedorRoutes_1.default); // Rotas para fornecedores
app.use('/api/produtos', produtoRoutes_1.default); // Rotas para produtos
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
