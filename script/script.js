import { Card } from "./card.js";
import { closeModal } from "./utils.js";
import { formValidator, resetForm } from "./formValidator.js";
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

const photoArray = [
	{
		title: "Yosemite Valley",
		url: "https://code.s3.yandex.net/web-code/yosemite.jpg",
	},
	{
		title: "Lake Louise",
		url: "https://code.s3.yandex.net/web-code/lake-louise.jpg",
	},
	{
		title: "Lago di Braies",
		url: "https://code.s3.yandex.net/web-code/lago.jpg",
	},
	{
		title: "Latemar",
		url: "https://code.s3.yandex.net/web-code/latemar.jpg",
	},
	{
		title: "Vanoise National Park",
		url: "https://code.s3.yandex.net/web-code/vanoise.jpg",
	},
	{
		title: "Rio de Janeiro",
		url: "https://images.unsplash.com/photo-1544989164-31dc3c645987?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
	},
];
photoArray.forEach((data) => {
	const photoGallery = document.querySelector(".elements");
	const card = new Card(data, "#elements-template");
	const cardElement = card.generateCard();
	photoGallery.prepend(cardElement);
});

const formSettings = {
	formSelector: ".popup__form",
	inputSelector: ".popup__input",
	submitButtonSelector: ".popup__submit",
	inactiveButtonClass: "popup__button_disabled",
	inputErrorClass: "popup__input-error",
	errorClass: "popup__error_active",
};

const addFormValidator = new formValidator(formSettings);

addFormValidator.enableValidation();
