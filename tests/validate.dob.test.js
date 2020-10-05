const {validateDOB, validateDOBDay, validateDOBMonth, validateDOBYear } = require('../src/modules/validation');

describe('Date of Birth validation', () => {
    describe('day', () => {
        test('should accept valid day', () => {
            for (let d = 1; d <= 31; d++) {
                expect(validateDOBDay(d)).toBeTruthy();
            }
        });

        test('should not accept invalid day', () => {
            const days = [
                undefined,
                null,
                '0',
                '-1',
                '32',
                '44',
                '-999',
                'a',
                ''
            ];
            for (let i = 0; i <= days.length; i++) {
                expect(validateDOBDay(days[i])).toBeFalsy();
            }
        });
    });
    describe('month', () => {
        test('should accept valid month', () => {
            for (let d = 1; d <= 12; d++) {
                expect(validateDOBMonth(d)).toBeTruthy();
            }
        });

        test('should not accept invalid day', () => {
            const months = [
                undefined,
                null,
                '0',
                '-1',
                '13',
                '44',
                '-999',
                'a',
                ''
            ];
            for (let i = 0; i <= months.length; i++) {
                expect(validateDOBMonth(months[i])).toBeFalsy();
            }
        });
    });
    describe('year', () => {
        test('should accept this year', () => {
            const now = new Date();
            expect(validateDOBYear(now.getFullYear().toString())).toBeTruthy();
        });

        test('should not accept a two-digit year', () => {
            expect(validateDOBYear('00')).toBeFalsy();
            expect(validateDOBYear('98')).toBeFalsy();
            expect(validateDOBYear('64')).toBeFalsy();
            expect(validateDOBYear('12')).toBeFalsy();
        });

        test('should accept a four-digit year', () => {
            expect(validateDOBYear('2000')).toBeTruthy();
            expect(validateDOBYear('1998')).toBeTruthy();
            expect(validateDOBYear('1964')).toBeTruthy();
            expect(validateDOBYear('2012')).toBeTruthy();
        });

        test('should not accept invalid years', () => {
            const thisYear = parseInt(new Date().getFullYear().toString(), 10);
            const years = [
                undefined,
                null,
                '0',
                '-1',
                (thisYear - 121).toString(),
                (thisYear + 1).toString(),
                '-999',
                'a',
                ''
            ];
            for (let i = 0; i < years.length; i++) {
                console.debug(years[i]);
                expect(validateDOBYear(years[i])).toBeFalsy();
            }
        });
    });

    test('should accept valid dates', () => {
        const dates = [
            {day: '1', month: '1', year: '2000'},
            {day: '14', month: '2', year: '1962'},
            {day: '1', month: '4', year: '1988'},
            {day: '8', month: '8', year: '1972'},
            {day: '25', month: '12', year: '2014'},
        ];
        for (let i = 0; i < dates.length; i++) {
            console.debug(dates[i]);
            expect(validateDOB(dates[i].day, dates[i].month, dates[i].year)).toBeTruthy();
        }
    });

    test('should not accept two-digit year', () => {
        const dates = [
            {day: '1', month: '1', year: '00'},
            {day: '2', month: '8', year: '90'},
            {day: '3', month: '7', year: '85'},
            {day: '4', month: '6', year: '10'},
            {day: '5', month: '5', year: '64'},
        ];
        for (let i = 0; i < dates.length; i++) {
            console.debug(dates[i]);
            expect(validateDOB(dates[i].day, dates[i].month, dates[i].year)).toBeFalsy();
        }
    });

    test('should not accept invalid day', () => {
        const dates = [
            {day: '91', month: '1', year: '2000'},
            {day: '888', month: '1', year: '2000'},
            {day: '7000', month: '1', year: '2000'},
        ];
        for (let i = 0; i < dates.length; i++) {
            expect(validateDOB(dates[i].day, dates[i].month, dates[i].year)).toBeFalsy();
        }
    });

    test('should not accept invalid month', () => {
        const dates = [
            {day: '1', month: '13', year: '2000'},
            {day: '1', month: '21', year: '2000'},
            {day: '1', month: '100', year: '2000'},
        ];
        for (let i = 0; i < dates.length; i++) {
            expect(validateDOB(dates[i].day, dates[i].month, dates[i].year)).toBeFalsy();
        }
    });

    test('should not accept invalid year', () => {
        const dates = [
            {day: '1', month: '1', year: '2999'},
            {day: '1', month: '1', year: '50000'},
            {day: '1', month: '1', year: '-1'},
            {day: '1', month: '1', year: '499'},
        ];
        for (let i = 0; i < dates.length; i++) {
            console.debug(dates[i]);
            expect(validateDOB(dates[i].day, dates[i].month, dates[i].year)).toBeFalsy();
        }
    });

    test('should not accept invalid date', () => {
        const dates = [
            {day: '32', month: '1', year: '2000'},
            {day: '31', month: '2', year: '2000'},
            {day: '44', month: '12', year: '2000'},
            {day: '0', month: '12', year: '2000'},
            {day: '-2', month: '6', year: '2000'},
        ];
        for (let i = 0; i < dates.length; i++) {
            expect(validateDOB(dates[i].day, dates[i].month, dates[i].year)).toBeFalsy();
        }
    });

    test('should accept today', () => {
        const now = new Date();
        expect(validateDOB(now.getDate(), now.getMonth() + 1, now.getFullYear())).toBeTruthy();
    });
});
