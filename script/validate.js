
const validateFormField = (inputEl,formEl,settings) => {
    const errorElement = formEl.querySelector(`#${inputEl.id}-error`);
    
  if(hasInvalidInput (inputEl)){
      showInputError(errorElement,inputEl,settings)
  }  
  else{
    hideInputError(errorElement,inputEl,settings)
  }
  
}

function hasInvalidInput (inputEl){
    return !inputEl.validity.valid
}

function toggleButtonState (inputList, button){
    button.disabled = inputList.some(hasInvalidInput)
}


function showInputError (errorElement,inputEl,settings) {
  errorElement.classList.add(settings.errorClass);
  inputEl.classList.add(settings.inputErrorClass);
  errorElement.textContent = inputEl.validationMessage ;
  };

function hideInputError (errorElement,inputEl,settings)  {
    errorElement.classList.remove(settings.errorClass);
    inputEl.classList.remove(settings.inputErrorClass);
    errorElement.textContent = "" ;

}; 



function setEventListeners(formEl,settings){
const inputList = Array.from(formEl.querySelectorAll(settings.inputSelector));
const button = formEl.querySelector(settings.submitButtonSelector);
inputList.forEach((inputEl) =>{
    inputEl.addEventListener('input', ()=>{
     validateFormField(inputEl,formEl,settings) ;
     toggleButtonState (inputList, button,settings);
    })
} )
}

function enableValidation (settings) {
    const formList = document.querySelectorAll(settings.formSelector);
    formList.forEach( (formEl) => {
        formEl.addEventListener('submit', (evt) =>{
            evt.preventDefault();
        } )
        setEventListeners(formEl,settings)  
    } )
}


function resetForm(formEl,settings){
    const buttonEl = formEl.querySelector(settings.submitButtonSelector)
    buttonEl.disabled=true;
    formEl.reset();
}

enableValidation({
    formSelector: ".popup__form",
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__submit",
    inactiveButtonClass: "popup__button_disabled",
    inputErrorClass: "popup__input-error",
    errorClass: "popup__error_active"
  }); 
