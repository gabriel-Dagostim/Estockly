"use client";

import React, { useEffect, useState } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { useRouter, useSearchParams } from 'next/navigation'; // useSearchParams para resolver params

interface Produto {
  id: number;
  nome: string;
  preco: number;
}

interface ItemPedido {
  produtoId: number;
  quantidade: number;
  precoUnitario: number;
  subtotal: number;
}

interface PedidoForm {
  clienteId: number;
  data: string;
  status: string;
  itens: ItemPedido[];
  total: number;
}

interface Cliente {
  id: number;
  nome: string;
}

const EditOrderPage: React.FC = () => {
  const { control, handleSubmit, register, setValue, watch, reset } = useForm<PedidoForm>({
    defaultValues: {
      clienteId: 0,
      data: '',
      status: '',
      itens: [],
      total: 0,
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'itens',
  });

  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [filteredProdutos, setFilteredProdutos] = useState<Produto[]>([]);
  const [searchValue, setSearchValue] = useState('');
  const router = useRouter();
  const searchParams = useSearchParams();
  const orderId = searchParams.get('id'); // Obter o ID da rota

  useEffect(() => {
    if (!orderId) return; // Aguarda o orderId ser resolvido.

    interface PedidoItem {
      produtoId: number;
      quantidade: number;
      precoUnitario: number;
    }
    
    const fetchData = async () => {
      try {
        const [produtosRes, clientesRes, pedidoRes] = await Promise.all([
          fetch('http://localhost:3001/api/products').then((res) => res.json()),
          fetch('http://localhost:3001/api/customers').then((res) => res.json()),
          fetch(`http://localhost:3001/api/orders/${orderId}`).then((res) => res.json()),
        ]);
    
        setProdutos(produtosRes);
        setFilteredProdutos(produtosRes);
        setClientes(clientesRes);
    
        reset({
          clienteId: pedidoRes.clienteId,
          data: pedidoRes.data,
          status: pedidoRes.status,
          total: pedidoRes.total,
          itens: pedidoRes.itens.map((item: PedidoItem) => ({
            produtoId: item.produtoId,
            quantidade: item.quantidade,
            precoUnitario: item.precoUnitario,
            subtotal: item.quantidade * item.precoUnitario,
          })),
        });
      } catch (error) {
        console.error('Erro ao carregar dados:', error);
      }
    };

    fetchData();
  }, [orderId, reset]);

  const calculateTotal = () => {
    const itens = watch('itens');
    const total = itens.reduce((acc, item) => acc + item.subtotal, 0);
    setValue('total', total);
  };

  const handleSearch = (query: string) => {
    setSearchValue(query);
    setFilteredProdutos(
      produtos.filter((produto) =>
        produto.nome.toLowerCase().includes(query.toLowerCase())
      )
    );
  };

  const onSubmit = async (data: PedidoForm) => {
    try {
      const response = await fetch(`http://localhost:3001/api/orders/${orderId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Erro ao atualizar pedido.');
      }

      alert('Pedido atualizado com sucesso!');
      router.push('/dashboard/pedidos');
    } catch (error) {
      console.error('Erro ao atualizar pedido:', error);
      alert('Erro ao atualizar pedido. Tente novamente.');
    }
  };

  const handleBack = () => {
    router.push('/dashboard/pedidos');
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-purple-700">Editar Pedido</h2>
        <button
          onClick={handleBack}
          className="px-4 py-2 bg-purple-200 text-purple-700 font-semibold rounded-md hover:bg-purple-300 transition"
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
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 text-black"
          >
            <option value="">Selecione o cliente</option>
            {clientes.map((cliente) => (
              <option key={cliente.id} value={cliente.id}>
                {cliente.nome}
              </option>
            ))}
          </select>
        </div>

        {/* Data */}
        <div>
          <label htmlFor="data" className="block text-gray-700 font-medium mb-2">Data</label>
          <input
            type="date"
            id="data"
            {...register('data', { required: true })}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 text-black"
          />
        </div>

        {/* Status */}
        <div>
          <label htmlFor="status" className="block text-gray-700 font-medium mb-2">Status</label>
          <select
            id="status"
            {...register('status', { required: true })}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 text-black"
          >
            <option value="Pendente">Pendente</option>
            <option value="Concluído">Concluído</option>
          </select>
        </div>

        {/* Itens do Pedido */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-purple-700">Itens do Pedido</h3>
          <div>
            <input
              type="text"
              placeholder="Buscar produtos..."
              value={searchValue}
              onChange={(e) => handleSearch(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 text-black"
            />
            <ul className="mt-2 max-h-40 overflow-y-auto bg-white shadow-md rounded-md">
              {filteredProdutos.map((produto) => (
                <li
                  key={produto.id}
                  onClick={() =>
                    append({
                      produtoId: produto.id,
                      quantidade: 1,
                      precoUnitario: produto.preco,
                      subtotal: produto.preco,
                    })
                  }
                  className="px-4 py-2 cursor-pointer hover:bg-purple-100 transition"
                >
                  {produto.nome} - <span className="text-green-600 font-bold">R$ {produto.preco.toFixed(2)}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gray-100 shadow rounded-md">
            <table className="min-w-full text-left text-gray-700">
              <thead className="bg-purple-100">
                <tr>
                  <th className="px-6 py-3 text-purple-700">Produto</th>
                  <th className="px-6 py-3 text-purple-700">Valor Unitário</th>
                  <th className="px-6 py-3 text-purple-700">Quantidade</th>
                  <th className="px-6 py-3 text-purple-700">Subtotal</th>
                  <th className="px-6 py-3"></th>
                </tr>
              </thead>
              <tbody>
                {fields.map((item, index) => (
                  <tr key={item.id} className="border-b">
                    <td className="px-6 py-4">{produtos.find((p) => p.id === item.produtoId)?.nome}</td>
                    <td className="px-6 py-4">R$ {item.precoUnitario.toFixed(2)}</td>
                    <td className="px-6 py-4">
                      <input
                        type="number"
                        {...register(`itens.${index}.quantidade`, { min: 1 })}
                        className="w-16 px-2 py-1 border rounded-md text-black"
                        onChange={() => {
                          const quantidade = watch(`itens.${index}.quantidade`);
                          setValue(`itens.${index}.subtotal`, quantidade * item.precoUnitario);
                          calculateTotal();
                        }}
                      />
                    </td>
                    <td className="px-6 py-4">R$ {watch(`itens.${index}.subtotal`)?.toFixed(2)}</td>
                    <td className="px-6 py-4">
                      <button
                        type="button"
                        onClick={() => remove(index)}
                        className="px-2 py-1 bg-red-600 text-white rounded-md hover:bg-red-700"
                      >
                        Remover
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Total */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Total</label>
          <input
            type="number"
            {...register('total')}
            readOnly
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 bg-gray-100 text-black"
          />
        </div>

        {/* Botão de Submissão */}
        <div className="flex justify-end">
          <button type="submit" className="px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition">
            Atualizar Pedido
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditOrderPage;
