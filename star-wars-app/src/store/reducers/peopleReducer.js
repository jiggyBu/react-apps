import { PEOPLE_INIT_LOAD, PEOPLE_CHANGE_PAGE, PEOPLE_ADD, PEOPLE_DELETE } from '../actionTypes';

const initState = {};

const peopleReducer = (state = initState, action) => {

    switch (action.type) {
        case PEOPLE_INIT_LOAD:
            console.log('loading inital people data');
            return {
                ...state,
                people: action.payload.people,
                totalPages: action.payload.totalPages,
                totalElements: action.payload.totalElements,
                currentPage: action.payload.currentPage
            };
        
        case PEOPLE_CHANGE_PAGE:
            console.log('loading page');
            return {
                ...state,
                people: action.payload.people,
                currentPage: action.payload.currentPage
            };
        case PEOPLE_ADD:
            console.log('Adding new person');
            return {
                ...state,
                people: [...state.people, action.payload]
            }
        case PEOPLE_DELETE:
            console.log('Deleting person');
            return {
                ...state,
                people: state.people.filter(p => p.id !== action.payload)
            }

        default:
            return state;
    }

}

export default peopleReducer;