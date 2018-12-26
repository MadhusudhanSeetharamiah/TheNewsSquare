const parseJSONData = response => {
  return response
    .text()
    .then(text => {
      return text ? JSON.parse(text) : {};
    })
    .catch(error => {
      return { data: [], stdErr: error.message };
    });
};

export const secureFetch = (url, request = { method: "GET" }, noJson) => {
  return new Promise(function(resolve, reject) {
    dataFetch(url, request)
      .then(response => {
        resolve(noJson ? response : parseJSONData(response));
      })
      .catch(error => {
        resolve({ data: [], stdErr: error.message });
      });
  });
};

export const dataFetch = (url, request = { method: "GET" }) => {
  return fetch(url, request).then(response => {
    return response;
  });
};
