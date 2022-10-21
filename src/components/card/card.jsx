import React from "react";
import './card.scss';

class Card extends React.Component {
  render() {
    return (
      <>
        <div className="card">
          <div className="card-img">
            <img src={this.props.img} alt={this.props.alt} />
          </div>
          <div className="card-text">
            <h3>
              {this.props.degree} <br />
              <span>{this.props.major}</span>
            </h3>
            <h4>{this.props.university + " "}
              <span>{this.props.year}</span>
            </h4>
            {this.props.description}
            <h5>Relevant Courses</h5>
            <ul>
              {this.props.courses}
            </ul>
          </div>
        </div>
      </>
    );
  }
}

export default Card;