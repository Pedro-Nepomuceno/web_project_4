import { Card } from "./card.js";
import { closeModal } from "./utils.js";
import { resetForm } from "./formValidator.js";
// toggle elements
const editProfile = document.querySelector(".popup_type-edit_profile");
const editModalProfile = document.querySelector(".popup__form");
export const inputName = document.querySelector(".popup__input_type_name");
export const inputDescription = document.querySelector(
	".popup__input_type_description"
);
export const profileName = document.querySelector(".profile__name");
export const profileText = document.querySelector(".profile__text");
const addInputName = document.querySelector("#title");
const addInputDescription = document.querySelector("#url");
const addCardModal = document.querySelector("#add-popup");

function handleEditProfileFormSubmit(evt) {
	evt.preventDefault();
	profileName.textContent = inputName.value;
	profileText.textContent = inputDescription.value;
	closeModal(editProfile);
	resetForm(evt.target, { submitButtonSelector: ".popup__submit" });
}

function addFormSubmit(evt) {
	evt.preventDefault();
	const element = { url: addInputDescription.value, title: addInputName.value };
	const newElement = new Card(element, "#elements-template");
	const cardElement = newElement.generateCard();
	document.querySelector(".elements").prepend(cardElement);
	closeModal(addCardModal);
	resetForm(evt.target, { submitButtonSelector: ".popup__submit" });
}
addCardModal.addEventListener("submit", addFormSubmit);
editModalProfile.addEventListener("submit", handleEditProfileFormSubmit);
