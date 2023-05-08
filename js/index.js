//Use query selector to fetch the page header
const header = document.querySelector('h1');

//Add an event listener for when the window is scrolled
window.addEventListener("scroll", () => {
    if (window.pageYOffset > 600) {
        //If the offset reaches below 600, change the inner HTML
        header.innerHTML = "fridays at 7pm";
    } else {
        header.innerHTML = "the soul kitchen";
    }
});