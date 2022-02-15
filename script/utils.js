import {
	inputName,
	profileName,
	profileText,
	inputDescription,
} from "./script.js";

const editProfile = document.querySelector(".popup_type-edit_profile");
const closeModalButton = document.querySelectorAll(".popup__close");
const editButton = document.querySelector(".profile__edit");
const buttonAdd = document.querySelector(".profile__plus");

function openProfilePopup(editProfile) {
	inputName.value = profileName.textContent;
	inputDescription.value = profileText.textContent;
	openModal(editProfile);
}

export function openModal(modal) {
	modal.classList.add("popup_open");
	document.addEventListener("keydown", handleEscPopup);
}

export function closeModal(modal) {
	modal.classList.remove("popup_open");
	document.removeEventListener("keydown", handleEscPopup);
}

function handleMouseClick(event) {
	if (event.target.classList.contains("popup_open")) {
		closeModal(event.target);
	}
}
function handleEscPopup(evt) {
	if (evt.key === "Escape") {
		closeModal(document.querySelector(".popup_open"));
	}
}

document.addEventListener("mousedown", handleMouseClick);
editButton.addEventListener("click", () => {
	openProfilePopup(editProfile);
});
buttonAdd.addEventListener("click", () => {
	const addCardModal = document.querySelector("#add-popup");
	openModal(addCardModal);
});
closeModalButton.forEach((modalClose) => {
	modalClose.addEventListener("click", (e) => {
		const popup = modalClose.closest(".popup");
		closeModal(popup);
	});
});
