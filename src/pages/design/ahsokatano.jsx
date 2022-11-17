import React from "react";
import ExamplePage from "../../components/example-page/example-page";
import { design } from "../../info/info";
import AhsokaOnPage from "../../images/photos/design/ahsoka-on-page.jpg";

const Ahsoka = () => {
  return (
    <>
      <ExamplePage
        name={design.Ahsoka.name}
        img={design.Ahsoka.cover}
        alt={design.Ahsoka.alt}
      >
        <h2>The Idea</h2>
        <p>
          Star Wars is my favorite fictional universe and has been since
          childhood. I grew fond of the Clone Wars TV series, and as soon as
          Ahsoka made her live-action debut in The Mandalorian, I was giddy.
        </p>
        <p>
          The beautiful film work on her first episode inspired me to recreate a
          moment using Adobe Fresco. I used it as a challenge to practice my
          illustration skills and digitally paint Ahsoka.
        </p>
        <h3>The Process</h3>
        <p>
          I started out drawing Ahsoka in Adobe Fresco by lining out the
          details. Then I brought in color for her face and layered her lekku
          over the top.
        </p>
        <p>
          I also added her outfit so not to have just a floating head. And drew
          highlights and shadows.
        </p>
        <figure>
          <img
            src={AhsokaOnPage}
            alt="Ahsoka Tano lightsaber hilt illustration with an up close view and a blade on view."
          />
          <figcaption>
            Ahsoka Tano's hilt illustration and illuminated blade.
          </figcaption>
        </figure>
        <p>
          A key element was still needed: Her lightsaber. I decided it best to
          built the lightsaber hilt and base blade in Illustrator so I could get
          the details more precise (it is metal after all). Then I brought the
          blade into Fresco and layered a hue around the edges to create a
          glowing effect.
        </p>
        <p>
          After adding the lightsaber, I adjusted the shadows a bit more to
          match the blades light. I also sketched out her hand over the hilt as
          well as added her arm extending out of the robes/poncho.
        </p>
        {/* <h2>The Creation</h2> */}
        <h3>The Tools</h3>
        <ul>
          <li>Illustrator</li>
          <li>Fresco</li>
        </ul>
      </ExamplePage>
    </>
  );
};

export default Ahsoka;
