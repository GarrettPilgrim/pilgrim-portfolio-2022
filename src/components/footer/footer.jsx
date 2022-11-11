import React from "react";
import "./footer.scss";
import { ReactComponent as LinkedIn } from "../../images/svgs/linkedin-icon.svg";
import { ReactComponent as TikTok } from "../../images/svgs/tiktok-icon.svg";
import { ReactComponent as Instagram } from "../../images/svgs/instagram-icon.svg";
import { ReactComponent as GitHub } from "../../images/svgs/github-icon.svg";

const Footer = () => {
  return (
    <>
      <footer>
        <form method="get" action="">
          <h2>Get in Touch</h2>
          <fieldset>
            <label for="name">
              Name:
              <input id="name" name="name" type="text" />
            </label>
            <label for="email">
              Email:
              <input id="email" name="email" type="email" />
            </label>
            <label for="info">
              How can I help you?
              <textarea id="info" name="info"></textarea>
            </label>
            <button type="submit">Submit</button>
          </fieldset>
        </form>
        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/garrett-pilgrim/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedIn />
          </a>
          <a
            href="https://github.com/GarrettPilgrim"
            target="_blank"
            rel="noreferrer"
          >
            <GitHub />
          </a>
          {/* <a
              href="https://www.instagram.com/pilgrimgarrett/?next=%2F"
              target="_blank"
              rel="noreferrer"
            >
              <Instagram />
            </a> */}
          {/* <a
              href="https://www.tiktok.com/@garrettpilgrim"
              target="_blank"
              rel="noreferrer"
            >
              <TikTok />
            </a> */}
        </div>
        <div className="circle"></div>
      </footer>
    </>
  );
};

export default Footer;
