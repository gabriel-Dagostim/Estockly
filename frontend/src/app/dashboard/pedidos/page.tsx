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
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-purple-700">Pedidos</h2>
        <button
          onClick={handleBack}
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
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
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full text-left text-gray-700">
          <thead className="bg-purple-100">
            <tr>
              <th className="px-6 py-3">ID</th>
              <th className="px-6 py-3">Data</th>
              <th className="px-6 py-3">Cliente</th>
              <th className="px-6 py-3">Status</th>
              <th className="px-6 py-3">Total</th>
              <th className="px-6 py-3">Ações</th>
            </tr>
          </thead>
          <tbody>
            {/* Exemplo de linha de pedido */}
            <tr className="border-b">
              <td className="px-6 py-4">1</td>
              <td className="px-6 py-4">2024-10-29</td>
              <td className="px-6 py-4">Cliente Exemplo</td>
              <td className="px-6 py-4">Pendente</td>
              <td className="px-6 py-4">R$ 250,00</td>
              <td className="px-6 py-4">
                <button
                  onClick={() => handleEditOrder(1)}
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

      {/* Botão de Adicionar Novo Pedido */}
      <div className="flex justify-end mt-4">
        <button
          onClick={handleAddOrder}
          className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
        >
          Adicionar Novo Pedido
        </button>
      </div>
    </div>
  );
};

export default OrdersPage;
