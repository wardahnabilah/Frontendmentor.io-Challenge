const features = document.querySelector(".features")
const company = document.querySelector(".company")

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