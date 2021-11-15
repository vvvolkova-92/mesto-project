import css from './index.css'
import './index.css'
import {formProfileEdit,nameInput, activityInput, profileName, profileActivity, profileAvatar, cardsList, buttonProfileEdit, 
  buttonCardsAdd, buttonProfilePhotoEdit, cardsAddPopup, allPopups, profileEditPhotoPopup,editPhotoButton, config} from '../components/constants.js'
import {enableValidation} from '../components/validate.js'
import {getUserData, getInitialCards} from '../components/api.js'
import {createCard} from '../components/card.js'
import {openPopup, closePopup, openProfilePopup} from '../components/modal.js'
export let userId;
//кнопки


Promise.all([getUserData(), getInitialCards()])
  .then(([userData, cardData]) => {
    profileAvatar.src = userData.avatar;
    profileName.textContent = userData.name;
    profileActivity.textContent = userData.about;
    userId = userData._id;
    startInitialCard(cardData);
})
.catch((err) => {
  console.log(err);
});


const startInitialCard = cardData => {
  cardData.forEach(card => {
    cardsList.append(createCard(card));
  })
}
//обработчики

allPopups.forEach( popup => {
  popup.addEventListener('click', (evt) => {
      if ((evt.target.classList.contains('popup_opened')) || (evt.target.classList.contains('button_type_close-window'))) closePopup(popup);
  })
})

//кнопка редактирования изображения профайла
editPhotoButton.addEventListener('mouseover', (evt) => {
  if (evt.target.classList.contains('profile__edit-photo') || evt.target.classList.contains('button_type_edit-photo')) buttonProfilePhotoEdit.style.visibility = 'visible';
})

editPhotoButton.addEventListener('mouseout', (evt) => {
  if (evt.target.classList.contains('profile__edit-photo') || evt.target.classList.contains('button_type_edit-photo')) 
  buttonProfilePhotoEdit.style.visibility = 'hidden';
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
