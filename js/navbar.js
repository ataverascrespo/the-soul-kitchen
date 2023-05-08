//Retrieve navbar menu icon and navbar section
let navbarIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

//Add an event listener when the navbar menu icon is clicked
navbarIcon.addEventListener("click", function () {
    //Toggle the css property of navbar open
    navbar.classList.toggle('open');
});