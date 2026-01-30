import React from "react";
import { Rnd } from "react-rnd";
import "./macWindow.scss";

const MacWindow = ({ children, ...props }) => {
  const { default: userDefault, ...otherProps } = props;
  const defaultProps = {
    x: 100,
    y: 100,
    width: 400,
    height: 250,
  };
  const finalDefault = { ...defaultProps, ...userDefault };

  return (
    <Rnd default={finalDefault} bounds="parent" {...otherProps}>
      <div className="window">
        <div className="nav">
          <div className="dots">
            <div className="dot red"></div>
            <div className="dot yellow"></div>
            <div className="dot green"></div>
          </div>

          <div className="title">
            <p>shashibaranwal - notes</p>
          </div>
        </div>
        <hr />

        <div className="main-content">{children}</div>
      </div>
    </Rnd>
  );
};

export default MacWindow;
