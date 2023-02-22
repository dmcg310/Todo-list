import { displayTodos } from "./displayTodos.js";

function todoCreation(title, description, dueDate, priority) {
	return {
		title,
		description,
		dueDate,
		priority,
		createTodo() {
			displayTodos(title, description, dueDate, priority);
			return { title, description, dueDate, priority };
		},
	};
}

function arrayToSeperateValues(todoArray) {
	let title = todoArray[0];
	let description = todoArray[1];
	let dueDate = todoArray[2];
	let priority = todoArray[3];
	let todoItem = todoCreation(title, description, dueDate, priority);
	todoItem.createTodo();
	setToLocalStorage(todoArray);
	getFromLocalStorage();
}

function setToLocalStorage(todoArray) {
	let todoList = getFromLocalStorage();
	todoList.push(todoArray);
	localStorage.setItem("todoArray", JSON.stringify(todoList));
}

function getFromLocalStorage() {
	let todoList = [];
	if (localStorage.getItem("todoArray") === null) {
		todoList = [];
	} else {
		todoList = JSON.parse(localStorage.getItem("todoArray"));
	}
	return todoList;
}

function displayLocalStorage() {
	let todoList = getFromLocalStorage();
	todoList.forEach((todo) => {
		let todoItem = todoCreation(todo[0], todo[1], todo[2], todo[3]);
		todoItem.createTodo();
	});
}

export {
	todoCreation,
	arrayToSeperateValues,
	getFromLocalStorage,
	setToLocalStorage,
	displayLocalStorage,
};
