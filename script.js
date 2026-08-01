// ===========================
// script.js
// ===========================

function searchDrama() {

    let input = document
        .getElementById("searchInput")
        .value
        .toLowerCase();

    let cards = document.querySelectorAll(".movie-card");

    cards.forEach(function(card){

        let title = card.querySelector("h3")
            .textContent
            .toLowerCase();

        if(title.includes(input)){
            card.style.display="block";
        }else{
            card.style.display="none";
        }

    });

}

const buttons=document.querySelectorAll(".movie-card button");

buttons.forEach(function(btn){

    btn.addEventListener("click",function(){

        alert("Add your official streaming link here.");

    });

});

const watchBtn=document.querySelector(".watch-btn");

watchBtn.addEventListener("click",function(){

    document.querySelector(".categories").scrollIntoView({
        behavior:"smooth"
    });

});

window.addEventListener("scroll",function(){

    const navbar=document.querySelector(".navbar");

    if(window.scrollY>50){
        navbar.style.background="#000";
    }else{
        navbar.style.background="#111";
    }

});

// ===========================
// Rating (simple "Rate This Website" box)
// ===========================

const ratingBoxStars = document.querySelectorAll(".rating-box .star");
const ratingText = document.getElementById("rating-text");

ratingBoxStars.forEach((star, index) => {
    star.addEventListener("click", () => {
        ratingBoxStars.forEach(s => s.classList.remove("active"));

        for(let i = 0; i <= index; i++){
            ratingBoxStars[i].classList.add("active");
        }

        ratingText.innerHTML = `Thanks for rating ${index + 1} ⭐`;
    });
});

// ===========================
// Rate & Review box
// ===========================

const reviewStars = document.querySelectorAll(".review-box .star");
const submitBtn = document.getElementById("submit-rating");
const reviewRatingText = document.getElementById("review-rating-text");
const review = document.getElementById("review");

let selectedRating = 0;

reviewStars.forEach((star, index) => {
    star.addEventListener("click", () => {
        selectedRating = index + 1;

        reviewStars.forEach(s => s.classList.remove("active"));

        for(let i = 0; i <= index; i++){
            reviewStars[i].classList.add("active");
        }
    });
});

submitBtn.addEventListener("click", () => {

    if(selectedRating === 0){
        reviewRatingText.innerHTML = "⭐ Please select a rating.";
        return;
    }

    if(review.value.trim() === ""){
        reviewRatingText.innerHTML = "📝 Please write a review.";
        return;
    }

    reviewRatingText.innerHTML = `✅ Thank you for your ${selectedRating}⭐ review!`;

    review.value = "";
});
