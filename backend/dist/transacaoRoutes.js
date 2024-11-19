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
// Criar uma nova transação
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { data, tipo, valor, produtoId, pedidoId } = req.body;
    try {
        const db = yield db_1.default;
        const result = yield db.run('INSERT INTO TRANSACAO (data, tipo, valor, produtoId, pedidoId) VALUES (?, ?, ?, ?, ?)', [data, tipo, valor, produtoId, pedidoId]);
        res.status(201).json({ id: result.lastID, data, tipo, valor, produtoId, pedidoId });
    }
    catch (err) {
        console.error('Erro ao inserir transação:', err);
        res.status(500).json({ error: 'Erro ao inserir transação' });
    }
}));
// Obter todas as transações
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const db = yield db_1.default;
        const transacoes = yield db.all('SELECT * FROM TRANSACAO');
        res.status(200).json(transacoes);
    }
    catch (err) {
        console.error('Erro ao obter transações:', err);
        res.status(500).json({ error: 'Erro ao obter transações' });
    }
}));
// Atualizar uma transação
router.put('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { data, tipo, valor, produtoId, pedidoId } = req.body;
    try {
        const db = yield db_1.default;
        yield db.run('UPDATE TRANSACAO SET data = ?, tipo = ?, valor = ?, produtoId = ?, pedidoId = ? WHERE id = ?', [data, tipo, valor, produtoId, pedidoId, id]);
        res.status(200).json({ id, data, tipo, valor, produtoId, pedidoId });
    }
    catch (err) {
        console.error('Erro ao atualizar transação:', err);
        res.status(500).json({ error: 'Erro ao atualizar transação' });
    }
}));
// Deletar uma transação
router.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const db = yield db_1.default;
        yield db.run('DELETE FROM TRANSACAO WHERE id = ?', id);
        res.status(204).send();
    }
    catch (err) {
        console.error('Erro ao deletar transação:', err);
        res.status(500).json({ error: 'Erro ao deletar transação' });
    }
}));
exports.default = router;
