"use client";

import React from 'react';
import DashboardSubHeader from '../../components/DashboardSubHeader';
import { useRouter } from 'next/navigation';

const SuppliersPage: React.FC = () => {
  const totalSuppliers = 10; // Número temporário de fornecedores para exibição
  const router = useRouter();

  const handleAddSupplier = () => {
    router.push('/dashboard/fornecedores/adicionar');
  };

  const handleEditSupplier = (id: number) => {
    router.push(`/dashboard/fornecedores/editar/${id}`);
  };

  const handleBack = () => {
    router.push('/dashboard'); // Redireciona para a página principal da dashboard
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-purple-700">Fornecedores</h2>
        <button
          onClick={handleBack}
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
        >
          Voltar
        </button>
      </div>

      {/* Sub-header dos fornecedores */}
      <DashboardSubHeader 
        title="Fornecedores" 
        totalCount={totalSuppliers} 
        placeholder="Filtrar fornecedores..." 
      />

      {/* Tabela de Fornecedores */}
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full text-left text-gray-700">
          <thead className="bg-purple-100">
            <tr>
              <th className="px-6 py-3">ID</th>
              <th className="px-6 py-3">Nome</th>
              <th className="px-6 py-3">CNPJ</th>
              <th className="px-6 py-3">Contato</th>
              <th className="px-6 py-3">Endereço</th>
              <th className="px-6 py-3">Ações</th>
            </tr>
          </thead>
          <tbody>
            {/* Exemplo de linha de fornecedor */}
            <tr className="border-b">
              <td className="px-6 py-4">1</td>
              <td className="px-6 py-4">Fornecedor Exemplo</td>
              <td className="px-6 py-4">00.000.000/0001-00</td>
              <td className="px-6 py-4">contato@exemplo.com</td>
              <td className="px-6 py-4">Rua Exemplo, 123</td>
              <td className="px-6 py-4">
                {/* Botão de Editar */}
                <button
                  onClick={() => handleEditSupplier(1)}
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

      {/* Botão de Adicionar Novo Fornecedor */}
      <div className="flex justify-end mt-4">
        <button
          onClick={handleAddSupplier}
          className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
        >
          Adicionar Novo Fornecedor
        </button>
      </div>
    </div>
  );
};

export default SuppliersPage;
