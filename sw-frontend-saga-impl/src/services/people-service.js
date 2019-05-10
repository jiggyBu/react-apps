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
        let id = Math.floor(Math.random() * 1000000);
        let people = Object.assign({}, { id }, person);
        
        return ApiHelper.post(resourceUrlSufix.PEOPLE, { people })
            .then(resp => resp, () => {});
    }

    removePersonById(id) {
        return ApiHelper.remove(`${resourceUrlSufix.REMOVE}/${id}`)
            .then(resp => resp, (err) => console.error(err));
    }


}

export default new PeopleService();