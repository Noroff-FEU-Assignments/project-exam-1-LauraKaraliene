

export function setActiveIndicator(page) {
    console.log("Setting active indicator for page:", page);
    const indicators = document.querySelectorAll('.carousel-indicators li');
    console.log("Found indicators:", indicators.length);
    indicators.forEach((indicator, index) => {
        if ((index + 1) === page) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
   
}

