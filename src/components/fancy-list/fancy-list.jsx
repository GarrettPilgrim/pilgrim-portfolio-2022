import React from "react";
import ScrollAnimation from "../movement/scroll-animation/scroll-animation";
import "./fancy-list.scss";

const FancyList = (props) => {
  return (
    <ScrollAnimation>
      <div className={`fancy-list ${props.listType}`}>{props.children}</div>
    </ScrollAnimation>
  );
};

export default FancyList;
