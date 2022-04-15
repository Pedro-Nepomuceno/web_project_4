!function(){"use strict";class e{constructor(e,t,s){this._title=e.title,this._image=e.url,this._cardSelector=t,this._handleCardClick=s}_getTemplate(){return document.querySelector("#elements-template").content.querySelector(".elements__photo").cloneNode(!0)}generateCard(){this._element=this._getTemplate();const e=this._element.querySelector(".elements__pic");return e.src=this._image,e.alt=this._title,this._element.querySelector(".elements__info-text").textContent=this._title,this._setEventListeners(),this._element}_setEventListeners(){this._element.querySelector(".elements__info-button").addEventListener("click",(e=>{e.target.classList.toggle("elements__info-button_active")})),this._element.querySelector(".elements__delete").addEventListener("click",(()=>{this._element.remove()})),this._element.querySelector(".elements__pic").addEventListener("click",(()=>{this._handleCardClick({title:this._title,url:this._image})}))}}class t{constructor(e,t){this._inputSelector=e.inputSelector,this._submitButtonSelector=e.submitButtonSelector,this._inactiveButtonClass=e.inactiveButtonClass,this._inputErrorClass=e.inputErrorClass,this._errorClass=e.errorClass,this._formSelector=e.formSelector,this._element=document.querySelector(t),this._inputList=[...this._element.querySelectorAll(this._inputSelector)],this._button=this._element.querySelector(this._submitButtonSelector)}_hasInvalidInput(e){return!e.validity.valid}_showInputError(e){const t=document.querySelector("#".concat(e.id,"-error"));t.classList.add(this._errorClass),e.classList.add(this._inputErrorClass),t.textContent=e.validationMessage}_hideInputError(e){const t=document.querySelector("#".concat(e.id,"-error"));t.classList.remove(this._errorClass),e.classList.remove(this._inputErrorClass),t.textContent=""}_validateFormField(e){this._hasInvalidInput(e)?this._showInputError(e):this._hideInputError(e)}_toggleButtonState(e,t){t.disabled=e.some(this._hasInvalidInput)}_setEventListeners(){this._inputList.forEach((e=>{e.addEventListener("input",(()=>{this._validateFormField(e),this._toggleButtonState(this._inputList,this._button)}))}))}resetValidation(){this._element.reset(),this._toggleButtonState(this._inputList,this._button)}enableValidation(){this._element.addEventListener("submit",(e=>{e.preventDefault()})),this._setEventListeners()}}class s{constructor(e,t){var s,n;n=e=>{"Escape"===e.key&&this.close()},(s="_handleEscClose")in this?Object.defineProperty(this,s,{value:n,enumerable:!0,configurable:!0,writable:!0}):this[s]=n,this._popupSelector=document.querySelector(e),this._buttonSelector=this._popupSelector.querySelector(".popup__close")}open(){this._popupSelector.classList.add("popup_open"),document.addEventListener("keydown",this._handleEscClose)}close(){this._popupSelector.classList.remove("popup_open"),document.removeEventListener("keydown",this._handleEscClose)}setEventListeners(){document.addEventListener("mousedown",(e=>{e.target.classList.contains("popup_open")&&this.close()})),this._buttonSelector.addEventListener("click",(e=>{e.preventDefault(),this.close()}))}}class n extends s{constructor(e,t){let{handleSubmit:s}=t;super(e),this._handleSubmit=s,this._popupWithForm=this._popupSelector.querySelector(".popup__form")}_getInputValues(){const e=this._popupWithForm.querySelectorAll(".popup__input"),t={};return e.forEach((e=>{t[e.name]=e.value})),t}setEventListeners(){super.setEventListeners(),this._popupWithForm.addEventListener("submit",(e=>{e.preventDefault(),this._handleSubmit(this._getInputValues()),this.close()}))}}const o={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__submit",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input-error",errorClass:"popup__error_active"},r="#add-popup",i=".popup_type-edit_profile",l=document.querySelector(".popup__input_type_name"),u=document.querySelector(".popup__input_type_description"),a=document.querySelector("#title"),c=document.querySelector("#url"),p=(document.querySelectorAll(".popup__close"),document.querySelector(".profile__edit")),_=document.querySelector(".profile__plus"),d=new s(r);d.setEventListeners(),_.addEventListener("click",(()=>{y.resetValidation(),d.open()}));const h=new s(i);function m(t,s){const n=new e(t,"#elements-template",b).generateCard();s.addItem(n)}h.setEventListeners(),new n(r,{handleSubmit:()=>{m({url:c.value,title:a.value},E)}}).setEventListeners(),new n(i,{handleSubmit:e=>{S.setUserInfo(e)}}).setEventListeners();const S=new class{constructor(e){let{profileName:t,profileText:s}=e;this._userNameElement=document.querySelector(t),this._userJobElement=document.querySelector(s)}getUserInfo(){return{userName:this._userNameElement.textContent,userDescription:this._userJobElement.textContent}}setUserInfo(e){let{name:t,description:s}=e;this._userNameElement.textContent=t,this._userJobElement.textContent=s}}({profileName:".profile__name",profileText:".profile__text"});p.addEventListener("click",(()=>{const e=S.getUserInfo();l.value=e.userName,u.value=e.userDescription,h.open()}));const v=new class extends s{constructor(e){super(e),this._image=this._popupSelector.querySelector(".popup__image"),this._caption=this._popupSelector.querySelector(".popup__caption")}open(e){this._image.src=e.url,this._image.alt=e.title,this._caption.textContent=e.title,super.open()}}("#photo"),E=new class{constructor(e,t){let{items:s,renderer:n}=e;this._items=s,this._renderer=n,this._containerElement=document.querySelector(t)}renderer(){this._items.forEach((e=>{this._renderer(e)}))}addItem(e){this._containerElement.prepend(e)}}({items:[{title:"Yosemite Valley",url:"https://code.s3.yandex.net/web-code/yosemite.jpg"},{title:"Lake Louise",url:"https://code.s3.yandex.net/web-code/lake-louise.jpg"},{title:"Lago di Braies",url:"https://code.s3.yandex.net/web-code/lago.jpg"},{title:"Latemar",url:"https://code.s3.yandex.net/web-code/latemar.jpg"},{title:"Vanoise National Park",url:"https://code.s3.yandex.net/web-code/vanoise.jpg"},{title:"Rio de Janeiro",url:"https://images.unsplash.com/photo-1544989164-31dc3c645987?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"}],renderer:e=>{m(e,E)}},".elements");function b(e){v.open(e)}E.renderer(),v.setEventListeners();const y=new t(o,"#add-form");new t(o,"#profile-form").enableValidation(),y.enableValidation(),fetch("https://around.nomoreparties.co/v1/group-12/users/me",{headers:{authorization:"b240a05b-bedc-4219-9e26-b0942ecb0fb0","Content-Type":"application/json"}}).then((e=>e.json())).then((e=>{console.log(e)}))}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FDQ0YsTUFBTyxVQUNQRSxJQUFLLG1EQUVOLENBQ0NGLE1BQU8sd0JBQ1BFLElBQUssbURBRU4sQ0FDQ0YsTUFBTyxpQkFDUEUsSUFBSywrSkMyQ0xvSCxTQUFXcEIsSUFDVkQsRUFBV0MsRUFBTUksS0RyRVEsYUM2RTVCLFNBQVN6RyxFQUFnQkYsR0FDeEJ1SCxFQUFXN0MsS0FBSzFFLEdBSmpCMkcsRUFBY2dCLFdBQ2RKLEVBQVcxQyxvQkFNWCxNQUdNdUIsRUFBbUIsSUFBSXhFLEVBQWM4RCxFQUhuQixhQUlLLElBQUk5RCxFQUNoQzhELEVBSjhCLGlCQVFWMUIsbUJBRXJCb0MsRUFBaUJwQyxtQkFFakJpRSxNQUFNLHVEQUF3RCxDQUM3REMsUUFBUyxDQUNSQyxjQUFlLHVDQUNmLGVBQWdCLHNCQUdoQkMsTUFBTUMsR0FBUUEsRUFBSUMsU0FDbEJGLE1BQU1wSSxJQUNOdUksUUFBUUMsSUFBSXhJLE0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJfcHJvamVjdF80Ly4vc3JjL2NvbXBvbmVudHMvY2FyZC5qcyIsIndlYnBhY2s6Ly93ZWJfcHJvamVjdF80Ly4vc3JjL2NvbXBvbmVudHMvZm9ybVZhbGlkYXRvci5qcyIsIndlYnBhY2s6Ly93ZWJfcHJvamVjdF80Ly4vc3JjL2NvbXBvbmVudHMvcG9wdXAuanMiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfNC8uL3NyYy9jb21wb25lbnRzL3BvcHVwV2l0aEZvcm0uanMiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfNC8uL3NyYy91dGlscy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfNC8uL3NyYy9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJfcHJvamVjdF80Ly4vc3JjL2NvbXBvbmVudHMvdXNlckluZm8uanMiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfNC8uL3NyYy9jb21wb25lbnRzL3BvcFVwV2l0aEltYWdlLmpzIiwid2VicGFjazovL3dlYl9wcm9qZWN0XzQvLi9zcmMvY29tcG9uZW50cy9zZWN0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBDYXJkIHtcclxuXHRjb25zdHJ1Y3RvcihkYXRhLCBjYXJkU2VsZWN0b3IsIGhhbmRsZUNhcmRDbGljaykge1xyXG5cdFx0dGhpcy5fdGl0bGUgPSBkYXRhLnRpdGxlO1xyXG5cdFx0dGhpcy5faW1hZ2UgPSBkYXRhLnVybDtcclxuXHRcdHRoaXMuX2NhcmRTZWxlY3RvciA9IGNhcmRTZWxlY3RvcjtcclxuXHRcdHRoaXMuX2hhbmRsZUNhcmRDbGljayA9IGhhbmRsZUNhcmRDbGljaztcclxuXHR9XHJcblxyXG5cdF9nZXRUZW1wbGF0ZSgpIHtcclxuXHRcdGNvbnN0IGNhcmRFbGVtZW50ID0gZG9jdW1lbnRcclxuXHRcdFx0LnF1ZXJ5U2VsZWN0b3IoXCIjZWxlbWVudHMtdGVtcGxhdGVcIilcclxuXHRcdFx0LmNvbnRlbnQucXVlcnlTZWxlY3RvcihcIi5lbGVtZW50c19fcGhvdG9cIilcclxuXHRcdFx0LmNsb25lTm9kZSh0cnVlKTtcclxuXHJcblx0XHRyZXR1cm4gY2FyZEVsZW1lbnQ7XHJcblx0fVxyXG5cclxuXHRnZW5lcmF0ZUNhcmQoKSB7XHJcblx0XHR0aGlzLl9lbGVtZW50ID0gdGhpcy5fZ2V0VGVtcGxhdGUoKTtcclxuXHRcdGNvbnN0IGltYWdlRWxlbWVudCA9IHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5lbGVtZW50c19fcGljXCIpO1xyXG5cdFx0aW1hZ2VFbGVtZW50LnNyYyA9IHRoaXMuX2ltYWdlO1xyXG5cdFx0aW1hZ2VFbGVtZW50LmFsdCA9IHRoaXMuX3RpdGxlO1xyXG5cdFx0dGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmVsZW1lbnRzX19pbmZvLXRleHRcIikudGV4dENvbnRlbnQgPVxyXG5cdFx0XHR0aGlzLl90aXRsZTtcclxuXHJcblx0XHR0aGlzLl9zZXRFdmVudExpc3RlbmVycygpO1xyXG5cclxuXHRcdHJldHVybiB0aGlzLl9lbGVtZW50O1xyXG5cdH1cclxuXHRfc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XHJcblx0XHR0aGlzLl9lbGVtZW50XHJcblx0XHRcdC5xdWVyeVNlbGVjdG9yKFwiLmVsZW1lbnRzX19pbmZvLWJ1dHRvblwiKVxyXG5cdFx0XHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldnQpID0+IHtcclxuXHRcdFx0XHRldnQudGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoXCJlbGVtZW50c19faW5mby1idXR0b25fYWN0aXZlXCIpO1xyXG5cdFx0XHR9KTtcclxuXHRcdHRoaXMuX2VsZW1lbnRcclxuXHRcdFx0LnF1ZXJ5U2VsZWN0b3IoXCIuZWxlbWVudHNfX2RlbGV0ZVwiKVxyXG5cdFx0XHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuXHRcdFx0XHR0aGlzLl9lbGVtZW50LnJlbW92ZSgpO1xyXG5cdFx0XHR9KTtcclxuXHRcdHRoaXMuX2VsZW1lbnRcclxuXHRcdFx0LnF1ZXJ5U2VsZWN0b3IoXCIuZWxlbWVudHNfX3BpY1wiKVxyXG5cdFx0XHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuXHRcdFx0XHR0aGlzLl9oYW5kbGVDYXJkQ2xpY2soe1xyXG5cdFx0XHRcdFx0dGl0bGU6IHRoaXMuX3RpdGxlLFxyXG5cdFx0XHRcdFx0dXJsOiB0aGlzLl9pbWFnZSxcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSk7XHJcblx0fVxyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBGb3JtVmFsaWRhdG9yIHtcclxuXHRjb25zdHJ1Y3RvcihzZXR0aW5ncywgZm9ybVNlbGVjdG9yKSB7XHJcblx0XHR0aGlzLl9pbnB1dFNlbGVjdG9yID0gc2V0dGluZ3MuaW5wdXRTZWxlY3RvcjtcclxuXHRcdHRoaXMuX3N1Ym1pdEJ1dHRvblNlbGVjdG9yID0gc2V0dGluZ3Muc3VibWl0QnV0dG9uU2VsZWN0b3I7XHJcblx0XHR0aGlzLl9pbmFjdGl2ZUJ1dHRvbkNsYXNzID0gc2V0dGluZ3MuaW5hY3RpdmVCdXR0b25DbGFzcztcclxuXHRcdHRoaXMuX2lucHV0RXJyb3JDbGFzcyA9IHNldHRpbmdzLmlucHV0RXJyb3JDbGFzcztcclxuXHRcdHRoaXMuX2Vycm9yQ2xhc3MgPSBzZXR0aW5ncy5lcnJvckNsYXNzO1xyXG5cdFx0dGhpcy5fZm9ybVNlbGVjdG9yID0gc2V0dGluZ3MuZm9ybVNlbGVjdG9yO1xyXG5cdFx0dGhpcy5fZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZm9ybVNlbGVjdG9yKTtcclxuXHRcdHRoaXMuX2lucHV0TGlzdCA9IFsuLi50aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5faW5wdXRTZWxlY3RvcildO1xyXG5cdFx0dGhpcy5fYnV0dG9uID0gdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuX3N1Ym1pdEJ1dHRvblNlbGVjdG9yKTtcclxuXHR9XHJcblxyXG5cdF9oYXNJbnZhbGlkSW5wdXQoaW5wdXRFbCkge1xyXG5cdFx0cmV0dXJuICFpbnB1dEVsLnZhbGlkaXR5LnZhbGlkO1xyXG5cdH1cclxuXHJcblx0X3Nob3dJbnB1dEVycm9yKGlucHV0RWwpIHtcclxuXHRcdGNvbnN0IGVycm9yRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2lucHV0RWwuaWR9LWVycm9yYCk7XHJcblx0XHRlcnJvckVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLl9lcnJvckNsYXNzKTtcclxuXHRcdGlucHV0RWwuY2xhc3NMaXN0LmFkZCh0aGlzLl9pbnB1dEVycm9yQ2xhc3MpO1xyXG5cdFx0ZXJyb3JFbGVtZW50LnRleHRDb250ZW50ID0gaW5wdXRFbC52YWxpZGF0aW9uTWVzc2FnZTtcclxuXHR9XHJcblxyXG5cdF9oaWRlSW5wdXRFcnJvcihpbnB1dEVsKSB7XHJcblx0XHRjb25zdCBlcnJvckVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtpbnB1dEVsLmlkfS1lcnJvcmApO1xyXG5cdFx0ZXJyb3JFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5fZXJyb3JDbGFzcyk7XHJcblx0XHRpbnB1dEVsLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5faW5wdXRFcnJvckNsYXNzKTtcclxuXHRcdGVycm9yRWxlbWVudC50ZXh0Q29udGVudCA9IFwiXCI7XHJcblx0fVxyXG5cclxuXHRfdmFsaWRhdGVGb3JtRmllbGQoaW5wdXRFbCkge1xyXG5cdFx0aWYgKHRoaXMuX2hhc0ludmFsaWRJbnB1dChpbnB1dEVsKSkge1xyXG5cdFx0XHR0aGlzLl9zaG93SW5wdXRFcnJvcihpbnB1dEVsKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuX2hpZGVJbnB1dEVycm9yKGlucHV0RWwpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0X3RvZ2dsZUJ1dHRvblN0YXRlKGlucHV0TGlzdCwgYnV0dG9uKSB7XHJcblx0XHRidXR0b24uZGlzYWJsZWQgPSBpbnB1dExpc3Quc29tZSh0aGlzLl9oYXNJbnZhbGlkSW5wdXQpO1xyXG5cdH1cclxuXHJcblx0X3NldEV2ZW50TGlzdGVuZXJzKCkge1xyXG5cdFx0dGhpcy5faW5wdXRMaXN0LmZvckVhY2goKGlucHV0RWwpID0+IHtcclxuXHRcdFx0aW5wdXRFbC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT4ge1xyXG5cdFx0XHRcdHRoaXMuX3ZhbGlkYXRlRm9ybUZpZWxkKGlucHV0RWwpO1xyXG5cdFx0XHRcdHRoaXMuX3RvZ2dsZUJ1dHRvblN0YXRlKHRoaXMuX2lucHV0TGlzdCwgdGhpcy5fYnV0dG9uKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblx0cmVzZXRWYWxpZGF0aW9uKCkge1xyXG5cdFx0dGhpcy5fZWxlbWVudC5yZXNldCgpO1xyXG5cdFx0dGhpcy5fdG9nZ2xlQnV0dG9uU3RhdGUodGhpcy5faW5wdXRMaXN0LCB0aGlzLl9idXR0b24pO1xyXG5cdH1cclxuXHJcblx0ZW5hYmxlVmFsaWRhdGlvbigpIHtcclxuXHRcdHRoaXMuX2VsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZXZ0KSA9PiB7XHJcblx0XHRcdGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0fSk7XHJcblx0XHR0aGlzLl9zZXRFdmVudExpc3RlbmVycygpO1xyXG5cdH1cclxufVxyXG4iLCJleHBvcnQgY2xhc3MgUG9wdXAge1xyXG5cdGNvbnN0cnVjdG9yKHBvcHVwU2VsZWN0b3IsIGJ1dHRvblNlbGVjdG9yKSB7XHJcblx0XHR0aGlzLl9wb3B1cFNlbGVjdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihwb3B1cFNlbGVjdG9yKTtcclxuXHRcdHRoaXMuX2J1dHRvblNlbGVjdG9yID0gdGhpcy5fcG9wdXBTZWxlY3Rvci5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX19jbG9zZVwiKTtcclxuXHR9XHJcblx0b3BlbigpIHtcclxuXHRcdHRoaXMuX3BvcHVwU2VsZWN0b3IuY2xhc3NMaXN0LmFkZChcInBvcHVwX29wZW5cIik7XHJcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLl9oYW5kbGVFc2NDbG9zZSk7XHJcblx0fVxyXG5cdGNsb3NlKCkge1xyXG5cdFx0dGhpcy5fcG9wdXBTZWxlY3Rvci5jbGFzc0xpc3QucmVtb3ZlKFwicG9wdXBfb3BlblwiKTtcclxuXHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMuX2hhbmRsZUVzY0Nsb3NlKTtcclxuXHR9XHJcblx0X2hhbmRsZUVzY0Nsb3NlID0gKGUpID0+IHtcclxuXHRcdGlmIChlLmtleSA9PT0gXCJFc2NhcGVcIikge1xyXG5cdFx0XHR0aGlzLmNsb3NlKCk7XHJcblx0XHR9XHJcblx0fTtcclxuXHRzZXRFdmVudExpc3RlbmVycygpIHtcclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgKGV2ZW50KSA9PiB7XHJcblx0XHRcdGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwicG9wdXBfb3BlblwiKSkge1xyXG5cdFx0XHRcdHRoaXMuY2xvc2UoKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0dGhpcy5fYnV0dG9uU2VsZWN0b3IuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0dGhpcy5jbG9zZSgpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IFBvcHVwIH0gZnJvbSBcIi4vcG9wdXAuanNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQb3B1cFdpdGhGb3JtIGV4dGVuZHMgUG9wdXAge1xyXG5cdGNvbnN0cnVjdG9yKHBvcHVwU2VsZWN0b3IsIHsgaGFuZGxlU3VibWl0IH0pIHtcclxuXHRcdHN1cGVyKHBvcHVwU2VsZWN0b3IpO1xyXG5cdFx0dGhpcy5faGFuZGxlU3VibWl0ID0gaGFuZGxlU3VibWl0O1xyXG5cdFx0dGhpcy5fcG9wdXBXaXRoRm9ybSA9IHRoaXMuX3BvcHVwU2VsZWN0b3IucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9fZm9ybVwiKTtcclxuXHR9XHJcblx0X2dldElucHV0VmFsdWVzKCkge1xyXG5cdFx0Y29uc3QgaW5wdXRMaXN0ID0gdGhpcy5fcG9wdXBXaXRoRm9ybS5xdWVyeVNlbGVjdG9yQWxsKFwiLnBvcHVwX19pbnB1dFwiKTtcclxuXHRcdGNvbnN0IGlucHV0VmFsdWVzID0ge307XHJcblx0XHRpbnB1dExpc3QuZm9yRWFjaCgoaW5wdXQpID0+IHtcclxuXHRcdFx0aW5wdXRWYWx1ZXNbaW5wdXQubmFtZV0gPSBpbnB1dC52YWx1ZTtcclxuXHRcdH0pO1xyXG5cdFx0cmV0dXJuIGlucHV0VmFsdWVzO1xyXG5cdH1cclxuXHRzZXRFdmVudExpc3RlbmVycygpIHtcclxuXHRcdHN1cGVyLnNldEV2ZW50TGlzdGVuZXJzKCk7XHJcblx0XHR0aGlzLl9wb3B1cFdpdGhGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcclxuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHR0aGlzLl9oYW5kbGVTdWJtaXQodGhpcy5fZ2V0SW5wdXRWYWx1ZXMoKSk7XHJcblx0XHRcdHRoaXMuY2xvc2UoKTtcclxuXHRcdH0pO1xyXG5cdH1cclxufVxyXG4iLCJleHBvcnQgY29uc3QgZm9ybVNldHRpbmdzID0ge1xyXG5cdGZvcm1TZWxlY3RvcjogXCIucG9wdXBfX2Zvcm1cIixcclxuXHRpbnB1dFNlbGVjdG9yOiBcIi5wb3B1cF9faW5wdXRcIixcclxuXHRzdWJtaXRCdXR0b25TZWxlY3RvcjogXCIucG9wdXBfX3N1Ym1pdFwiLFxyXG5cdGluYWN0aXZlQnV0dG9uQ2xhc3M6IFwicG9wdXBfX2J1dHRvbl9kaXNhYmxlZFwiLFxyXG5cdGlucHV0RXJyb3JDbGFzczogXCJwb3B1cF9faW5wdXQtZXJyb3JcIixcclxuXHRlcnJvckNsYXNzOiBcInBvcHVwX19lcnJvcl9hY3RpdmVcIixcclxufTtcclxuZXhwb3J0IGNvbnN0IHByb2ZpbGVOYW1lID0gXCIucHJvZmlsZV9fbmFtZVwiO1xyXG5leHBvcnQgY29uc3QgcHJvZmlsZVRleHQgPSBcIi5wcm9maWxlX190ZXh0XCI7XHJcbmV4cG9ydCBjb25zdCBhZGRDYXJkTW9kYWwgPSBcIiNhZGQtcG9wdXBcIjtcclxuZXhwb3J0IGNvbnN0IHBob3RvR2FsbGVyeSA9IFwiLmVsZW1lbnRzXCI7XHJcbmV4cG9ydCBjb25zdCBpbWFnZU1vZGFsID0gXCIjcGhvdG9cIjtcclxuZXhwb3J0IGNvbnN0IHBob3RvQXJyYXkgPSBbXHJcblx0e1xyXG5cdFx0dGl0bGU6IFwiWW9zZW1pdGUgVmFsbGV5XCIsXHJcblx0XHR1cmw6IFwiaHR0cHM6Ly9jb2RlLnMzLnlhbmRleC5uZXQvd2ViLWNvZGUveW9zZW1pdGUuanBnXCIsXHJcblx0fSxcclxuXHR7XHJcblx0XHR0aXRsZTogXCJMYWtlIExvdWlzZVwiLFxyXG5cdFx0dXJsOiBcImh0dHBzOi8vY29kZS5zMy55YW5kZXgubmV0L3dlYi1jb2RlL2xha2UtbG91aXNlLmpwZ1wiLFxyXG5cdH0sXHJcblx0e1xyXG5cdFx0dGl0bGU6IFwiTGFnbyBkaSBCcmFpZXNcIixcclxuXHRcdHVybDogXCJodHRwczovL2NvZGUuczMueWFuZGV4Lm5ldC93ZWItY29kZS9sYWdvLmpwZ1wiLFxyXG5cdH0sXHJcblx0e1xyXG5cdFx0dGl0bGU6IFwiTGF0ZW1hclwiLFxyXG5cdFx0dXJsOiBcImh0dHBzOi8vY29kZS5zMy55YW5kZXgubmV0L3dlYi1jb2RlL2xhdGVtYXIuanBnXCIsXHJcblx0fSxcclxuXHR7XHJcblx0XHR0aXRsZTogXCJWYW5vaXNlIE5hdGlvbmFsIFBhcmtcIixcclxuXHRcdHVybDogXCJodHRwczovL2NvZGUuczMueWFuZGV4Lm5ldC93ZWItY29kZS92YW5vaXNlLmpwZ1wiLFxyXG5cdH0sXHJcblx0e1xyXG5cdFx0dGl0bGU6IFwiUmlvIGRlIEphbmVpcm9cIixcclxuXHRcdHVybDogXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTU0NDk4OTE2NC0zMWRjM2M2NDU5ODc/aXhsaWI9cmItMS4yLjEmaXhpZD1Nbnd4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTczNSZxPTgwXCIsXHJcblx0fSxcclxuXTtcclxuIiwiaW1wb3J0IFwiLi4vcGFnZXMvaW5kZXguY3NzXCI7XHJcbmltcG9ydCB7IENhcmQgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9jYXJkLmpzXCI7XHJcbmltcG9ydCB7IEZvcm1WYWxpZGF0b3IgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9mb3JtVmFsaWRhdG9yLmpzXCI7XHJcbmltcG9ydCB7IFNlY3Rpb24gfSBmcm9tIFwiLi4vY29tcG9uZW50cy9zZWN0aW9uLmpzXCI7XHJcbmltcG9ydCB7IFBvcHVwIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvcG9wdXAuanNcIjtcclxuaW1wb3J0IHsgUG9wdXBXaXRoSW1hZ2UgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9wb3BVcFdpdGhJbWFnZS5qc1wiO1xyXG5pbXBvcnQgeyBQb3B1cFdpdGhGb3JtIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvcG9wdXBXaXRoRm9ybS5qc1wiO1xyXG5pbXBvcnQgeyBVc2VySW5mbyB9IGZyb20gXCIuLi9jb21wb25lbnRzL3VzZXJJbmZvLmpzXCI7XHJcbmltcG9ydCB7XHJcblx0Zm9ybVNldHRpbmdzLFxyXG5cdHBob3RvQXJyYXksXHJcblx0cHJvZmlsZU5hbWUsXHJcblx0cHJvZmlsZVRleHQsXHJcblx0YWRkQ2FyZE1vZGFsLFxyXG5cdHBob3RvR2FsbGVyeSxcclxuXHRpbWFnZU1vZGFsLFxyXG59IGZyb20gXCIuLi91dGlscy9jb25zdGFudHMuanNcIjtcclxuXHJcbmNvbnN0IGVkaXRQcm9maWxlID0gXCIucG9wdXBfdHlwZS1lZGl0X3Byb2ZpbGVcIjtcclxuZXhwb3J0IGNvbnN0IGlucHV0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfX2lucHV0X3R5cGVfbmFtZVwiKTtcclxuZXhwb3J0IGNvbnN0IGlucHV0RGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG5cdFwiLnBvcHVwX19pbnB1dF90eXBlX2Rlc2NyaXB0aW9uXCJcclxuKTtcclxuXHJcbmNvbnN0IGFkZElucHV0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGl0bGVcIik7XHJcbmNvbnN0IGFkZElucHV0RGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3VybFwiKTtcclxuXHJcbmV4cG9ydCBjb25zdCBjbG9zZU1vZGFsQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wb3B1cF9fY2xvc2VcIik7XHJcbmNvbnN0IGVkaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX2VkaXRcIik7XHJcbmNvbnN0IGJ1dHRvbkFkZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsZV9fcGx1c1wiKTtcclxuXHJcbmNvbnN0IG5ld1BvcHVwUGhvdG8gPSBuZXcgUG9wdXAoYWRkQ2FyZE1vZGFsKTtcclxubmV3UG9wdXBQaG90by5zZXRFdmVudExpc3RlbmVycygpO1xyXG5cclxuYnV0dG9uQWRkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcblx0YWRkRm9ybVZhbGlkYXRvci5yZXNldFZhbGlkYXRpb24oKTtcclxuXHRuZXdQb3B1cFBob3RvLm9wZW4oKTtcclxufSk7XHJcblxyXG5jb25zdCBwb3B1cFByb2ZpbGUgPSBuZXcgUG9wdXAoZWRpdFByb2ZpbGUpO1xyXG5wb3B1cFByb2ZpbGUuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcclxuXHJcbmNvbnN0IGFkZENhcmRGb3JtID0gbmV3IFBvcHVwV2l0aEZvcm0oYWRkQ2FyZE1vZGFsLCB7XHJcblx0aGFuZGxlU3VibWl0OiAoKSA9PiB7XHJcblx0XHRyZW5kZXJDYXJkKFxyXG5cdFx0XHR7IHVybDogYWRkSW5wdXREZXNjcmlwdGlvbi52YWx1ZSwgdGl0bGU6IGFkZElucHV0TmFtZS52YWx1ZSB9LFxyXG5cdFx0XHRwaG90b3NTZWN0aW9uXHJcblx0XHQpO1xyXG5cdH0sXHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gcmVuZGVyQ2FyZChpdGVtLCBjb250YWluZXIpIHtcclxuXHRjb25zdCBlbGVtZW50ID0gbmV3IENhcmQoaXRlbSwgXCIjZWxlbWVudHMtdGVtcGxhdGVcIiwgaGFuZGxlQ2FyZENsaWNrKTtcclxuXHRjb25zdCBuZXdDYXJkID0gZWxlbWVudC5nZW5lcmF0ZUNhcmQoKTtcclxuXHRjb250YWluZXIuYWRkSXRlbShuZXdDYXJkKTtcclxufVxyXG5cclxuYWRkQ2FyZEZvcm0uc2V0RXZlbnRMaXN0ZW5lcnMoKTtcclxuXHJcbmNvbnN0IGVkaXRQcm9maWxlRm9ybSA9IG5ldyBQb3B1cFdpdGhGb3JtKGVkaXRQcm9maWxlLCB7XHJcblx0aGFuZGxlU3VibWl0OiAoZGF0YSkgPT4ge1xyXG5cdFx0dXNlckluZm8uc2V0VXNlckluZm8oZGF0YSk7XHJcblx0fSxcclxufSk7XHJcblxyXG5lZGl0UHJvZmlsZUZvcm0uc2V0RXZlbnRMaXN0ZW5lcnMoKTtcclxuY29uc3QgdXNlckluZm8gPSBuZXcgVXNlckluZm8oeyBwcm9maWxlTmFtZSwgcHJvZmlsZVRleHQgfSk7XHJcblxyXG5lZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcblx0Y29uc3QgY3VycmVudFVzZXJJbmZvID0gdXNlckluZm8uZ2V0VXNlckluZm8oKTtcclxuXHRpbnB1dE5hbWUudmFsdWUgPSBjdXJyZW50VXNlckluZm8udXNlck5hbWU7XHJcblx0aW5wdXREZXNjcmlwdGlvbi52YWx1ZSA9IGN1cnJlbnRVc2VySW5mby51c2VyRGVzY3JpcHRpb247XHJcblx0cG9wdXBQcm9maWxlLm9wZW4oKTtcclxufSk7XHJcblxyXG5jb25zdCBpbWFnZVBvcHVwID0gbmV3IFBvcHVwV2l0aEltYWdlKGltYWdlTW9kYWwpO1xyXG5jb25zdCBwaG90b3NTZWN0aW9uID0gbmV3IFNlY3Rpb24oXHJcblx0e1xyXG5cdFx0aXRlbXM6IHBob3RvQXJyYXksXHJcblx0XHRyZW5kZXJlcjogKGl0ZW0pID0+IHtcclxuXHRcdFx0cmVuZGVyQ2FyZChpdGVtLCBwaG90b3NTZWN0aW9uKTtcclxuXHRcdH0sXHJcblx0fSxcclxuXHRwaG90b0dhbGxlcnlcclxuKTtcclxucGhvdG9zU2VjdGlvbi5yZW5kZXJlcigpO1xyXG5pbWFnZVBvcHVwLnNldEV2ZW50TGlzdGVuZXJzKCk7XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVDYXJkQ2xpY2soZGF0YSkge1xyXG5cdGltYWdlUG9wdXAub3BlbihkYXRhKTtcclxufVxyXG5cclxuY29uc3QgYWRkRm9ybVNlbGVjdG9yID0gXCIjYWRkLWZvcm1cIjtcclxuY29uc3QgYWRkUHJvZmlsZUZvcm1TZWxlY3RvciA9IFwiI3Byb2ZpbGUtZm9ybVwiO1xyXG5cclxuY29uc3QgYWRkRm9ybVZhbGlkYXRvciA9IG5ldyBGb3JtVmFsaWRhdG9yKGZvcm1TZXR0aW5ncywgYWRkRm9ybVNlbGVjdG9yKTtcclxuY29uc3QgcHJvZmlsZUZvcm1WYWxpZGF0b3IgPSBuZXcgRm9ybVZhbGlkYXRvcihcclxuXHRmb3JtU2V0dGluZ3MsXHJcblx0YWRkUHJvZmlsZUZvcm1TZWxlY3RvclxyXG4pO1xyXG5cclxucHJvZmlsZUZvcm1WYWxpZGF0b3IuZW5hYmxlVmFsaWRhdGlvbigpO1xyXG5cclxuYWRkRm9ybVZhbGlkYXRvci5lbmFibGVWYWxpZGF0aW9uKCk7XHJcblxyXG5mZXRjaChcImh0dHBzOi8vYXJvdW5kLm5vbW9yZXBhcnRpZXMuY28vdjEvZ3JvdXAtMTIvdXNlcnMvbWVcIiwge1xyXG5cdGhlYWRlcnM6IHtcclxuXHRcdGF1dGhvcml6YXRpb246IFwiYjI0MGEwNWItYmVkYy00MjE5LTllMjYtYjA5NDJlY2IwZmIwXCIsXHJcblx0XHRcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuXHR9LFxyXG59KVxyXG5cdC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXHJcblx0LnRoZW4oKGRhdGEpID0+IHtcclxuXHRcdGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cdH0pO1xyXG4iLCJleHBvcnQgY2xhc3MgVXNlckluZm8ge1xyXG5cdGNvbnN0cnVjdG9yKHsgcHJvZmlsZU5hbWUsIHByb2ZpbGVUZXh0IH0pIHtcclxuXHRcdHRoaXMuX3VzZXJOYW1lRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocHJvZmlsZU5hbWUpO1xyXG5cdFx0dGhpcy5fdXNlckpvYkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHByb2ZpbGVUZXh0KTtcclxuXHR9XHJcblx0Z2V0VXNlckluZm8oKSB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHR1c2VyTmFtZTogdGhpcy5fdXNlck5hbWVFbGVtZW50LnRleHRDb250ZW50LFxyXG5cdFx0XHR1c2VyRGVzY3JpcHRpb246IHRoaXMuX3VzZXJKb2JFbGVtZW50LnRleHRDb250ZW50LFxyXG5cdFx0fTtcclxuXHR9XHJcblx0c2V0VXNlckluZm8oeyBuYW1lLCBkZXNjcmlwdGlvbiB9KSB7XHJcblx0XHR0aGlzLl91c2VyTmFtZUVsZW1lbnQudGV4dENvbnRlbnQgPSBuYW1lO1xyXG5cdFx0dGhpcy5fdXNlckpvYkVsZW1lbnQudGV4dENvbnRlbnQgPSBkZXNjcmlwdGlvbjtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgUG9wdXAgfSBmcm9tIFwiLi9wb3B1cC5qc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBvcHVwV2l0aEltYWdlIGV4dGVuZHMgUG9wdXAge1xyXG5cdGNvbnN0cnVjdG9yKHBvcHVwU2VsZWN0b3IpIHtcclxuXHRcdHN1cGVyKHBvcHVwU2VsZWN0b3IpO1xyXG5cdFx0dGhpcy5faW1hZ2UgPSB0aGlzLl9wb3B1cFNlbGVjdG9yLnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfX2ltYWdlXCIpO1xyXG5cdFx0dGhpcy5fY2FwdGlvbiA9IHRoaXMuX3BvcHVwU2VsZWN0b3IucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9fY2FwdGlvblwiKTtcclxuXHR9XHJcblx0b3BlbihkYXRhKSB7XHJcblx0XHR0aGlzLl9pbWFnZS5zcmMgPSBkYXRhLnVybDtcclxuXHRcdHRoaXMuX2ltYWdlLmFsdCA9IGRhdGEudGl0bGU7XHJcblx0XHR0aGlzLl9jYXB0aW9uLnRleHRDb250ZW50ID0gZGF0YS50aXRsZTtcclxuXHRcdHN1cGVyLm9wZW4oKTtcclxuXHR9XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIFNlY3Rpb24ge1xyXG5cdGNvbnN0cnVjdG9yKHsgaXRlbXMsIHJlbmRlcmVyIH0sIGNvbnRhaW5lclNlbGVjdG9yKSB7XHJcblx0XHR0aGlzLl9pdGVtcyA9IGl0ZW1zO1xyXG5cdFx0dGhpcy5fcmVuZGVyZXIgPSByZW5kZXJlcjtcclxuXHRcdHRoaXMuX2NvbnRhaW5lckVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNvbnRhaW5lclNlbGVjdG9yKTtcclxuXHR9XHJcblxyXG5cdHJlbmRlcmVyKCkge1xyXG5cdFx0dGhpcy5faXRlbXMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG5cdFx0XHR0aGlzLl9yZW5kZXJlcihlbGVtZW50KTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHRhZGRJdGVtKGVsZW1lbnQpIHtcclxuXHRcdHRoaXMuX2NvbnRhaW5lckVsZW1lbnQucHJlcGVuZChlbGVtZW50KTtcclxuXHR9XHJcbn1cclxuIl0sIm5hbWVzIjpbIkNhcmQiLCJjb25zdHJ1Y3RvciIsImRhdGEiLCJjYXJkU2VsZWN0b3IiLCJoYW5kbGVDYXJkQ2xpY2siLCJ0aGlzIiwiX3RpdGxlIiwidGl0bGUiLCJfaW1hZ2UiLCJ1cmwiLCJfY2FyZFNlbGVjdG9yIiwiX2hhbmRsZUNhcmRDbGljayIsIl9nZXRUZW1wbGF0ZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNvbnRlbnQiLCJjbG9uZU5vZGUiLCJnZW5lcmF0ZUNhcmQiLCJfZWxlbWVudCIsImltYWdlRWxlbWVudCIsInNyYyIsImFsdCIsInRleHRDb250ZW50IiwiX3NldEV2ZW50TGlzdGVuZXJzIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2dCIsInRhcmdldCIsImNsYXNzTGlzdCIsInRvZ2dsZSIsInJlbW92ZSIsIkZvcm1WYWxpZGF0b3IiLCJzZXR0aW5ncyIsImZvcm1TZWxlY3RvciIsIl9pbnB1dFNlbGVjdG9yIiwiaW5wdXRTZWxlY3RvciIsIl9zdWJtaXRCdXR0b25TZWxlY3RvciIsInN1Ym1pdEJ1dHRvblNlbGVjdG9yIiwiX2luYWN0aXZlQnV0dG9uQ2xhc3MiLCJpbmFjdGl2ZUJ1dHRvbkNsYXNzIiwiX2lucHV0RXJyb3JDbGFzcyIsImlucHV0RXJyb3JDbGFzcyIsIl9lcnJvckNsYXNzIiwiZXJyb3JDbGFzcyIsIl9mb3JtU2VsZWN0b3IiLCJfaW5wdXRMaXN0IiwicXVlcnlTZWxlY3RvckFsbCIsIl9idXR0b24iLCJfaGFzSW52YWxpZElucHV0IiwiaW5wdXRFbCIsInZhbGlkaXR5IiwidmFsaWQiLCJfc2hvd0lucHV0RXJyb3IiLCJlcnJvckVsZW1lbnQiLCJpZCIsImFkZCIsInZhbGlkYXRpb25NZXNzYWdlIiwiX2hpZGVJbnB1dEVycm9yIiwiX3ZhbGlkYXRlRm9ybUZpZWxkIiwiX3RvZ2dsZUJ1dHRvblN0YXRlIiwiaW5wdXRMaXN0IiwiYnV0dG9uIiwiZGlzYWJsZWQiLCJzb21lIiwiZm9yRWFjaCIsInJlc2V0VmFsaWRhdGlvbiIsInJlc2V0IiwiZW5hYmxlVmFsaWRhdGlvbiIsInByZXZlbnREZWZhdWx0IiwiUG9wdXAiLCJwb3B1cFNlbGVjdG9yIiwiYnV0dG9uU2VsZWN0b3IiLCJlIiwia2V5IiwiY2xvc2UiLCJfcG9wdXBTZWxlY3RvciIsIl9idXR0b25TZWxlY3RvciIsIm9wZW4iLCJfaGFuZGxlRXNjQ2xvc2UiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic2V0RXZlbnRMaXN0ZW5lcnMiLCJldmVudCIsImNvbnRhaW5zIiwiUG9wdXBXaXRoRm9ybSIsImhhbmRsZVN1Ym1pdCIsInN1cGVyIiwiX2hhbmRsZVN1Ym1pdCIsIl9wb3B1cFdpdGhGb3JtIiwiX2dldElucHV0VmFsdWVzIiwiaW5wdXRWYWx1ZXMiLCJpbnB1dCIsIm5hbWUiLCJ2YWx1ZSIsImZvcm1TZXR0aW5ncyIsImFkZENhcmRNb2RhbCIsImVkaXRQcm9maWxlIiwiaW5wdXROYW1lIiwiaW5wdXREZXNjcmlwdGlvbiIsImFkZElucHV0TmFtZSIsImFkZElucHV0RGVzY3JpcHRpb24iLCJlZGl0QnV0dG9uIiwiYnV0dG9uQWRkIiwibmV3UG9wdXBQaG90byIsImFkZEZvcm1WYWxpZGF0b3IiLCJwb3B1cFByb2ZpbGUiLCJyZW5kZXJDYXJkIiwiaXRlbSIsImNvbnRhaW5lciIsIm5ld0NhcmQiLCJhZGRJdGVtIiwicGhvdG9zU2VjdGlvbiIsInVzZXJJbmZvIiwic2V0VXNlckluZm8iLCJwcm9maWxlTmFtZSIsInByb2ZpbGVUZXh0IiwiX3VzZXJOYW1lRWxlbWVudCIsIl91c2VySm9iRWxlbWVudCIsImdldFVzZXJJbmZvIiwidXNlck5hbWUiLCJ1c2VyRGVzY3JpcHRpb24iLCJkZXNjcmlwdGlvbiIsImN1cnJlbnRVc2VySW5mbyIsImltYWdlUG9wdXAiLCJfY2FwdGlvbiIsImNvbnRhaW5lclNlbGVjdG9yIiwiaXRlbXMiLCJyZW5kZXJlciIsIl9pdGVtcyIsIl9yZW5kZXJlciIsIl9jb250YWluZXJFbGVtZW50IiwiZWxlbWVudCIsInByZXBlbmQiLCJmZXRjaCIsImhlYWRlcnMiLCJhdXRob3JpemF0aW9uIiwidGhlbiIsInJlcyIsImpzb24iLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==