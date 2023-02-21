import React from "react";
import ExamplePage from "../../components/example-page/example-page";
import { web } from "../../info/info";

class Teachable extends React.Component {
  render() {
    return (
      <>
        <ExamplePage
          name={web.Teachable.name}
          url={web.Teachable.url}
          img={web.Teachable.cover}
          alt={web.Teachable.alt}
        >
          <h2>The Problem</h2>
          <p>
            Udeany wanted to transform the core processes and services into a
            web-based course to guide clients through their needs to remove the
            overwhelming amount of texts, phone calls, and emails to explain
            each step.
          </p>
          <h2>The Strategy</h2>
          <p>
            For each step of the course, I lead the video production efforts.
            You can learn more about the videography work under the motion page.
          </p>
          <p>
            We decided to use an existing system for the course website to speed
            up the development process. Teachable is a leading course builder,
            and Udeany already had an account.
          </p>
          <p>
            Flexibility was a major requirement for the ecourse. Student loan
            information constantly changes, and the site would eventually need
            updates.
          </p>
          <h2>The Solution</h2>
          <p>
            Using the Teachable platform, I built the course pages, including
            the videos and edited course content for web use.
          </p>
          <p>
            I created the homepage as a funnel to direct users to the course
            that best met their needs. I also made a template for each course's
            sales page for reuse in future updates.
          </p>
          <p>
            Building the pages included reworking copy to optimize for search,
            creating proper marketing funnels for landing pages (home, specific
            courses), creating branded web graphics, and laying out the content
            in digestible chunks for users.
          </p>
          <h2>The Results</h2>
          <p>
            Udeany was able to transition all client services to the Teachable
            courses allowing the company to guide users through the processes
            and decreasing time-per-client substantially.
          </p>
          <p>
            The courses reduced the number of calls, texts, and emails and
            limited hour-long consultation calls to one per client — and
            eventually eliminated the consultation call.
          </p>
          <p>
            The course site also enabled Udeany to adjust based on demand and
            changes to student loan systems. What started as a single student
            loan course converted into six specialized courses tailored to
            individual issues.
          </p>
          <h3>The Tools</h3>
          <ul>
            <li>Teachable</li>
            <li>Photoshop</li>
          </ul>
        </ExamplePage>
      </>
    );
  }
}

export default Teachable;
