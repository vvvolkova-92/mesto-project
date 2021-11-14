import {cardsList, cardnameInput, linkInput} from '../components/utils.js'
import {loadProccess} from './utils'
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
}
// 5. Редактирование профиля
export function getEditUser (name, activity) {
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
}

// 10. Обновление аватара пользователя
export function getEditPhotoUser (url) {
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
}

// 9. Удаление  лайка
export function DeletelikesCard (cardId) {
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
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
}






