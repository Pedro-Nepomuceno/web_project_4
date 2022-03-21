import { Popup } from "./popup.js";

export class PopupWithForm extends Popup {
	constructor(popupSelector, { handlePopupWithForm }) {
		super(popupSelector);
		this._handlePopupWithForm = handlePopupWithForm;
		this._popupWithForm = document.querySelectorAll(".popup__form");
	}
	_getInputValues() {
		const inputList = this._element.querySelectorAll(".popup__input");
		this._inputValue = [];
		inputList.forEach((input) => {
			this._inputValue[input.name] = input.value;
		});
		return this._inputValue;
	}
	setEventListeners() {
		super.setEventListeners();
		this._popupWithForm.forEach((form) => {
			form.addEventListener("sumbit", (e) => {
				e.preventDefault();
				this._handlePopupWithForm(this._getInputValues());
			});
		});
	}
	close() {
		super.close();
		this._popupWithForm.forEach((popup) => {
			popup.reset();
		});
	}
}
