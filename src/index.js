import React from "react";
import { createRef } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  useLocation,
  useOutlet,
} from "react-router-dom";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import "./styles.scss";
import "./transitions.scss";

// MAIN PAGES
import Home from "./pages/home";
import Dev from "./pages/dev";
import Design from "./pages/design";
import Motion from "./pages/motion";
import Resume from "./pages/resume";
import About from "./pages/about";
import ErrorPage from "./pages/404";

// SUB PAGES
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
  {
    path: "*",
    name: "Page Does Not Exist",
    element: <ErrorPage />,
    nodeRef: createRef(),
  },
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
    children: routes.map((route) => ({
      index: route.path === "/",
      path: route.path === "/" ? undefined : route.path,
      element: route.element,
    })),
  },
]);

function Index() {
  const location = useLocation();
  const currentOutlet = useOutlet();
  const { nodeRef } =
    routes.find((route) => route.path === location.pathname) ?? {};
  return (
    <>
      <Header />
      <SwitchTransition>
        <CSSTransition
          key={location.pathname}
          nodeRef={nodeRef}
          timeout={300}
          classNames="page"
          unmountOnExit
        >
          {(state) => (
            <div ref={nodeRef} className="page">
              {currentOutlet}
            </div>
          )}
        </CSSTransition>
      </SwitchTransition>
      <Footer />
    </>
  );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<RouterProvider router={router} fallbackElement={<ErrorPage />} />);

// INDEX PRIOR TO TRANSITIONS
// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./app";
// import "./styles.scss";
// import "./base.scss";

// class Index extends React.Component {
//   render() {
//     return (
//       <>
//         <App />
//       </>
//     );
//   }
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Index />);
