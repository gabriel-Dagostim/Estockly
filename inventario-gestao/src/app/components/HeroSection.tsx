import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="h-screen bg-cover bg-center relative" style={{ backgroundImage: "url('/path/to/image.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
        <h1 className="text-4xl font-extrabold mb-4">Simplifique o Controle do Seu Inventário</h1>
        <p className="text-lg mb-6">Com a Investa, gerenciar produtos, fornecedores e transações nunca foi tão fácil.</p>
        <button className="bg-yellow-500 text-white py-3 px-8 rounded-md text-lg hover:bg-yellow-600">
          Gerencie seu estoque
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
