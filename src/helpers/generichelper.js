import { find, propEq } from "ramda";

export function setDataToLocalStore({
  key = "research.madhusudhan@gmail.com",
  value
}) {
  if (key && value) {
    localStorage.setItem(key, value);
  } else {
    throw "Can store in local store!";
  }
}

export function getDataFromLocalStore({ key }) {
  if (key) {
    return localStorage.getItem(key);
  } else {
    throw "Can find in store !";
  }
}

export function getArticlesDetailsById({ id, list = [] }) {
  if (list.length && id) {
    return find(propEq("id", id), list) || {};
  }
}
