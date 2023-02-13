import { buttonCreation } from "./buttonCreation.js";

function loadup() {
  const header = document.getElementById("header");
  const headerText = document.createElement("div");
  headerText.id = "headerText";
  headerText.innerHTML = `<h1>Todo List</h1>
    <h3>Your Todos</h3>`;
  header.append(headerText);

  buttonCreation();
}

export { loadup };
