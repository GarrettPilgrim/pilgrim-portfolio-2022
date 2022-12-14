import React from "react";
import ExamplePage from "../components/example-page/example-page";

const ErrorPage = () => {
  return (
    <>
      <h1>Oops</h1>
      <ExamplePage>
        <iframe
          src="https://giphy.com/embed/xTiIzAwfDoMEljZVPq"
          width="480"
          height="208"
          className="giphy-gif"
          title="Error Page Gif"
        ></iframe>
        <h2>Something went wrong</h2>
        <p>
          You've encountered an error. I'm sorry. Looks like something is broken
          and what you're looking for doesn't exist.
        </p>
      </ExamplePage>
    </>
  );
};

export default ErrorPage;
