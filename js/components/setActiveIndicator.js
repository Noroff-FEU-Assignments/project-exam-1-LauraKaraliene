

export function setActiveIndicator(page) {
    const indicators = document.querySelectorAll('.carousel-indicators li');
    indicators.forEach((indicator, index) => {
        if ((index + 1) === page) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
   
}

