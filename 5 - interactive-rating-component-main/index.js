const mainContainer = document.querySelector(".main-container");
const secondContainer = document.querySelector(".second-container");
const submitButton = document.getElementById("submit-button");
// add a rate again button
const ratingScore = document.getElementById("rating-score");
const userOption = document.querySelectorAll(".opt")


submitButton.addEventListener("click", () => {
    secondContainer.classList.remove("hidden")
    mainContainer.style.display = "none"
})

userOption.forEach((rate) =>{
    rate.addEventListener("click", () => {
       ratingScore.innerHTML = rate.innerHTML
    })
}
)