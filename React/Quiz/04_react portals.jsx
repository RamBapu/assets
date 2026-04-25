import React from "react";
import ReactDOM from "react-dom";

const Tooltip = ({ text, targetRef }) => {
  const tooltipStyle = {
    position: "absolute",
    top: targetRef.current.offsetTop,
    left: targetRef.current.offsetLeft,
  };

  return ReactDOM.createPortal(
    <div className="tooltip" style={tooltipStyle}>
      {text}
    </div>,
    document.body,
  );
};
