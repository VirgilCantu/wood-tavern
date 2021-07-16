import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";

import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";

import beersReducer from "./reducers/beersReducer";
import cocktailsReducer from "./reducers/cocktailsReducer";
import eventsReducer from "./reducers/eventsReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  beers: beersReducer,
  cocktails: cocktailsReducer,
  events: eventsReducer
});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
