export class UserInfo {
	constructor({ profileName, profileText, profilePhoto }) {
		this._userNameElement = document.querySelector(profileName);
		this._userJobElement = document.querySelector(profileText);
		this._userPhoto = document.querySelector(profilePhoto);
	}
	getUserInfo() {
		return {
			userName: this._userNameElement.textContent,
			userDescription: this._userJobElement.textContent,
			id: this._userId,
		};
	}
	setUserInfo({ avatar, name, about, id }) {
		this._userNameElement.textContent = name;
		this._userJobElement.textContent = about;
		this._userPhoto.src = avatar;
		this._userId = id;
	}
	setAvatar(data) {
		this._userPhoto.src = data;
	}
}
