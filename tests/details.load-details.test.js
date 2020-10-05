const details = require("../src/modules/details");

describe('loadDetails', () => {
    beforeEach(() => {
        localStorage.clear();
    });

    test('should return an empty array when nothing saved', () => {
        const rows = details.loadDetails();
        expect(rows).toStrictEqual([]);
    });

    test('should return information when something saved', () => {
        localStorage.setItem('ttData', '[{"outcome": "You win"}]');
        const rows = details.loadDetails();
        expect(rows).toBeInstanceOf(Array);
        expect(rows[0].outcome).toEqual('You win');
    });
});
