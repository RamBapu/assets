# Server Rendering Strategies

### Static Rendering
Routes are pre-rendered at build time and served via CDN

During build time in NextJS,  .next folder is created - which has 

- server -> app -> html & rsc files for CC & SC components.
- static -> chunks -> app -> CC name -> JS chunk file
Note: All pages in NextJS are statically rendered in build time by default. cirle icon is used in terminal to show prerendered as static content.



When we request the `﻿localhost:3000` , index.html, core JS bundle, RSC payloads for client navigation links, JS chunks for corresponding CC downloaded.

> Prefetching - loads client side navigation routes as their links are visible. So no request is sent on clicking that link. It is preloaded on intial load.

Only when we request the exact page, then only it returns the HTML page cached from the CDN Or else when navigating from main page, it just uses the rsc payload & JS chunks, to frame UI.

Used for: blogs, documentation, featured posts



### Dynamic Rendering
Routes are rendered for each user when they make a request

During build time in NextJS, .next folder contains

- server -> app -> html & rsc files won't be there for dynamic pages


Note: NextJS automatically switches to dynamic rendering when it sees a dynamic function - cookies(), headers(), connection(), searchParams prop. 

export const dynamic = 'force-dynamic' --> to force switch.

f icon is used in terminal to show server-rendered on demand



`﻿generateStaticParams()`  function is used to define static HTML pages for featured products where the other products are statically rendered at run time. By default `﻿dynamicParams = true` 

dotted icon is used in terminal to show pre-rendered as static HTML

Used for: personalized feeds, dashboard



### Streaming 
In NextJS, Streaming happens when we use `﻿Suspense` boundaries to complex components.









