export class UserInfo {
	constructor({ profileName, profileText }) {
		this._userNameElement = document.querySelector(profileName);
		this._userJobElement = document.querySelector(profileText);
	}
	getUserInfo() {
		return {
			userName: this._userNameElement.textContent,
			userDescription: this._userJobElement.textContent,
			id: this._userId,
		};
	}
	setUserInfo({ name, about }) {
		this._userNameElement.textContent = name;
		this._userJobElement.textContent = about;
	}
}
