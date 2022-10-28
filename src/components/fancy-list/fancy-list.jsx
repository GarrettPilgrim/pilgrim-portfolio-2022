import React from "react";
import './fancy-list.scss';

class FancyList extends React.Component {
  render() {
    return (
      <>
        <div className={`fancy-list ${this.props.listType}`}>
          {this.props.children}
        </div>
      </>
    );
  }
}

export default FancyList;