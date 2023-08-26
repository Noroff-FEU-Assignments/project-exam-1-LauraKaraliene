
document.addEventListener("DOMContentLoaded", function() {
    const loading = document.querySelector(".loading");
    const postPage = document.querySelector(".post-page");
    const queryString = document.location.search;
    const params = new URLSearchParams(queryString);
    const id = params.get("post");
    const url = `https://awesomepeaks.no/wp-json/wp/v2/posts/${id}`;



    async function getPost() {
        loading.classList.add("loading");
       try {
         const response = await fetch(url);
         const post = await response.json();
         displayPost(post);
       } catch (error) {
          postPage.innerHTML = `<div class="error"><p>Ups! An error occurred!</p></div>`;
        } finally {
         loading.classList.remove("loading");
        }
     };


    async function getImage(imageId) {
        const urlImage = `https://awesomepeaks.no/wp-json/wp/v2/media/${imageId}`;
        const response = await fetch(urlImage);
        const image = await response.json();
        return image.source_url;
  }



    async function displayPost(post) {
        let content = post.content.rendered;
        const parser = new DOMParser();
        const parsedContent = parser.parseFromString(post.content.rendered, 'text/html');
        const title = post.title.rendered;
        // const h2 = parsedContent.querySelector('h2') ? parsedContent.querySelector('h2').outerHTML : "";
        // const h3 = parsedContent.querySelector('h3') ? parsedContent.querySelector('h3').outerHTML : "";
        // const firstImage = parsedContent.querySelector('img') ? parsedContent.querySelector('img').outerHTML : "";
        // const textContent = parsedContent.querySelector('p') ? parsedContent.querySelector('p').outerHTML : "";

        const featuredImageElement = document.querySelector(`img[src="${await getImage(post.featured_media)}"]`);
        if (featuredImageElement) featuredImageElement.remove();

        postPage.innerHTML = `<div class="">
                            <h1>${title}</h1>
                            ${post.content.rendered}                  
                            </div>`;
  }

   
    getPost();
});
{
}



 