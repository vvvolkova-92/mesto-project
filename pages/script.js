let profileName = document.querySelector('.profile__name').textContent; //получила имя
let profileActivity = document.querySelector('.profile__activity').textContent; //получила деятельность
const buttonProfileEdit = document.querySelector('.button_type_edit'), //получила кнопку редактирования
buttonCardsAdd = document.querySelector('.button_type_add'), //получила кнопку редактирования
popups = document.querySelectorAll('.popup') //выбрала все модальные окна
profileEditPopup = popups[0], // определила окно редактирования профайла
cardsAddPopup = popups[1], // определила окно редактирования профайла
buttonClose = document.querySelector('.button_type_close-window'); //получила кнопку закрытия окна
//функция открытия окна
function openPopup(popup) {
  popup.classList.add('popup_opened');
}
//функция закрытия окна
function closePopup(popup) {
  popup.classList.remove('popup_opened');
}
//ообработка клика на кнопку редактирования профиля
buttonProfileEdit.addEventListener('click', () => {
  openPopup(profileEditPopup); //вызов ф-ии
  let profileNameForm = document.querySelector('.form__item_element_profile-name');
  profileNameForm.value = profileName; //вывод имени
  let profileActivityForm = document.querySelector('.form__item_element_profile-activity');
  profileActivityForm.value = profileActivity; //вывод рода деятельности
  buttonClose.addEventListener('click', () => { //функция закрытия окна
    closePopup(profileEditPopup);
  });
});

//ообработка клика на кнопку добавления карточки
buttonCardsAdd.addEventListener('click', () => {
  openPopup(cardsAddPopup); //вызов ф-ии
  buttonClose.addEventListener('click', () => { //функция закрытия окна
    closePopup(profileEditPopup);
  });
});
