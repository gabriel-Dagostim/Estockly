'use client';

import React from 'react';

interface DashboardSubHeaderProps {
  title: string;           // Título da guia (ex: 'Fornecedores', 'Clientes', etc.)
  totalCount: number;       // Número total de itens (ex: total de fornecedores, clientes, etc.)
  placeholder: string;      // Texto do placeholder para o campo de filtro
}

const DashboardSubHeader: React.FC<DashboardSubHeaderProps> = ({ title, totalCount, placeholder }) => {
  return (
    <div className='flex justify-between items-center bg-white px-6 py-4 shadow-md mb-4'>
      <div>
        <h2 className='text-2xl font-bold text-purple-700'>{title}</h2>
        <p className='text-gray-600'>Total de {title.toLowerCase()}: {totalCount}</p>
      </div>
      <input
        type='text'
        placeholder={placeholder}
        className='px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600'
      />
    </div>
  );
};

export default DashboardSubHeader;
