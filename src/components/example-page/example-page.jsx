import React from "react";
import "./example-page.scss";

class ExamplePage extends React.Component {
  render() {
    return (
      <>
        <div className="example-page">
          <div className="example-page-cover">
            <h1>{this.props.name}</h1>
            <img src={this.props.img} alt="" />
          </div>
          <div className="example-page-text">{this.props.children}</div>
          <embed src={this.props.url}></embed>
        </div>
      </>
    );
  }
}

export default ExamplePage;
