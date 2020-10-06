// NOTE: these validation methods heavily assume that they will be passed string values, ie. from a form.

const validateName = (name) => {
    // Basic validation, checking whether the name is at least three characters long.
    // Some people might be known by a single name!
    if (name) {
        const regExp = /^(?=.*[A-zÀ-ÿ]{3})[A-zÀ-ÿ- ']+$/i; // NOTE: [a-z -] will not work!
        // This expression contains a "look ahead" condition, which checks for at least three letters:
        //    (?=.*[A-zÀ-ÿ]{3})
        // https://stackoverflow.com/a/30583856
        name = name.trim();
        if (null === name.match(regExp)) {
            return 'Name must contain at least three letters.';
        }

        return true;
    }
    return 'Name is required.';
};

const validateEmail = (email) => {
    if (email) {
        // Regular expression taken from https://html.form.guide/best-practices/validate-email-address-using-javascript/
        const regExp = /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
        if (null === email.match(regExp)) {
            return 'Invalid email address.';
        }
        return true;
    }
    return 'Email is required.';
};

const validateDOBDay = (day) => {
    if ( day ) {
        day = parseInt(day, 10);
        if (day >= 1 && day <= 31) {
            return true;
        }
        return 'Invalid day number.';
    }
    return 'Day is required.';
};

const validateDOBMonth = (month) => {
    if ( month ) {
        month = parseInt(month, 10);
        if (month >= 1 && month <= 12) {
            return true;
        }
        return 'Invalid month number.';
    }
    return 'Month is required.';
};

const validateDOBYear = (year) => {
    // For the purpose of this test, the year must be four characters long.
    const myYear = parseInt(year, 10);
    if (myYear && myYear >= 1000) {
        const thisYear = new Date().getFullYear();
        if (myYear >= thisYear - 120 && myYear <= thisYear) {
            return true;
        }
    }
    return 'Invalid year.';
};

const validateDOB = (day, month, year) => {
    if (true !== validateDOBYear(year)) {
        return '';
    }

    day = parseInt(day, 10);
    month = parseInt(month, 10) - 1;
    year = parseInt(year, 10);

    const date = new Date(year, month, day);
    const now = new Date();
    now.setHours(0, 0, 0, 0);

    if (!(date.getMonth() === month && date.getDate() === day)) {
        return 'Invalid date.';
    } else if (now < date) {
        return 'Date must not be in the future.';
    }

    return true;
};

const validateTelephone = function (telephone) {
    if (telephone) {
        // Regular expression taken from https://stackoverflow.com/a/29767609
        const regExp = /^[\+]?[(]?[0-9]{3,5}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/i;
        if (null === telephone.match(regExp)) {
            return 'Invalid telephone number.';
        }
        return true;
    }
    return 'Telephone number is required.';
};

module.exports = {
    validateDOB,
    validateDOBDay,
    validateDOBMonth,
    validateDOBYear,
    validateEmail,
    validateName,
    validateTelephone
};
