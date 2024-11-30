// src/app/components/TestimonialsSection.tsx
import Image from 'next/image';

const TestimonialsSection: React.FC = () => {
  return (
    <section className='py-16 bg-gray-50 text-gray-800'>
      <div className='max-w-6xl mx-auto px-6 text-center'>
        <h2 className='text-4xl font-bold mb-12 text-purple-700'>O que nossos clientes dizem</h2>
        <div className='flex flex-wrap justify-center gap-8'>
          
          {/* Testemunho 1 */}
          <div className='w-full md:w-1/3 p-8 bg-white rounded-3xl shadow-lg border border-gray-200 hover:shadow-2xl transition duration-300'>
            <div className='flex flex-col items-center'>
              <Image src='/avatar1.jpg' alt='Maria Santos' width={60} height={60} className='rounded-full mb-4' />
              <p className='text-lg text-gray-700 italic mb-4'>'O Estockly revolucionou o modo como gerimos nosso estoque. É intuitivo e confiável!'</p>
              <p className='mt-2 text-purple-700 font-semibold'>- Maria Santos, Loja XYZ</p>
            </div>
          </div>

          {/* Testemunho 2 */}
          <div className='w-full md:w-1/3 p-8 bg-white rounded-3xl shadow-lg border border-gray-200 hover:shadow-2xl transition duration-300'>
            <div className='flex flex-col items-center'>
              <Image src='/avatar2.jpg' alt='Carlos Pereira' width={60} height={60} className='rounded-full mb-4' />
              <p className='text-lg text-gray-700 italic mb-4'>'Nunca foi tão fácil acompanhar nossas vendas e os relatórios são excelentes!'</p>
              <p className='mt-2 text-purple-700 font-semibold'>- Carlos Pereira, Distribuidora ABC</p>
            </div>
          </div>

          {/* Testemunho 3 */}
          <div className='w-full md:w-1/3 p-8 bg-white rounded-3xl shadow-lg border border-gray-200 hover:shadow-2xl transition duration-300'>
            <div className='flex flex-col items-center'>
              <Image src='/avatar3.jpg' alt='Ana Costa' width={60} height={60} className='rounded-full mb-4' />
              <p className='text-lg text-gray-700 italic mb-4'>'Com o Estockly, tenho total controle sobre os fornecedores e minha equipe de vendas.'</p>
              <p className='mt-2 text-purple-700 font-semibold'>- Ana Costa, Comércio XYZ</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
