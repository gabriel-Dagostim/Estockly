import Header from '../app/components/Header';
import HeroSection from '../app/components/HeroSection';
import FeaturesSection from '../app/components/FeaturesSection';
import TestimonialsSection from '../app/components/TestimonialsSection';
import Footer from '../app/components/Footer';

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
        <FeaturesSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
