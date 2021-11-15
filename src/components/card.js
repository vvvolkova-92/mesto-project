import {openPopup, closePopup} from './modal.js'
import {loadProccess} from './utils.js'
import {uploadNewCard, deleteCard, likesCard, deletelikesCard} from '../components/api.js'
import {userId} from '../pages/index.js'
import {formCardAdd, cardnameInput, linkInput, cardsList, cardsAddPopup,
  imageOpenPopup, popupImage, popupImageName, addSubmitButton} from './constants.js'

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

    if (!buttonLike.classList.contains('button_type_like-active')) {
      likesCard(_id)
        .then(newlike => {
        likeCounter.textContent = newlike.likes.length;
        evt.target.classList.add('button_type_like-active');
        })
        .catch(err => console.log(`Ошибка при лайке: ${err}`))
    }
    else //cнять лайк
    {
      deletelikesCard(_id)
      .then(deletelikes => {
      likeCounter.textContent = deletelikes.likes.length;
      evt.target.classList.remove('button_type_like-active');
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

});
}

// функция добавления карточки новой 
function addNewCard(evt) {
  evt.preventDefault(); 
  uploadNewCard(cardnameInput.value, linkInput.value)
    .then(res => {
      cardsList.prepend(createCard(res));
      formCardAdd.reset();
      addSubmitButton.disabled = true;
      closePopup(cardsAddPopup);
    })
    .catch(err => console.log(`Ошибочка вышла: ${err}`))
    // 11.2 Сделайте то же самое для формы добавления новой карточки 
    .finally(() => loadProccess(false, evt.submitter, 'Создать'))
  loadProccess(true, evt.submitter,'');

}

export {createCard, addNewCard}