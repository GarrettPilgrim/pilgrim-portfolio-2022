import React from "react";
import ExamplePage from "../../components/example-page/example-page";
import { design } from "../../info/info";

class TaikaWaititi extends React.Component {
  render() {
    return (
      <>
        <ExamplePage name={design.Waititi.name} />
      </>
    );
  }
}

export default TaikaWaititi;
