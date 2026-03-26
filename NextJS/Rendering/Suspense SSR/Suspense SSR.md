# Suspense SSR

Suspense SSR introduced with Streaming HTML & Selective hydration - introduced in React 18.

Streaming HTML

> We can wrap the slower components inside `﻿<Suspense>` boundaries to tell React not to wait for this data. Instead, server sends a fallback (loading spinner) and streams the rest of the HTML to the client. When the suspended component's data is ready, its HTML is streamed in with an inline script to put it in the right place.

Code splitting

> By `﻿React.lazy` , we can split the core JS bundle script into separate scripts. Easy to load lazy components by using dynamic imports.

```
import("./math").then(math => {
  console.log(math.add(16, 26));
});
```

Selective Hydration

> This allows React to hydrate parts of the page as their JS code and HTML chunks become available. It also prioritizes hydrating the parts of the page the user interacts with first, creating an illusion of instant interactivity.

Pros

- Seamless integration
  Cons
- entire JS bundle downloaded
- React components get hydrated, even no interactivity
- bulk of JS hydration work in users' devices
