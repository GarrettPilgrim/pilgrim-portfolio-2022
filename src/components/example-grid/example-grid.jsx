import React from "react";
import './example-grid.scss';

class Grid extends React.Component {
  render() {
    return (
      <>
        <section className="example-grid">
          {this.props.children}
        </section>
      </>
    );
  }
}

export default Grid;