const formProfileEdit = document.querySelector('.form__profile-edit'), // форма редактирования профайла
formCardAdd = document.querySelector('.form__card-add'), // форма добавления новой карточки
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
const profileEditPopup = document.querySelector('.popup__profile-edit'), // определила окно редактирования профайла
cardsAddPopup = document.querySelector('.popup__card-add'), // определила окно редактирования 
imageOpenPopup = document.querySelector('.popup__image-open'), // картинка на весь экран
popupImage = document.querySelector('.popup-image'), //попап изображение
allPopups = document.querySelectorAll('.popup'), //все попапы
profileEditPhotoPopup = document.querySelector('.popup__profile-photo-edit'),
cardDeletePopup = document.querySelector('.popup__card-delete'),
popupImageName = document.querySelector('.popup-image__caption'),
editPhotoButton = document.querySelector('.profile__edit-photo'),
addSubmitButton = formCardAdd.querySelector('.button_type_save');
const config = {
  inputSelector: '.form__item',
  buttonSelector: '.button_type_save',
  errorClass: 'form__item_error',
};

export {formProfileEdit, formCardAdd, nameInput, activityInput, cardnameInput, linkInput, profileName, profileActivity, profileAvatar,
  linkPhotoInput, cardsList, buttonProfileEdit, buttonCardsAdd, buttonProfilePhotoEdit, formDeleteCard, profileEditPopup, cardsAddPopup,
  imageOpenPopup, popupImage, allPopups, profileEditPhotoPopup, cardDeletePopup, popupImageName, formProfilePhotoEdit, editPhotoButton,
  addSubmitButton, config}
