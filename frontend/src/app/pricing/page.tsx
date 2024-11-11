// src/app/pricing/page.tsx
"use client";

import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaCheckCircle, FaCogs, FaChartBar, FaShieldAlt, FaUsers } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const PricingPage: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(6200); // Timer inicial (24 horas em segundos)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (time: number) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div>
      <Header />
      <main className="min-h-screen bg-gray-50 p-6 md:p-10">
        <section className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-extrabold text-purple-700 mb-4">Nossos Planos</h1>
          <p className="text-lg text-gray-600">
            Escolha o plano ideal para o seu negócio e aproveite nossas ofertas de fim de ano.
          </p>
        </section>

        {/* Timer de Oferta */}
        <section className="mt-8 text-center">
          <p className="text-xl text-red-700 font-semibold">
            Oferta termina em: <span className="font-bold text-2xl bg-yellow-300 px-2 py-1 rounded">{formatTime(timeLeft)}</span>
          </p>
        </section>

        {/* Planos */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-10">
          {/* Plano Básico */}
          <div className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transition duration-300 border border-yellow-500 flex flex-col items-center max-w-sm mx-auto h-[430px]">
            <h3 className="text-2xl font-bold text-yellow-600">Plano Básico</h3>
            <p className="text-black mt-2">Recomendado para pequenos negócios.</p>
            <ul className="mt-4 space-y-3 text-black">
              <li className="flex items-center">
                <FaCheckCircle className="text-yellow-600 mr-2" />
                Gestão de estoque básica
              </li>
              <li className="flex items-center">
                <FaCogs className="text-yellow-600 mr-2" />
                Relatórios simples
              </li>
              <li className="flex items-center">
                <FaShieldAlt className="text-yellow-600 mr-2" />
                Suporte padrão
              </li>
            </ul>
            <p className="text-lg mt-6 line-through text-gray-400">$15/mês</p>
            <p className="text-3xl font-bold text-yellow-600">$10/mês</p>
            <button className="mt-6 bg-yellow-500 text-white py-3 px-8 rounded-md hover:bg-yellow-600 transition duration-300 text-lg">
              Assinar Agora
            </button>
          </div>

          {/* Plano Profissional */}
          <div className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transition duration-300 border border-purple-700 flex flex-col items-center max-w-sm mx-auto h-[480px]">
            <h3 className="text-2xl font-bold text-purple-700">Plano Profissional</h3>
            <p className="text-black mt-2">Ideal para empresas em crescimento.</p>
            <ul className="mt-4 space-y-3 text-black">
              <li className="flex items-center">
                <FaCheckCircle className="text-purple-700 mr-2" />
                Tudo no Plano Básico
              </li>
              <li className="flex items-center">
                <FaChartBar className="text-purple-700 mr-2" />
                Relatórios avançados
              </li>
              <li className="flex items-center">
                <FaUsers className="text-purple-700 mr-2" />
                Multiusuário
              </li>
              <li className="flex items-center">
                <FaShieldAlt className="text-purple-700 mr-2" />
                Suporte prioritário
              </li>
            </ul>
            <p className="text-lg mt-6 line-through text-gray-400">$40/mês</p>
            <p className="text-3xl font-bold text-purple-700">$30/mês</p>
            <button className="mt-6 bg-purple-700 text-white py-3 px-8 rounded-md hover:bg-purple-800 transition duration-300 text-lg">
              Assinar Agora
            </button>
          </div>

          {/* Plano Empresarial */}
          <div className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transition duration-300 border border-red-600 flex flex-col items-center max-w-sm mx-auto h-[450px]">
            <h3 className="text-2xl font-bold text-red-600">Plano Empresarial</h3>
            <p className="text-black mt-2">Para grandes empresas e corporações.</p>
            <ul className="mt-4 space-y-3 text-black">
              <li className="flex items-center">
                <FaCheckCircle className="text-red-600 mr-2" />
                Tudo no Plano Profissional
              </li>
              <li className="flex items-center">
                <FaChartBar className="text-red-600 mr-2" />
                Integração com ERP
              </li>
              <li className="flex items-center">
                <FaShieldAlt className="text-red-600 mr-2" />
                Segurança avançada
              </li>
              <li className="flex items-center">
                <FaUsers className="text-red-600 mr-2" />
                Consultoria dedicada
              </li>
            </ul>
            <p className="text-lg mt-6 line-through text-gray-400">$70/mês</p>
            <p className="text-3xl font-bold text-red-600">$50/mês</p>
            <button className="mt-6 bg-red-600 text-white py-3 px-8 rounded-md hover:bg-red-700 transition duration-300 text-lg">
              Assinar Agora
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PricingPage;