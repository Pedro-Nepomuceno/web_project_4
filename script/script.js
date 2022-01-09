
// toggle elements 

const editProfile = document.querySelector('.popup');
const popupForm = document.querySelector('.popup__form');
const popupClose = document.querySelectorAll('.popup__close');
const popupSubmit = document.querySelector('.popup__submit');
const editButton = document.querySelector('.profile__edit');
const inputName = document.querySelector('.popup__input_type_name');
const inputDescription = document.querySelector('.popup__input_type_description');
const profileName = document.querySelector('.profile__name');
const profileText = document.querySelector('.profile__text');
const addPhoto = document.querySelector('.add');
const buttonAdd = document.querySelector('.profile__plus');
const addInputName = document.querySelector('.add__input_type_name');
const addInputDescription = document.querySelector('.add__input_type_description');

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
// function to add cloned template to page 
function galleryPhotos (data) {
    const userElement = userTemplate.querySelector('.elements__photo').cloneNode(true);
   const imageElement = userElement.querySelector(".elements__pic");
   const elementTitle = userElement.querySelector(".elements__info-text");
   const likeButton = userElement.querySelector('.elements__info-button');
   const deletePhoto = userElement.querySelector('.elements__delete');
   deletePhoto.addEventListener("click", () =>{userElement.remove()} );
   likeButton.addEventListener("click", () => {likeButton.classList.toggle("elements__info-button_active")});
    elementTitle.textContent = data.title;
    imageElement.src = data.url;
    

    return userElement;
}

function addCard(element){
    photoGallery.prepend(element)
} 
function renderCard(data){
    addCard(galleryPhotos(data))
}



 photoArray.forEach((element) =>{
    renderCard(element);
} )



// functions

// function newPhoto (){
//     if(!addPhoto.classList.contains('add_open')){
//         addInputName.value = "Title";
//         addInputDescription.value = "image url";
//     }
//     addPhoto.classList.toggle("add_open");
// }

function openModal(modal){
    inputName.value = profileName.textContent;
    inputDescription.value = profileText.textContent;
    modal.classList.add("popup_open");

}
function closeModal(modal){
    modal.classList.remove("popup_open");
}


// function toggleModal (){
//     if(!modalWindow.classList.contains("popup_open")){
// inputName.value = profileName.textContent;
// inputDescription.value = profileText.textContent;
//     }

// modalWindow.classList.toggle("popup_open");
// }
 

function editFormSubmit (evt){
evt.preventDefault();
 profileName.textContent = inputName.value;
 profileText.textContent = inputDescription.value;

 closeModal(editProfile);
}

// event listener

// buttonAdd.addEventListener('click',newPhoto);
popupForm.addEventListener('submit', editFormSubmit);
editButton.addEventListener('click', () => {openModal(editProfile)});
popupClose.addEventListener('click',()=>{closeModal(editProfile)});