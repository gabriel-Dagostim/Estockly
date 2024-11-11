// src/app/contact/page.tsx
"use client";

import Header from '../components/Header';
import Footer from '../components/Footer';

const ContactPage: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="min-h-screen bg-gray-50 p-6 md:p-10">
        <section className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-purple-700">Contato</h1>
          <p className="mt-4 text-lg text-gray-600">
            Fale conosco! Estamos aqui para ajudar.
          </p>
        </section>

        {/* Informações de Contato */}
        <section className="max-w-4xl mx-auto mt-10 text-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transition duration-300">
              <h3 className="text-xl font-semibold text-purple-700">Email de Suporte</h3>
              <p className="text-gray-600 mt-2">Envie suas dúvidas ou problemas diretamente para nossa equipe.</p>
              <p className="text-purple-700 font-bold mt-4">suporte@estockly.com</p>
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transition duration-300">
              <h3 className="text-xl font-semibold text-purple-700">Contato Geral</h3>
              <p className="text-gray-600 mt-2">Nosso atendimento está disponível 24/7 para todas as regiões.</p>
              <p className="text-purple-700 font-bold mt-4">0800 123 4567</p>
            </div>
          </div>
        </section>

        {/* Formulário de Contato */}
        <section className="max-w-4xl mx-auto mt-16 bg-white rounded-3xl shadow-lg p-8 md:p-12">
          <h2 className="text-2xl font-bold text-purple-700 mb-6">Envie-nos uma mensagem</h2>
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Nome</label>
                <input
                  type="text"
                  id="name"
                  className="w-full border-gray-300 rounded-md shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-300"
                  placeholder="Seu nome"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full border-gray-300 rounded-md shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-300"
                  placeholder="Seu email"
                  required
                />
              </div>
            </div>

            <div className="mt-6">
              <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Mensagem</label>
              <textarea
                id="message"
                rows={4}
                className="w-full border-gray-300 rounded-md shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-300"
                placeholder="Sua mensagem"
                required
              ></textarea>
            </div>

            <div className="mt-6">
              <button
                type="submit"
                className="bg-purple-700 text-white py-3 px-6 rounded-md hover:bg-purple-800 transition duration-300 w-full md:w-auto"
              >
                Enviar
              </button>
            </div>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
