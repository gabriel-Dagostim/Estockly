"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { FaSignOutAlt } from 'react-icons/fa';

const DashboardHeader: React.FC = () => {
  const router = useRouter();

  const handleLogout = () => {
    // Redireciona para a página de login/painel ao clicar em "Sair"
    router.push('/painel');
  };

  return (
    <header className="flex justify-between items-center px-8 py-4 bg-purple-100 shadow-lg fixed top-0 left-64 w-[calc(100%-16rem)] max-w-[calc(100%-16rem)] h-20">
      <h1 className="text-3xl font-bold text-purple-700">Dashboard</h1>

      <div className="flex items-center space-x-6">
        {/* Nome do usuário */}
        <span className="text-lg text-gray-700 font-semibold">Olá, Gabriel</span>

        {/* Botão de Sair */}
        <button
          onClick={handleLogout}
          className="px-5 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition duration-300 ease-in-out flex items-center space-x-2"
        >
          <FaSignOutAlt className="text-white" />
          <span>Sair</span>
        </button>
      </div>
    </header>
  );
};

export default DashboardHeader;
