$(document).ready(function($) {

    // $('.js-content--slider').owlCarousel({
    //     // margin: 50,
    //     responsiveClass: true,
    //     items: 1,
    //     nav: true,
    //     navText: ["<div class='js-content--slider__controls--prev slider-arrows'><svg class='icon icon-arrow-prev'><use xlink:href='static/img/svg/symbol/sprite.svg#arrow-prev'></use></svg></div>", "<div class='js-content--slider__controls--next slider-arrows'><svg class='icon icon-arrow-next'><use xlink:href='static/img/svg/symbol/sprite.svg#arrow-next'></use></svg></div>"],
    //     responsive: {
    //         0: {
    //             items: 1,
    //             // margin: 150,
    //             // center: true,
    //             // autoWidth: true,
    //             nav: false,
    //             navText: []
    //         },
    //         992: {
    //             items: 1
    //         }
    //     }
    // });
    //Главный слайдер
    $('.js-content--slider').slick({

        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '.js-content--slider__controls--prev',
        nextArrow: '.js-content--slider__controls--next',
        dots: true,
        appendDots: '.js-slider-controls-dots',
        rows: 0,
        customPaging: function () {
            return '<a class="js-slider-slider__dots"></a>';
        },

    });
    // Слайдер отзывов
    $('.reviews-main-js').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '.reviews-main-js__controls--prev',
        nextArrow: '.reviews-main-js__controls--next',
        dots: true,
        appendDots: '.reviews-main-js-controls-dots',
        rows: 0,
        customPaging: function () {
            return '<a class="reviews-main-js-slider__dots"></a>';
        },

    });
    // Слайдер новых товаров
    $('.js-novelties-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '.js-novelties-slider__controls--prev',
        nextArrow: '.js-novelties-slider__controls--next',
        dots: false,
        rows: 0,
        appendDots: '.js-novelties-slider-controls-dots',
        customPaging: function () {
            return '<a class="js-slider--novelties2-slider__dots"></a>';
        },
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    dots: true
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    dots: true
                }
            },

        ]

    });


    // Слайдер новых товаров
    $('.js-slider-product-card').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        asNavFor:".js-product-gallery__nav",
        rows: 0,
        appendDots: '.js-slider-product-dots-card-controls-dots',
        customPaging: function () {
            return '<a class="js-slider-product-card-slider__dots-a"></a>';
        },
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    dots: true,

                }
            },

        ]

    });

    //Навигация продукта
    $('.js-product-gallery__nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        focusOnSelect: true,
        arrows: false,
        slickCurrentSlide: true,
        rows:0,
        // variableWidth: true,
        asNavFor:".js-slider-product-card",


    });

    // Слайдер новых товаров
    $('.js-slider--all').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '.js-slider--all__controls--prev',
        nextArrow: '.js-slider--all__controls--next',
        dots: false,
        rows: 0,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,

                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,

                }
            },

        ]

    });
    // Слайдер новых товаров
    $('.js-slider--all2').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '.js-slider--all2__controls--prev',
        nextArrow: '.js-slider--all2__controls--next',
        dots: false,
        rows: 0,
        appendDots: '.js-slider--all2-controls-dots',
        customPaging: function () {
            return '<a class="js-slider--all2-slider__dots"></a>';
        },
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    dots: true,

                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    dots: true,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    dots: true,

                }
            },

        ]

    });



    // Слайдер новых товаров
    $('.js-compare-slider-items').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '.compare-control-js--prev',
        nextArrow: '.compare-control-js--next',
        dots: false,
        infinite: false,
        asNavFor:".compare-js-list1,.compare-js-list2,.compare-js-list3,.compare-js-list4,.compare-js-list5,.compare-js-list6",
        rows: 0,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,

                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,

                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,

                }
            },

        ]

    });


    $('.compare-js-list1').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        swipe: false,
        touchMove: false,
        infinite: false,
        rows: 0,
        asNavFor:".js-compare-slider-items,.compare-js-list2,.compare-js-list3,.compare-js-list4,.compare-js-list5,.compare-js-list6",
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,

                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,

                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,

                }
            },

        ]

    });

    $('.compare-js-list2').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        swipe: false,
        touchMove: false,
        infinite: false,
        rows: 0,
        asNavFor:".js-compare-slider-items,.compare-js-list1,.compare-js-list3,.compare-js-list4,.compare-js-list5,.compare-js-list6",
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,

                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,

                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,

                }
            },

        ]

    });

    $('.compare-js-list3').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        swipe: false,
        touchMove: false,
        infinite: false,
        rows: 0,
        asNavFor:".js-compare-slider-items,.compare-js-list1,.compare-js-list2,.compare-js-list4,.compare-js-list5,.compare-js-list6",
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,

                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,

                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,

                }
            },

        ]

    });

    $('.compare-js-list4').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        swipe: false,
        touchMove: false,
        infinite: false,
        rows: 0,
        asNavFor:".js-compare-slider-items,.compare-js-list1,.compare-js-list2,.compare-js-list3,.compare-js-list5,.compare-js-list6",
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,

                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,

                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,

                }
            },

        ]

    });

    $('.compare-js-list5').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        swipe: false,
        touchMove: false,
        infinite: false,
        rows: 0,
        asNavFor:".js-compare-slider-items,.compare-js-list1,.compare-js-list2,.compare-js-list3,.compare-js-list4,.compare-js-list6",
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,

                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,

                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,

                }
            },

        ]

    });

    $('.compare-js-list6').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        swipe: false,
        touchMove: false,
        infinite: false,
        rows: 0,
        asNavFor:".js-compare-slider-items,.compare-js-list1,.compare-js-list2,.compare-js-list3,.compare-js-list4,.compare-js-list5",
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,

                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,

                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,

                }
            },

        ]

    });
    //mobile slider intresting
    $('.mobile-slider-int').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        rows: 0,
        variableWidth: true,


    });

    //mobile slider news
    $('.mobile-slider-int2').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        rows: 0,
        variableWidth: true,
    });

    //Слайдер акции
    $('.js-sidebar-stock--items').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        appendDots: '.js-sidebar-stock-controls-dots',
        rows: 0,
        customPaging: function () {
            return '<a class="js-sidebar-stock-slider__dots"></a>';
        },
    });
});
