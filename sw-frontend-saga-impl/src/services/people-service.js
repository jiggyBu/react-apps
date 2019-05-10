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

    addPerson(people) {
        let id = Math.floor(Math.random() * 1000000);

        return ApiHelper.post(resourceUrlSufix.ADD, people)
            .then(resp => resp, () => {});
    }

    removePersonById(id) {
        return ApiHelper.get(`${resourceUrlSufix.REMOVE}?id=${id.id}`)
            .then(resp => resp, (err) => console.error(err));
    }


}

export default new PeopleService();