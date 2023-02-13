import { formatDistance, parseISO, subDays } from "date-fns";

function displayTodos(title, description, dueDate, priority) {
  let dateToday = new Date();
  let difference = formatDistance(dateToday, parseISO(dueDate));
  const todoList = document.getElementById("todo-list");
  todoList.innerHTML += `<h3 class='todo-item'> 
      ${title}\u00A0\u00A0\u00A0 
      ${description}\u00A0\u00A0
      Due: ${dueDate} (${difference})\u00A0\u00A0  
      ${priority} priority 
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
