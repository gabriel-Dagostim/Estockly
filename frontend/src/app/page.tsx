import Header from '../app/components/Header';
import HeroSection from '../app/components/HeroSection';
import Features from '../app/components/Features';
import Footer from '../app/components/Footer';
import Image from 'next/image';

export const metadata = {
  title: 'Estockly - Sistema de Gestão de Estoque e Vendas',
  description: 'Gerencie seu estoque, itens, fornecedores e vendas com facilidade usando o Estockly.',
};

const Home = () => {
  return (
    <div>
      <Header />
      <main>
        <HeroSection />

        {/* Seção de Funcionalidades Principais */}
        <section className="py-12 bg-gray-100 text-gray-800">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-8 text-purple-700">Por que escolher o Estockly?</h2>
            <p className="mb-12 text-lg text-gray-600">
              Nosso sistema oferece um conjunto completo de ferramentas para gerenciar seu estoque, vendas e fornecedores de maneira eficiente e prática.
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              <div className="w-full md:w-1/4 p-6 bg-white rounded-lg shadow-lg">
                <Image src="/inventory.png" alt="Gerenciamento de Estoque" width={80} height={80} className="mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-purple-700">Gerenciamento de Estoque</h3>
                <p className="text-gray-600">Controle total sobre seu estoque, com atualização em tempo real e relatórios detalhados.</p>
              </div>
              <div className="w-full md:w-1/4 p-6 bg-white rounded-lg shadow-lg">
                <Image src="/sales.png" alt="Controle de Vendas" width={80} height={80} className="mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-purple-700">Controle de Vendas</h3>
                <p className="text-gray-600">Registre e acompanhe vendas, obtenha insights e impulsione seu negócio.</p>
              </div>
              <div className="w-full md:w-1/4 p-6 bg-white rounded-lg shadow-lg">
                <Image src="/suppliers.png" alt="Gestão de Fornecedores" width={80} height={80} className="mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-purple-700">Gestão de Fornecedores</h3>
                <p className="text-gray-600">Gerencie seus fornecedores, organize contatos e crie parcerias estratégicas.</p>
              </div>
              <div className="w-full md:w-1/4 p-6 bg-white rounded-lg shadow-lg">
                <Image src="/reports.png" alt="Relatórios e Insights" width={80} height={80} className="mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-purple-700">Relatórios e Insights</h3>
                <p className="text-gray-600">Gere relatórios detalhados para tomar decisões mais informadas e eficazes.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Seção de Benefícios */}
        <Features />

        {/* Seção de Testemunhos (Opcional) */}
        <section className="py-12 bg-white text-gray-800">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-8 text-purple-700">O que nossos clientes dizem</h2>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="w-full md:w-1/3 p-6 bg-gray-100 rounded-lg shadow-lg">
                <p className="text-gray-600">"O Estockly revolucionou o modo como gerimos nosso estoque. É intuitivo e confiável!"</p>
                <p className="mt-4 text-gray-800 font-semibold">- Maria Santos, Loja XYZ</p>
              </div>
              <div className="w-full md:w-1/3 p-6 bg-gray-100 rounded-lg shadow-lg">
                <p className="text-gray-600">"Nunca foi tão fácil acompanhar nossas vendas e os relatórios são excelentes!"</p>
                <p className="mt-4 text-gray-800 font-semibold">- Carlos Pereira, Distribuidora ABC</p>
              </div>
              <div className="w-full md:w-1/3 p-6 bg-gray-100 rounded-lg shadow-lg">
                <p className="text-gray-600">"Com o Estockly, tenho total controle sobre os fornecedores e minha equipe de vendas."</p>
                <p className="mt-4 text-gray-800 font-semibold">- Ana Costa, Comércio XYZ</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
