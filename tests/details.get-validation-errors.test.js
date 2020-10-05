const details = require("../src/modules/details");

describe('getValidationErrors', () => {
    let payload;

    beforeEach(() => {
        payload = {
            name: 'Mike',
            email: 'test@localhost.com',
            dob: {
                day: '1',
                month: '12',
                year: '2000'
            },
            telephone: '01818118181'
        };
    });

    test('should be empty by default', () => {
        const outcome = details.getValidationErrors();
        expect(outcome).toEqual({});
    });

    test('should be populated when valid details are added', () => {
        details.addDetails(payload);
        const outcome = details.getValidationErrors();
        expect(outcome).not.toEqual({});
        expect(outcome.name).toEqual(true);
        expect(outcome.email).toEqual(true);
    });

    test('should be populated when invalid details are added', () => {
        payload.name = null;
        payload.email = null;
        details.addDetails(payload);
        const outcome = details.getValidationErrors();
        expect(outcome).not.toEqual({});
        expect(outcome.name).not.toEqual(true);
        expect(outcome.email).not.toEqual(true);
    });
});
