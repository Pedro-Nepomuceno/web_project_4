// const popup = document.querySelectorAll(".popup");
const editProfile = document.querySelector(".popup_type-edit_profile");
// const editModalProfile = document.querySelector(".popup__form");
const closeModalButton = document.querySelectorAll(".popup__close");
// const createPhotoButton = document.querySelector(".popup__submit_create");
// const imageModal = document.querySelector("#photo");
const addCardModal = document.querySelector("#add-popup");
const editButton = document.querySelector(".profile__edit");
const buttonAdd = document.querySelector(".profile__plus");

const popup = document.querySelectorAll(".popup");
const editProfile = document.querySelector(".popup_type-edit_profile");
const editModalProfile = document.querySelector(".popup__form");
const closeModalButton = document.querySelectorAll(".popup__close");
export const inputName = document.querySelector(".popup__input_type_name");
export const inputDescription = document.querySelector(
	".popup__input_type_description"
);
export const profileName = document.querySelector(".profile__name");
export const profileText = document.querySelector(".profile__text");
const addPhoto = document.querySelector(".add");
const addInputName = document.querySelector("#title");
const addInputDescription = document.querySelector("#url");
const addCardModal = document.querySelector("#add-popup");
const createPhotoButton = document.querySelector(".popup__submit_create");
const imageModal = document.querySelector("#photo");

const validateFormField = (inputEl, formEl, settings) => {
	const errorElement = formEl.querySelector(`#${inputEl.id}-error`);

	if (hasInvalidInput(inputEl)) {
		showInputError(errorElement, inputEl, settings);
	} else {
		hideInputError(errorElement, inputEl, settings);
	}
};

function hasInvalidInput(inputEl) {
	return !inputEl.validity.valid;
}

function toggleButtonState(inputList, button) {
	button.disabled = inputList.some(hasInvalidInput);
}

function showInputError(errorElement, inputEl, settings) {
	errorElement.classList.add(settings.errorClass);
	inputEl.classList.add(settings.inputErrorClass);
	errorElement.textContent = inputEl.validationMessage;
}

function hideInputError(errorElement, inputEl, settings) {
	errorElement.classList.remove(settings.errorClass);
	inputEl.classList.remove(settings.inputErrorClass);
	errorElement.textContent = "";
}

function setEventListeners(formEl, settings) {
	const inputList = Array.from(formEl.querySelectorAll(settings.inputSelector));
	const button = formEl.querySelector(settings.submitButtonSelector);
	inputList.forEach((inputEl) => {
		inputEl.addEventListener("input", () => {
			validateFormField(inputEl, formEl, settings);
			toggleButtonState(inputList, button, settings);
		});
	});
}

function enableValidation(settings) {
	const formList = document.querySelectorAll(settings.formSelector);
	formList.forEach((formEl) => {
		formEl.addEventListener("submit", (evt) => {
			evt.preventDefault();
		});
		setEventListeners(formEl, settings);
	});
}
hasinvalidInput = (inputlist) => {
	return inputlist.some((inputEl) => {
		return !inputEl.validity.valid;
	});
};
enableValidation({
	formSelector: ".popup__form",
	inputSelector: ".popup__input",
	submitButtonSelector: ".popup__submit",
	inactiveButtonClass: "popup__button_disabled",
	inputErrorClass: "popup__input-error",
	errorClass: "popup__error_active",
});
