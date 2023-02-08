function displayTodos(title, description, dueDate, priority) {
  const todoList = document.getElementById("todo-list");
  todoList.innerHTML += `<h3 class='todo-item'> 
      ${title} 
      ${description} 
      ${dueDate} 
      ${priority} 
      <input id="complete" type="checkbox"></input>
      <button id="removeTodo" type="submit">Remove Todo</button>
    </h3>`;
  removeTodo();
}

function removeTodo() {
  const removeTodoButton = document.getElementById("removeTodo");
  removeTodoButton.addEventListener("click", (e) => {
    e.currentTarget.parentNode.remove();
  });
}

export { displayTodos };
