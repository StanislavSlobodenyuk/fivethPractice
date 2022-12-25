"use strict"

let mainBlock = new Swiper('.main-block-slider',{
    navigation: {
        nextEl: ".button-next",
        prevEl: ".button-prev",
    },
    // увімкнути/вимкнути захват та рух слайдів мишею на ПК
    simulateTouch: true,
    // чутливість
    touchRatio: 1,
    // кут роботи властивості
    touchAngle: 45,
    // курсор при переміщені
    grabCursor: true,
    // перемикання при кліку на слайд
    slideToClickedSlide: true,
    // управління клавіатурою 

    keyboard: {
        // ввімкнути/вимкнути 
        enabled: true,
        // ввімкнути тільки тоді коли слайдер видно
        onlyInViewport: true,
        // ввімкнути керування за допомогою page up/down
        pageUpDown: true,
    },

    // відступи між слайдами
    spaceBetween: 20,

    // швидкість перемикання слайдів
    speed: 1000,

    // нескінчений слайдер ТА якщо loop = true то loopedSlides == slidesPerView 
    loop: true,
    loopedSlides: 0,

    // брейпоинт - адаптив
    // адаптив за шириною !(працює за принципом mobile first)
    breakpoints: {
        320: {
        },
        769: {
        },
        1024: {
        },
    }
})


let testimonial = new Swiper('.testimonial-slider',{
    pagination: {
        el: ".swiper-pagination",
        // перехід на слайд по кліку на пагінацію
        clickable: true,
        // динамічні булети
        dynamicBullets: false,
    },

    // увімкнути/вимкнути захват та рух слайдів мишею на ПК
    simulateTouch: true,
    // чутливість
    touchRatio: 1,
    // кут роботи властивості
    touchAngle: 45,
    // курсор при переміщені
    grabCursor: true,
    // перемикання при кліку на слайд
    slideToClickedSlide: true,
    
    // управління клавіатурою 
    keyboard: {
    // ввімкнути/вимкнути 
    enabled: true,
    // ввімкнути тільки тоді коли слайдер видно
    onlyInViewport: true,
    // ввімкнути керування за допомогою page up/down
    pageUpDown: true,
    },
    // кількість слайдів для показу читатти там відключення функціоналу якщо слайдів менше чим порібно 
    slidesPerView: 2,
    watchOverflow: true,

    // кількісь слайдів для листання
    slidesPerGroup: 2,

    // швидкість перемикання слайдів
    speed: 1000,
        // відступи між слайдами
    spaceBetween: 130,
    
    breakpoints:{
        320: {
            slidesPerView: 1,
            watchOverflow: true,
            slidesPerGroup: 1,
            spaceBetween: 0,
        },
        768: {
            spaceBetween: 15,
        },
        1261.98: {
            spaceBetween: 130,
        },

    },
})
    