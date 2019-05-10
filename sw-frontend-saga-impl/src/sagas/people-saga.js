import PeopleService from '../services/people-service'
import { put, takeEvery } from 'redux-saga/effects'
import peopleActionTypes from '../store/action-types/people-action-types';

function* getPeople() {
    const people = yield PeopleService.getPeople();
    
    if (people) {
        try {
            yield put({ type: peopleActionTypes.INIT_LOAD, payload: people.data });

        } catch(e) {
            throw e;
        }
    }
}

export default function* peopleSaga() {
    yield takeEvery(peopleActionTypes.REQ_INIT_LOAD, getPeople);
}