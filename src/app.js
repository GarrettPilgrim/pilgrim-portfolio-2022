import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";

// MAIN PAGES
const Home = lazy(() => import("./pages/home"));
const Dev = lazy(() => import("./pages/dev"));
const Motion = lazy(() => import("./pages/motion"));
const Design = lazy(() => import("./pages/design"));
const Resume = lazy(() => import("./pages/resume"));
const About = lazy(() => import("./pages/about"));

// SUBPAGES
const ClearCaivrs = lazy(() => import("./pages/dev/clearcaivrs"));
const PilgrimWedding = lazy(() => import("./pages/dev/pilgrimwedding"));
const PSLFWaiver = lazy(() => import("./pages/dev/pslfwaiver"));
const Teachable = lazy(() => import("./pages/dev/teachable"));

const Ahsoka = lazy(() => import("./pages/design/ahsokatano"));
const Chulo = lazy(() => import("./pages/design/chulo"));
const Waititi = lazy(() => import("./pages/design/taikawaititi"));
const WoodlandHills = lazy(() => import("./pages/design/woodlandhills"));

const Donut = lazy(() => import("./pages/motion/3ddonut"));
const UdeanyMotion = lazy(() => import("./pages/motion/udeanymotion"));

const App = () => {
  return (
    <Router>
      <Header />
      <Suspense>
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
          <Route path="/motion/udeanymotion" element={<UdeanyMotion />}></Route>
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
};

export default App;
