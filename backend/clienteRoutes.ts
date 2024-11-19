import { Router } from 'express';
import dbPromise from './db';

const router = Router();

// Criar um novo cliente
router.post('/', async (req, res) => {
    const { nome, cpf_cnpj, contato, endereco } = req.body;

    try {
        const db = await dbPromise;
        const result = await db.run(
            'INSERT INTO CLIENTE (nome, cpf_cnpj, contato, endereco) VALUES (?, ?, ?, ?)',
            [nome, cpf_cnpj, contato, endereco]
        );

        res.status(201).json({ id: result.lastID, nome, cpf_cnpj, contato, endereco });
    } catch (err) {
        console.error('Erro ao inserir cliente:', err);
        res.status(500).json({ error: 'Erro ao inserir cliente' });
    }
});

// Obter todos os clientes
router.get('/', async (req, res) => {
    try {
        const db = await dbPromise;
        const clientes = await db.all('SELECT * FROM CLIENTE');
        res.status(200).json(clientes);
    } catch (err) {
        console.error('Erro ao obter clientes:', err);
        res.status(500).json({ error: 'Erro ao obter clientes' });
    }
});

// Atualizar um cliente
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { nome, cpf_cnpj, contato, endereco } = req.body;

    try {
        const db = await dbPromise;
        await db.run(
            'UPDATE CLIENTE SET nome = ?, cpf_cnpj = ?, contato = ?, endereco = ? WHERE id = ?',
            [nome, cpf_cnpj, contato, endereco, id]
        );

        res.status(200).json({ id, nome, cpf_cnpj, contato, endereco });
    } catch (err) {
        console.error('Erro ao atualizar cliente:', err);
        res.status(500).json({ error: 'Erro ao atualizar cliente' });
    }
});

// Deletar um cliente
router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const db = await dbPromise;
        await db.run('DELETE FROM CLIENTE WHERE id = ?', id);
        res.status(204).send();
    } catch (err) {
        console.error('Erro ao deletar cliente:', err);
        res.status(500).json({ error: 'Erro ao deletar cliente' });
    }
});

export default router;
