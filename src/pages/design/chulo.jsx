import React from "react";
import ExamplePage from "../../components/example-page/example-page";
import { design } from "../../info/info";

const Chulo = () => {
  return (
    <>
      <ExamplePage name={design.Chulo.name}>
        <h2>The Idea</h2>
        <p>
          A family member asked me to create a design for a friend whose dog
          passed away. This illustration was a gift to remember the sweet pup.
        </p>
        <p>
          My idea was to convert a photo into a limited-color graphic and apply
          styled effects with either Photoshop or Fresco.
        </p>
        <h2>The Process</h2>
        <p>
          I brought a photo of the dog, Chulo, into Illustrator and started with
          an image trace. I adjusted the settings till the colors were to my
          liking. I then changed the hue and removed unnecessary details. My
          final step in Illustrator was adding the typography.
        </p>
        <p>
          From there are brought the vector into Fresco to add brush details and
          the splash color effect. Then I exported it to Photoshop to adjust the
          sizing and background color.
        </p>
        <h3>The Tools</h3>
        <ul>
          <li>Fresco</li>
          <li>Illustrator</li>
          <li>Photoshop</li>
        </ul>
      </ExamplePage>
    </>
  );
};

export default Chulo;
