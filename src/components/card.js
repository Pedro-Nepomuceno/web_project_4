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
		this._likes = data.likes;
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

	_renderLikes() {
		this._likeCount.textContent = this._likes.length;
		if (this.isLiked()) {
			this._buttonLike.classList.add("elements__info-button_active");
		} else {
			this._buttonLike.classList.remove("elements__info-button_active");
		}
	}

	updateLikes(likesData) {
		this._likes = likesData.likes;

		this._renderLikes();
	}

	isLiked() {
		return this._likes.find((data) => data._id === this._currentId);
	}

	generateCard() {
		this._element = this._getTemplate();
		this._buttonLike = this._element.querySelector(".elements__info-button");
		this._likeCount = this._element.querySelector(".elements__counter");
		this._renderLikes();
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
	}

	_setEventListeners() {
		this._element
			.querySelector(".elements__info-button")
			.addEventListener("click", () => {
				this._handleLikeButton();
			});

		this._element
			.querySelector(".elements__delete")
			.addEventListener("click", () => {
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
