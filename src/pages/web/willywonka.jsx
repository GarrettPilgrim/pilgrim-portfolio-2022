import React from "react";
import ExamplePage from "../../components/example-page/example-page";
import { web } from "../../info/info";

const WillyWonka = () => {
  return (
    <>
      <ExamplePage
        name={web.WillyWonka.name}
        url={web.WillyWonka.url}
        img={web.WillyWonka.cover}
        alt={web.WillyWonka.alt}
        github={web.WillyWonka.github}
        embed={true}
      >
        <h2>The Challenge</h2>
        <p>
          I built the site's basic UI using pure HTML and CSS live in class to
          teach students coding techniques and principles.
        </p>
        <p>
          These live coding sessions show the process of building a site and
          modern layout techniques such as grid and flex.
        </p>
        <h2>Refactoring</h2>
        <p>
          After the live coding sessions, I refactored the site into the Next.js
          framework.
        </p>
        <p>
          I created product pages with dynamic rendering based on markdown data
          and refined the design system with DRY code and component-based
          design.
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
