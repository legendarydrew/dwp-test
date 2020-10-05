const { validateName } = require('../src/modules/validation');

describe('Name validation', () => {
    test('should accept valid names', () => {
        const names = [
            'Drew',
            'Drew Maughan',
            'Lex de Groot',
            'Marcie Dolgren-Frost',
            'Buck Russell III',
            'Amélie Pomme Du Chesse',
            'Warrior'
        ];

        for (let i = 0; i < names.length; i++) {
            expect(validateName(names[i])).toBeTruthy();
        }
    });

    test('should reject invalid names', () => {
        const names = [
            '   ',
            ' - ',
            '---',
            'aa-',
            'JC',
            'D',
            '656565'
        ];

        for (let i = 0; i < names.length; i++) {
            expect(validateName(names[i])).toEqual('Name must contain at least three letters.');
        }
    });

    test('should reject undefined names', () => {
        const names = [
            undefined,
            null,
            ''
        ];

        for (let i = 0; i < names.length; i++) {
            expect(validateName(names[i])).toEqual('Name is required.');
        }
    });
});
