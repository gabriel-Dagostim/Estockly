// src/app/components/HeroSection.tsx
import CartAnimation from './CartAnimation';

const HeroSection: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between text-center md:text-left bg-purple-700 text-white py-20 px-6 min-h-[80vh]">
      {/* Texto e Botão na Esquerda */}
      <div className="md:w-1/2 mb-8 md:mb-0 flex flex-col justify-center">
        <h1 className="text-5xl font-bold mb-4 uppercase">Bem-vindo ao Estockly</h1>
        <p className="text-lg mb-8 max-w-xl">
          Uma solução completa para o gerenciamento de estoque, vendas e fornecedores, tudo em um único lugar.
        </p>
        <button className="px-8 py-3 bg-yellow-500 text-lg font-semibold rounded-full shadow-md hover:bg-yellow-600 transition duration-300 max-w-xs mx-auto md:mx-0">
          Comece Agora
        </button>
      </div>

      {/* Animação no Lado Direito */}
      <div className="md:w-1/2 flex justify-center items-center">
        <CartAnimation size={500} />
      </div>
    </section>
  );
};

export default HeroSection;
