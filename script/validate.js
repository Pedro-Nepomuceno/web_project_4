
const  submitButtonSelector = document.querySelectorAll(".popup__submit");
const inactiveButtonClass = document.querySelectorAll(".popup__button_disabled");
const inputErrorClass = document.querySelectorAll(".popup__input_type_error");
const errorClass = document.querySelectorAll(".popup__error_visible");

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
    errorElement.classList.add("popup__input-error-active");
  };

const hideInputError = (formElement, inputElement) => {

    const errorElement = document.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove("popup__input-error");
  errorElement.classList.remove("popup__input-error-active");
  errorElement.textContent = "";
}; 

const setEventListeners = (inputElement) => {
   
    
    inputList = Array.from(inputElement)
console.log(inputList);
    inputList.forEach((inputElement) =>{
        inputElement.addEventListener('input', () =>{
            isValid(formElement,inputElement)
        } )
    })
}
const enableValidation = () => {
    const formElement = document.querySelectorAll(".popup__form");
    const formList = Array.from(formElement);

    formList.forEach((formElement) => {
        formElement.addEventListener('submit', (evt) =>{
            evt.preventDefault();
        })
setEventListeners(formElement);
    })
}
enableValidation();
