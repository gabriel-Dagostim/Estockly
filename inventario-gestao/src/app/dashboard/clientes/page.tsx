"use client";

import React from 'react';
import DashboardSubHeader from '../../components/DashboardSubHeader';
import { useRouter } from 'next/navigation';

const ClientsPage: React.FC = () => {
  const totalClients = 20; // Número temporário de clientes para exibição
  const router = useRouter();

  const handleAddClient = () => {
    router.push('/dashboard/clientes/adicionar');
  };

  const handleEditClient = (id: number) => {
    router.push(`/dashboard/clientes/editar/${id}`);
  };

  const handleBack = () => {
    router.push('/dashboard');
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-purple-700">Clientes</h2>
        <button
          onClick={handleBack}
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
        >
          Voltar
        </button>
      </div>

      {/* Sub-header dos clientes */}
      <DashboardSubHeader 
        title="Clientes" 
        totalCount={totalClients} 
        placeholder="Filtrar clientes..." 
      />

      {/* Tabela de Clientes */}
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full text-left text-gray-700">
          <thead className="bg-purple-100">
            <tr>
              <th className="px-6 py-3">ID</th>
              <th className="px-6 py-3">Nome</th>
              <th className="px-6 py-3">CPF/CNPJ</th>
              <th className="px-6 py-3">Contato</th>
              <th className="px-6 py-3">Endereço</th>
              <th className="px-6 py-3">Ações</th>
            </tr>
          </thead>
          <tbody>
            {/* Exemplo de linha de cliente */}
            <tr className="border-b">
              <td className="px-6 py-4">1</td>
              <td className="px-6 py-4">Cliente Exemplo</td>
              <td className="px-6 py-4">000.000.000-00</td>
              <td className="px-6 py-4">+55 (99) 99999-9999</td>
              <td className="px-6 py-4">Rua Exemplo, 123</td>
              <td className="px-6 py-4">
                <button
                  onClick={() => handleEditClient(1)}
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

      {/* Botão de Adicionar Novo Cliente */}
      <div className="flex justify-end mt-4">
        <button
          onClick={handleAddClient}
          className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
        >
          Adicionar Novo Cliente
        </button>
      </div>
    </div>
  );
};

export default ClientsPage;
