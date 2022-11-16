import React from "react";
import ExamplePage from "../../components/example-page/example-page";
import { motion } from "../../info/info";
import DonutVideo from "../../images/video/3d-donut-video.mp4";

class Donut extends React.Component {
  render() {
    return (
      <>
        <ExamplePage
          name={motion.Donut.name}
          img={motion.Donut.cover}
          alt={motion.Donut.alt}
        >
          <h2>The Animation</h2>
          <video
            controls="controls"
            controlsList="nodownload"
            preload="metadata"
            loop
          >
            <source src={DonutVideo} />
          </video>
          <h2>The Challenge</h2>
          <p>
            I started with a tutorial from{" "}
            <a href="https://www.youtube.com/watch?v=nIoXOplUvAw&list=PLjEaoINr3zgFX8ZsChQVQsuDSjEqdWMAD">
              the Blender Guru.
            </a>{" "}
            In the process, I learned how to create objects, shape them with
            geometry and a stylus, build an environment, and animate the objects
            within that environment.
          </p>
          <h2>The Process</h2>
          <p>
            I followed the each step of the tutorial video and kept the donut
            theme. However, I put my own spin on the styling, effects, and
            animation process.
          </p>
          <p>
            This tutorial series helped me better understand Blender, lighting,
            effects, textures, rendering, and animation.
          </p>
          <h3>The Tools</h3>
          <ul>
            <li>Blender</li>
            <li>Wacom Stylus</li>
            <li>YouTube</li>
          </ul>
        </ExamplePage>
      </>
    );
  }
}

export default Donut;
