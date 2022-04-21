export class Card {
	constructor(data, cardSelector, handleCardClick) {
		this.data = data;
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
		const imageElement = this._element.querySelector(".elements__pic");
		imageElement.src = this.data.link;
		imageElement.alt = this.data.name;
		this._element.querySelector(".elements__info-text").textContent =
			this.data.name;

		this._setEventListeners();

		return this._element;
	}
	_setEventListeners() {
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
					title: this.data.name,
					url: this.data.link,
				});
			});
	}
}
