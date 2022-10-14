import React from "react";
import Grid from "../components/example-grid/example-grid";
import GridItem from "../components/example-grid/grid-item/grid-item";

class Motion extends React.Component {
  render() {
    return (
      <>
        <h1>Motion</h1>
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

export default Motion;