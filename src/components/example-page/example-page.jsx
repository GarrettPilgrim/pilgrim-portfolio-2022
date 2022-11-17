import React from "react";
import "./example-page.scss";

const ExamplePage = (props) => {
  // Add embed={true} for each page to display embed and link
  const returnURL = (embed) => {
    if (embed === true && embed !== "") {
      return (
        <>
          <h2>Browse the site</h2>
          <div className="embed">
            <embed src={props.url}></embed>
          </div>
          <div className="example-page-link">
            <a href={props.url} target="_blank" rel="noreferrer">
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
    if (img !== "" || img !== undefined) {
      return <img src={props.img} alt={props.alt} />;
    }
    return "";
  };

  // add semantic tags <main> <section>
  return (
    <>
      <main className="example-page">
        <div className="example-page-cover">
          <h1>{props.name}</h1>
          {returnImage(props.img)}
        </div>
        <div className="example-page-text">{props.children}</div>
        {returnURL(props.embed)}
      </main>
    </>
  );
};

export default ExamplePage;
