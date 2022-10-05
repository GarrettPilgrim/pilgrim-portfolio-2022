import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from '../../images/logos/personal-logo-square.svg';
import Burger from "../burger/burger";
import "./header.scss";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="header-grid">
        <div className="logo">
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <nav>
          <ul className="desktop-menu">
            <li>
              <Link to="/dev">Dev</Link>
            </li>
            <li>
              <Link to="/motion">Motion</Link>
            </li>
            <li>
              <Link to="/design">Design</Link>
            </li>
            <li>
              <Link to="/resume">Resume</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <div>
          <Burger className="burger" onClick={this.toggleMenu} />
        </div>
      </div>
    )
  }
}

export default Header;