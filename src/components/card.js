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
		handleLikeButton,
	}) {
		this.data = data;
		this.likes = data.likes;
		this._cardSelector = cardSelector;
		this._handleCardClick = handleCardClick;
		this._handleTrashButton = handleTrashButton;
		this._currentId = currentId;
		this._handleLikeButton = handleLikeButton;
	}

	_getTemplate() {
		const cardElement = document
			.querySelector("#elements-template")
			.content.querySelector(".elements__photo")
			.cloneNode(true);

		return cardElement;
	}
	setLikeCounter(update) {
		if (update) {
			this.likes = update.likes;
		}
		this._likeCount.textContent = this.likes.length;

		if (this.likes.find((data) => data._id === this._currentId)) {
			this._buttonLike.classList.add("elements__info-button_active");
		} else {
			this._buttonLike.classList.remove("elements__info-button_active");
		}
	}

	isLike() {
		const buttonStatus = this._buttonLike.classList.contains(
			"elements__info-button_active"
		);

		if (buttonStatus === true) {
			return false;
		} else if (buttonStatus === false) {
			return true;
		}
	}

	generateCard() {
		this._element = this._getTemplate();
		this._buttonLike = this._element.querySelector(".elements__info-button");
		this._likeCount = this._element.querySelector(".elements__counter");
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

	toggleIsLiked() {
		if (this._buttonLike.classList.contains("elements__info-button_active")) {
			this._buttonLike.classList.remove("elements__info-button_active");
		} else {
			this._buttonLike.classList.add("elements__info-button_active");
		}
	}
	_setEventListeners() {
		this._element
			.querySelector(".elements__info-button")
			.addEventListener("click", () => {
				this._handleLikeButton(this.isLike());
				this.toggleIsLiked();
				this.setLikeCounter();
			});

		this._element
			.querySelector(".elements__delete")
			.addEventListener("click", () => {
				newPopupDelete.open();
				this._handleTrashButton();
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
