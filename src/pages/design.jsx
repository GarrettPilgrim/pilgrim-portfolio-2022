import React from "react";
import Grid from "../components/example-grid/example-grid";
import GridItem from "../components/example-grid/grid-item/grid-item";

class Design extends React.Component {
  render() {
    return (
      <>
        <h1>Design</h1>
        <Grid>
          <GridItem />
          <GridItem />
          <GridItem />
          <GridItem />
        </Grid>
      </>
    );
  }
}

export default Design;