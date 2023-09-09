
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".hamburger").addEventListener("click", toggleMenu);
function toggleMenu() {
    const menu = document.querySelector(".header-upper");
    const hamburgerIcon = document.querySelector(".hamburger");
    menu.classList.toggle("active");
    hamburgerIcon.classList.toggle("x");
}
});