/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const details = __webpack_require__(/*! ./modules/details */ \"./src/modules/details.js\");\r\n__webpack_require__(/*! ./style */ \"./src/style.scss\");\r\n\r\n// TODO testing methods in this file.\r\n// TODO styling.\r\n\r\nwindow.addNewDetails = (form) => {\r\n    event.preventDefault();\r\n    const payload = {\r\n        name:form.name.value,\r\n        email: form.email.value,\r\n        dob: {\r\n            day: form.dob_day.value,\r\n            month: form.dob_month.value,\r\n            year: form.dob_year.value\r\n        },\r\n        telephone: form.telephone.value\r\n    }\r\n    if ( details.addDetails(payload) ) {\r\n        // The details were successfully saved.\r\n        form.reset();\r\n        displaySuccessMessage();\r\n        displaySavedDetails();\r\n    }\r\n\r\n    displayValidationErrors();\r\n\r\n    return false;\r\n}\r\n\r\nwindow.removeDetails = (index) => {\r\n    details.removeDetails(index);\r\n    displaySavedDetails();\r\n}\r\n\r\nconst displayValidationErrors = () => {\r\n    const errors = details.getValidationErrors();\r\n    const keys = Object.keys(errors);\r\n    for (let i of keys) {\r\n        if ( errors.hasOwnProperty(i)) {\r\n            const ph = document.getElementById('v[' +i + ']');\r\n            if (true !== errors[i]) {\r\n                ph.innerText = errors[i];\r\n                ph.style.display = 'block';\r\n            } else {\r\n                ph.innerText = '';\r\n                ph.style.display = 'none';\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\nconst displaySavedDetails = () => {\r\n    const ttLog = details.loadDetails();\r\n    const tbody = document.querySelector('#addresses tbody');\r\n\r\n    // Remove existing rows.\r\n    // (Using option 2A from https://stackoverflow.com/a/3955238)\r\n    while (tbody.firstChild) {\r\n        tbody.removeChild(tbody.lastChild);\r\n    }\r\n\r\n    // Add a new row for each set of details.\r\n    for (let i = 0; i < ttLog.length; ++i) {\r\n        const item = ttLog[i];\r\n        const row = document.createElement('tr');\r\n        row.insertCell(0).innerHTML = item.name;\r\n        row.insertCell(1).innerText = formatDOB(item);\r\n        row.insertCell(2).innerText = item.email;\r\n        row.insertCell(3).innerText = item.telephone;\r\n\r\n        // Display a delete button.\r\n        const button = document.createElement('button');\r\n        button.className = 'details__delete';\r\n        button.innerText = 'Delete';\r\n        button.onclick = () => removeDetails( i );\r\n        row.insertCell(4).appendChild(button);\r\n\r\n        tbody.append(row);\r\n    }\r\n}\r\n\r\nconst formatDOB = (item) => {\r\n    const day = ('00' + item.dob.day).substr(-2);\r\n    const month = ('00' + item.dob.month).substr(-2);\r\n    const year = ('0000' + item.dob.year).substr(-4);\r\n\r\n    return day + '/' + month + '/' + year;\r\n}\r\n\r\nlet successTimeout;\r\n\r\nconst displaySuccessMessage = () => {\r\n    clearTimeout(successTimeout);\r\n    const success = document.getElementById('success');\r\n    success.style.display = 'block';\r\n    successTimeout = setTimeout(hideSuccessMessage, 5000);\r\n}\r\n\r\nconst hideSuccessMessage = () => {\r\n    const success = document.getElementById('success');\r\n    success.style.display = 'none';\r\n}\r\n\r\n(() => {\r\n    // Self-executing method that runs when everything is ready.\r\n    hideSuccessMessage();\r\n    displaySavedDetails();\r\n})();\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/modules/details.js":
/*!********************************!*\
  !*** ./src/modules/details.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const validation = __webpack_require__(/*! ./validation */ \"./src/modules/validation.js\");\r\n\r\nlet errors = {};\r\n\r\nconst addDetails = (fields) => {\r\n    errors = validateDetails(fields);\r\n\r\n    if (!hasValidationErrors()) {\r\n        saveDetails(fields);\r\n        return true;\r\n    }\r\n\r\n    return false;\r\n}\r\n\r\nconst getValidationErrors = () => {\r\n    return errors;\r\n}\r\n\r\nconst hasValidationErrors = () => {\r\n    const keys = Object.keys(errors);\r\n    for (let i of keys) {\r\n        if (errors.hasOwnProperty(i)) {\r\n            if (true !== errors[i]) {\r\n                return true;\r\n            }\r\n        }\r\n    }\r\n    return false;\r\n}\r\n\r\nconst validateDetails = (params) => {\r\n    return {\r\n        name: validation.validateName(params.name),\r\n        email: validation.validateEmail(params.email),\r\n        dob_day: validation.validateDOBDay(params.dob.day),\r\n        dob_month: validation.validateDOBMonth(params.dob.month),\r\n        dob_year: validation.validateDOBYear(params.dob.year),\r\n        dob: validation.validateDOB(params.dob.day, params.dob.month, params.dob.year),\r\n        telephone: validation.validateTelephone(params.telephone)\r\n    };\r\n}\r\n\r\nconst localStorageKey = 'ttData';\r\n\r\nconst saveDetails = (fields) => {\r\n    const rows = loadDetails();\r\n    rows.push(fields);\r\n    localStorage.setItem(localStorageKey, JSON.stringify(rows));\r\n}\r\n\r\nconst loadDetails = () => {\r\n    const rows = localStorage.getItem(localStorageKey);\r\n    return rows ? JSON.parse(rows) : [];\r\n}\r\n\r\nconst removeDetails = (index) => {\r\n    const rows = loadDetails();\r\n    rows.splice(index, 1);\r\n    localStorage.setItem(localStorageKey, JSON.stringify(rows));\r\n}\r\n\r\nmodule.exports = {\r\n    addDetails,\r\n    loadDetails,\r\n    removeDetails,\r\n    getValidationErrors,\r\n    hasValidationErrors\r\n}\r\n\n\n//# sourceURL=webpack:///./src/modules/details.js?");

