(()=>{"use strict";function t(t){var o=t.name,r=t.link,c=t.likes,i=t.owner,a=t._id,u=document.querySelector("#card").content.querySelector(".cards__item").cloneNode(!0);u.querySelector(".cards__item-name").textContent=o;var s=u.querySelector(".cards__image");s.src=r,s.alt=o;var l=u.querySelector(".cards__like-counter");l.textContent=c.length;var d=u.querySelector(".button_type_like");c.forEach((function(t){"77d27e8ae20a5b7b6471b42c"===t._id?d.classList.add("button_type_like-active"):d.classList.remove("button_type_like-active")})),d.addEventListener("click",(function(o){o.target.classList.toggle("button_type_like-active"),d.classList.contains("button_type_like-active")?function(t,o){return fetch("".concat(e,"/cards/likes/").concat(t),{method:"PUT",headers:{authorization:n.authorization,"Content-Type":n.ContentType},body:JSON.stringify({likes:o})}).then((function(t){return t.ok?t.json():Promise.reject(t.status)})).then((function(t){return t})).catch((function(t){return console.log("Ошибка при лайке: ".concat(t))}))}(a,t).then((function(t){l.textContent=t.likes.length})):function(t,o){return fetch("".concat(e,"/cards/likes/").concat(t),{method:"DELETE",headers:{authorization:n.authorization,"Content-Type":n.ContentType},body:JSON.stringify({likes:o})}).then((function(t){return t.ok?t.json():Promise.reject(t.status)})).then((function(t){return t})).catch((function(t){return console.log("Ошибочка вышла: ".concat(t))}))}(a,t).then((function(t){l.textContent=t.likes.length}))}));var m=u.querySelector(".button_type_delete");return"77d27e8ae20a5b7b6471b42c"===i._id&&(m.style.display="block"),m.addEventListener("click",(function(t){j(T);var o=m.closest(".cards__item");v.addEventListener("submit",(function(){var t;o.remove(),t=a,fetch("".concat(e,"/cards/").concat(t),{method:"DELETE",headers:{authorization:n.authorization,"Content-Type":n.ContentType}}).then((function(t){return t.ok?t.json():Promise.reject(t.status)})).catch((function(t){return console.log("Ошибочка вышла: ".concat(t))})),z(T)}))})),s.addEventListener("click",(function(){m.closest(".cards__item");var t=document.querySelector(".popup-image__caption");L.src=r,t.textContent=o,L.alt=o,j(C)})),u}var e="https://nomoreparties.co/v1/plus-cohort-3",n={authorization:"34ec8cb0-1bba-4545-a356-d16d36203124",ContentType:"application/json"},o=document.querySelector(".form__profile-edit"),r=document.querySelector(".form__card-add"),c=o.querySelector(".form__item_element_profile-name"),i=o.querySelector(".form__item_element_profile-activity"),a=r.querySelector(".form__item_element_cards-nameplace"),u=r.querySelector(".form__item_element_cards-link"),s=document.querySelector(".profile__name"),l=document.querySelector(".profile__activity"),d=document.querySelector(".profile__photo"),m=document.querySelector(".form__profile-photo-edit"),f=m.querySelector(".form__item_element_photo-link"),_=document.querySelector(".cards__items"),p=document.querySelector(".button_type_edit"),y=document.querySelector(".button_type_add"),h=document.querySelector(".button_type_edit-photo"),v=document.querySelector(".form__card-delete");function b(t){"Escape"===t.key&&z(document.querySelector(".popup_opened"))}function S(t,e,n){t&&(e.textContent="Сохранение.."),t||(e.textContent=n)}var k=document.querySelector(".popup__profile-edit"),q=document.querySelector(".popup__card-add"),C=document.querySelector(".popup__image-open"),L=document.querySelector(".popup-image"),g=document.querySelectorAll(".popup"),E=document.querySelector(".popup__profile-photo-edit"),T=document.querySelector(".popup__card-delete");function j(t){t.classList.add("popup_opened"),document.addEventListener("keydown",b)}function z(t){t.classList.remove("popup_opened"),document.removeEventListener("keydown",b)}o.addEventListener("submit",(function(t){var o,r,a;(o=c.value,r=i.value,a=t.submitter,fetch("".concat(e,"/users/me"),{method:"PATCH",headers:{authorization:n.authorization,"Content-Type":n.ContentType},body:JSON.stringify({name:o,about:r})}).then((function(t){return t.ok?t.json():Promise.reject(t.status)})).then((function(t){return t})).catch((function(t){return console.log("Ошибочка вышла: ".concat(t))})).finally((function(){return S(!1,a,"Сохранить")}))).then((function(t){s.textContent=t.name,l.textContent=t.about,f.value=t.avatar})),z(k),console.log(t.submitter),S(!0,t.submitter,"")})),r.addEventListener("submit",(function(o){var c;o.preventDefault(),c=o.submitter,fetch("".concat(e,"/cards"),{method:"POST",headers:{authorization:n.authorization,"Content-Type":n.ContentType},body:JSON.stringify({name:a.value,link:u.value})}).then((function(t){return t.ok?t.json():Promise.reject(t.status)})).catch((function(t){return console.log("Ошибочка вышла: ".concat(t))})).finally((function(){return S(!1,c,"Создать")}));var i={name:a.value,link:u.value,likes:[],owner:{_id:"77d27e8ae20a5b7b6471b42c"},_id:""};_.prepend(t(i)),r.reset(),r.querySelector(".button_type_save").disabled=!0,z(q),S(!0,o.submitter,"")})),m.addEventListener("submit",(function(t){!function(t,o,r){fetch("".concat(e,"/users/me/avatar"),{method:"PATCH",headers:{authorization:n.authorization,"Content-Type":n.ContentType},body:JSON.stringify({avatar:t})}).then((function(t){return t.ok?t.json():Promise.reject(t.status)})).then((function(t){o.src=t.avatar})).catch((function(t){return console.log("Ошибочка вышла: ".concat(t))})).finally((function(){return S(!1,r,"Сохранить")}))}(f.value,d,t.submitter),z(E),S(!0,t.submitter,"")}));var x,P=function(t,e){!function(t){return t.every((function(t){return t.validity.valid}))}(t)?e.disabled=!0:e.disabled=!1};g.forEach((function(t){t.addEventListener("click",(function(e){(e.target.classList.contains("popup_opened")||e.target.classList.contains("button_type_close-window"))&&z(t)}))})),document.addEventListener("mouseover",(function(t){t.target.classList.contains("profile__edit-photo")||t.target.classList.contains("button_type_edit-photo")?h.style.visibility="visible":h.style.visibility="hidden"})),h.addEventListener("click",(function(){j(E)})),p.addEventListener("click",(function(){j(k)})),y.addEventListener("click",(function(){j(q)})),x={inputSelector:".form__item",buttonSelector:".button_type_save",errorClass:"form__item_error"},Array.from(document.forms).forEach((function(t){!function(t,e){var n=Array.from(t.querySelectorAll(e.inputSelector));t.addEventListener("submit",(function(t){t.preventDefault()}));var o=t.querySelector(e.buttonSelector);n.forEach((function(t){t.addEventListener("input",(function(){(function(t,e){t.validity.valid?function(t,e){document.querySelector("#".concat(t.name,"-error")).textContent="",t.classList.remove(e.errorClass)}(t,e):function(t,e){document.querySelector("#".concat(t.name,"-error")).textContent=t.validationMessage,t.classList.add(e.errorClass)}(t,e)})(t,e),P(n,o)}))})),P(n,o)}(t,x)})),fetch("".concat(e,"/users/me"),{headers:{authorization:n.authorization}}).then((function(t){return t.ok?t.json():Promise.reject(t.status)})).then((function(t){return t})).catch((function(t){return console.log("Ошибочка вышла: ".concat(t))})).then((function(t){s.textContent=t.name,l.textContent=t.about,d.src=t.avatar,c.value=t.name,i.value=t.about,o.querySelector(".button_type_save").disabled=!1})),fetch("".concat(e,"/cards"),{headers:{authorization:n.authorization}}).then((function(t){return t.ok?t.json():Promise.reject(t.status)})).then((function(e){e.forEach((function(e){var n=t(e);_.append(n)}))})).catch((function(t){return console.log("Ошибочка вышла: ".concat(t))}))})();