
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-white shadow-md px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/" passHref>
          <a className="cursor-pointer">
            <Image
              src="/logo.png"
              alt="FlashWash Logo"
              width={140}
              height={60}
              priority
            />
          </a>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/about">
            <a className="text-gray-700 hover:text-green-600">About</a>
          </Link>
          <Link href="/services">
            <a className="text-gray-700 hover:text-green-600">Services</a>
          </Link>
          <Link href="/faq">
            <a className="text-gray-700 hover:text-green-600">FAQ</a>
          </Link>
          <Link href="/contact">
            <a className="text-gray-700 hover:text-green-600">Contact</a>
          </Link>
        </nav>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="mt-4 flex flex-col space-y-4 md:hidden">
          <Link href="/about">
            <a className="text-gray-700 hover:text-green-600">About</a>
          </Link>
          <Link href="/services">
            <a className="text-gray-700 hover:text-green-600">Services</a>
          </Link>
          <Link href="/faq">
            <a className="text-gray-700 hover:text-green-600">FAQ</a>
          </Link>
          <Link href="/contact">
            <a className="text-gray-700 hover:text-green-600">Contact</a>
          </Link>
        </div>
      )}
    </header>
  );
}
