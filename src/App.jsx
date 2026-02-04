import React, { useState, useEffect } from "react";
import "./app.scss";
import Dock from "./components/Dock";
import Nav from "./components/Nav";
import Github from "./components/Windows/Github";
import Note from "./components/Windows/Note";
import Resume from "./components/Windows/Resume";
import Loader from "./components/Loader";
import Youtube from "./components/Windows/Youtube";
import Cli from "./components/Windows/Cli";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const [windowsState, setWindowsState] = useState({
    github: false,
    note: false,
    resume: false,
    youtube: false,
    cli: false,
  })


  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <main>
          <Nav />
          <Dock setWindowsState={setWindowsState} windowsState={windowsState}/>
          {windowsState.github && <Github windowName="github" setWindowsState={setWindowsState} windowsState={windowsState}/>}
          {windowsState.note && <Note windowName="note" setWindowsState={setWindowsState} windowsState={windowsState}/>}
          {windowsState.resume && <Resume windowName="resume" setWindowsState={setWindowsState} windowsState={windowsState}/>}
          {windowsState.youtube && <Youtube windowName="youtube" setWindowsState={setWindowsState} windowsState={windowsState}/>}
          {windowsState.cli && <Cli windowName="cli" setWindowsState={setWindowsState} windowsState={windowsState}/>}
        </main>
      )}
    </>
  );
};

export default App;
