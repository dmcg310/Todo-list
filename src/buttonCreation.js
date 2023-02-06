import { alterTodo } from "./alterTodo.js";

function buttonCreation() {
  const containerContent = document.getElementById("containerContent");
  const newTodoButton = document.createElement("button");
  newTodoButton.classList = "newTodoButton";
  newTodoButton.type = "submit";
  newTodoButton.innerText = "Add";

  containerContent.append(newTodoButton);
  alterTodo();
}

export { buttonCreation };
