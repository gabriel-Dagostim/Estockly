"use client";

import React from 'react';
import { useRouter } from 'next/navigation';

const DashboardHeader: React.FC = () => {
  const router = useRouter();

  const handleLogout = () => {
    // Redireciona para a página de login/painel ao clicar em "Sair"
    router.push('/painel');
  };

  return (
    <header className="flex justify-between items-center w-full px-6 py-4 bg-white shadow-md fixed top-0 left-0 z-10 ml-64 h-16">
      <h1 className="text-2xl font-bold text-purple-700">Dashboard</h1>

      <div className="flex items-center space-x-4">
        {/* Nome do usuário temporário */}
        <span className="text-gray-600">Olá, Gabriel</span>
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
        >
          Sair
        </button>
      </div>
    </header>
  );
};

export default DashboardHeader;
