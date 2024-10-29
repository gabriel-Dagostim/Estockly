// src/produtoRoutes.ts
import { Router } from 'express';
import dbPromise from './db';

const router = Router();

// Criar um novo produto
router.post('/', async (req, res) => {
    const { nome, descricao, preco, quantidade, imagem, fornecedorId } = req.body;

    try {
        const db = await dbPromise;
        const result = await db.run(
            'INSERT INTO PRODUTO (nome, descricao, preco, quantidade, imagem, fornecedorId) VALUES (?, ?, ?, ?, ?, ?)',
            [nome, descricao, preco, quantidade, imagem, fornecedorId]
        );

        res.status(201).json({ id: result.lastID, nome, descricao, preco, quantidade, imagem, fornecedorId });
    } catch (err) {
        console.error('Erro ao inserir produto:', err);
        res.status(500).json({ error: 'Erro ao inserir produto' });
    }
});

// Obter todos os produtos
router.get('/', async (req, res) => {
    try {
        const db = await dbPromise;
        const produtos = await db.all('SELECT * FROM PRODUTO');
        res.status(200).json(produtos);
    } catch (err) {
        console.error('Erro ao obter produtos:', err);
        res.status(500).json({ error: 'Erro ao obter produtos' });
    }
});

// Atualizar um produto
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { nome, descricao, preco, quantidade, imagem, fornecedorId } = req.body;

    try {
        const db = await dbPromise;
        await db.run(
            'UPDATE PRODUTO SET nome = ?, descricao = ?, preco = ?, quantidade = ?, imagem = ?, fornecedorId = ? WHERE id = ?',
            [nome, descricao, preco, quantidade, imagem, fornecedorId, id]
        );

        res.status(200).json({ id, nome, descricao, preco, quantidade, imagem, fornecedorId });
    } catch (err) {
        console.error('Erro ao atualizar produto:', err);
        res.status(500).json({ error: 'Erro ao atualizar produto' });
    }
});

// Deletar um produto
router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const db = await dbPromise;
        await db.run('DELETE FROM PRODUTO WHERE id = ?', id);
        res.status(204).send();
    } catch (err) {
        console.error('Erro ao deletar produto:', err);
        res.status(500).json({ error: 'Erro ao deletar produto' });
    }
});

export default router;
