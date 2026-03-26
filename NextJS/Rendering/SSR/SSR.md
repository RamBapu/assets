# Server Side Rendering

SSR is used in NextJS - a framework for React that supports SSR out of the box.

SSR - renders pages on demand when user requests them - used for personalised content like social media feeds.

1. When the browser sends the request, server now handles rendering the complete HTML and sends the fully formed HTML + JS reference to the browser. (Non-interactive UI)
2. Then the bowser requests the JS bundle - react and app code and its dependencies. Once finished downloading, hydration happens in the browser
3. Hydration is the process in which the static server rendered HTML brought to live / interactive. (Interactive UI)

Hydration

> React takes control of the browser and reconstructs the component tree in memory, using the server rendered HTML as blueprint.
> It carefully maps out the interactive elements to go and hooks up the JS logic.

Pros:

- SEO - easily index the HTML
- Users can see the HTML instead of loading screen

  Cons:

- Fetch everything even API fetch - before server rendering the page
- For hydration, component tree must match the server rendered HTML blueprint - all JS to be loaded
- Hydration in a single pass - all components to be hydrated

All or nothing waterfall model
