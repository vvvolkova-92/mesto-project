import css from './index.css'
import './index.css'
import {cardsAddPopup, openProfilePopup, closePopup, openPopup, allPopups} from '../components/modal.js'
import {initialCards, createCard} from '../components/card.js'
import {cardsList, nameInput, activityInput} from '../components/utils.js'
import {enableValidation} from '../components/validate.js'
import {getUserData, getInitialCards} from '../components/api.js'
//кнопки
const buttonProfileEdit = document.querySelector('.button_type_edit'), //получила кнопку редактирования
buttonCardsAdd = document.querySelector('.button_type_add'); //получила кнопку добавления карточки
const config = {
  inputSelector: '.form__item',
  buttonSelector: '.button_type_save',
  errorClass: 'form__item_error',
};

// //передать данные профайла в попап


//обработчики

allPopups.forEach( popup => {
  popup.addEventListener('click', (evt) => {
      if ((evt.target.classList.contains('popup_opened')) || (evt.target.classList.contains('button_type_close-window'))) closePopup(popup);
  })
})

buttonProfileEdit.addEventListener('click', openProfilePopup);

buttonCardsAdd.addEventListener('click', () => {
  openPopup(cardsAddPopup); //вызов ф-ии
});

enableValidation(config);
getUserData(nameInput.value, activityInput.value);
getInitialCards();