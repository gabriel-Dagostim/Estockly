"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaSignOutAlt } from 'react-icons/fa';

const DashboardHeader: React.FC = () => {
  const [userName, setUserName] = useState<string>('');
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/users', {
          method: 'GET',
          credentials: 'include', // Inclui cookies na requisição
        });

        if (!response.ok) {
          throw new Error('Erro ao buscar informações do usuário');
        }

        const user = await response.json();
        // Extrai apenas o primeiro nome
        const firstName = user.name?.split(' ')[0] || 'Usuário';
        setUserName(firstName);
      } catch (error) {
        console.error('Erro ao buscar informações do usuário:', error);
      }
    };

    fetchUser();
  }, []);

  const handleLogout = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/logout', {
        method: 'POST',
        credentials: 'include',
      });

      if (response.ok) {
        router.push('/painel');
      } else {
        console.error('Erro ao sair:', await response.text());
      }
    } catch (error) {
      console.error('Erro ao sair:', error);
    }
  };

  return (
    <header className="flex justify-between items-center px-8 py-4 bg-purple-100 shadow-lg fixed top-0 left-64 w-[calc(100%-16rem)] max-w-[calc(100%-16rem)] h-20">
      <h1 className="text-3xl font-bold text-purple-700">Dashboard</h1>

      <div className="flex items-center space-x-6">
        {/* Nome do usuário */}
        <span className="text-lg text-gray-700 font-semibold">Olá, {userName}</span>

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
