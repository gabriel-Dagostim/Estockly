import express from 'express';
import usuarioRoutes from './usuarioRoutes';
import fornecedorRoutes from './fornecedorRoutes';
import produtoRoutes from './produtoRoutes';
import clienteRoutes from './clienteRoutes';
import itemPedidoRoutes from './itemPedidoRoutes';
import pedidoRoutes from './pedidoRoutes';
import transacaoRoutes from './transacaoRoutes';

const app = express();
const PORT = 3001;

app.use(express.json());

// Rotas
app.use('/api/usuarios', usuarioRoutes); // Rotas para usuários
app.use('/api/fornecedores', fornecedorRoutes); // Rotas para fornecedores
app.use('/api/produtos', produtoRoutes); // Rotas para produtos
app.use('/api/clientes', clienteRoutes); // Rotas para clientes
app.use('/api/item_pedidos', itemPedidoRoutes); // Rotas para itens de pedido
app.use('/api/pedidos', pedidoRoutes); // Rotas para pedidos
app.use('/api/transacoes', transacaoRoutes); // Rotas para transações

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});