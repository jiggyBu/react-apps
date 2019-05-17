import DataUtils from "../utils/data-utils";

test('should generate random id each time', () => {

    const id1 = DataUtils.generateRandomId();
    const id2 = DataUtils.generateRandomId();
    
    expect(id1).not.toBe(id2);
});