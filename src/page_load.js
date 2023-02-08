import { buttonCreation } from "./buttonCreation.js";

function loadup() {
  const header = document.getElementById("header");
  const headerText = document.createElement("div");
  headerText.id = "headerText";
  headerText.innerHTML = "<h1>Todo List</h1>";
  header.append(headerText);

  const container = document.getElementById("container");
  const containerContent = document.createElement("div");
  containerContent.id = "containerContent";
  containerContent.innerHTML = "<h3>Your todo's</h3>";
  container.append(containerContent);

  buttonCreation();
}

export { loadup };
