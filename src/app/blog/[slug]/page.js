import Link from "next/link";
import { ArrowLeft, ArrowRight, Clock3 } from "lucide-react";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blogPosts";

export function generateStaticParams() {
  return blogPosts.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) return { title: "Article not found | Vinod SK" };
  return { title: `${post.title} | Vinod SK`, description: post.excerpt };
}

export default async function BlogArticlePage({ params }) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) notFound();

  const currentIndex = blogPosts.findIndex((item) => item.slug === post.slug);
  const nextPost = blogPosts[(currentIndex + 1) % blogPosts.length];

  return (
    <main className="min-h-screen bg-white px-5 pb-24 pt-32 text-slate-900 sm:px-8">
      <article className="mx-auto max-w-4xl">
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition hover:text-blue-700"><ArrowLeft size={16} /> All articles</Link>
        <header className="gsap-section mx-auto mt-9 max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[.18em] text-blue-700">{post.category}</p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">{post.title}</h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">{post.excerpt}</p>
          <div className="mt-5 inline-flex items-center gap-2 text-sm text-slate-500"><Clock3 size={15} />{post.readTime}</div>
        </header>

        <div className="gsap-section mt-10 h-64 overflow-hidden rounded-[2rem] bg-cover bg-center sm:h-[26rem]" style={{ backgroundImage: `url("${post.image}")` }} role="img" aria-label={post.title} />

        <div className="mx-auto mt-10 max-w-2xl">
          <p className="mb-9 text-xl leading-9 text-slate-700">{post.intro}</p>
          {post.sections.map((section) => (
            <section key={section.heading} className="gsap-section mb-9">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950">{section.heading}</h2>
              {section.paragraphs.map((paragraph) => <p key={paragraph} className="mt-4 leading-8 text-slate-600">{paragraph}</p>)}
              {section.points && <ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-600">{section.points.map((point) => <li key={point}>{point}</li>)}</ul>}
            </section>
          ))}
          <div className="mt-12 rounded-3xl bg-slate-50 p-6 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[.16em] text-blue-700">Have a website project?</p>
            <p className="mt-2 text-lg text-slate-700">Let&apos;s talk about what you&apos;re building.</p>
            <Link href="/contact" className="mt-5 inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-700">Contact me <ArrowRight size={16} /></Link>
          </div>
          <Link href={`/blog/${nextPost.slug}`} className="mt-8 flex items-center justify-between gap-4 rounded-2xl border border-slate-200 p-5 transition hover:border-blue-300">
            <span><span className="block text-xs font-semibold uppercase tracking-[.14em] text-slate-500">Next article</span><span className="mt-1 block font-semibold text-slate-950">{nextPost.title}</span></span><ArrowRight size={18} className="shrink-0 text-blue-700" />
          </Link>
        </div>
      </article>
    </main>
  );
}
