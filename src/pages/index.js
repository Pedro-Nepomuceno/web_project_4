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
	profileName,
	profileText,
	profilePhoto,
	addCardModal,
	photoGallery,
	imageModal,
	popupDelete,
	confirmDelete,
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
const profileAvatar = document.querySelector(".profile__avatar-pic");
const profileTitle = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__text");

const newPopupPhoto = new Popup(addCardModal);

newPopupPhoto.setEventListeners();

export const newPopupDelete = new Popup(popupDelete);
newPopupDelete.setEventListeners();

const imagePopup = new PopupWithImage(imageModal);

const popupProfile = new Popup(editProfile);
popupProfile.setEventListeners();

const addCardForm = new PopupWithForm(addCardModal, {
	handleSubmit: (data) => {
		api.addNewCard(data).then((cardData) => {
			photosSection.addItem(newCard(cardData));
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

let userId = null;

api.getAppInfo().then(([cardData, info]) => {
	userId = info._id;
	userInfo.setUserInfo(info);

	cardData.forEach((data) => {
		photosSection.addItem(newCard(data));
	});
});

// const userId = api.getUserInfo().then((userData) => {
// 	userInfo.setUserInfo(userData);
// 	profileAvatar.src = userData.avatar;
// });

// api.getInitialCards().then((cardData) => {
// 	cardData.forEach((card) => {
// 		photosSection.addItem(newCard(card));
// 	});
// });

const newCard = (data) => {
	const createNewCard = new Card({
		data,
		cardSelector: "#elements-template",
		handleCardClick,
		currentId: userId,
		handleTrashButton: () => {
			confirmDelete.addEventListener("submit", () => {
				api.deleteCard({ id: data._id }).then(() => {
					createNewCard.removeCard();
				});
			});
		},
	});
	console.log(data._id);
	return createNewCard.generateCard();
};

const photosSection = new Section(photoGallery);

const editProfileForm = new PopupWithForm(editProfile, {
	handleSubmit: (data) => {
		api.setUserProfile(data).then((profileData) => {
			console.log(profileData);
			userInfo.setUserInfo(profileData);
		});
	},
});

editProfileForm.setEventListeners();

const userInfo = new UserInfo({ profileName, profileText, profilePhoto });

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
