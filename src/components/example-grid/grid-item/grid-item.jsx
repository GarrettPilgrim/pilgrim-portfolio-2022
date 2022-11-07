import React from "react";
import { Link } from "react-router-dom";
import "../example-grid.scss";

class GridItem extends React.Component {
  render() {
    return (
      <>
        <div className="example-grid-item">
          <img src={this.props.cover} alt={this.props.alt} />
          <Link to={this.props.link}>
            <div className="example-grid-item-text">
              <h2>
                {this.props.header}
                <br />
                <span>{this.props.subheader}</span>
              </h2>
            </div>
          </Link>
        </div>
      </>
    );
  }
}

export default GridItem;
