const navBarIcon = document.getElementsByClassName("fa-bars")
const navBarToggle = document.getElementById("mobile-nav-bar-toggle");
const mobileNavBar = document.getElementById("mobile-nav-bar");
const body = document.getElementById("body");
let menuToggled = false;

function toggleMenu() {
    if (menuToggled === true){
        navBarIcon[0].style.color = "#fff";
        menuToggled = false;
    } else {
        navBarIcon[0].style.color = "#33a5ff";
        menuToggled = true;
    }
    mobileNavBar.classList.toggle("is-active");
    body.classList.toggle("is-blurred");
    body.parentElement.classList.toggle("scroll-disable")
}

document.addEventListener("click", (evt) => {
    let elem;
    if (menuToggled) {
        elem = mobileNavBar;
    } else {
        elem = navBarToggle;
    }

    const outsideClick = !elem.contains(evt.target);
    if (outsideClick) {
        if (menuToggled) {
            toggleMenu();
        }
    }

    if (!menuToggled) {
        if(!outsideClick){
            toggleMenu();
        }
    }
});