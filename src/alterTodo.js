import { arrayToSeperateValues } from "./todoLogic.js";

function alterTodo() {
  let todoArray = [];
  const addBtn = document.querySelector(".newTodoButton");

  addBtn.addEventListener("click", () => {
    const form = document.getElementById("form-modal");
    form.style.display = "block";

    const submit = document.querySelector(".submitForm");
    submit.addEventListener("click", function (event) {
      event.stopImmediatePropagation();
      event.preventDefault();

      const title = document.getElementById("title").value;
      const description = document.getElementById("description").value;
      const dueDate = document.getElementById("dueDate").value;
      const priority = document.getElementById("priority").value;
      const todoForm = document.getElementById("form");

      if (title === "" || description === "" || priority === "") {
        alert("Title, description, or priority fields cannot be left blank.");
        return alterTodo()
      }

      todoForm.reset();
      form.style.display = "none";

      todoArray.push(title, description, dueDate, priority);
      arrayToSeperateValues(todoArray);
      todoArray = [];
    });
  });
}

export { alterTodo };
