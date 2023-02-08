function displayTodos(title, description, dueDate, priority) {
  const todoList = document.getElementById("todo-list");
  todoList.innerHTML +=
    "<h3 class='todo-item'>" +
    title +
    " " +
    description +
    " " +
    dueDate +
    " " +
    priority +
    " " +
    "</h3>";
  removeTodo();
}

function removeTodo() {
  const todoList = document.getElementById("todo-list");
  todoList.addEventListener("click", (e) => {
    e.target.remove();
  });
}

export { displayTodos };
