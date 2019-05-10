import peopleActionTypes from "../action-types/people-action-types";

const initState = {
    people: [],
    totalPages: null,
    totalElements: null,
    currentPage: null
}

export default (state = initState, action) => {

    const { type } = action;

    switch (type) {
        case peopleActionTypes.INIT_LOAD:
            return Object.assign({}, state, {
                people: action.data.people,
                totalPages: action.data.totalPages,
                totalElements: action.data.totalElements,
                currentPage: action.data.currentPage
            });

        case peopleActionTypes.CHANGE_PAGE:
            return Object.assign({}, state, {
                people: action.data.people,
                currentPage: action.data.currentPage
            });

        case peopleActionTypes.REMOVE:
            let people = state.people.filter(p => p.id !== action.id);
            return Object.assign({}, state, {
                people
            });

        default:
            return state;
    }
}