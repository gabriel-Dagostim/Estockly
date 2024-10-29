import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center p-6 bg-white shadow-md">
      <div className="text-2xl font-bold text-purple-700">Estockly</div>
      <div className="space-x-4">
        <Link href="/painel" className="bg-purple-700 text-white py-2 px-4 rounded-md hover:bg-purple-800">
          Painel
        </Link>
      </div>
    </header>
  );
};

export default Header;
