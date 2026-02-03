import React, { useState } from "react";
import MacWindow from "./MacWindow";
import "./resume.scss";

const Resume = () => {
  const [zIndex, setZIndex] = useState(null);

  const handleZIndex = () => {
    setZIndex(zIndex + 1);
  };

  return (
    <MacWindow
      default={{ x: 950, y: 100, width: 400, height: 400 }}
      title="Resume"
      onClick={handleZIndex}
      style={{ zIndex }}
    >
      <div className="resume-window">
        <embed src="ShashiBaranwal.pdf" width="100%" height="100%"></embed>
      </div>
    </MacWindow>
  );
};

export default Resume;
