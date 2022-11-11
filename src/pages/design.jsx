import React from "react";
import Grid from "../components/example-grid/example-grid";
import { design, getGridItems } from "../info/info";

const Design = () => {
    return (
      <>
        <h1>Design</h1>
        <Grid>
          {getGridItems(design.WoodlandHills)}
          {getGridItems(design.Waititi)}
          {getGridItems(design.Ahsoka)}
          {getGridItems(design.Chulo)}
        </Grid>
      </>
    );
  }

export default Design;
