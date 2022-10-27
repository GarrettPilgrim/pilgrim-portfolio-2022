import React from "react";
import ExamplePage from "../../components/example-page/example-page";
import { dev } from "../../info/info";

class PSLFWaiver extends React.Component {
  render() {
    return (
      <>
        <ExamplePage
          name={dev.Pslf.name}
          url={dev.Pslf.url}
          img={dev.Pslf.cover}
          alt={dev.Pslf.alt}
        >
          <h2>The Problem</h2>
          <p>
            The Federal Government announced a temporary waiver for Public
            Service Loan Forgiveness borrowers that would allow them to apply
            qualifying payments to months that usually wouldn't count.
          </p>
          <p>
            This waiver would also apply retroactively, meaning that any PSLF
            borrower could get closer to loan forgiveness, and many could gain
            instant forgiveness.
          </p>
          <p>
            I helped Udeany create a method to guide borrowers through the
            waiver process quickly so they could meet the deadline of Oct. 31,
            2022. But, Udeany needed a landing page for email marketing and
            Google Ads.
          </p>
          <h2>The Strategy</h2>
          <p>
            The landing page started based on the ClearCAIVRS site, enabling a
            quick turnaround. I maintained the same styles and components to
            create brand consistency.
          </p>
          <p>
            We launched the site within a few days of inception and immediately
            sent a mass email to our clients and leads using the Zoho CRM.
          </p>
          <h2>The Solution</h2>
          <p>
            I started by duplicating the ClearCAIVRS site to bring the
            styled-components in for reuse. I adjusted the design based on the
            new content and included similar elements from the previous landing
            page to build trust with visitors.
          </p>
          <p>
            I also linked multiple domains with the site and reworked copy to
            help with the on-page SEO.
          </p>
          <h3>Skills and Tools</h3>
          <ul>
            <li>CSS</li>
            <li>HTML</li>
            <li>Google Domains and DNS</li>
            <li>Jotform</li>
            <li>Photoshop</li>
            <li>Responsive design</li>
            <li>SEO</li>
            <li>Wordpress.com</li>
            <li>Zoho CRM</li>
          </ul>
        </ExamplePage>
      </>
    );
  }
}

export default PSLFWaiver;
