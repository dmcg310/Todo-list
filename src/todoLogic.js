import { displayTodos } from "./displayTodos.js";

function todoCreation(title, description, dueDate, priority) {
  return {
    title,
    description,
    dueDate,
    priority,
    createTodo() {
      return title + "\n" + description + "\n" + dueDate + "\n" + priority;
    },
  };
}

function arrayToSeperateValues(todoArray) {
  let title = todoArray[0];
  let description = todoArray[1];
  let dueDate = todoArray[2];
  let priority = todoArray[3];
  priority += " Priority";
  let todo = todoCreation(title, description, dueDate, priority);
  displayTodos(todo);
  todo = "";
}

export { arrayToSeperateValues };
