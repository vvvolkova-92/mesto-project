import {profileName, profileActivity, profileAvatar, cardsList, formProfileEdit, cardnameInput, linkInput, nameInput, activityInput} from '../components/utils.js'
import {createCard} from '../components/card.js'
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
      //передать данные профайла 
      profileName.textContent = result.name //вывод имени
      profileActivity.textContent = result.about //вывод рода деятельности
      profileAvatar.src = result.avatar //аватар
      nameInput.value = result.name;
      activityInput.value = result.about;
      const submitButton = formProfileEdit.querySelector('.button_type_save');
      submitButton.disabled = false;
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
    .then(newData => {
      //подумать как без экспорта этих переменных
      //передавать значение
      profileName.textContent = newData.name;
      profileActivity.textContent = newData.about;
      name = newData.name;
      activity = newData.about;
    })
    .catch(err => console.log(`Ошибочка вышла: ${err}`))
}

// 6. Добавление новой карточки
export function uploadNewCard () {
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






