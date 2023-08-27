
export default function getFeaturedImage(post) {
	if (!post._embedded?.["wp:featuredmedia"] || post._embedded?.["wp:featuredmedia"].length === 0) {
		return null;
	}

	const src = post._embedded?.["wp:featuredmedia"][0].source_url;
	const alt = post._embedded?.["wp:featuredmedia"][0].title.rendered;

	return { src, alt };
}