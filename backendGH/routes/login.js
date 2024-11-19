import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    const user = await prisma.user.findUnique({ where: { email } });

    if (!user || password !== user.password) {
      return res.status(401).json({ error: 'Credenciais inválidas' });
    }

    const token = jwt.sign({ userId: user.id }, 'secreta-chave', { expiresIn: '1h' });

    // Define o cookie com o token
    res.setHeader('Set-Cookie', `token=${token}; Path=/; HttpOnly; Secure; SameSite=Strict`);
    res.status(200).json({ message: 'Login bem-sucedido!' });
  } else {
    res.status(405).json({ error: 'Método não permitido' });
  }
}
