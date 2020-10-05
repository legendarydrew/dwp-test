const { validateTelephone } = require('../src/modules/validation');

describe('Telephone number validation', () => {
    test('should accept valid formats', () => {
        const numbers = [
            '(123) 456-7890',
            '(123)456-7890',
            '123-456-7890',
            '123.456.7890',
            '1234567890',
            '+31636363634',
            '075-63546725'
        ];

        for (let i = 0; i < numbers.length; i++) {
            expect(validateTelephone(numbers[i])).toBeTruthy();
        }
    });

    test('should reject invalid formats', () => {
        const numbers = [
            undefined,
            'abcdefg',
            '+9632edf232e',
            '',
            '    3 ',
            '1234!5678!90',
            'drew@pzlabs.co',
            '07_235_565_5656'
        ];

        for (let i = 0; i <= numbers.length; i++) {
            expect(validateTelephone(numbers[i])).not.toBe(true);
        }
    });
});
