"use client";

import React from "react";
import { useForm, Controller } from "react-hook-form";
import { useRouter } from "next/navigation";
import MaskedInput from "react-text-mask";

interface ClientForm {
  nome: string;
  cpf_cnpj: string;
  contato: string;
  endereco: string;
}

const AddClientPage: React.FC = () => {
  const { control, handleSubmit, register, formState: { errors } } = useForm<ClientForm>();
  const router = useRouter();

  const onSubmit = (data: ClientForm) => {
    alert("Cliente adicionado com sucesso!");
    console.log("Dados do cliente:", data);
    router.push("/dashboard/clientes");
  };

  const handleBack = () => {
    router.push("/dashboard/clientes");
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-purple-700">Adicionar Cliente</h2>
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
            {...register("nome", { required: "O nome é obrigatório." })}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
          {errors.nome && <span className="text-red-500 text-sm">{errors.nome.message}</span>}
        </div>

        {/* Campo CPF/CNPJ */}
        <div>
          <label htmlFor="cpf_cnpj" className="block text-gray-700 font-medium mb-2">CPF/CNPJ</label>
          <Controller
            name="cpf_cnpj"
            control={control}
            rules={{ required: "O CPF ou CNPJ é obrigatório." }}
            render={({ field }) => (
              <MaskedInput
                {...field}
                mask={(value: string) =>
                  value.replace(/\D/g, "").length > 11
                    ? [/\d/, /\d/, ".", /\d/, /\d/, /\d/, ".", /\d/, /\d/, /\d/, "/", /\d/, /\d/, /\d/, /\d/, "-", /\d/, /\d/]
                    : [/\d/, /\d/, /\d/, ".", /\d/, /\d/, /\d/, ".", /\d/, /\d/, /\d/, "-", /\d/, /\d/]
                }
                placeholder="000.000.000-00 ou 00.000.000/0000-00"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            )}
          />
          {errors.cpf_cnpj && <span className="text-red-500 text-sm">{errors.cpf_cnpj.message}</span>}
        </div>

        {/* Campo Contato */}
        <div>
          <label htmlFor="contato" className="block text-gray-700 font-medium mb-2">Contato</label>
          <Controller
            name="contato"
            control={control}
            rules={{ required: "O contato é obrigatório." }}
            render={({ field }) => (
              <MaskedInput
                {...field}
                mask={["+", /\d/, /\d/, " ", "(", /\d/, /\d/, ")", " ", /\d/, /\d/, /\d/, /\d/, /\d/, "-", /\d/, /\d/, /\d/, /\d/]}
                placeholder="+55 (99) 99999-9999"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            )}
          />
          {errors.contato && <span className="text-red-500 text-sm">{errors.contato.message}</span>}
        </div>

        {/* Campo Endereço */}
        <div>
          <label htmlFor="endereco" className="block text-gray-700 font-medium mb-2">Endereço</label>
          <input
            type="text"
            id="endereco"
            {...register("endereco", { required: "O endereço é obrigatório." })}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
          {errors.endereco && <span className="text-red-500 text-sm">{errors.endereco.message}</span>}
        </div>

        {/* Botão de Submissão */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-6 py-2 bg-purple-600 text-white rounded-md font-semibold hover:bg-purple-700 transition"
          >
            Adicionar Cliente
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddClientPage;
