import {openPopup, imageOpenPopup, closePopup, cardsAddPopup, popupImageName, cardDeletePopup} from './modal.js'
import {cardnameInput, linkInput, cardsList, formCardAdd, profileName, loadProccess, formDeleteCard} from './utils.js'
import {uploadNewCard, deleteCard, likesCard, deletelikesCard} from '../components/api.js'
import {userId} from '../pages/index.js'

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
    if(like._id === userId) buttonLike.classList.add('button_type_like-active')
    else buttonLike.classList.remove('button_type_like-active');
  })

  buttonLike.addEventListener('click', (evt) => {
    evt.target.classList.toggle('button_type_like-active');
    if (buttonLike.classList.contains('button_type_like-active')) {
      likesCard(_id)
        .then(newlike => {
        likeCounter.textContent = newlike.likes.length;
        })
        .catch(err => console.log(`Ошибка при лайке: ${err}`))
    }
    else //cнять лайк
    {
      deletelikesCard(_id)
      .then(deletelikes => {
      likeCounter.textContent = deletelikes.likes.length;
      })
      .catch(err => console.log(`Ошибка при лайке: ${err}`))
    }
  });
  //проверить пренадлежит ли мне карточка
  const buttonDelete = cardElement.querySelector('.button_type_delete');
  if(owner._id === userId) buttonDelete.style.display = 'block';
//удаление
    removeCard(cardElement, cardData);
//открытие изображения
cardImage.addEventListener('click', () => {
  const cardItem = buttonDelete.closest('.cards__item');
  popupImage.src = link;
  popupImageName.textContent = name;
  popupImage.alt = name;
  openPopup(imageOpenPopup);
});
return cardElement // возвращаем готовый элемент для вставки
}

function removeCard(cardElement, cardData) {
  const buttonDelete = cardElement.querySelector('.button_type_delete');
  buttonDelete.addEventListener('click', (evt) => {
    const deleteId = cardData._id;
    const cardElement = buttonDelete.closest('.cards__item');
    deleteCard(deleteId)
      .then( () => {
        cardElement.remove();
      })
      .catch(err => console.log(`Ошибочка вышла: ${err.status}`))
    closePopup(cardDeletePopup);
});
}

// функция добавления карточки новой 
function addNewCard(evt) {
  evt.preventDefault(); 
  uploadNewCard(cardnameInput, linkInput)
    .then(res => {
      const name = res.name,
      link = res.link,
      likes = res.likes,
      owner = res.owner, 
      _id = res._id,
      newCard = {name, link, likes, owner, _id};
      cardsList.prepend(createCard(newCard));
      formCardAdd.reset();
      const submitButton = formCardAdd.querySelector('.button_type_save');
      submitButton.disabled = true;
    })
    .catch(err => console.log(`Ошибочка вышла: ${err}`))
    // 11.2 Сделайте то же самое для формы добавления новой карточки 
    .finally(() => loadProccess(false, evt.submitter, 'Создать'))
  loadProccess(true, evt.submitter,'');
  closePopup(cardsAddPopup);
}

export {createCard, addNewCard}

