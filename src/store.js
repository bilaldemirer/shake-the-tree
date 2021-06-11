import { applyMiddleware, createStore } from "redux";
import counterReducer from "./redux/reducers";

// Logger with default options
import logger from "redux-logger";

const store = createStore(counterReducer, applyMiddleware(logger));

export default store;
