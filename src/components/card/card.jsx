import React from "react";
import "./card.scss";

const Card = (props) => {
  return (
    <>
      <div className="card">
        <div className="card-text">
          <h3>
            {props.degree} <br />
            <span>{props.major}</span>
          </h3>
          <h4>
            {props.university + " "}
            <span>{props.year}</span>
          </h4>
          {props.description}
          <h5>Relevant Courses</h5>
          <ul>{props.courses}</ul>
        </div>
      </div>
    </>
  );
};

export default Card;
