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
        <h2>The Challenge</h2>
        <p>
          The UI for the site was built using pure HTML and CSS live in class to
          demonstrate coding techniques and principles to students.
        </p>
        <p>
          These live coding session show the process of buidling a site and
          modern layout techniques such as grid and flex.
        </p>
        <h2>Refactoring</h2>
        <p>
          After the live coding sessions, I refactored the site into the Next.js
          framework.
        </p>
        <p>
          I created product pages with dynamic rendering based on markdown data
          and refined design system with DRY code and component-based design.
        </p>
        <h3>The Tools</h3>
        <ul>
          <li>APIs</li>
          <li>Component-based design</li>
          <li>CSS</li>
          <li>HTML</li>
          <li>Javascript</li>
          <li>Next.js</li>
          <li>React</li>
          <li>UI/UX</li>
        </ul>
      </ExamplePage>
    </>
  );
};

export default WillyWonka;
