import React from "react";
import './job.scss';

class Job extends React.Component {
  render() {
    return (
      <>
        <div className="job">
          <div className="job-logo">
            <img src={this.props.logo} alt={this.props.alt} />
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
      </>
    );
  }
}

export default Job;