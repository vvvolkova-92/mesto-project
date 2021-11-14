import {closePopup, } from './modal.js'
import {getEditUser, getEditPhotoUser} from './api.js'
import {profileEditPopup, profileEditPhotoPopup} from './modal.js'
//формы  и инпуты
//когда-то формы переделать через forms
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
linkPhotoInput = formProfilePhotoEdit.querySelector('.form__item_element_photo-link'),//ссылка на картинку профайла
cardsList = document.querySelector('.cards__items'),
buttonProfileEdit = document.querySelector('.button_type_edit'), //получила кнопку редактирования
buttonCardsAdd = document.querySelector('.button_type_add'),
buttonProfilePhotoEdit = document.querySelector('.button_type_edit-photo'),
formDeleteCard = document.querySelector('.form__card-delete');

function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const popupOpened = document.querySelector('.popup_opened');
    closePopup(popupOpened);
  }
}

// функция изменения имени при нажатии на кнопку
function changeProfile (evt) {
  getEditUser(nameInput.value, activityInput.value)
    .then(newData => {
      profileName.textContent = newData.name;
      profileActivity.textContent = newData.about;
      linkPhotoInput.value = newData.avatar;
    })
    .catch(err => console.log(`Ошибочка вышла: ${err}`))
    // 11.1 При редактировании профиля уведомите пользователя о процессе загрузки, 
    //поменяв текст кнопки на: «Сохранение...», 
    //пока данные загружаются
    .finally(() => loadProccess(false, evt.submitter, 'Сохранить'))
  closePopup(profileEditPopup);
  //кнопка до изменения
  loadProccess(true, evt.submitter, '');
}

// функция изменения фото при нажатии на кнопку
function changeProfilePhoto (evt) {
  getEditPhotoUser(linkPhotoInput.value)
  .then(newPhoto => {
    profileAvatar.src = newPhoto.avatar;
  })
  .catch(err => console.log(`Ошибочка вышла: ${err}`))
  // 11.3 и обновления аватара.
  .finally(() => loadProccess(false, evt.submitter, 'Сохранить'))
  closePopup(profileEditPhotoPopup);
  loadProccess(true, evt.submitter, '');  
}

//оставить buttonText если текст на кнопках разный? проверить
function loadProccess (isLoadind, button, buttonText) {
  if (isLoadind) { button.textContent = 'Сохранение..'};
  if (!isLoadind) { button.textContent = buttonText}
}

export {formProfileEdit, formCardAdd, profileName, cardnameInput, linkInput, profileActivity, 
nameInput, activityInput, cardsList, closeByEscape, profileAvatar, changeProfile, changeProfilePhoto, 
formProfilePhotoEdit, linkPhotoInput, loadProccess, buttonProfileEdit, buttonCardsAdd, buttonProfilePhotoEdit,
formDeleteCard}