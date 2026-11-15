const thankYouHeading = document.querySelector(".thank-you-card h1");
const ratingCard = document.querySelector(".rating-card");
const thankYouCard = document.querySelector(".thank-you-card");
const choice = document.querySelector(".choice");
const errorMessage = document.querySelector(".error");
const form = document.querySelector(".form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const isChosen = document.querySelector('input[name="rating"]:checked');

    if (!isChosen) {
        errorMessage.textContent = "You have to make a choice";
        return;
    }

    ratingCard.classList.add("slide-out");
    thankYouCard.classList.add("slide-in");

    thankYouCard.removeAttribute("inert");
    ratingCard.setAttribute("inert", "");

    choice.textContent = isChosen.value;

    const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
        thankYouHeading.focus();
    }
});

form.addEventListener("change", () => {
    errorMessage.textContent = "";
});

thankYouCard.addEventListener("transitionend", () => {
    thankYouHeading.focus();
});
