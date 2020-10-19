$(document).ready(function() {
    $('.circle-container').find('a').click(function(event) {
        event.preventDefault();
    });
    $('.circle-container').find('li').hover(function() {
        $('.circle-container').find('li').removeClass('active');
        $(this).addClass('active');
        $('.services-container').find('li.active').removeClass('active animated fadeIn');

        $(".services-container").find('li').eq($(this).data('id')).addClass('active animated fadeIn');

    });


    $(".gallery-title").not('.title-first').each(anime);
    $(".work-info__title").not('.title-first').each(anime);
    $(".work-info__item").not('.title-first').each(anime);
    $(".marquiz__container").not('.title-first').each(anime);

    function anime(anim){
        var offsetTop = $(this).offset().top - $(window).height();
        var thisTitle = $(this);
        $(window).scroll(function(event) {
            if($(document).scrollTop() > offsetTop ){
                if(!$(this).hasClass('fade_in')){
                    thisTitle.addClass('fade_in');
                }
            }
        });
    }

    Marquiz.init({
        host: '//quiz.marquiz.ru',
        id: '5f894df75fbea600441d5e4e',
        autoOpen: false,
        autoOpenFreq: 'once',
        openOnExit: false
    });

    (async () => {
        if ('loading' in HTMLImageElement.prototype) {
            const images = document.querySelectorAll("img.lazyload");
            images.forEach(img => {
                img.src = img.dataset.src;
            });
        } else {
            // Динамически импортируем библиотеку LazySizes
            const lazySizesLib = await import('/lazysizes.min.js');
            // Инициализируем LazySizes (читаем data-src & class=lazyload)
            lazySizes.init(); // lazySizes применяется при обработке изображений, находящихся на странице.
        }
    })();

    $('.btn').on('click', function(e){
        $('html,body').stop().animate({ scrollTop: $('#onlineforma').offset().top }, 1000);
        e.preventDefault();
    });

});