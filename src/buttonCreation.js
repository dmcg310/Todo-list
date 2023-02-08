import { alterTodo } from "./alterTodo.js";

function buttonCreation() {
  const container = document.getElementById("container");
  const addTodoDiv = document.createElement("div");
  addTodoDiv.id = "sidebar";

  const newTodoButton = document.createElement("button");
  newTodoButton.classList = "newTodoButton";
  newTodoButton.type = "submit";
  newTodoButton.innerText = "Add Todo";

  container.append(addTodoDiv);
  addTodoDiv.append(newTodoButton);
  alterTodo();
}

export { buttonCreation };
