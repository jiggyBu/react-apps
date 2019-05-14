import ApiHelper from "./api-helper";
import DataUtils from "../utils/data-utils";

const resourceUrlSufix = {
    'PEOPLE'    : 'people',
    'ADD'       : 'ppladd',
    'REMOVE'    : 'pplremove'
}

class PeopleService {

    getPeople() {
        return ApiHelper.get(resourceUrlSufix.PEOPLE)
            .then(resp => resp, () => []);
    }

    changePage(page) {
        return ApiHelper.get(resourceUrlSufix.PEOPLE, page)
            .then(resp => resp, () => []);
    }

    addPerson(person) {
        const { people } = person;
        const id = DataUtils.generateRandomId();
        const peopleObj = Object.assign({}, { id }, people);

        return ApiHelper.post(resourceUrlSufix.ADD, peopleObj)
            .then(resp => resp, () => {});
    }

    removePersonById(req) {
        const { id } = req;
        return ApiHelper.remove(`${resourceUrlSufix.REMOVE}?id=${id}`)
            .then(resp => resp, (err) => console.log(err));
    }


}

export default new PeopleService();