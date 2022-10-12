import React from "react";
import Job from "../components/job/job";
import { jobs } from "../info/info";

class Resume extends React.Component {
  render() {
    return (
      <>
        <h1>Resume</h1>
        <h2>Jobs</h2>
        <Job
          title={jobs.Udeany.title}
          company={jobs.Udeany.company}
          description={jobs.Udeany.description}
        />
        <h2>Education</h2>
        <h2>Skills</h2>
        <h2>Awards</h2>
      </>
    );
  }
}

export default Resume;