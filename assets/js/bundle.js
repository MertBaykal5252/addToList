/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ (() => {

eval("// Elements\nconst form = document.querySelector(\"form\");\n\n// Helpers\nconst getById = id => document.getElementById(id);\n\n// Handlers\nconst createError = (inputTarget, message) => {\n  const error = document.createElement(\"div\");\n  error.classList.add(\"error\", 'error-message');\n  error.innerHTML = message;\n  inputTarget.classList.add(\"error\");\n  inputTarget.parentNode.insertBefore(error, inputTarget.nextSibling);\n};\nconst clearError = () => {\n  const errors = form.querySelectorAll(\".error.error-message\");\n  errors.forEach(error => {\n    error.previousElementSibling.classList.remove(\"error\"); // Input\n    error.parentNode.removeChild(error); // Error div element\n  });\n};\n\n// Actions\nconst onSubmit = e => {\n  e.preventDefault();\n  clearError();\n  if (validateForm()) {\n    saveForm();\n  }\n};\nconst getFormValues = () => {\n  return [...form.elements].filter(el => {\n    return el.tagName == 'INPUT';\n  });\n};\nconst clearForm = () => {\n  const inputs = getFormValues();\n  inputs.forEach(input => {\n    input.value = '';\n  });\n};\n\n// Validations\n\nconst validateEmail = email => {\n  return String(email).toLowerCase().match(/^(([^<>()[\\]\\\\.,;:\\s@\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\"]+)*)|.(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/);\n};\nconst validateForm = () => {\n  const result = getFormValues().every(target => {\n    if (target.value == '') {\n      createError(target, 'Bu alan boş bırakılamaz');\n      return false;\n    }\n    if (target.name == 'email' && !validateEmail(target.value)) {\n      createError(target, 'Geçerli bir email adresi giriniz');\n      return false;\n    }\n    if (target.name == 'phone' && target.value.length != 11) {\n      createError(target, 'Telefon numarası 11 haneli olmalıdır');\n      return false;\n    }\n    if (target.name == 'phone' && /^05\\d{9}$/.test(target.value) == false) {\n      createError(target, 'Telefon numarası 05 ile başlamalıdır');\n      return false;\n    }\n    return true;\n  });\n  return result;\n};\nconst createRemoveButton = (placeholder, target, data) => {\n  const removeButton = document.createElement('button');\n  removeButton.classList.add('deleteButton');\n  removeButton.innerHTML = 'Sil';\n  removeButton.addEventListener('click', () => {\n    deleteRow(data);\n    target.parentNode.removeChild(target);\n  });\n  placeholder.appendChild(removeButton);\n};\nconst removeItem = e => {\n  console.log(e);\n};\nconst createItem = data => {\n  let listTableBody = getById(\"listTableBody\");\n  let rowCount = listTableBody.rows.length;\n  let row = listTableBody.insertRow(rowCount);\n  row.insertCell(0).innerHTML = '';\n  row.insertCell(1).innerHTML = data.name;\n  row.insertCell(2).innerHTML = data.surName;\n  row.insertCell(3).innerHTML = data.email;\n  row.insertCell(4).innerHTML = data.phone;\n  createRemoveButton(row.insertCell(5), row, data);\n  row.index = rowCount;\n};\nconst saveForm = () => {\n  const data = {\n    id: new Date().getTime(),\n    name: form.elements.name.value,\n    surName: form.elements.surname.value,\n    email: form.elements.email.value,\n    phone: form.elements.phone.value\n  };\n  const existingData = localStorage.getItem(\"data\");\n  if (existingData) {\n    const dataArray = JSON.parse(existingData);\n    dataArray.push(data);\n    localStorage.setItem(\"data\", JSON.stringify(dataArray));\n  } else {\n    const dataArray = [data];\n    localStorage.setItem(\"data\", JSON.stringify(dataArray));\n  }\n  createItem(data);\n  clearForm();\n};\nfunction loadList() {\n  const existingData = localStorage.getItem(\"data\");\n  if (existingData) {\n    const dataArray = JSON.parse(existingData);\n    const listTableBody = getById(\"listTableBody\");\n    listTableBody.innerHTML = \"\";\n    dataArray.forEach(data => {\n      createItem(data);\n    });\n  }\n}\nfunction deleteRow(row) {\n  let dataArray = JSON.parse(localStorage.getItem(\"data\"));\n  let updatedDataArray = dataArray.filter(data => {\n    return data.id != row.id;\n  });\n  localStorage.setItem(\"data\", JSON.stringify(updatedDataArray));\n}\n\n// Main\n\nconst main = () => {\n  const form = document.querySelector('form');\n  form.addEventListener('submit', onSubmit);\n  form.elements.phone.addEventListener('keydown', e => {\n    if (/[^0-9]/.test(e.key) && e.key != 'Backspace') {\n      e.preventDefault();\n      return false;\n    }\n  });\n  loadList();\n};\n\n// Init\nmain();\n\n//# sourceURL=webpack:///./src/js/app.js?");

/***/ }),

/***/ "./src/scss/common.scss":
/*!******************************!*\
  !*** ./src/scss/common.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"../css/bundle.css\");\n\n//# sourceURL=webpack:///./src/scss/common.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_modules__["./src/js/app.js"](0, {}, __webpack_require__);
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/scss/common.scss"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;