import { STARSHIP_INIT_LOAD, STARSHIP_CHANGE_PAGE } from "../actionTypes";
import axios from "axios";
import { STARSHIPS_API_URL } from '../../api';

export const starshipInitLoad = () => {
    return (dispatch) => {
        return axios.get(STARSHIPS_API_URL)
            .then(resp => {
                dispatch({ type: STARSHIP_INIT_LOAD, payload: resp.data });
            }).catch(err => {
                console.log(err)
            });
    }
}

export const starshipChangePage = (url) => {
    return (dispatch) => {
        return axios.get(url)
            .then(resp => {
                console.log(resp);
                dispatch({ type: STARSHIP_CHANGE_PAGE, payload: resp.data });
            })
            .catch(err => {
                console.log(err);
            });
    }
}