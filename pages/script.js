<<<<<<< HEAD


const profileButtonEdit  = document.querySelector('.button_type_edit'); // получила кнопку редактирования
const profileButtonClose = document.querySelector('.button_type_close-window'); //получила кнопку закрытия окна
const profilebuttonSave = document.querySelector('.button_type_save'); 
let profileName = document.querySelector('.profile__name').textContent; //получила имя
let profileActivity = document.querySelector('.profile__activity').textContent; //получила деятельность

//функция открытия-закрытия окна
function profileModalWindow () {
  const popup = document.querySelectorAll('.popup')[0];
  popup.classList.toggle('popup_opened');
  let nameInput = document.querySelector('.form__item_element_profile-name');
  nameInput.value = profileName;
  let ActivityInput = document.querySelector('.form__item_element_profile-activity');
  ActivityInput.value = profileActivity;
}

//функция открытия-закрытия окна
function cardsModalWindow () {
  const popup = document.querySelectorAll('.popup')[1];
  popup.classList.toggle('popup_opened');
  let nameInput = document.querySelector('.form__item_element_profile-name');
  nameInput.value = profileName;
  let ActivityInput = document.querySelector('.form__item_element_profile-activity');
  ActivityInput.value = profileActivity;
}

profileButtonEdit.addEventListener('click', profileModalWindow);
profileButtonClose.addEventListener('click', profileModalWindow);
=======
let profileName = document.querySelector('.profile__name').textContent; //получила имя
let profileActivity = document.querySelector('.profile__activity').textContent; //получила деятельность
const buttonProfileEdit = document.querySelector('.button_type_edit'), //получила кнопку редактирования
buttonCardsAdd = document.querySelector('.button_type_add'), //получила кнопку редактирования
popups = document.querySelectorAll('.popup'), //выбрала все модальные окна
buttonsClose = document.querySelectorAll('.button_type_close-window'), //получила кнопки закрытия окон
profileEditPopup = popups[0], // определила окно редактирования профайла
cardsAddPopup = popups[1]; // определила окно редактирования профайла
const cardsList = document.querySelector('.cards__items');
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
  buttonsClose[0].addEventListener('click', () => { //функция закрытия окна
    closePopup(profileEditPopup);
  });
});

//ообработка клика на кнопку добавления карточки
buttonCardsAdd.addEventListener('click', () => {
  openPopup(cardsAddPopup); //вызов ф-ии
  buttonsClose[1].addEventListener('click', () => { //функция закрытия окна
    closePopup(cardsAddPopup);
  });
});

//заполнение карточками
function addCard(cardName, cardurl) {
  const cardTemplate = document.querySelector('#card').content;
  const cardElement = cardTemplate.querySelector('.cards__item').cloneNode(true);
  cardElement.querySelector('.cards__item-name').textContent = cardName;
  cardElement.querySelector('.cards__image').src = cardurl;
  cardsList.append(cardElement);
}
let c = 'fdfdfd', b = 'images/gallery/1-castle-combe.jpeg';
addCard(c, b);
>>>>>>> a9f1947f19a1ba93c91c5f6ea02e5164ceb3d073
