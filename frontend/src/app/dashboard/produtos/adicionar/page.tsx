"use client";

import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';

interface ProductForm {
  nome: string;
  descricao: string;
  preco: number;
  quantidade: number;
  imagem?: string;
  fornecedorId: number;
}

interface Fornecedor {
  id: number;
  nome: string;
}

const AddProductPage: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ProductForm>();
  const [fornecedores, setFornecedores] = useState<Fornecedor[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchFornecedores = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/suppliers', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Erro ao buscar fornecedores.');
        }

        const data: Fornecedor[] = await response.json();
        setFornecedores(data);
      } catch (error) {
        console.error('Erro ao buscar fornecedores:', error);
      }
    };

    fetchFornecedores();
  }, []);

  const onSubmit = async (data: ProductForm) => {
    try {
      const response = await fetch('http://localhost:3001/api/products', {
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
  
      alert('Produto adicionado com sucesso!');
      router.push('/dashboard/produtos');
    } catch (error) {
      console.error('Erro ao adicionar produto:', error);
      alert('Erro ao adicionar produto. Tente novamente.');
    }
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
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 text-black"
          />
          {errors.nome && <span className="text-red-500 text-sm">{errors.nome.message}</span>}
        </div>

        {/* Campo Descrição */}
        <div>
          <label htmlFor="descricao" className="block text-gray-700 font-medium mb-2">Descrição</label>
          <textarea
            id="descricao"
            {...register('descricao', { required: "A descrição é obrigatória." })}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 text-black"
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
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 text-black"
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
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 text-black"
          />
          {errors.quantidade && <span className="text-red-500 text-sm">{errors.quantidade.message}</span>}
        </div>

        {/* Campo Imagem */}
        <div>
          <label htmlFor="imagem" className="block text-gray-700 font-medium mb-2">URL da Imagem</label>
          <input
            type="url"
            id="imagem"
            {...register('imagem')}
            placeholder="https://exemplo.com/imagem.jpg"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 text-black"
          />
        </div>

        {/* Campo Fornecedor */}
        <div>
          <label htmlFor="fornecedorId" className="block text-gray-700 font-medium mb-2">Fornecedor</label>
          <select
            id="fornecedorId"
            {...register('fornecedorId', { required: "Selecione um fornecedor." })}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 text-black"
          >
            <option value="">Selecione o fornecedor</option>
            {fornecedores.map((fornecedor: Fornecedor) => (
              <option key={fornecedor.id} value={fornecedor.id}>{fornecedor.nome}</option>
            ))}
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
