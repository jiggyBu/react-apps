import axios from "axios";
import { PEOPLE_INIT_LOAD, PEOPLE_CHANGE_PAGE, PEOPLE_ADD, PEOPLE_DELETE } from "../actionTypes";
import { PEOPLE_API_URL, PEOPLE_ADD_API_URL, PEOPLE_REMOVE_API_URL } from '../../api';
import ApiHelper from "../../services/api-helper";

export const peopleInitLoad = () => {
    const data = ApiHelper.get('people');
    
    if (data)
        return (dispatch) => {
            data.then(resp => dispatch({ type: PEOPLE_INIT_LOAD, payload: resp.data }), () => []);
        }
}

export const peopleChangePage = (page) => {
    const data = ApiHelper.get('people', { page });

    if (data)
        return (dispatch) => {
            data.then(resp => dispatch({ type: PEOPLE_CHANGE_PAGE, payload: resp.data }), () => []);
        }
}

export const peopleAdd = (ppl) => {

    const people = ApiHelper.post('ppladd', { data: ppl });

    if (people)
        return (dispatch) => {
            people.then(resp => dispatch({ type: PEOPLE_ADD, payload: resp.data }), (err) => console.log(err));
        }
}

export const peopleRemove = (id) => {
    return (dispatch) => {
        return axios({
            method: 'GET',
            url: PEOPLE_REMOVE_API_URL,
            params: { id }
        })
        .then(resp => dispatch({ type: PEOPLE_DELETE, payload: resp.data }))
        .catch(err => console.log(err));
    }
}