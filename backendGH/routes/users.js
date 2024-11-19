import Cors from 'cors';
import { PrismaClient } from '@prisma/client';

// Inicialize o middleware CORS
const cors = Cors({
  origin: 'http://localhost:3000', // Permite requisições do frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
});

const prisma = new PrismaClient();

// Helper para executar middlewares
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
  // Executa o middleware CORS antes do restante do handler
  await runMiddleware(req, res, cors);

  if (req.method === 'POST') {
    const { name, email, password } = req.body;

    try {
      const user = await prisma.user.create({
        data: { name, email, password },
      });
      res.status(201).json(user);
    } catch (error) {
      res.status(400).json({ error: 'Erro ao criar usuário' });
    }
  } else if (req.method === 'GET') {
    const users = await prisma.user.findMany();
    res.status(200).json(users);
  } else if (req.method === 'PUT') {
    const { id, name, email, password } = req.body;

    try {
      const user = await prisma.user.update({
        where: { id },
        data: { name, email, password },
      });
      res.status(200).json(user);
    } catch (error) {
      res.status(400).json({ error: 'Erro ao atualizar usuário' });
    }
  } else if (req.method === 'DELETE') {
    const { id } = req.body;

    try {
      await prisma.user.delete({
        where: { id },
      });
      res.status(204).end();
    } catch (error) {
      res.status(400).json({ error: 'Erro ao deletar usuário' });
    }
  } else {
    res.setHeader('Allow', ['POST', 'GET', 'PUT', 'DELETE']);
    res.status(405).end(`Método ${req.method} não permitido`);
  }
}
