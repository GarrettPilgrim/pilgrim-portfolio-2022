import React from "react";
import "./example-page.scss";

class ExamplePage extends React.Component {
  render() {
    return (
      <>
        <div className="example-page">
          <div className="example-page-cover">
            <h1>{this.props.name}</h1>
            <img src={this.props.img} alt={this.props.alt} />
          </div>
          <div className="example-page-text">{this.props.children}</div>
          <div className="embed">
            <embed src={this.props.url}></embed>
          </div>
          <div className="example-page-link">
            <a href={this.props.url} target="_blank" rel="noreferrer">
              Visit the Site
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default ExamplePage;
