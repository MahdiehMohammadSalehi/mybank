'use strict';

// ----------------------------------DOM--------------------------------

const overlay = document.querySelector('.overlay');
const modal = document.querySelector(".popup__openaccount");
const modalCloseBtn = document.querySelector(".popup__openaccount-closebtn");
const openModal = document.querySelectorAll(".open__modal");
const header = document.querySelector(".header");
const learnMore=document.querySelector(".underNav__learnmore-btn");
const section1=document.getElementById("section__1");
const tabsContainer=document.querySelector(".operation__details-tabs");
const tabs= document.querySelectorAll(".operation__details-tab");

// --------------------------------functions-------------------------

const toggleVisibilty = function (e) {
    modal.classList.toggle("hidden");
    overlay.classList.toggle('hidden');  
    e.preventDefault();
}
// ----------------------------------btns--------------------------------

openModal.forEach(btn => btn.addEventListener("click", toggleVisibilty));
modalCloseBtn.addEventListener("click", toggleVisibilty);

overlay.addEventListener("click", toggleVisibilty);

document.addEventListener("keydown", function (e) {
    if (e.key == 'Escape'&& !overlay.classList.contains("hidden")) toggleVisibilty();
});


// ----------------------------------show cookie message: --------------------------------

/*

const message = document.createElement('div');
message.classList.add('cookies');
message.innerHTML = 'we used cookied for improved functionality and analytics.<button class="menu__btn active btn__close-cookies">Got it</button>';
header.prepend(message);
// header.append(message.cloneNode(true));
document.querySelector(".btn__close-cookies").addEventListener("click", function () {
    // message.remove();
    message.parentElement.removeChild(message);
})

*/


// ---------------------------------- learn more button scrolling --------------------------------

learnMore.addEventListener("click",function(e){
   window.scrollTo({
    left:section1.getBoundingClientRect().x+window.pageXOffset ,
    top:section1.getBoundingClientRect().y+window.pageYOffset ,
    behavior:"smooth",
   })
   //new Browser
    section1.scrollIntoView({behavior:"smooth"})
})

// ---------------------------------- page navigation --------------------------------------------

document.querySelector(".menu").addEventListener("click",function(e){
    e.preventDefault();
    console.log(e);
    
    if(e.target.classList.contains('link')){
    const id=e.target.getAttribute("href");
    console.log(id);
    
    document.querySelector(id).scrollIntoView({behavior:"smooth"});
    }});


// ---------------------------------- tabbed content ---------------------------------------------

tabsContainer.addEventListener("click",function(e){
  
    const clicked=e.target.classList.contains("operation__details-btns");
    
    //guard clause
    if (!clicked) return;

    if(clicked){
        tabs.forEach(tab=>tab.classList.remove("selected_btn"));
        e.target.classList.add("selected_btn");
    }

})





