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
// Criar um novo pedido
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { data, clienteId, status, total, usuarioId } = req.body;
    try {
        const db = yield db_1.default;
        const result = yield db.run('INSERT INTO PEDIDO (data, clienteId, status, total, usuarioId) VALUES (?, ?, ?, ?, ?)', [data, clienteId, status, total, usuarioId]);
        res.status(201).json({ id: result.lastID, data, clienteId, status, total, usuarioId });
    }
    catch (err) {
        console.error('Erro ao inserir pedido:', err);
        res.status(500).json({ error: 'Erro ao inserir pedido' });
    }
}));
// Obter todos os pedidos
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const db = yield db_1.default;
        const pedidos = yield db.all('SELECT * FROM PEDIDO');
        res.status(200).json(pedidos);
    }
    catch (err) {
        console.error('Erro ao obter pedidos:', err);
        res.status(500).json({ error: 'Erro ao obter pedidos' });
    }
}));
// Atualizar um pedido
router.put('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { data, clienteId, status, total, usuarioId } = req.body;
    try {
        const db = yield db_1.default;
        yield db.run('UPDATE PEDIDO SET data = ?, clienteId = ?, status = ?, total = ?, usuarioId = ? WHERE id = ?', [data, clienteId, status, total, usuarioId, id]);
        res.status(200).json({ id, data, clienteId, status, total, usuarioId });
    }
    catch (err) {
        console.error('Erro ao atualizar pedido:', err);
        res.status(500).json({ error: 'Erro ao atualizar pedido' });
    }
}));
// Deletar um pedido
router.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const db = yield db_1.default;
        yield db.run('DELETE FROM PEDIDO WHERE id = ?', id);
        res.status(204).send();
    }
    catch (err) {
        console.error('Erro ao deletar pedido:', err);
        res.status(500).json({ error: 'Erro ao deletar pedido' });
    }
}));
exports.default = router;
