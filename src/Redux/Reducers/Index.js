import { combineReducers } from "redux";
import GigReducer from "./GigReducer";

const reducers = combineReducers({
    allGig: GigReducer
});

export default reducers; 