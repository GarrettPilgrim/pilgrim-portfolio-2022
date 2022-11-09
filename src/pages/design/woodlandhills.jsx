import React from "react";
import ExamplePage from "../../components/example-page/example-page";
import { design } from "../../info/info";
import LawClaw from "../../images/photos/design/law-of-the-claw.jpg";
import VBS from "../../images/photos/design/vbs.jpg";
import SoftballMockups from "../../images/photos/design/softball-mockups.jpg";
import TrickRTrunk from "../../images/photos/design/trick-r-trunk.jpg";

const WoodlandHills = () => {
  return (
    <>
      <ExamplePage
        name={design.WoodlandHills.name}
        img={design.WoodlandHills.cover}
        alt={design.WoodlandHills.alt}
      >
        <h2>The Client</h2>
        <p>
          Woodland Hills Church of Christ is one of my clients who requests
          design and video help. The needs are usually promotional or outreach
          based.
        </p>
        <h2>Designs</h2>
        <figure>
          <img src={TrickRTrunk} alt="" />
          <figcaption>Trick R Trunk 2022 design.</figcaption>
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
          <img src={SoftballMockups} alt="" />
          <figcaption>Softball mockups that weren't meant to be.</figcaption>
        </figure>
        <h3>Softball Jerseys</h3>
        <p>
          When the church hosted a softball team, they asked me to design
          jerseys. The latest jersey went for a simple approach, integrating
          typography and the "wood" part of Woodland Hills.
        </p>
        <p>
          One of my jersey designs has yet to become a reality. The year I
          created a type-based idea, the pandemic happened, and the softball
          season was canceled. The church has yet to restart softball leaving
          the design in limbo.
        </p>
        <figure>
          <img src={VBS} alt="" />
          <figcaption>
            VBS shirt design following the fortress theme.
          </figcaption>
        </figure>
        <h3>VBS</h3>
        <p>
          Annually, the church requests t-shirts for VBS. The graphic needs
          depend upon the theme, but they usually give me broad creative
          freedom.
        </p>
        <p>
          Originally planned for 2020, the fortrest design was repurposed for
          VBS in 2021. I followed a block-style castle idea and warped the
          bottom to line up the theme name and verse.
        </p>
        <h3>VBS Puppet Team</h3>
        <figure>
          <img src={LawClaw} alt="" />
          <figcaption>A reward hoodie design for the puppet team.</figcaption>
        </figure>
        <p>
          As a surprise gift to the volunteers who worked puppets at the 2021
          VBS, I was asked to design a graphic for hoodies to give out.
        </p>
        <p>
          One of the main puppet characters was Crabby Carl who played a king.
          So I took inspiration from Law & Order to make Carl's "Law of the
          Claw" logo based on one of his lines in a skit.
        </p>
      </ExamplePage>
    </>
  );
};

export default WoodlandHills;
