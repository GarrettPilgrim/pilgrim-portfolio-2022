import React from "react";
import Grid from "../components/example-grid/example-grid";
import { dev, getGridItems } from "../info/info";

class Dev extends React.Component {
  render() {
    return (
      <>
        <h1>Dev</h1>
        <Grid>
          {getGridItems(dev.Caivrs)}
          {getGridItems(dev.Teachable)}
          {getGridItems(dev.PilgrimWedding)}
          {getGridItems(dev.Portfolio)}
          {/* {getGridItems(dev.WillyWonka)} */}
          {getGridItems(dev.Pslf)}
        </Grid>
      </>
    );
  }
}

export default Dev;
