const details = require('./modules/details');

// TODO testing methods in this file.
// TODO styling.

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
    if ( details.addDetails(payload) ) {
        // The details were successfully saved.
        form.reset();
        displaySuccessMessage();
        displaySavedDetails();
    }

    displayValidationErrors();

    return false;
}

window.removeDetails = (index) => {
    details.removeDetails(index);
    displaySavedDetails();
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

const displaySavedDetails = () => {
    const ttLog = details.loadDetails();
    const tbody = document.querySelector('#addresses tbody');

    // Remove existing rows.
    // (Using option 2A from https://stackoverflow.com/a/3955238)
    while (tbody.firstChild) {
        tbody.removeChild(tbody.lastChild);
    }

    // Add a new row for each set of details.
    for (let i = 0; i < ttLog.length; ++i) {
        const item = ttLog[i];
        const row = document.createElement('tr');
        row.insertCell(0).innerHTML = item.name;
        row.insertCell(1).innerText = formatDOB(item);
        row.insertCell(2).innerText = item.email;
        row.insertCell(3).innerText = item.telephone;

        // Display a delete button.
        const button = document.createElement('button');
        button.className = 'details__delete';
        button.innerText = 'Delete';
        button.onclick = () => removeDetails( i );
        row.insertCell(4).appendChild(button);

        tbody.append(row);
    }
}

const formatDOB = (item) => {
    const day = ('00' + item.dob.day).substr(-2);
    const month = ('00' + item.dob.month).substr(-2);
    const year = ('0000' + item.dob.year).substr(-4);

    return day + '/' + month + '/' + year;
}

let successTimeout;

const displaySuccessMessage = () => {
    clearTimeout(successTimeout);
    const success = document.getElementById('success');
    success.style.display = 'block';
    successTimeout = setTimeout(hideSuccessMessage, 5000);
}

const hideSuccessMessage = () => {
    const success = document.getElementById('success');
    success.style.display = 'none';
}

(() => {
    // Self-executing method that runs when everything is ready.
    hideSuccessMessage();
    displaySavedDetails();
})();
