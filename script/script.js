
// toggle elements 

const modalWindow = document.querySelector('.popup');
const popupForm = document.querySelector('.popup__form');

const popupClose = document.querySelector('.popup__close');
const popupSubmit = document.querySelector('.popup__submit');
const editButton = document.querySelector('.profile__edit');


const inputName = document.querySelector('.popup__input_type_name');
const inputDescription = document.querySelector('.popup__input_type_description');
const profileName = document.querySelector('.profile__name');
const profileText = document.querySelector('.profile__text');

// functions 

function toggleModal (){
    if(!modalWindow.classList.contains("popup_open")){
inputName.value = profileName.textContent;
inputDescription.value = profileText.textContent;
    }

modalWindow.classList.toggle("popup_open");
}
 

function formSubmit (evt){
evt.preventDefault();
 profileName.textContent = inputName.value;
 profileText.textContent = inputDescription.value;

toggleModal();
}
// event listener 

popupForm.addEventListener('submit', formSubmit);
editButton.addEventListener('click', toggleModal);
popupClose.addEventListener('click', toggleModal);