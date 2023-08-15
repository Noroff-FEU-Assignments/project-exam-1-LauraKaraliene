

var page = 1;
async function getMorePosts() {
  page += 1;
  createHTML();
};


const url = "https://awesomepeaks.no/wp-json/wp/v2/posts?&per_page=5";

const postList = document.querySelector(".post-list");
const loading = document.querySelector(".loading");




async function getPosts(url) {
     loading.classList.add("loading");
    postList.innerHTML = "";
    try {
      const response = await fetch(url + `&page=${page}`);
      const results = await response.json();
      console.log(results);
      
       createHTML(results);
    } catch (error) {
       postList.innerHTML = `<div class="error"><p>Ups! An error occurred!</p></div>`;
     } finally {
      loading.classList.remove("loading");
     }
  }


  //image call incorect???
  async function getImage() {
    const urlImage = `https://awesomepeaks.no/wp-json/wp/v2/media/${postId}`;
    const response = await fetch(urlImage);
    const images = await response.json();
    console.log(images);
    
  };
  
  getPosts(url);
  
  function createHTML(posts) {
     posts.forEach(function (post) {
      // const featuredMedia = await getImage (post.featured_media);
      // if (featuredMedia) {
      // const featuredImage = featuredMedia.source_url; 

      postList.innerHTML += `<div>
                                 <a href="specific.html?post=${post.id}">
                                <img src="${featuredImage}"
                                alt="" class=""/>
                                 <h2>${post.title.rendered}</h2>
                                 <h3>${post.content.rendered}</h3>
                                 <h3>${post.excerpt.rendered}</h3>
                                </a>
                              </div>`;
      // }
    });
  }

 





  