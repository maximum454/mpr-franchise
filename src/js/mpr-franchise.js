

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





