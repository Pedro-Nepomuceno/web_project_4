import { Popup } from "./popup.js";

export class PopupWithImage extends Popup {
	constructor(popupSelector) {
		super(popupSelector);
		this._image = this._popupSelector.querySelector(".popup__image");
		this._caption = this._popupSelector.querySelector(".popup__caption");
	}
	open(data) {
		this._image.src = data.url;
		this._caption.textContent = data.title;
		super.open();
	}
}
