//объявление переменных
const buttonProfileEdit = document.querySelector('.button_type_edit'), //получила кнопку редактирования
buttonCardsAdd = document.querySelector('.button_type_add'), //получила кнопку добавления карточки
popups = document.querySelectorAll('.popup'), //выбрала все модальные окна
buttonsClose = document.querySelectorAll('.button_type_close-window'), //получила кнопки закрытия окон
profileEditPopup = popups[0], // определила окно редактирования профайла
cardsAddPopup = popups[1], // определила окно редактирования профайла
imageOpenPopup = popups[2]; // определила окно редактирования профайла
const cardsList = document.querySelector('.cards__items');
console.log(imageOpenPopup);
//данные для карточек
let cards = {
  name: ['Castle Combe', 'Clovelly', 'Dingle', 'Westport', 'Helmsley', 'Castleton'],
  url: ['images/gallery/1-castle-combe.jpeg', 'images/gallery/2-clovelly.jpeg', 'images/gallery/3-dingle.jpeg','images/gallery/4-westport.jpeg', 'images/gallery/5-Helmsley.jpeg', 'images/gallery/6-Castleton.jpeg']
};
const formProfileEdit = document.querySelectorAll('form').item(0); //получила форму редактирования профиля
let nameInput = formProfileEdit.querySelector('.form__item_element_profile-name'), //инпут имя
activityInput = formProfileEdit.querySelector('.form__item_element_profile-activity'); //инпут деятельности
const formCardAdd = document.querySelectorAll('form').item(1); //получила форму редактирования профиля
let cardnameInput = formCardAdd.querySelector('.form__item_element_cards-nameplace'), //инпут название места
linkInput = formCardAdd.querySelector('.form__item_element_cards-link'); //ссылка на картинку
console.log(linkInput);

//функции

//функция открытия окна
function openPopup(popup) {
  popup.classList.add('popup_opened');
}
//функция закрытия окна
function closePopup(popup) {
  popup.classList.remove('popup_opened');
}
//функция заполнение карточками при загрузке
function addCard(cardName, cardurl) {
  //заполнение по шаблону
  const cardTemplate = document.querySelector('#card').content;
  const cardElement = cardTemplate.querySelector('.cards__item').cloneNode(true);
  cardElement.querySelector('.cards__item-name').textContent = cardName;
  cardElement.querySelector('.cards__image').src = cardurl;
  //добавление карточки в начало
  cardsList.prepend(cardElement);
  //для лайка
  let buttonLike = document.querySelector('.button_type_like');
  buttonLike.addEventListener('click', (evt) => {
          evt.target.classList.toggle('button_type_like-active');
      });
  // для удаления
  let buttonDelete = document.querySelector('.button_type_delete');
  buttonDelete.addEventListener('click', () => {
  const cardItem = buttonDelete.closest('.cards__item');
  cardItem.remove();
});

  //открытие изображения
  let cardImage = document.querySelector('.cards__image');

  cardImage.addEventListener('click', () => {
    let cardItemName = document.querySelector('.cards__item-name');
    console.log(cardItemName);
    let popupImageName = document.querySelector('.popup-image__caption');
    let popupImage = document.querySelector('.popup-image');
    buttonsClose[2].addEventListener('click', () => { //функция закрытия окна
      closePopup(imageOpenPopup); 
      console.log('dfdfdf');
    });
    popupImage.src = cardImage.src;
    popupImageName.textContent = cardItemName.textContent;
    openPopup(imageOpenPopup);
  });
}

//заполнение карточками
function cardsLoad() {
  for(let i = 0; i < cards.name.length; i++) {
    addCard(cards.name[i], cards.url[i]);
  }
}

// функция изменения имени при нажатии на кнопку
function changeProfile(evt) {
  evt.preventDefault(); 
  document.querySelector('.profile__name').textContent = nameInput.value; //profileName profileActivity глобальные не работает из-за квериселектор, не живая коллекция и данные не обновляются
  document.querySelector('.profile__activity').textContent = activityInput.value;
  closePopup(profileEditPopup);
}

// функция добавления карточки новой 
function newCard(evt) {
  evt.preventDefault(); 
  cards.name[cards.name.length] = cardnameInput.value;
  let newCardName = cards.name[cards.name.length-1];
  cards.url[cards.url.length] = linkInput.value;
  let newCardUrl = cards.url[cards.url.length-1];
  addCard(newCardName, newCardUrl);
  closePopup(cardsAddPopup);
}

//обработчики

//ообработка клика на кнопку редактирования профиля
buttonProfileEdit.addEventListener('click', () => {
  openPopup(profileEditPopup); //вызов ф-ии
  let profileName = document.querySelector('.profile__name').textContent; //получила имя
  let profileActivity = document.querySelector('.profile__activity').textContent; //получила деятельность
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
    closePopup(profileEditPopup);
  });
});


cardsLoad();
formProfileEdit.addEventListener('submit', changeProfile);
formCardAdd.addEventListener('submit', newCard);

