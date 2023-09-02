
const navbarMenu = document.getElementById("navbar");
const burgerMenu = document.getElementById("burger");
const overlayMenu = document.querySelector(".overlay");
const closeMenu = document.getElementById("close-icon");



// Show and Hide Navbar Function
const toggleMenu = () => {
navbarMenu.classList.toggle("active");
overlayMenu.classList.toggle("active");
closeMenu.classList.toggle("active");
};

burgerMenu.addEventListener("click", toggleMenu);
overlayMenu.addEventListener("click", toggleMenu);
closeMenu.addEventListener("click", toggleMenu);

$('.university-slider').owlCarousel({
    loop: true,
    margin: 80,
    loop: true,
    autoplay: true,
    autoplaySpeed: 1000,
    nav: false,
    dots: false,
    responsive: {
        0: {
            items: 2,
            margin: 20,

        },
        640: {
            items: 4,
            margin: 30,
        },
        1024: {
            items: 5
        }
    }
});