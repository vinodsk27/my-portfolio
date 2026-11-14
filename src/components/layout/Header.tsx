import Link from 'next/link';
import { LucideMenu, LucideX } from 'lucide-react';
import { useState } from 'react';
import MobileMenu from './MobileMenu';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Work', href: '/work' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Insights', href: '/insights' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-primary bg-opacity-90 backdrop-blur-md border-b border-border-color glass-panel">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="text-2xl font-bold text-text-primary">
          G&apos;Day Digital Marketing
        </Link>
        <nav className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-base text-text-secondary hover:text-gradient-accent transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="ml-4 px-4 py-2 bg-gradient-accent text-white rounded-md hover:opacity-90 transition-opacity"
          >
            Enquire
          </Link>
        </nav>
        <button
          className="md:hidden p-2 text-text-secondary hover:text-gradient-accent"
          onClick={toggleMenu}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {menuOpen ? <LucideX size={24} /> : <LucideMenu size={24} />}
        </button>
      </div>
      <MobileMenu open={menuOpen} onClose={toggleMenu} links={navLinks} />
    </header>
  );
}
