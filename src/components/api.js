import {cardsList, cardnameInput, linkInput} from '../components/utils.js'
import {createCard} from '../components/card.js'
import {loadProccess,buttonProfileEdit, buttonCardsAdd, buttonProfilePhotoEdit} from './utils'
const config = {
  baseUrl: 'https://nomoreparties.co/v1/plus-cohort-3',
  headers: {
    authorization: '34ec8cb0-1bba-4545-a356-d16d36203124',
    ContentType: 'application/json'
  }
}
//3. Загрузка информации о пользователе с сервера
export function getUserData () {
  return fetch(`${config.baseUrl}/users/me`, {
    headers: {
      authorization: config.headers.authorization 
    }
  })
    .then(res => {
      if(res.ok) return res.json()
      return Promise.reject(res.status)
    })
    .then(result => {
      return result
    })
    .catch(err => console.log(`Ошибочка вышла: ${err}`))
}
// 4. Загрузка карточек с сервера
export function getInitialCards () {
  return fetch(`${config.baseUrl}/cards`, {
    headers: {
      authorization: config.headers.authorization 
    }
  })
    .then(res => {
      if(res.ok) return res.json()
      return Promise.reject(res.status)
    })
    .then(card => {
      card.forEach(cardData => {
        const card = createCard(cardData);
        cardsList.append(card);
      })
    })
    .catch(err => console.log(`Ошибочка вышла: ${err}`))
}
// 5. Редактирование профиля
export function getEditUser (name, activity, button) {
  return fetch(`${config.baseUrl}/users/me`, {
    method: 'PATCH',
    headers: {
      authorization: config.headers.authorization,
      'Content-Type': config.headers.ContentType,  
    },
    body: JSON.stringify({
      name: name,
      about: activity,
    })
  })
    .then(res => {
      if(res.ok) return res.json()
      return Promise.reject(res.status)
    })
    .then(newData => {
      return newData
    })
    .catch(err => console.log(`Ошибочка вышла: ${err}`))
    // 11.1 При редактировании профиля уведомите пользователя о процессе загрузки, 
    //поменяв текст кнопки на: «Сохранение...», 
    //пока данные загружаются
    .finally(() => loadProccess(false, button, 'Сохранить'))
}

// 10. Обновление аватара пользователя
export function getEditPhotoUser (url, profileAvatar) {
  return fetch(`${config.baseUrl}/users/me/avatar`, {
    method: 'PATCH',
    headers: {
      authorization: config.headers.authorization,
      'Content-Type': config.headers.ContentType,  
    },
    body: JSON.stringify({
      avatar: url,
    })
  })
    .then(res => {
      if(res.ok) return res.json()
      return Promise.reject(res.status)
    })
    .then(newPhoto => {
      profileAvatar.src = newPhoto.avatar;
      console.dir(newPhoto)
    })
    .catch(err => console.log(`Ошибочка вышла: ${err}`))
}


// 6. Добавление новой карточки
export function uploadNewCard (button) {
  return fetch(`${config.baseUrl}/cards`, {
    method: 'POST',
    headers: {
      authorization: config.headers.authorization,
      'Content-Type': config.headers.ContentType,  
    },
    body: JSON.stringify({
      name: cardnameInput.value,
      link: linkInput.value,
    })
  })
    .then(res => {
      if(res.ok) return res.json()
      return Promise.reject(res.status)
    })
    .catch(err => console.log(`Ошибочка вышла: ${err}`))
    // 11.2 Сделайте то же самое для формы добавления новой карточки 
    .finally(() => loadProccess(false, button, 'Создать'))
}

// 8. Удаление карточки
export function getDeleteCard (cardId) {
  return fetch(`${config.baseUrl}/cards/${cardId}`, {
    method: 'DELETE',
    headers: {
      authorization: config.headers.authorization,
      'Content-Type': config.headers.ContentType,  
    },
  })
    .then(res => {
      if(res.ok) return res.json()
      return Promise.reject(res.status)
    })
    .then(res => console.log(res))
    .catch(err => console.log(`Ошибочка вышла: ${err}`))
}

// 9. Постановка  лайка
export function likesCard (cardId, cardData) {
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method: 'PUT',
    headers: {
      authorization: config.headers.authorization,
      'Content-Type': config.headers.ContentType,  
    },
    body: JSON.stringify({
      likes: cardData
    })
  })
    .then(res => {
      if(res.ok) return res.json()
      return Promise.reject(res.status)
    })
    .then(likes => {
      return likes //попробовать при вызове вытянуть то, что мне надо (наверное =)
    })
    .catch(err => console.log(`Ошибочка вышла: ${err}`))
}

// 9. Удаление  лайка
export function DeletelikesCard (cardId, cardData) {
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method: 'DELETE',
    headers: {
      authorization: config.headers.authorization,
      'Content-Type': config.headers.ContentType,  
    },
    body: JSON.stringify({
      likes: cardData
    })
  })
    .then(res => {
      if(res.ok) return res.json()
      return Promise.reject(res.status)
    })
    .then(deletelikes => {
      return deletelikes //попробовать при вызове вытянуть то, что мне надо (наверное =)
    })
    .catch(err => console.log(`Ошибочка вышла: ${err}`))
}






