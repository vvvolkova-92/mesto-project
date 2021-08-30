

const profileButtonEdit  = document.querySelector('.button_type_edit'); // получила кнопку редактирования
const profileButtonClose = document.querySelector('.button_type_close-window'); //получила кнопку закрытия окна
const profilebuttonSave = document.querySelector('.button_type_save'); 
let profileName = document.querySelector('.profile__name').textContent; //получила имя
let profileActivity = document.querySelector('.profile__activity').textContent; //получила деятельность

//функция открытия-закрытия окна
function profileModalWindow () {
  const popup = document.querySelectorAll('.popup')[0];
  popup.classList.toggle('popup_opened');
  let nameInput = document.querySelector('.form__item_element_profile-name');
  nameInput.value = profileName;
  let ActivityInput = document.querySelector('.form__item_element_profile-activity');
  ActivityInput.value = profileActivity;
}

//функция открытия-закрытия окна
function cardsModalWindow () {
  const popup = document.querySelectorAll('.popup')[1];
  popup.classList.toggle('popup_opened');
  let nameInput = document.querySelector('.form__item_element_profile-name');
  nameInput.value = profileName;
  let ActivityInput = document.querySelector('.form__item_element_profile-activity');
  ActivityInput.value = profileActivity;
}

profileButtonEdit.addEventListener('click', profileModalWindow);
profileButtonClose.addEventListener('click', profileModalWindow);
