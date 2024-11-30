// src/app/features/page.tsx
"use client";

import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaCogs, FaChartPie, FaDatabase, FaMobileAlt, FaShieldAlt } from 'react-icons/fa';

const FeaturesPage: React.FC = () => {
  return (
    <div>
      {/* Header */}
      <Header />

      <main className="min-h-screen bg-gray-50 p-6 md:p-10">
        <section className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-purple-700">Funcionalidades</h1>
          <p className="mt-4 text-lg text-gray-600">Descubra como Estockly pode facilitar sua gestão.</p>
        </section>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          <div className="bg-white rounded-3xl shadow-lg p-8 text-center hover:shadow-2xl transition duration-300">
            <FaCogs className="text-4xl text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold text-purple-700">Configurações Avançadas</h3>
            <p className="text-gray-600">Personalize a experiência de acordo com as necessidades do seu negócio.</p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8 text-center hover:shadow-2xl transition duration-300">
            <FaChartPie className="text-4xl text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold text-purple-700">Análise de Dados</h3>
            <p className="text-gray-600">Obtenha insights detalhados para melhorar seu desempenho.</p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8 text-center hover:shadow-2xl transition duration-300">
            <FaDatabase className="text-4xl text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold text-purple-700">Gestão de Estoque</h3>
            <p className="text-gray-600">Gerencie seu inventário de forma prática e eficiente.</p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8 text-center hover:shadow-2xl transition duration-300">
            <FaMobileAlt className="text-4xl text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold text-purple-700">Interface Mobile</h3>
            <p className="text-gray-600">Acesse o sistema de qualquer lugar, com facilidade.</p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8 text-center hover:shadow-2xl transition duration-300">
            <FaShieldAlt className="text-4xl text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold text-purple-700">Segurança</h3>
            <p className="text-gray-600">Seus dados estão protegidos com tecnologias modernas.</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default FeaturesPage;
