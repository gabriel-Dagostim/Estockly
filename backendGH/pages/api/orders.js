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

  if (req.method === 'POST') {
    const { clienteId, data, status, itens, total } = req.body;

    try {
      // Validação dos dados
      if (!clienteId || !data || !status || !itens || itens.length === 0) {
        return res
          .status(400)
          .json({ error: 'Todos os campos obrigatórios devem ser preenchidos e itens válidos fornecidos.' });
      }

      const novoPedido = await prisma.pedido.create({
        data: {
          clienteId: parseInt(clienteId, 10),
          data: new Date(data),
          status,
          total: parseFloat(total),
          itens: {
            create: itens.map((item) => ({
              produtoId: parseInt(item.produtoId, 10),
              quantidade: parseInt(item.quantidade, 10),
              precoUnitario: parseFloat(item.precoUnitario),
              subtotal: parseFloat(item.precoUnitario * item.quantidade),
            })),
          },
        },
        include: {
          itens: { include: { produto: true } },
        },
      });

      res.status(201).json(novoPedido);
    } catch (error) {
      console.error('Erro ao criar pedido:', error);
      res.status(500).json({ error: 'Erro ao criar pedido.' });
    }
  } else if (req.method === 'GET') {
    const { id } = req.query;

    try {
      if (id) {
        const pedido = await prisma.pedido.findUnique({
          where: { id: parseInt(id, 10) },
          include: {
            itens: { include: { produto: true } },
            cliente: true,
          },
        });

        if (!pedido) {
          return res.status(404).json({ error: 'Pedido não encontrado.' });
        }

        return res.status(200).json(pedido);
      }

      const pedidos = await prisma.pedido.findMany({
        include: {
          itens: { include: { produto: true } },
          cliente: true,
        },
      });

      res.status(200).json(pedidos);
    } catch (error) {
      console.error('Erro ao buscar pedidos:', error);
      res.status(500).json({ error: 'Erro ao buscar pedidos.' });
    }
  } else if (req.method === 'PUT') {
    const { id } = req.query;
    const { clienteId, data, status, itens, total } = req.body;

    try {
      if (!id) {
        return res.status(400).json({ error: 'ID do pedido é necessário.' });
      }

      const pedidoAtualizado = await prisma.pedido.update({
        where: { id: parseInt(id, 10) },
        data: {
          clienteId: parseInt(clienteId, 10),
          data: new Date(data),
          status,
          total: parseFloat(total),
          itens: {
            deleteMany: {}, // Remove itens antigos antes de adicionar novos
            create: itens.map((item) => ({
              produtoId: parseInt(item.produtoId, 10),
              quantidade: parseInt(item.quantidade, 10),
              precoUnitario: parseFloat(item.precoUnitario),
              subtotal: parseFloat(item.precoUnitario * item.quantidade),
            })),
          },
        },
        include: {
          itens: { include: { produto: true } },
        },
      });

      res.status(200).json(pedidoAtualizado);
    } catch (error) {
      console.error('Erro ao atualizar pedido:', error);
      res.status(500).json({ error: 'Erro ao atualizar pedido.' });
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST', 'PUT']);
    res.status(405).end(`Método ${req.method} não permitido`);
  }
}
