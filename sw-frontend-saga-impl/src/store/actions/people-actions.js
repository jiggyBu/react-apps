import peopleActionTypes from "../action-types/people-action-types";

export const initLoad = () => ({
    type: peopleActionTypes.REQ_INIT_LOAD
});

export const changePage = (page) => ({
    type: peopleActionTypes.REQ_CHANGE_PAGE,
    page
});

export const add = (person) => ({
    type: peopleActionTypes.REQ_ADD,
    person
});

export const remove = (id) => ({
    type: peopleActionTypes.REQ_REMOVE,
    id
});