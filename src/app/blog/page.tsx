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
      id: "dam-tebi",
      title: "Dam tebi, a tudi sebi.",
      excerpt: "»Kdor hoče, najde pot, kdor pa ne, najde izgovore« .. brrr, ne vem za vas, ampak mene je ta stavek v preteklosti tolikokrat prav znerviral...",
      category: "Čustva",
      date: "Jan 30",
      image: "https://static.wixstatic.com/media/11062b_dd8a0854f84e495a8e5d10f2b8c5f4ec~mv2.jpg/v1/fill/w_800,h_600,al_c,q_85/11062b_dd8a0854f84e495a8e5d10f2b8c5f4ec~mv2.jpg"
    },
    {
      id: "ne-verjemi",
      title: "NE VERJEMI VSEMU, KAR SLIŠIŠ",
      excerpt: "Preprosta enačba DECEMBER = HITENJE+ STRES+IZČRPANOST. Zapisana v kolektvni zavesti. Zapisana v vsaki celici našega telesa...",
      category: "Zdravje",
      date: "Dec 11, 2025",
      image: "https://static.wixstatic.com/media/dfaf38_3dde454674654e2f8cd0cecf1837fd2e~mv2.jpeg/v1/fill/w_800,h_600,al_c,q_85/dfaf38_3dde454674654e2f8cd0cecf1837fd2e~mv2.jpeg"
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {posts.map(post => (
            <article key={post.id} className="bg-white rounded-lg shadow-sm border border-[var(--color-border)] flex flex-col h-full hover:shadow-md transition-shadow overflow-hidden group">
              <div className="aspect-[16/9] overflow-hidden relative">
                <Image 
                  src={post.image}
                  alt={post.title}
                  fill
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  unoptimized
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <header className="mb-4 pb-4 border-b border-[var(--color-border)]">
                  <h3 className="text-2xl font-serif text-[var(--color-primary)] mb-2">{post.title}</h3>
                  <div className="flex items-center gap-3 text-[10px] text-[var(--color-muted)] tracking-widest uppercase">
                    <span>Mirjana Groznik</span>
                    <span>&bull;</span>
                    <span>{post.date}</span>
                  </div>
                </header>
                <div className="text-[var(--color-muted)] font-light leading-relaxed text-sm flex-grow mb-6">
                  <p>{post.excerpt}</p>
                </div>
                <Link href={`/blog/${post.id}`} className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#6a882a] hover:text-[var(--color-primary)] transition-colors mt-auto">
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
