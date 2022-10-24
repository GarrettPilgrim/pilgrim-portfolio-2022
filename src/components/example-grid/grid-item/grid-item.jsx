import React from "react";
import { Link } from "react-router-dom";
import '../example-grid.scss';

class GridItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <>
        <Link className="example-grid-item" to={this.props.link}>
          <img src={this.props.img} />
          <div>
            <h2>{this.props.header}<br />
              <span>{this.props.subheader}</span>
            </h2>
          </div>
        </Link>
      </>
    );
  }
}

export default GridItem;