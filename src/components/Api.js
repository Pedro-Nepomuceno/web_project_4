export class Api {
	constructor({ baseUrl, headers }) {
		this.baseUrl = baseUrl;
		this.headers = headers;
	}
	getUserInfo() {
		return fetch(`${this.baseUrl}/users/me`, {
			headers: this.headers,
		}).then(this._handleServerResponse);
	}

	getAppInfo() {
		return Promise.all([this.getInitialCards(), this.getUserInfo()]);
	}
	getInitialCards() {
		return fetch(`${this.baseUrl}/cards`, { headers: this.headers }).then(
			this._handleServerResponse
		);
	}

	_handleServerResponse(res) {
		return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
	}

	setUserProfile({ name, about }) {
		return fetch(`${this.baseUrl}/users/me`, {
			method: "PATCH",
			headers: this.headers,
			body: JSON.stringify({
				name,
				about,
			}),
		}).then(this._handleServerResponse);
	}

	addNewCard({ name, link }) {
		return fetch(`${this.baseUrl}/cards`, {
			method: "POST",
			headers: this.headers,
			body: JSON.stringify({
				name,
				link,
			}),
		}).then(this._handleServerResponse);
	}

	deleteCard({ id }) {
		return fetch(`${this.baseUrl}/cards/${id}`, {
			method: "DELETE",
			headers: this.headers,
		}).then(this._handleServerResponse);
	}

	likePhoto() {
		fetch("https://around.nomoreparties.co/v1/group-12/users/me", {
			method: "POST",
			headers: {
				authorization: "b240a05b-bedc-4219-9e26-b0942ecb0fb0",
				"Content-Type": "application/json",
			},
		});
	}

	removeLike() {
		fetch("https://around.nomoreparties.co/v1/group-12/users/me", {
			method: "PATCH",
			headers: {
				authorization: "b240a05b-bedc-4219-9e26-b0942ecb0fb0",
				"Content-Type": "application/json",
			},
		});
	}
}
