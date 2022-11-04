import React from "react";
import ExamplePage from "../../components/example-page/example-page";
import { design } from "../../info/info";

const WoodlandHills = () => {
  return (
    <>
      <ExamplePage name={design.WoodlandHills.name}>
        <h2>The Client</h2>
        <p>
          Woodland Hills Church of Christ is one of my clients who requests
          design and video help. The needs are usually promotional or outreach
          based.
        </p>
        <h2>Designs</h2>
        <figure>
          <img src="" alt="" />
          <figcaption></figcaption>
        </figure>
        <h3>Trick R Trunk</h3>
        <p>
          In October 2022, Woodland Hills asked for a social media promo graphic
          for the Trick R Trunk event. The client asked to include the event
          name, date and time, price, and amenities on the digital flyer.
        </p>
        <p>
          I wanted to show an open trunk with the information displayed on the
          open door and sitting inside the compartment. I used pumpkins for the
          amenities because they were the "treats" of the event. I also wanted
          to bring in some spookiness with webs and mist.
        </p>
        <p>
          I started with Illustrator to create the trunk, webs, and pumpkins and
          work with typography. Then I moved into Fresco to add the haze effect
          over the car.
        </p>
        <figure>
          <img src="" alt="" />
          <figcaption></figcaption>
        </figure>
        <h3>Softball Jerseys</h3>
        <p>
          When the church hosted a softball team, they asked me to design
          jerseys. One year I created the Woodland Hills mascot and never
          actually named it.
        </p>
        <p>
          One of my jersey designs has yet to become a reality. The year I
          created a type-based idea, the pandemic happened, and the softball
          season was canceled. The church has yet to restart softball leaving
          the design in limbo.
        </p>
        <figure>
          <img src="" alt="" />
          <figcaption></figcaption>
        </figure>
        <h3>VBS</h3>
        <p>
          Annually, the church requests t-shirts for VBS. The graphic needs
          depend upon the theme, but they usually give me broad creative
          freedom.
        </p>
      </ExamplePage>
    </>
  );
};

export default WoodlandHills;
