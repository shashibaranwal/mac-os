import React from "react";
import "./dock.scss";

const Dock = ({ setWindowsState, windowsState }) => {
  const windows = (btn) => {
    setWindowsState({ ...windowsState, [btn]: !windowsState[btn] });
  };
  return (
    <>
      <footer className="dock">
        <div
          onClick={() => {windows("github");}}
          className="icon github"
        >
          <img src="/doc-icons/github.svg" alt="" />
        </div>

        <div
          onClick={() => {windows("note");}}
          className="icon note"
        >
          <img src="/doc-icons/note.svg" alt="" />
        </div>

        <div
          onClick={() => {windows("resume");}}
          className="icon pdf"
        >
          <img src="/doc-icons/pdf.svg" alt="" />
        </div>

        <div
          onClick={() => {window.open("https://calendar.google.com/", "_blank")}}
          className="icon calender"
        >
          <img src="/doc-icons/calender.svg" alt="" />
        </div>

        <div
          onClick={() => { windows("youtube");}}
          className="icon youtube"
        >
          <img src="/doc-icons/youtube.svg" alt="" />
        </div>

        <div
          onClick={() => {window.open("mailto:shashibaranwal09@gmail.com", "_blank")}}
          className="icon mail"
        >
          <img src="/doc-icons/mail.svg" alt="" />
        </div>
        <div 
          onClick={() => {window.open("https://www.linkedin.com/in/shashi-baranwal/", "_blank")}}
          className="icon link">
          <img src="/doc-icons/link.svg" alt="" />
        </div>
        <div 
          onClick={() => {windows('cli')}}
          className="icon cli">
          <img src="/doc-icons/cli.svg" alt="" />
        </div>
      </footer>
    </>
  );
};

export default Dock;
