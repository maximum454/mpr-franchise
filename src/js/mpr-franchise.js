@@include('./partials/jquery.formstyler.min.js')
@@include('./calc.js')


$(function () {
    $('select, input[type=checkbox]').styler();


    $('.js-calc').on('click', function () {
        const KVM = parseInt(document.getElementById('KVM').value); //Стоимость 1 кв.м.
        const TPM = parseInt(document.getElementById('TPM').value); //Торговая площадь магазина
        const ZPR = parseInt(document.getElementById('ZPR').value); //Средняя зарплата продавца в вашем регионе
        if (KVM && TPM && ZPR) {
            $('.calculator .alert').slideUp();
            calc(KVM,TPM,ZPR);
            let modalCalc = $('[data-remodal-id=calc]').remodal();
            modalCalc.open();
        } else {
            $('.calculator .alert').slideDown();
        }
    });

    $('a[href^="#"]').on('click', function (event) {
        event.preventDefault();
        let target = event.target;
        let mobile = window.matchMedia('(min-width: 0px) and (max-width: 767px)');
        let desktop = window.matchMedia('(min-width: 1024px)');
        let sc = $(this).attr("href");
        let dn = $(sc).offset().top - 56;

        if (mobile.matches) {
            if ($(this).hasClass('nav__link--arrow')) {
            } else {
                menuToggle(menu);
                $('html, body').animate({scrollTop: dn}, 1000);
            }

        } else if (desktop.matches) {
            const nav = document.querySelector('.nav');
            nav.classList.toggle('active');
            target.classList.toggle('active');
            $('html, body').animate({scrollTop: dn}, 1000);
        }
    });

    var button = $('#button-up');
    $(window).scroll(function () {
        if ($(this).scrollTop() > 115) {
            $('.nav').addClass('nav--fix');
        } else {
            $('.nav').removeClass('nav--fix');
        }

        if ($(this).scrollTop() > 300) {
            button.fadeIn();
        } else {
            button.fadeOut();
        }
    });
    button.on('click', function () {
        $('body, html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

    const menu = document.getElementById('menu');
    menu.addEventListener('click', (e) => {
        const target = e.target;
        menuToggle(target);
    })

    function menuToggle(target) {
        const nav = document.querySelector('.nav');
        nav.classList.toggle('active');
        target.classList.toggle('active');
        document.querySelector('body').classList.toggle('lock');
    }


    const swiperReviews = new Swiper('.swiper-container-reviews', {
        slidesPerView: 2,
        loop: true,
        autoHeight: true,
        spaceBetween: 20,
        watchOverflow: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        observer: true,
        freeMode: true,
        navigation: {
            nextEl: '.swiper-reviews-next',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            767: {
                slidesPerView: 2,
                spaceBetween: 20
            }
        }
    })

    const navItems = document.querySelectorAll('.nav__item');

    for (let navItem of navItems) {
        navItem.addEventListener('click', function (e) {
            this.classList.toggle('active');
        })
    }


    const articlesItems = document.querySelectorAll('.articles__item');

    for (let articlesItem of articlesItems) {
        articlesItem.addEventListener('click', function (e) {
            this.classList.toggle('active');
        })
    }


    const dropDowns = document.querySelectorAll('.js-dropdown');

    for (let dropDown of dropDowns) {
        dropDown.addEventListener('click', function (e) {
            this.classList.toggle('active');
        })
    }
})

const swiperOne = new Swiper( '.swiper.one', {
    loop: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    effect: 'coverflow',
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 150,
        modifier: 1.5,
        slideShadows : false,
        scale: .9,
    },
} );

const swiperTwo = new Swiper( '.swiper.two', {
    loop: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    spaceBetween: 17,
    effect: 'coverflow',
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 0,
        modifier: 1,
        slideShadows : false,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
} );






