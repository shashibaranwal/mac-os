import React, { Component } from "react";
import Terminal from "react-console-emulator";
import MacWindow from "./MacWindow";
import "./cli.scss";

const Cli = () => {
  const commands = {
    echo: {
      description: "Echo a passed string.",
      usage: "echo <string>",
      fn: (...args) => args.join(" "),
    },
    about: {
      description: "About Me.",
      usage: "about",
      fn: () =>
        "I am a Full Stack Developer passionate about building web applications.",
    },
    skills: {
      description: "My Tech Stack.",
      usage: "skills",
      fn: () =>
        "JavaScript, React, Node.js, Express, MongoDB, HTML, CSS, SCSS, Git.",
    },
    projects: {
      description: "My Projects.",
      usage: "projects",
      fn: () =>
        "1. Mac OS Portfolio\n2. E-commerce App\n3. Chat Application\n4. Weather App",
    },
    contact: {
      description: "Contact Me.",
      usage: "contact",
      fn: () =>
        "Email: shashibaranwal09@gmail.com\nGitHub: https://github.com/shashibaranwal\nLinkedIn: https://linkedin.com/in/shashibaranwal",
    },
    
  };

  return (
    <MacWindow
      default={{ x: 600, y: 150, width: 450, height: 350 }}
      title="Terminal"
    >
      <div className="cli-window">
        <Terminal className='react-console-emulator'
          commands={commands}
          welcomeMessage={
            "Welcome to the React Terminal. Type 'help' to see available commands."
          }
          promptLabel={"shashi:~$ "}
          promptLabelStyle={{ color: "#00db00ff" }}
          contentStyle={{ color: "white" }}
          inputStyle={{ color: "#ffffffdc" }}   
        />
      </div>
    </MacWindow>
  );
};

export default Cli;
