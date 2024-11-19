"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface Fornecedor {
  id: number;
  nome: string;
  cnpj: string;
  contato: string;
  endereco: string;
}

const SuppliersPage: React.FC = () => {
  const [suppliers, setSuppliers] = useState<Fornecedor[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchSuppliers = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/suppliers');
        if (!response.ok) {
          throw new Error('Erro ao carregar fornecedores.');
        }
        const data = await response.json();
        setSuppliers(data);
      } catch (error) {
        console.error('Erro ao buscar fornecedores:', error);
        setError('Erro ao carregar fornecedores.');
      } finally {
        setLoading(false);
      }
    };

    fetchSuppliers();
  }, []);

  const handleEdit = (id: number) => {
    router.push(`/dashboard/fornecedores/editar/${id}`);
  };

  const handleBack = () => {
    router.push('/dashboard');
  };

  if (loading) return <p>Carregando fornecedores...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-purple-700">Fornecedores</h2>
        <button
          onClick={handleBack}
          className="px-4 py-2 bg-purple-200 text-purple-700 font-semibold rounded-md hover:bg-purple-300 transition"
        >
          Voltar
        </button>
      </div>

      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full text-left text-gray-700">
          <thead className="bg-purple-100">
            <tr>
              <th className="px-6 py-3">ID</th>
              <th className="px-6 py-3">Nome</th>
              <th className="px-6 py-3">CNPJ</th>
              <th className="px-6 py-3">Contato</th>
              <th className="px-6 py-3">Endereço</th>
              <th className="px-6 py-3">Ações</th>
            </tr>
          </thead>
          <tbody>
            {suppliers.map((supplier) => (
              <tr key={supplier.id} className="border-b">
                <td className="px-6 py-4">{supplier.id}</td>
                <td className="px-6 py-4">{supplier.nome}</td>
                <td className="px-6 py-4">{supplier.cnpj}</td>
                <td className="px-6 py-4">{supplier.contato}</td>
                <td className="px-6 py-4">{supplier.endereco}</td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => handleEdit(supplier.id)}
                    className="px-2 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 mr-2"
                  >
                    Editar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-end mt-4">
        <Link
          href="/dashboard/fornecedores/adicionar"
          className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
        >
          Adicionar Novo Fornecedor
        </Link>
      </div>
    </div>
  );
};

export default SuppliersPage;
