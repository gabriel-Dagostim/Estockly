"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/produtoRoutes.ts
const express_1 = require("express");
const db_1 = __importDefault(require("./db"));
const router = (0, express_1.Router)();
// Criar um novo produto
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nome, descricao, preco, quantidade, imagem, fornecedorId } = req.body;
    try {
        const db = yield db_1.default;
        const result = yield db.run('INSERT INTO PRODUTO (nome, descricao, preco, quantidade, imagem, fornecedorId) VALUES (?, ?, ?, ?, ?, ?)', [nome, descricao, preco, quantidade, imagem, fornecedorId]);
        res.status(201).json({ id: result.lastID, nome, descricao, preco, quantidade, imagem, fornecedorId });
    }
    catch (err) {
        console.error('Erro ao inserir produto:', err);
        res.status(500).json({ error: 'Erro ao inserir produto' });
    }
}));
// Obter todos os produtos
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const db = yield db_1.default;
        const produtos = yield db.all('SELECT * FROM PRODUTO');
        res.status(200).json(produtos);
    }
    catch (err) {
        console.error('Erro ao obter produtos:', err);
        res.status(500).json({ error: 'Erro ao obter produtos' });
    }
}));
// Atualizar um produto
router.put('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { nome, descricao, preco, quantidade, imagem, fornecedorId } = req.body;
    try {
        const db = yield db_1.default;
        yield db.run('UPDATE PRODUTO SET nome = ?, descricao = ?, preco = ?, quantidade = ?, imagem = ?, fornecedorId = ? WHERE id = ?', [nome, descricao, preco, quantidade, imagem, fornecedorId, id]);
        res.status(200).json({ id, nome, descricao, preco, quantidade, imagem, fornecedorId });
    }
    catch (err) {
        console.error('Erro ao atualizar produto:', err);
        res.status(500).json({ error: 'Erro ao atualizar produto' });
    }
}));
// Deletar um produto
router.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const db = yield db_1.default;
        yield db.run('DELETE FROM PRODUTO WHERE id = ?', id);
        res.status(204).send();
    }
    catch (err) {
        console.error('Erro ao deletar produto:', err);
        res.status(500).json({ error: 'Erro ao deletar produto' });
    }
}));
exports.default = router;
