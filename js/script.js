
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".hamburger").addEventListener("click", toggleMenu);
function toggleMenu() {
    const menu = document.querySelector(".header-upper");
    const hamburgerIcon = document.querySelector(".hamburger");
    menu.classList.toggle("active");
    hamburgerIcon.classList.toggle("x");
}
});




// window.addEventListener("scroll", function() {
//     const header = document.querySelector(".header-upper");
//     const scrollPosition = window.scrollY || document.documentElement.scrollTop;

//     if (scrollPosition > 50) {  // Adjust 50 to the number of pixels you want
//         header.classList.add("sticky-active");
//     } else {
//         header.classList.remove("sticky-active");
//     }
// });