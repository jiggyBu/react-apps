class ApiUtils {

    static statusCodeValidation(respObj) {
        return respObj && (respObj.status >= 200 && respObj.status < 300) ? true : false;
    }

}

export default ApiUtils;