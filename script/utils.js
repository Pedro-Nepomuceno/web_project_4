export function openModal(modal) {
	modal.classList.add("popup_open");
	document.addEventListener("keydown", handleEscPopup);
}

export function closeModal(modal) {
	modal.classList.remove("popup_open");
	modal.querySelector;
	document.removeEventListener("keydown", handleEscPopup);
}

export function handleMouseClick(event) {
	if (event.target.classList.contains("popup_open")) {
		closeModal(event.target);
	}
}
function handleEscPopup(evt) {
	if (evt.key === "Escape") {
		closeModal(document.querySelector(".popup_open"));
	}
}
