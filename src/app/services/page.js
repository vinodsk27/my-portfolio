import ServicesSection from "@/components/ServicesSection";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Services | Vinod SK",
  description: "Frontend, WordPress, Shopify, responsive design and website optimization services from Vinod SK.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white pt-12 text-slate-900">
      <section className="gsap-section mx-auto max-w-5xl px-5 pb-4 pt-16 text-center sm:px-8">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[.2em] text-blue-700">How I can help</p>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">Web services for your next idea.</h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">From a new WordPress website to an online store, I can help shape a responsive, user-friendly experience.</p>
        <Link href="/contact" className="mt-7 inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-700">Discuss a project <ArrowRight size={16} /></Link>
      </section>
      <ServicesSection />
    </main>
  );
}
