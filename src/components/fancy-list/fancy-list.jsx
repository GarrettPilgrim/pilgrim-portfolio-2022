import React from "react";
import './fancy-list.scss';

class FancyList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <>
        <div className="fancy-list">
          {this.props.children}
        </div>
      </>
    );
  }
}

export default FancyList;