/***/ }),

/***/ "./src/modules/validation.js":
/*!***********************************!*\
  !*** ./src/modules/validation.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// NOTE: these validation methods heavily assume that they will be passed string values, ie. from a form.\r\n\r\nconst validateName = name => {\r\n    // Basic validation, checking whether the name is at least three characters long.\r\n    // Some people might be known by a single name!\r\n    if ( name ) {\r\n        const regExp = /^(?=.*[A-zÀ-ÿ]{3})[A-zÀ-ÿ- ']+$/i; // NOTE: [a-z -] will not work!\r\n        // This expression contains a \"look ahead\" condition, which checks for at least three letters:\r\n        //    (?=.*[A-zÀ-ÿ]{3})\r\n        // https://stackoverflow.com/a/30583856\r\n        name = name.trim();\r\n        if (null === name.match(regExp)) {\r\n            return 'Name must contain at least three letters.';\r\n        }\r\n\r\n        return true;\r\n    }\r\n    return 'Name is required.';\r\n};\r\n\r\nconst validateEmail = email => {\r\n    if ( email ) {\r\n        // Regular expression taken from https://html.form.guide/best-practices/validate-email-address-using-javascript/\r\n        const regExp = /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|\"(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21\\x23-\\x5b\\x5d-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])*\")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21-\\x5a\\x53-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])+)\\])$/;\r\n        if (null === email.match(regExp)) {\r\n            return 'Invalid email address.';\r\n        }\r\n        return true;\r\n    }\r\n    return 'Email is required.';\r\n};\r\n\r\nconst validateDOBDay = (day) => {\r\n    if ( day ) {\r\n        day = parseInt(day, 10);\r\n        if (day >= 1 && day <= 31) {\r\n            return true;\r\n        }\r\n        return 'Invalid day number.';\r\n    }\r\n    return 'Day is required.';\r\n};\r\n\r\nconst validateDOBMonth = (month) => {\r\n    if ( month ) {\r\n        month = parseInt(month, 10);\r\n        if (month >= 1 && month <= 12) {\r\n            return true;\r\n        }\r\n        return 'Invalid month number.';\r\n    }\r\n    return 'Month is required.';\r\n};\r\n\r\nconst validateDOBYear = (year) => {\r\n    // For the purpose of this test, the year must be four characters long.\r\n    const myYear = parseInt(year, 10);\r\n    if (myYear && myYear >= 1000) {\r\n        const thisYear = new Date().getFullYear();\r\n        if (myYear >= thisYear - 120 && myYear <= thisYear) {\r\n            return true;\r\n        }\r\n    }\r\n    return 'Invalid year.';\r\n};\r\n\r\nconst validateDOB = (day, month, year) => {\r\n    if (true !== validateDOBYear(year)) {\r\n        return '';\r\n    }\r\n\r\n    day = parseInt(day, 10);\r\n    month = parseInt(month, 10) - 1;\r\n    year = parseInt(year, 10);\r\n\r\n    const date = new Date(year, month, day);\r\n    const now = new Date();\r\n    now.setHours(0, 0, 0, 0);\r\n\r\n    if (!(date.getMonth() === month && date.getDate() === day)) {\r\n        return 'Invalid date.';\r\n    } else if (now < date) {\r\n        return 'Date must not be in the future.';\r\n    }\r\n\r\n    return true;\r\n};\r\n\r\nconst validateTelephone = function (telephone) {\r\n    if (telephone) {\r\n        // Regular expression taken from https://stackoverflow.com/a/29767609\r\n        const regExp = /^[\\+]?[(]?[0-9]{3,5}[)]?[-\\s\\.]?[0-9]{3}[-\\s\\.]?[0-9]{4,6}$/i;\r\n        if (null === telephone.match(regExp)) {\r\n            return 'Invalid telephone number.';\r\n        }\r\n        return true;\r\n    }\r\n    return 'Telephone number is required.';\r\n};\r\n\r\nmodule.exports = {\r\n    validateDOB,\r\n    validateDOBDay,\r\n    validateDOBMonth,\r\n    validateDOBYear,\r\n    validateEmail,\r\n    validateName,\r\n    validateTelephone\r\n};\r\n\n\n//# sourceURL=webpack:///./src/modules/validation.js?");

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/style.scss?");

/***/ })

/******/ });