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
// const searchButton = document.querySelector(".search-button");


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
		// console.log(error);
		postList.innerHTML = `<div class="error"><p>Ups! An error occurred!</p></div>`;
	} finally {
		loading.classList.remove("loading");
	}
}

getPosts(url);


document.querySelector(".load-more").addEventListener("click", getMorePosts);



//Search
function handleSearch() {
	const searchInput = document.querySelector("#search-input").value;
	console.log(searchInput);
	page = 1;
    totalLoadedPosts = 0;
	const filteredUrl = baseUrl + `posts?search=${searchInput}`;
	
	postList.innerHTML = "";
	getPosts(filteredUrl);
  }

//Enter key 
document.querySelector("#search-input").addEventListener("keydown", function(e) {
	if (e.keyCode === 13) {  
		e.preventDefault(); 
		handleSearch(); 
	}
  });







//   document.querySelector("#search-input").addEventListener('click', function(event) {
//     if (event.offsetX > this.offsetWidth - 30) { // Assuming the icon is within the 30px area on the right
//         handleSearch(); 
//     }
// });


// searchInput.addEventListener('mousemove', function(event) {
//     // Calculate the x-position within the input field
//     const xPosition = event.pageX - this.offsetLeft;
    
//     // Adjusted boundaries based on the icon position and size
//     if (xPosition > 285 && xPosition <= 300) {
//         this.style.cursor = 'pointer';
//     } else {
//         this.style.cursor = 'text'; // Reset to default text cursor for other areas
//     }
// });

// searchInput.addEventListener('click', function(event) {
//     const xPosition = event.pageX - this.offsetLeft;
//     if (xPosition > 285 && xPosition <= 300) {
//         handleSearch(); // Call your search function
//     }
// });



// searchButton.onclick = function() {
//   const searchInput = document.querySelector("#search-input").value;
//   console.log(searchInput);
//   const filteredUrl = baseUrl + `?search=${searchInput}`;
  
//   postList.innerHTML = "";
//   getPosts(filteredUrl);
  
// };


