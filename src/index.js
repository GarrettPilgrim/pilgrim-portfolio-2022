import React, { useEffect, Suspense } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  useLocation,
  useOutlet,
} from "react-router-dom";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import routes from "./routes";

// COMPONENTS
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import ErrorPage from "./pages/404";
import Loader from "./pages/loader";
import ScrollToTop from "./components/movement/scroll-to-top/scroll-to-top";

// STYLES
import "./styles.scss";
import "./transitions.scss";

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

  // REWORK LOCATION NAME FOR PAGE TITLES
  const styleTitle = () => {
    const pageTitle = location.pathname.replaceAll("/", " ");
    const newPageTitle = pageTitle.charAt(1).toUpperCase() + pageTitle.slice(2);
    return newPageTitle;
  };

  // SET HOME TITLE AND SUB PAGE TITLES
  useEffect(() => {
    if (styleTitle()) {
      document.title = `Garrett Pilgrim — ` + styleTitle();
    } else {
      document.title = `Garrett Pilgrim Portfolio`;
    }
  });

  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <ScrollToTop />
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
      </Suspense>
    </>
  );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<RouterProvider router={router} fallbackElement={<ErrorPage />} />);
