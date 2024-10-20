$(document).ready(function () {
    $('.classes-slider').owlCarousel({
        items: 3, // Number of items to show
        loop: true,
        margin: 30,
        nav: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 5000,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });

    // Initialization for the trainers section
    $('.trainers-slider').owlCarousel({
        items: 3, // Number of items to show
        loop: true,
        margin: 30,
        nav: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 5000,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });
});


$(document).ready(function () {
    $('.testimonial-content').owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        margin: 50,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 2
            }
        }
    })
})