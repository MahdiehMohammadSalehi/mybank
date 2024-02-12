'use strict';

// ----------------------------------DOM--------------------------------

const overlay = document.querySelector('.overlay');
const modal = document.querySelector(".popup__openaccount");
const modalCloseBtn = document.querySelector(".popup__openaccount-closebtn");
const openModal = document.querySelectorAll(".open__modal");

// --------------------------------functions-------------------------

const toggleVisibilty = function (e) {
    modal.classList.toggle("hidden");
    overlay.classList.toggle('hidden');
    console.log(e);
    e.preventDefault();
}
// ----------------------------------btns--------------------------------

openModal.forEach(btn => btn.addEventListener("click", toggleVisibilty));
modalCloseBtn.addEventListener("click", toggleVisibilty);

overlay.addEventListener("click", toggleVisibilty);
addEventListener("keydown", function (e) {
    if (e.key == 'Escape') toggleVisibilty();
});