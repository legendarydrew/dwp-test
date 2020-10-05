const details = require("../src/modules/details");
const faker = require('faker');

describe('removeDetails', () => {

    beforeEach(() => {
        const rows = [];
        for (let i = 1; i <= 5; i++) {
            rows.push({
                name: faker.name.findName(),
                description: faker.lorem.sentence()
            });
        }
        localStorage.setItem('ttData', JSON.stringify(rows));
    });

    test('should remove a row', () => {
        let rows = details.loadDetails();
        const rowCount = rows.length;
        const index = Math.floor(Math.random() * rowCount);
        details.removeDetails(index);
        rows = details.loadDetails();
        expect(rows.length).toBeLessThan(rowCount);
    });

    test('should remove the correct row', () => {
        let rows = details.loadDetails();
        const index = Math.floor(Math.random() * rows.length);
        const chosenName = rows[index].name;
        details.removeDetails(index);
        rows = details.loadDetails();
        for (let row of rows) {
            expect(row.name).not.toBe(chosenName);
        }
    });
});
