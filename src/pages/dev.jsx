import React from "react";
import Grid from "../components/example-grid/example-grid";
import GridItem from "../components/example-grid/grid-item/grid-item";
import { dev } from "../info/info";

class Dev extends React.Component {
  render() {
    return (
      <>
        <h1>Dev</h1>
        <Grid>
          <GridItem
            header={dev.Caivrs.name}
            subheader="two"
            cover=""
            link=""
          />
          <GridItem
            header={dev.Pslf.name}
            subheader="two"
            cover=""
            link=""
          />
          <GridItem
            header={dev.PilgrimWedding.name}
            subheader="two"
            cover=""
            link=""
          />
        </Grid>
      </>
    );
  }
}

export default Dev;