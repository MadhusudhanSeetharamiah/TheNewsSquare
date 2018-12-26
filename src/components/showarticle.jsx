import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "./header";
import Footer from "./footer";
import { tabLabel } from "../constants";
import ArticleTile from "./articletile";
import * as actions from "../actions/actions";

function mapStateToProps(state, ownProps) {
  return {
    fetchedArticles: state.articlesReducer.fetchedArticles
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    getArticlesAction: () =>
      dispatch(actions.getArticlesAction({ id: "", author: "", published: "" }))
  };
}

class ShowArticle extends Component {
  constructor(props) {
    super(props);
    this.renderArticles = this.renderArticles.bind(this);
    this.getUserArticles = this.getUserArticles.bind(this);
  }

  componentWillMount() {
    this.getUserArticles();
  }

  getUserArticles() {
    this.props.getArticlesAction();
  }

  renderArticles() {
    const {
      fetchedArticles: { articlesList }
    } = this.props;
    let article = [];
    articlesList.forEach(function(element) {
      article.push(
        <div className="article_tile_outside_wrapper">
          <ArticleTile article={element} />
        </div>
      );
    }, this);

    return article;
  }

  render() {
    return (
      <div className="show_article_wrapper">
        <Header title={tabLabel.home} />
        <div className="tile_render"> {this.renderArticles()}</div>
        <Footer location={this.props.location} />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowArticle);
