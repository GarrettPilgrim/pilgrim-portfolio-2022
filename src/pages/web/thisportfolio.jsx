import React from "react";
import ExamplePage from "../../components/example-page/example-page";
import { web } from "../../info/info";

const ThisPortfolio = () => {
  return (
    <>
      <ExamplePage
        name={web.Portfolio.name}
        url={web.Portfolio.url}
        github={web.Portfolio.github}
        img={web.Portfolio.cover}
        alt={web.Portfolio.alt}
      >
        <h2>The Problem</h2>
        <p>
          It's the usual problem. How do you present your skills to potential
          employers or clients? Compile some of your best work into a shareable
          site.
        </p>
        <p>
          My last portfolio was difficult to update and maintain. A key part of
          this portfolio was to make maintainence easier.
        </p>
        <h2>The Solution</h2>
        <p>
          I decided to utilize React, components, and an object-based database
          to control the content of this portfolio. The primary goal was to make
          changes easy and to simplify the updating process.
        </p>
        <p>
          Some global style controls allow for site-wide changes to color, type,
          and breakpoints.
        </p>
        <p>
          The components allow for easy updates to individual, reuasable parts
          of the site without much hassle.
        </p>
        <p>
          All code runs through tests before pushing to the primary Git branch.
          Then, I merge the development branch with the production branch on
          Github which automatically runs more tests before deployment to
          Netlify.
        </p>
        <h3>The Tools</h3>
        <ul>
          <li>Babel</li>
          <li>CI/CD</li>
          <li>Components</li>
          <li>Illustrator</li>
          <li>ESLint</li>
          <li>Github</li>
          <li>JavaScript</li>
          <li>Jest</li>
          <li>JSX</li>
          <li>Netlify</li>
          <li>Photoshop</li>
          <li>React</li>
          <li>SCSS/SASS</li>
          <li>Webpack</li>
        </ul>
      </ExamplePage>
    </>
  );
};

export default ThisPortfolio;
