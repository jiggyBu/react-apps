import axios from "axios";
import { PEOPLE_INIT_LOAD, PEOPLE_NEXT_PAGE } from "../actionTypes";

export const peopleInitLoad = () => {
    return (dispatch) => {
        return axios.post('https://swapi.co/api/people').then(resp => {
                dispatch({ type: PEOPLE_INIT_LOAD, payload: resp.data });
            }).catch(err => {
                console.log(err);
        });
    }
}

export const peopleNextPage = (url) => {
    return (dispatch) => {
        return axios.post(url).then(resp => {
            dispatch({ type: PEOPLE_NEXT_PAGE, payload: resp.data });
        }).catch(err => {
            console.log(err);
        });
    }
}