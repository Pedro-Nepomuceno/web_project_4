import { Popup } from "./popup.js";

export class PopupWithForm extends Popup {
	constructor(popupSelector, { handleSubmit }) {
		super(popupSelector);
		this._handleSubmit = handleSubmit;
		this._popupWithForm = this._popupSelector.querySelector(".popup__form");
	}
	_getInputValues() {
		const inputList = this._popupWithForm.querySelectorAll(".popup__input");
		const inputValues = {};
		inputList.forEach((input) => {
			inputValues[input.name] = input.value;
		});
		return inputValues;
	}
	setEventListeners() {
		super.setEventListeners();
		this._popupWithForm.addEventListener("submit", (e) => {
			e.preventDefault();
			this._handleSubmit(this._getInputValues());
			this.close();
		});
	}
	close() {
		super.close();
		this._popupWithForm.reset();
		const buttonEl = this._popupWithForm.querySelector(".popup__submit");
		buttonEl.disabled = true;
	}
}
