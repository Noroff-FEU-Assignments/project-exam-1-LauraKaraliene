
export default function extractContent(htmlString) {
	const parser = new DOMParser();
	const doc = parser.parseFromString(htmlString, "text/html");
	const h2 = doc.querySelector("h2") ? doc.querySelector("h2").textContent : null;
	const h3 = doc.querySelector("h3") ? doc.querySelector("h3").textContent : null;

	return { h2, h3 };
}