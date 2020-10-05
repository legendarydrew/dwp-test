const { validateName } = require('../modules/validation');

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
            console.debug(names[i]);
            expect(validateName(names[i])).toBeTruthy();
        }
    });

    test('should reject invalid names', () => {
        const names = [
            undefined,
            '',
            '   ',
            ' - ',
            '---',
            'aa-',
            'JC',
            'D',
            '656565'
        ];

        for (let i = 0; i < names.length; i++) {
            console.debug(names[i]);
            expect(validateName(names[i])).toBeFalsy();
        }
    });
});
