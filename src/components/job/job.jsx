import React from "react";
import './job.scss';
import ScrollAnimation from "../movement/scroll-animation/scroll-animation";

class Job extends React.Component {
  render() {
    return (
      <ScrollAnimation>
        <div className="job">
          <div className="job-logo">
            {this.props.logo}
          </div>
          <div className="job-text">
            <h3>
              {this.props.title} <br />
              <span>{this.props.company}</span>
            </h3>
            <p>{this.props.start} to {this.props.end}</p>
            {this.props.description}
          </div>
        </div>
      </ScrollAnimation>
    );
  }
}

export default Job;