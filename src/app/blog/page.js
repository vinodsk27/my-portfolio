import Link from "next/link";
import { ArrowUpRight, Clock3 } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";

export const metadata = {
  title: "Blog | Vinod SK",
  description: "Notes on responsive websites, WordPress, performance and e-commerce development.",
};

export default function BlogPage() {
  const [featured, ...posts] = blogPosts;
  return (
    <main className="min-h-screen bg-white px-5 pb-24 pt-32 text-slate-900 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <header className="gsap-section mb-12 max-w-3xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[.2em] text-blue-700">The blog</p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">Notes from the build.</h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">Practical thoughts on WordPress, responsive design, e-commerce and website performance.</p>
        </header>

        <Link href={`/blog/${featured.slug}`} className="gsap-section group grid overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 transition hover:border-blue-200 hover:shadow-xl lg:grid-cols-[1.1fr_.9fr]">
          <div className="min-h-72 bg-cover bg-center transition duration-500 group-hover:scale-[1.015]" style={{ backgroundImage: `url("${featured.image}")` }} aria-label={featured.title} />
          <div className="flex flex-col justify-center p-7 sm:p-10">
            <span className="text-xs font-semibold uppercase tracking-[.16em] text-blue-700">Featured · {featured.category}</span>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">{featured.title}</h2>
            <p className="mt-4 leading-7 text-slate-600">{featured.excerpt}</p>
            <span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-slate-950">Read article <ArrowUpRight size={16} /></span>
          </div>
        </Link>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="gsap-section group overflow-hidden rounded-[1.7rem] border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl">
              <div className="h-56 bg-cover bg-center transition duration-500 group-hover:scale-[1.025]" style={{ backgroundImage: `url("${post.image}")` }} aria-label={post.title} />
              <div className="p-6 sm:p-7">
                <div className="flex items-center justify-between gap-3 text-xs font-semibold uppercase tracking-[.14em] text-blue-700"><span>{post.category}</span><span className="inline-flex items-center gap-1.5 text-slate-500 normal-case tracking-normal"><Clock3 size={14} />{post.readTime}</span></div>
                <h2 className="mt-4 text-2xl font-semibold leading-snug tracking-tight text-slate-950 transition group-hover:text-blue-700">{post.title}</h2>
                <p className="mt-3 leading-7 text-slate-600">{post.excerpt}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-slate-900">Read article <ArrowUpRight size={15} /></span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
