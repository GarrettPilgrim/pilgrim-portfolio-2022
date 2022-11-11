import React from "react";
import "./fancy-list.scss";

const FancyList = (props) => {
  return (
    <>
      <div className={`fancy-list ${props.listType}`}>{props.children}</div>
    </>
  );
};

export default FancyList;
