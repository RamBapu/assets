# Client Side Rendering (CSR)

Rendering in React / CSR

React was primarily used for building SPAs.



1. When the browser sends the request, we will recieve an empty `root` div and a script tag with src  `/bundle.js` 
2. Then the browser requests the bundle.js file which is the powerhouse containing react library, application code and all its dependencies.
3. Once the JS is downloaded in the browser, it will generate the HTML file - injecting into the DOM - under the `root` div element and then the page becomes interactive.﻿ 


When we inspect the CRA page, you will see the <p>,<div> tags.

But when we view the page source, you will only see the root div.



Cons:

- SEO because initial HTML from server - empty div
- Performance because the client has to do - fetch data, build UI, make interactive elements
- Slow loading
- JS bundle - becomes bigger when more dependencies are added




