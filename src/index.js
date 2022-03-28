import "../src/pages/index.css";
import { Card } from "./components/card.js";
import { FormValidator } from "./components/formValidator.js";
import { Section } from "./components/section.js";
import { Popup } from "./components/popup.js";
import { PopupWithImage } from "./components/popUpWithImage.js";
import { PopupWithForm } from "./components/popupWithForm.js";
import { UserInfo } from "./components/userInfo.js";

const editProfile = ".popup_type-edit_profile";
export const inputName = document.querySelector(".popup__input_type_name");
export const inputDescription = document.querySelector(
	".popup__input_type_description"
);
export const profileName = ".profile__name";
export const profileText = ".profile__text";
const addInputName = document.querySelector("#title");
const addInputDescription = document.querySelector("#url");

export const closeModalButton = document.querySelectorAll(".popup__close");
const editButton = document.querySelector(".profile__edit");
const buttonAdd = document.querySelector(".profile__plus");
const addCardModal = "#add-popup";
const photoGallery = ".elements";
const imageModal = "#photo";

const newPopupPhoto = new Popup(addCardModal);
newPopupPhoto.setEventListeners();
buttonAdd.addEventListener("click", () => {
	newPopupPhoto.open();
});

const newPopupProfile = new Popup(editProfile);
newPopupProfile.setEventListeners();

const handleAddFormSubmit = new PopupWithForm(addCardModal, {
	handlePopupWithForm: () => {
		renderCard(
			{ url: addInputDescription.value, title: addInputName.value },
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

const editProfileForm = new PopupWithForm(editProfile, {
	handlePopupWithForm: (data) => {
		handleEditform.setUserInfo(data);
	},
});

editProfileForm.setEventListeners();
const handleEditform = new UserInfo({ profileName, profileText });

editButton.addEventListener("click", () => {
	const currentUserInfo = handleEditform.getUserInfo();
	inputName.value = currentUserInfo.userName;
	inputDescription.value = currentUserInfo.userDescription;
	newPopupProfile.open();
});

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
