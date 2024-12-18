"use client";

import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';

interface ClientForm {
  nome: string;
  cpf_cnpj: string;
  contato: string;
  endereco: string;
}

const EditClientPage: React.FC<{ params: { id: string } }> = ({ params }) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ClientForm>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const router = useRouter();

  useEffect(() => {
    const fetchClient = async () => {
      try {
        const response = await fetch(`http://localhost:3001/api/clientes?id=${params.id}`, {
          method: 'GET',
        });

        if (!response.ok) {
          throw new Error('Erro ao carregar cliente.');
        }

        const client = await response.json();
        reset(client); // Preenche os campos do formulário com os dados do cliente
      } catch (error) {
        console.error('Erro ao carregar cliente:', error);
        setError('Erro ao carregar cliente.');
      } finally {
        setLoading(false);
      }
    };

    fetchClient();
  }, [params.id, reset]);

  const onSubmit = async (data: ClientForm) => {
    try {
      const response = await fetch(`http://localhost:3001/api/clientes?id=${params.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Erro ao atualizar cliente.');
      }

      alert('Cliente atualizado com sucesso!');
      router.push('/dashboard/clientes');
    } catch (error) {
      console.error('Erro ao atualizar cliente:', error);
      alert('Erro ao atualizar cliente. Tente novamente.');
    }
  };

  const handleBack = () => {
    router.push('/dashboard/clientes');
  };

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-purple-700">Editar Cliente</h2>
        <button
          onClick={handleBack}
          className="px-4 py-2 bg-purple-200 text-purple-700 rounded-md hover:bg-purple-300 transition"
        >
          Voltar
        </button>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded-lg shadow-lg space-y-4">
        {/* Campo Nome */}
        <div>
          <label htmlFor="nome" className="block text-gray-700 font-medium mb-2">Nome</label>
          <input
            type="text"
            id="nome"
            {...register('nome', { required: "O nome é obrigatório." })}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 text-black"
          />
          {errors.nome && <span className="text-red-500 text-sm">{errors.nome.message}</span>}
        </div>

        {/* Campo CPF/CNPJ */}
        <div>
          <label htmlFor="cpf_cnpj" className="block text-gray-700 font-medium mb-2">CPF/CNPJ</label>
          <input
            type="text"
            id="cpf_cnpj"
            {...register('cpf_cnpj', { required: "O CPF/CNPJ é obrigatório." })}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 text-black"
          />
          {errors.cpf_cnpj && <span className="text-red-500 text-sm">{errors.cpf_cnpj.message}</span>}
        </div>

        {/* Campo Contato */}
        <div>
          <label htmlFor="contato" className="block text-gray-700 font-medium mb-2">Contato</label>
          <input
            type="text"
            id="contato"
            {...register('contato', { required: "O contato é obrigatório." })}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 text-black"
          />
          {errors.contato && <span className="text-red-500 text-sm">{errors.contato.message}</span>}
        </div>

        {/* Campo Endereço */}
        <div>
          <label htmlFor="endereco" className="block text-gray-700 font-medium mb-2">Endereço</label>
          <input
            type="text"
            id="endereco"
            {...register('endereco', { required: "O endereço é obrigatório." })}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 text-black"
          />
          {errors.endereco && <span className="text-red-500 text-sm">{errors.endereco.message}</span>}
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="px-6 py-2 bg-purple-600 text-white rounded-md font-semibold hover:bg-purple-700 transition"
          >
            Salvar Alterações
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditClientPage;
