import React from "react";
import ExamplePage from "../../components/example-page/example-page";
import { web } from "../../info/info";

const ClearCaivrs = () => {
  return (
    <>
      <ExamplePage
        name={web.Caivrs.name}
        url={web.Caivrs.url}
        img={web.Caivrs.cover}
        alt={web.Caivrs.alt}
        embed={true}
      >
        <h2>The Problem</h2>
        <p>
          ClearCAIVRS.com is a landing page created to convince leads that the
          Udeany course is the fastest way to clear their name from the Credit
          Alert Verification Reporting System so they can buy a house.
        </p>
        <p>
          When a potential client shows up on CAIVRS, lenders are not allowed,
          by law, to approve them for a mortgage. Udeany's student loan
          expertise is in helping people remove CAIVRS fast.
        </p>
        <p>
          Most leads would not buy the course on their own, would need to be
          convinced on the phone to purchase the course, and would potentially
          still not purchase, which caused many hours of work to be lost.
        </p>

        <h2>The Strategy</h2>
        <p>
          Because Udeany is a small business, the company needed a way to limit
          the amount of time spent on phone calls convincing leads to sign up.
          The site needed to save the company time and act as a landing page for
          a Google Ads campaign.
        </p>
        <p>
          The site funnels users to one of two actions: The ecourse page for
          purchase or a contact form with an automated email system.
        </p>
        <p>
          Udeany's president wanted to ensure a means of contact in case site
          visitors were still not convinced to buy on their own, which is why
          the contact form was essential. The automated email response within
          the CRM mitigated wasted time while the site primarily pushes users to
          the ecourse.
        </p>

        <h2>The Solution</h2>
        <p>
          I created a single-page site to funnel users to the ecourse while
          allowing them to fill out a contact form if desired. Additionally, the
          president made a dedicated hotline for leads with greater urgency.
        </p>
        <p>
          The tight deadline (less than two weeks) led me to use Wordpress.com's
          builder, starting with a blank template as a low-code solution
          alongside the already integrated Jotform to build a form that links to
          the CRM for lead management and email automation.
        </p>
        <h3>Skills and Programs</h3>
        <ul>
          <li>CSS</li>
          <li>HTML</li>
          <li>Jotform</li>
          <li>Photoshop</li>
          <li>Responsive design</li>
          <li>SEO</li>
          <li>Wordpress.com</li>
          <li>Zoho CRM</li>
        </ul>

        <h2>The Results</h2>
        <p>
          After launch, sales increased by 50% from April to May 2022. They
          improved a further 12.5% in June and set a new company record for the
          month. Additionally, the site reached the first page of Google search
          within a month of launch.
        </p>
        <p>
          However, after the sales boost, temporary changes from the federal
          government removed everyone from the CAIVRS list, which ceased the
          demand.
        </p>
      </ExamplePage>
    </>
  );
};

export default ClearCaivrs;
