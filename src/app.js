import React, { Suspense, createRef } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  useOutlet,
} from "react-router-dom";
import ScrollToTop from "./components/scroll-to-top/scroll-to-top";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";

// MAIN PAGES
import Home from "./pages/home";
import Dev from "./pages/dev";
import Design from "./pages/design";
import Motion from "./pages/motion";
import Resume from "./pages/resume";
import About from "./pages/about";

// const Home = lazy(() => import("./pages/home"));
// const Dev = lazy(() => import("./pages/dev"));
// const Motion = lazy(() => import("./pages/motion"));
// const Design = lazy(() => import("./pages/design"));
// const Resume = lazy(() => import("./pages/resume"));
// const About = lazy(() => import("./pages/about"));

// SUBPAGES
import ClearCaivrs from "./pages/dev/clearcaivrs";
import PilgrimWedding from "./pages/dev/pilgrimwedding";
import PSLFWaiver from "./pages/dev/pslfwaiver";
import Teachable from "./pages/dev/teachable";

import Ahsoka from "./pages/design/ahsokatano";
import Chulo from "./pages/design/chulo";
import Waititi from "./pages/design/taikawaititi";
import WoodlandHills from "./pages/design/woodlandhills";

import Donut from "./pages/motion/3ddonut";
import UdeanyMotion from "./pages/motion/udeanymotion";

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
    path: "/motion/3ddonut",
    name: "3D Donut",
    element: <Donut />,
    nodeRef: createRef(),
  },
  {
    path: "/motion/woodlandhills",
    name: "Udeany Motion",
    element: <UdeanyMotion />,
    nodeRef: createRef(),
  },
];

const App = () => {
  // const location = useLocation()
  // const currentOutlet = useOutlet()
  return (
    <Router>
      <Header />
      <Suspense>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/dev" element={<Dev />}></Route>
            <Route path="/design" element={<Design />}></Route>
            <Route path="/motion" element={<Motion />}></Route>
            <Route path="/resume" element={<Resume />}></Route>
            <Route path="/about" element={<About />}></Route>
            {/* sub pages */}
            <Route path="/dev/clearcaivrs" element={<ClearCaivrs />}></Route>
            <Route
              path="/dev/pilgrimwedding"
              element={<PilgrimWedding />}
            ></Route>
            <Route path="/dev/pslfwaiver" element={<PSLFWaiver />}></Route>
            <Route path="/dev/teachable" element={<Teachable />}></Route>
            <Route path="/design/ahsokatano" element={<Ahsoka />}></Route>
            <Route path="/design/chulo" element={<Chulo />}></Route>
            <Route path="/design/taikawaititi" element={<Waititi />}></Route>
            <Route
              path="/design/woodlandhills"
              element={<WoodlandHills />}
            ></Route>
            <Route path="/motion/3ddonut" element={<Donut />}></Route>
            <Route
              path="/motion/udeanymotion"
              element={<UdeanyMotion />}
            ></Route>
          </Routes>
        </ScrollToTop>
      </Suspense>
      <Footer />
    </Router>
  );
};

export default App;
