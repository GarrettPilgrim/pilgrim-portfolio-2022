import React from "react";
import ExamplePage from "../../components/example-page/example-page";
import { design } from "../../info/info";

const BobRoss = () => {
  return (
    <>
      <ExamplePage name={design.BobRoss.name}></ExamplePage>
    </>
  );
};

export default BobRoss;
