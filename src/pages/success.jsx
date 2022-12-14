import React from "react";
import ExamplePage from "../components/example-page/example-page";

const ErrorPage = () => {
  return (
    <>
      <h1>Thank you</h1>
      <ExamplePage>
        <iframe
          src="https://giphy.com/embed/zGnnFpOB1OjMQ"
          width="480"
          height="215"
          title="Thank you GIF"
          className="giphy-thank-you"
        ></iframe>
        <h2>Form Submitted</h2>
        <p>
          I received your form submission and I'll be in touch soon! In the
          meantime enjoy this tearable pun.
        </p>
        <p>
          What did one potato say to the other after they heard about french
          fries?
        </p>
        <p>Keep your eyes peeled.</p>
      </ExamplePage>
    </>
  );
};

export default ErrorPage;
