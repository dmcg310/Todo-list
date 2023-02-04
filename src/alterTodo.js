import { arrayToSeperateValues } from "./todoLogic.js";

function alterTodo() {
  // create todo
  let todoArray = [];
  const containerContent = document.querySelector("#containerContent");
  const addBtn = document.querySelector(".newTodoButton");

  addBtn.addEventListener("click", () => {
    const addForm = document.createElement("div");
    addForm.classList = "form";
    addForm.innerHTML = `<form>
        <input type="text" placeholder="title" id="title">
        <input type="text" placeholder="description" id="description">
        <input type="text" placeholder="due date" id="dueDate">
        <input type="text" placeholder="priority" id="priority">
        <button type="submit" class="submitForm">Add</button> 
      </form>`;
    containerContent.appendChild(addForm);

    const submit = document.querySelector(".submitForm");
    submit.addEventListener("click", function (event) {
      event.preventDefault();

      const title = document.getElementById("title").value;
      const description = document.getElementById("description").value;
      const dueDate = document.getElementById("dueDate").value;
      const priority = document.getElementById("priority").value;

      todoArray.push(title, description, dueDate, priority);
      arrayToSeperateValues(todoArray);
      todoArray = [];
    });
  });
}

export { alterTodo };
