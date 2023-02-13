import { alterTodo } from "./alterTodo.js";

function buttonCreation() {
	const container = document.getElementById("container");
	const addTodoDiv = document.createElement("div");
	addTodoDiv.id = "sidebar";

	const newTodoButton = document.createElement("button");
	newTodoButton.classList = "newTodoButton";
	newTodoButton.type = "submit";
	newTodoButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-plus" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#333333" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>`;

	container.append(addTodoDiv);
	addTodoDiv.append(newTodoButton);
	alterTodo();
}

export { buttonCreation };
