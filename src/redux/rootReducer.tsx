import { combineReducers } from "redux";

import shoppingReducer from "./shop/shoppingReducer";

const rootReducer = combineReducers({
    shop: shoppingReducer,
});

export default rootReducer;
