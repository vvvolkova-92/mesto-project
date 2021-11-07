import {closePopup} from './modal.js'
//формы  и инпуты
const formProfileEdit = document.querySelector('.form__profile-edit'), // форма редактирования профайла
formCardAdd = document.querySelector('.form__card-add'), // форма добавления новой карточки
nameInput = formProfileEdit.querySelector('.form__item_element_profile-name'), //инпут имя
activityInput = formProfileEdit.querySelector('.form__item_element_profile-activity'), //инпут деятельности
cardnameInput = formCardAdd.querySelector('.form__item_element_cards-nameplace'), //инпут название места
linkInput = formCardAdd.querySelector('.form__item_element_cards-link'), //ссылка на картинку
profileName = document.querySelector('.profile__name'),
profileActivity = document.querySelector('.profile__activity');
const cardsList = document.querySelector('.cards__items');
export const closeListeners = popup => {

  const close = evt => {
    document.removeEventListener('keydown', close);
    if (evt.key === 'Escape') {
      closePopup(popup);
    }
  }

  popup.addEventListener('click', (evt) => {
  const isCloseButtonClicked = evt.target.classList.contains('button_type_close-window');
  const isOverlayClicked = evt.target.classList.contains('popup');
  if (isCloseButtonClicked || isOverlayClicked) {
    closePopup(popup);
    document.removeEventListener('keydown', close);
  }
  });

  document.addEventListener('keydown', close);
}

export {formProfileEdit, formCardAdd, profileName, cardnameInput, linkInput, profileActivity, nameInput, activityInput, cardsList}