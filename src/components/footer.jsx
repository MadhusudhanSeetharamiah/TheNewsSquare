/**
 * author       Madhusudhan Seetharamiah
 */
import React, { Component } from "react";
import { Link } from "react-router";
import home from "../styles/images/svg/home.svg";
import homeHighlighted from "../styles/images/svg/home_highlighted.svg";
import fav from "../styles/images/svg/heart.svg";
import favHighlighted from "../styles/images/svg/heart_highlighted.svg";
import add from "../styles/images/svg/add.svg";
import addHighlighted from "../styles/images/svg/add_highlighted.svg";

class Footer extends Component {
  render() {
    const {
      location: { pathname }
    } = this.props;
    return (
      <footer className="main_footer_wrapper">
        <div className="footer">
          <div>
            <Link to="/home">
              <img
                src={pathname === "/home" ? homeHighlighted : home}
                alt="home"
                className="action_icons"
              />
            </Link>
          </div>
          <div>
            <Link to="/popular">
              <img
                src={pathname === "/popular" ? favHighlighted : fav}
                alt="fav"
                className="action_icons"
              />
            </Link>
          </div>
          <div>
            <Link to="/create">
              <img
                src={pathname === "/create" ? addHighlighted : add}
                alt="add"
                className="action_icons"
              />
            </Link>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
