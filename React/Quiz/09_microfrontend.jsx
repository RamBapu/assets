// remote/webpack.config.js
new ModuleFederationPlugin({
  name: "app_remote",
  filename: "remoteEntry.js",
  exposes: {
    "./Button": "./src/components/Button", // Exposing a React component
  },
  shared: { react: { singleton: true }, "react-dom": { singleton: true } },
});

// host/webpack.config.js
new ModuleFederationPlugin({
  name: "app_host",
  remotes: {
    app_remote: "app_remote@http://localhost:3001/remoteEntry.js",
  },
  shared: { react: { singleton: true }, "react-dom": { singleton: true } },
});

const RemoteButton = React.lazy(() => import("app_remote/Button"));

function App() {
  return (
    <React.Suspense fallback="Loading Button...">
      <RemoteButton />
    </React.Suspense>
  );
}
