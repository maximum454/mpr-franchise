var swiperStatistic= swiperStatistic;
var swiperStatisticInit = false;


function swiperStatisticMode() {
    let mobile = window.matchMedia('(min-width: 0px) and (max-width: 767px)');
    let desktop = window.matchMedia('(min-width: 1024px)');
    if (mobile.matches) {
        if(swiperStatistic){
            swiperStatistic.destroy();
            swiperStatisticInit = false;
        }


    }

    else if (desktop.matches) {
        if (!swiperStatisticInit) {
            swiperStatisticInit = true;
            swiperStatistic = new Swiper('.swiper-container-statistic', {
                slidesPerView: 'auto',
                loop:false,
                spaceBetween: 165,
                watchOverflow: true,
                watchSlidesVisibility: true,
                watchSlidesProgress: true,
                observer: true,
                freeMode: true,
                navigation: {
                    nextEl: '.swiper-statistic-next',
                },
            });
        }
    }
    swiperStatistic.update();
}

window.addEventListener('load', function() {
    if($('.swiper-container-statistic').length){
        swiperStatisticMode();
    }
});

window.addEventListener('resize', function() {
    if($('.swiper-container-statistic').length){
        swiperStatisticMode();
    }
});
