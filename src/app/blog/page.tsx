import Link from "next/link";
import Image from "next/image";
import { BLOG_POSTS } from "@/data/blogs";

export const metadata = {
  title: "Blog AKILEA | Holistični center",
  description: "Preberite članke, razmišljanja in intuitivne vpoglede Mirjane Groznik o zdravju, odnosih in osebnem ravnovesju.",
};

export default function BlogIndexPage() {
  return (
    <div className="spa-view active bg-[var(--color-bg)] py-20 lg:py-32 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[10px] uppercase tracking-widest text-[var(--color-accent)] font-semibold mb-4 block">
            Znanje &amp; Razmišljanja
          </span>
          <h1 className="text-4xl lg:text-5xl font-serif text-[var(--color-primary)] mb-6 notranslate" translate="no">
            Blog AKILEA
          </h1>
          <p className="text-[var(--color-muted)] font-light max-w-xl mx-auto text-base">
            Osebni zapisi, sporočila telesa in praktični nasveti za več notranjega miru, lahkotnosti ter pristnega stika s seboj.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.slug}
              className="bg-white rounded-xl shadow-sm border border-[var(--color-border)] flex flex-col h-full hover:shadow-md transition-shadow overflow-hidden group"
            >
              <div className="aspect-[16/10] overflow-hidden relative bg-[var(--color-surface)]">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  unoptimized
                />
                <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 text-[10px] uppercase tracking-wider font-bold text-[var(--color-primary)] rounded-sm shadow-sm">
                  {post.category}
                </span>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <header className="mb-4 pb-4 border-b border-[var(--color-border)]">
                  <h2 className="text-2xl font-serif text-[var(--color-primary)] mb-3 leading-snug group-hover:text-[var(--color-accent)] transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <div className="flex items-center gap-3 text-[10px] text-[var(--color-muted)] tracking-widest uppercase">
                    <span>{post.author}</span>
                    <span>&bull;</span>
                    <span>{post.date}</span>
                    <span>&bull;</span>
                    <span>{post.readTime}</span>
                  </div>
                </header>

                <div className="text-[var(--color-muted)] font-light leading-relaxed text-sm flex-grow mb-6">
                  <p>{post.excerpt}</p>
                </div>

                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#6a882a] hover:text-[var(--color-primary)] transition-colors mt-auto"
                >
                  Preberi celoten članek &rarr;
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
