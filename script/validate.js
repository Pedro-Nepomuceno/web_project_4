
const inputElement = document.querySelectorAll(".popup__input");
const formElement = document.querySelectorAll(".popup__form");


const isValid = (formElement,inputElement) => {
    
    if(!inputElement.validity.valid){
        showInputError(formElement, inputElement, inputElement.validationMessage);
    }
    else{
        hideInputError(formElement,inputElement)
    }
}

const showInputError = (formElement, inputElement, errorMessage) => {
  
    const errorElement = document.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add("popup__input-error");
    errorElement.textContent = errorMessage;
    errorElement.classList.add("popup__input_type_error-active");
  };

const hideInputError = (formElement, inputElement) => {

    const errorElement = document.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove("popup__input-error");
  errorElement.classList.remove("popup__input_type_error-active");
  errorElement.textContent = "";
}; 


 function toggleButtonState() {
    const popupSubmit = document.querySelector('.popup__submit');
    const checkButton = {checkNameProfile: document.querySelector("#name"),
    checkTitleProfile: document.querySelector("#title")
}

     if(checkButton.checkNameProfile.validity.valid  && checkButton.checkTitleProfile.validity.valid){
        
        popupSubmit.disabled =false;

     }

     else{
        popupSubmit.disabled =true;
     }

 }

const setEventListeners = (inputElement) => {
   
    
    inputList = Array.from(inputElement)
    inputList.forEach((inputElement) =>{
        inputElement.addEventListener('input', () =>{
            isValid(formElement,inputElement);
            toggleButtonState()
          
        } )
    })
}

const enableValidation = () => {
    const formList = Array.from(formElement);

    formList.forEach((formElement) => {
        formElement.addEventListener('submit', (evt) =>{
            evt.preventDefault();
        })
setEventListeners(inputElement);
    })
}
enableValidation(formElement);
