import React, { Component } from "react";
import Header from "./header";
import Footer from "./footer";
import { tabLabel } from "../constants";
import { Control, Form, actions } from "react-redux-form";
import { connect } from "react-redux";
import * as action from "../actions/actions";

function mapStateToProps(state, ownProps) {
  return {
    forms: state.rrfState.forms
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    addArticleAction: (
      { title, description, author, image, tags, published },
      callback
    ) =>
      dispatch(
        action.addArticleAction(
          {
            title,
            description,
            author,
            image,
            tags,
            published
          },
          callback
        )
      )
  };
}
class AddArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notificationMessage: ""
    };
    this.onPublishArticle = this.onPublishArticle.bind(this);
  }

  onPublishArticle() {
    const {
      forms: { rrfState },
      addArticleAction
    } = this.props;
    const articleModalKey = rrfState.addarticle;
    addArticleAction(
      {
        title: articleModalKey.title.value,
        description: articleModalKey.description.value,
        author: articleModalKey.author.value,
        image: articleModalKey.image.value,
        tags: [articleModalKey.tags.value],
        published: false
      },
      response => {
        if (response === "Success") {
          this.setState({
            notificationMessage:
              "Article with title " +
              articleModalKey.title.value +
              " added successfully!"
          });
        } else {
          this.setState({
            notificationMessage:
              "Failed to update article " +
              articleModalKey.title.value +
              ", please try after some time!"
          });
        }
      }
    );
    console.log("forms.addarticle", rrfState.addarticle);
  }

  render() {
    return (
      <div className="add_article_wrapper">
        <Header
          title={tabLabel.create}
          notificationMessage={this.state.notificationMessage}
        />
        <div className="add_article">
          <Form model={"rrfState.addarticle"} id="add_article_form">
            <Control.text
              type="text"
              required
              model={".title"}
              placeholder="Title"
              className="add_article_form_item"
            />
            <Control.textarea
              model={".description"}
              required
              placeholder="Description"
              className="add_article_form_item"
            />
            <Control.text
              type="text"
              required
              model={".category"}
              className="add_article_form_item"
              placeholder="Category / Tags"
            />
            <Control.text
              type="text"
              required
              model={".author"}
              placeholder="Author"
              className="add_article_form_item"
            />
            <Control.text
              type="text"
              model={".image"}
              required
              className="add_article_form_item"
              placeholder="Image url only"
            />
            <Control.text
              type="text"
              required
              model={".tags"}
              className="add_article_form_item"
              placeholder="Tags (give multiple tags using comma)"
            />
          </Form>
          <button onClick={this.onPublishArticle} className="publish">
            {" "}
            {"PUBLISH"}{" "}
          </button>
        </div>
        <Footer location={this.props.location} />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddArticle);
