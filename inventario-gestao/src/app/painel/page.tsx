"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const PainelPage: React.FC = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const router = useRouter();

  const handleLogin = () => {
    // Redireciona para a dashboard
    router.push('/dashboard');
  };

  const handleRegister = () => {
    // Redireciona para a dashboard
    router.push('/dashboard');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
        <Link href="/" className="text-purple-700 hover:underline mb-4 block">
          &larr; Voltar à Página Inicial
        </Link>
        <h2 className="text-2xl font-bold text-center text-gray-800">
          {isRegistering ? "Crie sua Conta no Estockly" : "Acesse o Painel Estockly"}
        </h2>
        <p className="text-center text-gray-600 mb-4">
          {isRegistering ? "Cadastre-se para gerenciar seus estoques, produtos e fornecedores." : "Gerencie seus estoques, produtos e fornecedores em um único lugar."}
        </p>

        {isRegistering ? (
          <form onSubmit={(e) => { e.preventDefault(); handleRegister(); }} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nome</label>
              <input type="text" id="name" required className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" id="email" required className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600" />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Senha</label>
              <input type="password" id="password" required className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600" />
            </div>
            <button type="submit" className="w-full py-2 bg-purple-700 text-white rounded-md hover:bg-purple-800">Cadastrar</button>
          </form>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); handleLogin(); }} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" id="email" required className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600" />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Senha</label>
              <input type="password" id="password" required className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600" />
            </div>
            <button type="submit" className="w-full py-2 bg-purple-700 text-white rounded-md hover:bg-purple-800">Entrar</button>
          </form>
        )}

        <div className="text-center">
          {isRegistering ? (
            <p className="text-sm text-gray-600">
              Já tem uma conta?{" "}
              <button onClick={() => setIsRegistering(false)} className="text-purple-600 hover:underline">
                Faça login
              </button>
            </p>
          ) : (
            <p className="text-sm text-gray-600">
              Não tem uma conta?{" "}
              <button onClick={() => setIsRegistering(true)} className="text-purple-600 hover:underline">
                Cadastre-se
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PainelPage;
