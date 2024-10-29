import Link from 'next/link';
import { FaBox, FaTags, FaTruck, FaUsers, FaClipboardList, FaChartLine, FaCog } from 'react-icons/fa';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-purple-100 h-screen w-64 p-6 fixed top-0 left-0 shadow-lg">
      <h2 className="text-2xl font-bold text-purple-700 mb-8">Estockly</h2>
      <ul className="space-y-4">
        <li>
          <Link href="/dashboard/produtos" className="flex items-center space-x-2 text-gray-700 hover:text-purple-600">
            <FaBox />
            <span>Produtos</span>
          </Link>
        </li>
        <li>
          <Link href="/dashboard/fornecedores" className="flex items-center space-x-2 text-gray-700 hover:text-purple-600">
            <FaTruck />
            <span>Fornecedores</span>
          </Link>
        </li>
        <li>
          <Link href="/dashboard/clientes" className="flex items-center space-x-2 text-gray-700 hover:text-purple-600">
            <FaUsers />
            <span>Clientes</span>
          </Link>
        </li>
        <li>
          <Link href="/dashboard/pedidos" className="flex items-center space-x-2 text-gray-700 hover:text-purple-600">
            <FaClipboardList />
            <span>Pedidos</span>
          </Link>
        </li>
        <li>
          <Link href="/dashboard/relatorios" className="flex items-center space-x-2 text-gray-700 hover:text-purple-600">
            <FaChartLine />
            <span>Relatórios</span>
          </Link>
        </li>
        <li>
          <Link href="/dashboard/configuracoes" className="flex items-center space-x-2 text-gray-700 hover:text-purple-600">
            <FaCog />
            <span>Configurações</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
