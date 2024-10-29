import React from 'react';
import Link from 'next/link';

const RegisterPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800">Cadastre-se na Investa</h2>
        <form className="space-y-4">
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
          <button type="submit" className="w-full py-2 text-white bg-purple-600 rounded-md hover:bg-purple-700">Cadastrar</button>
        </form>
        <p className="text-sm text-center text-gray-600">
          Já tem uma conta? <Link href="/login" className="text-purple-600 hover:underline">Faça login</Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
