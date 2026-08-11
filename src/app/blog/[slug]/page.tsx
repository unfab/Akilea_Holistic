import Link from "next/link";
import Image from "next/image";

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  // Placeholder post data
  const post = {
    title: "Kako poslušati svoje telo in prepoznati njegove znake",
    category: "Zdravje",
    date: "10. Avgust 2026",
    image: "https://static.wixstatic.com/media/nsplsh_316996a4b9cf4d828de72f45a7ea095c~mv2.jpg/v1/fit/w_3648,h_5472,al_c,q_90/nsplsh_316996a4b9cf4d828de72f45a7ea095c~mv2.jpg",
    content: (
      <>
        <p>Telo nam nenehno pošilja signale, a jih v hitrem tempu življenja pogosto spregledamo. Naučite se osnovnih tehnik, s katerimi se lahko ponovno povežete s seboj in razumete, kaj vam sporočajo bolečine ali utrujenost.</p>
        <p>Tukaj bomo kasneje dodajali pravo vsebino bloga. Strani bodo generirane glede na URL (slug).</p>
      </>
    )
  };

  return (
    <article className="spa-view active bg-white min-h-screen pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-6">
        <Link href="/blog" className="text-[10px] uppercase tracking-widest font-bold text-[var(--color-muted)] hover:text-[var(--color-primary)] mb-8 inline-block transition-colors">
          &larr; Nazaj na blog
        </Link>
        
        <div className="flex items-center gap-4 mb-6">
          <span className="text-[10px] uppercase tracking-widest text-[var(--color-accent-green)] font-semibold">{post.category}</span>
          <span className="text-[10px] uppercase tracking-widest text-[var(--color-muted)]">{post.date}</span>
        </div>
        
        <h1 className="text-3xl md:text-5xl font-serif text-[var(--color-primary)] mb-8 leading-tight">{post.title}</h1>
      </div>
      
      <div className="max-w-5xl mx-auto px-6 mb-12">
        <div className="aspect-[21/9] relative rounded-lg overflow-hidden shadow-md bg-[var(--color-surface)]">
          <Image src={post.image} alt={post.title} fill className="object-cover" unoptimized />
        </div>
      </div>
      
      <div className="max-w-3xl mx-auto px-6">
        <div className="prose prose-lg prose-headings:font-serif prose-headings:text-[var(--color-primary)] prose-p:text-[var(--color-text)] prose-p:font-light prose-a:text-[var(--color-accent)] max-w-none">
          {post.content}
        </div>
      </div>
    </article>
  );
}
