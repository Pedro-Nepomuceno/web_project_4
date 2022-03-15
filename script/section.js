import { Card } from "./card.js";

export class Section {
	constructor({ items, renderer }, containerSelector) {
		this._items = items;
		this._renderer = renderer;
		this._containerSelector = document.querySelector(containerSelector);
	}

	renderer() {
		this._items.forEach((element) => {
			const newCard = new Card(element, this._containerSelector);
			const newElement = newCard.generateCard();
			this.addItem(newElement);
		});
	}
	addItem(element) {
		this._containerSelector.prepend(element);
	}
}
