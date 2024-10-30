"use client";

import React from 'react';
import DashboardSubHeader from '../../components/DashboardSubHeader';
import { useRouter } from 'next/navigation';

const ProductsPage: React.FC = () => {
  const totalProducts = 20; // Número temporário de produtos para exibição
  const router = useRouter();

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

      {/* Sub-header dos produtos */}
      <DashboardSubHeader 
        title="Produtos" 
        totalCount={totalProducts} 
        placeholder="Filtrar produtos..." 
      />

      {/* Tabela de Produtos */}
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
            {/* Exemplo de linha de produto */}
            <tr className="border-b">
              <td className="px-6 py-4">1</td>
              <td className="px-6 py-4">Produto Exemplo</td>
              <td className="px-6 py-4">Descrição breve do produto</td>
              <td className="px-6 py-4">R$ 100,00</td>
              <td className="px-6 py-4">50</td>
              <td className="px-6 py-4">Fornecedor Exemplo</td>
              <td className="px-6 py-4">
                <button
                  onClick={() => handleEditProduct(1)}
                  className="px-2 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 mr-2"
                >
                  Editar
                </button>
              </td>
            </tr>
            {/* Adicione mais linhas conforme necessário */}
          </tbody>
        </table>
      </div>

      {/* Botão de Adicionar Novo Produto */}
      <div className="flex justify-end mt-4">
        <button
          onClick={handleAddProduct}
          className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
        >
          Adicionar Novo Produto
        </button>
      </div>
    </div>
  );
};

export default ProductsPage;
