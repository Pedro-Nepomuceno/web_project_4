export class FormValidator {
	constructor(settings, formSelector) {
		this._inputSelector = settings.inputSelector;
		this._submitButtonSelector = settings.submitButtonSelector;
		this._inactiveButtonClass = settings.inactiveButtonClass;
		this._inputErrorClass = settings.inputErrorClass;
		this._errorClass = settings.errorClass;
		this._formSelector = settings.formSelector;
		this._element = document.querySelector(formSelector);
		this._inputList = [...this._element.querySelectorAll(this._inputSelector)];
		this._button = this._element.querySelector(this._submitButtonSelector);
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
		this._inputList.forEach((inputEl) => {
			inputEl.addEventListener("input", () => {
				this._validateFormField(inputEl);
				this._toggleButtonState(this._inputList, this._button);
			});
		});
	}
	resetValidation() {
		this._element.reset();
		this._toggleButtonState(this._inputList, this._button);
	}

	enableValidation() {
		this._element.addEventListener("submit", (evt) => {
			evt.preventDefault();
		});
		this._setEventListeners();
	}
}
