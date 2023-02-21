import React from "react";
import Grid from "../components/example-grid/example-grid";
import { web, getGridItems } from "../info/info";

const Web = () => {
  return (
    <>
      <h1>Web</h1>
      <Grid>
        {getGridItems(web.WillyWonka)}
        {getGridItems(web.Caivrs)}
        {getGridItems(web.Teachable)}
        {getGridItems(web.PilgrimWedding)}
        {getGridItems(web.Portfolio)}
        {getGridItems(web.Pslf)}
      </Grid>
    </>
  );
};

export default Web;
