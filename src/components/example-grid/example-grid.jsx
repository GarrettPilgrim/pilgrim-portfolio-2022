import React from "react";
import "./example-grid.scss";

const Grid = (props) => {
  return (
    <>
      <section className="example-grid">{props.children}</section>
    </>
  );
};

export default Grid;
