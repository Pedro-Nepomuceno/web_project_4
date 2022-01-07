
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
const addInputDescription = document.querySelector('.add__input_type_description');
const likeButton = document.querySelector('.elements__info-button');
const userTemplate = document.querySelector("#elements-template").content;
const photoGallery = document.querySelector('.elements');

// Array add photos to webpage
const photoArray = [
    {
        title: "Yosemite Valley",
        url: "https://code.s3.yandex.net/web-code/yosemite.jpg"
      },
      {
        title: "Lake Louise",
        url: "https://code.s3.yandex.net/web-code/lake-louise.jpg"
      },
      {
        title: "Bald Mountains",
        url: "https://code.s3.yandex.net/web-code/bald-mountains.jpg"
      },
      {
        title: "Latemar",
        url: "https://code.s3.yandex.net/web-code/latemar.jpg"
      },
      {
        title: "Vanoise National Park",
        url: "https://code.s3.yandex.net/web-code/vanoise.jpg"
      },
      {
        title: "Lago di Braies",
        url: "https://code.s3.yandex.net/web-code/lago.jpg"
      },
  
]
const userElement = userTemplate.querySelector('.elements__photo').cloneNode(true)
// function to add cloned template to page 
function galleryPhotos (data) {

   const imageElement = userElement.querySelector(".elements__pic");
   const elementTitle = userElement.querySelector(".elements__info-text")
    
    elementTitle.textContent = data.title
    imageElement.src = data.url
    photoGallery.prepend(userElement)
    
    return userElement;
}

photoArray.forEach((element) =>{
    galleryPhotos(element);
} )


// functions
function newPhoto (){
    if(!addPhoto.classList.contains('add_open')){
        addInputName.value = "Title";
        addInputDescription.value = "image url";
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
likeButton.addEventListener("click", () => {likeButton.classList.toggle("elements__info-button_active")});
buttonAdd.addEventListener('click',newPhoto);
addClose.addEventListener('click', newPhoto);
popupForm.addEventListener('submit', formSubmit);
editButton.addEventListener('click', toggleModal);
popupClose.addEventListener('click', toggleModal);