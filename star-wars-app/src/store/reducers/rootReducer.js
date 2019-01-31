import { combineReducers } from "redux";
import peopleReducer from "./peopleReducer";
import planetReducer from "./planetReducer";
import starshipReducer from "./starshipReducer";

const rootReducer = combineReducers({
    people: peopleReducer,
    planets: planetReducer,
    starships: starshipReducer
});

export default rootReducer;