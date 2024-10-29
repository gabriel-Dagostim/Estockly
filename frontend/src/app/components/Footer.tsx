import React from 'react';
import { FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        {/* Mensagem de direitos autorais */}
        <p className="text-lg">&copy; {new Date().getFullYear()} Investa. Todos os direitos reservados.</p>

        {/* Links de navegação */}
        <div className="flex justify-center space-x-6 mt-4">
          <a href="#" className="hover:text-yellow-500">Sobre nós</a>
          <a href="#" className="hover:text-yellow-500">Suporte</a>
          <a href="#" className="hover:text-yellow-500">Política de Privacidade</a>
          <a href="#" className="hover:text-yellow-500">Termos de Serviço</a>
        </div>

        {/* Contato e informações adicionais */}
        <div className="mt-8 space-y-4">
          <p className="text-sm text-gray-400">Precisa de ajuda? Entre em contato conosco:</p>
          <div className="flex justify-center items-center space-x-4">
            <a href="mailto:support@investa.com" className="flex items-center space-x-2 hover:text-yellow-500">
              <FaEnvelope />
              <span>support@investa.com</span>
            </a>
            <a href="tel:+1234567890" className="flex items-center space-x-2 hover:text-yellow-500">
              <FaPhone />
              <span>+1 (234) 567-890</span>
            </a>
          </div>
        </div>

        {/* Links para perfis do GitHub da equipe */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-4">Equipe de Desenvolvimento</h3>
          <div className="flex justify-center space-x-8">
            <a href="https://github.com/gabriel-dagostim" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center hover:text-yellow-500">
              <FaGithub className="text-2xl" />
              <span className="text-sm mt-1">gabriel-dagostim</span>
            </a>
            <a href="https://github.com/clovis-fag" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center hover:text-yellow-500">
              <FaGithub className="text-2xl" />
              <span className="text-sm mt-1">clovis-fag</span>
            </a>
            <a href="https://github.com/Zanecruise" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center hover:text-yellow-500">
              <FaGithub className="text-2xl" />
              <span className="text-sm mt-1">Zanecruise</span>
            </a>
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
