
class ApiUtils {

    static statusCodeValidation(respObj) {
        return respObj && (respObj.status >= 200 && respObj.status <= 301) ? true : false;
    }

}

export default ApiUtils;