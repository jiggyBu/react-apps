import peopleActionTypes from "../action-types/people-action-types";

export const initLoad = () => ({
    type: peopleActionTypes.GET_DATA
});

export const changePage = (page) => ({
    type: peopleActionTypes.REQ_PAGE,
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