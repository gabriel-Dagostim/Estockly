"use client";

import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useRouter } from 'next/navigation';

interface ProductForm {
  nome: string;
  descricao: string;
  preco: number;
  quantidade: number;
  imagem: string;
  fornecedorId: number;
}

const AddProductPage: React.FC = () => {
  const { control, handleSubmit, register, formState: { errors } } = useForm<ProductForm>();
  const router = useRouter();

  const onSubmit = (data: ProductForm) => {
    console.log(data);
    router.push('/dashboard/produtos');
  };

  const handleBack = () => {
    router.push('/dashboard/produtos');
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-purple-700">Adicionar Produto</h2>
        <button
          onClick={handleBack}
         className="px-4 py-2 bg-purple-200 text-purple-700 font-semibold rounded-md hover:bg-purple-300 transition"
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
            {...register('nome', { required: "O nome é obrigatório." })}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
          {errors.nome && <span className="text-red-500 text-sm">{errors.nome.message}</span>}
        </div>

        {/* Campo Descrição */}
        <div>
          <label htmlFor="descricao" className="block text-gray-700 font-medium mb-2">Descrição</label>
          <textarea
            id="descricao"
            {...register('descricao', { required: "A descrição é obrigatória." })}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
          {errors.descricao && <span className="text-red-500 text-sm">{errors.descricao.message}</span>}
        </div>

        {/* Campo Preço */}
        <div>
          <label htmlFor="preco" className="block text-gray-700 font-medium mb-2">Preço</label>
          <input
            type="number"
            id="preco"
            {...register('preco', {
              required: "O preço é obrigatório.",
              min: { value: 1, message: "O preço deve ser maior que zero." }
            })}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
          {errors.preco && <span className="text-red-500 text-sm">{errors.preco.message}</span>}
        </div>

        {/* Campo Quantidade */}
        <div>
          <label htmlFor="quantidade" className="block text-gray-700 font-medium mb-2">Quantidade</label>
          <input
            type="number"
            id="quantidade"
            {...register('quantidade', {
              required: "A quantidade é obrigatória.",
              min: { value: 1, message: "A quantidade deve ser maior que zero." }
            })}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
          {errors.quantidade && <span className="text-red-500 text-sm">{errors.quantidade.message}</span>}
        </div>

        {/* Campo Imagem (URL) */}
        <div>
          <label htmlFor="imagem" className="block text-gray-700 font-medium mb-2">URL da Imagem</label>
          <input
            type="url"
            id="imagem"
            {...register('imagem')}
            placeholder="https://exemplo.com/imagem.jpg"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
        </div>

        {/* Campo Fornecedor */}
        <div>
          <label htmlFor="fornecedorId" className="block text-gray-700 font-medium mb-2">Fornecedor</label>
          <select
            id="fornecedorId"
            {...register('fornecedorId', { required: "Selecione um fornecedor." })}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
          >
            <option value="">Selecione o fornecedor</option>
            <option value="1">Fornecedor 1</option>
            <option value="2">Fornecedor 2</option>
          </select>
          {errors.fornecedorId && <span className="text-red-500 text-sm">{errors.fornecedorId.message}</span>}
        </div>

        {/* Botão de Submissão */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
          >
            Adicionar Produto
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProductPage;