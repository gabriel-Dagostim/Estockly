"use client";

import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';

interface SettingsForm {
  username: string;
  email: string;
  currentPassword?: string;
  newPassword?: string;
  confirmPassword?: string;
}

const SettingsPage: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, setValue, watch } = useForm<SettingsForm>();
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/users', {
          method: 'GET',
          credentials: 'include',
        });

        if (!response.ok) {
          throw new Error('Erro ao buscar informações do usuário');
        }

        const user = await response.json();
        setValue('username', user.name);
        setValue('email', user.email);
      } catch (error) {
        console.error('Erro ao carregar informações do usuário:', error);
      }
    };

    fetchUserData();
  }, [setValue]);

  const onSubmit = async (data: SettingsForm) => {
    try {
      const updateData: any = {
        name: data.username,
        email: data.email,
      };

      // Adiciona a senha ao `updateData` apenas se o campo de nova senha estiver preenchido
      if (data.currentPassword && data.newPassword) {
        updateData.currentPassword = data.currentPassword;
        updateData.newPassword = data.newPassword;
      }

      const response = await fetch('http://localhost:3001/api/updateUser', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(updateData),
      });

      if (!response.ok) {
        throw new Error('Erro ao atualizar informações do usuário');
      }

      alert('Informações atualizadas com sucesso!');
      router.push('/dashboard'); // Redireciona para a tela da dashboard
    } catch (error) {
      console.error('Erro ao atualizar informações do usuário:', error);
      alert('Erro ao atualizar informações. Tente novamente.');
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-purple-700">Configurações do Usuário</h2>
        <button
          onClick={() => router.push('/dashboard')}
          className="px-4 py-2 bg-purple-200 text-purple-700 font-semibold rounded-md hover:bg-purple-300 transition"
        >
          Voltar
        </button>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded-lg shadow-md space-y-4">
        {/* Nome de Usuário */}
        <div>
          <label htmlFor="username" className="block text-gray-700 font-medium mb-2">Nome de Usuário</label>
          <input
            type="text"
            id="username"
            {...register('username', { required: "O nome de usuário é obrigatório." })}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 text-black"
          />
          {errors.username && <span className="text-red-500 text-sm">{errors.username.message}</span>}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
          <input
            type="email"
            id="email"
            {...register('email', { required: "O email é obrigatório." })}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 text-black"
          />
          {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
        </div>

        {/* Senha Atual */}
        <div>
          <label htmlFor="currentPassword" className="block text-gray-700 font-medium mb-2">Senha Atual (necessária apenas para alterar a senha)</label>
          <input
            type={isPasswordVisible ? "text" : "password"}
            id="currentPassword"
            {...register('currentPassword')}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 text-black"
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="text-sm text-purple-600 hover:underline mt-1"
          >
            {isPasswordVisible ? "Ocultar Senha" : "Mostrar Senha"}
          </button>
        </div>

        {/* Nova Senha */}
        <div>
          <label htmlFor="newPassword" className="block text-gray-700 font-medium mb-2">Nova Senha</label>
          <input
            type={isPasswordVisible ? "text" : "password"}
            id="newPassword"
            {...register('newPassword')}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 text-black"
          />
        </div>

        {/* Confirmar Nova Senha */}
        <div>
          <label htmlFor="confirmPassword" className="block text-gray-700 font-medium mb-2">Confirmar Nova Senha</label>
          <input
            type={isPasswordVisible ? "text" : "password"}
            id="confirmPassword"
            {...register('confirmPassword', {
              validate: value => !watch('newPassword') || value === watch('newPassword') || "As senhas não coincidem.",
            })}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 text-black"
          />
          {errors.confirmPassword && <span className="text-red-500 text-sm">{errors.confirmPassword.message}</span>}
        </div>

        <div className="flex justify-end mt-4">
          <button
            type="submit"
            className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
          >
            Salvar Alterações
          </button>
        </div>
      </form>
    </div>
  );
};

export default SettingsPage;
