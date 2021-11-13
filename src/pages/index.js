import css from './index.css'
import './index.css'
import {cardsAddPopup, openProfilePopup, closePopup, openPopup, allPopups, profileEditPhotoPopup} from '../components/modal.js'
import {nameInput, activityInput, profileName, profileActivity, profileAvatar, formProfileEdit, buttonProfileEdit, buttonCardsAdd, buttonProfilePhotoEdit} from '../components/utils.js'
import {enableValidation} from '../components/validate.js'
import {getUserData, getInitialCards} from '../components/api.js'
//кнопки
const config = {
  inputSelector: '.form__item',
  buttonSelector: '.button_type_save',
  errorClass: 'form__item_error',
};

//обработчики

allPopups.forEach( popup => {
  popup.addEventListener('click', (evt) => {
      if ((evt.target.classList.contains('popup_opened')) || (evt.target.classList.contains('button_type_close-window'))) closePopup(popup);
  })
})

//кнопка редактирования изображения профайла
document.addEventListener('mouseover', (evt) => {
  (evt.target.classList.contains('profile__edit-photo') || evt.target.classList.contains('button_type_edit-photo')) 
  ? buttonProfilePhotoEdit.style.visibility = 'visible' 
  : buttonProfilePhotoEdit.style.visibility = 'hidden';
})

//редактировать фото
buttonProfilePhotoEdit.addEventListener('click', () => {
  openPopup(profileEditPhotoPopup);
})

buttonProfileEdit.addEventListener('click', openProfilePopup);

buttonCardsAdd.addEventListener('click', () => {
  openPopup(cardsAddPopup); //вызов ф-ии
});


enableValidation(config);
getUserData()
  .then(result => {
    profileName.textContent = result.name //вывод имени
    profileActivity.textContent = result.about //вывод рода деятельности
    profileAvatar.src = result.avatar //аватар
    nameInput.value = result.name;
    activityInput.value = result.about;
    const submitButton = formProfileEdit.querySelector('.button_type_save');
    submitButton.disabled = false;
})
getInitialCards();