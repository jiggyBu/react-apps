import { STARSHIP_INIT_LOAD, STARSHIP_CHANGE_PAGE } from "../actionTypes";

const initState = {};

const starshipReducer = (state = initState, action) => {

    switch (action.type) {
        case STARSHIP_INIT_LOAD:
            console.log('loading inital starship data');
            return {
                ...state,
                starships: action.payload.results,
                count: action.payload.count,
                page: { next: action.payload.next, previous: action.payload.previous }
            }
    
        case STARSHIP_CHANGE_PAGE:
            console.log('loading starship page');
            return {
                ...state,
                starships: action.payload.results,
                page: { next: action.payload.next, previous: action.payload.previous }
            }
        
        default:
            return state;
    }
}

export default starshipReducer;