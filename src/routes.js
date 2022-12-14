import React, { createRef } from "react";

const Home = React.lazy(() => import("./pages/home"));
const Dev = React.lazy(() => import("./pages/dev"));
const Design = React.lazy(() => import("./pages/design"));
const Motion = React.lazy(() => import("./pages/motion"));
const Resume = React.lazy(() => import("./pages/resume"));
const ErrorPage = React.lazy(() => import("./pages/404"));
const FormSuccess = React.lazy(() => import("./pages/success"));

const ClearCaivrs = React.lazy(() => import("./pages/dev/clearcaivrs"));
const PilgrimWedding = React.lazy(() => import("./pages/dev/pilgrimwedding"));
const PSLFWaiver = React.lazy(() => import("./pages/dev/pslfwaiver"));
const Teachable = React.lazy(() => import("./pages/dev/teachable"));
const ThisPortfolio = React.lazy(() => import("./pages/dev/thisportfolio"));
const WillyWonka = React.lazy(() => import("./pages/dev/willywonka"));

const Ahsoka = React.lazy(() => import("./pages/design/ahsokatano"));
const Chulo = React.lazy(() => import("./pages/design/chulo"));
const Waititi = React.lazy(() => import("./pages/design/taikawaititi"));
const WoodlandHills = React.lazy(() => import("./pages/design/woodlandhills"));
const BobRoss = React.lazy(() => import("./pages/design/bobross"));

const Donut = React.lazy(() => import("./pages/motion/3ddonut"));
const UdeanyMotion = React.lazy(() => import("./pages/motion/udeanymotion"));

// MAIN PAGES
// import Home from "./pages/home";
// import Dev from "./pages/dev";
// import Design from "./pages/design";
// import Motion from "./pages/motion";
// import Resume from "./pages/resume";
// import ErrorPage from "./pages/404";

// // SUB PAGES
// // dev
// import ClearCaivrs from "./pages/dev/clearcaivrs";
// import PilgrimWedding from "./pages/dev/pilgrimwedding";
// import PSLFWaiver from "./pages/dev/pslfwaiver";
// import Teachable from "./pages/dev/teachable";
// import WillyWonka from "./pages/dev/willywonka";
// import ThisPortfolio from "./pages/dev/thisportfolio";

// // design
// import Ahsoka from "./pages/design/ahsokatano";
// import Chulo from "./pages/design/chulo";
// import Waititi from "./pages/design/taikawaititi";
// import WoodlandHills from "./pages/design/woodlandhills";
// import BobRoss from "./pages/design/bobross";

// // motion
// import Donut from "./pages/motion/3ddonut";
// import UdeanyMotion from "./pages/motion/udeanymotion";

// ROUTES
const routes = [
  // MAIN PAGES
  { path: "/", name: "Home", element: <Home />, nodeRef: createRef() },
  { path: "/dev", name: "Dev", element: <Dev />, nodeRef: createRef() },
  {
    path: "/resume",
    name: "Resume",
    element: <Resume />,
    nodeRef: createRef(),
  },
  {
    path: "/design",
    name: "Design",
    element: <Design />,
    nodeRef: createRef(),
  },
  {
    path: "/motion",
    name: "Motion",
    element: <Motion />,
    nodeRef: createRef(),
  },
  // SUB PAGES
  {
    path: "/dev/clearcaivrs",
    name: "Clear Caivrs",
    element: <ClearCaivrs />,
    nodeRef: createRef(),
  },
  {
    path: "/dev/pslfwaiver",
    name: "PSLF Waiver",
    element: <PSLFWaiver />,
    nodeRef: createRef(),
  },
  {
    path: "/dev/teachable",
    name: "Teachable",
    element: <Teachable />,
    nodeRef: createRef(),
  },
  {
    path: "/dev/willywonka",
    name: "Willy Wonka",
    element: <WillyWonka />,
    nodeRef: createRef(),
  },
  {
    path: "/dev/thisportfolio",
    name: "This Portfolio",
    element: <ThisPortfolio />,
    nodeRef: createRef(),
  },
  {
    path: "/dev/pilgrimwedding",
    name: "Pilgrim Wedding",
    element: <PilgrimWedding />,
    nodeRef: createRef(),
  },
  {
    path: "/design/ahsokatano",
    name: "Ahsoka Tano",
    element: <Ahsoka />,
    nodeRef: createRef(),
  },
  {
    path: "/design/chulo",
    name: "Chulo",
    element: <Chulo />,
    nodeRef: createRef(),
  },
  {
    path: "/design/taikawaititi",
    name: "Taika Waititi",
    element: <Waititi />,
    nodeRef: createRef(),
  },
  {
    path: "/design/woodlandhills",
    name: "Woodland Hills",
    element: <WoodlandHills />,
    nodeRef: createRef(),
  },
  {
    path: "/design/bobross",
    name: "Bob Ross",
    element: <BobRoss />,
    nodeRef: createRef(),
  },
  {
    path: "/motion/3ddonut",
    name: "3D Donut",
    element: <Donut />,
    nodeRef: createRef(),
  },
  {
    path: "/motion/udeanymotion",
    name: "Udeany Motion",
    element: <UdeanyMotion />,
    nodeRef: createRef(),
  },
  {
    path: "/success",
    name: "Form Submitted",
    element: <FormSuccess />,
    nodeRef: createRef(),
  },
  {
    path: "*",
    name: "Page Does Not Exist",
    element: <ErrorPage />,
    nodeRef: createRef(),
  },
];

export default routes;
