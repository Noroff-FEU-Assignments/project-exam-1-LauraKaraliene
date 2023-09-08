export function updateButtonStates(page) {
    let totalLoadedPosts = 0;
    const maxPages = 3;
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");
    
    if (page <= 1) {
        prevBtn.classList.add("disabled");
    } else {
        prevBtn.classList.remove("disabled");
    }
    if (page >= maxPages || totalLoadedPosts >= 9) {
        nextBtn.classList.add("disabled");
    } else {
        nextBtn.classList.remove("disabled");
    }
}

// export function updateButtonStates(page) {
//     const totalLoadedPosts = totalPosts
//     if (page >= maxPages || totalPosts >= 9) {
//         nextBtn.classList.add("disabled");
//     } else {
//         nextBtn.classList.remove("disabled");
//     }
// }