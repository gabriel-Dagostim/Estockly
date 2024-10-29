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
// src/fornecedorRoutes.ts
const express_1 = require("express");
const db_1 = __importDefault(require("./db"));
const router = (0, express_1.Router)();
// Criar um novo fornecedor
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nome, cnpj, contato, endereco } = req.body;
    try {
        const db = yield db_1.default;
        const result = yield db.run('INSERT INTO FORNECEDOR (nome, cnpj, contato, endereco) VALUES (?, ?, ?, ?)', [nome, cnpj, contato, endereco]);
        res.status(201).json({ id: result.lastID, nome, cnpj, contato, endereco });
    }
    catch (err) {
        console.error('Erro ao inserir fornecedor:', err);
        res.status(500).json({ error: 'Erro ao inserir fornecedor' });
    }
}));
// Obter todos os fornecedores
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const db = yield db_1.default;
        const fornecedores = yield db.all('SELECT * FROM FORNECEDOR');
        res.status(200).json(fornecedores);
    }
    catch (err) {
        console.error('Erro ao obter fornecedores:', err);
        res.status(500).json({ error: 'Erro ao obter fornecedores' });
    }
}));
// Atualizar um fornecedor
router.put('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { nome, cnpj, contato, endereco } = req.body;
    try {
        const db = yield db_1.default;
        yield db.run('UPDATE FORNECEDOR SET nome = ?, cnpj = ?, contato = ?, endereco = ? WHERE id = ?', [nome, cnpj, contato, endereco, id]);
        res.status(200).json({ id, nome, cnpj, contato, endereco });
    }
    catch (err) {
        console.error('Erro ao atualizar fornecedor:', err);
        res.status(500).json({ error: 'Erro ao atualizar fornecedor' });
    }
}));
// Deletar um fornecedor
router.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const db = yield db_1.default;
        yield db.run('DELETE FROM FORNECEDOR WHERE id = ?', id);
        res.status(204).send();
    }
    catch (err) {
        console.error('Erro ao deletar fornecedor:', err);
        res.status(500).json({ error: 'Erro ao deletar fornecedor' });
    }
}));
exports.default = router;
