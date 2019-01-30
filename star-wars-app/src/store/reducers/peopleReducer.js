import { PEOPLE_INIT_LOAD, PEOPLE_CHANGE_PAGE } from '../actionTypes';

const initState = {};

const peopleReducer = (state = initState, action) => {

    switch (action.type) {
        case PEOPLE_INIT_LOAD:
            console.log('loading inital people data');
            return {
                ...state,
                people: action.payload.results,
                count: action.payload.count,
                page: { next: action.payload.next, previous: action.payload.previous }
            };
        
        case PEOPLE_CHANGE_PAGE:
            console.log('loading page');
            return {
                ...state,
                people: action.payload.results,
                page: { next: action.payload.next, previous: action.payload.previous }
            };
        default:
            return state;
    }

}

export default peopleReducer;