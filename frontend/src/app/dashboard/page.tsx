"use client";

import Navbar from '../../app/components/Navbar';
import DashboardHeader from '../../app/components/DashboardHeader';
import DashAnimation from '../../app/components/DashAnimation';
import { FaBox, FaUsers, FaTruck, FaClipboardList, FaChartLine } from 'react-icons/fa';

const Dashboard: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row">
      {/* Navbar Lateral */}
      <Navbar />

      {/* Conteúdo Principal com Header */}
      <div className="flex-1 bg-gray-50 min-h-screen">
        <DashboardHeader /> {/* Header com o nome do usuário e botão de logout */}

        <main className="p-6 md:p-10 mt-20">
          <h1 className="text-3xl md:text-4xl font-bold text-purple-700">Bem-vindo ao Painel de Controle</h1>
          <p className="mt-2 text-base md:text-lg text-gray-600">Gerencie seu estoque, vendas, clientes e fornecedores com facilidade.</p>

          {/* Widgets do Painel */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mt-6 md:mt-10">
            {/* Widget Produtos */}
            <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 flex items-center space-x-4">
              <FaBox className="text-3xl md:text-4xl text-purple-600" />
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-purple-700">Produtos</h3>
                <p className="text-sm md:text-base text-gray-600">Gerencie e acompanhe seu inventário.</p>
              </div>
            </div>

            {/* Widget Clientes */}
            <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 flex items-center space-x-4">
              <FaUsers className="text-3xl md:text-4xl text-purple-600" />
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-purple-700">Clientes</h3>
                <p className="text-sm md:text-base text-gray-600">Acompanhe informações e histórico dos clientes.</p>
              </div>
            </div>

            {/* Widget Fornecedores */}
            <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 flex items-center space-x-4">
              <FaTruck className="text-3xl md:text-4xl text-purple-600" />
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-purple-700">Fornecedores</h3>
                <p className="text-sm md:text-base text-gray-600">Gerencie parcerias com fornecedores.</p>
              </div>
            </div>

            {/* Widget Pedidos */}
            <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 flex items-center space-x-4">
              <FaClipboardList className="text-3xl md:text-4xl text-purple-600" />
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-purple-700">Pedidos</h3>
                <p className="text-sm md:text-base text-gray-600">Acompanhe os pedidos e seu status.</p>
              </div>
            </div>

            {/* Widget Relatórios */}
            <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 flex items-center space-x-4">
              <FaChartLine className="text-3xl md:text-4xl text-purple-600" />
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-purple-700">Relatórios</h3>
                <p className="text-sm md:text-base text-gray-600">Visualize relatórios e insights.</p>
              </div>
            </div>
          </div>
        </main>

        {/* Animação no canto inferior direito */}
        <DashAnimation />
      </div>
    </div>
  );
};

export default Dashboard;
