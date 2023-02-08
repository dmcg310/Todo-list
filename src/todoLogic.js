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
}

export { arrayToSeperateValues };
