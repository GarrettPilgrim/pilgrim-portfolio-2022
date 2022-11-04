import React from "react";
import "./example-page.scss";

class ExamplePage extends React.Component {
  render() {
    // Add embed={true} for each page to display embed and link
    const returnURL = (embed) => {
      if (embed === true) {
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

    // Determines if the object has an image assigned and returns <img> to DOM if true
    const returnImage = (img) => {
      if (img !== "") {
        return <img src={this.props.img} alt={this.props.alt} />;
      }
      return "";
    };

    // add semantic tags <main> <section>
    return (
      <>
        <main className="example-page">
          <div className="example-page-cover">
            <h1>{this.props.name}</h1>
            {returnImage(this.props.img)}
          </div>
          <div className="example-page-text">{this.props.children}</div>
          {returnURL(this.props.embed)}
        </main>
      </>
    );
  }
}

export default ExamplePage;
