import React from "react";
import MobileMenu from "../mobile-menu/mobile-menu";
import "./burger.scss";

class Burger extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false,
    };

    this.toggleVisibility = this.toggleVisibility.bind(this);
    this.closeOnClick = this.closeOnClick.bind(this);
  }

  toggleVisibility() {
    this.setState((state) => ({
      visibility: !state.visibility,
    }));
  }

  closeOnClick() {
    this.setState((state) => ({
      visibility: !state.visibility,
    }));
  }

  render() {
    if (this.state.visibility) {
      return (
        <>
          <button
            className="burger-container"
            onClick={this.toggleVisibility}
            aria-label="close"
          >
            <div className="burger burger-x" />
            <div className="burger burger-x" />
            <div className="burger burger-x" />
          </button>
          <div className="open">
            <MobileMenu clickClose={this.closeOnClick} />
          </div>
        </>
      );
    } else {
      return (
        <>
          <button
            className="burger-container"
            onClick={this.toggleVisibility}
            aria-label="open"
          >
            <div className="burger burger-reg" />
            <div className="burger burger-reg" />
            <div className="burger burger-reg" />
          </button>
          <div className="close">
            <MobileMenu clickClose={this.closeOnClick} />
          </div>
        </>
      );
    }
  }
}

export default Burger;
