

var page = 1;
async function getMorePosts() {
  page += 1;
  createHTML();
};


const url = `https://awesomepeaks.no/wp-json/wp/v2/posts?&per_page=10&page=${page}`;

const postList = document.querySelector(".post-list");
const loading = document.querySelector(".loading");




async function getPosts(url) {
     loading.classList.add("loading");
    postList.innerHTML = "";
    try {
      const response = await fetch(url);
      // const response = await fetch(url + `&page=${page}`);
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
  async function getImage(imageId) {
    const urlImage = `https://awesomepeaks.no/wp-json/wp/v2/media/${imageId}`;
    const response = await fetch(urlImage);
    const images = await response.json();
    // console.log(images);
    return images;
    
  };
  
  getPosts(url);

  
  async function createHTML(posts) {
     posts.forEach(async function (post) {
      console.log(post.featured_media);
      
      const featuredMedia = await getImage (post.featured_media);
      console.log(featuredMedia);
      
      if (featuredMedia) {
      const featuredImage = featuredMedia.source_url; 

      postList.innerHTML += `<div>
                                 <a href="specific.html?post=${post.id}" class="no-underline">
                                <img src="${featuredImage}" 
                                alt="" class="blog-image"/>
                                 <h1 class="blog-title">${post.title.rendered}</h1>
                              
                                
                                </a>
                              </div>`;
      }
    });
  }

 
  // <h3>${post.content.rendered}</h3>
  // <h3>${post.excerpt.rendered}</h3>



  