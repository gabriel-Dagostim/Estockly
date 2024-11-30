// src/app/about/page.tsx
'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaHistory, FaServer, FaUsers, FaHandshake, FaChartBar } from 'react-icons/fa';

const AboutPage: React.FC = () => {
  return (
    <div>
      <Header />
      <main className='min-h-screen bg-gray-50 p-6 md:p-10'>
        {/* Introdução */}
        <section className='max-w-6xl mx-auto text-center'>
          <h1 className='text-5xl font-extrabold text-purple-700 mb-4'>Sobre Nós</h1>
          <p className='text-lg text-gray-600'>
            Nossa jornada, valores e o que nos faz ser uma das principais plataformas de gestão de estoques.
          </p>
        </section>

        {/* Nossa História */}
        <section className='max-w-5xl mx-auto mt-16 bg-white rounded-3xl shadow-lg p-8 md:p-12'>
          <div className='flex flex-col md:flex-row items-center gap-8'>
            <FaHistory className='text-6xl text-purple-700' />
            <div>
              <h2 className='text-3xl font-bold text-purple-700'>Nossa História</h2>
              <p className='text-gray-600 leading-relaxed mt-4'>
                Fundada em 2021, a <span className='text-purple-700 font-semibold'>Estockly</span> nasceu para transformar a maneira como empresas 
                gerenciam seus estoques. Começamos como uma pequena startup e rapidamente nos tornamos uma referência global.
              </p>
              <p className='text-gray-600 leading-relaxed mt-2'>
                Nosso foco sempre foi claro: oferecer ferramentas inovadoras, acessíveis e intuitivas para ajudar negócios a prosperar.
              </p>
            </div>
          </div>
        </section>

        {/* O Que Oferecemos */}
        <section className='max-w-5xl mx-auto mt-16 bg-gradient-to-r from-purple-700 to-purple-800 text-white rounded-3xl shadow-lg p-8 md:p-12'>
          <div className='flex flex-col md:flex-row items-center gap-8'>
            <FaChartBar className='text-6xl text-gold' />
            <div>
              <h2 className='text-3xl font-bold text-gold'>O Que Oferecemos</h2>
              <ul className='list-disc list-inside mt-4 space-y-3'>
                <li>Gestão de Estoques em tempo real.</li>
                <li>Relatórios detalhados para tomadas de decisão.</li>
                <li>Integração com sistemas ERP.</li>
                <li>Segurança de dados com criptografia de ponta.</li>
                <li>Suporte técnico 24/7.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Nossa Infraestrutura */}
        <section className='max-w-5xl mx-auto mt-16 bg-white rounded-3xl shadow-lg p-8 md:p-12'>
          <div className='flex flex-col md:flex-row items-center gap-8'>
            <FaServer className='text-6xl text-purple-700' />
            <div>
              <h2 className='text-3xl font-bold text-purple-700'>Nossa Infraestrutura</h2>
              <p className='text-gray-600 leading-relaxed mt-4'>
                Contamos com servidores de alta performance hospedados em plataformas líderes como AWS e Google Cloud. Isso garante 
                alta disponibilidade, segurança e velocidade para todos os nossos clientes.
              </p>
              <p className='text-gray-600 leading-relaxed mt-2'>
                Nossa equipe de DevOps monitora constantemente a infraestrutura, garantindo uma experiência sem interrupções.
              </p>
            </div>
          </div>
        </section>

        {/* Nossos Valores */}
        <section className='max-w-5xl mx-auto mt-16 bg-gradient-to-r from-purple-700 to-purple-800 text-white rounded-3xl shadow-lg p-8 md:p-12'>
          <div className='flex flex-col md:flex-row items-center gap-8'>
            <FaHandshake className='text-6xl text-gold' />
            <div>
              <h2 className='text-3xl font-bold text-gold'>Nossos Valores</h2>
              <ul className='list-disc list-inside mt-4 space-y-3'>
                <li><strong>Inovação:</strong> Sempre em busca de soluções modernas.</li>
                <li><strong>Transparência:</strong> Comunicação aberta com nossos clientes.</li>
                <li><strong>Excelência:</strong> Padrão de qualidade em tudo o que fazemos.</li>
                <li><strong>Colaboração:</strong> Trabalho em equipe dentro e fora da empresa.</li>
                <li><strong>Sustentabilidade:</strong> Compromisso com práticas ambientalmente responsáveis.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Nossa Equipe */}
        <section className='max-w-5xl mx-auto mt-16 bg-white rounded-3xl shadow-lg p-8 md:p-12'>
          <div className='flex flex-col md:flex-row items-center gap-8'>
            <FaUsers className='text-6xl text-purple-700' />
            <div>
              <h2 className='text-3xl font-bold text-purple-700'>Nossa Equipe</h2>
              <p className='text-gray-600 leading-relaxed mt-4'>
                A <span className='text-purple-700 font-semibold'>Estockly</span> é formada por um time de profissionais apaixonados por tecnologia 
                e inovação. Trabalhamos juntos para entregar soluções que superem as expectativas dos nossos clientes.
              </p>
              <p className='text-gray-600 leading-relaxed mt-2'>
                Desde engenheiros de software até especialistas em suporte ao cliente, cada membro da nossa equipe desempenha um papel vital no nosso sucesso.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
