'use strict';

// ----------------------------------DOM--------------------------------

const overlay = document.querySelector('.overlay');
const modal = document.querySelector(".popup__openaccount");
const modalCloseBtn = document.querySelector(".popup__openaccount-closebtn");
const openModal = document.querySelectorAll(".open__modal");
const header = document.querySelector(".header");

// --------------------------------functions-------------------------

const toggleVisibilty = function (e) {
    modal.classList.toggle("hidden");
    overlay.classList.toggle('hidden');
    //console.log(e);
    e.preventDefault();
}
// ----------------------------------btns--------------------------------

openModal.forEach(btn => btn.addEventListener("click", toggleVisibilty));
modalCloseBtn.addEventListener("click", toggleVisibilty);

overlay.addEventListener("click", toggleVisibilty);
addEventListener("keydown", function (e) {
    if (e.key == 'Escape') toggleVisibilty();
});

const message = document.createElement('div');
message.classList.add('cookies');
message.innerHTML = 'we used cookied for improved functionality and analytics.<button class="menu__btn active btn__close-cookies">Got it</button>';
header.prepend(message);
// header.append(message.cloneNode(true));
document.querySelector(".btn__close-cookies").addEventListener("click", function () {
    // header.remove(message) that wrong
    // message.remove();
    // header.removeChild(message);
    message.parentElement.removeChild(message);
})