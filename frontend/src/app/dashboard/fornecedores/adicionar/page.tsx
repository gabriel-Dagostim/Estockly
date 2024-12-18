"use client";

import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import MaskedInput from 'react-text-mask';
import { useRouter } from 'next/navigation';

interface SupplierForm {
  nome: string;
  cnpj: string;
  contato: string;
  endereco: string;
}

const AddSupplierPage: React.FC = () => {
  const { control, handleSubmit, register, formState: { errors } } = useForm<SupplierForm>();
  const router = useRouter();

  const onSubmit = async (data: SupplierForm) => {
    try {
      const response = await fetch('http://localhost:3001/api/suppliers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorResponse = await response.json();
        alert(`Erro: ${errorResponse.error}`);
        return;
      }

      alert('Fornecedor adicionado com sucesso!');
      router.push('/dashboard/fornecedores');
    } catch (error) {
      console.error('Erro ao adicionar fornecedor:', error);
      alert('Erro ao adicionar fornecedor. Tente novamente.');
    }
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-purple-700">Adicionar Fornecedor</h2>
        <button
          onClick={() => router.push('/dashboard/fornecedores')}
          className="px-4 py-2 bg-purple-200 text-purple-700 font-semibold rounded-md hover:bg-purple-300 transition"
        >
          Voltar
        </button>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded-lg shadow-lg space-y-6">
        <div>
          <label htmlFor="nome" className="block text-gray-700 font-medium mb-2">Nome</label>
          <input
            type="text"
            id="nome"
            {...register('nome', { required: "O nome é obrigatório." })}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
          {errors.nome && <span className="text-red-500 text-sm">{errors.nome.message}</span>}
        </div>

        <div>
          <label htmlFor="cnpj" className="block text-gray-700 font-medium mb-2">CNPJ</label>
          <Controller
            name="cnpj"
            control={control}
            render={({ field }) => (
              <MaskedInput
                {...field}
                mask={[/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/]}
                placeholder="00.000.000/0000-00"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            )}
          />
          {errors.cnpj && <span className="text-red-500 text-sm">CNPJ inválido</span>}
        </div>

        <div>
          <label htmlFor="contato" className="block text-gray-700 font-medium mb-2">Contato</label>
          <Controller
            name="contato"
            control={control}
            render={({ field }) => (
              <MaskedInput
                {...field}
                mask={['+', /\d/, /\d/, ' ', '(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                placeholder="+55 (99) 99999-9999"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            )}
          />
          {errors.contato && <span className="text-red-500 text-sm">Contato inválido</span>}
        </div>

        <div>
          <label htmlFor="endereco" className="block text-gray-700 font-medium mb-2">Endereço</label>
          <input
            type="text"
            id="endereco"
            {...register('endereco', { required: "O endereço é obrigatório." })}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
          {errors.endereco && <span className="text-red-500 text-sm">{errors.endereco.message}</span>}
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="px-6 py-2 bg-purple-600 text-white rounded-md font-semibold hover:bg-purple-700 transition"
          >
            Adicionar Fornecedor
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddSupplierPage;