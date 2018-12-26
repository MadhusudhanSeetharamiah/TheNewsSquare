/**
 * author       Madhusudhan Seetharamiah
 */
import React, { Component } from "react";
import mainIcon from "../styles/images/logo.png";
import { Link } from "react-router";
import Notification from "./notification";

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="main_logo">
          <Link to="/home" className="header_link">
            <img src={mainIcon} alt="icon" className="main_icon" />
          </Link>
        </div>
        <div className="tab_title">{this.props.title} </div>
        <Notification notificationMessage={this.props.notificationMessage} />
      </header>
    );
  }
}
Header.defaultProps = {
  title: ""
};
export default Header;
