import React from "react";
import './example-grid.scss';

class Grid extends React.Component {
  render() {
    return (
      <>
        <div className="example-grid">
          {this.props.children}
        </div>
      </>
    );
  }
}

export default Grid;