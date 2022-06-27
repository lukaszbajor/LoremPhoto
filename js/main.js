//BURGER MENU
const burger = document.querySelector(".nav__left-box-burger");
const menu = document.querySelector(".header__menu");
const nav = document.querySelector(".nav");
const links = document.querySelectorAll(".header__menu-link");

const handleBurger = () => {
  burger.classList.toggle("active");
  menu.classList.toggle("show-menu");
};

const changeBackgroundColor = () => {
  if (window.scrollY >= 20) {
    nav.style.backgroundColor = "#15191D";
    nav.style.transition = "all .3s";
  } else {
    nav.style.backgroundColor = "transparent";
  }
};

burger.addEventListener("click", handleBurger);
window.addEventListener("scroll", changeBackgroundColor);

links.forEach((item) => {
  item.addEventListener("click", () => {
    burger.classList.remove("active");
    menu.classList.remove("show-menu");
  });
});
