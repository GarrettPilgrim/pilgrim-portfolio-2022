import React from "react";
import './example-grid.scss';
import { jobs } from "../../info/info";

class Grid extends React.Component {
  constructor(props) {
    super(props)
  }


  render() {
    return (
      <>
        <div className="example-grid">
          <div className="example-grid-item">
            <img src="https://placekitten.com/500/500" />
            <div>
              <h2>{jobs.Udeany.title}<br />
                <span>{jobs.Udeany.company}</span>
              </h2>
            </div>
          </div>
          <div className="example-grid-item">
            <img />
            <div>
              <h2>{jobs.Adjunct.title}<br />
                <span>{jobs.Adjunct.company}</span>
              </h2>
            </div>
          </div>
          <div className="example-grid-item">
            <img />
            <div>
              <h2>{jobs.Udeany.title}<br />
                <span>company</span>
              </h2>
            </div>
          </div>
          <div className="example-grid-item">
            <img />
            <div>
              <h2>{jobs.Udeany.title}<br />
                <span>company</span>
              </h2>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Grid;