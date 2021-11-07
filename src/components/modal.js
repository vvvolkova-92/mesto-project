import {profileName, profileActivity, nameInput, activityInput, closeListeners, formProfileEdit, formCardAdd,} from './utils.js'
import {newCard} from './card.js'
//попапы
const profileEditPopup = document.querySelector('.popup__profile-edit'), // определила окно редактирования профайла
cardsAddPopup = document.querySelector('.popup__card-add'), // определила окно редактирования 
imageOpenPopup = document.querySelector('.popup__image-open'); // картинка на весь экран

//функция открытия окна
export function openPopup(popup) {
  popup.classList.add('popup_opened');
}
//функция закрытия окна
export function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

//ф-ия открытия попапа профайла
function openProfilePopup () {
  openPopup(profileEditPopup); //вызов ф-ии
  closeListeners(profileEditPopup);
}

// функция изменения имени при нажатии на кнопку
  function changeProfile (evt) {
  profileName.textContent = nameInput.value;
  profileActivity.textContent = activityInput.value;
  closePopup(profileEditPopup);
}

//клики по формам
formProfileEdit.addEventListener('submit', changeProfile);
formCardAdd.addEventListener('submit', newCard);

export {profileEditPopup, cardsAddPopup, imageOpenPopup, openProfilePopup}; 