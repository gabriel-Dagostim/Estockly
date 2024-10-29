// src/fornecedorRoutes.ts
import { Router } from 'express';
import dbPromise from './db';

const router = Router();

// Criar um novo fornecedor
router.post('/', async (req, res) => {
    const { nome, cnpj, contato, endereco } = req.body;

    try {
        const db = await dbPromise;
        const result = await db.run(
            'INSERT INTO FORNECEDOR (nome, cnpj, contato, endereco) VALUES (?, ?, ?, ?)',
            [nome, cnpj, contato, endereco]
        );

        res.status(201).json({ id: result.lastID, nome, cnpj, contato, endereco });
    } catch (err) {
        console.error('Erro ao inserir fornecedor:', err);
        res.status(500).json({ error: 'Erro ao inserir fornecedor' });
    }
});

// Obter todos os fornecedores
router.get('/', async (req, res) => {
    try {
        const db = await dbPromise;
        const fornecedores = await db.all('SELECT * FROM FORNECEDOR');
        res.status(200).json(fornecedores);
    } catch (err) {
        console.error('Erro ao obter fornecedores:', err);
        res.status(500).json({ error: 'Erro ao obter fornecedores' });
    }
});

// Atualizar um fornecedor
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { nome, cnpj, contato, endereco } = req.body;

    try {
        const db = await dbPromise;
        await db.run(
            'UPDATE FORNECEDOR SET nome = ?, cnpj = ?, contato = ?, endereco = ? WHERE id = ?',
            [nome, cnpj, contato, endereco, id]
        );

        res.status(200).json({ id, nome, cnpj, contato, endereco });
    } catch (err) {
        console.error('Erro ao atualizar fornecedor:', err);
        res.status(500).json({ error: 'Erro ao atualizar fornecedor' });
    }
});

// Deletar um fornecedor
router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const db = await dbPromise;
        await db.run('DELETE FROM FORNECEDOR WHERE id = ?', id);
        res.status(204).send();
    } catch (err) {
        console.error('Erro ao deletar fornecedor:', err);
        res.status(500).json({ error: 'Erro ao deletar fornecedor' });
    }
});

export default router;
