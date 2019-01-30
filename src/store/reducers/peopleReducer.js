import { PEOPLE_INIT_LOAD, PEOPLE_NEXT_PAGE } from '../actionTypes';

const initState = {};

const peopleReducer = (state = initState, action) => {

    switch (action.type) {
        case PEOPLE_INIT_LOAD:
            const { results, count, next, prev } = action.payload;
            console.log('loading inital people data');
            return {
                ...state,
                people: results,
                count,
                page: { next, prev }
            };
        
        case PEOPLE_NEXT_PAGE:
            console.log('loading next page');
            return {
                ...state
            };
        default:
            return state;
    }

}

export default peopleReducer;