import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import Cors from 'cors';

const prisma = new PrismaClient();
const cors = Cors({ origin: 'http://localhost:3000', methods: ['POST'] });

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
    const { email, password } = req.body;

    try {
      const user = await prisma.user.findUnique({ where: { email } });

      if (!user) {
        return res.status(401).json({ error: 'Usuário ou senha inválidos' });
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (!isPasswordValid) {
        return res.status(401).json({ error: 'Usuário ou senha inválidos' });
      }

      // Gerar token JWT
      const token = jwt.sign({ userId: user.id }, 'secreta-chave', { expiresIn: '1h' });

      // Define o cookie com o token
      res.setHeader('Set-Cookie', `token=${token}; Path=/; HttpOnly; Secure; SameSite=Strict`);
      res.status(200).json({ message: 'Login bem-sucedido!' });
    } catch (error) {
      console.error('Erro interno:', error);
      res.status(500).json({ error: 'Erro interno no servidor' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Método ${req.method} não permitido`);
  }
}
