import {openPopup, imageOpenPopup, closePopup, cardsAddPopup} from './modal.js'
import {closeListeners, cardnameInput, linkInput, cardsList, formCardAdd} from './utils.js'
//данные для карточек
const initialCards = [
  {name: 'Castle Combe', link: 'images/gallery/1-castle-combe.jpeg'},
  {name: 'Clovelly', link: 'images/gallery/2-clovelly.jpeg'},
  {name: 'Dingle', link: 'images/gallery/3-dingle.jpeg'},
  {name: 'Westport', link: 'images/gallery/4-westport.jpeg'},
  {name: 'Helmsley', link: 'images/gallery/5-Helmsley.jpeg'},
  {name: 'Castleton', link: 'images/gallery/6-Castleton.jpeg'}
];

//ф-ия создания карточки
function createCard(cardData) {
  const {name, link} = cardData,
  cardTemplate = document.querySelector('#card').content,
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
  closeListeners(imageOpenPopup);
});
return cardElement // возвращаем готовый элемент для вставки
}

// функция добавления карточки новой 
function newCard(evt) {
  evt.preventDefault(); 
  const name = cardnameInput.value,
  link = linkInput.value,
  newCard = {name, link};
  cardsList.prepend(createCard(newCard));
  closePopup(cardsAddPopup);
  formCardAdd.reset();
}

export {initialCards, createCard, newCard}