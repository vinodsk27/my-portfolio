"use client";

import Link from "next/link";
import { ArrowUp, Code2, Heart, Mail, Phone } from "lucide-react";
import { LinkedinIcon } from "@/components/SocialIcons";
import { personalInfo } from "@/data/portfolioData";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white px-5 py-10 text-slate-600 sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <Link href="/" className="mb-3 inline-flex items-center gap-2 font-semibold text-slate-950">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-white"><Code2 size={17} /></span>
            Vinod SK
          </Link>
          <p className="max-w-sm text-sm leading-6">Frontend, WordPress and Shopify developer creating responsive websites for businesses.</p>
        </div>
        <div>
          <h2 className="mb-3 text-sm font-semibold text-slate-950">Explore</h2>
          <nav className="flex flex-col items-start gap-2 text-sm">
            {links.map((link) => <Link key={link.href} href={link.href} className="transition hover:text-blue-700">{link.label}</Link>)}
          </nav>
        </div>
        <div>
          <h2 className="mb-3 text-sm font-semibold text-slate-950">Get in touch</h2>
          <div className="flex flex-col items-start gap-3 text-sm">
            <a href={`mailto:${personalInfo.email}`} className="inline-flex items-center gap-2 hover:text-blue-700"><Mail size={16} />{personalInfo.email}</a>
            <a href={`tel:${personalInfo.phone.replace(/\s+/g, "")}`} className="inline-flex items-center gap-2 hover:text-blue-700"><Phone size={16} />{personalInfo.phone}</a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-blue-700"><LinkedinIcon className="h-4 w-4" />LinkedIn</a>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-8 flex max-w-7xl flex-col items-center justify-between gap-3 border-t border-slate-100 pt-5 text-xs sm:flex-row">
        <p>© {new Date().getFullYear()} Vinod SK. All rights reserved.</p>
        <p className="inline-flex items-center gap-1">Built with care <Heart size={13} className="fill-rose-500 text-rose-500" />
          <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="ml-3 inline-flex items-center gap-1 rounded-full border border-slate-200 px-3 py-1.5 text-slate-700 transition hover:border-slate-400 hover:text-slate-950"><ArrowUp size={13} /> Top</button>
        </p>
      </div>
    </footer>
  );
}
