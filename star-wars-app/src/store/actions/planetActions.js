import axios from "axios";
import { PLANETS_API_URL } from '../../api';
import { PLANET_INIT_LOAD, PLANET_CHANGE_PAGE } from "../actionTypes";

export const planetInitLoad = () => {
    return (dispatch) => {
        return axios.get(PLANETS_API_URL)
            .then(resp => {
                dispatch({ type: PLANET_INIT_LOAD, payload: resp.data });
            }).catch(err => {
                console.log(err)
            });
    }
}

export const planetChangePage = (url) => {
    return (dispatch) => {
        return axios.get(url)
            .then(resp => {
                dispatch({ type: PLANET_CHANGE_PAGE, payload: resp.data });
            })
            .catch(err => {
                console.log(err);
            });
    }
}