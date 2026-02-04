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
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <main>
          <Nav />
          <Github />
          <Note />
          <Resume />
          <Youtube />
          <Cli />
          <Dock />
        </main>
      )}
    </>
  );
};

export default App;
