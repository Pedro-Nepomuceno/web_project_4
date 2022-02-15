class formValidator {
	constructor(settings) {
		this._inputSelector = settings.inputSelector;
		this._submitButtonSelector = settings.submitButtonSelector;
		this._inactiveButtonClass = settings.inactiveButtonClass;
		this._inputErrorClass = settings.inputErrorClass;
		this._errorClass = settings.errorClass;
		this._formEl = settings.formEl;
	}

	_hasInvalidInput(inputEl) {
		return !inputEl.validity.valid;
	}

	_showInputError(inputEl) {
		const errorElement = document.querySelector(`#${inputEl.id}-error`);
		errorElement.classList.add(this._errorClass);
		inputEl.classList.add(this._inputErrorClass);
		errorElement.textContent = inputEl.validationMessage;
	}

	_hideInputError(inputEl) {
		const errorElement = document.querySelector(`#${inputEl.id}-error`);
		errorElement.classList.remove(this._errorClass);
		inputEl.classList.remove(this._inputErrorClass);
		errorElement.textContent = "";
	}

	_validateFormField(inputEl) {
		const errorElement = document.querySelector(`#${inputEl.id}-error`);

		if (this._hasInvalidInput(inputEl)) {
			this._showInputError(inputEl);
		} else {
			this._hideInputError(inputEl);
		}
	}

	_toggleButtonState(inputList, button) {
		button.disabled = inputList.some(this._hasInvalidInput);
	}

	_setEventListeners() {
		const inputList = Array.from(
			this._formEl.querySelectorAll(this._inputSelector)
		);
		console.log(inputList);
		const button = document.querySelector(this._submitButtonSelector);
		inputList.forEach((inputEl) => {
			inputEl.addEventListener("input", () => {
				this._validateFormField(inputEl);
				this._toggleButtonState(inputList, button);
			});
		});
	}

	enableValidation() {
		const formList = document.querySelectorAll(this._formEl);
		formList.forEach((formEl) => {
			formEl.addEventListener("submit", (evt) => {
				evt.preventDefault();
			});
		});

		this._setEventListeners();
	}
}

const formSettings = {
	formEl: ".popup__form",
	inputSelector: ".popup__input",
	submitButtonSelector: ".popup__submit",
	inactiveButtonClass: "popup__button_disabled",
	inputErrorClass: "popup__input-error",
	errorClass: "popup__error_active",
};

const addFormValidator = new formValidator(formSettings);

addFormValidator.enableValidation();

export function resetForm(formEl, settings) {
	const buttonEl = formEl.querySelector(settings.submitButtonSelector);
	buttonEl.disabled = true;
	formEl.reset();
}
