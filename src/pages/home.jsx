import React from "react";
import Cover from "../components/cover/cover";
import FancyList from "../components/fancy-list/fancy-list";
import Grid from "../components/example-grid/example-grid";
import GridItem from "../components/example-grid/grid-item/grid-item";
import DevCover from "../images/photos/development-cover.jpg"

class Home extends React.Component {
  render() {
    return (
      <>
        <Cover />
        <Grid>
          <GridItem
            cover={DevCover}
            alt=""
            header="Development"
            subheader="My professional and passion web projects"
            link="/dev"
          />
          <GridItem
            cover={DevCover}
            alt=""
            header="Design"
            subheader="My work in design and illustrations"
            link="/design"
          />
          <GridItem
            cover={DevCover}
            alt=""
            header="Motion"
            subheader="My work in motion graphics and animation"
            link="/motion"
          />
          {/* Add onion skin ball for cover image on motion */}
          <GridItem
            cover={DevCover}
            alt=""
            header="Resume"
            subheader="My jobs, educations, skills, and awards"
            link="/resume"
          />
          {/* Bullet list/ghost resume template for cover */}
        </Grid>
        <div className="centered-text">
          <h2>About</h2>
          <p>
            Two things I've done my whole life: Solve puzzles and build things.
          </p>
          <p>
            I enjoy finding solutions, from solving actual puzzles to beating
            video games to discovering why a component isn't working as
            expected.
          </p>
          <p>
            I love making things. Whether it's Lego sets, furniture, or
            websites, I get satisfaction in the building process and the
            completed product.
          </p>
          <p>
            These two cores in my life motivate me to build more than
            nice-looking websites or designs. They push me to create pages and
            materials to solve specific problems.
          </p>
          <h3>What are My Goals?</h3>
          <p>
            I want to work in development and use my passions for problem
            solving and building to create beautiful, user-centered websites and
            applications.
          </p>
          <p>
            I want to further my knowledge of programming languages so I can
            build more complex systems that benefit users.
          </p>
          <p>
            I want to expand my creativity into animations both in development
            and in storytelling with short films.
          </p>
        </div>
        <h2>Something</h2>
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
