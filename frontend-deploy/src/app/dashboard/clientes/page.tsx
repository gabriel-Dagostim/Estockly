'use client';

import React, { useEffect, useState } from 'react';
import DashboardSubHeader from '../../components/DashboardSubHeader';
import { useRouter } from 'next/navigation';

interface Cliente {
  id: number;
  nome: string;
  cpf_cnpj: string;
  contato: string;
  endereco: string;
}

const ClientsPage: React.FC = () => {
  const [clients, setClients] = useState<Cliente[]>([]);
  const router = useRouter();

  useEffect(() => {
    // Dados mockados de clientes
    const mockClients: Cliente[] = [
      {
        id: 1,
        nome: 'João Silva',
        cpf_cnpj: '123.456.789-10',
        contato: '(11) 98765-4321',
        endereco: 'Rua das Flores, 123',
      },
      {
        id: 2,
        nome: 'Maria Oliveira',
        cpf_cnpj: '98.765.432/0001-12',
        contato: '(21) 91234-5678',
        endereco: 'Avenida Paulista, 456',
      },
      {
        id: 3,
        nome: 'Carlos Souza',
        cpf_cnpj: '789.456.123-00',
        contato: '(31) 99876-5432',
        endereco: 'Rua das Palmeiras, 789',
      },
    ];
    setClients(mockClients);
  }, []);

  const handleAddClient = () => {
    alert('Adicionar Novo Cliente');
  };

  const handleEditClient = (id: number) => {
    alert(`Editar Cliente com ID: ${id}`);
  };

  const handleBack = () => {
    router.push('/dashboard');
  };

  return (
    <div className='p-8 bg-gray-100 min-h-screen'>
      <div className='flex justify-between items-center mb-6'>
        <h2 className='text-3xl font-bold text-purple-700'>Clientes</h2>
        <button
          onClick={handleBack}
          className='px-4 py-2 bg-purple-200 text-purple-700 font-semibold rounded-md hover:bg-purple-300 transition'
        >
          Voltar
        </button>
      </div>

      <DashboardSubHeader
        title='Clientes'
        totalCount={clients.length}
        placeholder='Filtrar clientes...'
      />

      <div className='bg-white shadow-lg rounded-lg overflow-hidden mt-6'>
        <table className='min-w-full text-left text-gray-800'>
          <thead className='bg-purple-600 text-white'>
            <tr>
              <th className='px-6 py-3'>ID</th>
              <th className='px-6 py-3'>Nome</th>
              <th className='px-6 py-3'>CPF/CNPJ</th>
              <th className='px-6 py-3'>Contato</th>
              <th className='px-6 py-3'>Endereço</th>
              <th className='px-6 py-3'>Ações</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client) => (
              <tr key={client.id} className='border-b hover:bg-purple-50 transition'>
                <td className='px-6 py-4'>{client.id}</td>
                <td className='px-6 py-4'>{client.nome}</td>
                <td className='px-6 py-4'>{client.cpf_cnpj}</td>
                <td className='px-6 py-4'>{client.contato}</td>
                <td className='px-6 py-4'>{client.endereco}</td>
                <td className='px-6 py-4'>
                  <button
                    onClick={() => handleEditClient(client.id)}
                    className='px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition mr-2'
                  >
                    Editar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className='flex justify-end mt-6'>
        <button
          onClick={handleAddClient}
          className='px-6 py-2 bg-purple-600 text-white rounded-md font-semibold hover:bg-purple-700 transition'
        >
          Adicionar Novo Cliente
        </button>
      </div>
    </div>
  );
};

export default ClientsPage;
