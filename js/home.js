
// import { fetchAndUpdateCarousel } from "./components/fetchCarousel.js";
import { updateButtonStates } from "./helpers/updateButtonStates.js";
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
// const control = carousel.querySelectorAll(".control");




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


function fetchAndUpdateCarousel() {
    const updatedUrl = `${baseUrl}posts?_embed=true&orderby=date&order=desc&per_page=3&page=${page}`;
    getCarousel(updatedUrl);
    setActiveIndicator(page);
    updateButtonStates(); 
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



// function setActiveIndicator() {
//     const indicators = document.querySelectorAll('.carousel-indicators li');
//     indicators.forEach((indicator, index) => {
//         if ((index + 1) === page) {
//             indicator.classList.add('active');
//         } else {
//             indicator.classList.remove('active');
//         }
//     });
// }


// function updateButtonStates() {
//     if (page <= 1) {
//         prevBtn.classList.add("disabled");
//     } else {
//         prevBtn.classList.remove("disabled");
//     }
//     if (page >= maxPages || totalLoadedPosts >= 9) {
//         nextBtn.classList.add("disabled");
//     } else {
//         nextBtn.classList.remove("disabled");
//     }
// }


fetchAndUpdateCarousel();