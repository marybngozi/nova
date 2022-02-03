import React from "react";
import "../styles/Header.css";
import { ReactComponent as ArrowLeft } from "../images/arrowleft.svg";
import { ReactComponent as Minimize } from "../images/minimize.svg";
import { ReactComponent as Close } from "../images/close.svg";

export const Header = () => {
  return (
    <header>
      <div className="top">
        <div>
          <button className="btn-arrow">
            <ArrowLeft />
          </button>
        </div>
        <div>
          <h4>Start your conversation</h4>
          <p>Penny is set!</p>
        </div>
        <div className="btns">
          <button className="btn-right">
            <Minimize className="icn" />
          </button>
          <button className="btn-right">
            <Close />
          </button>
        </div>
      </div>
    </header>
  );
};
