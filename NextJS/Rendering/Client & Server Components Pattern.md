# Client & Server Components Pattern

### Server Components Pattern
Server components are used to fetch data, access backend resources like API keys and tokens, large dependencies for server code.

- use 'server-only' package for server util functions
- enclose the third party client component inside a server component
- React context isn't supported in RSC. Create a client context component and wrap the root inside it. 
 

### Client components pattern
Client components are used to handle interactivity, use hooks, add event listeners and working with browser specific APIs.

- use 'client-only' package for client util functions
- client components should be at the lower part of the component tree because server components nested inside CC becomes client components


### Interleaving Client and Server components
- You can't import server components inside client components, so pass the server component as children prop to render it.


