import React from "react";
import ExamplePage from "../../components/example-page/example-page";
import { motion } from "../../info/info";

class Donut extends React.Component {
  render() {
    return (
      <>
        <ExamplePage name={motion.Donut.name} />
      </>
    );
  }
}

export default Donut;
