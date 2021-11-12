import {openPopup, imageOpenPopup, closePopup, cardsAddPopup, popupImage} from './modal.js'
import {cardnameInput, linkInput, cardsList, formCardAdd} from './utils.js'
import {uploadNewCard} from '../components/api.js'
const CastleCombe = new URL('../images/gallery/1-castle-combe.jpeg', import.meta.url);
const Clovelly = new URL('../images/gallery/2-clovelly.jpeg', import.meta.url);
const Dingle = new URL('../images/gallery/3-dingle.jpeg', import.meta.url);
const Westport = new URL('../images/gallery/4-westport.jpeg', import.meta.url);
const Helmsley = new URL('../images/gallery/5-Helmsley.jpeg', import.meta.url);
const Castleton = new URL('../images/gallery/6-Castleton.jpeg', import.meta.url);

//ф-ия создания карточки
function createCard(cardData) {
  const {name, link} = cardData,
  cardTemplate = document.querySelector('#card').content,
  cardElement = cardTemplate.querySelector('.cards__item').cloneNode(true);
  cardElement.querySelector('.cards__item-name').textContent = name;
  const cardImage = cardElement.querySelector('.cards__image');
  cardImage.src = link;
  cardImage.alt = name;
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
cardImage.addEventListener('click', () => {
  const cardItem = buttonDelete.closest('.cards__item'),
  popupImageName = document.querySelector('.popup-image__caption');
  popupImage.src = link;
  popupImageName.textContent = name;
  popupImage.alt = name;
  openPopup(imageOpenPopup);
});
return cardElement // возвращаем готовый элемент для вставки
}

// функция добавления карточки новой 
function addNewCard(evt) {
  evt.preventDefault(); 
  uploadNewCard();
  const name = cardnameInput.value,
  link = linkInput.value,
  newCard = {name, link};
  cardsList.prepend(createCard(newCard));
  closePopup(cardsAddPopup);
  formCardAdd.reset();
  const submitButton = formCardAdd.querySelector('.button_type_save');
  submitButton.disabled = true;
}

export {createCard, addNewCard}