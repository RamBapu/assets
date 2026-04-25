// Using React lazy and suspense
const LazyComponent = React.lazy(() => import("./LazyComponent"));

function App() {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </React.Suspense>
  );
}

// Using dynamic imports
import("./module").then((module) => {
  // Use the module
});
