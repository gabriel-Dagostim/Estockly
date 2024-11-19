import { Router } from 'express';
import dbPromise from './db';

const router = Router();

// Criar um novo pedido
router.post('/', async (req, res) => {
    const { data, clienteId, status, total, usuarioId } = req.body;

    try {
        const db = await dbPromise;
        const result = await db.run(
            'INSERT INTO PEDIDO (data, clienteId, status, total, usuarioId) VALUES (?, ?, ?, ?, ?)',
            [data, clienteId, status, total, usuarioId]
        );

        res.status(201).json({ id: result.lastID, data, clienteId, status, total, usuarioId });
    } catch (err) {
        console.error('Erro ao inserir pedido:', err);
        res.status(500).json({ error: 'Erro ao inserir pedido' });
    }
});

// Obter todos os pedidos
router.get('/', async (req, res) => {
    try {
        const db = await dbPromise;
        const pedidos = await db.all('SELECT * FROM PEDIDO');
        res.status(200).json(pedidos);
    } catch (err) {
        console.error('Erro ao obter pedidos:', err);
        res.status(500).json({ error: 'Erro ao obter pedidos' });
    }
});

// Atualizar um pedido
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { data, clienteId, status, total, usuarioId } = req.body;

    try {
        const db = await dbPromise;
        await db.run(
            'UPDATE PEDIDO SET data = ?, clienteId = ?, status = ?, total = ?, usuarioId = ? WHERE id = ?',
            [data, clienteId, status, total, usuarioId, id]
        );

        res.status(200).json({ id, data, clienteId, status, total, usuarioId });
    } catch (err) {
        console.error('Erro ao atualizar pedido:', err);
        res.status(500).json({ error: 'Erro ao atualizar pedido' });
    }
});

// Deletar um pedido
router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const db = await dbPromise;
        await db.run('DELETE FROM PEDIDO WHERE id = ?', id);
        res.status(204).send();
    } catch (err) {
        console.error('Erro ao deletar pedido:', err);
        res.status(500).json({ error: 'Erro ao deletar pedido' });
    }
});

export default router;
