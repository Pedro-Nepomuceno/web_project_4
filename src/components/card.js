// import { openModal } from "./utils.js";
// import { PopupWithImage } from "./popUpWithImage.js"

export class Card {
	constructor(data, cardSelector, handleCardClick) {
		this._title = data.title;
		this._image = data.url;
		this._cardSelector = cardSelector;
		this._handleCardClick = handleCardClick;
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
		this._element
			.querySelector(".elements__pic")
			.addEventListener("click", () => {
				this._handleCardClick({
					title: this._title,
					url: this._image,
				});
			});
		return this._element;
	}
}
