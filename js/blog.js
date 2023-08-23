
var page = 1;

async function getMorePosts() {
  page += 1;
  const newUrl = `https://awesomepeaks.no/wp-json/wp/v2/posts?orderby=date&order=desc&per_page=5&page=${page}`;
  await getPosts(newUrl);
};


const url = `https://awesomepeaks.no/wp-json/wp/v2/posts?orderby=date&order=desc&per_page=5&page=${page}`;
const postList = document.querySelector(".post-list");
const loading = document.querySelector(".loading");
var totalLoadedPosts = 0;



async function getPosts(url) {
     loading.classList.add("loading");
    try {
      const response = await fetch(url);
      const results = await response.json();
      console.log(results);

      totalLoadedPosts += results.length;

      if (totalLoadedPosts >= 17) {  
        document.querySelector(".load-more").style.display = 'none';  
    } else {
        document.querySelector(".load-more").style.display = 'block';  
    }
  
       createHTML(results);
    } catch (error) {
       postList.innerHTML = `<div class="error"><p>Ups! An error occurred!</p></div>`;
     } finally {
      loading.classList.remove("loading");
     }
  };


  //image call 
  async function getImage(imageId) {
    const urlImage = `https://awesomepeaks.no/wp-json/wp/v2/media/${imageId}`;
    const response = await fetch(urlImage);
    const images = await response.json();
    return images;
    
  };
  
  getPosts(url);

  



  function extractContent(htmlString) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, 'text/html');
    const h2 = doc.querySelector('h2') ? doc.querySelector('h2').textContent : null;
    const h3 = doc.querySelector('h3') ? doc.querySelector('h3').textContent : null;

    return { h2, h3 };
}




  async function createHTML(posts) {
    for (const post of posts) {
      const featuredMedia = await getImage(post.featured_media);
      const contentHtml = post.content.rendered;
      const extractedData = extractContent(contentHtml);
      if (featuredMedia) {
        const featuredImage = featuredMedia.source_url;
        postList.innerHTML += `<div>
                                <a href="specific.html?post=${post.id}" class="no-underline">
                                <img src="${featuredImage}" 
                                alt="" class="blog-image"/>
                                <h1 class="blog-title">${post.title.rendered}</h1>
                                <h2>${extractedData.h2}</h2>
                                <h3>${extractedData.h3}</h3>
                                </a>
                              </div>`;
      }
    }
  }

  document.querySelector(".load-more").addEventListener("click", getMorePosts);

 




  