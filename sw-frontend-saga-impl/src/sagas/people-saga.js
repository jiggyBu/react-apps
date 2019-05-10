import PeopleService from '../services/people-service'
import { put, takeEvery } from 'redux-saga/effects'
import peopleActionTypes from '../store/action-types/people-action-types';
import ApiUtils from '../utils/api-utils';

function* getPeople() {
    const people = yield PeopleService.getPeople();
    
    if (ApiUtils.statusCodeValidation(people)) {
        try {
            yield put({ type: peopleActionTypes.INIT_LOAD, data: people.data });

        } catch(e) {
            throw e;
        }
    }
}

function* changePage(page) {
    const people = yield PeopleService.changePage(page);

    if (ApiUtils.statusCodeValidation(people)) {
        try {
            yield put({ type: peopleActionTypes.CHANGE_PAGE, data: people.data });

        } catch(e) {
            throw e;
        }
    }
}

function* addPerson(prsn) {
    console.log(prsn);
    const person = yield PeopleService.addPerson(prsn);

    if (ApiUtils.statusCodeValidation(person)) {
        try {
            yield put({ type: peopleActionTypes.ADD, person: person.data });
        
        } catch(e) {
            throw e;
        }
    }
}

function* removePersonById(id) {
    const personId = yield PeopleService.removePersonById(id);

    if (ApiUtils.statusCodeValidation(personId)) {
        try {
            yield put({ type: peopleActionTypes.REMOVE, id: personId.id });
        
        } catch(e) {
            throw e;
        }
    }
}

export default function* peopleSaga() {
    yield takeEvery(peopleActionTypes.REQ_INIT_LOAD, getPeople);
    yield takeEvery(peopleActionTypes.REQ_CHANGE_PAGE, changePage);
    yield takeEvery(peopleActionTypes.REQ_ADD, addPerson);
    yield takeEvery(peopleActionTypes.REQ_REMOVE, removePersonById);
}