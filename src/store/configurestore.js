import { applyMiddleware, compose, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "../reducers/reducers";

export default function configureStore(preloadedState) {
  const middlewares = [thunkMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);
  const enhancers = [
    middlewareEnhancer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  ];
  const composedEnhancers = compose(...enhancers);

  const store = createStore(rootReducer, preloadedState, composedEnhancers);

  return store;
}
