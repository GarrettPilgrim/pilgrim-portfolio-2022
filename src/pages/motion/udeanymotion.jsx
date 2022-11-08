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
          <h2>The Challenge</h2>
          <p>The Process</p>
        </ExamplePage>
      </>
    );
  }
}

export default UdeanyMotion;
