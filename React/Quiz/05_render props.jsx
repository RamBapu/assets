import { useEffect, useState } from "react";

function DataFetcher({ url, children }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then(setData);
  }, [url]);

  return children(data);
}

// Usage
<DataFetcher url="/api/data">
  {(data) => <div>{data ? data.name : "Loading..."}</div>}
</DataFetcher>;
