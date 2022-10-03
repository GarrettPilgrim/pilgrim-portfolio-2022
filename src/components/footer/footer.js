import React from "react";
import './footer.scss';

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
       </footer>
       </>
    );
  }
}

export default Footer;