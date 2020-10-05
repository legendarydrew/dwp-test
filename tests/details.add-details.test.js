const details = require("../src/modules/details");

describe('addDetails', () => {
    let payload;

    beforeEach(() => {
        localStorage.clear();
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

    test('should return TRUE if successful', () => {
        const outcome = details.addDetails(payload);
        expect(outcome).toBeTruthy();
    });

    test('should return FALSE if unsuccessful', () => {
        payload.name = null;
        const outcome = details.addDetails(payload);
        expect(outcome).toBeFalsy();
    });

    test('should save details if successful', () => {
        details.addDetails(payload);
        const rows = details.loadDetails();
        expect(rows.length).toEqual(1);
        expect(rows[0].name).toStrictEqual(payload.name);
        expect(rows[0].email).toStrictEqual(payload.email);
        expect(rows[0].telephone).toStrictEqual(payload.telephone);
        expect(rows[0].dob.day).toStrictEqual(payload.dob.day);
        expect(rows[0].dob.month).toStrictEqual(payload.dob.month);
        expect(rows[0].dob.year).toStrictEqual(payload.dob.year);
    });

    test('should append new details if successful', () => {
        details.addDetails(payload);
        const secondPayload = {
            name: 'Jim Phelps',
            email: 'jim.phelps@imf.gov',
            dob: {
                day: '8',
                month: '8',
                year: '1928',
            },
            telephone: '01101011101'
        };
        details.addDetails(secondPayload);

        const rows = details.loadDetails();
        expect(rows.length).toEqual(2);

        expect(rows[0].name).not.toStrictEqual(secondPayload.name);
        expect(rows[0].email).not.toStrictEqual(secondPayload.email);
        expect(rows[0].telephone).not.toStrictEqual(secondPayload.telephone);
        expect(rows[0].dob.day).not.toStrictEqual(secondPayload.dob.day);
        expect(rows[0].dob.month).not.toStrictEqual(secondPayload.dob.month);
        expect(rows[0].dob.year).not.toStrictEqual(secondPayload.dob.year);

        expect(rows[1].name).toStrictEqual(secondPayload.name);
        expect(rows[1].email).toStrictEqual(secondPayload.email);
        expect(rows[1].telephone).toStrictEqual(secondPayload.telephone);
        expect(rows[1].dob.day).toStrictEqual(secondPayload.dob.day);
        expect(rows[1].dob.month).toStrictEqual(secondPayload.dob.month);
        expect(rows[1].dob.year).toStrictEqual(secondPayload.dob.year);
    });

    test('should not save details if name invalid', () => {
        payload.name = null;
        details.addDetails(payload);
        const rows = details.loadDetails();
        expect(rows).toStrictEqual([]);
    });

    test('should not save details if name invalid', () => {
        payload.name = null;
        details.addDetails(payload);
        const rows = details.loadDetails();
        expect(rows).toStrictEqual([]);
    });

    test('should not save details if name invalid', () => {
        payload.name = null;
        details.addDetails(payload);
        const rows = details.loadDetails();
        expect(rows).toStrictEqual([]);
    });

    test('should not save details if email invalid', () => {
        payload.email = null;
        details.addDetails(payload);
        const rows = details.loadDetails();
        expect(rows).toStrictEqual([]);
    });

    test('should not save details if telephone invalid', () => {
        payload.telephone = null;
        details.addDetails(payload);
        const rows = details.loadDetails();
        expect(rows).toStrictEqual([]);
    });

    test('should not save details if DOB day invalid', () => {
        payload.dob.day = null;
        details.addDetails(payload);
        const rows = details.loadDetails();
        expect(rows).toStrictEqual([]);
    });

    test('should not save details if DOB month invalid', () => {
        payload.dob.month = null;
        details.addDetails(payload);
        const rows = details.loadDetails();
        expect(rows).toStrictEqual([]);
    });

    test('should not save details if DOB year invalid', () => {
        payload.dob.year = null;
        details.addDetails(payload);
        const rows = details.loadDetails();
        expect(rows).toStrictEqual([]);
    });

    test('should not save details if DOB invalid', () => {
        payload.dob = {day: null, month: null, year: null};
        details.addDetails(payload);
        const rows = details.loadDetails();
        expect(rows).toStrictEqual([]);
    });
});
