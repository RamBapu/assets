import { useState, useEffect, useRef } from "react";

export default function App() {
  const [keyword, setKeyword] = useState("");
  const throttledValue = useThrottle(keyword, 5000);

  return (
    <>
      <input
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="keyword"
      />
      <span> Throttled : {throttledValue}</span>
    </>
  );
}

export function useThrottle(value, delay = 1000) {
  const [throttledValue, setThrottledValue] = useState(value);
  const lastExecuted = useRef(Date.now());

  useEffect(() => {
    const now = Date.now();
    const remainingTime = delay - (now - lastExecuted.current);

    if (remainingTime <= 0) {
      // Execute immediately
      setThrottledValue(value);
      lastExecuted.current = now;
    } else {
      // Schedule delayed execution
      const timer = setTimeout(() => {
        setThrottledValue(value);
        lastExecuted.current = now;
      }, remainingTime);

      return () => clearTimeout(timer);
    }
  }, [value, delay]);

  return throttledValue;
}
