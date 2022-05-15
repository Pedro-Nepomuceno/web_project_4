import "../pages/index.css";
import { Card } from "../components/card.js";
import { FormValidator } from "../components/formValidator.js";
import { Section } from "../components/section.js";
import { Popup } from "../components/popup.js";
import { PopupWithImage } from "../components/popUpWithImage.js";
import { PopupWithForm } from "../components/popupWithForm.js";
import { UserInfo } from "../components/userInfo.js";
import { renderLoading } from "../utils/utils.js";
import {
	formSettings,
	profileName,
	profileText,
	profilePhoto,
	addCardModal,
	editProfileModal,
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
const editProfilePicture = document.querySelector(".profile__change-photo");
const buttonAdd = document.querySelector(".profile__plus");
const profileAvatar = document.querySelector(".profile__avatar-pic");
const profileTitle = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__text");

const popupPhoto = new Popup(addCardModal);
popupPhoto.setEventListeners();

const modalEditPicture = new Popup(editProfileModal);
modalEditPicture.setEventListeners();

const popupRemove = new Popup(popupDelete);
popupRemove.setEventListeners();

const imagePopup = new PopupWithImage(imageModal);

const popupProfile = new Popup(editProfile);
popupProfile.setEventListeners();

const addCardForm = new PopupWithForm(addCardModal, {
	handleSubmit: (data) => {
		renderLoading(addCardModal, true);
		api
			.addNewCard(data)
			.then((cardData) => {
				photosSection.addItem(createCard(cardData));
				addCardForm.close();
			})
			.catch((err) => {
				console.log(err);
			})
			.finally(() => {
				renderLoading(addCardModal, false);
			});
	},
});

addCardForm.setEventListeners();

const editPictureProfile = new PopupWithForm(editProfileModal, {
	handleSubmit: (data) => {
		renderLoading(editProfileModal, true);
		api
			.editProfilePic(data)
			.then(({ avatar }) => {
				userInfo.setAvatar(avatar);
				editPictureProfile.close();
				addProfileValidator.resetValidation();
			})
			.catch((err) => {
				console.log(err);
			})
			.finally(() => {
				renderLoading(editProfileModal, false);
			});
	},
});
editPictureProfile.setEventListeners();

const api = new Api({
	baseUrl: "https://around.nomoreparties.co/v1/group-12",
	headers: {
		authorization: "b240a05b-bedc-4219-9e26-b0942ecb0fb0",
		"Content-Type": "application/json",
	},
});

let userId = null;

api
	.getAppInfo()
	.then(([cardData, info]) => {
		userId = info._id;
		userInfo.setUserInfo(info);

		cardData.forEach((data) => {
			photosSection.addItem(createCard(data));
		});
	})
	.catch((err) => {
		console.log(err);
	});

const createCard = (data) => {
	const newCard = new Card({
		data,
		cardSelector: "#elements-template",
		handleCardClick,
		currentId: userId,

		handleTrashButton: () => {
			popupRemove.open();
			confirmDelete.addEventListener("click", () => {
				renderLoading(popupDelete, true);
				api
					.deleteCard({ id: data._id })
					.then(() => {
						newCard.removeCard();
						popupRemove.close();
					})
					.catch((err) => {
						console.log(err);
					})
					.finally(() => {
						renderLoading(popupDelete, false);
					});
			});
		},
		handleLikeButton: () => {
			api
				.handleLikePhoto(data._id, newCard.isLiked())
				.then((dataLike) => {
					newCard.updateLikes(dataLike);
				})
				.catch((err) => {
					console.log(err);
				});
		},
	});
	return newCard.generateCard();
};

const photosSection = new Section(photoGallery);

const editProfileForm = new PopupWithForm(editProfile, {
	handleSubmit: (data) => {
		renderLoading(editProfile, true);
		api
			.setUserProfile(data)
			.then((profileData) => {
				userInfo.setUserInfo(profileData);
				editProfileForm.close();
			})
			.catch((err) => {
				console.log(err);
			})
			.finally(() => {
				renderLoading(editProfile, false);
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

editProfilePicture.addEventListener("click", () => {
	modalEditPicture.open();
});

imagePopup.setEventListeners();

function handleCardClick(data) {
	imagePopup.open(data);
}
const addProfile = "#add-profile";
const addFormSelector = "#add-form";
const addProfileFormSelector = "#profile-form";

const addProfileValidator = new FormValidator(formSettings, addProfile);
const addFormValidator = new FormValidator(formSettings, addFormSelector);
const profileFormValidator = new FormValidator(
	formSettings,
	addProfileFormSelector
);

buttonAdd.addEventListener("click", () => {
	addFormValidator.resetValidation();
	popupPhoto.open();
});

profileFormValidator.enableValidation();

addFormValidator.enableValidation();

addProfileValidator.enableValidation();
