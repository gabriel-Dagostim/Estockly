// src/app/painel/page.tsx
"use client";

import Link from 'next/link';

const PainelPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="w-full max-w-md p-6 space-y-6 bg-white rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-bold text-purple-700">Área do Cliente</h1>
        <p className="text-gray-600">Escolha uma opção para acessar sua conta.</p>
        
        {/* Botões de Ação */}
        <div className="space-y-4 mt-6">
          <Link href="/login">
            <button className="w-full py-3 bg-purple-700 text-white rounded-md text-lg font-semibold hover:bg-purple-800 transition duration-300">
              Fazer Login
            </button>
          </Link>
          <Link href="/register">
            <button className="w-full py-3 bg-purple-500 text-white rounded-md text-lg font-semibold hover:bg-purple-600 transition duration-300 mt-4">
              Cadastre-se
            </button>
          </Link>
        </div>

        {/* Link de Voltar */}
        <Link href="/" className="text-purple-700 hover:underline mt-4 block">
          &larr; Voltar à Página Inicial
        </Link>
      </div>
    </div>
  );
};

export default PainelPage;
