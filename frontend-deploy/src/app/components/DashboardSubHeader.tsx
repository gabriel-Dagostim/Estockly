'use client';

import React from 'react';

interface DashboardSubHeaderProps {
  title: string;           // Título da guia (ex: 'Fornecedores', 'Clientes', etc.)
  totalCount: number;       // Número total de itens (ex: total de fornecedores, clientes, etc.)
  placeholder: string;      // Texto do placeholder para o campo de filtro
}

const DashboardSubHeader: React.FC<DashboardSubHeaderProps> = ({ title, totalCount, placeholder }) => {
  return (
    <div className='flex flex-col md:flex-row justify-between items-center bg-purple-100 px-6 py-4 rounded-lg shadow-md mb-6'>
      <div className='mb-4 md:mb-0'>
        <h2 className='text-3xl font-bold text-purple-700'>{title}</h2>
        <p className='text-gray-700'>Total de {title.toLowerCase()}: <span className='font-semibold text-purple-600'>{totalCount}</span></p>
      </div>
      <input
        type='text'
        placeholder={placeholder}
        className='px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 md:w-1/3 transition duration-300'
      />
    </div>
  );
};

export default DashboardSubHeader;
