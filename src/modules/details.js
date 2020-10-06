const validation = require('./validation');

let errors = {};

const addDetails = (fields) => {
    errors = validateDetails(fields);
    if (!hasValidationErrors()) {
        saveDetails(fields);
        return true;
    }

    return false;
}

const getValidationErrors = () => {
    return errors;
}

const hasValidationErrors = () => {
    const keys = Object.keys(errors);
    for (let i of keys) {
        if (errors.hasOwnProperty(i)) {
            if (true !== errors[i]) {
                return true;
            }
        }
    }
    return false;
}

const validateDetails = (params) => {
    return {
        name: validation.validateName(params.name),
        email: validation.validateEmail(params.email),
        dob_day: validation.validateDOBDay(params.dob.day),
        dob_month: validation.validateDOBMonth(params.dob.month),
        dob_year: validation.validateDOBYear(params.dob.year),
        dob: validation.validateDOB(params.dob.day, params.dob.month, params.dob.year),
        telephone: validation.validateTelephone(params.telephone)
    };
}

const localStorageKey = 'ttData';
let lsBackup = [];

const saveDetails = (fields) => {
    // IE doesn't support localStorage on a local filesystem, so we'll use an array to simulate it.
    if (typeof (localStorage) !== "undefined") {
        const rows = loadDetails();
        rows.push(fields);
        localStorage.setItem(localStorageKey, JSON.stringify(rows));
    } else {
        lsBackup.push(fields);
    }
}

const loadDetails = () => {
    if (typeof (localStorage) !== "undefined") {
        const rows = localStorage.getItem(localStorageKey);
        return rows ? JSON.parse(rows) : [];
    }

    return lsBackup;
}

const removeDetails = (index) => {
    if (typeof (localStorage) !== "undefined") {
        const rows = loadDetails();
        rows.splice(index, 1);
        localStorage.setItem(localStorageKey, JSON.stringify(rows));
    } else {
        lsBackup.splice(index, 1);
    }
}

module.exports = {
    addDetails,
    loadDetails,
    removeDetails,
    getValidationErrors,
    hasValidationErrors
}
