import { closeModalButton } from "../pages/index.js";

export class Popup {
	constructor(popupSelector, buttonSelector) {
		this._popupSelector = document.querySelector(popupSelector);
		this._buttonSelector = this._popupSelector.querySelector(".popup__close");
	}
	open() {
		this._popupSelector.classList.add("popup_open");
		document.addEventListener("keydown", this._handleEscClose);
	}
	close() {
		this._popupSelector.classList.remove("popup_open");
		document.removeEventListener("keydown", this._handleEscClose);
	}
	_handleEscClose() {
		document.addEventListener("keydown", (e) => {
			if (e.key === "Escape") {
				this.close();
			}
		});
	}
	setEventListeners() {
		document.addEventListener("mousedown", (event) => {
			if (event.target.classList.contains("popup_open")) {
				this.close();
			}
		});
		this._handleEscClose();

		this._buttonSelector.addEventListener("click", (e) => {
			e.preventDefault();
			this.close();
		});
	}
}
