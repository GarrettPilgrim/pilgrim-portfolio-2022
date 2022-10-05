import React from "react";
import './example-grid.scss';

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
            <h2>Hello There</h2>
          </div>
          <div className="example-grid-item">
            <img />
            <h2>Hello There</h2>
          </div>
          <div className="example-grid-item">
            <img />
            <h2>Hello There</h2>
          </div>
          <div className="example-grid-item">
            <img />
            <h2>Hello There</h2>
          </div>
        </div>
       </>
    );
  }
}

export default Grid;