// src/app/dashboard/pedidos/page.tsx
"use client";

import React from 'react';
import DashboardSubHeader from '../../components/DashboardSubHeader';
import { useRouter } from 'next/navigation';

const OrdersPage: React.FC = () => {
  const totalOrders = 10; // Número temporário de pedidos para exibição
  const router = useRouter();

  const handleAddOrder = () => {
    router.push('/dashboard/pedidos/adicionar');
  };

  const handleEditOrder = (id: number) => {
    router.push(`/dashboard/pedidos/editar/${id}`);
  };

  const handleBack = () => {
    router.push('/dashboard');
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      {/* Header com título e botão de voltar */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-purple-700">Pedidos</h2>
        <button
          onClick={handleBack}
          className="px-4 py-2 bg-purple-200 text-purple-700 font-semibold rounded-md hover:bg-purple-300 transition"
        >
          Voltar
        </button>
      </div>

      {/* Sub-header dos pedidos */}
      <DashboardSubHeader 
        title="Pedidos" 
        totalCount={totalOrders} 
        placeholder="Filtrar pedidos..." 
      />

      {/* Tabela de Pedidos */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden mt-6">
        <table className="min-w-full text-left text-gray-700">
          <thead className="bg-purple-100">
            <tr>
              <th className="px-6 py-3 text-sm font-medium text-gray-600 uppercase tracking-wider">ID</th>
              <th className="px-6 py-3 text-sm font-medium text-gray-600 uppercase tracking-wider">Data</th>
              <th className="px-6 py-3 text-sm font-medium text-gray-600 uppercase tracking-wider">Cliente</th>
              <th className="px-6 py-3 text-sm font-medium text-gray-600 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-sm font-medium text-gray-600 uppercase tracking-wider">Total</th>
              <th className="px-6 py-3 text-sm font-medium text-gray-600 uppercase tracking-wider">Ações</th>
            </tr>
          </thead>
          <tbody>
            {/* Exemplo de linha de pedido */}
            <tr className="border-b hover:bg-gray-50 transition">
              <td className="px-6 py-4">1</td>
              <td className="px-6 py-4">2024-10-29</td>
              <td className="px-6 py-4">Cliente Exemplo</td>
              <td className="px-6 py-4">
                <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-semibold">Pendente</span>
              </td>
              <td className="px-6 py-4">R$ 250,00</td>
              <td className="px-6 py-4">
                <button
                  onClick={() => handleEditOrder(1)}
                  className="px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition mr-2"
                >
                  Editar
                </button>
              </td>
            </tr>
            {/* Adicione mais linhas conforme necessário */}
          </tbody>
        </table>
      </div>

      {/* Botão de Adicionar Novo Pedido */}
      <div className="flex justify-end mt-6">
        <button
          onClick={handleAddOrder}
          className="px-6 py-2 bg-purple-600 text-white rounded-md font-semibold hover:bg-purple-700 transition"
        >
          Adicionar Novo Pedido
        </button>
      </div>
    </div>
  );
};

export default OrdersPage;
