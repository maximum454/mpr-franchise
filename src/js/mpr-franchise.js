@@include('./partials/remodal.js')

$(function () {
    $('a[href^="#"]').on('click', function(event) {
        // отменяем стандартное действие
        event.preventDefault();

        var sc = $(this).attr("href"),
            dn = $(sc).offset().top-130;

        $('html, body').animate({scrollTop: dn}, 1000);
    });


})

menu.addEventListener('click', (e) => {
    const target = e.target;
    const nav = document.querySelector('.nav');
    nav.classList.toggle('active');
    target.classList.toggle('active');
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
})





