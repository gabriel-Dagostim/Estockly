// src/app/components/Header.tsx
"use client";

import Link from 'next/link';
import { FaBars, FaHome, FaListAlt, FaTag, FaInfoCircle, FaEnvelope } from 'react-icons/fa';
import { useState } from 'react';
import Image from 'next/image';
import logo from '../../../public/logo-Estockly.png';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="flex justify-between items-center p-6 bg-white shadow-md">
      {/* Logo e Botão Home */}
      <div className="flex items-center space-x-4">
        <div className="text-2xl font-bold text-purple-700">
          <Link href="/">
          <Image src={logo} alt="logo" width={80} height={80} className="mx-auto" />
          </Link>
        </div>
        <Link
          href="/"
          className="hidden md:flex items-center text-purple-700 font-semibold hover:text-purple-800 transition duration-300"
        >
          <FaHome className="mr-1" /> Home
        </Link>
      </div>

      {/* Links de Navegação (Escondidos em telas pequenas) */}
      <nav className="hidden md:flex space-x-6 text-gray-700 font-semibold">
        <Link href="/features" className="flex items-center hover:text-purple-700 transition duration-300">
          <FaListAlt className="mr-1" /> Funcionalidades
        </Link>
        <Link href="/pricing" className="flex items-center hover:text-purple-700 transition duration-300">
          <FaTag className="mr-1" /> Preços
        </Link>
        <Link href="/about" className="flex items-center hover:text-purple-700 transition duration-300">
          <FaInfoCircle className="mr-1" /> Sobre
        </Link>
        <Link href="/contact" className="flex items-center hover:text-purple-700 transition duration-300">
          <FaEnvelope className="mr-1" /> Contato
        </Link>
      </nav>

      {/* Botão Painel */}
      <div className="hidden md:block">
        <Link
          href="/painel"
          className="bg-purple-700 text-white py-2 px-4 rounded-md hover:bg-purple-800 transition duration-300"
        >
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
          <Link href="/" className="flex items-center text-gray-700 font-semibold hover:text-purple-700 transition duration-300" onClick={toggleMobileMenu}>
            <FaHome className="mr-2" /> Home
          </Link>
          <Link href="/features" className="flex items-center text-gray-700 font-semibold hover:text-purple-700 transition duration-300" onClick={toggleMobileMenu}>
            <FaListAlt className="mr-2" /> Funcionalidades
          </Link>
          <Link href="/pricing" className="flex items-center text-gray-700 font-semibold hover:text-purple-700 transition duration-300" onClick={toggleMobileMenu}>
            <FaTag className="mr-2" /> Preços
          </Link>
          <Link href="/about" className="flex items-center text-gray-700 font-semibold hover:text-purple-700 transition duration-300" onClick={toggleMobileMenu}>
            <FaInfoCircle className="mr-2" /> Sobre
          </Link>
          <Link href="/contact" className="flex items-center text-gray-700 font-semibold hover:text-purple-700 transition duration-300" onClick={toggleMobileMenu}>
            <FaEnvelope className="mr-2" /> Contato
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
