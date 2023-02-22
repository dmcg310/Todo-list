import { alterTodo } from "./alterTodo.js";
import { clearTodos } from "./todoLogic.js";

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

	const clearTodoButton = document.createElement("button");
	clearTodoButton.id = "clear-todos";
	clearTodoButton.type = "submit";
	clearTodoButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-recycle" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
	<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
	<path d="M12 17l-2 2l2 2m-2 -2h9a2 2 0 0 0 1.75 -2.75l-.55 -1" />
	<path d="M12 17l-2 2l2 2m-2 -2h9a2 2 0 0 0 1.75 -2.75l-.55 -1" transform="rotate(120 12 13)" />
	<path d="M12 17l-2 2l2 2m-2 -2h9a2 2 0 0 0 1.75 -2.75l-.55 -1" transform="rotate(240 12 13)" />
  </svg>`;

	container.append(addTodoDiv);
	addTodoDiv.append(newTodoButton, clearTodoButton);
	alterTodo();
	clearTodos();
}

export { buttonCreation };
