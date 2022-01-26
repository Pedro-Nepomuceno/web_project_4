
// toggle elements 

const editProfile = document.querySelector('.popup_type-edit_profile');
const editModalProfile = document.querySelector('.popup__form');
const closeModalProfile = document.querySelectorAll('.popup__close');
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
const createPhoto = document.querySelector('.popup__submit_create');
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
function createCard (data) {
    const userElement = cardTemplate.querySelector('.elements__photo').cloneNode(true);
   const imageElement = userElement.querySelector(".elements__pic");
   const elementTitle = userElement.querySelector(".elements__info-text");
   const likeButton = userElement.querySelector('.elements__info-button');
   const deletePhoto = userElement.querySelector('.elements__delete');
   deletePhoto.addEventListener("click", () =>{userElement.remove()} );
   likeButton.addEventListener("click", () => {likeButton.classList.toggle("elements__info-button_active")});
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
    

    return userElement;
}

function addCard(element){
    photoGallery.prepend(element)
} 
function renderCard(data){
    addCard(createCard(data))
}

 photoArray.forEach((element) =>{
    renderCard(element);

} )



// functions


function openProfilePopup(editProfile) { 
    
    openModal(editProfile);
    } 

const existModal = () =>{
 closeModal(editProfile);
 closeModal(addCardModal);
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


function editFormSubmit (evt){
evt.preventDefault();
 profileName.textContent = inputName.value;
 profileText.textContent = inputDescription.value;
 closeModal(editProfile);
}

function addFormSubmit (evt){
    evt.preventDefault();
    const element = { url: addInputDescription.value, title: addInputName.value };
    renderCard(element);
    
     closeModal(addCardModal);
    }


document.addEventListener('keydown', (evt) => {
      if(evt.key === "Escape"){
        existModal()
      }
    } )

  
document.addEventListener('click',handleMouseClick)
addCardModal.addEventListener('submit', addFormSubmit);
editModalProfile.addEventListener('submit', editFormSubmit);
editButton.addEventListener('click', () => {
  openProfilePopup(editProfile)});
buttonAdd.addEventListener('click', ()=> {openModal(addCardModal)});
closeModalProfile.forEach( (modalClose) => {
modalClose.addEventListener('click', (e) => { const popup = modalClose.closest('.popup');
closeModal(popup);
});
});


