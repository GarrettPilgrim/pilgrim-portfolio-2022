import React from "react";
import ExamplePage from "../../components/example-page/example-page";
import { dev } from "../../info/info";

const ThisPortfolio = () => {
  return (
    <>
      <ExamplePage
        name={dev.Portfolio.name}
        url={dev.Portfolio.url}
        img={dev.Portfolio.cover}
        alt={dev.Portfolio.alt}
      >
        <h2>The Problem</h2>

        <h2>The Strategy</h2>

        <h2>The Solution</h2>

        <h2>The Results</h2>

        <h3>The Tools</h3>
        <ul>
          <li>Teachable</li>
          <li>Photoshop</li>
        </ul>
      </ExamplePage>
    </>
  );
};

export default ThisPortfolio;
