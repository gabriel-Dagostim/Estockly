"use client";

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter, useParams } from "next/navigation";

interface SupplierForm {
  nome: string;
  cnpj: string;
  contato: string;
  endereco: string;
}

const EditSupplierPage: React.FC = () => {
  const { id } = useParams(); // Obter ID da rota
  const router = useRouter();
  const { register, handleSubmit, reset, formState: { errors } } = useForm<SupplierForm>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mock de dados do fornecedor
    const mockSuppliers = [
      {
        id: 1,
        nome: "Fornecedor A",
        cnpj: "12.345.678/0001-90",
        contato: "(11) 1234-5678",
        endereco: "Rua Exemplo, 123 - São Paulo, SP",
      },
      {
        id: 2,
        nome: "Fornecedor B",
        cnpj: "98.765.432/0001-12",
        contato: "(21) 9876-5432",
        endereco: "Avenida Modelo, 456 - Rio de Janeiro, RJ",
      },
    ];

    const supplier = mockSuppliers.find((s) => s.id === Number(id));
    if (supplier) {
      reset(supplier); // Preenche o formulário com os dados mockados
    } else {
      alert("Fornecedor não encontrado.");
      router.push("/dashboard/fornecedores");
    }
    setLoading(false);
  }, [id, reset, router]);

  const onSubmit = (data: SupplierForm) => {
    console.log("Fornecedor atualizado:", { id, ...data });
    alert("Fornecedor atualizado com sucesso!");
    router.push("/dashboard/fornecedores");
  };

  if (loading) return <p>Carregando...</p>;

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      {/* Botão de Voltar */}
      <div className="mb-4">
        <button
          onClick={() => router.push("/dashboard/fornecedores")}
          className="px-4 py-2 bg-purple-200 text-purple-700 font-semibold rounded-md hover:bg-purple-300 transition"
        >
          Voltar
        </button>
      </div>

      <h2 className="text-3xl font-bold text-purple-700 mb-6">Editar Fornecedor</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded-lg shadow-md space-y-4">
        <div>
          <label htmlFor="nome" className="block text-gray-700">Nome</label>
          <input
            id="nome"
            {...register("nome", { required: "O nome é obrigatório." })}
            className="w-full px-4 py-2 border rounded-md text-black focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
          {errors.nome && <span className="text-red-500">{errors.nome.message}</span>}
        </div>
        <div>
          <label htmlFor="cnpj" className="block text-gray-700">CNPJ</label>
          <input
            id="cnpj"
            {...register("cnpj", { required: "O CNPJ é obrigatório." })}
            className="w-full px-4 py-2 border rounded-md text-black focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
          {errors.cnpj && <span className="text-red-500">{errors.cnpj.message}</span>}
        </div>
        <div>
          <label htmlFor="contato" className="block text-gray-700">Contato</label>
          <input
            id="contato"
            {...register("contato", { required: "O contato é obrigatório." })}
            className="w-full px-4 py-2 border rounded-md text-black focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
          {errors.contato && <span className="text-red-500">{errors.contato.message}</span>}
        </div>
        <div>
          <label htmlFor="endereco" className="block text-gray-700">Endereço</label>
          <input
            id="endereco"
            {...register("endereco", { required: "O endereço é obrigatório." })}
            className="w-full px-4 py-2 border rounded-md text-black focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
          {errors.endereco && <span className="text-red-500">{errors.endereco.message}</span>}
        </div>
        <button type="submit" className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700">
          Salvar Alterações
        </button>
      </form>
    </div>
  );
};

export default EditSupplierPage;
