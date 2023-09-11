
import { baseUrl } from "./constants/api.js";
import displayPost from "./components/displayPost.js";
import handleScrollButton from "./helpers/handleSrollButton.js";

handleScrollButton();

document.addEventListener("DOMContentLoaded", function () {
	const loading = document.querySelector(".loading");
	const postPage = document.querySelector(".post-page");

	const queryString = document.location.search;
	const params = new URLSearchParams(queryString);
	const id = params.get("post");

	if (!id) {
		location.href = "/";
	}

	const url = `${baseUrl}posts/${id}?_embed=true`;

	async function getPost() {
		loading.classList.add("loading");

		try {
			const response = await fetch(url);
			const post = await response.json();
			const title = document.querySelector("title");
			title.innerHTML = `Awesome Peaks | ${post.title}`;
			displayPost(post, postPage);
		} catch (error) {
			postPage.innerHTML = `<div class="error"><p>Ups! An error occurred!</p></div>`;
		} finally {
			loading.classList.remove("loading");
		}
	}

	getPost();
});



const popup = document.querySelector(".popup");
const overlay = document.querySelector(".overlay");
const closeBtn = document.querySelector(".close-btn");
const modalImage = document.getElementById("modal-image");

// Open the modal
document.addEventListener("click", (event) => {
    if (event.target.tagName === "IMG" && !event.target.closest('.popup')) {
        modalImage.src = event.target.src;
        popup.style.display = "block";
        overlay.style.display = "block";
    }
});

// Close the modal
closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
    overlay.style.display = "none";
});

// Close modal when overlay is clicked
overlay.addEventListener("click", () => {
    popup.style.display = "none";
    overlay.style.display = "none";
});
 