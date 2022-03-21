import { Card } from "./card.js";
import { closeModal, openModal, handleMouseClick } from "./utils.js";
import { FormValidator } from "./formValidator.js";
import { Section } from "./section.js";
import { Popup } from "./popup.js";
import { PopupWithImage } from "./popUpWithImage.js";
import { PopupWithForm } from "./popupWithForm.js";

const editProfile = ".popup_type-edit_profile";
const editModalProfile = document.querySelector(".popup__form");
export const inputName = document.querySelector(".popup__input_type_name");
export const inputDescription = document.querySelector(
	".popup__input_type_description"
);
export const profileName = document.querySelector(".profile__name");
export const profileText = document.querySelector(".profile__text");
const addInputName = document.querySelector("#title");
const addInputDescription = document.querySelector("#url");

export const closeModalButton = document.querySelectorAll(".popup__close");
const editButton = document.querySelector(".profile__edit");
const buttonAdd = document.querySelector(".profile__plus");
const addCardModal = "#add-popup";
const photoGallery = ".elements";
const photoElement = document.querySelector(".elements__pic");
const imageModal = "#photo";
const popupInput = document.querySelector(".popup__input");

const newPopupPhoto = new Popup(addCardModal);
newPopupPhoto.setEventListeners();
buttonAdd.addEventListener("click", () => {
	newPopupPhoto.open();
});

const newPopupProfile = new Popup(editProfile);
newPopupProfile.setEventListeners();
editButton.addEventListener("click", () => {
	newPopupProfile.open();
});

const handleAddFormSubmit = new PopupWithForm(addCardModal, {
	handlePopupWithForm: () => {
		renderCard(
			{ image: addInputDescription.value, title: addInputName.value },
			createNewElement
		);
	},
});

function renderCard(item, container) {
	const element = new Card(item, "#elements-template", handleCardClick);
	const newCard = element.generateCard();
	container.addItem(newCard);
}
handleAddFormSubmit.setEventListeners();

function handleEditProfileFormSubmit(evt) {
	evt.preventDefault();
	profileName.textContent = inputName.value;
	profileText.textContent = inputDescription.value;
	closeModal(editProfile);
	profileFormValidator.resetForm();
}

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
const openImagePopup = new PopupWithImage(imageModal);
const createNewElement = new Section(
	{
		items: photoArray,
		renderer: (item) => {
			const element = new Card(item, "#elements-template", handleCardClick);
			const newCard = element.generateCard();
			createNewElement.addItem(newCard);
		},
	},
	photoGallery
);
createNewElement.renderer();
openImagePopup.setEventListeners();

function handleCardClick(data) {
	openImagePopup.open(data);
}

const formSettings = {
	formSelector: ".popup__form",
	inputSelector: ".popup__input",
	submitButtonSelector: ".popup__submit",
	inactiveButtonClass: "popup__button_disabled",
	inputErrorClass: "popup__input-error",
	errorClass: "popup__error_active",
};
const addFormSelector = "#add-form";
const addProfileFormSelector = "#profile-form";

const addFormValidator = new FormValidator(formSettings, addFormSelector);
const profileFormValidator = new FormValidator(
	formSettings,
	addProfileFormSelector
);

profileFormValidator.enableValidation();

addFormValidator.enableValidation();

// document.addEventListener("mousedown", handleMouseClick);
// editButton.addEventListener("click", () => {
// 	openProfilePopup(editProfile);
// });
// buttonAdd.addEventListener("click", () => {
// 	const addCardModal = document.querySelector("#add-popup");
// 	openModal(addCardModal);
// });
// closeModalButton.forEach((modalClose) => {
// 	modalClose.addEventListener("click", (e) => {
// 		const popup = modalClose.closest(".popup");
// 		closeModal(popup);
// 	});
// });
// function openProfilePopup(editProfile) {
// 	inputName.value = profileName.textContent;
// 	inputDescription.value = profileText.textContent;
// 	openModal(editProfile);
// }

// function handleAddFormSubmit(evt) {
// 	evt.preventDefault();
// 	const element = { url: addInputDescription.value, title: addInputName.value };

// 	document.querySelector(".elements").prepend(createNewElement(element));
// 	closeModal(addCardModal);
// 	addFormValidator.resetForm();
// }
// addCardModal.addEventListener("submit", handleAddFormSubmit);
