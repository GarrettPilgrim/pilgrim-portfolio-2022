import React from "react";
import '../example-grid.scss';

class GridItem extends React.Component {
  constructor(props) {
    super(props)
  }


  render() {
    return (
      <>
        <a className="example-grid-item" href={this.props.link}>
          <img src={this.props.img} />
          <div>
            <h2>{this.props.header}<br />
              <span>{this.props.subheader}</span>
            </h2>
          </div>
        </a>
      </>
    );
  }
}

export default GridItem;