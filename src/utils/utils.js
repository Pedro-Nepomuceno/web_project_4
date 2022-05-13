import { formSettings } from "../utils/constants.js";
export function renderLoading(popupSelector, isLoading) {
	const submitButton = document.querySelector(
		`${popupSelector} ${formSettings.submitButtonSelector}`
	);
	if (isLoading === true) {
		submitButton.textContent = "Loading";
	} else {
		submitButton.textContent = "Save";
	}
}
