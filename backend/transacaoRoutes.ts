import { Router } from 'express';
import dbPromise from './db';

const router = Router();

// Criar uma nova transação
router.post('/', async (req, res) => {
    const { data, tipo, valor, produtoId, pedidoId } = req.body;

    try {
        const db = await dbPromise;
        const result = await db.run(
            'INSERT INTO TRANSACAO (data, tipo, valor, produtoId, pedidoId) VALUES (?, ?, ?, ?, ?)',
            [data, tipo, valor, produtoId, pedidoId]
        );

        res.status(201).json({ id: result.lastID, data, tipo, valor, produtoId, pedidoId });
    } catch (err) {
        console.error('Erro ao inserir transação:', err);
        res.status(500).json({ error: 'Erro ao inserir transação' });
    }
});

// Obter todas as transações
router.get('/', async (req, res) => {
    try {
        const db = await dbPromise;
        const transacoes = await db.all('SELECT * FROM TRANSACAO');
        res.status(200).json(transacoes);
    } catch (err) {
        console.error('Erro ao obter transações:', err);
        res.status(500).json({ error: 'Erro ao obter transações' });
    }
});

// Atualizar uma transação
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { data, tipo, valor, produtoId, pedidoId } = req.body;

    try {
        const db = await dbPromise;
        await db.run(
            'UPDATE TRANSACAO SET data = ?, tipo = ?, valor = ?, produtoId = ?, pedidoId = ? WHERE id = ?',
            [data, tipo, valor, produtoId, pedidoId, id]
        );

        res.status(200).json({ id, data, tipo, valor, produtoId, pedidoId });
    } catch (err) {
        console.error('Erro ao atualizar transação:', err);
        res.status(500).json({ error: 'Erro ao atualizar transação' });
    }
});

// Deletar uma transação
router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const db = await dbPromise;
        await db.run('DELETE FROM TRANSACAO WHERE id = ?', id);
        res.status(204).send();
    } catch (err) {
        console.error('Erro ao deletar transação:', err);
        res.status(500).json({ error: 'Erro ao deletar transação' });
    }
});

export default router;
