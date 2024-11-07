import { combineReducers } from "@reduxjs/toolkit";
import cartItemReducer from "./shoppingReducer";

export default  combineReducers({
    cartItemReducer,
});