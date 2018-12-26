/**
 * author       Madhusudhan Seetharamiah
 */
import React from "react";
import ReactDOM from "react-dom";
import Application from "./components/application";
import ShowArticle from "./components/showarticle";
import AddArticle from "./components/addarticle";
import Frequent from "./components/frequent";
import "./styles/css/common.css";
import { Provider } from "react-redux";
import "whatwg-fetch";
import configureStore from "./store/configurestore";
import { Router, Route, hashHistory } from "react-router";
const store = configureStore();
ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path={"/"} component={Application} />
      <Route path="home" component={ShowArticle} />
      <Route path="popular" component={Frequent} />
      <Route path="create" component={AddArticle} />
    </Router>
  </Provider>,
  document.getElementById("root")
);
