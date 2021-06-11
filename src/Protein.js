import React from "react";
import { Provider } from "react-redux";

// Components
import Tree from "./components/Tree";
import Basket from "./components/Basket";
import Apple from "./components/Apple";
import Button from "./components/Button";

import store from "./store";

const Protein = () => {
  return (
    <Provider store={store}>
      <Tree />
      <Basket />
      <Apple />
      <Button />
    </Provider>
  );
};

export default Protein;
