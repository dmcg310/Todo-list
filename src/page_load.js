import { buttonCreation } from "./buttonCreation.js";
import { displayLocalStorage } from "./todoLogic.js";

function loadup() {
	displayLocalStorage();

	const header = document.getElementById("header");
	const headerText = document.createElement("div");
	const darkModeButton = document.createElement("button");

	darkModeButton.classList = "darkModeButton";
	darkModeButton.type = "submit";
	darkModeButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-moon" width="48" height="48" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
</svg>`;
	darkModeButton.addEventListener("click", darkMode());

	function darkMode() {
		darkModeButton.addEventListener("click", function () {
			const container = document.getElementById("container");
			const sidebar = document.getElementById("sidebar");
			container.classList.toggle("dark-mode");
			sidebar.classList.toggle("dark-mode-lighter");
		});
	}

	headerText.id = "headerText";
	headerText.innerHTML = `<h1 class="header-title">Todo List</h1>
    <h3 class="header-subtitle">Your Todos</h3>`;
	header.append(headerText, darkModeButton);

	buttonCreation();

	let modal = document.getElementById("form-modal");
	let blankModal = document.getElementById("blank-fields-modal");
	window.onclick = function (event) {
		if (event.target == modal) {
			modal.style.display = "none";
		} else if (event.target == blankModal) {
			blankModal.style.display = "none";
		}
	};
}

export { loadup };
