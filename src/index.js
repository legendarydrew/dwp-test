const details = require('./modules/details');

window.addNewDetails = (form) => {
    event.preventDefault();
    const payload = {
        name:form.name.value,
        email: form.email.value,
        dob: {
            day: form.dob_day.value,
            month: form.dob_month.value,
            year: form.dob_year.value
        },
        telephone: form.telephone.value
    }
    const outcome = details.addDetails(payload);
    console.log('saved details?', outcome);

    displayValidationErrors();

    return false;
}

const displayValidationErrors = () => {
    const errors = details.getValidationErrors();
    const keys = Object.keys(errors);
    for (let i of keys) {
        if ( errors.hasOwnProperty(i)) {
            const ph = document.getElementById('v[' +i + ']');
            if (true !== errors[i]) {
                ph.innerText = errors[i];
                ph.style.display = 'block';
            } else {
                ph.innerText = '';
                ph.style.display = 'none';
            }
        }
    }
}
