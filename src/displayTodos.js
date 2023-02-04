function displayTodos(todo) {
  const container = document.querySelector("#container");
  const todoList = document.createElement("div");
  todoList.innerText = 
    todo.title + " " + todo.description + " " + todo.dueDate + " " + todo.priority;
  container.appendChild(todoList);
}

export { displayTodos };
