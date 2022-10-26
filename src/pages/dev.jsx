import React from "react";
import Grid from "../components/example-grid/example-grid";
import GridItem from "../components/example-grid/grid-item/grid-item";
import { dev } from "../info/info";

class Dev extends React.Component {
  render() {
    const getGridItems = (item) => {
      return (
        <GridItem
          header={item.name}
          subheader={item.subheader}
          cover={item.cover}
          link={item.link}
        />
      );
    };

    return (
      <>
        <h1>Dev</h1>
        <Grid>
          {getGridItems(dev.Caivrs)}
          {getGridItems(dev.Pslf)}
          {getGridItems(dev.Teachable)}
          {getGridItems(dev.PilgrimWedding)}
        </Grid>
      </>
    );
  }
}

export default Dev;
