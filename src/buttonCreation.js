import { alterTodo } from "./alterTodo.js";

function buttonCreation() {
  const containerContent = document.getElementById("containerContent");
  const newTodoButton = document.createElement("button");
  newTodoButton.classList = "newTodoButton";
  newTodoButton.type = "submit";
  newTodoButton.innerText = "Add";

  const removeTodoButton = document.createElement("button");
  removeTodoButton.classList = "removeTodoButton";
  removeTodoButton.type = "sumbit";
  removeTodoButton.innerText = "Remove";

  containerContent.append(newTodoButton, removeTodoButton);
  alterTodo();
}

export { buttonCreation };
