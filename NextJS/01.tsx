// app/blog/[slug]/page.tsx

// 1. Define the generateStaticParams function
export async function generateStaticParams() {
  const posts = await fetch("https://example.com").then((res) => res.json());

  return posts.map((post: { slug: string }) => ({
    slug: post.slug,
  }));
}

// 2. The page component receives the params
// In Next.js 15+, 'params' is a Promise and must be awaited
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await fetch(`https://example.com/${slug}`).then((res) =>
    res.json(),
  );

  return (
    <article>
      <h1>{post.title}</h1>
    </article>
  );
}
