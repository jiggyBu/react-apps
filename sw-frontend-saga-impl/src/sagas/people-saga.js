import PeopleService from '../services/people-service'
import { put, takeEvery } from 'redux-saga/effects'
import peopleActionTypes from '../store/action-types/people-action-types';
import { RESP_ERROR_MSG } from '../constants/messages';

function* getPeople() {
    const data = yield PeopleService.getPeople();

    if (data == null) {
        yield put({ type: peopleActionTypes.RESPONSE_ERROR, ...RESP_ERROR_MSG});
    };

    try {
        yield put({ type: peopleActionTypes.SET_DATA, data });

    } catch(e) {
        throw e;
    }
}

function* changePage(page) {
    const data = yield PeopleService.changePage(page);

    if (data == null) {
        yield put({ type: peopleActionTypes.RESPONSE_ERROR, ...RESP_ERROR_MSG});
    };

    try {
        yield put({ type: peopleActionTypes.SET_DATA, data });

    } catch(e) {
        throw e;
    }
}

function* addPerson(prsn) {
    const person = yield PeopleService.addPerson(prsn);

    try {
        yield put({ type: peopleActionTypes.ADD_PERSON, person });
        
    } catch(e) {
        throw e;
    }
}

function* removePersonById(pId) {
    const id = yield PeopleService.removePersonById(pId);
    
    try {
        yield put({ type: peopleActionTypes.REMOVE_PERSON, id });
        
    } catch(e) {
        throw e;
    }
}

export default function* peopleSaga() {
    yield takeEvery(peopleActionTypes.GET_DATA, getPeople);
    yield takeEvery(peopleActionTypes.REQ_PAGE, changePage);
    yield takeEvery(peopleActionTypes.REQ_ADD, addPerson);
    yield takeEvery(peopleActionTypes.REQ_REMOVE, removePersonById);
}