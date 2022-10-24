import React, { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";

// import Home from './pages/home'
// import About from './pages/about'

const Home = lazy(() => import('./pages/home'));
const Dev = lazy(() => import('./pages/dev'));
const Motion = lazy(() => import('./pages/motion'));
const Design = lazy(() => import('./pages/design'));
const Resume = lazy(() => import('./pages/resume'));
const About = lazy(() => import('./pages/about'));
const ClearCaivrs = lazy(() => import('./pages/dev/clearcaivrs'));

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
          <Route path="/dev/clearcaivrs" element={<ClearCaivrs />}></Route>
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  )
}

export default App;