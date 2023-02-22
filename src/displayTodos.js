import { formatDistance, parseISO } from "date-fns";
import { getFromLocalStorage } from "./todoLogic.js";

function displayTodos(title, description, dueDate, priority) {
	getFromLocalStorage();
	const todoList = document.getElementById("todo-list");

	let difference;

	if (dueDate === "") {
		dueDate = "No due date";
		difference = "";
	} else {
		difference = formatDistance(parseISO(dueDate), new Date(), {
			addSuffix: true,
		});
	}

	todoList.innerHTML += `<h3 class='todo-item'> 
      ${title}\u00A0\u00A0\u00A0|
      ${description}\u00A0\u00A0|
      Due: ${dueDate} ${difference}\u00A0\u00A0|
      ${priority} priority 
      <button id="completeTodo" type="submit"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-checks" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M7 12l5 5l10 -10" />
      <path d="M2 12l5 5m5 -5l5 -5" />
    </svg></button>
    </h3>`;
	completeTodo();
}

function completeTodo() {
	const completeTodoButton = document.querySelectorAll("#completeTodo");
	for (let i = 0; i < completeTodoButton.length; i++) {
		completeTodoButton[i].addEventListener("click", function () {
			this.parentElement.classList.add("completed");
			this.parentElement.style.textDecoration = "line-through";
			this.parentElement.style.filter = "opacity(50%)";
			this.parentElement.style.backgroundColor = "rgb(255, 255, 255, 0.5)";
			this.parentElement.style.color = "rgb(0, 0, 0, 0.5)";
			this.parentElement.style.border = "2px solid rgb(0, 0, 0, 0.5)";
			this.parentElement.style.borderRadius = "10px";
			this.parentElement.style.padding = "5px";
			this.style.display = "none";
		});
	}
}

export { displayTodos };
