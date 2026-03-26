# React Server Components

RSC Architecture introduced in React 19 with dual component model

NextJS app router is built on RSC architecture where React runs on server

### **Client components**

- Client components are rendered on the client and rendered only once on the server for better performance
- handles interactivity, application state logic using hooks, DOM apis like geolocation and localStorage, event listeners
- for building UI & stateful

### **Server components**

- Server components are rendered on the server and never downloaded to the client - stays only on the server
- handles data fetching and static rendering
- stateless

Every component in NextJS - server component until explicitly mentioned as 'use client'

Server components - only in terminal

Client components - both in browser and terminal

Client components are rendered once on the server - to form the HTML and sent to the client and after hydration in the browser, it becomes interactive.

RSC Rendering lifecycle

1. When the browser sends the request, NextJS app router matches the requested URL to a server component, NextJS instructs React to render the SC.
2. React renders the SC tree - converting to special JSON format - RSC payload. React also prepares CC references needed later in RSC payload.
3. React in the browser parses RSC payload to build VDOM & do reconcilation & progressively render UI. (final UI)
4. Client components undergo hydration with JS chunks. (Interactive UI)
5. On further navigation, fetches RSC payload and updates UI

RSC payload contains components, props, CC references & data

Inside RSC payload of SC - no JS file

Inside RSC payload of CC - JS file for hydration, placeholder - null for CC and Suspense components

Pros

- Small bundler sizes
- only client components get hydrated
- direct access to server resources - near to server
- enhanced security like API keys and tokens
- improved data fetching - closer to dbs
- caching the results
- faster initial page load & FCP (First contenful paint)
- improved SEO
