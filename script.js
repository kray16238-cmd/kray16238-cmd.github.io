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
// Rating
// ===========================

const stars = document.querySelectorAll(".star");
const text = document.getElementById("rating-text");

stars.forEach((star, index) => {
    star.addEventListener("click", () => {
        stars.forEach(s => s.classList.remove("active"));

        for(let i = 0; i <= index; i++){
            stars[i].classList.add("active");
        }

        text.innerHTML = `Thanks for rating ${index + 1} ⭐`;
    });
});
