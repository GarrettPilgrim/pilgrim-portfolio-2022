import React from "react";
import MobileMenu from "../mobile-menu/mobile-menu";
import "./burger.scss";

class Burger extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visibility: false,
    };

    this.toggleVisibility = this.toggleVisibility.bind(this)
    this.closeOnClick = this.closeOnClick.bind(this)
  }

  toggleVisibility() {
    this.setState(state => ({
      visibility: !state.visibility
    }));
  }

  closeOnClick() {
    this.setState(state => ({
      visibility: !state.visibility
    }));
  }

  render() {
    if (this.state.visibility) {
      return(
        <div className="mobile-transition">
          <button className="burger-container" onClick={this.toggleVisibility}>
            <div className="burger burger-x" />
            <div className="burger burger-x" />
            <div className="burger burger-x" />
          </button>
          <div className="open" >
             <MobileMenu clickClose={this.closeOnClick} />
          </div>
        </div>
      )
    } else {
      return (
        <div className="mobile-transition">
          <button className="burger-container" onClick={this.toggleVisibility}>
            <div className="burger burger-reg" />
            <div className="burger burger-reg" />
            <div className="burger burger-reg" />
          </button>
          <div className="close">
             <MobileMenu clickClose={this.closeOnClick} />
          </div>
        </div>
        
      )
    }
  }
}

export default Burger;