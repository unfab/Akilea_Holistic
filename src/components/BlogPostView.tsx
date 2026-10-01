"use client";

import Link from "next/link";
import Image from "next/image";
import { BlogPost } from "@/data/blogs";
import { useLanguage } from "@/context/LanguageContext";

interface BlogPostViewProps {
  post: BlogPost;
  relatedPosts: BlogPost[];
}

const INLINE_PATTERN = /\*\*([\s\S]+?)\*\*|__([\s\S]+?)__|\[([^\]]+)\]\(([^)]+)\)/g;

function renderFormattedText(text: string): React.ReactNode {
  if (!text || typeof text !== "string") return text;

  const regex = new RegExp(INLINE_PATTERN.source, "g");
  const parts: (string | React.ReactNode)[] = [];
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }

    if (match[1] !== undefined) {
      parts.push(
        <strong key={match.index} className="font-semibold">
          {renderFormattedText(match[1])}
        </strong>
      );
    } else if (match[2] !== undefined) {
      parts.push(<em key={match.index}>{renderFormattedText(match[2])}</em>);
    } else {
      const label = match[3];
      const url = match[4];
      const isInternal = url.startsWith("/") || url.startsWith("#");

      if (isInternal) {
        parts.push(
          <Link
            key={match.index}
            href={url}
            className="text-[#6a882a] font-semibold underline underline-offset-4 hover:text-[var(--color-primary)] transition-colors inline-flex items-baseline"
          >
            {label}
          </Link>
        );
      } else {
        parts.push(
          <a
            key={match.index}
            href={url}
            target={url.startsWith("http") ? "_blank" : undefined}
            rel={url.startsWith("http") ? "noopener noreferrer" : undefined}
            className="text-[#6a882a] font-semibold underline underline-offset-4 hover:text-[var(--color-primary)] transition-colors inline-flex items-baseline gap-1"
          >
            <span>{label}</span>
            {url.startsWith("http") && (
              <svg
                className="w-3.5 h-3.5 inline-block self-center opacity-80"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            )}
          </a>
        );
      }
    }
    lastIndex = regex.lastIndex;
  }

  if (parts.length === 0) return text;
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts;
}

export default function BlogPostView({ post, relatedPosts }: BlogPostViewProps) {
  const { t, language } = useLanguage();

  const authorRole = {
    sl: "Intuitivna svetovalka, Holistični center AKILEA",
    en: "Intuitive Advisor, AKILEA Holistic Center",
    hr: "Intuitivna savjetnica, Holistički centar AKILEA",
    it: "Consulente intuitiva, Centro Olistico AKILEA",
    sr: "Интуитивна саветница, Холистички центар AKILEA",
  }[language] || "Intuitivna svetovalka, Holistični center AKILEA";

  const allArticlesText = {
    sl: "Vsi članki →",
    en: "All articles →",
    hr: "Svi članci →",
    it: "Tutti gli articoli →",
    sr: "Сви чланци →",
  }[language] || "Vsi članki →";

  return (
    <article className="spa-view active bg-white min-h-screen pt-12 lg:pt-20 pb-24">
      {/* Top Header */}
      <div className="max-w-3xl mx-auto px-6">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-[var(--color-muted)] hover:text-[var(--color-primary)] mb-8 transition-colors"
        >
          {t.blogPage.backBtn}
        </Link>

        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className="bg-[var(--color-surface)] text-[var(--color-primary)] font-bold text-[10px] uppercase tracking-widest px-3 py-1 rounded-sm">
            {post.category}
          </span>
          <span className="text-[10px] uppercase tracking-widest text-[var(--color-muted)]">
            {post.date}
          </span>
          <span className="text-[10px] uppercase tracking-widest text-[var(--color-muted)]">
            &bull; {t.blogPage.readTimePrefix} {post.readTime}
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
            <p className="text-[10px] uppercase tracking-wider">{authorRole}</p>
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
            sizes="(min-width: 896px) 896px, 100vw"
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
                  {typeof block.content === "string" ? renderFormattedText(block.content) : block.content}
                </h3>
              );
            }

            if (block.type === "image") {
              return (
                <div key={idx} className="my-10 space-y-4">
                  {block.images?.map((img, imgIdx) => (
                    <figure key={imgIdx} className="max-w-md mx-auto">
                      <Image
                        src={img.src}
                        alt={img.caption || post.title}
                        width={img.width ?? 1200}
                        height={img.height ?? 900}
                        className="w-full h-auto rounded-xl shadow-sm border border-[var(--color-border)]"
                        sizes="(min-width: 448px) 448px, 100vw"
                      />
                      {img.caption && (
                        <figcaption className="pt-3 text-xs text-[var(--color-muted)] leading-relaxed italic text-center">
                          {img.caption}
                        </figcaption>
                      )}
                    </figure>
                  ))}
                </div>
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
                            sizes="(min-width: 640px) 50vw, 100vw"
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
                  {typeof block.content === "string" ? renderFormattedText(block.content) : block.content}
                </blockquote>
              );
            }

            if (block.type === "highlight") {
              return (
                <div
                  key={idx}
                  className="bg-[#f5eff7] p-6 sm:p-8 rounded-xl border border-[var(--color-border)] my-6 text-[var(--color-primary)] font-medium"
                >
                  <p className="leading-relaxed whitespace-pre-line">
                    {typeof block.content === "string" ? renderFormattedText(block.content) : block.content}
                  </p>
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
                      <span className="whitespace-pre-line">{renderFormattedText(item)}</span>
                    </li>
                  ))}
                </ul>
              );
            }

            if (typeof block.content === "string") {
              const lines = block.content.split("\n\n");
              return (
                <div key={idx} className="space-y-4">
                  {lines.map((pText, pIdx) => (
                    <p key={pIdx} className="whitespace-pre-line">
                      {renderFormattedText(pText)}
                    </p>
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
            {t.blogPage.ctaTitle}
          </h3>
          <p className="text-sm text-[var(--color-muted)] max-w-lg mx-auto mb-6 leading-relaxed">
            {t.blogPage.ctaDesc}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/#rezervacija"
              className="btn-primary px-8 py-3.5 text-xs uppercase tracking-widest font-bold"
            >
              {t.blogPage.ctaBtn}
            </Link>
            <a
              href="mailto:mirjana@akilea.si"
              className="btn-secondary px-8 py-3.5 text-xs uppercase tracking-widest font-bold"
            >
              {t.blogPage.ctaEmailBtn}
            </a>
          </div>
        </div>

        {/* Related articles */}
        <div className="mt-16 pt-10 border-t border-[var(--color-border)]">
          <div className="flex items-center justify-between mb-8">
            <h4 className="text-xl font-serif text-[var(--color-primary)]">
              {t.blogPage.relatedTitle}
            </h4>
            <Link
              href="/blog"
              className="text-xs uppercase tracking-widest font-bold text-[#6a882a] hover:text-[var(--color-primary)] transition-colors"
            >
              {allArticlesText}
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
