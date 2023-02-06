/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/alterTodo.js":
/*!**************************!*\
  !*** ./src/alterTodo.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"alterTodo\": () => (/* binding */ alterTodo)\n/* harmony export */ });\n/* harmony import */ var _todoLogic_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoLogic.js */ \"./src/todoLogic.js\");\n\n\nfunction alterTodo() {\n  // create todo\n  let todoArray = [];\n  const addBtn = document.querySelector(\".newTodoButton\");\n\n  addBtn.addEventListener(\"click\", () => {\n    const form = document.getElementById(\"form-modal\");\n    form.style.display = \"block\";\n\n    const submit = document.querySelector(\".submitForm\");\n    submit.addEventListener(\"click\", function (event) {\n      event.preventDefault();\n\n      const title = document.getElementById(\"title\").value;\n      const description = document.getElementById(\"description\").value;\n      const dueDate = document.getElementById(\"dueDate\").value;\n      const priority = document.getElementById(\"priority\").value;\n      const todoForm = document.getElementById(\"form\");\n\n      todoForm.reset();\n      form.style.display = \"none\";\n\n      todoArray.push(title, description, dueDate, priority);\n      (0,_todoLogic_js__WEBPACK_IMPORTED_MODULE_0__.arrayToSeperateValues)(todoArray);\n      todoArray = [];\n    });\n  });\n}\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/alterTodo.js?");

/***/ }),

/***/ "./src/buttonCreation.js":
/*!*******************************!*\
  !*** ./src/buttonCreation.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"buttonCreation\": () => (/* binding */ buttonCreation)\n/* harmony export */ });\n/* harmony import */ var _alterTodo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alterTodo.js */ \"./src/alterTodo.js\");\n\n\nfunction buttonCreation() {\n  const containerContent = document.getElementById(\"containerContent\");\n  const newTodoButton = document.createElement(\"button\");\n  newTodoButton.classList = \"newTodoButton\";\n  newTodoButton.type = \"submit\";\n  newTodoButton.innerText = \"Add\";\n\n  containerContent.append(newTodoButton);\n  (0,_alterTodo_js__WEBPACK_IMPORTED_MODULE_0__.alterTodo)();\n}\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/buttonCreation.js?");

/***/ }),

/***/ "./src/displayTodos.js":
/*!*****************************!*\
  !*** ./src/displayTodos.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayTodos\": () => (/* binding */ displayTodos)\n/* harmony export */ });\nfunction displayTodos(todo) {\n  const todoList = document.getElementById(\"todo-list\");\n  let title = todo.title;\n  let description = todo.description;\n  let dueDate = todo.dueDate;\n  let priority = todo.priority;\n  todoList.innerHTML +=\n    \"<h3 class='todo-item'>\" +\n    title +\n    description +\n    dueDate +\n    priority +\n    \"</h3>\";\n  removeTodo();\n}\n\nfunction removeTodo() {\n  const todoList = document.getElementById(\"todo-list\");\n  todoList.addEventListener(\"click\", (e) => {\n    e.target.remove();\n  });\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/displayTodos.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _page_load_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page_load.js */ \"./src/page_load.js\");\n\n\n(0,_page_load_js__WEBPACK_IMPORTED_MODULE_0__.loadup)();\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/page_load.js":
/*!**************************!*\
  !*** ./src/page_load.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadup\": () => (/* binding */ loadup)\n/* harmony export */ });\n/* harmony import */ var _buttonCreation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buttonCreation.js */ \"./src/buttonCreation.js\");\n\nfunction loadup() {\n  const header = document.getElementById(\"header\");\n  const headerText = document.createElement(\"div\");\n  headerText.id = \"headerText\";\n  headerText.innerHTML = \"<h1>Todo List</h1>\";\n  header.append(headerText);\n\n  const container = document.getElementById(\"container\");\n  const containerContent = document.createElement(\"div\");\n  containerContent.id = \"containerContent\";\n  containerContent.innerHTML = \"<h3>Your todo's</h3>\";\n  container.append(containerContent);\n\n  (0,_buttonCreation_js__WEBPACK_IMPORTED_MODULE_0__.buttonCreation)();\n}\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/page_load.js?");

/***/ }),

/***/ "./src/todoLogic.js":
/*!**************************!*\
  !*** ./src/todoLogic.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"arrayToSeperateValues\": () => (/* binding */ arrayToSeperateValues)\n/* harmony export */ });\n/* harmony import */ var _displayTodos_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayTodos.js */ \"./src/displayTodos.js\");\n\n\nfunction todoCreation(title, description, dueDate, priority) {\n  return {\n    title,\n    description,\n    dueDate,\n    priority,\n    createTodo() {\n      return title + \"\\n\" + description + \"\\n\" + dueDate + \"\\n\" + priority;\n    },\n  };\n}\n\nfunction arrayToSeperateValues(todoArray) {\n  let title = todoArray[0];\n  let description = todoArray[1];\n  let dueDate = todoArray[2];\n  let priority = todoArray[3];\n  let todo = todoCreation(title, description, dueDate, priority);\n  (0,_displayTodos_js__WEBPACK_IMPORTED_MODULE_0__.displayTodos)(todo);\n  todo = \"\";\n}\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/todoLogic.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;