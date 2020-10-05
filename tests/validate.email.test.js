const {validateEmail} = require('../src/modules/validation');

// With thanks to http://softwaretesterfriend.com/manual-testing/valid-invalid-email-address-format-validation

describe('Email validation', () => {
    test('should accept valid email addresses', () => {
        const emails = [
            'drew@pzlabs.co',
            'dwp@gov.uk',
            'someone.else@nowhere.net',
            'guilded-lily305@college.edu.uk',
            'email@example.com',
            'firstname.lastname@example.com',
            'email@subdomain.example.com',
            'firstname+lastname@example.com',
            'email@123.123.123.123',
            'email@[123.123.123.123]',
            '"email"@example.com',
            '1234567890@example.com',
            'email@example-one.com',
            '_______@example.com',
            'email@example.name',
            'email@example.museum',
            'email@example.co.jp',
            'firstname-lastname@example.com'
        ];

        for (let i = 0; i < emails.length; i++) {
            expect(validateEmail(emails[i])).toBeTruthy();
        }
    });

    test('should reject invalid email addresses', () => {
        const emails = [
            'example.com',
            'A@b@c@domain.com',
            'a”b(c)d,e:f;gi[j\k]l@domain.com',
            'abc”test”email@domain.com',
            'abc is”not\valid@domain.com',
            'abc\ is”not\valid@domain.com',
            '.test@domain.com',
            'test@domain..com',
            ' drew@pzlabs.co',
            'drew@pzlabs.co ',
            // These are suggested as "valid", but won't pass the test.
            'much.”more\ unusual”@example.com',
            'very.unusual.”@”.unusual.com@example.com',
            'very.”(),:;<>[]”.VERY.”very@\\ "very”.unusual@strange.example.com'
        ];

        for (let i = 0; i < emails.length; i++) {
            expect(validateEmail(emails[i])).toBeFalsy();
        }
    });
});
