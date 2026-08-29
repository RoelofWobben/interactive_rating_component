const submitButton = document.querySelector("button");
const ratings = document.querySelectorAll('input[name="rating"]');
const ratingCard = document.querySelector(".rating-card");
const thankYouCard = document.querySelector(".thank-you-card");
const choice = document.querySelector(".choice");

submitButton.addEventListener("click", () => {
    for (const rating of ratings) {
        if (rating.checked) {
            ratingCard.classList.add("slide-out");
            thankYouCard.classList.add("slide-in");

            choice.textContent = rating.value;
        }
    }
});
