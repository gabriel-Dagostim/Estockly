import { Router } from 'express';
import dbPromise from './db';

const router = Router();

// Criar um novo item de pedido
router.post('/', async (req, res) => {
    const { pedidoId, produtoId, quantidade, precoUnitario } = req.body;

    try {
        const db = await dbPromise;
        const result = await db.run(
            'INSERT INTO ITEM_PEDIDO (pedidoId, produtoId, quantidade, precoUnitario) VALUES (?, ?, ?, ?)',
            [pedidoId, produtoId, quantidade, precoUnitario]
        );

        res.status(201).json({ id: result.lastID, pedidoId, produtoId, quantidade, precoUnitario });
    } catch (err) {
        console.error('Erro ao inserir item de pedido:', err);
        res.status(500).json({ error: 'Erro ao inserir item de pedido' });
    }
});

// Obter todos os itens de pedido
router.get('/', async (req, res) => {
    try {
        const db = await dbPromise;
        const itensPedido = await db.all('SELECT * FROM ITEM_PEDIDO');
        res.status(200).json(itensPedido);
    } catch (err) {
        console.error('Erro ao obter itens de pedido:', err);
        res.status(500).json({ error: 'Erro ao obter itens de pedido' });
    }
});

// Atualizar um item de pedido
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { pedidoId, produtoId, quantidade, precoUnitario } = req.body;

    try {
        const db = await dbPromise;
        await db.run(
            'UPDATE ITEM_PEDIDO SET pedidoId = ?, produtoId = ?, quantidade = ?, precoUnitario = ? WHERE id = ?',
            [pedidoId, produtoId, quantidade, precoUnitario, id]
        );

        res.status(200).json({ id, pedidoId, produtoId, quantidade, precoUnitario });
    } catch (err) {
        console.error('Erro ao atualizar item de pedido:', err);
        res.status(500).json({ error: 'Erro ao atualizar item de pedido' });
    }
});

// Deletar um item de pedido
router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const db = await dbPromise;
        await db.run('DELETE FROM ITEM_PEDIDO WHERE id = ?', id);
        res.status(204).send();
    } catch (err) {
        console.error('Erro ao deletar item de pedido:', err);
        res.status(500).json({ error: 'Erro ao deletar item de pedido' });
    }
});

export default router;
