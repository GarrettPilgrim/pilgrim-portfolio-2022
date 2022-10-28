import React from "react";
import { Link } from "react-router-dom";
import "./mobile-menu.scss"

class MobileMenu extends React.Component {
  render() {
    return (
        <>
        <nav className="mobile-menu-container">
          <ul className="mobile-menu">
              <li>
                <Link to="/" onClick={this.props.clickClose}>Home</Link>
              </li>
              <li>
                <Link to="/dev" onClick={this.props.clickClose}>Dev</Link>
              </li>
              <li>
                <Link to="/motion" onClick={this.props.clickClose}>Motion</Link>
              </li>
              <li>
                <Link to="/design" onClick={this.props.clickClose}>Design</Link>
              </li>
              <li>
                <Link to="/resume" onClick={this.props.clickClose}>Resume</Link>
              </li>
              {/* <li>
                <Link to="/about" onClick={this.props.clickClose}>About</Link>
              </li> */}
            </ul>
        </nav>
      </>
    )
  }
}

export default MobileMenu;