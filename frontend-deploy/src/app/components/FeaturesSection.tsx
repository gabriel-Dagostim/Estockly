// src/app/components/FeaturesSection.tsx
import Image from 'next/image';
import LottieAnimation from '../components/LottieAnimation-server-animate';

const FeaturesSection: React.FC = () => {
  return (
    <section className='py-12 bg-white text-gray-800'>
      <div className='max-w-6xl mx-auto px-6 text-center'>
        <h2 className='text-4xl font-bold mb-8 text-purple-700 uppercase'>Simplifique o Controle do Seu Inventário</h2>
        <p className='mb-12 text-lg text-gray-700'>
          O Estockly oferece uma plataforma completa para gerenciar seu estoque com eficiência, permitindo que você se concentre no crescimento do seu negócio.
        </p>

        {/* Animação Lottie e Botão */}
        <div className='mb-12 flex flex-col items-center justify-center'>
          <LottieAnimation size={350} />
          <button className='mt-8 mb-12 px-8 py-3 bg-yellow-500 text-white text-lg font-semibold rounded-full shadow-md hover:bg-yellow-600 transition duration-300'>
            Seja um Cliente
          </button>
        </div>

        {/* Subtítulo para as Features */}
        <h3 className='text-3xl font-semibold mb-10 text-gray-800'>Principais Funcionalidades</h3>

        {/* Seção de Funcionalidades */}
        <div className='flex flex-wrap justify-center gap-8'>
          {/* Gerenciamento de Estoque */}
          <div className='w-full md:w-1/3 p-8 bg-gray-50 rounded-2xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl'>
            <Image src='/estoque.svg' alt='Gerenciamento de Estoque' width={140} height={140} className='mx-auto mb-6' />
            <h3 className='text-xl font-semibold mb-2 text-purple-700 uppercase'>Gerenciamento de Estoque</h3>
            <p className='text-gray-700'>Controle total sobre seu estoque, com atualização em tempo real e relatórios detalhados.</p>
          </div>

          {/* Controle de Vendas */}
          <div className='w-full md:w-1/3 p-8 bg-gray-50 rounded-2xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl'>
            <Image src='/vendas.svg' alt='Controle de Vendas' width={140} height={140} className='mx-auto mb-6' />
            <h3 className='text-xl font-semibold mb-2 text-purple-700 uppercase'>Controle de Vendas</h3>
            <p className='text-gray-700'>Registre e acompanhe vendas, obtenha insights e impulsione seu negócio.</p>
          </div>

          {/* Gestão de Fornecedores */}
          <div className='w-full md:w-1/3 p-8 bg-gray-50 rounded-2xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl'>
            <Image src='/fornecedores.png' alt='Gestão de Fornecedores' width={140} height={140} className='mx-auto mb-6' />
            <h3 className='text-xl font-semibold mb-2 text-purple-700 uppercase'>Gestão de Fornecedores</h3>
            <p className='text-gray-700'>Gerencie seus fornecedores, organize contatos e crie parcerias estratégicas.</p>
          </div>

          {/* Relatórios e Insights */}
          <div className='w-full md:w-1/3 p-8 bg-gray-50 rounded-2xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl'>
            <Image src='/relatorio.png' alt='Relatórios e Insights' width={140} height={140} className='mx-auto mb-6' />
            <h3 className='text-xl font-semibold mb-2 text-purple-700 uppercase'>Relatórios e Insights</h3>
            <p className='text-gray-700'>Gere relatórios detalhados para tomar decisões mais informadas e eficazes.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
