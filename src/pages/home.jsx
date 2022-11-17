import React from "react";
import Cover from "../components/cover/cover";
// import FancyList from "../components/fancy-list/fancy-list";
import Grid from "../components/example-grid/example-grid";
import GridItem from "../components/example-grid/grid-item/grid-item";
import DevCover from "../images/photos/dev-home.jpg";
import DesignCover from "../images/photos/design-home.jpg";
import MotionCover from "../images/photos/motion-home.jpg";
import ResumeCover from "../images/photos/resume-home.jpg";

const Home = () => {
  return (
    <>
      <Cover />
      <h2>See My Work</h2>
      <Grid>
        <GridItem
          cover={DevCover}
          alt=""
          header="Development"
          subheader="My professional and passion web projects"
          link="/dev"
        />
        <GridItem
          cover={DesignCover}
          alt=""
          header="Design"
          subheader="My work in design and illustrations"
          link="/design"
        />
        <GridItem
          cover={MotionCover}
          alt=""
          header="Motion"
          subheader="My work in motion graphics and animation"
          link="/motion"
        />
        {/* Add onion skin ball for cover image on motion */}
        <GridItem
          cover={ResumeCover}
          alt=""
          header="Resume"
          subheader="My jobs, educations, skills, and awards"
          link="/resume"
        />
        {/* Bullet list/ghost resume template for cover */}
      </Grid>
      <section className="centered-text">
        <h2>About</h2>
        <p>
          Two things I've done my whole life: Solve puzzles and build things.
        </p>
        <p>
          I enjoy finding solutions, from solving actual puzzles to beating
          video games to discovering why a component isn't working as expected.
        </p>
        <p>
          I love making things. Whether it's Lego sets, furniture, or websites,
          I get satisfaction in the building process and the completed product.
        </p>
        <p>
          These two cores in my life motivate me to build more than nice-looking
          websites or designs. They push me to create pages and materials to
          solve specific problems.
        </p>
        <h3>What are my goals?</h3>
        <p>
          I want to work in development and use my passions for problem solving
          and building to create beautiful, user-centered websites and
          applications.
        </p>
        <p>
          I want to further my knowledge of programming languages so I can build
          more complex systems that benefit users.
        </p>
        <p>
          I want to expand my creativity into animations both in development and
          in storytelling with short films.
        </p>
        <h3>Where did I start?</h3>
        <p>
          At first, I had dreams of becoming a journalist. I started in the
          Department of Journalism and Strategic Media at the University of
          Memphis. I quickly realized it wasn't right for me. I enjoyed many
          classes along the way, including one on photography, a course on the
          Adobe Creative programs, and an intro to logic of all things.
        </p>
        <p>
          Then, I switched majors to Advertising with a Marketing minor. This
          change allowed me to stay in the department and not extend my time in
          undergrad. Advertising first allowed me to pursue creativity with a
          strategic business mindset.
        </p>
        <p>
          When graduation approached, I still wanted to learn more about design,
          practice my creativity, and better apply my interests to a career.
          That's when I started the graduate program in visual media.
        </p>
        <p>
          While working on my master's degree, one class introduced me to the
          broader world of web development. In this class, I learned the
          foundations of HTML, CSS, Javascript, and responsive web design.
          That's when something clicked in my brain. I love to code.
        </p>
        <p>
          From then on, I took any chance to learn more about code, programming
          languages, ways to develop more efficiently, different techniques, and
          so much more. It was like putting glasses on for the first time. I
          could see a whole new world and wanted to learn everything I could
          about it.
        </p>
        <h3>What now?</h3>
        <p>
          Now I want to keep learning and growing my abilities to develop
          websites, apps, and programs to suit strategic needs, whether it's
          personal projects to hone my skills or a job that allows me to use and
          build my skills as a developer.
        </p>
        <p>
          Let's get in touch if you want to work with a nerd who knows how to
          write, thinks logically and strategically, loves code, enjoys puzzles,
          and likes to solve problems.
        </p>
      </section>
      {/* <h2>Something</h2>
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
        </FancyList> */}
    </>
  );
};

export default Home;
