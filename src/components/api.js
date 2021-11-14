const config = {
  baseUrl: 'https://nomoreparties.co/v1/plus-cohort-3',
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
    headers: config.headers
  })
    .then(checkResponse)
}
// 4. Загрузка карточек с сервера
export function getInitialCards () {
  return fetch(`${config.baseUrl}/cards`, {
    headers: config.headers
  })
    .then(checkResponse)
}
// 5. Редактирование профиля
export function editUser (name, activity) {
  return fetch(`${config.baseUrl}/users/me`, {
    method: 'PATCH',
    headers: config.headers,
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
    headers: config.headers,
    body: JSON.stringify({
      avatar: url,
    })
  })
  .then(checkResponse)
}

// 6. Добавление новой карточки
export function uploadNewCard (name, link) {
  return fetch(`${config.baseUrl}/cards`, {
    method: 'POST',
    headers: config.headers,
    body: JSON.stringify({
      name: name,
      link: link,
    })
  })
  .then(checkResponse)

}

// 8. Удаление карточки
export function deleteCard (cardId) {
  return fetch(`${config.baseUrl}/cards/${cardId}`, {
    method: 'DELETE',
    headers: config.headers,
  })
  .then(checkResponse)
}

// 9. Постановка  лайка
export function likesCard (cardId, cardData) {
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method: 'PUT',
    headers: config.headers,
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
    headers: config.headers,
  })
  .then(checkResponse)
}






