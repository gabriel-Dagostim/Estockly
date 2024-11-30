"use client";

import React, { useEffect, useState } from 'react';
import DashboardSubHeader from '../../components/DashboardSubHeader';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface Fornecedor {
  id: number;
  nome: string;
}

interface Produto {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  quantidade: number;
  imagem?: string;
  fornecedor: Fornecedor;
}

const ProductsPage: React.FC = () => {
  const [products, setProducts] = useState<Produto[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const router = useRouter();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/products');
        if (!response.ok) {
          throw new Error('Erro ao buscar produtos.');
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Erro ao buscar produtos:', error);
        setError('Erro ao carregar produtos.');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleAddProduct = () => {
    router.push('/dashboard/produtos/adicionar');
  };

  if (loading) return <p>Carregando produtos...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-purple-700">Produtos</h2>
        <button
          onClick={() => router.push('/dashboard')}
          className="px-4 py-2 bg-purple-200 text-purple-700 font-semibold rounded-md hover:bg-purple-300 transition"
        >
          Voltar
        </button>
      </div>

      <DashboardSubHeader title="Produtos" totalCount={products.length} placeholder="Filtrar produtos..." />

      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full text-left text-gray-700">
          <thead className="bg-purple-100">
            <tr>
              <th className="px-6 py-3">ID</th>
              <th className="px-6 py-3">Nome</th>
              <th className="px-6 py-3">Descrição</th>
              <th className="px-6 py-3">Preço</th>
              <th className="px-6 py-3">Quantidade</th>
              <th className="px-6 py-3">Fornecedor</th>
              <th className="px-6 py-3">Ações</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="border-b">
                <td className="px-6 py-4">{product.id}</td>
                <td className="px-6 py-4">{product.nome}</td>
                <td className="px-6 py-4">{product.descricao}</td>
                <td className="px-6 py-4">R$ {product.preco.toFixed(2)}</td>
                <td className="px-6 py-4">{product.quantidade}</td>
                <td className="px-6 py-4">{product.fornecedor.nome}</td>
                <td>
                <Link href={`/dashboard/produtos/editar/${product.id}`}>
                  <button className="btn btn-primary">Editar</button>
                </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-end mt-4">
        <button onClick={handleAddProduct} className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700">
          Adicionar Novo Produto
        </button>
      </div>
    </div>
  );
};

export default ProductsPage;
