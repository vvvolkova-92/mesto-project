//функция проверки валидности формы
const checkFormValid = inputList => {
  let valid;
  return valid = inputList.every(inputElement => inputElement.validity.valid);
};

//2.1.2 функция спрятать ошибку
const hideError = (inputElement, config) => {
  const errorElement = document.querySelector(`#${inputElement.name}-error`);
  errorElement.textContent='';
  inputElement.classList.remove(config.errorClass);
};

//2.1.3 функция показать ошибку
const showError = (inputElement, config) => {
  const errorElement = document.querySelector(`#${inputElement.name}-error`);
  errorElement.textContent= inputElement.validationMessage;
  inputElement.classList.add(config.errorClass);
};

//2.1.4 функция состояния кнопки
//передаем ей кнопку и список полей ввода
const setButtonState = (inputList, buttonElement) => {
  //если форма валидна - кнопка активна
  //иначе - неактивна
  checkFormValid(inputList) ? buttonElement.disabled = false : buttonElement.disabled = true;
  
};

//2.1 функция проверки валидности полей ввода
const checkinputValid = (inputElement, config) => {
  //проверить поля ввода на корректность ввода
  //в случае чего выводить ошибку
  inputElement.validity.valid ? hideError(inputElement, config) : showError(inputElement, config);
};

//2. функция обработчика формы
const setEventListeners = (formElement, config) => {
  const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
  //убрала страндартное поведение
  //на событие сабмит
  formElement.addEventListener('submit', evt => {
    evt.preventDefault();
  });
  //нашла кнопку формы
  const subminButton = formElement.querySelector(config.buttonSelector);
  //добавила слушатели для каждого инпута
  inputList.forEach(inputElement => {
    //вешаем проверку на каждый инпут
    inputElement.addEventListener('input', () => {
      //поле ввода валидно/нет? 
      checkinputValid(inputElement, config);
      //переключать кнопку в зависимости от ответа выше
      setButtonState(inputList, subminButton);
    });
  });
  setButtonState(inputList, subminButton);
};

//1. функция валидации
export const enableValidation = (config) => {
  const formList = Array.from(document.forms);
  //установила слушатели для формы
  formList.forEach(formElement => {
    setEventListeners(formElement, config);
  })
}