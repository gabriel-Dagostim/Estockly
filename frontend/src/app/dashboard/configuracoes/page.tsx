// src/app/dashboard/configuracoes/page.tsx
"use client";

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

interface SettingsForm {
  username: string;
  email: string;
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

const SettingsPage: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, watch } = useForm<SettingsForm>();
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const onSubmit = (data: SettingsForm) => {
    console.log("Dados de configuração:", data);
    // Aqui você pode adicionar a lógica de atualização das configurações
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-bold text-purple-700 mb-6">Configurações do Usuário</h2>
      
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded-lg shadow-md space-y-4">
        
        {/* Nome de Usuário */}
        <div>
          <label htmlFor="username" className="block text-gray-700 font-medium mb-2">Nome de Usuário</label>
          <input
            type="text"
            id="username"
            {...register('username', { required: "O nome de usuário é obrigatório." })}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
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
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
          {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
        </div>

        {/* Senha Atual */}
        <div>
          <label htmlFor="currentPassword" className="block text-gray-700 font-medium mb-2">Senha Atual</label>
          <input
            type={isPasswordVisible ? "text" : "password"}
            id="currentPassword"
            {...register('currentPassword', { required: "A senha atual é obrigatória." })}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="text-sm text-purple-600 hover:underline mt-1"
          >
            {isPasswordVisible ? "Ocultar Senha" : "Mostrar Senha"}
          </button>
          {errors.currentPassword && <span className="text-red-500 text-sm">{errors.currentPassword.message}</span>}
        </div>

        {/* Nova Senha */}
        <div>
          <label htmlFor="newPassword" className="block text-gray-700 font-medium mb-2">Nova Senha</label>
          <input
            type={isPasswordVisible ? "text" : "password"}
            id="newPassword"
            {...register('newPassword', { required: "A nova senha é obrigatória." })}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
          {errors.newPassword && <span className="text-red-500 text-sm">{errors.newPassword.message}</span>}
        </div>

        {/* Confirmar Nova Senha */}
        <div>
          <label htmlFor="confirmPassword" className="block text-gray-700 font-medium mb-2">Confirmar Nova Senha</label>
          <input
            type={isPasswordVisible ? "text" : "password"}
            id="confirmPassword"
            {...register('confirmPassword', {
              required: "A confirmação da nova senha é obrigatória.",
              validate: value => value === watch('newPassword') || "As senhas não coincidem."
            })}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
          {errors.confirmPassword && <span className="text-red-500 text-sm">{errors.confirmPassword.message}</span>}
        </div>

        {/* Botão de Salvar */}
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
