import React from "react";
import Cover from "../components/cover/cover";
import FancyList from "../components/fancy-list/fancy-list";
import Grid from "../components/example-grid/example-grid";
import GridItem from "../components/example-grid/grid-item/grid-item";

class Home extends React.Component {
  render() {
    return (
      <>
        <Cover />
        <Grid>
          <GridItem cover="" alt="" header="Development" subheader="" link="/dev" />
          <GridItem cover="" alt="" header="Hello" subheader="" link="" />
          <GridItem cover="" alt="" header="Hello" subheader="" link="" />
          <GridItem cover="" alt="" header="Hello" subheader="" link="" />
        </Grid>
        <div className="centered-text">
          <h2>About</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Adipiscing commodo elit at imperdiet dui. Ipsum nunc aliquet
            bibendum enim facilisis gravida. Elementum integer enim neque
            volutpat ac tincidunt. Quam viverra orci sagittis eu volutpat odio
            facilisis mauris sit. Elementum tempus egestas sed sed risus pretium
            quam vulputate. Eu ultrices vitae auctor eu augue ut lectus arcu.
            Lacinia at quis risus sed vulputate odio. Diam in arcu cursus
            euismod quis. Adipiscing elit pellentesque habitant morbi tristique
            senectus et netus et. Id nibh tortor id aliquet lectus proin nibh
            nisl condimentum. Faucibus pulvinar elementum integer enim. Morbi
            blandit cursus risus at ultrices mi. Ut sem nulla pharetra diam sit
            amet nisl suscipit adipiscing. Id consectetur purus ut faucibus
            pulvinar elementum.
          </p>
        </div>
        <FancyList listType="nested-list">
          <div className="nested-list-item">
            <h3>Hello</h3>
            <p>
              <em>
                Some Item
                <br />
                Sub head
              </em>
            </p>
            <p>lots of text here</p>
          </div>
          <div className="nested-list-item">
            <h3>Hello</h3>
            <p>
              <em>
                Some Item
                <br />
                Sub head
              </em>
            </p>
            <p>lots of text here</p>
          </div>
        </FancyList>
      </>
    );
  }
}

export default Home;
