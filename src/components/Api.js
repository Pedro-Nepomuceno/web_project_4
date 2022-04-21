export class Api {
	constructor({ baseUrl, headers }) {
		this.baseUrl = baseUrl;
		this.headers = headers;
	}

	getInitialCards() {
		return fetch(`${this.baseUrl}/cards`, { headers: this.headers }).then(
			this._handleServerResponde
		);
	}

	_handleServerResponde(res) {
		return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
	}
	setUserProfile(name, about) {
		fetch("https://around.nomoreparties.co/v1/group-12/users/me", {
			method: "PATCH",
			headers: {
				authorization: "b240a05b-bedc-4219-9e26-b0942ecb0fb0",
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				name: name,
				link: about,
			}),
		});
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

	likePhoto() {
		fetch("https://around.nomoreparties.co/v1/group-12/users/me", {
			method: "PATCH",
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
// method: "POST",
// 			headers: {
// 				authorization: "b240a05b-bedc-4219-9e26-b0942ecb0fb0",
// 				"Content-Type": "application/json",
// 			},
// 			body: JSON.stringify({
// 				name: name,
// 				link: link,
// 			}),
// 		});
