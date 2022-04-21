import "../pages/index.css";
import { Card } from "../components/card.js";
import { FormValidator } from "../components/formValidator.js";
import { Section } from "../components/section.js";
import { Popup } from "../components/popup.js";
import { PopupWithImage } from "../components/popUpWithImage.js";
import { PopupWithForm } from "../components/popupWithForm.js";
import { UserInfo } from "../components/userInfo.js";
import {
	formSettings,
	photoArray,
	profileName,
	profileText,
	addCardModal,
	photoGallery,
	imageModal,
} from "../utils/constants.js";

import { Api } from "../components/Api.js";

const editProfile = ".popup_type-edit_profile";
export const inputName = document.querySelector(".popup__input_type_name");
export const inputDescription = document.querySelector(
	".popup__input_type_description"
);

const addInputName = document.querySelector("#title");
const addInputDescription = document.querySelector("#url");

export const closeModalButton = document.querySelectorAll(".popup__close");
const editButton = document.querySelector(".profile__edit");
const buttonAdd = document.querySelector(".profile__plus");

const newPopupPhoto = new Popup(addCardModal);

newPopupPhoto.setEventListeners();

const imagePopup = new PopupWithImage(imageModal);

const popupProfile = new Popup(editProfile);
popupProfile.setEventListeners();

const addCardForm = new PopupWithForm(addCardModal, {
	handleSubmit: (data) => {
		api.addNewCard(data).then((cardData) => {
			const newElement = new Card(
				cardData,
				"#elements-template",
				handleCardClick
			).generateCard();
			photosSection.addItem(newElement);
		});
	},
});

addCardForm.setEventListeners();

const api = new Api({
	baseUrl: "https://around.nomoreparties.co/v1/group-12",
	headers: {
		authorization: "b240a05b-bedc-4219-9e26-b0942ecb0fb0",
		"Content-Type": "application/json",
	},
});

api.getInitialCards().then((cardData) => {
	cardData.forEach((card) => {
		const newElement = new Card(
			card,
			"#elements-template",
			handleCardClick
		).generateCard();
		photosSection.addItem(newElement);
	});
});

const photosSection = new Section(photoGallery);

const editProfileForm = new PopupWithForm(editProfile, {
	handleSubmit: (data) => {
		userInfo.setUserInfo(data);
	},
});

editProfileForm.setEventListeners();
const userInfo = new UserInfo({ profileName, profileText });

editButton.addEventListener("click", () => {
	const currentUserInfo = userInfo.getUserInfo();
	inputName.value = currentUserInfo.userName;
	inputDescription.value = currentUserInfo.userDescription;
	popupProfile.open();
});

imagePopup.setEventListeners();

function handleCardClick(data) {
	imagePopup.open(data);
}

const addFormSelector = "#add-form";
const addProfileFormSelector = "#profile-form";

const addFormValidator = new FormValidator(formSettings, addFormSelector);
const profileFormValidator = new FormValidator(
	formSettings,
	addProfileFormSelector
);

buttonAdd.addEventListener("click", () => {
	addFormValidator.resetValidation();
	newPopupPhoto.open();
});

profileFormValidator.enableValidation();

addFormValidator.enableValidation();

const tryApi = api.getInitialCards();

// fetch("https://around.nomoreparties.co/v1/group-12/cards", {
// 	headers: {
// 		authorization: "b240a05b-bedc-4219-9e26-b0942ecb0fb0",
// 		"Content-Type": "application/json",
// 	},
// })
// 	.then((res) => res.json())
// 	.then((data) => console.log(data));

// function renderCard(item, container) {
// 	const element = new Card(item, "#elements-template", handleCardClick);
// 	const newCard = element.generateCard();
// 	container.addItem(newCard);
// }
