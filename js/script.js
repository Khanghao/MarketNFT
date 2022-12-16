navMenu = document.querySelector(".nav__menu");
navBar = document.querySelector(".nav__bar");
navBar.onclick = function () {
  navMenu.classList.toggle("active");
  navBar.classList.toggle("active");
};
