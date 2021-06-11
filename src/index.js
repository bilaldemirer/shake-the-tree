import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import Protein from "./Protein";

render(
  <Provider store={store}>
    <Protein />
  </Provider>,
  document.getElementById("root")
);
