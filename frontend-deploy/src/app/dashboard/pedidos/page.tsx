'use client';

import React, { useEffect, useState } from 'react';

interface Pedido {
  id: number;
  data: string;
  cliente: {
    nome: string;
  };
  status: string;
  total: number;
}

const OrdersPage: React.FC = () => {
  const [pedidos, setPedidos] = useState<Pedido[]>([]);
  const [filteredPedidos, setFilteredPedidos] = useState<Pedido[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Mock de pedidos
    const pedidosMock: Pedido[] = [
      {
        id: 1,
        data: '2024-11-01',
        cliente: { nome: 'João Silva' },
        status: 'Concluído',
        total: 150.75,
      },
      {
        id: 2,
        data: '2024-11-05',
        cliente: { nome: 'Maria Oliveira' },
        status: 'Pendente',
        total: 89.99,
      },
      {
        id: 3,
        data: '2024-11-07',
        cliente: { nome: 'Carlos Souza' },
        status: 'Cancelado',
        total: 120.5,
      },
    ];
    setPedidos(pedidosMock);
    setFilteredPedidos(pedidosMock);
  }, []);

  const handleAddOrder = () => {
    alert('Adicionar Novo Pedido.');
  };

  const handleEditOrder = (id: number) => {
    alert(`Editar Pedido ${id}.`);
  };

  const handleBack = () => {
    alert('Voltar ao Dashboard.');
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query) {
      const filtered = pedidos.filter((pedido) =>
        pedido.cliente.nome.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredPedidos(filtered);
    } else {
      setFilteredPedidos(pedidos);
    }
  };

  return (
    <div className='p-8 bg-gray-100 min-h-screen'>
      {/* Header com título e botão de voltar */}
      <div className='flex justify-between items-center mb-6'>
        <h2 className='text-3xl font-bold text-purple-700'>Pedidos</h2>
        <button
          onClick={handleBack}
          className='px-4 py-2 bg-purple-200 text-purple-700 font-semibold rounded-md hover:bg-purple-300 transition'
        >
          Voltar
        </button>
      </div>

      {/* Barra de pesquisa */}
      <div className='mb-6'>
        <input
          type='text'
          placeholder='Filtrar por cliente...'
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
          className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600'
        />
      </div>

      {/* Tabela de Pedidos */}
      <div className='bg-white shadow-lg rounded-lg overflow-hidden mt-6'>
        <table className='min-w-full text-left text-gray-700'>
          <thead className='bg-purple-100'>
            <tr>
              <th className='px-6 py-3 text-sm font-medium text-purple-700 uppercase tracking-wider'>ID</th>
              <th className='px-6 py-3 text-sm font-medium text-purple-700 uppercase tracking-wider'>Data</th>
              <th className='px-6 py-3 text-sm font-medium text-purple-700 uppercase tracking-wider'>Cliente</th>
              <th className='px-6 py-3 text-sm font-medium text-purple-700 uppercase tracking-wider'>Status</th>
              <th className='px-6 py-3 text-sm font-medium text-purple-700 uppercase tracking-wider'>Total</th>
              <th className='px-6 py-3 text-sm font-medium text-purple-700 uppercase tracking-wider'>Ações</th>
            </tr>
          </thead>
          <tbody>
            {filteredPedidos.map((pedido) => (
              <tr key={pedido.id} className='border-b hover:bg-gray-50 transition'>
                <td className='px-6 py-4'>{pedido.id}</td>
                <td className='px-6 py-4'>{new Date(pedido.data).toLocaleDateString()}</td>
                <td className='px-6 py-4 text-purple-700 font-semibold'>{pedido.cliente.nome}</td>
                <td className='px-6 py-4'>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      pedido.status === 'Concluído'
                        ? 'bg-green-100 text-green-800'
                        : pedido.status === 'Pendente'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {pedido.status}
                  </span>
                </td>
                <td className='px-6 py-4 text-green-600 font-semibold'>R$ {pedido.total.toFixed(2)}</td>
                <td className='px-6 py-4'>
                  <button
                    onClick={() => handleEditOrder(pedido.id)}
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

      {/* Botão de Adicionar Novo Pedido */}
      <div className='flex justify-end mt-6'>
        <button
          onClick={handleAddOrder}
          className='px-6 py-2 bg-purple-600 text-white rounded-md font-semibold hover:bg-purple-700 transition'
        >
          Adicionar Novo Pedido
        </button>
      </div>
    </div>
  );
};

export default OrdersPage;
