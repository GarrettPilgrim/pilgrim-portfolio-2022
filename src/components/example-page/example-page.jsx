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
      return <img src={props.img} alt={props.alt} loading="lazy" />;
    }
    return "";
  };

  // Determines if the object has a Github link and returns an anchor to show the respository.
  const returnGit = (github) => {
    if (github !== undefined && github !== null && github !== "") {
      return (
        <>
          <div className="example-page-link">
            <a href={props.github} target="_blank" rel="noreferrer">
              View on Github
            </a>
          </div>
        </>
      );
    }
    return "";
  };

  return (
    <>
      <main className="example-page">
        <div className="example-page-cover">
          <h1>{props.name}</h1>
          {returnImage(props.img)}
        </div>
        <div className="example-page-text">{props.children}</div>
        {returnGit(props.github)}
        {returnURL(props.embed)}
      </main>
    </>
  );
};

export default ExamplePage;
