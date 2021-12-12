import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./rootReducer";
// Foarte fain de implementat apply middleware si logger!!!
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, thunk)))

export default store