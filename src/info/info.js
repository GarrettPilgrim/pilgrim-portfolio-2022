import React from "react";
import GridItem from "../components/example-grid/grid-item/grid-item";

// LOGO IMPORTS
import { ReactComponent as UofMLogo } from "../images/logos/uofm-logo.svg";
import { ReactComponent as UdeanyLogo } from "../images/logos/udeany-logo.svg";
import { ReactComponent as Choose901Logo } from "../images/logos/choose901-logo.svg";
import { ReactComponent as Baptist } from "../images/logos/baptist-logo.svg";
import { ReactComponent as Meeman } from "../images/logos/meeman901-logo.svg";
import { ReactComponent as Mayflower } from "../images/logos/mayflower-logo.svg";
import { ReactComponent as Signature } from "../images/logos/signature-logo.svg";

// COVER IMAGE IMPORTS
import CaivrsCover from "../images/photos/dev/caivrs-cover.jpg";
import PilgrimCover from "../images/photos/dev/pilgrimwedding-cover.jpg";
import PslfCover from "../images/photos/dev/pslfwaiver-cover.jpg";
import TeachableCover from "../images/photos/dev/teachable-cover.jpg";
import AhsokaCover from "../images/photos/design/ahsoka-cover.png";
import WaititiCover from "../images/photos/design/waititi-cover.png";
import ChuloCover from "../images/photos/design/chulo-cover.jpg";
import WoodlandHillsCover from "../images/photos/design/woodlandhills-cover.jpg";
import DonutCover from "../images/photos/motion/donut-cover.png";
import ResumeCover from "../images/photos/resume-home.jpg";
import UdeanyMotionCover from "../images/photos/motion/udeanymotion-cover.jpg";

// FUNCTIONS
const getGridItems = (item) => {
  return (
    <GridItem
      header={item.name}
      subheader={item.subheader}
      cover={item.cover}
      link={item.link}
    />
  );
};

