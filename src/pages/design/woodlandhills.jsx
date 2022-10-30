import React from "react";
import ExamplePage from "../../components/example-page/example-page";
import { design } from "../../info/info";

class WoodlandHills extends React.Component {
  render() {
    return (
      <>
        <ExamplePage name={design.WoodlandHills.name} />
      </>
    );
  }
}

export default WoodlandHills;
