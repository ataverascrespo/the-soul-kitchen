let navbarIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

navbarIcon.addEventListener("click", function () {
    navbar.classList.toggle('open');
});