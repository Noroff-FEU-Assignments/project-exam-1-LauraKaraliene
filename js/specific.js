
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
        const parsedContent = parser.parseFromString(post.content.rendered, "text/html");
        const title = post.title.rendered;
        document.title = "Awesome Peaks | " + title;


        //access h2, h3
        function extractContent(htmlString) {
          const parser = new DOMParser();
          const doc = parser.parseFromString(htmlString, "text/html");
          const h2 = doc.querySelector("h2") ? doc.querySelector("h2").textContent : null;
          const h3 = doc.querySelector("h3") ? doc.querySelector("h3").textContent : null;
        
          return { h2, h3 };
        }
      
     

        const featuredImageElement = document.querySelector(`img[src="${await getImage(post.featured_media)}"]`);
        if (featuredImageElement) featuredImageElement.remove();

        postPage.innerHTML = `<div>
                            <h1>${title}</h1>
                            <div class="content-centered">${post.content.rendered}</div>        
                            </div>`;
           
        //style elements                    
        const h1Element = postPage.querySelector("h1");
        if (h1Element) {
        h1Element.style.textAlign = "center";
        h1Element.style.fontSize = "1.8em";
        }     
            
        const contentDiv = postPage.querySelector(".content-centered");
        if (contentDiv) {
          contentDiv.style.maxWidth = "600px";
          contentDiv.style.margin = "0px auto";
        }

        const figureElements = postPage.querySelectorAll(".wp-block-image");
        figureElements.forEach(figure => {
            figure.style.display = "flex";
            figure.style.textAlign = "center"; 
            figure.style.margin = "50px auto"; 
            figure.style.size = "medium";
        });

      //   figureElements.forEach(figure => {
      //     const img = figure.querySelector('img');
      //     if (img) {
      //         img.style.display = "block";
      //         img.style.margin = "0 auto";
      //     }
      // });
  }
getPost();
});
{
}






 