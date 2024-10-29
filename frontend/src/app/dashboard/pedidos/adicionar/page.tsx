"use client";

import React, { useState } from 'react';
import { useForm, Controller, useFieldArray } from 'react-hook-form';
import { useRouter } from 'next/navigation';

interface OrderForm {
  clienteId: number;
  data: string;
  status: string;
  itens: { produtoId: number; quantidade: number; precoUnitario: number }[];
  total: number;
}

const AddOrderPage: React.FC = () => {
  const { control, handleSubmit, register, watch, setValue } = useForm<OrderForm>({
    defaultValues: {
      itens: [{ produtoId: 0, quantidade: 1, precoUnitario: 0 }]
    }
  });
  const { fields, append, remove } = useFieldArray({ control, name: 'itens' });
  const router = useRouter();

  const onSubmit = (data: OrderForm) => {
    console.log(data);
    router.push('/dashboard/pedidos');
  };

  const calculateTotal = () => {
    const itens = watch('itens');
    const total = itens.reduce((acc, item) => acc + item.quantidade * item.precoUnitario, 0);
    setValue('total', total);
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-purple-700">Adicionar Pedido</h2>
        <button
          onClick={() => router.push('/dashboard/pedidos')}
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
        >
          Voltar
        </button>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded-lg shadow-md space-y-4">
        {/* Cliente */}
        <div>
          <label htmlFor="clienteId" className="block text-gray-700 font-medium mb-2">Cliente</label>
          <select
            id="clienteId"
            {...register('clienteId', { required: true })}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
          >
            <option value="">Selecione o cliente</option>
            <option value="1">Cliente 1</option>
            <option value="2">Cliente 2</option>
          </select>
        </div>

        {/* Data */}
        <div>
          <label htmlFor="data" className="block text-gray-700 font-medium mb-2">Data</label>
          <input
            type="date"
            id="data"
            {...register('data', { required: true })}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
        </div>

        {/* Status */}
        <div>
          <label htmlFor="status" className="block text-gray-700 font-medium mb-2">Status</label>
          <select
            id="status"
            {...register('status', { required: true })}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
          >
            <option value="Pendente">Pendente</option>
            <option value="Concluído">Concluído</option>
          </select>
        </div>

        {/* Itens do Pedido */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-gray-700">Itens do Pedido</h3>
          {fields.map((item, index) => (
            <div key={item.id} className="flex space-x-4">
              <select
                {...register(`itens.${index}.produtoId`, { required: true })}
                className="w-1/3 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
              >
                <option value="">Produto</option>
                <option value="1">Produto 1</option>
                <option value="2">Produto 2</option>
              </select>
              <input
                type="number"
                placeholder="Quantidade"
                {...register(`itens.${index}.quantidade`, { required: true, min: 1 })}
                className="w-1/3 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                onChange={calculateTotal}
              />
              <input
                type="number"
                placeholder="Preço Unitário"
                {...register(`itens.${index}.precoUnitario`, { required: true, min: 0 })}
                className="w-1/3 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                onChange={calculateTotal}
              />
              <button type="button" onClick={() => remove(index)} className="px-2 py-1 bg-red-600 text-white rounded-md hover:bg-red-700">
                Remover
              </button>
            </div>
          ))}
          <button type="button" onClick={() => append({ produtoId: 0, quantidade: 1, precoUnitario: 0 })} className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
            Adicionar Produto
          </button>
        </div>

        {/* Total */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Total</label>
          <input
            type="number"
            {...register('total')}
            readOnly
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
        </div>

        {/* Botão de Submissão */}
        <div className="flex justify-end">
          <button type="submit" className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700">
            Adicionar Pedido
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddOrderPage;
