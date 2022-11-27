import React from "react";
import { Link } from "react-router-dom";
import "../example-grid.scss";

const GridItem = (props) => {
  return (
    <>
      <div className="example-grid-item">
        <img src={props.cover} alt={props.alt} width="700" height="394" />
        <Link to={props.link}>
          <div className="example-grid-item-text">
            <h2>
              {props.header}
              <br />
              <span>{props.subheader}</span>
            </h2>
          </div>
        </Link>
      </div>
    </>
  );
};

export default GridItem;
