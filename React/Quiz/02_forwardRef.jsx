import React, { forwardRef, useRef } from "react";

// Define a functional component and wrap it with forwardRef
const MyInput = forwardRef((props, ref) => <input ref={ref} {...props} />);

const ParentComponent = () => {
  const inputRef = useRef(null);

  const focusInput = () => {
    // Access the input element and focus it
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <MyInput ref={inputRef} placeholder="Type here..." />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
};

export default ParentComponent;
