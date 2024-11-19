"use client";

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
  imagem?: string; // Opcional
  fornecedor: Fornecedor;
}

import React, { useEffect, useState } from 'react';
import DashboardSubHeader from '../../components/DashboardSubHeader';
import { useRouter } from 'next/navigation';

const ProductsPage: React.FC = () => {
  const [products, setProducts] = useState<Produto[]>([]); // Use Produto[]
  const router = useRouter();

  useEffect(() => {
    fetch('http://localhost:3001/api/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Erro ao buscar produtos:', error));
  }, []);

  const handleAddProduct = () => {
    router.push('/dashboard/produtos/adicionar');
  };

  const handleEditProduct = (id: number) => {
    router.push(`/dashboard/produtos/editar/${id}`);
  };

  const handleBack = () => {
    router.push('/dashboard');
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-purple-700">Produtos</h2>
        <button
          onClick={handleBack}
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
                <td className="px-6 py-4">
                  <button
                    onClick={() => handleEditProduct(product.id)}
                    className="px-2 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 mr-2"
                  >
                    Editar
                  </button>
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
