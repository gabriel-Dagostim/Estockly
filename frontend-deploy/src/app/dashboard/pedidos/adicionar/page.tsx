"use client";

import React, { useEffect, useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { useRouter } from "next/navigation";

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
      data: new Date().toISOString().split("T")[0],
      status: "Aguardando",
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "itens",
  });

  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [filteredProdutos, setFilteredProdutos] = useState<Produto[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [produtosRes, clientesRes] = await Promise.all([
          fetch("http://localhost:3001/api/products"),
          fetch("http://localhost:3001/api/clientes"),
        ]);

        const produtosData = await produtosRes.json();
        setProdutos(produtosData);
        setFilteredProdutos(produtosData);
        setClientes(await clientesRes.json());
      } catch (error) {
        console.error("Erro ao carregar produtos ou clientes:", error);
      }
    };

    fetchData();
  }, []);

  const calculateTotal = () => {
    const itens = watch("itens");
    const total = itens.reduce((acc, item) => acc + item.subtotal, 0);
    setValue("total", total);
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
      setTimeout(() => calculateTotal(), 0); // Garante a atualização imediata do total
    }
  };

  const handleQuantidadeChange = (index: number, quantidade: number) => {
    if (quantidade < 1) {
      quantidade = 1; // Garante que o mínimo seja 1
    }
    const itens = watch('itens');
    const item = itens[index];
    const novoSubtotal = quantidade * item.precoUnitario;
    
    setValue(`itens.${index}.quantidade`, quantidade);
    setValue(`itens.${index}.subtotal`, novoSubtotal);
    
    calculateTotal(); // Atualiza o total ao alterar a quantidade
  };
  

  const filterProdutos = (search: string) => {
    setFilteredProdutos(
      produtos.filter((produto) =>
        produto.nome.toLowerCase().includes(search.toLowerCase())
      )
    );
  };

  const onSubmit = async (data: PedidoForm) => {
    try {
      const response = await fetch("http://localhost:3001/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Erro ao criar pedido");
      }

      alert("Pedido criado com sucesso!");
      router.push("/dashboard/pedidos");
    } catch (error) {
      console.error("Erro ao criar pedido:", error);
      alert("Erro ao criar pedido. Tente novamente.");
    }
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-purple-700">Adicionar Pedido</h2>
        <button
          onClick={() => router.push("/dashboard/pedidos")}
          className="px-4 py-2 bg-purple-200 text-purple-700 font-semibold rounded-md hover:bg-purple-300 transition"
        >
          Voltar
        </button>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded-lg shadow-md space-y-4">
        {/* Cliente */}
        <div>
          <label htmlFor="clienteId" className="block text-gray-700 font-medium mb-2">
            Cliente
          </label>
          <select
            id="clienteId"
            {...register("clienteId", { required: true })}
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

        {/* Data e Status */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="data" className="block text-gray-700 font-medium mb-2">Data</label>
            <input
              type="date"
              id="data"
              {...register("data", { required: true })}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 text-black"
            />
          </div>
          <div>
            <label htmlFor="status" className="block text-gray-700 font-medium mb-2">Status</label>
            <select
              id="status"
              {...register("status", { required: true })}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 text-black"
            >
              <option value="Aguardando">Aguardando</option>
              <option value="Processando">Processando</option>
              <option value="Concluído">Concluído</option>
            </select>
          </div>
        </div>

        {/* Filtro de Produtos */}
        <div>
          <label htmlFor="produtoSearch" className="block text-gray-700 font-medium mb-2">
            Buscar Produto
          </label>
          <input
            id="produtoSearch"
            type="text"
            placeholder="Digite o nome do produto"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 text-black"
            onChange={(e) => filterProdutos(e.target.value)}
          />
        </div>

        {/* Produtos Disponíveis */}
        <div className="bg-gray-200 p-4 rounded-md shadow">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Produtos Disponíveis</h3>
          <ul className="grid grid-cols-3 gap-4">
            {filteredProdutos.map((produto) => (
              <li key={produto.id} className="flex justify-between bg-white p-2 rounded shadow">
                <span className="font-bold text-purple-700">{produto.nome}</span>
                <span className="text-green-600">R$ {produto.preco.toFixed(2)}</span>
                <button
                  type="button"
                  onClick={() => handleProdutoChange(produto.id)}
                  className="text-blue-500 hover:underline"
                >
                  Adicionar
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Itens do Pedido */}
        <div>
          <h3 className="text-lg font-medium text-gray-700 mb-2">Itens do Pedido</h3>
          <div className="grid grid-cols-5 gap-4 font-bold bg-gray-300 p-2 rounded-md text-purple-700">
            <span>Produto</span>
            <span>Preço Unitário</span>
            <span>Quantidade</span>
            <span>Subtotal</span>
            <span>Ações</span>
          </div>
          {fields.map((item, index) => (
            <div key={item.id} className="grid grid-cols-5 gap-4 items-center mb-2">
              <span className="font-bold text-purple-600">{produtos.find((p) => p.id === item.produtoId)?.nome}</span>
              <input
                type="number"
                value={item.precoUnitario}
                readOnly
                className="w-full px-4 py-2 border rounded-md bg-gray-100 text-black"
              />
              <input
                type="number"
                min={1}
                {...register(`itens.${index}.quantidade`, { required: true })}
                className="w-full px-4 py-2 border rounded-md text-black"
                onChange={(e) => handleQuantidadeChange(index, parseInt(e.target.value, 10))}
              />
              <input
                type="number"
                value={item.subtotal.toFixed(2)}
                readOnly
                className="w-full px-4 py-2 border rounded-md bg-gray-100 text-black"
              />
              <button
                type="button"
                onClick={() => {
                  remove(index);
                  calculateTotal();
                }}
                className="px-2 py-1 bg-red-600 text-white rounded-md hover:bg-red-700"
              >
                Remover
              </button>
            </div>
          ))}
        </div>

        {/* Total */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Total</label>
          <input
            type="number"
            {...register("total")}
            readOnly
            className="w-full px-4 py-2 border rounded-md focus:outline-none bg-gray-100 text-black"
          />
        </div>

        {/* Botão de Submissão */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition"
          >
            Criar Pedido
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddOrderPage;
