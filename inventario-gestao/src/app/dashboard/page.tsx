"use client";

import Navbar from '../../app/components/Navbar';
import DashboardHeader from '../../app/components/DashboardHeader';

const Dashboard: React.FC = () => {
  return (
    <div className="flex">
      {/* Navbar Lateral */}
      <Navbar />

      {/* Conteúdo Principal com Header */}
      <div className="flex-1 ml-64">
        <DashboardHeader /> {/* Header com o nome do usuário e botão de logout */}
        
        <main className="p-8 bg-gray-50 min-h-screen mt-16">
          <h1 className="text-4xl font-bold text-purple-700">Bem-vindo ao Painel de Controle</h1>
          <p className="mt-4 text-gray-600">Aqui você pode gerenciar seu estoque, vendas e fornecedores.</p>
          {/* Outros componentes e widgets do painel serão adicionados aqui */}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
