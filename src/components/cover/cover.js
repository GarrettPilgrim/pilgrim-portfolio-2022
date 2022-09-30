import React from "react";
import './cover.scss';
import headshot from "../../images/photos/headshot.png"

class Cover extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="cover-frame">
        <div className="first-column">
          <h1>Garrett Pilgrim</h1>
          <span>Developer and Designer</span>
        </div>
        <div className="second-column">
          <img src={headshot}></img>
          <div className="circle"></div>
        </div>
      </div>
    )
  }
}

export default Cover