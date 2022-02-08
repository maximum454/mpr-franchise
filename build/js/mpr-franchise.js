$(function () {
    $('a[href^="#"]').on('click', function(event) {
        // отменяем стандартное действие
        event.preventDefault();

        var sc = $(this).attr("href"),
            dn = $(sc).offset().top-30;

            $('html, body').animate({scrollTop: dn}, 1000);
    });


})

menu.addEventListener('click', (e) => {
    const target = e.target;
    const nav = document.querySelector('.nav');
    nav.classList.toggle('active');
    target.classList.toggle('active');
    document.querySelector('body').classList.toggle('lock');
})

const swiperStatistic = new Swiper('.swiper-container-statistic',{
    slidesPerView: 'auto',
    loop:true,
    spaceBetween: 165,
    watchOverflow: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    observer: true,
    freeMode: true,
    navigation: {
        nextEl: '.swiper-statistic-next',
    },
})

const swiperReviews = new Swiper('.swiper-container-reviews',{
    slidesPerView: 2,
    loop:true,
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
    navItem.addEventListener('click', function (e){
        this.classList.toggle('active');
    })
}


const articlesItems = document.querySelectorAll('.articles__item');

for (let articlesItem of articlesItems) {
    articlesItem.addEventListener('click', function (e){
        this.classList.toggle('active');
    })
}





