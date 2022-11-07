import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../images/logos/personal-logo-square.svg";
import Burger from "../burger/burger";
import "./header.scss";

class Header extends React.Component {
  render() {
    return (
      <nav className="header-grid">
        <div className="logo">
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <div className="desktop-menu">
          <ul>
            <li>
              <Link to="/dev">Dev</Link>
            </li>
            <li>
              <Link to="/design">Design</Link>
            </li>
            <li>
              <Link to="/motion">Motion</Link>
            </li>
            <li>
              <Link to="/resume">Resume</Link>
            </li>
            {/* <li>
              <Link to="/about">About</Link>
            </li> */}
          </ul>
        </div>
        <Burger onClick={this.toggleMenu} />
      </nav>
    );
  }
}

export default Header;
