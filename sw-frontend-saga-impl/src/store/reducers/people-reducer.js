import peopleActionTypes from "../action-types/people-action-types";

const initState = {
    people: [],
    totalPages: null,
    totalElements: null,
    currentPage: null,
    errorMsg: null
}

export default (state = initState, action) => {

    const { type } = action;

    switch (type) {
        case peopleActionTypes.SET_DATA:
            return Object.assign({}, state, {
                people: action.data.people,
                totalPages: action.data.totalPages,
                totalElements: action.data.totalElements,
                currentPage: action.data.currentPage
            });

        case peopleActionTypes.ADD_PERSON:
            return Object.assign({}, state, {
                people: [...state.people, action.person]
            });
        
        case peopleActionTypes.REMOVE_PERSON:
            return Object.assign({}, state, {
                people: state.people.filter(p => p.id !== action.id)
            });
        
        case peopleActionTypes.RESPONSE_ERROR:
            return Object.assign({}, state, {
                errorMsg: action.msg
            });

        default:
            return state;
    }
}