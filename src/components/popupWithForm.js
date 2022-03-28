import { Popup } from "./popup.js";

export class PopupWithForm extends Popup {
	constructor(popupSelector, { handlePopupWithForm }) {
		super(popupSelector);
		this._handlePopupWithForm = handlePopupWithForm;
		this._popupWithForm = this._popupSelector.querySelector(".popup__form");
	}
	_getInputValues() {
		const inputList = this._popupWithForm.querySelectorAll(".popup__input");
		this._inputValue = [];
		inputList.forEach((input) => {
			this._inputValue[input.name] = input.value;
		});
		return this._inputValue;
	}
	setEventListeners() {
		super.setEventListeners();
		this._popupWithForm.addEventListener("submit", (e) => {
			e.preventDefault();
			this._handlePopupWithForm(this._getInputValues());
			this.close();
		});
	}
	close() {
		super.close();
		this._popupWithForm.reset();
	}
}
