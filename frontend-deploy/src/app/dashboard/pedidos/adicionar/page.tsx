'use client';

import React, { useEffect, useState } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';

interface Produto {
  id: number;
  nome: string;
  preco: number;
}

interface Cliente {
  id: number;
  nome: string;
}

interface PedidoForm {
  clienteId: number;
  data: string;
  status: string;
  itens: { produtoId: number; quantidade: number; precoUnitario: number; subtotal: number }[];
  total: number;
}

const AddOrderPage: React.FC = () => {
  const { control, handleSubmit, watch, setValue, register } = useForm<PedidoForm>({
    defaultValues: {
      itens: [],
      total: 0,
      data: new Date().toISOString().split('T')[0],
      status: 'Aguardando',
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'itens',
  });

  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [filteredProdutos, setFilteredProdutos] = useState<Produto[]>([]);

  useEffect(() => {
    // Dados simulados para clientes e produtos
    const clientesMock = [
      { id: 1, nome: 'João Silva' },
      { id: 2, nome: 'Maria Oliveira' },
    ];

    const produtosMock = [
      { id: 1, nome: 'Produto A', preco: 50 },
      { id: 2, nome: 'Produto B', preco: 30 },
      { id: 3, nome: 'Produto C', preco: 20 },
    ];

    setClientes(clientesMock);
    setProdutos(produtosMock);
    setFilteredProdutos(produtosMock);
  }, []);

  const calculateTotal = () => {
    const itens = watch('itens');
    const total = itens.reduce((acc, item) => acc + item.subtotal, 0);
    setValue('total', total);
  };

  const handleProdutoChange = (produtoId: number) => {
    const produto = produtos.find((p) => p.id === produtoId);
    if (produto) {
      append({
        produtoId: produto.id,
        quantidade: 1,
        precoUnitario: produto.preco,
        subtotal: produto.preco,
      });
      calculateTotal();
    }
  };

  const handleQuantidadeChange = (index: number, quantidade: number) => {
    const itens = watch('itens');
    const item = itens[index];
    const novoSubtotal = quantidade * item.precoUnitario;

    setValue(`itens.${index}.quantidade`, quantidade);
    setValue(`itens.${index}.subtotal`, novoSubtotal);

    calculateTotal();
  };

  const filterProdutos = (search: string) => {
    setFilteredProdutos(
      produtos.filter((produto) =>
        produto.nome.toLowerCase().includes(search.toLowerCase())
      )
    );
  };

  const onSubmit = (data: PedidoForm) => {
    console.log('Pedido criado:', data);
    alert('Pedido criado com sucesso!');
  };

  return (
    <div className='p-8 bg-gray-100 min-h-screen'>
      <div className='flex justify-between items-center mb-6'>
        <h2 className='text-3xl font-bold text-purple-700'>Adicionar Pedido</h2>
        <button
          onClick={() => alert('Voltando para a lista de pedidos')}
          className='px-4 py-2 bg-purple-200 text-purple-700 font-semibold rounded-md hover:bg-purple-300 transition'
        >
          Voltar
        </button>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className='bg-white p-6 rounded-lg shadow-md space-y-4'>
        {/* Cliente */}
        <div>
          <label htmlFor='clienteId' className='block text-gray-700 font-medium mb-2'>
            Cliente
          </label>
          <select
            id='clienteId'
            {...register('clienteId', { required: true })}
            className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 text-black'
          >
            <option value=''>Selecione o cliente</option>
            {clientes.map((cliente) => (
              <option key={cliente.id} value={cliente.id}>
                {cliente.nome}
              </option>
            ))}
          </select>
        </div>

        {/* Data e Status */}
        <div className='grid grid-cols-2 gap-4'>
          <div>
            <label htmlFor='data' className='block text-gray-700 font-medium mb-2'>
              Data
            </label>
            <input
              type='date'
              id='data'
              {...register('data', { required: true })}
              className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 text-black'
            />
          </div>
          <div>
            <label htmlFor='status' className='block text-gray-700 font-medium mb-2'>
              Status
            </label>
            <select
              id='status'
              {...register('status', { required: true })}
              className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 text-black'
            >
              <option value='Aguardando'>Aguardando</option>
              <option value='Processando'>Processando</option>
              <option value='Concluído'>Concluído</option>
            </select>
          </div>
        </div>

        {/* Filtro de Produtos */}
        <div>
          <label htmlFor='produtoSearch' className='block text-gray-700 font-medium mb-2'>
            Buscar Produto
          </label>
          <input
            id='produtoSearch'
            type='text'
            placeholder='Digite o nome do produto'
            className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 text-black'
            onChange={(e) => filterProdutos(e.target.value)}
          />
        </div>

        {/* Produtos Disponíveis */}
        <div className='bg-gray-200 p-4 rounded-md shadow'>
          <h3 className='text-lg font-semibold text-gray-800 mb-2'>Produtos Disponíveis</h3>
          <ul className='grid grid-cols-3 gap-4'>
            {filteredProdutos.map((produto) => (
              <li key={produto.id} className='flex justify-between bg-white p-2 rounded shadow'>
                <span className='font-bold text-purple-700'>{produto.nome}</span>
                <span className='text-green-600'>R$ {produto.preco.toFixed(2)}</span>
                <button
                  type='button'
                  onClick={() => handleProdutoChange(produto.id)}
                  className='text-blue-500 hover:underline'
                >
                  Adicionar
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Itens do Pedido */}
        <div>
          <h3 className='text-lg font-medium text-gray-700 mb-2'>Itens do Pedido</h3>
          {fields.map((item, index) => (
            <div key={item.id} className='grid grid-cols-5 gap-4 items-center mb-2'>
              <span className='font-bold text-purple-600'>
                {produtos.find((p) => p.id === item.produtoId)?.nome}
              </span>
              <span>R$ {item.precoUnitario.toFixed(2)}</span>
              <input
                type='number'
                min={1}
                {...register(`itens.${index}.quantidade`, { required: true })}
                className='w-full px-4 py-2 border rounded-md text-black'
                onChange={(e) => handleQuantidadeChange(index, parseInt(e.target.value, 10))}
              />
              <span>R$ {item.subtotal.toFixed(2)}</span>
              <button
                type='button'
                onClick={() => remove(index)}
                className='px-2 py-1 bg-red-600 text-white rounded-md hover:bg-red-700'
              >
                Remover
              </button>
            </div>
          ))}
        </div>

        {/* Total */}
        <div>
          <label className='block text-gray-700 font-medium mb-2'>Total</label>
          <input
            type='number'
            {...register('total')}
            readOnly
            className='w-full px-4 py-2 border rounded-md focus:outline-none bg-gray-100 text-black'
          />
        </div>

        {/* Botão de Submissão */}
        <div className='flex justify-end'>
          <button
            type='submit'
            className='px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition'
          >
            Criar Pedido
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddOrderPage;
