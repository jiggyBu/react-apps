import { combineReducers } from "redux";
import peopleReducer from "./peopleReducer";
import planetReducer from "./planetReducer";

const rootReducer = combineReducers({
    people: peopleReducer,
    planets: planetReducer
});

export default rootReducer;