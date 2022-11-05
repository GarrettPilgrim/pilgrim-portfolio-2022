import React from "react";
import ExamplePage from "../../components/example-page/example-page";
import { dev } from "../../info/info";

class Teachable extends React.Component {
  render() {
    return (
      <>
        <ExamplePage
          name={dev.Teachable.name}
          url={dev.Teachable.url}
          img={dev.Teachable.cover}
          alt={dev.Teachable.alt}
        ></ExamplePage>
      </>
    );
  }
}

export default Teachable;
