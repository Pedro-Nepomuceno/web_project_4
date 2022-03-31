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
buttonAdd.addEventListener("click", () => {
	newPopupPhoto.open();
});

const PopupProfile = new Popup(editProfile);
PopupProfile.setEventListeners();

const addCardForm = new PopupWithForm(addCardModal, {
	handleSubmit: () => {
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

addCardForm.setEventListeners();

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
	PopupProfile.open();
});

const imagePopup = new PopupWithImage(imageModal);
const createNewElement = new Section(
	{
		items: photoArray,
		renderer: (item) => {
			renderCard(item, createNewElement);
		},
	},
	photoGallery
);
createNewElement.renderer();
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

profileFormValidator.enableValidation();

addFormValidator.enableValidation();
