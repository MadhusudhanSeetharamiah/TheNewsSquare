import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "./header";
import Footer from "./footer";
import { tabLabel } from "../constants";
import ArticleTile from "./articletile";
import {
  getDataFromLocalStore,
  getArticlesDetailsById
} from "../helpers/generichelper";
import * as actions from "../actions/actions";

function mapStateToProps(state, ownProps) {
  return {
    fetchedArticles: state.articlesReducer.fetchedArticles
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    getArticlesAction: ({ id }) =>
      dispatch(actions.getArticlesAction({ id: id, author: "", published: "" }))
  };
}

class Frequent extends Component {
  constructor(props) {
    super(props);
    this.renderLikedArticles = this.renderLikedArticles.bind(this);
  }

  renderLikedArticles() {
    const { fetchedArticles, getArticlesAction } = this.props;
    let savedArticlesIds = JSON.parse(
      getDataFromLocalStore({
        key: "research.madhusudhan@gmail.com"
      })
    );
    let savedArticles = [];
    savedArticlesIds.forEach(function(id) {
      let listTopBeParsed = fetchedArticles.articlesList;
      if (!listTopBeParsed.length) {
        getArticlesAction({ id }, response => {
          if (response.length) {
            listTopBeParsed.push(response[0]);
          }
        });
      }
      savedArticles.push(getArticlesDetailsById({ id, list: listTopBeParsed }));
    }, this);

    if (savedArticles && savedArticles.length) {
      let article = [];
      console.log("savedArticles", savedArticles);
      savedArticles.forEach(function(element) {
        element &&
          article.push(
            <div className="article_tile_outside_wrapper">
              <ArticleTile article={element} />
            </div>
          );
      }, this);

      return article;
    }
    return "No saved articles to show";
  }

  render() {
    return (
      <div className="frequent_article_wrapper">
        <Header title={tabLabel.mostPopular} />
        <div className="frequent_article_parent">
          {this.renderLikedArticles()}
        </div>
        <Footer location={this.props.location} />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Frequent);
