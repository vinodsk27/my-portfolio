import React, { useSyncExternalStore } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import { LucideX } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  links: { name: string; href: string }[];
}

export default function MobileMenu({ open, onClose, links }: MobileMenuProps) {
  const mounted = useSyncExternalStore(() => () => {}, () => true, () => false);

  const menuRef = React.useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!menuRef.current) return;
    if (open) {
      gsap.fromTo(
        menuRef.current,
        { y: '-100%' },
        { y: '0%', duration: 0.5, ease: 'power3.out' }
      );
    } else {
      gsap.to(menuRef.current, { y: '-100%', duration: 0.4, ease: 'power3.in' });
    }
  }, [open]);

  if (!mounted) return null;
  return createPortal(
    <div
      ref={menuRef}
      className={`fixed inset-0 bg-primary bg-opacity-95 backdrop-blur-lg z-40 flex flex-col items-center justify-center transition-transform`}
      style={{ transform: open ? 'translateY(0%)' : 'translateY(-100%)' }}
    >
      <button
        onClick={onClose}
        aria-label="Close menu"
        className="absolute top-6 right-6 text-white"
      >
        <LucideX size={32} />
      </button>
      <nav className="flex flex-col gap-8 text-xl text-white">
        {links.map((link) => (
          <Link key={link.href} href={link.href} onClick={onClose} className="hover:text-gradient-accent transition-colors">
            {link.name}
          </Link>
        ))}
      </nav>
    </div>,
    document.body
  );
}
