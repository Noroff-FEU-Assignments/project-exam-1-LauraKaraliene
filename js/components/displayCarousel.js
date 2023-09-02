import extractContent from "../helpers/extractContent.js";
import getFeaturedImage from "../helpers/getFeaturedImage.js";

export function displayCarousel(posts, parent) {
    const carouselCards = parent.querySelector(".carousel-cards");
    carouselCards.innerHTML = "";
	for (const post of posts) {
		const contentHtml = post.content.rendered;
		const extractedData = extractContent(contentHtml);
		const featuredImage = getFeaturedImage(post);
       
		if (featuredImage) {
			carouselCards.innerHTML += `<div class="carousel-card"> 
           
									<a href="specific.html?post=${post.id}" class="no-underline">
									<img src="${featuredImage.src}" alt="${featuredImage.alt}" class="carousel-image">
									<h1 class="carousel-title">${post.title.rendered}</h1>
									<h2>${extractedData.h2}</h2>
									<h3>${extractedData.h3}</h3>
									</a>
                            
                                </div>`;
		}
	}
}