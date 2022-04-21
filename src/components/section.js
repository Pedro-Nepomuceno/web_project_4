export class Section {
	constructor(containerSelector) {
		this._containerElement = document.querySelector(containerSelector);
	}

	addItem(element) {
		this._containerElement.prepend(element);
	}
}
