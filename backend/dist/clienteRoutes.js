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
const express_1 = require("express");
const db_1 = __importDefault(require("./db"));
const router = (0, express_1.Router)();
// Criar um novo cliente
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nome, cpf_cnpj, contato, endereco } = req.body;
    try {
        const db = yield db_1.default;
        const result = yield db.run('INSERT INTO CLIENTE (nome, cpf_cnpj, contato, endereco) VALUES (?, ?, ?, ?)', [nome, cpf_cnpj, contato, endereco]);
        res.status(201).json({ id: result.lastID, nome, cpf_cnpj, contato, endereco });
    }
    catch (err) {
        console.error('Erro ao inserir cliente:', err);
        res.status(500).json({ error: 'Erro ao inserir cliente' });
    }
}));
// Obter todos os clientes
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const db = yield db_1.default;
        const clientes = yield db.all('SELECT * FROM CLIENTE');
        res.status(200).json(clientes);
    }
    catch (err) {
        console.error('Erro ao obter clientes:', err);
        res.status(500).json({ error: 'Erro ao obter clientes' });
    }
}));
// Atualizar um cliente
router.put('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { nome, cpf_cnpj, contato, endereco } = req.body;
    try {
        const db = yield db_1.default;
        yield db.run('UPDATE CLIENTE SET nome = ?, cpf_cnpj = ?, contato = ?, endereco = ? WHERE id = ?', [nome, cpf_cnpj, contato, endereco, id]);
        res.status(200).json({ id, nome, cpf_cnpj, contato, endereco });
    }
    catch (err) {
        console.error('Erro ao atualizar cliente:', err);
        res.status(500).json({ error: 'Erro ao atualizar cliente' });
    }
}));
// Deletar um cliente
router.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const db = yield db_1.default;
        yield db.run('DELETE FROM CLIENTE WHERE id = ?', id);
        res.status(204).send();
    }
    catch (err) {
        console.error('Erro ao deletar cliente:', err);
        res.status(500).json({ error: 'Erro ao deletar cliente' });
    }
}));
exports.default = router;
