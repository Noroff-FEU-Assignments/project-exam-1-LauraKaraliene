
import extractContent from "../helpers/extractContent.js";
import getFeaturedImage from "../helpers/getFeaturedImage.js";

export default function displayPosts(posts, parent) {
	for (const post of posts) {
		// console.log(post);

		const contentHtml = post.content?.rendered;
		const extractedData = extractContent(contentHtml);
		const featuredImage = getFeaturedImage(post);

		if (featuredImage) {
			parent.innerHTML += `<div>
															<a href="specific.html?post=${post.id}" class="no-underline">
																<img src="${featuredImage.src}" alt="${featuredImage.alt}" class="blog-image">
																<h2 class="blog-title">${post.title.rendered}</h2>
																<h2>${extractedData.h2}</h2>
																<h3>${extractedData.h3}</h3>
																
															</a>
                            </div>`;
		}
	}
}


