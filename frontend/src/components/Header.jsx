import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full px-6 py-8 text-white">
      <div className="max-w-[1300px] mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold flex items-center gap-1">
          <span className="text-white text-2xl">VIDA</span>
          <span className="text-gray-400 text-lg">Recursos</span>
          {/* <img src="/logo.svg" alt="logo" className="h-10" /> */}
        </div>

        {/* Navegação central */}
        <nav className="hidden md:flex flex-1 justify-center">
          <ul className="flex gap-10 text-[18px] items-center">
            <li>
              <a href="#" className="hover:text-blue-400 transition-all duration-300">Solução</a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition-all duration-300">Sobre</a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition-all duration-300">Contato</a>
            </li>
          </ul>
        </nav>

        {/* Botões desktop */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/login"
            className="px-6 py-2 rounded-full border border-white text-white hover:bg-white hover:text-black transition-all duration-300"
          >
            Entrar
          </Link>
          <Link
            to="/register"
            className="px-6 py-2 rounded-full bg-white text-black font-semibold border border-transparent hover:border-white hover:bg-transparent hover:text-white transition-all duration-300"
          >
            Começar agora
          </Link>
        </div>

        {/* Botão do menu mobile */}
        <button
          className="md:hidden text-white ml-4"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menu mobile */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-[#0f172a] px-6 py-8 shadow-xl z-50">
          <ul className="space-y-6 text-lg text-white">
            <li><a href="#" className="block hover:text-blue-400 transition">Solução</a></li>
            <li><a href="#" className="block hover:text-blue-400 transition">Sobre</a></li>
            <li><a href="#" className="block hover:text-blue-400 transition">Contato</a></li>
          </ul>
          <div className="mt-6 space-y-3">
            <Link
              to="/login"
              className="block text-center px-4 py-2 rounded-full border border-white text-white hover:bg-white hover:text-black transition"
            >
              Entrar
            </Link>
            <Link
              to="/register"
              className="block text-center px-4 py-2 rounded-full bg-white text-black font-semibold hover:outline hover:outline-2 hover:outline-white hover:bg-transparent hover:text-white transition"
            >
              Começar agora
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}