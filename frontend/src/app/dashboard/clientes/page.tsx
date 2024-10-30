// src/app/dashboard/clientes/page.tsx
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
    <div className="p-8 bg-gray-100 min-h-screen">
      {/* Header com título e botão de voltar */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-purple-700">Clientes</h2>
        <button
          onClick={handleBack}
          className="px-4 py-2 bg-purple-200 text-purple-700 font-semibold rounded-md hover:bg-purple-300 transition"
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
      <div className="bg-white shadow-lg rounded-lg overflow-hidden mt-6">
        <table className="min-w-full text-left text-gray-800">
          <thead className="bg-purple-600 text-white">
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
            <tr className="border-b hover:bg-purple-50 transition">
              <td className="px-6 py-4">1</td>
              <td className="px-6 py-4">Cliente Exemplo</td>
              <td className="px-6 py-4">000.000.000-00</td>
              <td className="px-6 py-4">+55 (99) 99999-9999</td>
              <td className="px-6 py-4">Rua Exemplo, 123</td>
              <td className="px-6 py-4">
                <button
                  onClick={() => handleEditClient(1)}
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

      {/* Botão de Adicionar Novo Cliente */}
      <div className="flex justify-end mt-6">
        <button
          onClick={handleAddClient}
          className="px-6 py-2 bg-purple-600 text-white rounded-md font-semibold hover:bg-purple-700 transition"
        >
          Adicionar Novo Cliente
        </button>
      </div>
    </div>
  );
};

export default ClientsPage;
