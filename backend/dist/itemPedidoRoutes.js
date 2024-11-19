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
// Criar um novo item de pedido
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { pedidoId, produtoId, quantidade, precoUnitario } = req.body;
    try {
        const db = yield db_1.default;
        const result = yield db.run('INSERT INTO ITEM_PEDIDO (pedidoId, produtoId, quantidade, precoUnitario) VALUES (?, ?, ?, ?)', [pedidoId, produtoId, quantidade, precoUnitario]);
        res.status(201).json({ id: result.lastID, pedidoId, produtoId, quantidade, precoUnitario });
    }
    catch (err) {
        console.error('Erro ao inserir item de pedido:', err);
        res.status(500).json({ error: 'Erro ao inserir item de pedido' });
    }
}));
// Obter todos os itens de pedido
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const db = yield db_1.default;
        const itensPedido = yield db.all('SELECT * FROM ITEM_PEDIDO');
        res.status(200).json(itensPedido);
    }
    catch (err) {
        console.error('Erro ao obter itens de pedido:', err);
        res.status(500).json({ error: 'Erro ao obter itens de pedido' });
    }
}));
// Atualizar um item de pedido
router.put('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { pedidoId, produtoId, quantidade, precoUnitario } = req.body;
    try {
        const db = yield db_1.default;
        yield db.run('UPDATE ITEM_PEDIDO SET pedidoId = ?, produtoId = ?, quantidade = ?, precoUnitario = ? WHERE id = ?', [pedidoId, produtoId, quantidade, precoUnitario, id]);
        res.status(200).json({ id, pedidoId, produtoId, quantidade, precoUnitario });
    }
    catch (err) {
        console.error('Erro ao atualizar item de pedido:', err);
        res.status(500).json({ error: 'Erro ao atualizar item de pedido' });
    }
}));
// Deletar um item de pedido
router.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const db = yield db_1.default;
        yield db.run('DELETE FROM ITEM_PEDIDO WHERE id = ?', id);
        res.status(204).send();
    }
    catch (err) {
        console.error('Erro ao deletar item de pedido:', err);
        res.status(500).json({ error: 'Erro ao deletar item de pedido' });
    }
}));
exports.default = router;
