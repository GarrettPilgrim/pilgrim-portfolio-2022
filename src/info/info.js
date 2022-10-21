import UofMLogo from "../images/logos/uofm-logo.png"
import UdeanyLogo from "../images/logos/udeany-logo.png"
import Choose901Logo from "../images/logos/choose901-logo.png"
import Baptist from "../images/logos/baptist-logo.png"
import Meeman from "../images/logos/meeman-901-logo.png"
import Mayflower from "../images/logos/mayflower-logo.png"
import Signature from "../images/logos/signature-logo.png"

const jobs = {
  Udeany: {
    title: "Marketing and Technology Partner",
    company: "Udeany",
    start: "February 2021",
    end: "Present",
    logo: UdeanyLogo,
    alt: "",
    description: (
      <div>
        <p>
          At Udeany, I lead the marketing and technology efforts to grow the
          brand. This includes building and maintaining websites, Teachable
          courses, and CRM software.
        </p>
        <p>
          I increased the annual sales by 33% in 2021 and streamlined
          communication processes with an automated email marketing campaign to
          save work hours which lead to a 31% conversion rate from contact form
          submission to client.
        </p>
        <p>
          In April 2022, I lead the development of a niche landing page which
          increased sales by 50% from April to May and a further 12.5% from May
          to June setting a company sales record.
        </p>
      </div>
    ),
  },
  Mayflower: {
    title: "Founder",
    company: "Mayflower Originals",
    start: "January 2020",
    end: "Present",
    logo: Mayflower,
    alt: "",
    description: (
      <div>
        <p>
          Mayflower Originals was founded as an online retailer. However, it has
          morphed into my personal publishing and production brand for books and
          eventually for animated shorts.
        </p>
        <p>
          I developed websites, designed physical products such as clothing and books,
          and ran marketing campaigns including social media and Google Ads.
        </p>
      </div>
    ),
  },
  Adjunct: {
    title: "Adjunct Professor",
    company: "The University of Memphis",
    start: "August 2020",
    end: "Present",
    logo: UofMLogo,
    alt: "University of Memphis Logo",
    description: (
      <div>
        <p>
          I teach coures on design, web development, and storytelling on a
          contract basis in the Department of Journalism and Strategic Media.
        </p>

        <h4>Taught Courses</h4>
        <ul>
          <li>Multimedia Storytelling</li>
          <li>Visual Media</li>
          <li>Web Publishing 1: HTML & CSS</li>
          <li>Web Publishing 2: HTML, CSS & Javascript</li>
        </ul>
      </div>
    ),
  },
  Graduate: {
    title: "Graduate Assistant",
    company: "The University of Memphis",
    start: "August 2018",
    end: "May 2020",
    logo: UofMLogo,
    alt: "",
    description: (
      <div>
        <p>
          As a Grad Assistant, I helped professors with classroom instruction,
          organization, copywriting, grading, and taught courses independently.
        </p>
        <h4>Work Areas</h4>
        <ul>
          <li>Intro to Public Relations</li>
          <li>Media Law</li>
          <li>Multimedia Storytelling</li>
          <li>Visual Media</li>
        </ul>
      </div>
    ),
  },
  Director: {
    title: "Firm Director",
    company: "Meeman 901 Strategies",
    start: "August 2017",
    end: "May 2018",
    logo: Meeman,
    alt: "",
    description: (
      <div>
        <p>
          As Firm Director, I managed Account Leads and ensured delivery of quality service
          to our clients. 
        </p>
        <p>
          I hosted weekly meetings to ensure clients needs were being met and to strategize 
          with leads and their teams.
        </p>
      </div>
    ),
  },
  Lead: {
    title: "Account Lead",
    company: "Meeman 901 Strategies",
    start: "August 2016",
    end: "August 2017",
    logo: Meeman,
    alt: "",
    description: (
      <div>
        <p>
          As Account Lead I managed clients and collaborated to meet their marketing needs.
          I worked with two primary clients: Pi Beta Phi and Meeman 901 Strategies itself.
        </p>
        <p>
          With Meeman 901 Strategies, I oversaw the design and development of a new website
          for the firm. This included guiding the design process, outlining strategic needs,
          and debugging errors along the way. Additionally, I wrote and edited the site's copy
          for SEO.
        </p>
        <p>
          With Pi Beta Phi, I lead the creation of
          a <a href="https://www.meeman901strategies.com/copy-of-fedex-institute-of-technolo">new recruitment video</a> for 
          the sorority. This included planning and client coordination, production, 
          post production, and reshoots.
        </p>

      </div>
    ),
  },
  Signature: {
    title: "Digital Media Intern",
    company: "Signature Advertising",
    start: "June 2017",
    end: "August 2017",
    logo: Signature,
    alt: "",
    description: (
      <div>
        <p>
          While working in Digital Media, I wrote web copy for sales pages,
          tested an 8-bit video game, and maintained a retro Memphis apparel website.
        </p>
        <p>
          While working in Digital Media, I wrote web copy for sales pages, managed the agency's social media,
          tested an 8-bit video game, and maintained a retro Memphis apparel website, Mid-South Flair.
        </p>
        <h4>Work Areas</h4>
        <ul>
          <li>Copy writing and editing</li>
          <li>Keyword research</li>
          <li>Product descriptions</li>
          <li>Social media scheduling</li>
          <li>Social media strategy</li>
          <li>Video game testing</li>
        </ul>
      </div>
    ),
  },
  Baptist: {
    title: "Marketing Intern",
    company: "Baptist Memorial Health Care",
    start: "June 2016",
    end: "August 2017",
    logo: Baptist,
    alt: "",
    description: (
      <div>
        <p>
          As an intern, I assisted corporate marketing leads in running the strategies and tactics
          for the entire coverage area including West Tennessee, Northeast Mississippi, 
          and Eastern Arkansas.
        </p>
        <h4>Work Areas</h4>
        <ul>
          <li>Collaborating with corporate clients to address marketing needs</li>
          <li>Editing and writing marketing materials</li>
          <li>Editing and writing web copy</li>
          <li>Managing marketing requests via Salesforce to ensure timely delivery</li>
          <li>Proofing new designs</li>
          <li>Taking and editing photos for the Art of Caring events</li>
        </ul>
      </div>
    ),
  },
  Choose901: {
    title: "Blogger",
    company: "City Leadership — Choose901",
    start: "October 2014",
    end: "August 2016",
    logo: Choose901Logo,
    alt: "Choose901 Logo",
    description: (
      <div>
        <p>
          At Choose901, I blogged on Memphis area events to promote the good
          happening in the city as part of a City Leadership initiative.
        </p>
        <p>
          While on the job, took photos, conducted research, wrote SEO focused web copy,
          and inserted SEO tags.  
        </p>
      </div>
    ),
  },
};

