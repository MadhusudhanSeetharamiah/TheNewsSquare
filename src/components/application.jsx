/**
 * author       Madhusudhan Seetharamiah
 */
import React, { Component } from "react";
import Header from "./header";
import Footer from "./footer";
import "../styles/css/common.css";

class Application extends Component {
  render() {
    return (
      <div className="application">
        <Header />
        <Footer location={this.props.location} />
      </div>
    );
  }
}

export default Application;
