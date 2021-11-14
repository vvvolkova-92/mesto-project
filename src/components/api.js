const config = {
  baseUrl: 'https://nomoreparties.co/v1/plus-cohort-3',
  //если использовать headers: config.headers все ломается и не работает
  headers: {
    authorization: '34ec8cb0-1bba-4545-a356-d16d36203124',
    ContentType: 'application/json'
  }
}
function checkResponse(res) {
  if(res.ok) return res.json()
  return Promise.reject(res.status)
}

//3. Загрузка информации о пользователе с сервера
export function getUserData () {
  return fetch(`${config.baseUrl}/users/me`, {
    headers: {
      authorization: config.headers.authorization 
    }
  })
    .then(checkResponse)
}
// 4. Загрузка карточек с сервера
export function getInitialCards () {
  return fetch(`${config.baseUrl}/cards`, {
    headers: {
      authorization: config.headers.authorization 
    }
  })
  .then(checkResponse)
}
// 5. Редактирование профиля
export function editUser (name, activity) {
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
    .then(checkResponse)
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
  .then(checkResponse)
}

// 6. Добавление новой карточки
export function uploadNewCard (cardName, cardLink) {
  return fetch(`${config.baseUrl}/cards`, {
    method: 'POST',
    headers: {
      authorization: config.headers.authorization,
      'Content-Type': config.headers.ContentType,  
    },
    body: JSON.stringify({
      name: cardName,
      link: cardLink,
    })
  })
  .then(checkResponse)

}

// 8. Удаление карточки
export function deleteCard (cardId) {
  return fetch(`${config.baseUrl}/cards/${cardId}`, {
    method: 'DELETE',
    headers: {
      authorization: config.headers.authorization,
      'Content-Type': config.headers.ContentType,  
    },
  })
  .then(checkResponse)
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
  .then(checkResponse)
}

// 9. Удаление  лайка
export function deletelikesCard (cardId) {
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method: 'DELETE',
    headers: {
      authorization: config.headers.authorization,
      'Content-Type': config.headers.ContentType,  
    },
  })
  .then(checkResponse)
}
