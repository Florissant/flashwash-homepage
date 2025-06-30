
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 shadow-md bg-white">
      {/* Logo as a clickable button */}
      <Link href="/" passHref>
        <a className="cursor-pointer">
          <Image
            src="/logo.png" // make sure logo.png is in /public
            alt="FlashWash Logo"
            width={140}
            height={60}
            priority
          />
        </a>
      </Link>

      {/* Optional navigation menu */}
      <nav className="space-x-6">
        <Link href="/about">
          <a className="text-gray-700 hover:text-green-600">About</a>
        </Link>
        <Link href="/services">
          <a className="text-gray-700 hover:text-green-600">Services</a>
        </Link>
        <Link href="/contact">
          <a className="text-gray-700 hover:text-green-600">Contact</a>
        </Link>
      </nav>
    </header>
  );
}
