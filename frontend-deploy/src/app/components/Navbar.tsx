import { useState } from 'react';
import Link from 'next/link';
import { FaBox, FaTruck, FaUsers, FaClipboardList, FaChartLine, FaCog, FaBars } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Botão de menu para telas pequenas */}
      <button
        onClick={toggleMenu}
        className="lg:hidden p-4 text-white bg-purple-700 fixed top-0 left-0 z-20"
      >
        <FaBars className="text-2xl" />
      </button>

      {/* Navbar lateral */}
      <nav
        className={`${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 transform lg:static fixed top-0 left-0 h-screen w-64 bg-purple-700 p-6 shadow-lg z-10 transition-transform duration-300 ease-in-out flex flex-col justify-between`}
      >
        <div>
          <h2 className="text-3xl font-bold text-white mb-8">Estockly</h2>
          <ul className="space-y-6">
            <li>
              <Link href="/dashboard/produtos" className="flex items-center space-x-3 text-white hover:text-yellow-400 transition duration-300">
                <FaBox className="text-lg" />
                <span className="font-semibold text-lg">Produtos</span>
              </Link>
            </li>
            <li>
              <Link href="/dashboard/fornecedores" className="flex items-center space-x-3 text-white hover:text-yellow-400 transition duration-300">
                <FaTruck className="text-lg" />
                <span className="font-semibold text-lg">Fornecedores</span>
              </Link>
            </li>
            <li>
              <Link href="/dashboard/clientes" className="flex items-center space-x-3 text-white hover:text-yellow-400 transition duration-300">
                <FaUsers className="text-lg" />
                <span className="font-semibold text-lg">Clientes</span>
              </Link>
            </li>
            <li>
              <Link href="/dashboard/pedidos" className="flex items-center space-x-3 text-white hover:text-yellow-400 transition duration-300">
                <FaClipboardList className="text-lg" />
                <span className="font-semibold text-lg">Pedidos</span>
              </Link>
            </li>
            <li>
              <Link href="/dashboard/relatorios" className="flex items-center space-x-3 text-white hover:text-yellow-400 transition duration-300">
                <FaChartLine className="text-lg" />
                <span className="font-semibold text-lg">Relatórios</span>
              </Link>
            </li>
            <li>
              <Link href="/dashboard/configuracoes" className="flex items-center space-x-3 text-white hover:text-yellow-400 transition duration-300">
                <FaCog className="text-lg" />
                <span className="font-semibold text-lg">Configurações</span>
              </Link>
            </li>
          </ul>
        </div>

        <div className="text-center mt-8">
          <span className="text-sm text-white">© {new Date().getFullYear()} Estockly</span>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
