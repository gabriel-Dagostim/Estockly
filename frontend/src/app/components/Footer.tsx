import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p>&copy; {new Date().getFullYear()} Investa. Todos os direitos reservados.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="hover:text-yellow-500">Sobre nós</a>
          <a href="#" className="hover:text-yellow-500">Suporte</a>
          <a href="#" className="hover:text-yellow-500">Política de Privacidade</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
