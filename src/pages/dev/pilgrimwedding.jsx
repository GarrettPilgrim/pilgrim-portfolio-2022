import React from "react";
import ExamplePage from "../../components/example-page/example-page";
import { dev } from "../../info/info";

class PilgrimWedding extends React.Component {
  render() {
    return (
      <>
        <ExamplePage
          name={dev.PilgrimWedding.name}
          url={dev.PilgrimWedding.url}
          img={dev.PilgrimWedding.cover}
          alt={dev.PilgrimWedding.alt}
          github={dev.PilgrimWedding.github}
        >
          <h2>The Need</h2>
          <p>
            Everyone needs a wedding website. These sites allow guests to RSVP,
            link to registries, and give important information about the wedding
            day.
          </p>
          <p>
            Rather than use a typical website builder, I took the challenge to
            build the site using the React-based framework, Gatsby.
          </p>
          <h2>The Challenge</h2>
          <p>
            I wanted to become more familiar with Gatsby and React, so I used
            the opportunity to build a wedding landing page to learn.
          </p>
          <p>
            Key points concepts I wanted to work with were CSS-in-JS, styled
            components, component-based development, launching with Netlify, and
            handling form submissions.
          </p>
          <h3>Skills and Tools</h3>
          <ul>
            <li>Component-based design</li>
            <li>CSS</li>
            <li>CSS-in-JS</li>
            <li>Git</li>
            <li>GitHub</li>
            <li>HTML</li>
            <li>JavaScript</li>
            <li>JSX</li>
            <li>Netlify</li>
            <li>Static progressive web app</li>
            <li>Styled-components</li>
          </ul>
        </ExamplePage>
      </>
    );
  }
}

export default PilgrimWedding;
