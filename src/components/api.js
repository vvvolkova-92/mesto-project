import {profileName, profileActivity, profileAvatar, cardsList, nameInput, activityInput, formProfileEdit, cardnameInput, linkInput} from '../components/utils.js'
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
export function getEditUser () {
  return fetch(`${config.baseUrl}/users/me`, {
    method: 'PATCH',
    headers: {
      authorization: config.headers.authorization,
      'Content-Type': config.headers.ContentType,  
    },
    body: JSON.stringify({
      name: nameInput.value,
      about: activityInput.value,
    })
  })
    .then(res => {
      if(res.ok) return res.json()
      return Promise.reject(res.status)
    })
    .then(newData => {
      profileName.textContent = newData.name;
      profileActivity.textContent = newData.about;
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
    .then(newCard => {
      console.log(newCard + ' добавлена');
    })
    .catch(err => console.log(`Ошибочка вышла: ${err}`))
}


