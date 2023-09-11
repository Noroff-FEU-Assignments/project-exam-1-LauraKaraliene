import { setActiveIndicator } from "./components/setActiveIndicator.js";
import { displayCarousel } from "./components/displayCarousel.js";
import { baseUrl } from "./constants/api.js";

let page = 1;
let totalLoadedPosts = 0;
const maxPages = 3;
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
const url = `${baseUrl}posts?_embed=true&orderby=date&order=desc&per_page=3&page=${page}`;
const carousel = document.querySelector(".carousel");
const loading = document.querySelector(".loading");



//buttons
nextBtn.addEventListener('click', function() {
    if (page < maxPages) {  
        page++;
        fetchAndUpdateCarousel();
    }
});

prevBtn.addEventListener('click', function() {
    if (page > 1) { 
        page--;
        fetchAndUpdateCarousel();
    }
});



//carousel
function fetchAndUpdateCarousel() {
    const updatedUrl = `${baseUrl}posts?_embed=true&orderby=date&order=desc&per_page=3&page=${page}`;
    getCarousel(updatedUrl);
    setActiveIndicator(page);
}


async function getCarousel(url) {
	loading.classList.add("loading");

	try {
		const response = await fetch(url);
		const results = await response.json();
		console.log(results);
		totalLoadedPosts += results.length;
		displayCarousel(results, carousel);
        
	} catch (error) {
		carousel.innerHTML = `<div class="error"><p>Ups! An error occurred!</p></div>`;
	} finally {
		loading.classList.remove("loading");
	}
}

fetchAndUpdateCarousel();




//swipe cards-mobile screen
let startX;
const carouselCards = document.querySelector('.carousel-cards');

carouselCards.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
});

carouselCards.addEventListener('touchend', (e) => {
    const endX = e.changedTouches[0].clientX;
    const diffX = startX - endX;

    if (diffX > 50) { 
        if (page < maxPages) {  
            page++;
            fetchAndUpdateCarousel();
        }
    } else if (diffX < -50) { 
        if (page > 1) { 
            page--;
            fetchAndUpdateCarousel();
        }
    }
});