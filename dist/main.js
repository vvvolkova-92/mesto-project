(()=>{"use strict";var e={989:(e,t,n)=>{e.exports=n.p+"9ab98b124f7cb62db2ae.jpeg"},404:(e,t,n)=>{e.exports=n.p+"a5d0a04aa098dc290ceb.jpeg"},916:(e,t,n)=>{e.exports=n.p+"69fb17a448288f26f4c1.jpeg"},22:(e,t,n)=>{e.exports=n.p+"f9f4cbd2179bc64b283f.jpeg"},248:(e,t,n)=>{e.exports=n.p+"d7f57e2c21cd08c85cf0.jpeg"},651:(e,t,n)=>{e.exports=n.p+"d1170ce5808d3002e1f4.jpeg"}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var c=t[r]={exports:{}};return e[r](c,c.exports,n),c.exports}n.m=e,n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.p="",n.b=document.baseURI||self.location.href,(()=>{var e=document.querySelector(".form__profile-edit"),t=document.querySelector(".form__card-add"),r=e.querySelector(".form__item_element_profile-name"),o=e.querySelector(".form__item_element_profile-activity"),c=t.querySelector(".form__item_element_cards-nameplace"),i=t.querySelector(".form__item_element_cards-link"),a=document.querySelector(".profile__name"),u=document.querySelector(".profile__activity"),l=document.querySelector(".cards__items"),d=function(e){var t=function t(n){document.removeEventListener("keydown",t),"Escape"===n.key&&y(e)};e.addEventListener("click",(function(n){var r=n.target.classList.contains("button_type_close-window"),o=n.target.classList.contains("popup");(r||o)&&(y(e),document.removeEventListener("keydown",t))})),document.addEventListener("keydown",t)},s=[{name:"Castle Combe",link:new URL(n(989),n.b)},{name:"Clovelly",link:new URL(n(404),n.b)},{name:"Dingle",link:new URL(n(916),n.b)},{name:"Westport",link:new URL(n(22),n.b)},{name:"Helmsley",link:new URL(n(248),n.b)},{name:"Castleton",link:new URL(n(651),n.b)}];function m(e){var t=e.name,n=e.link,r=document.querySelector("#card").content.querySelector(".cards__item").cloneNode(!0);r.querySelector(".cards__item-name").textContent=t,r.querySelector(".cards__item-name").alt=t,r.querySelector(".cards__image").src=n,r.querySelector(".button_type_like").addEventListener("click",(function(e){e.target.classList.toggle("button_type_like-active")}));var o=r.querySelector(".button_type_delete");o.addEventListener("click",(function(){o.closest(".cards__item").remove()}));var c=r.querySelector(".cards__image");return c.addEventListener("click",(function(){var e=o.closest(".cards__item").querySelector(".cards__item-name"),t=document.querySelector(".popup-image__caption");document.querySelector(".popup-image").src=c.src,t.textContent=e.textContent,v(f),d(f)})),r}var p=document.querySelector(".popup__profile-edit"),_=document.querySelector(".popup__card-add"),f=document.querySelector(".popup__image-open");function v(e){e.classList.add("popup_opened")}function y(e){e.classList.remove("popup_opened")}e.addEventListener("submit",(function(e){a.textContent=r.value,u.textContent=o.value,y(p)})),t.addEventListener("submit",(function(e){e.preventDefault();var n={name:c.value,link:i.value};l.prepend(m(n)),y(_),t.reset()}));var b="form__item_error",q=function(e,t){!function(e){return e.every((function(e){return e.validity.valid}))}(e)?t.disabled=!0:t.disabled=!1},S=document.querySelector(".button_type_edit"),L=document.querySelector(".button_type_add"),k=_.querySelector(".button_type_close-window"),E=f.querySelector(".button_type_close-window"),x=p.querySelector(".button_type_close-window");s.forEach((function(e){var t=m(e);l.append(t)})),r.value=a.textContent,o.value=u.textContent,k.addEventListener("click",(function(){y(_)})),E.addEventListener("click",(function(){y(f)})),x.addEventListener("click",(function(){y(p)})),S.addEventListener("click",(function(){v(p),d(p)})),L.addEventListener("click",(function(){v(_),d(_)})),Array.from(document.forms).forEach((function(e){!function(e){var t=Array.from(e.querySelectorAll(".form__item"));e.addEventListener("submit",(function(e){e.preventDefault()}));var n=e.querySelector(".button_type_save");t.forEach((function(e){e.addEventListener("input",(function(){(function(e){e.validity.valid?function(e){document.querySelector("#".concat(e.name,"-error")).textContent="",e.classList.remove(b)}(e):function(e){document.querySelector("#".concat(e.name,"-error")).textContent=e.validationMessage,e.classList.add(b)}(e)})(e),q(t,n)}))})),q(t,n)}(e)}))})()})();