# SSG & ISR

### Static Site Generation (SSG)
HTML is generated at run time and served as static files

Useful for blogs, featured posts and documentation

Not useful for dynamic feeds, dashboard



1. When building, `﻿getStaticProps` function is executed, passes the props to SC and renders the page into HTML + minimal JS
2. For each route, HTML + CSS + JS bundles are created and saved in CDN
3. CDN pages are served on each request and gets hydated in browser
```
export async function getStaticProps() {
  const data = await fetchData();
  return { props: { data } };
}
```
Cons:

- Data becomes stale at runtime


### Incremental Static Regeneration (ISR)
First request - serves static page

After 60s, triggers new build - future requests gets new build

```
export async function getStaticProps() {
  return {
    props: { data },
    revalidate: 60
  };
}
```


