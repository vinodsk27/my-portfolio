import Link from 'next/link';
import { AtSign, Camera, Globe, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary bg-opacity-90 backdrop-blur-md border-t border-border-color glass-panel py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-text-secondary">
        {/* Navigation links */}
        <div className="flex flex-col gap-2">
          <h4 className="text-text-primary font-semibold mb-2">Navigation</h4>
          <Link href="/" className="hover:text-gradient-accent transition-colors">Home</Link>
          <Link href="/work" className="hover:text-gradient-accent transition-colors">Work</Link>
          <Link href="/services" className="hover:text-gradient-accent transition-colors">Services</Link>
          <Link href="/about" className="hover:text-gradient-accent transition-colors">About</Link>
          <Link href="/insights" className="hover:text-gradient-accent transition-colors">Insights</Link>
          <Link href="/contact" className="hover:text-gradient-accent transition-colors">Contact</Link>
        </div>
        {/* Services list */}
        <div className="flex flex-col gap-2">
          <h4 className="text-text-primary font-semibold mb-2">Services</h4>
          <Link href="/services#digital-marketing" className="hover:text-gradient-accent transition-colors">Digital Marketing</Link>
          <Link href="/services#web-design" className="hover:text-gradient-accent transition-colors">Website Design & Development</Link>
          <Link href="/services#wordpress" className="hover:text-gradient-accent transition-colors">WordPress Development</Link>
          <Link href="/services#shopify" className="hover:text-gradient-accent transition-colors">Shopify & Eâ€‘commerce</Link>
          <Link href="/services#seo" className="hover:text-gradient-accent transition-colors">SEO</Link>
        </div>
        {/* Contact & socials */}
        <div className="flex flex-col gap-4">
          <h4 className="text-text-primary font-semibold mb-2">Get in Touch</h4>
          <Link href="mailto:contact@gdaydigital.com" className="flex items-center gap-2 hover:text-gradient-accent transition-colors">
            <Mail size={18} /> contact@gdaydigital.com
          </Link>
          <div className="flex gap-4 mt-2">
            <Link href="#" aria-label="Email" className="hover:text-gradient-accent transition-colors"><AtSign size={20} /></Link>
            <Link href="#" aria-label="Instagram" className="hover:text-gradient-accent transition-colors"><Camera size={20} /></Link>
            <Link href="#" aria-label="Website" className="hover:text-gradient-accent transition-colors"><Globe size={20} /></Link>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-text-muted text-sm">
        &copy; {new Date().getFullYear()} G&apos;Day Digital Marketing. All rights reserved.
      </div>
    </footer>
  );
}

