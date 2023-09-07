

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
const searchButton = document.querySelector(".search-button");


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

searchButton.onclick = function() {
  const searchInput = document.querySelector("#search-input").value;
  console.log(searchInput);
  const filteredUrl = baseUrl + `?search=${searchInput}`;
  
  postList.innerHTML = "";
  getPosts(filteredUrl);
  
};


//It's good practice to also allow users to search by pressing the 'Enter' key inside the search input. Consider adding an event listener for that:
document.querySelector("#search-input").addEventListener("keydown", function(e) {
  if (e.keyCode === 13) {  // Check if 'Enter' was pressed
      e.preventDefault(); // Prevent default form submission (if it's inside a form)
      searchButton.click(); // Trigger search
  }
});