const jobs = {
  Udeany: {
    title: "Marketing and Technology Partner",
    company: "Udeany",
    start: "February 2021",
    end: "Present",
    logo: <UdeanyLogo />,
    description: (
      <div>
        <p>
          I lead the marketing and technology efforts to grow the brand,
          including building and maintaining websites, creating Teachable
          courses, and managing the CRM software.
        </p>
        <p>
          I increased the annual sales by 33% in 2021 and streamlined
          communication processes with an automated email marketing campaign to
          save work hours, leading to a 31% conversion rate from contact form
          submission to client.
        </p>
        <p>
          In April 2022, I led the development of a niche landing page which
          increased sales by 50% from April to May and 12.5% from May to June,
          setting a company sales record.
        </p>
        <h4>Work Areas</h4>
        <ul>
          <li>Ecourse Development</li>
          <li>Email Marketing</li>
          <li>Motion Graphics</li>
          <li>Video Production</li>
          <li>Web Design</li>
          <li>Web Development</li>
          <li>Zoho CRM</li>
        </ul>
      </div>
    ),
  },
  Mayflower: {
    title: "Founder",
    company: "Mayflower Originals",
    start: "January 2020",
    end: "Present",
    logo: <Mayflower />,
    description: (
      <div>
        <p>
          I founded Mayflower Originals as an online retailer. However, it has
          morphed into my publishing and production brand for books and,
          eventually, animated shorts.
        </p>
        <p>
          I developed websites, designed physical products such as clothing and
          books, and ran marketing campaigns on social media and through Google
          Ads.
        </p>
        <h4>Work Areas</h4>
        <ul>
          <li>Animation</li>
          <li>Graphic Design</li>
          <li>Illustration</li>
          <li>Marketing</li>
          <li>Motion Graphics</li>
          <li>Video Production</li>
          <li>Web Design</li>
          <li>Web Development</li>
        </ul>
      </div>
    ),
  },
  Adjunct: {
    title: "Adjunct Professor",
    company: "The University of Memphis",
    start: "August 2020",
    end: "Present",
    logo: <UofMLogo />,
    description: (
      <div>
        <p>
          I teach design, web development, and storytelling courses on a
          contract basis in the Department of Journalism and Strategic Media.
        </p>
        <p>
          The web development courses emphasize HTML, CSS, and Javascript
          languages with principles focused on responsiveness, accessibility,
          DRY and clean code, and user experience.
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
    logo: <UofMLogo />,
    description: (
      <div>
        <p>
          I helped professors with classroom instruction, organization,
          copywriting, and grading and taught courses independently.
        </p>
        <p>
          Specifically, I taught courses in visual media and multimedia
          storytelling, which emphasized learning the Adobe Creative apps,
          including design, photography, audio production, and video production
          techniques.
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
    logo: <Meeman />,
    description: (
      <div>
        <p>
          I managed the accounts, ensured quality service to the student-run
          firm’s clients, and met with them directly to address each client’s
          unique marketing needs.
        </p>
        <p>
          I met with the account teams to ensure we met client needs and to
          strategize with team members to keep projects on track.
        </p>
        <h4>Work Areas</h4>
        <ul>
          <li>Client communications</li>
          <li>Collaboration</li>
          <li>Management</li>
          <li>Quality assurance</li>
        </ul>
      </div>
    ),
  },
  Lead: {
    title: "Account Lead",
    company: "Meeman 901 Strategies",
    start: "August 2016",
    end: "August 2017",
    logo: <Meeman />,
    description: (
      <div>
        <p>
          I managed clients and collaborated to meet their marketing needs. I
          worked with two primary clients: Pi Beta Phi and Meeman 901
          Strategies.
        </p>
        <p>
          I oversaw the firm’s design and development of a new website. This
          project included guiding the design process, outlining strategic
          needs, and debugging errors along the way. Additionally, I wrote and
          edited the site’s copy for SEO.
        </p>
        <p>
          With Pi Beta Phi, I lead the creation of a{" "}
          <a href="https://www.meeman901strategies.com/copy-of-fedex-institute-of-technolo">
            new recruitment video
          </a>{" "}
          for the sorority. This included planning and client coordination,
          production, post production, and reshoots.
        </p>
        <h4>Work Areas</h4>
        <ul>
          <li>Marketing</li>
          <li>Project management</li>
          <li>SEO</li>
          <li>Videography</li>
          <li>Web design</li>
        </ul>
      </div>
    ),
  },
  Signature: {
    title: "Digital Media Intern",
    company: "Signature Advertising",
    start: "June 2017",
    end: "August 2017",
    logo: <Signature />,
    description: (
      <div>
        <p>
          I wrote web copy for product sales pages, managed the agency’s social
          media, tested an 8-bit video game, and maintained a retro Memphis
          apparel website, Mid-South Flair.
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
    logo: <Baptist />,
    description: (
      <div>
        <p>
          I assisted corporate marketing leads in strategizing and implementing
          tactics for the entire coverage area, including West Tennessee,
          Northeast Mississippi, and Eastern Arkansas.
        </p>
        <p>
          I maintained a local fitness app that promoted local events. I
          assisted with marketing compliance with section 1557 of the ACA. I was
          also responsible for the Art of Caring photography for the auction
          site.
        </p>
        <h4>Work Areas</h4>
        <ul>
          <li>
            Collaborating with corporate clients to address marketing needs
          </li>
          <li>Editing and writing marketing materials</li>
          <li>Editing and writing web copy</li>
          <li>
            Managing marketing requests via Salesforce to ensure timely delivery
          </li>
          <li>Proofing new designs</li>
          <li>Salesforce management</li>
          <li>Taking and editing photos for the Art of Caring events</li>
          <li>Ensuring compliance with ACA marketing regulations</li>
        </ul>
      </div>
    ),
  },
  Choose901: {
    title: "Blogger",
    company: "City Leadership — Choose901",
    start: "October 2014",
    end: "August 2016",
    logo: <Choose901Logo />,
    description: (
      <div>
        <p>
          I blogged on Memphis area events to promote the good happening in the
          city as part of a City Leadership initiative.
        </p>
        <p>
          While on the job, I took photos, conducted research for stories, wrote
          SEO-focused web copy, and inserted SEO tags.
        </p>
        <h4>Work Areas</h4>
        <ul>
          <li>Copy writing</li>
          <li>On page SEO</li>
          <li>Photography</li>
          <li>Photo editing</li>
          <li>SEO tagging</li>
        </ul>
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
    description: (
      <div>
        <p>
          I earned my degree in Visual Media from the Journalism Department at
          the University of Memphis while working as a Graduate Assistant.
        </p>
        <p>
          The degree emphasized visual study with research into user interaction
          and experience with media. While working towards graduation, I won Top
          Student Paper at the AEJMC Southeast Colloqium for research on user
          interaction with humor and design.
        </p>
      </div>
    ),
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
    description: (
      <div>
        <p>
          At Choose901, I blogged on Memphis area events to promote the good
          happening in the city as part of a City Leadership initiative.
        </p>
      </div>
    ),
    courses: [
      "Advanced Visual Media",
      "Branding and Strategic Media",
      "Consumer Behavior",
      "Creative Strategies",
      "Logic and Psychology",
    ],
  },
};

const skills = [
  "Advertising",
  "Branding",
  "Front-End Development",
  "Marketing",
  "Motion Graphics",
  "Responsive Web Design",
  "SEO",
  "UI/UX",
  "Video Production",
];

const technlogies = [
  "After Effects",
  "Blender",
  "CSS3",
  "Gatsby",
  "Git/Github",
  "HTML5",
  "Illustrator",
  "Javascript ES6",
  "Netlify",
  "Node.js",
  "Photoshop",
  "Premiere Pro",
  "React",
  "Teachable",
  "WordPress",
];

const awards = {
  aejmc: {
    award: "Top Student Paper Visual Communication",
    date: "March 2019",
    from: "AEJMC Southeast Colloquium",
    description: (
      <p>
        My research paper Holy Smokies! Information Design, Humor, and Trail
        Safety, won top student paper in the Visual Communication division's
        paper competition at the 44th AEJMC Southeast Colloquium
      </p>
    ),
  },
  adfed: {
    award: "Student Chapter President",
    date: "August 2017 - May 2018",
    from: "American Advertising Federation",
    description: (
      <p>
        I was named the Student Chapter President of the American Advertising
        Federation's University of Memphis chapter. The award came with the
        responsibility to manage student AdFed meetings and certifications with
        the university.
      </p>
    ),
  },
  meeman901: {
    award: "Meeman 901 Strategies Leadership Award",
    date: "April 2017",
    from: "The University of Memphis",
    description: (
      <p>
        The Department of Journalism and Strategic Media awarded me the Meeman
        901 Strategies Leadership Award for my work managing clients as an
        Account Lead with the firm.
      </p>
    ),
  },
  ron: {
    award: "Ron Spielberger Advertising Creative Achievement Award",
    date: "April 2017",
    from: "The University of Memphis",
    description: (
      <p>
        I earned the Advertising Creative Achievement Award twice for my design,
        photo, and video work in strategic design courses.
      </p>
    ),
  },
};

const dev = {
  PilgrimWedding: {
    name: "Pilgrim Wedding",
    url: "https://pilgrimagewedding.netlify.app/",
    github: "https://github.com/GarrettPilgrim/pilgrim-wedding",
    subheader: "A single-page Gatsby landing page to RSVP for my wedding.",
    cover: PilgrimCover,
    alt: "A screenshot of the Pilgrim Wedding webpage showing a loving couple and rose illustrations.",
    link: "/dev/pilgrimwedding",
  },
  Caivrs: {
    name: "Clear Caivrs",
    url: "https://clearcaivrs.com/",
    subheader:
      "A landing page designed to convince clients to buy the Udeany CAIVRS ecourse.",
    cover: CaivrsCover,
    alt: "A screenshot of the ClearCAIVRS landing page showing two men shaking hands in front of a sold house sign.",
    link: "/dev/clearcaivrs",
  },
  Pslf: {
    name: "PSLF Waiver",
    url: "https://pslfwaiver.co/",
    subheader:
      "A landing page guiding leads to purchase the PSLF Waiver course.",
    cover: PslfCover,
    alt: "",
    link: "/dev/pslfwaiver",
  },
  Teachable: {
    name: "Udeany Courses",
    url: "https://courses.udeany.com/",
    subheader: "",
    cover: TeachableCover,
    alt: "",
    link: "/dev/teachable",
  },
  // WillyWonka: {
  //   name: "Willy Wonka Site",
  //   url: "",
  //   github: "https://github.com/GarrettPilgrim/willy-wonka",
  //   subheader: "A single-page site created live in class",
  //   cover: "",
  //   alt: "",
  //   link: "/dev/willywonka",
  // },
  Portfolio: {
    name: "This portfolio site",
    url: "",
    github: "https://github.com/GarrettPilgrim/pilgrim-portfolio-2022",
    subheader: "The website you're currently on, my portfolio",
    cover: ResumeCover,
    alt: "",
    link: "/dev/thisportfolio",
  },
};

const design = {
  Waititi: {
    name: "Taika Waititi Illustration",
    subheader: "Fan-made Taika Waititi illustration using Fresco",
    cover: WaititiCover,
    alt: "",
    link: "/design/taikawaititi",
  },
  Ahsoka: {
    name: "Ahsoka Illustration",
    subheader: "Fan-made Ahsoka design using Fresco and Illustrator",
    cover: AhsokaCover,
    alt: "",
    link: "/design/ahsokatano",
  },
  Chulo: {
    name: "Chulo Illustration",
    subheader: "Dog photo colorization and illustration",
    cover: ChuloCover,
    alt: "",
    link: "/design/chulo",
  },
  WoodlandHills: {
    name: "Woodland Hills",
    subheader: "Design work for the Woodland Hills Church",
    cover: WoodlandHillsCover,
    alt: "",
    link: "/design/woodlandhills",
  },
  // BobRoss: {
  //   name: "Bob Ross",
  //   subheader: "Digitally painting with Bob Ross",
  //   cover: "",
  //   alt: "",
  //   link: "/design/bobross",
  // },
};

const motion = {
  Udeany: {
    name: "Udeany Motion",
    url: "",
    subheader:
      "Motion graphics and video production work for ecourse lessons and promotion",
    cover: UdeanyMotionCover,
    alt: 'The cover graphic for a Udeany promotional video with the text: "Clear CAIVRS Like Magic with Udeany"',
    link: "/motion/udeanymotion",
  },
  Donut: {
    name: "3D Donut",
    url: "",
    subheader: "3D donut design, visual effects, and animation using Blender",
    cover: DonutCover,
    alt: "",
    link: "/motion/3ddonut",
  },
};

export {
  jobs,
  edu,
  dev,
  skills,
  awards,
  design,
  motion,
  technlogies,
  getGridItems,
};
