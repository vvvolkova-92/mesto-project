const buttonEdit  = document.querySelector('.button_type_edit'); // получила кнопку редактирования
const buttonClose = document.querySelector('.button_type_close-window'); //получила кнопку закрытия окна
let profileName = document.querySelector('.profile__name').textContent; //получила имя
let profileActivity = document.querySelector('.profile__activity').textContent; //получила деятельность

//функция открытия-закрытия окна
function ModalWindow () {
  const popup = document.querySelector('.popup');
  popup.classList.toggle('popup_opened');
  let profileNameForm = document.querySelector('.form__item_element_profile-name');
  profileNameForm.value = profileName;
  let profileActivityForm = document.querySelector('.form__item_element_profile-activity');
  profileActivityForm.value = profileActivity;
}



buttonEdit.addEventListener('click', ModalWindow);
buttonClose.addEventListener('click', ModalWindow);