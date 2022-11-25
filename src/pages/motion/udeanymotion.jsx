import React from "react";
import ExamplePage from "../../components/example-page/example-page";
import { motion } from "../../info/info";

class UdeanyMotion extends React.Component {
  render() {
    return (
      <>
        <ExamplePage
          name={motion.Udeany.name}
          img={motion.Udeany.cover}
          alt={motion.Udeany.alt}
        >
          <h2>Example Video</h2>
          <video
            controls="controls"
            controlsList="nodownload"
            preload="metadata"
          >
            <source src="" />
          </video>
          <h2>The Need</h2>
          <p>
            I guided the production of ecourse and promotional content for
            Udeany. The major film and motion graphics needs were
            interview-style videos for the course steps, b-roll screen
            recordings, and reusable motion graphics for critical points.
          </p>
          <h2>The Process</h2>
          <p>
            I created reusable and adjustable templates for the motion graphics
            based on text and video needs.
          </p>
          <p>
            For the video production, I started hands-on to set up the scene and
            ensure high-quality audio. Once I completed making a reliable mini
            studio, Udeany's president could record video/audio whenever he
            wanted and share the clips with me for editing.
          </p>
          <h3>The Tools</h3>
          <ul>
            <li>After Effects</li>
            <li>Photoshop</li>
            <li>Premiere Pro</li>
          </ul>
        </ExamplePage>
      </>
    );
  }
}

export default UdeanyMotion;