const edu = {
  Grad: {
    degree: "Master of Arts",
    major: "Visual Media",
    university: "The University of Memphis",
    year: 2020,
    gpa: 3.96,
    courses: [
      "Analytics and Evalutation",
      "Information Design",
      "Interactive Graphic Design",
      "Pixar in a Box",
      "Visual Media Research",
      "Web Publishing: HTML, CSS, JS",
    ],
  },
  Undergrad: {
    degree: "Bachelor of Arts",
    major: "Advertising",
    minor: "Marketing",
    university: "The University of Memphis",
    year: 2018,
    gpa: 3.98,
    courses: [
      "Advanced Visual Media",
      "Branding and Strategic Media",
      "Consumer Behavior",
      "Creative Strategies",
      "Logic and Psychology",
    ],
  },
};

const skills = {

}

const awards = {

}

const dev = {
  PilgrimWedding: {
    site: "Pilgrimwedding.com",
    url: "https://pilgrimagewedding.netlify.app/",
  },
  Caivrs: {
    site: "ClearCaivrs.com",
    url: "https://clearcaivrs.com/",
  },
  Pslf: {
    site: "PSLFWaiver.co",
    url: "https://pslfwaiver.co/",
  },
  Teachable: {
    site: "courses.Udeany.com",
    url: "https://courses.udeany.com/",
  },
};

const design = {};

const motion = {};

export { jobs, edu, dev };
