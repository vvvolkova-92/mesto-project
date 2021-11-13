import {closePopup, } from './modal.js'
import {getEditUser, getEditPhotoUser} from './api.js'
import {profileEditPopup, profileEditPhotoPopup} from './modal.js'
//формы  и инпуты
const formProfileEdit = document.querySelector('.form__profile-edit'), // форма редактирования профайла
formCardAdd = document.querySelector('.form__card-add'), // форма добавления новой карточки
nameInput = formProfileEdit.querySelector('.form__item_element_profile-name'), //инпут имя
activityInput = formProfileEdit.querySelector('.form__item_element_profile-activity'), //инпут деятельности
cardnameInput = formCardAdd.querySelector('.form__item_element_cards-nameplace'), //инпут название места
linkInput = formCardAdd.querySelector('.form__item_element_cards-link'), //ссылка на картинку
profileName = document.querySelector('.profile__name'),
profileActivity = document.querySelector('.profile__activity'),
profileAvatar = document.querySelector('.profile__photo'),
formProfilePhotoEdit = document.querySelector('.form__profile-photo-edit'),
linkPhotoInput = formProfilePhotoEdit.querySelector('.form__item_element_photo-link');//ссылка на картинку профайла
const cardsList = document.querySelector('.cards__items');
const buttonProfileEdit = document.querySelector('.button_type_edit'), //получила кнопку редактирования
buttonCardsAdd = document.querySelector('.button_type_add'),
buttonProfilePhotoEdit = document.querySelector('.button_type_edit-photo');

function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const popupOpened = document.querySelector('.popup_opened');
    closePopup(popupOpened);
  }
}

// функция изменения имени при нажатии на кнопку
function changeProfile (evt) {
  getEditUser(nameInput.value, activityInput.value, evt.submitter)
    .then(newData => {
      profileName.textContent = newData.name;
      profileActivity.textContent = newData.about;
      linkPhotoInput.value = newData.avatar;
    })
  closePopup(profileEditPopup);
  //кнопка до изменения
  console.log(evt.submitter);
  loadProccess(true, evt.submitter, '');
}

// функция изменения фото при нажатии на кнопку
function changeProfilePhoto (evt) {
  getEditPhotoUser(linkPhotoInput.value, profileAvatar)
  closePopup(profileEditPhotoPopup);
}
//оставить buttonText если текст на кнопках разный? проверить
function loadProccess (isLoadind, button, buttonText) {
  if (isLoadind) { button.textContent = 'Сохранение..'};
  if (!isLoadind) { button.textContent = buttonText}
}

export {formProfileEdit, formCardAdd, profileName, cardnameInput, linkInput, profileActivity, 
nameInput, activityInput, cardsList, closeByEscape, profileAvatar, changeProfile, changeProfilePhoto, 
formProfilePhotoEdit, linkPhotoInput, loadProccess, buttonProfileEdit, buttonCardsAdd, buttonProfilePhotoEdit}