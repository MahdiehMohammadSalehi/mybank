'use strict';

// ----------------------------------DOM--------------------------------

const overlay = document.querySelector('.overlay');
const modal = document.querySelector(".popup__openaccount");
const modalCloseBtn = document.querySelector(".popup__openaccount-closebtn");
const openModal = document.querySelectorAll(".open__modal");
const header = document.querySelector(".header");
const learnMore = document.querySelector(".underNav__learnmore-btn");
const section1 = document.getElementById("section__1");
const tabsContainer = document.querySelector(".operation__details-tabs");
const tabs = document.querySelectorAll(".operation__details-tab");
const operationTexts = document.querySelectorAll(".operation_details-text");
const underNav = document.querySelector(".underNav");
const sections = document.querySelectorAll(".section");
const nav = document.querySelector(".navigator");
// const img=document.querySelectorAll(".feature__details-img");
const images = document.querySelectorAll("img[data-src]");
const slides = document.querySelectorAll(".slide");
const btnLeft = document.querySelector(".btn_left");
const btnRight = document.querySelector(".btn_right");

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
    if (e.key == 'Escape' && !overlay.classList.contains("hidden")) toggleVisibilty();
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

learnMore.addEventListener("click", function (e) {
    window.scrollTo({
        left: section1.getBoundingClientRect().x + window.pageXOffset,
        top: section1.getBoundingClientRect().y + window.pageYOffset,
        behavior: "smooth",
    })
    //new Browser
    section1.scrollIntoView({ behavior: "smooth" })
})

// ---------------------------------- page navigation --------------------------------------------

document.querySelector(".menu").addEventListener("click", function (e) {
    e.preventDefault();

    if (e.target.classList.contains('link')) {
        const id = e.target.getAttribute("href");
        document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    }
});


// ---------------------------------- tabbed content ---------------------------------------------

tabsContainer.addEventListener("click", function (e) {

    const clicked = e.target.classList.contains("operation__details-tab");
    // const clicked = e.target.closest(".operation__details-tab");

    //guard clause
    if (!clicked) return;

    tabs.forEach(tab => tab.classList.remove("selected_btn"));
    e.target.classList.add("selected_btn");

    //display content related to tab
    operationTexts.forEach(text => text.classList.remove("selected_text"));
    document.querySelector(`.operation__content-${e.target.dataset.num}`).classList.add("selected_text");


})

// ---------------------------------- fade in/out nav ---------------------------------------------
const handleHover = function (e) {
    if (e.target.classList.contains("link")) {
        const link = e.target;
        const siblings = link.closest(".navigator").querySelectorAll(".link");
        const logo = link.closest(".navigator").querySelector(".logo");
        siblings.forEach(el => {
            if (el !== link)
                el.style.opacity = this;
        })
        logo.style.opacity = this;
    }
}

nav.addEventListener("mouseover", handleHover.bind(0.5))
nav.addEventListener("mouseout", handleHover.bind(1))

//--------------------------------- sticky nav -----------------------------------
//scroll equal more than threshold cause isIntersecting changed to True

const navHeight = getComputedStyle(header).height;
// const navHeight = header.getBoundingClientRect().height;

const sticky = function (entries) {
    const { isIntersecting } = entries[0];
    if (!isIntersecting)
        header.classList.add("sticky")
    else
        header.classList.remove("sticky")
}
const headerObserver = new IntersectionObserver(sticky, {
    root: null,
    threshold: 0,
    rootMargin: `-${navHeight}`
})

headerObserver.observe(underNav);

//------------------------------ sections reveal -------------------------------------

const sectionReveal = function (entries, observer) {
    const [entry] = entries;
    if (!entry.isIntersecting) return;
    entry.target.classList.remove("section__hidden")

    observer.unobserve(entry.target);
}

const sectionObserver = new IntersectionObserver(
    sectionReveal, {
    threshold: 0.1,
});

sections.forEach(function (section) {
    section.classList.add("section__hidden");
    sectionObserver.observe(section);

}
);

//------------------------------ image reveal -------------------------------------
//try to load image befor it reaches(client dont notice) in order to have high performance in low slow network.

const imgReveal = function (entries, observer) {

    const [entry] = entries;
    if (!entry.isIntersecting) return;

    entry.target.src = entry.target.dataset.src;
    entry.target.addEventListener("load", function () {
        entry.target.classList.remove("lazy-img");
    })

    observer.unobserve(entry.target);
}

// nav.addEventListener("mouseover", handleHover.bind(0.5))
// {
//  });
//  btnLeft.addEventListener("click");
