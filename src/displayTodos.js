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
      <button id="removeTodo" type="submit"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-checks" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M7 12l5 5l10 -10" />
      <path d="M2 12l5 5m5 -5l5 -5" />
    </svg></button>
    </h3>`;
	removeTodo();
}

function removeTodo() {
	const removeTodoButton = document.querySelectorAll("#removeTodo");
	removeTodoButton.forEach((button) => {
		button.addEventListener("click", (e) => {
			e.currentTarget.parentNode.remove();
		});
	});
}

export { displayTodos };
