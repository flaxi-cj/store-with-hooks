import { combineReducers } from "redux";
import categoryReducer from "./categorySelected/categoryReducer"
import currencyReducer from "./currency/currencyReducer";
import shoppingCartReducer from "./shoppingCart/shoppingCartReducer";

const rootReducer = combineReducers({
    category: categoryReducer,
    currency: currencyReducer,
    shoppingCart: shoppingCartReducer
})

export default rootReducer