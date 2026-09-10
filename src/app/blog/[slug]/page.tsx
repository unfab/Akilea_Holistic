import { notFound } from "next/navigation";
import { BLOG_POSTS, getBlogPost } from "@/data/blogs";
import BlogPostView from "@/components/BlogPostView";

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

  return <BlogPostView post={post} relatedPosts={relatedPosts} />;
}
