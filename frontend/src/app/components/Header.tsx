// src/app/components/Header.tsx
"use client";

import Link from 'next/link';
import { FaBars } from 'react-icons/fa';
import { useState } from 'react';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="flex justify-between items-center p-6 bg-white shadow-md">
      {/* Logo */}
      <div className="text-2xl font-bold text-purple-700">
        <Link href="/">Estockly</Link>
      </div>

      {/* Links de Navegação (Escondidos em telas pequenas) */}
      <nav className="hidden md:flex space-x-6 text-gray-700 font-semibold">
        <Link href="#features" className="hover:text-purple-700 transition duration-300">
          Funcionalidades
        </Link>
        <Link href="#pricing" className="hover:text-purple-700 transition duration-300">
          Preços
        </Link>
        <Link href="#about" className="hover:text-purple-700 transition duration-300">
          Sobre
        </Link>
        <Link href="#contact" className="hover:text-purple-700 transition duration-300">
          Contato
        </Link>
      </nav>

      {/* Botão Painel */}
      <div className="hidden md:block">
        <Link href="/painel" className="bg-purple-700 text-white py-2 px-4 rounded-md hover:bg-purple-800 transition duration-300">
          Painel
        </Link>
      </div>

      {/* Menu Hamburguer para Mobile */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMobileMenu} className="text-purple-700 text-2xl focus:outline-none">
          <FaBars />
        </button>
      </div>

      {/* Menu Mobile (Exibido ao clicar no ícone) */}
      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center space-y-4 py-4 md:hidden">
          <Link href="#features" className="text-gray-700 font-semibold hover:text-purple-700 transition duration-300" onClick={toggleMobileMenu}>
            Funcionalidades
          </Link>
          <Link href="#pricing" className="text-gray-700 font-semibold hover:text-purple-700 transition duration-300" onClick={toggleMobileMenu}>
            Preços
          </Link>
          <Link href="#about" className="text-gray-700 font-semibold hover:text-purple-700 transition duration-300" onClick={toggleMobileMenu}>
            Sobre
          </Link>
          <Link href="#contact" className="text-gray-700 font-semibold hover:text-purple-700 transition duration-300" onClick={toggleMobileMenu}>
            Contato
          </Link>
          <Link href="/painel" className="bg-purple-700 text-white py-2 px-4 rounded-md hover:bg-purple-800 transition duration-300" onClick={toggleMobileMenu}>
            Painel
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;