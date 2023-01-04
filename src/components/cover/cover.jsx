import React from "react";
import "./cover.scss";
import headshot from "../../images/photos/headshot-924w.webp";
import headshotMobile from "../../images/photos/headshot-450w.webp";

const Cover = () => {
  return (
    <header className="cover-frame">
      <div className="first-column">
        <div>
          <h1>Garrett Pilgrim</h1>
          <span>Developer and Marketer</span>
        </div>
      </div>
      <div className="second-column">
        <img
          src={headshot}
          srcSet={`${headshotMobile} 450w, ${headshot} 924w`}
          sizes="(min-width: 550px) 924w, 450w"
          alt="A portrait of Garrett Pilgrim from the shoulders up."
          width="924"
          height="844"
        ></img>
        {/* <div className="circle" /> */}
      </div>
    </header>
  );
};

export default Cover;
