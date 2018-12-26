export default function articlesReducer(
  state = {
    fetchedArticles: {
      articlesKey: null,
      articlesList: []
    }
  },
  action
) {
  switch (action.type) {
    case "UPDATE_FETCHED_ARTICLES":
      return {
        ...state,
        fetchedArticles: action.payload
      };

    default:
      return state;
  }
}
