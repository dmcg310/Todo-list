function displayTodos(todo) {
  const todoList = document.getElementById("todo-list");
  let title = todo.title;
  let description = todo.description;
  let dueDate = todo.dueDate;
  let priority = todo.priority;
  todoList.innerHTML +=
    "<h3 class='todo-item'>" +
    title +
    description +
    dueDate +
    priority +
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
