import {openPopup, closePopup, openProfilePopup} from './modal.js'
import {editUser, getEditPhotoUser} from './api.js'
import {nameInput, activityInput, profileName, profileActivity, profileAvatar,
  linkPhotoInput, profileEditPopup,profileEditPhotoPopup,} from './constants.js'
//формы  и инпуты
//когда-то формы переделать через forms
function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const popupOpened = document.querySelector('.popup_opened');
    closePopup(popupOpened);
  }
}

// функция изменения имени при нажатии на кнопку
function changeProfile (evt) {
  editUser(nameInput.value, activityInput.value)
    .then(newData => {
      profileName.textContent = newData.name;
      profileActivity.textContent = newData.about;
      linkPhotoInput.value = newData.avatar;
      closePopup(profileEditPopup);
    })
    .catch(err => console.log(`Ошибочка вышла: ${err}`))
    // 11.1 При редактировании профиля уведомите пользователя о процессе загрузки, 
    //поменяв текст кнопки на: «Сохранение...», 
    //пока данные загружаются
    .finally(() => loadProccess(false, evt.submitter, 'Сохранить'))

  //кнопка до изменения
  loadProccess(true, evt.submitter, '');
}

// функция изменения фото при нажатии на кнопку
function changeProfilePhoto (evt) {
  getEditPhotoUser(linkPhotoInput.value)
  .then(newPhoto => {
    profileAvatar.src = newPhoto.avatar;
    closePopup(profileEditPhotoPopup);
  })
  .catch(err => console.log(`Ошибочка вышла: ${err}`))
  // 11.3 и обновления аватара.
  .finally(() => loadProccess(false, evt.submitter, 'Сохранить'))
  loadProccess(true, evt.submitter, '');  
}

//оставить buttonText если текст на кнопках разный? проверить
function loadProccess (isLoadind, button, buttonText) {
  if (isLoadind) { button.textContent = 'Сохранение..'};
  if (!isLoadind) { button.textContent = buttonText}
}

export {closeByEscape, changeProfile, changeProfilePhoto, loadProccess}