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

    addPerson(people) {
        const id = DataUtils.generateRandomId();
        const pplObj = Object.assign({}, { id }, people.people);

        return ApiHelper.post(resourceUrlSufix.ADD, pplObj)
            .then(resp => resp, () => {});
    }

    removePersonById(id) {
        return ApiHelper.remove(`${resourceUrlSufix.REMOVE}?id=${id.id}`)
            .then(resp => resp, (err) => console.log(err));
    }


}

export default new PeopleService();