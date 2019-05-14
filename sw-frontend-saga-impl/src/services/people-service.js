import ApiHelper from "./api-helper";

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

        return ApiHelper.post(resourceUrlSufix.ADD, people)
            .then(resp => resp, () => {});
    }

    removePersonById(req) {
        const { id } = req;

        return ApiHelper.remove(`${resourceUrlSufix.REMOVE}?id=${id}`)
            .then(resp => resp, (err) => console.log(err));
    }


}

export default new PeopleService();