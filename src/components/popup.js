import { closeModalButton } from "../pages/index.js";
export class Popup {
	constructor(popupSelector) {
		this._popupSelector = document.querySelector(popupSelector);
	}
	open() {
		this._popupSelector.classList.add("popup_open");
	}
	close() {
		this._popupSelector.classList.remove("popup_open");
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
		closeModalButton.forEach((modalClose) => {
			modalClose.addEventListener("click", (e) => {
				e.preventDefault();
				this.close();
			});
		});
	}
}
// ../src/pages/script.js
