import React, { Component } from "react";
import fav from "../styles/images/svg/heart.svg";
import fav_filled from "../styles/images/svg/heart_filled.svg";
import {
  setDataToLocalStore,
  getDataFromLocalStore
} from "../helpers/generichelper";

class ArticleTile extends Component {
  constructor(props) {
    super(props);
    this.onFavClick = this.onFavClick.bind(this);
  }

  onFavClick(id) {
    let currentLikedItems =
      JSON.parse(
        getDataFromLocalStore({ key: "research.madhusudhan@gmail.com" })
      ) || [];
    if (currentLikedItems.length > 0) {
      let foundIndex = currentLikedItems.indexOf(id);
      if (foundIndex < 0) {
        currentLikedItems.push(id);
      } else {
        currentLikedItems.splice(foundIndex, 1);
      }
      setDataToLocalStore({
        value: JSON.stringify(currentLikedItems)
      });
    } else {
      setDataToLocalStore({ value: JSON.stringify([id]) });
    }
    this.setState({ dummyUpdate: "" });
  }

  render() {
    const {
      article: { image, id, description, author, likes }
    } = this.props;
    let currentLikedItems =
      JSON.parse(
        getDataFromLocalStore({ key: "research.madhusudhan@gmail.com" })
      ) || [];
    let localLikes = currentLikedItems.indexOf(id) > -1 && 1;
    return (
      <div className="tile_header">
        <div className="article_img_div">
          <img src={image} alt="image" className="article_img" />
        </div>
        <div className="article_description">{description}</div>
        <div className="fav_wrapper">
          <img
            src={
              likes > 0 || currentLikedItems.indexOf(id) > -1 ? fav_filled : fav
            }
            alt="image"
            id="fav_icon"
            onClick={this.onFavClick.bind(this, id)}
          />
          <span id="likes_count">{likes || localLikes}</span>
        </div>
      </div>
    );
  }
}

export default ArticleTile;
