const docBod = document.body;
const navNav = document.querySelector(".header__nav");
const navRow = document.querySelector(".header__nav-row");
const headerList = document.querySelector(".header__list");
const burger = document.querySelector(".burger__menu");

burger.addEventListener ("click", function () {
    docBod.classList.toggle("noScroll");
    navNav.classList.toggle("--mobile");
    navRow.classList.toggle("--mobile");
    headerList.classList.toggle("--mobile__list");
    burger.classList.toggle("--mobile__open");
    burger.classList.toggle("--active");
});