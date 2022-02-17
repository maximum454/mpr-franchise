@@include('./partials/jquery.formstyler.min.js')


$(function () {
    $('select').styler();

    $('a[href^="#"]').on('click', function (event) {
        event.preventDefault();
        let target = event.target;
        let mobile = window.matchMedia('(min-width: 0px) and (max-width: 767px)');
        let desktop = window.matchMedia('(min-width: 1024px)');
        let sc = $(this).attr("href");
        let dn = $(sc).offset().top - 30;
        console.log($(this));
        if (mobile.matches) {
            if ($(this).next('.dropdown')) {
                console.log('da')
            } else {
                menuToggle(menu);
                $('html, body').animate({scrollTop: dn}, 1000);
            }

        } else if (desktop.matches) {
            menuToggle(menu);
            $('html, body').animate({scrollTop: dn}, 1000);
        }
    });

    var button = $('#button-up');
    $(window).scroll(function () {
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
})

menu.addEventListener('click', (e) => {
    const target = e.target;
    menuToggle(target);
})

//TODO: поправить функцию для десктопа body.lock
function menuToggle(target) {
    const nav = document.querySelector('.nav');
    nav.classList.toggle('active');
    target.classList.toggle('active');
    document.querySelector('body').classList.toggle('lock');
}


const swiperReviews = new Swiper('.swiper-container-reviews', {
    slidesPerView: 2,
    loop: true,
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





