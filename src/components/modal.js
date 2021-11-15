import {closeByEscape, changeProfile, changeProfilePhoto, loadProccess} from './utils.js'
import {addNewCard} from './card.js'
import {formProfileEdit, formCardAdd, profileEditPopup, formProfilePhotoEdit, profileActivity, profileName,
  nameInput, activityInput} from './constants.js'
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
  nameInput.value = profileName.textContent;
  activityInput.value = profileActivity.textContent;
  openPopup(profileEditPopup); 
}


//клики по формам
formProfileEdit.addEventListener('submit', changeProfile);
formCardAdd.addEventListener('submit', addNewCard);
formProfilePhotoEdit.addEventListener('submit', changeProfilePhoto);

export {openPopup, closePopup, openProfilePopup}