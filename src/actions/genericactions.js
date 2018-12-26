import { fetchArticlesByKeys, addArticle } from "../services/articlesapi";

function updateFetchedUserArticle(articlesList, articlesKey) {
  return {
    type: "UPDATE_FETCHED_ARTICLES",
    payload: {
      articlesList,
      articlesKey
    }
  };
}

export const getArticlesAction = (
  { id, author, published },
  callback
) => dispatch => {
  fetchArticlesByKeys({ id, author, published }, response => {
    if (response) {
      dispatch(updateFetchedUserArticle(response, author + id));
    }
  });
};

export const addArticleAction = (
  {
    title = "",
    description = "",
    author = "",
    image = "",
    tags = [],
    published = false
  },
  callback
) => dispatch => {
  addArticle(
    {
      articleAttributes: { title, description, author, image, tags, published }
    },
    response => {
      if (response && response.id) {
        callback && callback("Success");
      } else {
        callback && callback("Fail");
      }
    }
  );
};
