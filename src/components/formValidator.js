export class FormValidator {
	constructor(settings, validationSelector) {
		this._inputSelector = settings.inputSelector;
		this._submitButtonSelector = settings.submitButtonSelector;
		this._inactiveButtonClass = settings.inactiveButtonClass;
		this._inputErrorClass = settings.inputErrorClass;
		this._errorClass = settings.errorClass;
		this._formSelector = settings.formSelector;
		this._validator = validationSelector;
		this._element = document.querySelector(validationSelector);
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
			this._element.querySelectorAll(this._inputSelector)
		);

		const button = this._element.querySelector(this._submitButtonSelector);
		inputList.forEach((inputEl) => {
			inputEl.addEventListener("input", () => {
				this._validateFormField(inputEl);
				this._toggleButtonState(inputList, button);
			});
		});
	}

	resetForm() {
		const buttonEl = this._element.querySelector(this._submitButtonSelector);
		buttonEl.disabled = true;
		this._element.reset();
	}

	enableValidation() {
		document
			.querySelector(this._validator)
			.addEventListener("submit", (evt) => {
				evt.preventDefault();
			});
		this._setEventListeners();
	}
}
