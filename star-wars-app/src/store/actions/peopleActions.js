import axios from "axios";
import { PEOPLE_INIT_LOAD, PEOPLE_CHANGE_PAGE } from "../actionTypes";

export const peopleInitLoad = () => {
    return (dispatch) => {
        return axios.post('https://swapi.co/api/people').then(resp => {
                dispatch({ type: PEOPLE_INIT_LOAD, payload: resp.data });
            }).catch(err => {
                console.log(err);
        });
    }
}

export const peopleChangePage = (url) => {
    return (dispatch) => {
        return axios.get(url).then(resp => {
            dispatch({ type: PEOPLE_CHANGE_PAGE, payload: resp.data });
        }).catch(err => {
            console.log(err);
        });
    }
}