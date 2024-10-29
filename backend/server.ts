import express from 'express';
import usuarioRoutes from './usuarioRoutes';
import fornecedorRoutes from './fornecedorRoutes';
import produtoRoutes from './produtoRoutes';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/api/usuarios', usuarioRoutes);
app.use('/api/fornecedores', fornecedorRoutes); // Rotas para fornecedores
app.use('/api/produtos', produtoRoutes); // Rotas para produtos

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
