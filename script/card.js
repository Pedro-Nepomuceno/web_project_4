import { openModal } from "./utils.js";

export class Card {
	constructor(data, cardSelector) {
		this._title = data.title;
		this._image = data.url;
		this._cardSelector = cardSelector;
	}

	_getTemplate() {
		const cardElement = document
			.querySelector("#elements-template")
			.content.querySelector(".elements__photo")
			.cloneNode(true);

		return cardElement;
	}
	generateCard() {
		this._element = this._getTemplate();
		this._element.querySelector(".elements__pic").src = this._image;
		this._element.querySelector(".elements__pic").alt = this._title;
		this._element.querySelector(".elements__info-text").textContent =
			this._title;
		// this._element
		// 	.querySelector(".elements__pic")
		// 	.addEventListener("click", () => {
		// 		const imageModal = document.querySelector("#photo");
		// 		const popupImage = document.querySelector(".popup__image");
		// 		const popupTitle = document.querySelector(".popup__caption");
		// 		popupTitle.textContent = this._title;
		// 		popupImage.src = this._image;
		// 		popupImage.alt = this._title;
		// 		openModal(imageModal);
		// 	});
		this._element
			.querySelector(".elements__info-button")
			.addEventListener("click", (evt) => {
				evt.target.classList.toggle("elements__info-button_active");
			});
		this._element
			.querySelector(".elements__delete")
			.addEventListener("click", () => {
				this._element.remove();
			});
		return this._element;
	}
}
