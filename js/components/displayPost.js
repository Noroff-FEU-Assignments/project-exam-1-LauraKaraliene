
export default function displayPost(post, parent) {
	const title = post.title.rendered;
  document.title = `Awesome Peaks | ${title}`;
 
 
	parent.innerHTML = `<div>
                          <h1>${title}</h1>
                          <div class="content-centered">${post.content.rendered}</div>        
                        </div>`;
}