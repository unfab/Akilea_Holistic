import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Blog | Akilea Center zdravja",
  description: "Preberite naše najnovejše članke, nasvete in zgodbe o zdravju in osebnem razvoju.",
};

export default function BlogIndexPage() {
  const categories = ["Vse", "Zdravje", "Čustva", "Prehrana", "Nasveti"];
  
  const posts = [
    {
      id: "kako-poslusati-telo",
      title: "Kako poslušati svoje telo in prepoznati njegove znake",
      excerpt: "Telo nam nenehno pošilja signale, a jih v hitrem tempu življenja pogosto spregledamo. Naučite se osnovnih tehnik, s katerimi se lahko ponovno povežete s seboj in razumete, kaj vam sporočajo bolečine ali utrujenost.",
      category: "Zdravje",
      date: "10. Avgust 2026",
      image: "https://static.wixstatic.com/media/nsplsh_316996a4b9cf4d828de72f45a7ea095c~mv2.jpg/v1/fit/w_3648,h_5472,al_c,q_90/nsplsh_316996a4b9cf4d828de72f45a7ea095c~mv2.jpg"
    }
  ];

  return (
    <div className="spa-view active bg-[var(--color-bg)] py-20 lg:py-32 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[10px] uppercase tracking-widest text-[var(--color-accent)] font-semibold mb-4 block">Znanje in Navdih</span>
          <h1 className="text-4xl lg:text-5xl font-serif text-[var(--color-primary)] mb-6">Blog</h1>
          
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {categories.map((cat, idx) => (
              <button 
                key={idx} 
                className={`px-4 py-2 text-xs uppercase tracking-widest font-bold rounded-full border transition-colors ${idx === 0 ? 'bg-[var(--color-primary)] text-white border-[var(--color-primary)]' : 'bg-transparent text-[var(--color-primary)] border-[var(--color-border)] hover:border-[var(--color-primary)]'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map(post => (
            <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-sm border border-[var(--color-border)] flex flex-col hover:shadow-md transition-shadow">
              <div className="aspect-[4/3] relative">
                <Image src={post.image} alt={post.title} fill className="object-cover" unoptimized />
              </div>
              <div className="p-6 md:p-8 flex flex-col flex-1">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[10px] uppercase tracking-widest text-[var(--color-accent-green)] font-semibold">{post.category}</span>
                  <span className="text-[10px] uppercase tracking-widest text-[var(--color-muted)]">{post.date}</span>
                </div>
                <h3 className="text-xl font-serif text-[var(--color-primary)] mb-3">{post.title}</h3>
                <p className="text-[var(--color-muted)] font-light text-sm mb-6 flex-1 line-clamp-3">
                  {post.excerpt}
                </p>
                <Link href={`/blog/${post.id}`} className="text-[10px] uppercase tracking-widest font-bold text-[var(--color-primary)] border-b border-[var(--color-primary)] pb-1 hover:text-[var(--color-accent)] self-start transition-colors">
                  Preberi celoten članek
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
