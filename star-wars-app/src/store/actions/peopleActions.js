import axios from "axios";
import { PEOPLE_INIT_LOAD, PEOPLE_CHANGE_PAGE, PEOPLE_ADD } from "../actionTypes";
import { PEOPLE_API_URL, PEOPLE_ADD_API_URL } from '../../api';

export const peopleInitLoad = () => {
    return (dispatch) => {
        return axios.get(PEOPLE_API_URL).then(resp => {
            dispatch({ type: PEOPLE_INIT_LOAD, payload: resp.data });
        }).catch(err => console.log(err));
    }
}

export const peopleChangePage = (url) => {
    return (dispatch) => {
        return axios.get(url).then(resp => {
            dispatch({ type: PEOPLE_CHANGE_PAGE, payload: resp.data });
        }).catch(err => console.log(err));
    }
}

export const peopleAdd = (people) => {
    return (dispatch) => {
        return axios({
            method: 'POST',
            url: PEOPLE_ADD_API_URL,
            data: people,

        }).then(resp => {
            dispatch({ type: PEOPLE_ADD, payload: resp.data });
        }).catch(err => console.log(err));
    }
}