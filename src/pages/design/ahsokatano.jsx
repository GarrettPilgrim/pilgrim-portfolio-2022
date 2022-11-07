import React from "react";
import ExamplePage from "../../components/example-page/example-page";
import { design } from "../../info/info";

const Ahsoka = () => {
  return (
    <>
      <ExamplePage
        name={design.Ahsoka.name}
        img={design.Ahsoka.cover}
        alt={design.Ahsoka.alt}
      >
        <h2>The Idea</h2>
        <p>
          Star Wars is my favorite fictional universe and has been since
          childhood. I grew fond of the Clone Wars TV series, and as soon as
          Ahsoka made her live-action debut in The Mandalorian, I was giddy.
        </p>
        <p>
          The beautiful film work on her first episode inspired me to recreate a
          moment using Adobe Fresco. I used it as a challenge to practice my
          illustration skills and digitally paint Ahsoka.
        </p>
        {/* <h2>The Creation</h2> */}
        <h3>The Tools</h3>
        <ul>
          <li>Illustrator</li>
          <li>Fresco</li>
        </ul>
      </ExamplePage>
    </>
  );
};

export default Ahsoka;
