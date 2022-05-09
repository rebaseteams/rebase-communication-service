import createGroup from "./createGroup";

describe("test for create group", () => {
    it("group creation successful", () => {
        expect(createGroup('society')).toStrictEqual({error: false, message: 'society group created successfully'});
    });
});