import React from "react";
import Grid from "../components/example-grid/example-grid";
import { motion, getGridItems } from "../info/info";

class Motion extends React.Component {
  render() {
    return (
      <>
        <h1>Motion</h1>
        <Grid>
          {getGridItems(motion.Donut)}
          {getGridItems(motion.Udeany)}
        </Grid>
      </>
    );
  }
}

export default Motion;
