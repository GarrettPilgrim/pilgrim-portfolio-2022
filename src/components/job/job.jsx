import React from "react";
import "./job.scss";
import ScrollAnimation from "../movement/scroll-animation/scroll-animation";

const Job = (props) => {
  return (
    <ScrollAnimation>
      <div className="job">
        <div className="job-logo">{props.logo}</div>
        <div className="job-text">
          <h3>
            {props.title} <br />
            <span>{props.company}</span>
          </h3>
          <p>
            {props.start} to {props.end}
          </p>
          {props.description}
        </div>
      </div>
    </ScrollAnimation>
  );
};

export default Job;
