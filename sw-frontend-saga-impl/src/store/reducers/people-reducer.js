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
            console.log(action.payload);
            return {
                ...state,
                people: [...action.payload.people],
                totalPages: action.payload.totalPages,
                totalElements: action.payload.totalElements,
                currentPage: action.payload.currentPage
            };
    
        default:
            return state;
    }
}