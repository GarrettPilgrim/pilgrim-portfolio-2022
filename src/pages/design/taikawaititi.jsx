import React from "react";
import ExamplePage from "../../components/example-page/example-page";
import { design } from "../../info/info";

class TaikaWaititi extends React.Component {
  render() {
    return (
      <>
        <ExamplePage
          name={design.Waititi.name}
          img={design.Waititi.cover}
          alt={design.Waititi.alt}
        >
          <h2>The Ideas</h2>
          <p>
            I enjoy Taika Waititi's storytelling in film and TV. So, I decided
            to draw him and one of his characters, Glootie.
          </p>
          <h2>The Processes</h2>
          <p>
            For Waititi, I started with a reference image to outline the details
            I wanted to incorporate. Then, I began adding color and blending to
            create shadow effects and make the image less flat.
          </p>
          <p>
            For Glootie, I started similarly but veered off by adding one of
            Waititi's famous Hawaiian shirts.
          </p>
          <h3>The Tools</h3>
          <ul>
            <li>Fresco</li>
            <li>Photoshop</li>
          </ul>
        </ExamplePage>
      </>
    );
  }
}

export default TaikaWaititi;
