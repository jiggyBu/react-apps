import ApiHelper from "./api-helper";
import ApiUtils from '../utils/api-utils';

const resourceUrlSufix = {
    'PEOPLE'    : 'people',
    'ADD'       : 'ppladd',
    'REMOVE'    : 'pplremove'
}

class PeopleService {

    getPeople() {
        return ApiHelper.get(resourceUrlSufix.PEOPLE)
            .then(resp => ApiUtils.statusCodeValidation(resp) ? resp.data : null);
    }

    changePage(page) {
        return ApiHelper.get(resourceUrlSufix.PEOPLE, page)
            .then(resp => ApiUtils.statusCodeValidation(resp) ? resp.data : null);
    }

    addPerson(person) {
        const { people } = person;

        return ApiHelper.post(resourceUrlSufix.ADD, people)
            .then(resp => ApiUtils.statusCodeValidation(resp) ? resp.data : null)
            .catch(e => {
                throw e;
            });
    }

    removePersonById(req) {
        const { id } = req;

        return ApiHelper.remove(`${resourceUrlSufix.REMOVE}?id=${id}`)
            .then(resp => ApiUtils.statusCodeValidation(resp) ? resp.data : null)
            .catch(e => {
                throw e;
            });
    }


}

export default new PeopleService();