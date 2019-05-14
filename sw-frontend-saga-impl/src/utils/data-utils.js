class DataUtils {

    static generateRandomId() {
        let id = Math.floor(Math.random() * 1000000);
        return id;
    }

}

export default DataUtils;