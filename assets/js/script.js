const features = document.querySelector(".features")
const company = document.querySelector(".company")
const menuIcon = document.querySelector(".toggle__menu")
const closeIcon = document.querySelector(".toggle__close")
const nav = document.querySelector(".nav")
const darkBg = document.querySelector(".darkBg")

features.addEventListener("click", showSublist)
company.addEventListener("click", showSublist)

function showSublist(event) {
    /** Showing or Hiding sublist **/
    event.target.nextElementSibling.classList.toggle("hide")
    
    /** Change the arrow direction **/
    let arrowIcon = event.target.firstElementChild

    // If it is a down arrow, change to up
    if (arrowIcon.src.includes("down")) {
        arrowIcon.setAttribute("src", "./assets/images/icon-arrow-up.svg")
    } 
    // If it is a up arrow, change to down
    else {
        arrowIcon.setAttribute("src", "./assets/images/icon-arrow-down.svg")
    }
}

// Add event listener 'click' to menu and close icon
menuIcon.addEventListener("click", toggleMenu)
closeIcon.addEventListener("click", toggleMenu)

function toggleMenu() {
    nav.classList.toggle("hide")
    darkBg.classList.toggle("hide")
}