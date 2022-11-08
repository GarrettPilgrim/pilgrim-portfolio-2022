import React from "react";
import ExamplePage from "../../components/example-page/example-page";
import { motion } from "../../info/info";

class Donut extends React.Component {
  render() {
    return (
      <>
        <ExamplePage
          name={motion.Donut.name}
          img={motion.Donut.cover}
          alt={motion.Donut.alt}
        >
          <h2>The Challenge</h2>
          <p></p>
          <h2>The Process</h2>
        </ExamplePage>
      </>
    );
  }
}

export default Donut;
