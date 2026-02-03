import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import MacWindow from "./MacWindow";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierDuneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import './note.scss'

const Note = () => {
  const [markdown, setMarkdown] = useState(null);

  useEffect(() => {
    fetch("note.txt")
      .then((res) => res.text())
      .then((text) => setMarkdown(text));
  }, []);

const [zIndex, setZIndex] = useState(null);

  const handleZIndex = () => {
    setZIndex(zIndex + 1);
  };

  return (
    <MacWindow 
    default={{ x: 300, y: 300 }}
    title="Note" onClick={handleZIndex} style={{ zIndex }}>
      <div className="note-window">
        {markdown ? (
          <SyntaxHighlighter language="typescript" style={atelierDuneDark}>{markdown}</SyntaxHighlighter>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </MacWindow>
  );
};

export default Note;
