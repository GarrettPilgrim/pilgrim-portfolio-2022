import React, { createRef } from "react";

const Home = React.lazy(() => import("./pages/home"));
const Web = React.lazy(() => import("./pages/web"));
const Design = React.lazy(() => import("./pages/design"));
const Motion = React.lazy(() => import("./pages/motion"));
const Resume = React.lazy(() => import("./pages/resume"));
const ErrorPage = React.lazy(() => import("./pages/404"));
const FormSuccess = React.lazy(() => import("./pages/success"));

const ClearCaivrs = React.lazy(() => import("./pages/web/clearcaivrs"));
const PilgrimWedding = React.lazy(() => import("./pages/web/pilgrimwedding"));
const PSLFWaiver = React.lazy(() => import("./pages/web/pslfwaiver"));
const Teachable = React.lazy(() => import("./pages/web/teachable"));
const ThisPortfolio = React.lazy(() => import("./pages/web/thisportfolio"));
const WillyWonka = React.lazy(() => import("./pages/web/willywonka"));

const Ahsoka = React.lazy(() => import("./pages/design/ahsokatano"));
const Chulo = React.lazy(() => import("./pages/design/chulo"));
const Waititi = React.lazy(() => import("./pages/design/taikawaititi"));
const WoodlandHills = React.lazy(() => import("./pages/design/woodlandhills"));
const BobRoss = React.lazy(() => import("./pages/design/bobross"));

const Donut = React.lazy(() => import("./pages/motion/3ddonut"));
const UdeanyMotion = React.lazy(() => import("./pages/motion/udeanymotion"));

// ROUTES
const routes = [
  // MAIN PAGES
  { path: "/", name: "Home", element: <Home />, nodeRef: createRef() },
  { path: "/web", name: "Dev", element: <Web />, nodeRef: createRef() },
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
    path: "/web/clearcaivrs",
    name: "Clear Caivrs",
    element: <ClearCaivrs />,
    nodeRef: createRef(),
  },
  {
    path: "/web/pslfwaiver",
    name: "PSLF Waiver",
    element: <PSLFWaiver />,
    nodeRef: createRef(),
  },
  {
    path: "/web/teachable",
    name: "Teachable",
    element: <Teachable />,
    nodeRef: createRef(),
  },
  {
    path: "/web/willywonka",
    name: "Willy Wonka",
    element: <WillyWonka />,
    nodeRef: createRef(),
  },
  {
    path: "/web/thisportfolio",
    name: "This Portfolio",
    element: <ThisPortfolio />,
    nodeRef: createRef(),
  },
  {
    path: "/web/pilgrimwedding",
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
