//Use query selector to fetch the page header
const header = document.querySelector('h1');
const subheader = document.querySelector('h2');

//Add an event listener for when the window is scrolled
window.addEventListener("scroll", () => {
    if (window.pageYOffset > 600) {
        //If the offset reaches below 600, change the inner HTML
        header.innerHTML = "fridays at 7pm";
        subheader.innerHTML = "may to august '23"
    } else {
        header.innerHTML = "the soul kitchen";
        subheader.innerHTML = "by alex taveras-crespo"
    }
});