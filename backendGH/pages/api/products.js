import Cors from 'cors';
import { PrismaClient } from '@prisma/client';

// Configuração de CORS
const cors = Cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT'],
  credentials: true, // Permite envio de cookies
});

const prisma = new PrismaClient();

// Middleware de execução
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

  try {
    if (req.method === 'POST') {
      const { nome, descricao, preco, quantidade, imagem, fornecedorId } = req.body;

      if (!nome || !descricao || !preco || !quantidade || !fornecedorId) {
        return res.status(400).json({ error: 'Todos os campos obrigatórios devem ser preenchidos.' });
      }

      const novoProduto = await prisma.produto.create({
        data: {
          nome,
          descricao,
          preco: parseFloat(preco),
          quantidade: parseInt(quantidade, 10),
          imagem: imagem || null,
          fornecedorId: parseInt(fornecedorId, 10),
        },
      });

      return res.status(201).json(novoProduto);
    } 
    
    if (req.method === 'GET') {
      const { id } = req.query;

      if (id) {
        const produto = await prisma.produto.findUnique({
          where: { id: parseInt(id, 10) },
          include: { fornecedor: true },
        });

        if (!produto) {
          return res.status(404).json({ error: 'Produto não encontrado' });
        }

        return res.status(200).json(produto);
      }

      const produtos = await prisma.produto.findMany({
        include: { fornecedor: true },
      });

      return res.status(200).json(produtos);
    } 
    
    if (req.method === 'PUT') {
      const { id } = req.query;
      const { nome, descricao, preco, quantidade, imagem, fornecedorId } = req.body;

      if (!id) {
        return res.status(400).json({ error: 'ID do produto é necessário.' });
      }

      const produtoAtualizado = await prisma.produto.update({
        where: { id: parseInt(id, 10) },
        data: {
          nome,
          descricao,
          preco: parseFloat(preco),
          quantidade: parseInt(quantidade, 10),
          imagem: imagem || null,
          fornecedorId: parseInt(fornecedorId, 10),
        },
      });

      return res.status(200).json(produtoAtualizado);
    }

    res.setHeader('Allow', ['GET', 'POST', 'PUT']);
    return res.status(405).end(`Método ${req.method} não permitido`);
  } catch (error) {
    console.error('Erro na API:', error);
    res.status(500).json({ error: 'Erro no servidor. Tente novamente mais tarde.' });
  }
}
