import React from "react";
import "./example-page.scss";

class ExamplePage extends React.Component {
  render() {
    const returnURL = (url) => {
      if (url !== undefined) {
        return (
          <>
            <h2>Browse the site</h2>
            <div className="embed">
              <embed src={this.props.url}></embed>
            </div>
            <div className="example-page-link">
              <a href={this.props.url} target="_blank" rel="noreferrer">
                Visit the Site
              </a>
            </div>
          </>
        );
      }
      return "";
    };
    // add toggle boolean for embed to decide on each page to display or not

    // add if function to return img if img is defined

    // add semantic tags <main> <section>
    return (
      <>
        <div className="example-page">
          <div className="example-page-cover">
            <h1>{this.props.name}</h1>
            <img src={this.props.img} alt={this.props.alt} />
          </div>
          <div className="example-page-text">{this.props.children}</div>
          {returnURL(this.props.url)}
        </div>
      </>
    );
  }
}

export default ExamplePage;
