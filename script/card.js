import { openModal } from "./utils.js";
const photoArray = [
	{
		title: "Yosemite Valley",
		url: "https://code.s3.yandex.net/web-code/yosemite.jpg",
	},
	{
		title: "Lake Louise",
		url: "https://code.s3.yandex.net/web-code/lake-louise.jpg",
	},
	{
		title: "Lago di Braies",
		url: "https://code.s3.yandex.net/web-code/lago.jpg",
	},
	{
		title: "Latemar",
		url: "https://code.s3.yandex.net/web-code/latemar.jpg",
	},
	{
		title: "Vanoise National Park",
		url: "https://code.s3.yandex.net/web-code/vanoise.jpg",
	},
	{
		title: "Rio de Janeiro",
		url: "https://images.unsplash.com/photo-1544989164-31dc3c645987?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
	},
];

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
		this._element
			.querySelector(".elements__pic")
			.addEventListener("click", () => {
				const imageModal = document.querySelector("#photo");
				const popupImage = document.querySelector(".popup__image");
				const popupTitle = document.querySelector(".popup__caption");
				popupTitle.textContent = this._title;
				popupImage.src = this._image;
				popupImage.alt = this._title;
				openModal(imageModal);
			});
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
photoArray.forEach((data) => {
	const photoGallery = document.querySelector(".elements");
	const card = new Card(data, "#elements-template");
	const cardElement = card.generateCard();
	photoGallery.prepend(cardElement);
});
