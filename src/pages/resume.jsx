import React from "react";
import Card from "../components/card/card";
import GridItem from "../components/example-grid/grid-item/grid-item";
import FancyList from "../components/fancy-list/fancy-list";
import Job from "../components/job/job";
import { jobs, edu, skills, awards } from "../info/info";

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
        courses={getArr(degree.courses)}
        img={degree.img}
        alt={degree.alt}
      />
    }

    const getAwards = (i) => {
      return <li>
        {i.award} <br />
        {i.from} <br />
        {i.date}
      </li>
    }

    const getArr = (Arr) => {
      return Arr.map(i => <li>{i}</li>);
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
        </section>
        <section>
          <h2>Skills</h2>
          <FancyList>
            <ul>
              {getArr(skills)}
            </ul>
          </FancyList>
        </section>
        <section>
          <h2>Awards</h2>
          <FancyList>
            <ul>
              {getAwards(awards.aejmc)}
              {getAwards(awards.adfed)}
              {getAwards(awards.meeman901)}
              {getAwards(awards.ron)}
            </ul>
          </FancyList>
        </section>
      </>
    );
  }
}

export default Resume;