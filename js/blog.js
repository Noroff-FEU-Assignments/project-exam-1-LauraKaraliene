// const url = "https://awesomepeaks.no/wp-json/wp/v2/posts?&per_page=10";
const url = "https://awesomepeaks.no/wp-json/wp/v2/posts?per_page=10";
const urlImage ="https://awesomepeaks.no/wp-json/wp/v2/media/${postId}";
const postList = document.querySelector(".post-list");
const loading = document.querySelector(".loading");

var page = 1;
async function getMorePosts() {
  page += 1;
  createHTML();
};


async function getPosts(url) {
     loading.classList.add("loading");
    postList.innerHTML = "";
    try {
      const response = await fetch(url);
      const results = await response.json();
      // console.log(results);
      
       createHTML(results);
    } catch (error) {

       postList.innerHTML = `<div class="error"><p>Ups! An error occurred!</p></div>`;
     } finally {
      loading.classList.remove("loading");
     }
  }

  async function getImage(postId) {
    const response = await fetch(urlImage);
    const images = await response.json();
    console.log(images);
    
  };
  
  getPosts(url);
  
  function createHTML(results) {
     results.forEach(function (post) {
      const featuredMedia = post.featured_media;
      if (featuredMedia) {
        const imageUrl = featuredMedia.source_url;
      // const imageUrl = featuredMedia && featuredMedia[0] && featuredMedia[0].source_url;
      // const heading = jsonData.content.rendered.match('/<h2 class="wp-block-heading">(.*?)<\/h2>/')[1]; 

      postList.innerHTML += `<div>
                                 <a href="#?post=${post.id}">
                                <img src="${urlImage}"
                                alt="" class=""/>
                                 <h2>${post.title.rendered}</h2>
                                </a>
                              </div>`;
      }
    });
  }