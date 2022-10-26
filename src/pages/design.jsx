import React from "react";
import Grid from "../components/example-grid/example-grid";
import { design, getGridItems } from "../info/info";

class Design extends React.Component {
  render() {
    return (
      <>
        <h1>Design</h1>
        <Grid>
          {getGridItems(design.Waititi)}
          {getGridItems(design.Ahsoka)}
          {getGridItems(design.Chulo)}
          {getGridItems(design.WoodlandHills)}
        </Grid>
      </>
    );
  }
}

export default Design;
