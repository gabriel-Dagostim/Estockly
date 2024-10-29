// src/usuarioRoutes.ts
import { Router } from 'express';
import dbPromise from './db';

const router = Router();

// Criar um novo usuário
router.post('/', async (req, res) => {
    const { nome, email, senha } = req.body;

    try {
        const db = await dbPromise;
        const result = await db.run(
            'INSERT INTO USUARIO (nome, email, senha) VALUES (?, ?, ?)',
            [nome, email, senha]
        );

        res.status(201).json({ id: result.lastID, nome, email });
    } catch (err) {
        console.error('Erro ao inserir usuário:', err);
        res.status(500).json({ error: 'Erro ao inserir usuário' });
    }
});

// Obter todos os usuários
router.get('/', async (req, res) => {
    try {
        const db = await dbPromise;
        const usuarios = await db.all('SELECT * FROM USUARIO');
        res.status(200).json(usuarios);
    } catch (err) {
        console.error('Erro ao obter usuários:', err);
        res.status(500).json({ error: 'Erro ao obter usuários' });
    }
});

// Atualizar um usuário
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { nome, email, senha } = req.body;

    try {
        const db = await dbPromise;
        await db.run(
            'UPDATE USUARIO SET nome = ?, email = ?, senha = ? WHERE id = ?',
            [nome, email, senha, id]
        );

        res.status(200).json({ id, nome, email });
    } catch (err) {
        console.error('Erro ao atualizar usuário:', err);
        res.status(500).json({ error: 'Erro ao atualizar usuário' });
    }
});

// Deletar um usuário
router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const db = await dbPromise;
        await db.run('DELETE FROM USUARIO WHERE id = ?', id);
        res.status(204).send();
    } catch (err) {
        console.error('Erro ao deletar usuário:', err);
        res.status(500).json({ error: 'Erro ao deletar usuário' });
    }
});

export default router;
