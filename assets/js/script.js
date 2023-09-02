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