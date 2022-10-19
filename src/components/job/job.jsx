import React from "react";
import './job.scss';

class Job extends React.Component {
  render() {
    return (
      <>
        <div className="job">
          <img src={this.props.logo} alt={this.props.alt} />
          <div className="job-text">
            <h3>
              {this.props.title} <br />
              <span>{this.props.company} — </span>
              <span>{this.props.start} to {this.props.end}</span>
            </h3>
            {this.props.description}
          </div>
        </div>
      </>
    );
  }
}

export default Job;