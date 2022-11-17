import React from "react";
import { Link } from "react-router-dom";
import "./mobile-menu.scss";

const MobileMenu = (props) => {
  return (
    <>
      <nav className="mobile-menu-container">
        <ul className="mobile-menu">
          <li>
            <Link to="/" onClick={props.clickClose}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/dev" onClick={props.clickClose}>
              Dev
            </Link>
          </li>
          <li>
            <Link to="/motion" onClick={props.clickClose}>
              Motion
            </Link>
          </li>
          <li>
            <Link to="/design" onClick={props.clickClose}>
              Design
            </Link>
          </li>
          <li>
            <Link to="/resume" onClick={props.clickClose}>
              Resume
            </Link>
          </li>
          {/* <li>
                <Link to="/about" onClick={props.clickClose}>About</Link>
              </li> */}
        </ul>
      </nav>
    </>
  );
};

export default MobileMenu;
