import './index.css'
import {profileEditPopup, cardsAddPopup, imageOpenPopup, openProfilePopup, closePopup, openPopup} from '../components/modal.js'
import {initialCards, createCard} from '../components/card.js'
import {closeListeners, nameInput, activityInput, profileName, profileActivity, cardsList} from '../components/utils.js'
import {EnableValidation} from '../components/validate.js'
//кнопки
const buttonProfileEdit = document.querySelector('.button_type_edit'), //получила кнопку редактирования
buttonCardsAdd = document.querySelector('.button_type_add'), //получила кнопку добавления карточки
buttonCloseCardsAddPopup = cardsAddPopup.querySelector('.button_type_close-window'),
buttonCloseImageOpenPopup = imageOpenPopup.querySelector('.button_type_close-window'),
buttonCloseProfileEditPopup = profileEditPopup.querySelector('.button_type_close-window');


//заполнение карточками
initialCards.forEach(cardData => {
  const card = createCard(cardData);
  cardsList.append(card);
});

//передать данные профайла в попап
nameInput.value = profileName.textContent; //вывод имени
activityInput.value = profileActivity.textContent; //вывод рода деятельности
//обработчики

buttonCloseCardsAddPopup.addEventListener('click', () => { 
  closePopup(cardsAddPopup);
});
buttonCloseImageOpenPopup.addEventListener('click', () => { 
  closePopup(imageOpenPopup);
});
buttonCloseProfileEditPopup.addEventListener('click', () => { 
  closePopup(profileEditPopup);
});

buttonProfileEdit.addEventListener('click', openProfilePopup);

buttonCardsAdd.addEventListener('click', () => {
  openPopup(cardsAddPopup); //вызов ф-ии
  closeListeners(cardsAddPopup);
});

EnableValidation();
