
export default function handleScrollButton() {
	const scrollTopButton = document.getElementById("scrollTopButton");

	if (scrollTopButton) {
		window.addEventListener("scroll", function () {
			if (document.documentElement.scrollTop > 100) {
				scrollTopButton.style.display = "block";
			} else {
				scrollTopButton.style.display = "none";
			}
		});

		scrollTopButton.addEventListener("click", function () {
			document.body.scrollIntoView({ behavior: "smooth" });
		});
	}
}