import peopleActionTypes from "../action-types/people-action-types";

export const initLoad = () => ({
    type: peopleActionTypes.REQ_INIT_LOAD
});

export const changePage = (page) => ({
    type: peopleActionTypes.REQ_CHANGE_PAGE,
    page
});

export const addPerson = (people) => ({
    type: peopleActionTypes.REQ_ADD,
    people
});

export const removePersonById = (id) => ({
    type: peopleActionTypes.REQ_REMOVE,
    id
});