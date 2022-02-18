export class formValidator {
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
		if (this._hasInvalidInput(inputEl)) {
			this._showInputError(inputEl);
		} else {
			this._hideInputError(inputEl);
		}
	}

	_toggleButtonState(inputList, button) {
		button.disabled = inputList.some(this._hasInvalidInput);
	}

	_setEventListeners(formEl) {
		const inputList = Array.from(formEl.querySelectorAll(this._inputSelector));

		const button = formEl.querySelector(this._submitButtonSelector);
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
			this._setEventListeners(formEl);
		});
	}
}

export function resetForm(formEl, settings) {
	const buttonEl = formEl.querySelector(settings.submitButtonSelector);
	buttonEl.disabled = true;
	formEl.reset();
}
