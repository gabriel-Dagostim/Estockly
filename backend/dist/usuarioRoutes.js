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
// src/usuarioRoutes.ts
const express_1 = require("express");
const db_1 = __importDefault(require("./db"));
const router = (0, express_1.Router)();
// Criar um novo usuário
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nome, email, senha } = req.body;
    try {
        const db = yield db_1.default;
        const result = yield db.run('INSERT INTO USUARIO (nome, email, senha) VALUES (?, ?, ?)', [nome, email, senha]);
        res.status(201).json({ id: result.lastID, nome, email });
    }
    catch (err) {
        console.error('Erro ao inserir usuário:', err);
        res.status(500).json({ error: 'Erro ao inserir usuário' });
    }
}));
// Obter todos os usuários
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const db = yield db_1.default;
        const usuarios = yield db.all('SELECT * FROM USUARIO');
        res.status(200).json(usuarios);
    }
    catch (err) {
        console.error('Erro ao obter usuários:', err);
        res.status(500).json({ error: 'Erro ao obter usuários' });
    }
}));
// Atualizar um usuário
router.put('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { nome, email, senha } = req.body;
    try {
        const db = yield db_1.default;
        yield db.run('UPDATE USUARIO SET nome = ?, email = ?, senha = ? WHERE id = ?', [nome, email, senha, id]);
        res.status(200).json({ id, nome, email });
    }
    catch (err) {
        console.error('Erro ao atualizar usuário:', err);
        res.status(500).json({ error: 'Erro ao atualizar usuário' });
    }
}));
// Deletar um usuário
router.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const db = yield db_1.default;
        yield db.run('DELETE FROM USUARIO WHERE id = ?', id);
        res.status(204).send();
    }
    catch (err) {
        console.error('Erro ao deletar usuário:', err);
        res.status(500).json({ error: 'Erro ao deletar usuário' });
    }
}));
exports.default = router;
