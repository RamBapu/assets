import React, { useRef, useEffect } from "react";

function TextInputWithFocusButton() {
  const inputEl = useRef(null);

  useEffect(() => {
    inputEl.current.focus();
  }, []);

  return <input ref={inputEl} type="text" />;
}
