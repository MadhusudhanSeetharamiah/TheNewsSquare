import { baseURI } from "../constants";
import { secureFetch } from "./fetchhelper";

export function fetchArticlesByKeys(
  { id = "", author = "", published = "" },
  actionCallback
) {
  let queryParams =
    "?id=" +
    id +
    "&author=research.madhusudhan@gmail.com&published=" +
    published;
  secureFetch(baseURI + queryParams, {
    method: "GET"
  }).then(json => actionCallback(json));
}

export function addArticle({ articleAttributes }, actionCallback) {
  secureFetch(baseURI, {
    method: "POST",
    body: JSON.stringify(articleAttributes),
    headers: {
      "Content-Type": "application/json"
    },
    credentials: "same-origin"
  }).then(json => actionCallback(json));
}
