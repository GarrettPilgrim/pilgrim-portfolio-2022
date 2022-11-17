import React from "react";
import ExamplePage from "../../components/example-page/example-page";
import { dev } from "../../info/info";

const WillyWonka = () => {
  return (
    <>
      <ExamplePage
        name={dev.WillyWonka.name}
        url={dev.WillyWonka.url}
        img={dev.WillyWonka.cover}
        alt={dev.WillyWonka.alt}
      >
        <h2>The Problem</h2>

        <h2>The Strategy</h2>

        <h2>The Solution</h2>

        <h2>The Results</h2>

        <h3>The Tools</h3>
        <ul>
          <li></li>
          <li></li>
        </ul>
      </ExamplePage>
    </>
  );
};

export default WillyWonka;
