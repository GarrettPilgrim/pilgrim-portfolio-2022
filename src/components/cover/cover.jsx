import React from "react";
import "./cover.scss";
import headshot from "../../images/photos/headshot.png";

const Cover = () => {
  return (
    <header className="cover-frame">
      <div className="first-column">
        <h1>Garrett Pilgrim</h1>
        <span>Developer and Designer</span>
      </div>
      <div className="second-column">
        <img
          src={headshot}
          alt="A portrait of Garrett Pilgrim from the shoulders up."
        ></img>
        {/* <div className="circle" /> */}
      </div>
    </header>
  );
};

export default Cover;
