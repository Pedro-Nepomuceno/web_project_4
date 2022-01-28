
// toggle elements 
const popup = document.querySelectorAll('.popup');
const editProfile = document.querySelector('.popup_type-edit_profile');
const editModalProfile = document.querySelector('.popup__form');
const closePopupButtons = document.querySelectorAll('.popup__close');
const editButton = document.querySelector('.profile__edit');
const inputName = document.querySelector('.popup__input_type_name');
const inputDescription = document.querySelector('.popup__input_type_description');
const profileName = document.querySelector('.profile__name');
const profileText = document.querySelector('.profile__text');
const addPhoto = document.querySelector('.add');
const buttonAdd = document.querySelector('.profile__plus');
const addInputName = document.querySelector('#title');
const addInputDescription = document.querySelector('#url');
const addCardModal = document.querySelector('#add-popup');
const cardTemplate = document.querySelector("#elements-template").content;
const photoGallery = document.querySelector('.elements');
const createPhotoButton = document.querySelector('.popup__submit_create');
const imageModal = document.querySelector('#photo');

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
        title: "Lago di Braies",
        url: "https://code.s3.yandex.net/web-code/lago.jpg"
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
        title: "Rio de Janeiro",
        url: "https://images.unsplash.com/photo-1544989164-31dc3c645987?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
      },
  
]
// function to add cloned template to page 
function createCard (data) {
    const cardElement = cardTemplate.querySelector('.elements__photo').cloneNode(true);
   const imageElement = cardElement.querySelector(".elements__pic");
   const elementTitle = cardElement.querySelector(".elements__info-text");
   const likeButton = cardElement.querySelector('.elements__info-button');
   const deleteButton = cardElement.querySelector('.elements__delete');
   deleteButton.addEventListener("click", () =>{
     cardElement.remove()
    });
   likeButton.addEventListener("click", () => {
     likeButton.classList.toggle("elements__info-button_active")
    });
    elementTitle.textContent = data.title;
    imageElement.src = data.url;
    imageElement.alt = data.title
    
    imageElement.addEventListener('click', () => {
         const popupImage =  document.querySelector('.popup__image');
         const popupTitle = document.querySelector('.popup__caption');
         popupTitle.textContent = data.title;
         popupImage.src = data.url;
         popupImage.alt = data.title
        openModal(imageModal);
    })
    

    return cardElement;
}

function addCard(element){
    photoGallery.prepend(element)
} 
function renderCard(data){
    addCard(createCard(data))
}

 photoArray.forEach(renderCard)


// functions


function openProfilePopup(editProfile) { 
  inputName.value = profileName.textContent;
  inputDescription.value = profileText.textContent;
   openModal(editProfile);
} 


    
function openModal(modal){
    modal.classList.add("popup_open");
}

function closeModal(modal){
    modal.classList.remove("popup_open");
    
}

function handleMouseClick(event) {
  if (event.target.classList.contains("popup_open")) {
    closeModal(event.target);
  }
}


function handleEditProfileFormSubmit (evt){
evt.preventDefault();
 profileName.textContent = inputName.value;
 profileText.textContent = inputDescription.value;
 closeModal(editProfile);
 resetForm(evt.target,{submitButtonSelector: ".popup__submit",})
}

function addFormSubmit (evt){
    evt.preventDefault();
    const element = { url: addInputDescription.value, title: addInputName.value };
    renderCard(element);
    
     closeModal(addCardModal);
     resetForm(evt.target,{submitButtonSelector: ".popup__submit"});
    }

function handleEscPopup (evt) {
  if(evt.key === "Escape"){
    closeModal(document.querySelector('.popup_open'))
  }
}

  
document.addEventListener('mousedown',handleMouseClick)
addCardModal.addEventListener('submit', addFormSubmit);
editModalProfile.addEventListener('submit', handleEditProfileFormSubmit);
editButton.addEventListener('click', () => {
  openProfilePopup(editProfile);
  document.addEventListener('keydown', handleEscPopup);
});
buttonAdd.addEventListener('click', ()=> {openModal(addCardModal)
  document.addEventListener('keydown', handleEscPopup)
});
closePopupButtons.forEach( (modalClose) => {
modalClose.addEventListener('click', (e) => { const popup = modalClose.closest('.popup');
closeModal(popup);
document.removeEventListener('keydown', handleEscPopup)
});
});


