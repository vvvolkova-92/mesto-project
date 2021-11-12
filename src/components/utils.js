import {closePopup} from './modal.js'
//формы  и инпуты
const formProfileEdit = document.querySelector('.form__profile-edit'), // форма редактирования профайла
formCardAdd = document.querySelector('.form__card-add'), // форма добавления новой карточки
nameInput = formProfileEdit.querySelector('.form__item_element_profile-name'), //инпут имя
activityInput = formProfileEdit.querySelector('.form__item_element_profile-activity'), //инпут деятельности
cardnameInput = formCardAdd.querySelector('.form__item_element_cards-nameplace'), //инпут название места
linkInput = formCardAdd.querySelector('.form__item_element_cards-link'), //ссылка на картинку
profileName = document.querySelector('.profile__name'),
profileActivity = document.querySelector('.profile__activity'),
profileAvatar = document.querySelector('.profile__photo');
const cardsList = document.querySelector('.cards__items');

function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const popupOpened = document.querySelector('.popup_opened');
    closePopup(popupOpened);
  }
}

export {formProfileEdit, formCardAdd, profileName, cardnameInput, linkInput, profileActivity, 
nameInput, activityInput, cardsList, closeByEscape, profileAvatar}