import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { BLOG_POSTS, getBlogPost } from "@/data/blogs";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return [
    ...BLOG_POSTS.map((post) => ({ slug: post.slug })),
    { slug: "dam-tebi" },
    { slug: "ne-verjemi" },
    { slug: "brez-ljubezni" },
    { slug: "notranji-otrok" },
    { slug: "globoka-sprostitev-telesa-z-intuitivno-masazo-v-koper" },
    { slug: "odkrijte-prednosti-intuitivne-masaze-z-akileo-v-sloveniji" },
    { slug: "moja-izkusnja-z-bolecinami-v-krizu" },
    { slug: "moxanje" },
    { slug: "toliko-se-trudimo-a-kaj-ko-se-ne-bi" },
  ];
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: "Članek ni najden | Akilea" };

  return {
    title: `${post.title} | Blog AKILEA`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  // Related posts (excluding current)
  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <article className="spa-view active bg-white min-h-screen pt-12 lg:pt-20 pb-24">
      {/* Top Header */}
      <div className="max-w-3xl mx-auto px-6">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-[var(--color-muted)] hover:text-[var(--color-primary)] mb-8 transition-colors"
        >
          &larr; Nazaj na vse bloge
        </Link>

        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className="bg-[var(--color-surface)] text-[var(--color-primary)] font-bold text-[10px] uppercase tracking-widest px-3 py-1 rounded-sm">
            {post.category}
          </span>
          <span className="text-[10px] uppercase tracking-widest text-[var(--color-muted)]">
            {post.date}
          </span>
          <span className="text-[10px] uppercase tracking-widest text-[var(--color-muted)]">
            &bull; Branje traja {post.readTime}
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[var(--color-primary)] mb-6 leading-[1.2]">
          {post.title}
        </h1>

        <div className="flex items-center gap-3 pb-8 border-b border-[var(--color-border)] mb-8 text-xs text-[var(--color-muted)]">
          <div className="w-8 h-8 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center font-serif text-sm font-bold">
            MG
          </div>
          <div>
            <p className="font-semibold text-[var(--color-primary)]">{post.author}</p>
            <p className="text-[10px] uppercase tracking-wider">Intuitivna svetovalka, Holistični center <span className="notranslate" translate="no">AKILEA</span></p>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="max-w-4xl mx-auto px-6 mb-12">
        <div className="aspect-[16/9] sm:aspect-[21/9] relative rounded-xl overflow-hidden shadow-lg bg-[var(--color-surface)]">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
            unoptimized
          />
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-3xl mx-auto px-6">
        <div className="space-y-6 text-[var(--color-text)] font-light leading-relaxed text-base sm:text-lg">
          {post.paragraphs.map((block, idx) => {
            if (block.type === "heading") {
              return (
                <h3
                  key={idx}
                  className="text-xl sm:text-2xl font-serif text-[var(--color-primary)] pt-6 pb-1 font-semibold"
                >
                  {block.content}
                </h3>
              );
            }

            if (block.type === "gallery") {
              return (
                <div key={idx} className="my-10 space-y-4">
                  {block.content && (
                    <p className="font-medium text-[var(--color-primary)] text-sm sm:text-base">
                      {block.content}
                    </p>
                  )}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {block.images?.map((img, imgIdx) => (
                      <figure
                        key={imgIdx}
                        className="bg-[var(--color-surface)] rounded-xl overflow-hidden shadow-sm border border-[var(--color-border)]"
                      >
                        <div className="aspect-[4/3] relative bg-[var(--color-border)]">
                          <Image
                            src={img.src}
                            alt={img.caption}
                            fill
                            className="object-cover"
                            unoptimized
                          />
                        </div>
                        <figcaption className="p-3.5 text-xs text-[var(--color-muted)] leading-relaxed italic bg-white">
                          {img.caption}
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                </div>
              );
            }

            if (block.type === "quote") {
              return (
                <blockquote
                  key={idx}
                  className="font-serif italic text-xl sm:text-2xl text-[var(--color-primary)] my-8 p-6 sm:p-8 bg-[var(--color-surface)] rounded-lg text-center border-l-4 border-[var(--color-primary)] shadow-sm"
                >
                  {block.content}
                </blockquote>
              );
            }

            if (block.type === "highlight") {
              return (
                <div
                  key={idx}
                  className="bg-[#f5eff7] p-6 sm:p-8 rounded-xl border border-[var(--color-border)] my-6 text-[var(--color-primary)] font-medium"
                >
                  <p className="leading-relaxed whitespace-pre-line">{block.content}</p>
                </div>
              );
            }

            if (block.type === "list" && Array.isArray(block.content)) {
              return (
                <ul
                  key={idx}
                  className="space-y-3 list-none pl-6 border-l-2 border-[#6a882a] my-8 text-base text-[var(--color-text)]"
                >
                  {block.content.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-2">
                      <span className="text-[#6a882a] font-bold">&bull;</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              );
            }

            // Standard paragraph (preserve newlines if present)
            if (typeof block.content === "string") {
              const lines = block.content.split("\n\n");
              return (
                <div key={idx} className="space-y-4">
                  {lines.map((pText, pIdx) => (
                    <p key={pIdx}>{pText}</p>
                  ))}
                </div>
              );
            }

            return null;
          })}
        </div>

        {/* Author sign-off & CTA */}
        <div className="mt-16 pt-8 border-t border-[var(--color-border)] bg-[var(--color-surface)] rounded-2xl p-8 sm:p-10 text-center">
          <h3 className="text-2xl font-serif text-[var(--color-primary)] mb-3">
            Začutite, da je čas za sprostitev in posvet?
          </h3>
          <p className="text-sm text-[var(--color-muted)] max-w-lg mx-auto mb-6 leading-relaxed">
            V Holističnem centru <span className="notranslate" translate="no">AKILEA</span> v Kopru ustvarjamo varen prostor za globoko sprostitev telesa, predelavo potlačenih napetosti ter vzpostavitev stika s seboj.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/storitve"
              className="btn-primary px-8 py-3.5 text-xs uppercase tracking-widest font-bold"
            >
              Izberi termin masaže &rarr;
            </Link>
            <a
              href="mailto:mirjana@akilea.si"
              className="btn-secondary px-8 py-3.5 text-xs uppercase tracking-widest font-bold"
            >
              Pišite mi (mirjana@akilea.si)
            </a>
          </div>
        </div>

        {/* Related articles */}
        <div className="mt-16 pt-10 border-t border-[var(--color-border)]">
          <div className="flex items-center justify-between mb-8">
            <h4 className="text-xl font-serif text-[var(--color-primary)]">
              Preberite tudi
            </h4>
            <Link
              href="/blog"
              className="text-xs uppercase tracking-widest font-bold text-[#6a882a] hover:text-[var(--color-primary)] transition-colors"
            >
              Vsi članki &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {relatedPosts.map((related) => (
              <Link
                key={related.slug}
                href={`/blog/${related.slug}`}
                className="group block bg-[var(--color-bg)] p-5 rounded-xl border border-[var(--color-border)] hover:shadow-md transition-all"
              >
                <span className="text-[10px] uppercase tracking-wider font-bold text-[#6a882a] mb-2 block">
                  {related.category}
                </span>
                <h5 className="font-serif text-lg text-[var(--color-primary)] group-hover:text-[var(--color-accent)] transition-colors line-clamp-2 mb-2">
                  {related.title}
                </h5>
                <p className="text-xs text-[var(--color-muted)] line-clamp-2">
                  {related.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
