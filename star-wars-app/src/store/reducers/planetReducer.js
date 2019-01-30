import { PLANET_INIT_LOAD, PLANET_CHANGE_PAGE } from "../actionTypes";

const initState = {};

const planetReducer = (state = initState, action) => {

    switch (action.type) {
        case PLANET_INIT_LOAD:
            console.log('initial planet load');
            return {
                ...state,
                planets: action.payload.results,
                count: action.payload.count,
                page: { next: action.payload.next, previous: action.payload.previous }
            };
    
        case PLANET_CHANGE_PAGE:
            console.log('loading page');
            return {
                ...state,
                planets: action.payload.results,
                page: { next: action.payload.next, previous: action.payload.previous }
            }

        default:
            return state;
    }

}

export default planetReducer;