import createSagaMiddleware from "redux-saga";
import { combineReducers, createStore, applyMiddleware } from "redux";
import peopleReducer from './store/reducers/people-reducer';
import peopleSaga from "./sagas/people-saga";

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
    peopleReducer
});

const appReducers = (state, action) => reducer(state, action);

const enhancer = applyMiddleware(sagaMiddleware);

export function getStore() {
    return createStore(appReducers, enhancer);
}

export function startSagas() {
    sagaMiddleware.run(peopleSaga);
}