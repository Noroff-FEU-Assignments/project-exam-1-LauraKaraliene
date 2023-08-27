

import displayPosts from "./components/displayPosts.js";
import handleScrollButton from "./helpers/handleSrollButton.js";
import { baseUrl } from "./constants/api.js";

let page = 1;
let totalLoadedPosts = 0;

handleScrollButton();

async function getMorePosts() {
	page += 1;
	const newUrl = `${baseUrl}posts?_embed=true&orderby=date&order=desc&per_page=6&page=${page}`;
	await getPosts(newUrl);
}

const url = `${baseUrl}posts?_embed=true&orderby=date&order=desc&per_page=6&page=${page}`;

const postList = document.querySelector(".post-list");
const loading = document.querySelector(".loading");

async function getPosts(url) {
	loading.classList.add("loading");

	try {
		const response = await fetch(url);
		const results = await response.json();
		console.log(results);
		totalLoadedPosts += results.length;

		if (totalLoadedPosts >= 17) {
			document.querySelector(".load-more").style.display = "none";
		} else {
			document.querySelector(".load-more").style.display = "block";
		}

		displayPosts(results, postList);
	} catch (error) {
		console.log(error);
		postList.innerHTML = `<div class="error"><p>Ups! An error occurred!</p></div>`;
	} finally {
		loading.classList.remove("loading");
	}
}

getPosts(url);

document.querySelector(".load-more").addEventListener("click", getMorePosts);

