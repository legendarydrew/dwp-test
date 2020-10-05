const details = require("../src/modules/details");

describe('hasValidationErrors', () => {
    let payload;

    beforeEach(() => {
        payload = {
            name: 'Valid Name',
            email: 'test@localhost.com',
            dob: {
                day: '1',
                month: '12',
                year: '2000'
            },
            telephone: '01818118181'
        };
    });

    test('should be false by default', () => {
        const outcome = details.hasValidationErrors();
        expect(outcome).toBeFalsy();
    });

    test('should be false when all fields valid', () => {
        details.addDetails(payload);
        const outcome = details.hasValidationErrors();
        expect(outcome).toBeFalsy();
    });

    test('should be true when name invalid', () => {
        payload.name = null;
        details.addDetails(payload);
        const outcome = details.hasValidationErrors();
        expect(outcome).toBeTruthy();
    });

    test('should be true when email invalid', () => {
        payload.email = null;
        details.addDetails(payload);
        const outcome = details.hasValidationErrors();
        expect(outcome).toBeTruthy();
    });

    test('should be true when DOB day invalid', () => {
        payload.dob.day = null;
        details.addDetails(payload);
        const outcome = details.hasValidationErrors();
        expect(outcome).toBeTruthy();
    });

    test('should be true when DOB month invalid', () => {
        payload.dob.month = null;
        details.addDetails(payload);
        const outcome = details.hasValidationErrors();
        expect(outcome).toBeTruthy();
    });

    test('should be true when DOB year invalid', () => {
        payload.dob.year = null;
        details.addDetails(payload);
        const outcome = details.hasValidationErrors();
        expect(outcome).toBeTruthy();
    });

    test('should be true when DOB invalid', () => {
        payload.dob = {day: 32, month: 1, year: 1999};
        details.addDetails(payload);
        const outcome = details.hasValidationErrors();
        expect(outcome).toBeTruthy();
    });

    test('should be true when telephone invalid', () => {
        payload.telephone = null;
        details.addDetails(payload);
        const outcome = details.hasValidationErrors();
        expect(outcome).toBeTruthy();
    });
});
