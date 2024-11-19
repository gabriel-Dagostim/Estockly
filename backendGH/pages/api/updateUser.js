import Cors from 'cors';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import cookie from 'cookie';

const prisma = new PrismaClient();

// Configuração de CORS
const cors = Cors({
  origin: 'http://localhost:3000',
  methods: ['PUT'],
  credentials: true, // Permite envio de cookies
});

// Middleware para rodar CORS
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

  if (req.method === 'PUT') {
    try {
      const cookies = req.headers.cookie;
      if (!cookies) {
        return res.status(401).json({ error: 'Não autenticado' });
      }

      const { token } = cookie.parse(cookies);
      if (!token) {
        return res.status(401).json({ error: 'Token não fornecido' });
      }

      const decoded = jwt.verify(token, 'secreta-chave');
      const userId = decoded.userId;

      const { name, email, currentPassword, newPassword } = req.body;

      // Buscar o usuário atual no banco
      const user = await prisma.user.findUnique({ where: { id: userId } });

      if (!user) {
        return res.status(404).json({ error: 'Usuário não encontrado' });
      }

      // Validar senha atual
      if (currentPassword && !(await bcrypt.compare(currentPassword, user.password))) {
        return res.status(401).json({ error: 'Senha atual incorreta' });
      }

      // Atualizar informações do usuário
      const updatedUser = await prisma.user.update({
        where: { id: userId },
        data: {
          name,
          email,
          password: newPassword ? await bcrypt.hash(newPassword, 10) : user.password,
        },
      });

      res.status(200).json({ message: 'Usuário atualizado com sucesso', user: updatedUser });
    } catch (error) {
      console.error('Erro ao atualizar usuário:', error);
      res.status(500).json({ error: 'Erro ao atualizar usuário. Tente novamente mais tarde.' });
    }
  } else {
    res.setHeader('Allow', ['PUT']);
    res.status(405).end(`Método ${req.method} não permitido`);
  }
}
