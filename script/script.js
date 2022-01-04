
// toggle elements 

const modalWindow = document.querySelector('.popup');
const popupForm = document.querySelector('.popup__form');
const popupClose = document.querySelector('.popup__close');
const popupSubmit = document.querySelector('.popup__submit');
const editButton = document.querySelector('.profile__edit');
const addClose = document.querySelector('.add__close');
const inputName = document.querySelector('.popup__input_type_name');
const inputDescription = document.querySelector('.popup__input_type_description');
const profileName = document.querySelector('.profile__name');
const profileText = document.querySelector('.profile__text');
const addPhoto = document.querySelector('.add');
const buttonAdd = document.querySelector('.profile__plus');
const addInputName = document.querySelector('.add__input_type_name');
const addInputDescription = document.querySelector('.add__input_type_name');
const likeButton = document.querySelector('.elements__info-button');
// functions 
function blackHeart (){
    likeButton.classList.toggle('elements__info-button_active')
}

function newPhoto (){
    if(!addPhoto.classList.contains('add_open')){
        addInputName.value = "Title";
        addInputDescription.value = "image link";
    }
    addPhoto.classList.toggle("add_open");
}

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
likeButton.addEventListener('click', blackHeart); 
buttonAdd.addEventListener('click',newPhoto);
addClose.addEventListener('click', newPhoto);
popupForm.addEventListener('submit', formSubmit);
editButton.addEventListener('click', toggleModal);
popupClose.addEventListener('click', toggleModal);