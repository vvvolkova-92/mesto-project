import {closeByEscape, changeProfile, changeProfilePhoto, loadProccess} from './utils.js'
import {addNewCard} from './card.js'
import {formProfileEdit, formCardAdd, profileEditPopup, formProfilePhotoEdit} from './constants.js'
//попапы


//функция открытия окна
function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEscape);
}
//функция закрытия окна
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEscape);
}

//ф-ия открытия попапа профайла
function openProfilePopup () {
  openPopup(profileEditPopup); //вызов ф-ии
}


//клики по формам
formProfileEdit.addEventListener('submit', changeProfile);
formCardAdd.addEventListener('submit', addNewCard);
formProfilePhotoEdit.addEventListener('submit', changeProfilePhoto);

export {openPopup, closePopup, openProfilePopup}