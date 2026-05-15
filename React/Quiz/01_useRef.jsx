import React, { useRef, useEffect } from "react";

function TextInputWithFocusButton() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return <input ref={inputRef} type="text" />;
}
