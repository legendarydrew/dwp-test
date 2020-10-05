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

const saveDetails = (fields) => {
    const rows = loadDetails();
    rows.push(fields);
    localStorage.setItem(localStorageKey, JSON.stringify(rows));
}

const loadDetails = () => {
    const rows = localStorage.getItem(localStorageKey);
    return rows ? JSON.parse(rows) : [];
}

const removeDetails = (index) => {
    const rows = loadDetails();
    rows.splice(index, 1);
    localStorage.setItem(localStorageKey, JSON.stringify(rows));
}

module.exports = {
    addDetails,
    loadDetails,
    removeDetails,
    getValidationErrors,
    hasValidationErrors
}
