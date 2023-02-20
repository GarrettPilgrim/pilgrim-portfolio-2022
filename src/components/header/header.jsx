import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../images/logos/personal-logo-square.svg";
import Burger from "../burger/burger";
import "./header.scss";

class Header extends React.Component {
  render() {
    return (
      <header className="header-grid">
        <div className="logo">
          <Link to="/" aria-label="Home button">
            <Logo />
          </Link>
        </div>
        <nav className="desktop-menu">
          <ul>
            <li>
              <Link to="/web">Web</Link>
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
        </nav>
        <Burger onClick={this.toggleMenu} />
      </header>
    );
  }
}

export default Header;
