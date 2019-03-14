import { PEOPLE_INIT_LOAD, PEOPLE_CHANGE_PAGE, PEOPLE_ADD } from '../actionTypes';

const initState = {};

const peopleReducer = (state = initState, action) => {

    switch (action.type) {
        case PEOPLE_INIT_LOAD:
            console.log('loading inital people data');
            return {
                ...state,
                people: action.payload
            };
        
        case PEOPLE_CHANGE_PAGE:
            console.log('loading page');
            return {
                ...state,
                people: action.payload
            };
        case PEOPLE_ADD:
            console.log('Adding new people');
            return {
                ...state,
                people: [...state.people, action.payload]
            }

        default:
            return state;
    }

}

export default peopleReducer;