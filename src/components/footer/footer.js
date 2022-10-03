import React from "react";
import './footer.scss';
import { ReactComponent as LinkedIn } from '../../images/svgs/linkedin-icon.svg';
import { ReactComponent as TikTok } from '../../images/svgs/tiktok-icon.svg';
import { ReactComponent as Instagram } from '../../images/svgs/instagram-icon.svg';

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
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
            <label for="info">How can I help you?
              <textarea id="info" name="info"></textarea>
            </label>
            <button type="submit">Submit</button>
          </fieldset>
        </form>
        <div className="social-links">
          <a href="" target="_blank">
            <LinkedIn />
          </a>
          <a href="" target="_blank">
            <Instagram />
          </a>
          <a href="" target="_blank">
            <TikTok />
          </a>
        </div>
       </footer>
       </>
    );
  }
}

export default Footer;