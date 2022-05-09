import getGroup from "./getGroup"

describe("test for get group", () => {
    it("group name is fetched", () => {
        expect(getGroup('cool')).toStrictEqual({error: false, message: 'Group fetched cool'})
    });
    it("group name should be defined", () => {
        expect(getGroup('cool')).toBeDefined();
    });    
})