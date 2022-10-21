import React from "react";
import Card from "../components/card/card";
import Job from "../components/job/job";
import { jobs, edu } from "../info/info";

class Resume extends React.Component {
  render() {
    const getJobs = (job) => {
      return <Job
        title={job.title}
        company={job.company}
        description={job.description}
        start={job.start}
        end={job.end}
        logo={job.logo}
        alt={job.alt}
      />
    }

    const getDegree = (degree) => {
      return <Card
        degree={degree.degree}
        major={degree.major}
        minor={degree.minor}
        university={degree.university}
        year={degree.year}
        description={degree.description}
        courses={getCourses(degree.courses)}
        img={degree.img}
        alt={degree.alt}
      />
    }

    const getCourses = (courseArr) => {
      return courseArr.map(i => <li>{i}</li>);
    }

    return (
      <>
        <h1>Resume</h1>
        <section>
          <h2>Jobs</h2>
          {getJobs(jobs.Udeany)}
          {getJobs(jobs.Adjunct)}
          {getJobs(jobs.Mayflower)}
          {getJobs(jobs.Graduate)}
          {getJobs(jobs.Director)}
          {getJobs(jobs.Lead)}
          {getJobs(jobs.Signature)}
          {getJobs(jobs.Baptist)}
          {getJobs(jobs.Choose901)}
        </section>
        <section>
          <h2>Education</h2>
          {getDegree(edu.Grad)}
          {getDegree(edu.Undergrad)}
          {/* <Card className="grad">
            <h3>{edu.Grad.degree} <br />
              <span>{edu.Grad.major}</span>
            </h3>
            <p>{edu.Grad.year}</p>
          </Card> */}
          {/* <Card className="undergrad">
            <h3>{edu.Undergrad.degree} <br />
              <span>{edu.Undergrad.major}</span>
            </h3>
            <p>{edu.Undergrad.year}</p>
          </Card> */}
        </section>
        <h2>Skills</h2>
        <h2>Awards</h2>
      </>
    );
  }
}

export default Resume;