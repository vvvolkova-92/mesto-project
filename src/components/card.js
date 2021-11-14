import {openPopup, imageOpenPopup, closePopup, cardsAddPopup, popupImage, cardDeletePopup} from './modal.js'
import {cardnameInput, linkInput, cardsList, formCardAdd, profileName, loadProccess, formDeleteCard} from './utils.js'
import {uploadNewCard, getDeleteCard, likesCard, DeletelikesCard} from '../components/api.js'
const CastleCombe = new URL('../images/gallery/1-castle-combe.jpeg', import.meta.url);
const Clovelly = new URL('../images/gallery/2-clovelly.jpeg', import.meta.url);
const Dingle = new URL('../images/gallery/3-dingle.jpeg', import.meta.url);
const Westport = new URL('../images/gallery/4-westport.jpeg', import.meta.url);
const Helmsley = new URL('../images/gallery/5-Helmsley.jpeg', import.meta.url);
const Castleton = new URL('../images/gallery/6-Castleton.jpeg', import.meta.url);

//ф-ия создания карточки
function createCard(cardData) {
  const {name, link, likes, owner, _id} = cardData,
  cardTemplate = document.querySelector('#card').content,
  cardElement = cardTemplate.querySelector('.cards__item').cloneNode(true);
  cardElement.querySelector('.cards__item-name').textContent = name;
  const cardImage = cardElement.querySelector('.cards__image');
  cardImage.src = link;
  cardImage.alt = name;

  //like
  //7. Отображение количества лайков карточки
  const likeCounter = cardElement.querySelector('.cards__like-counter');
  likeCounter.textContent = likes.length;
  const buttonLike = cardElement.querySelector('.button_type_like');

  likes.forEach(like => {
    if(like._id === '77d27e8ae20a5b7b6471b42c') buttonLike.classList.add('button_type_like-active')
    else buttonLike.classList.remove('button_type_like-active');
  })

  buttonLike.addEventListener('click', (evt) => {
    evt.target.classList.toggle('button_type_like-active');
    if (buttonLike.classList.contains('button_type_like-active')) {
      likesCard(_id, cardData)
        .then(newlike => {
        likeCounter.textContent = newlike.likes.length;
        })
    }
    else //cнять лайк
    {
      DeletelikesCard(_id, cardData)
      .then(deletelikes => {
      likeCounter.textContent = deletelikes.likes.length;
      })
    }
  });
  
  //проверить пренадлежит ли мне карточка
  const buttonDelete = cardElement.querySelector('.button_type_delete');
  if(owner._id === '77d27e8ae20a5b7b6471b42c') buttonDelete.style.display = 'block';
//удаление

  buttonDelete.addEventListener('click', (evt) => {
    openPopup(cardDeletePopup);
    const cardItem = buttonDelete.closest('.cards__item');
    formDeleteCard.addEventListener('submit', () => {
      cardItem.remove();
      getDeleteCard(_id);
      closePopup(cardDeletePopup);
    });

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
  uploadNewCard(evt.submitter);
  const name = cardnameInput.value,
  link = linkInput.value,
  likes = [],
  owner = {_id: '77d27e8ae20a5b7b6471b42c'}, 
  _id = '',
  newCard = {name, link, likes, owner, _id};
  cardsList.prepend(createCard(newCard));
  formCardAdd.reset();
  const submitButton = formCardAdd.querySelector('.button_type_save');
  submitButton.disabled = true;
  closePopup(cardsAddPopup);
  loadProccess(true, evt.submitter,'');
}

export {createCard, addNewCard}

