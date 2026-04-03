# SSG & ISR

### Static Site Generation (SSG)

HTML is generated at run time and served as static files

Useful for blogs, featured posts and documentation

Not useful for dynamic feeds, dashboard

1. When building, `﻿getStaticProps` function is executed, passes the props to SC and renders the page into HTML + minimal JS
2. For each route, HTML + CSS + JS bundles are created and saved in CDN
3. CDN pages are served on each request and gets hydated in browser

In the [Next.js App Router](https://nextjs.org/docs/app), Static Site Generation (SSG) is the **default behavior** for [Server Components](https://nextjs.org/docs/pages/building-your-application/rendering/server-side-rendering). generateStaticParams function is used to cache pages for dynamic routes.

Set `export const dynamicParams = true` (default) to allow on-demand generation of routes not created at build time.

```js
// app/blog/[slug]/page.tsx
export async function generateStaticParams() {
  const posts = await fetch("https://api.example.com/posts").then((res) =>
    res.json(),
  );

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function Page({ params }) {
  const { slug } = params;
  // Fetch data for the specific post
  return <div>Post: {slug}</div>;
}
```

Cons:

- Data becomes stale at runtime

### Incremental Static Regeneration (ISR)

First request - serves static page

After 60s, triggers new build - future requests gets new build

In the **Next.js App Router** , Incremental Static Regeneration (ISR) is implemented by using the `revalidate` option within the **fetch** API

```js
const res = await fetch("https://example.com", {
  next: { revalidate: 60 }, // Revalidate every 60 seconds
});
```
