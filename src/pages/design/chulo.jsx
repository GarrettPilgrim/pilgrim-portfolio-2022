import React from "react";
import ExamplePage from "../../components/example-page/example-page";
import { design } from "../../info/info";

class Chulo extends React.Component {
  render() {
    return (
      <>
        <ExamplePage
          name={design.Chulo.name}
        />
      </>
    );
  }
}

export default Chulo;