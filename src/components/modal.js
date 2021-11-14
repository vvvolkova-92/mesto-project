import {formProfileEdit, formCardAdd, closeByEscape, changeProfile, changeProfilePhoto,formProfilePhotoEdit, confirmDeleteCard, formDeleteCard} from './utils.js'
import {addNewCard} from './card.js'
//попапы
const profileEditPopup = document.querySelector('.popup__profile-edit'), // определила окно редактирования профайла
cardsAddPopup = document.querySelector('.popup__card-add'), // определила окно редактирования 
imageOpenPopup = document.querySelector('.popup__image-open'), // картинка на весь экран
popupImage = document.querySelector('.popup-image'), //попап изображение
allPopups = document.querySelectorAll('.popup'), //все попапы
profileEditPhotoPopup = document.querySelector('.popup__profile-photo-edit'),
cardDeletePopup = document.querySelector('.popup__card-delete');

//функция открытия окна
export function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEscape);
}
//функция закрытия окна
export function closePopup(popup) {
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

export {profileEditPopup, cardsAddPopup, imageOpenPopup, openProfilePopup, popupImage, allPopups, profileEditPhotoPopup, cardDeletePopup}; 