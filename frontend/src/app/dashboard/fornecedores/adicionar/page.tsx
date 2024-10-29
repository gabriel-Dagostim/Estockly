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
  const { control, handleSubmit, register } = useForm<SupplierForm>();
  const router = useRouter();

  const onSubmit = (data: SupplierForm) => {
    console.log(data);
    router.push('/dashboard/fornecedores');
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-purple-700">Adicionar Fornecedor</h2>
        <button
          onClick={() => router.push('/dashboard/fornecedores')}
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
        >
          Voltar
        </button>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded-lg shadow-md space-y-4">
        {/* Campo Nome */}
        <div>
          <label htmlFor="nome" className="block text-gray-700 font-medium mb-2">Nome</label>
          <input
            type="text"
            id="nome"
            {...register('nome', { required: true })}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
        </div>

        {/* Campo CNPJ com Máscara */}
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
        </div>

        {/* Campo Contato com Máscara */}
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
        </div>

        {/* Campo Endereço */}
        <div>
          <label htmlFor="endereco" className="block text-gray-700 font-medium mb-2">Endereço</label>
          <input
            type="text"
            id="endereco"
            {...register('endereco', { required: true })}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
        </div>

        {/* Botão de Submissão */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
          >
            Adicionar Fornecedor
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddSupplierPage;
