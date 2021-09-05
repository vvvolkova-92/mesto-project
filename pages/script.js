//объявление переменных
const buttonProfileEdit = document.querySelector('.button_type_edit'), //получила кнопку редактирования
buttonCardsAdd = document.querySelector('.button_type_add'), //получила кнопку добавления карточки
profileEditPopup = document.querySelector('.popup__profile-edit'), // определила окно редактирования профайла
//модальные окна
cardsAddPopup = document.querySelector('.popup__card-add'), // определила окно редактирования 
imageOpenPopup = document.querySelector('.popup__image-open'), // картинка на весь экран
cardsList = document.querySelector('.cards__items');
//все кнопки закрытия
const buttonCloseCardsAddPopup = cardsAddPopup.querySelector('.button_type_close-window');
const buttonCloseImageOpenPopup = imageOpenPopup.querySelector('.button_type_close-window');
const buttonCloseProfileEditPopup = profileEditPopup.querySelector('.button_type_close-window');
//данные для карточек
const initialCards = [
  {name: 'Castle Combe', link: 'images/gallery/1-castle-combe.jpeg'},
  {name: 'Clovelly', link: 'images/gallery/2-clovelly.jpeg'},
  {name: 'Dingle', link: 'images/gallery/3-dingle.jpeg'},
  {name: 'Westport', link: 'images/gallery/4-westport.jpeg'},
  {name: 'Helmsley', link: 'images/gallery/5-Helmsley.jpeg'},
  {name: 'Castleton', link: 'images/gallery/6-Castleton.jpeg'}
];
//формы  и инпуты
const formProfileEdit = document.querySelector('.form__profile-edit'), // форма редактирования профайла
formCardAdd = document.querySelector('.form__card-add'), // форма добавления новой карточки
nameInput = formProfileEdit.querySelector('.form__item_element_profile-name'), //инпут имя
activityInput = formProfileEdit.querySelector('.form__item_element_profile-activity'), //инпут деятельности
cardnameInput = formCardAdd.querySelector('.form__item_element_cards-nameplace'), //инпут название места
linkInput = formCardAdd.querySelector('.form__item_element_cards-link'); //ссылка на картинку

//функции

//функция открытия окна
function openPopup(popup) {
  popup.classList.add('popup_opened');
}
//функция закрытия окна
function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

initialCards.forEach(cardData => {
  const card = createCard(cardData);
  cardsList.append(card);
});

function createCard(cardData) {
  const {name, link} = cardData,
  cardTemplate = document.querySelector('#card').content;
  cardElement = cardTemplate.querySelector('.cards__item').cloneNode(true);
  cardElement.querySelector('.cards__item-name').textContent = name;
  cardElement.querySelector('.cards__item-name').alt = name;
  cardElement.querySelector('.cards__image').src = link;
  //like
  const buttonLike = cardElement.querySelector('.button_type_like');
  buttonLike.addEventListener('click', (evt) => {
    evt.target.classList.toggle('button_type_like-active');
  });
//удаление
  const buttonDelete = cardElement.querySelector('.button_type_delete');
  buttonDelete.addEventListener('click', () => {
    const cardItem = buttonDelete.closest('.cards__item');
    cardItem.remove();
});
//открытие изображения
const cardImage = cardElement.querySelector('.cards__image');
cardImage.addEventListener('click', () => {
  const cardItem = buttonDelete.closest('.cards__item'),
  cardItemName = cardItem.querySelector('.cards__item-name'),
  popupImageName = document.querySelector('.popup-image__caption'),
  popupImage = document.querySelector('.popup-image');
  popupImage.src = cardImage.src;
  popupImageName.textContent = cardItemName.textContent;
  openPopup(imageOpenPopup);
});
return cardElement // возвращаем готовый элемент для вставки
}


// функция изменения имени при нажатии на кнопку
function changeProfile(evt) {
  evt.preventDefault(); 
  document.querySelector('.profile__name').textContent = nameInput.value;
  document.querySelector('.profile__activity').textContent = activityInput.value;
  closePopup(profileEditPopup);
}

// функция добавления карточки новой 
function newCard(evt) {
  evt.preventDefault(); 
  const name = cardnameInput.value,
  link = linkInput.value,
  newCard = {name, link};
  cardsList.prepend(createCard(newCard));
  closePopup(cardsAddPopup);
  cardnameInput.value = '';
  linkInput.value = '';
}

//обработчики

buttonCloseCardsAddPopup.addEventListener('click', () => { 
  closePopup(cardsAddPopup);
});

buttonCloseImageOpenPopup.addEventListener('click', () => { 
  closePopup(imageOpenPopup);
});

buttonCloseProfileEditPopup.addEventListener('click', () => { 
  closePopup(profileEditPopup);
});


//ообработка клика на кнопку редактирования профиля
buttonProfileEdit.addEventListener('click', () => {
  openPopup(profileEditPopup); //вызов ф-ии
  let profileName = document.querySelector('.profile__name').textContent; //получила имя
  let profileActivity = document.querySelector('.profile__activity').textContent; //получила деятельность
  let profileNameForm = document.querySelector('.form__item_element_profile-name');
  profileNameForm.value = profileName; //вывод имени
  let profileActivityForm = document.querySelector('.form__item_element_profile-activity');
  profileActivityForm.value = profileActivity; //вывод рода деятельности
});

//ообработка клика на кнопку добавления карточки
buttonCardsAdd.addEventListener('click', () => {
  openPopup(cardsAddPopup); //вызов ф-ии
});



formProfileEdit.addEventListener('submit', changeProfile);
formCardAdd.addEventListener('submit', newCard);

