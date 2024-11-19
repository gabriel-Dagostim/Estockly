import Cors from 'cors';
import { PrismaClient } from '@prisma/client';

const cors = Cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT'],
});

const prisma = new PrismaClient();

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
    const { nome, cpf_cnpj, contato, endereco } = req.body;
    try {
      const novoCliente = await prisma.cliente.create({
        data: { nome, cpf_cnpj, contato, endereco },
      });
      res.status(201).json(novoCliente);
    } catch (error) {
      console.error('Erro ao adicionar cliente:', error);
      res.status(500).json({ error: 'Erro ao adicionar cliente.' });
    }
  } else if (req.method === 'GET') {
    const { id } = req.query;
    try {
      if (id) {
        const cliente = await prisma.cliente.findUnique({
          where: { id: parseInt(id, 10) },
        });
        if (!cliente) {
          return res.status(404).json({ error: 'Cliente não encontrado' });
        }
        return res.status(200).json(cliente);
      }
      const clientes = await prisma.cliente.findMany();
      res.status(200).json(clientes);
    } catch (error) {
      console.error('Erro ao buscar clientes:', error);
      res.status(500).json({ error: 'Erro ao buscar clientes.' });
    }
  } else if (req.method === 'PUT') {
    const { id } = req.query;
    const { nome, cpf_cnpj, contato, endereco } = req.body;

    try {
      const clienteAtualizado = await prisma.cliente.update({
        where: { id: parseInt(id, 10) },
        data: { nome, cpf_cnpj, contato, endereco },
      });
      res.status(200).json(clienteAtualizado);
    } catch (error) {
      console.error('Erro ao atualizar cliente:', error);
      res.status(500).json({ error: 'Erro ao atualizar cliente.' });
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST', 'PUT']);
    res.status(405).end(`Método ${req.method} não permitido`);
  }
}
