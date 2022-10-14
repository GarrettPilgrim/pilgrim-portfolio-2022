import React from "react";
import './job.scss';

class Job extends React.Component {
  render() {
    return (
      <>
        <div className="job">
          <img src="https://udeany.files.wordpress.com/2022/01/flowerasset-4udeanylogo.png?w=98&h=40" />
          <div className="job-text">
            <h3>
              {this.props.title} <br />
              <span>{this.props.company} — </span>
              <span>{this.props.start } to {this.props.end}</span>
            </h3>
            {this.props.description}
          </div>
        </div>
      </>
    );
  }
}

export default Job;