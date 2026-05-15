# Questions

### GreatFrontend Quiz

- React
- Pros
- React node vs React element
- JSX
- state vs props
- controlled vs uncontrolled components
- React context cons
- hooks
- rules of hooks
- useEffect vs useLayoutEffect
- dependency array of useEffect
- pitfalls of useEffect
- useRef
- useCallback & React.memo
- useMemo
- useReducer
- useId
- Rerendering
- Performance optimizations on rendering
- React fragments
- forwardRef()
- useImperativeHandle hook
- mutating state
- Error boundaries
- testing libraries
- hydration
- React portals
- React strict mode
- localize a react component - switch lang
- code splitting - Suspense & React.lazy / dynamic imports
- Performance optimizations on context
- higher order components
- design patterns in react
- unidirectional data flow
- server side rendering
- static generation
- presentational vs container component pattern
- render props
- React anti-patterns
- state vs context vs redux
- composition pattern
- virtual DOM
- React Fiber - incremental rendering & prioritizaion with lanes
- startTransition
- reconcilation
- React Suspense
- lazy loading images

### From Interviews and Research

- React 19
- batching state updates
- prop drilling
- axios over fetch
- axios interceptors
- improve CWV in React
- lifting state up
- pass data from child to parent component
- virtualization
- exponential backoff
- setState() is synchronous or asynchronous
- setState() inside render method
- useRef vs createRef method
- how to handle race conditions
- accessibility features
- microfrontend architecture

### Performance Optimizations / Optimization techniques in React

- React.memo / Pure component
- useCallback / useMemo hook
- Code splitting
- React virtualization / windowing
- Optimization on state & rendering

### How to make application responsive

- mobile-first approach - TailwindCSS
- flexbox and grid - use %, vh, rem instead of px
- responsive images with lazy loading
- media queries

### React 19 features

- React compiler - automatically optimizes rendering eliminating the need of useCallback, useMemo and React.memo
- Server components Architecture and Server actions
- new hooks - use(), useFormStatus(), useActionState(), useOptimistic
- ref as a prop instead of using forwardRef
- React 19.2 - allows PPR (Partial prerendering) which enables pre-rendering of static parts of webpages while dynamic parts to be filled in later

### Microfrontend architecture

- Large frontend application is broken down into smaller independent deployable micro-apps
- These micro-apps can be written in different React versions / different languages
- Can be handled by different teams without waiting for other teams
- Host (Shell) application handles authentication, logging and routing. It loads the remote applications on demand at runtime
- Remote application exposes specific components / pages to the host application
- MFEs are merged in the browser with Webpack Module Federation plugin
