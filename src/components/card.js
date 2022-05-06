import { Api } from "./Api";
import { newPopupDelete } from "../pages/index.js";
import { confirmDelete } from "../utils/constants.js";
export class Card {
	constructor({
		data,
		cardSelector,
		handleCardClick,
		currentId,
		handleTrashButton,
	}) {
		this.data = data;
		this._cardSelector = cardSelector;
		this._handleCardClick = handleCardClick;
		this._handleTrashButton = handleTrashButton;
		this._currentId = currentId;
	}

	_getTemplate() {
		const cardElement = document
			.querySelector("#elements-template")
			.content.querySelector(".elements__photo")
			.cloneNode(true);

		return cardElement;
	}

	_likeCount() {
		const likeCount = this._element.querySelector(".elements__counter");
		const countLike = this._element.querySelector(".elements__info-button");
		if (countLike.classList.contains(".elements__info-button_active")) {
			likeCount.textContent = 1;
		}
	}
	generateCard() {
		this._element = this._getTemplate();
		const imageElement = this._element.querySelector(".elements__pic");
		imageElement.src = this.data.link;
		imageElement.alt = this.data.name;
		this._element.querySelector(".elements__info-text").textContent =
			this.data.name;
		const ownerId = this.data.owner._id;
		if (ownerId !== this._currentId) {
			this._element
				.querySelector(".elements__delete")
				.classList.add("elements__delete_hidden");
		}

		this._setEventListeners();
		return this._element;
	}
	removeCard() {
		this._element.remove();
		newPopupDelete.close();
	}
	_setEventListeners() {
		this._element
			.querySelector(".elements__info-button")
			.addEventListener("click", (evt) => {
				const likeCount = this._element.querySelector(".elements__counter");
				evt.target.classList.toggle("elements__info-button_active");
			});
		this._element
			.querySelector(".elements__delete")
			.addEventListener("click", () => {
				newPopupDelete.open();
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
