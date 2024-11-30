import React from 'react';

const features = [
  { title: 'Cadastro Fácil', description: 'Cadastre e gerencie produtos em poucos passos.' },
  { title: 'Relatórios Detalhados', description: 'Obtenha insights completos sobre o estoque.' },
  { title: 'Controle de Permissões', description: 'Gerencie permissões de acesso de forma segura.' },
];

const Features: React.FC = () => {
  return (
    <section className='py-12 bg-gray-100 text-gray-800'>
      <div className='max-w-6xl mx-auto px-6 text-center'>
        <h2 className='text-3xl font-bold mb-8'>Vantagens da Investa</h2>
        <div className='flex flex-wrap justify-center gap-6'>
          {features.map((feature, index) => (
            <div key={index} className='w-full md:w-1/3 p-6 bg-white rounded-lg shadow-lg'>
              <h3 className='text-xl font-semibold mb-2'>{feature.title}</h3>
              <p className='text-gray-600'>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
