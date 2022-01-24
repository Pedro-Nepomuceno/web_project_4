
const  submitButtonSelector = document.querySelectorAll(".popup__submit");
const inactiveButtonClass = document.querySelectorAll(".popup__button_disabled");
const inputErrorClass = document.querySelectorAll(".popup__input_type_error");
const errorClass = document.querySelectorAll(".popup__error_visible");

const inputElement = document.querySelectorAll(".popup__input");



const isValid = (formElement,inputElement) => {
    
    if(!inputElement.validity.valid){
        showInputError(formElement, inputElement, inputElement.validationMessage);
    }
    else{
        hideInputError(formElement,inputElement)
    }
}

const showInputError = (formElement, inputElement, errorMessage) => {
  
    const errorElement = document.querySelector("#name-error");
    inputElement.classList.add("form__input_type_error");
    errorElement.textContent = errorMessage;
    errorElement.classList.add("form__input-error-active");
  };

const hideInputError = (formElement, inputElement) => {
  const errorElement = document.querySelector(`.${inputElement.id}-error`);
 
  inputElement.classList.remove("form__input_type_error");
  errorElement.classList.remove("form__input-error-active");
  errorElement.textContent = "";
}; 

const setEventListeners = (inputElement) => {
   
    const formElement = document.querySelectorAll(".popup__form");
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
