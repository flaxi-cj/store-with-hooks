import { combineReducers } from "redux";
import currencyReducer from "./currency/currencyReducer";
import categoryReducer from "./categorySelected/categoryReducer"
import shoppingCartReducer from "./shoppingCart/shoppingCartReducer";

const rootReducer = combineReducers({
    currency:currencyReducer,
    category:categoryReducer,
    shoppingCart:shoppingCartReducer
})

export default rootReducer