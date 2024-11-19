import { PrismaClient } from '@prisma/client';
import Cors from 'cors';

const prisma = new PrismaClient();
const cors = Cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT'],
});

function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

export default async function handler(req, res) {
  await runMiddleware(req, res, cors);

  if (req.method === 'POST') {
    const { nome, cnpj, contato, endereco } = req.body;

    try {
      if (!nome || !cnpj || !contato || !endereco) {
        return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
      }

      const novoFornecedor = await prisma.fornecedor.create({
        data: { nome, cnpj, contato, endereco },
      });

      res.status(201).json(novoFornecedor);
    } catch (error) {
      console.error('Erro ao adicionar fornecedor:', error);
      res.status(500).json({ error: 'Erro ao adicionar fornecedor.' });
    }
  } else if (req.method === 'GET') {
    const { id } = req.query;

    try {
      if (id) {
        const fornecedor = await prisma.fornecedor.findUnique({ where: { id: parseInt(id) } });
        if (!fornecedor) {
          return res.status(404).json({ error: 'Fornecedor não encontrado.' });
        }
        return res.status(200).json(fornecedor);
      }

      const fornecedores = await prisma.fornecedor.findMany();
      res.status(200).json(fornecedores);
    } catch (error) {
      console.error('Erro ao buscar fornecedores:', error);
      res.status(500).json({ error: 'Erro ao buscar fornecedores.' });
    }
  } else if (req.method === 'PUT') {
    const { id } = req.query;
    const { nome, cnpj, contato, endereco } = req.body;

    try {
      if (!id) {
        return res.status(400).json({ error: 'ID do fornecedor é obrigatório.' });
      }

      const fornecedorAtualizado = await prisma.fornecedor.update({
        where: { id: parseInt(id) },
        data: { nome, cnpj, contato, endereco },
      });

      res.status(200).json(fornecedorAtualizado);
    } catch (error) {
      console.error('Erro ao atualizar fornecedor:', error);
      res.status(500).json({ error: 'Erro ao atualizar fornecedor.' });
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST', 'PUT']);
    res.status(405).end(`Método ${req.method} não permitido`);
  }
}
