import React from "react";
import ExamplePage from "../../components/example-page/example-page";
import { design } from "../../info/info";

class Ahsoka extends React.Component {
  render() {
    return (
      <>
        <ExamplePage
          name={design.Ahsoka.name}
        />
      </>
    );
  }
}

export default Ahsoka;