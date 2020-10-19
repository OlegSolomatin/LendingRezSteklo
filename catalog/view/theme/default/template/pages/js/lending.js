$(document).ready(function () {

    $('#phone').mask('+7 (999) 999-99-99');
    $('#phone2').mask('+7 (999) 999-99-99');
    $('#phone3').mask('+7 (999) 999-99-99');
    $('#phone4').mask('+7 (999) 999-99-99');

    /*function getTimeRemaining(endtime) {
        var t = Date.parse(endtime) - Date.parse(new Date());
        var seconds = Math.floor((t / 1000) % 60);
        var minutes = Math.floor((t / 1000 / 60) % 60);
        var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
        var days = Math.floor(t / (1000 * 60 * 60 * 24));
        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function initializeClock(id, endtime) {
        var clock = document.getElementById(id);
        var daysSpan = clock.querySelector('.days');
        var hoursSpan = clock.querySelector('.hours');
        var minutesSpan = clock.querySelector('.minutes');
        var secondsSpan = clock.querySelector('.seconds');

        function updateClock() {
            var t = getTimeRemaining(endtime);

            daysSpan.innerHTML = t.days;
            hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
            minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
            secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

            if (t.total <= 0) {
                clearInterval(timeinterval);
            }
        }

        updateClock();
        var timeinterval = setInterval(updateClock, 1000);
    }

    var deadline="January 01 2018 00:00:00 GMT+0300"; //for Ukraine
    var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000); // for endless timer
    initializeClock('countdown', deadline);*/

    const items = document.querySelectorAll('.catalog__item');
    const item = document.querySelector('.catalog__item');

    function cLog(content) {
        console.log(content)
    }
    if($(window).width() > 800) {
        $(document).on("mouseover", ".catalog__item", function (_event, _element) {
            var catalogItem = document.querySelectorAll('.catalog__item');
            catalogItem.forEach(function (element, index) {
                element.addEventListener('mouseover', function () {
                    var x = this.getBoundingClientRect().left;
                    var y = this.getBoundingClientRect().top;
                    var width = this.getBoundingClientRect().width;
                    var height = this.getBoundingClientRect().height;
                    $('.catalog__item').removeClass('active');
                    // $('.catalog__item').removeClass('active');
                });
                element.addEventListener('mouseleave', function () {
                    $('.catalog__item').removeClass('active');
                });
            });
        });
    }
    var swiper = new Swiper('.catalog-slider', {
        effect: 'coverflow',
        grabCursor: true,
        loop: true,
        centeredSlides: true,
        keyboard: true,
        spaceBetween: 0,
        slidesPerView: 'auto',
        speed: 300,
        coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows : false,
        },
        breakpoints: {
            480: {
                spaceBetween: 0,
                centeredSlides: true
            }
        },
        simulateTouch: true,
        navigation: {
            nextEl: '.catalog-slider-next',
            prevEl: '.catalog-slider-prev'
        },
        pagination: {
            el: '.catalog-slider__pagination',
            clickable: true
        },
        on: {
            init: function () {
                var activeItem = document.querySelector('.swiper-slide-active');
                var sliderItem = activeItem.querySelector('.catalog__item');
                $('.swiper-slide-active .catalog__item').addClass('active');
                var x = sliderItem.getBoundingClientRect().left;
                var y = sliderItem.getBoundingClientRect().top;
                var width = sliderItem.getBoundingClientRect().width;
                var height = sliderItem.getBoundingClientRect().height;
            }
        }
    });
    swiper.on('touchEnd', function () {
        $('.catalog__item').removeClass('active');
        $('.swiper-slide-active .catalog__item').addClass('active');
    });
    swiper.on('slideChange', function () {
        $('.catalog__item').removeClass('active');
    });
    swiper.on('slideChangeTransitionEnd', function () {
        $('.catalog__item').removeClass('active');
        var activeItem = document.querySelector('.swiper-slide-active');
        var sliderItem = activeItem.querySelector('.catalog__item');
        $('.swiper-slide-active .catalog__item').addClass('active');
        var x = sliderItem.getBoundingClientRect().left;
        var y = sliderItem.getBoundingClientRect().top;
        var width = sliderItem.getBoundingClientRect().width;
        var height = sliderItem.getBoundingClientRect().height;
    });

    Vue.component("carousel", {
        template: "#v-carousel",
        data() {
            return {
                currentOffset: 0,
                windowSize: 4,
                windowSizeThree: 3,
                windowSizeTwo: 2,
                windowSizeMobile: 1,
                paginationFactor: 250,
                paginationFactorMobile: 250,
                width: 0,
                items: [
                    {name: '<p>Замена окон в доме</p>', tag: '<p>Замена окон по адресу улица пушкина дом...</p>', hrefback: 'http://localhost/index.php?route=page/okna#_', href: 'http://localhost/index.php?route=page/okna#item1', banner: 'catalog/view/theme/default/template/pages/img/okno1.jpg', id: 'item1'},
                    {name: '<p>Замена окон в доме</p>', tag: '<p>Замена окон по адресу улица пушкина дом...</p>', hrefback: 'http://localhost/index.php?route=page/okna#_', href: 'http://localhost/index.php?route=page/okna#item2', banner: 'catalog/view/theme/default/template/pages/img/okno2.jpg', id: 'item2'},
                    {name: '<p>Замена окон в доме</p>', tag: '<p>Замена окон по адресу улица пушкина дом...</p>', hrefback: 'http://localhost/index.php?route=page/okna#_', href: 'http://localhost/index.php?route=page/okna#item3', banner: 'catalog/view/theme/default/template/pages/img/okno3.jpg', id: 'item3'},
                    {name: '<p>Замена окон в доме</p>', tag: '<p>Замена окон по адресу улица пушкина дом...</p>', hrefback: 'http://localhost/index.php?route=page/okna#_', href: 'http://localhost/index.php?route=page/okna#item4', banner: 'catalog/view/theme/default/template/pages/img/okno4.jpg', id: 'item4'},
                    {name: '<p>Замена окон в доме</p>', tag: '<p>Замена окон по адресу улица пушкина дом...</p>', hrefback: 'http://localhost/index.php?route=page/okna#_', href: 'http://localhost/index.php?route=page/okna#item5', banner: 'catalog/view/theme/default/template/pages/img/okno1.jpg', id: 'item5'},
                    {name: '<p>Замена окон в доме</p>', tag: '<p>Замена окон по адресу улица пушкина дом...</p>', hrefback: 'http://localhost/index.php?route=page/okna#_', href: 'http://localhost/index.php?route=page/okna#item6', banner: 'catalog/view/theme/default/template/pages/img/okno2.jpg', id: 'item6'},
                    {name: '<p>Замена окон в доме</p>', tag: '<p>Замена окон по адресу улица пушкина дом...</p>', hrefback: 'http://localhost/index.php?route=page/okna#_', href: 'http://localhost/index.php?route=page/okna#item7', banner: 'catalog/view/theme/default/template/pages/img/okno3.jpg', id: 'item7'},
                    {name: '<p>Замена окон в доме</p>', tag: '<p>Замена окон по адресу улица пушкина дом...</p>', hrefback: 'http://localhost/index.php?route=page/okna#_', href: 'http://localhost/index.php?route=page/okna#item8', banner: 'catalog/view/theme/default/template/pages/img/okno4.jpg', id: 'item8'},
                ]
            }
        },
        computed: {
            atEndOfList() {
                return this.currentOffset <= (this.paginationFactor * -1) * (this.items.length - this.windowSize);
            },
            atHeadOfList() {
                return this.currentOffset === 0;
            },
            atEndOfListThree() {
                return this.currentOffset <= (this.paginationFactor * -1) * (this.items.length - this.windowSizeThree);
            },
            atHeadOfListThree() {
                return this.currentOffset === 0;
            },
            atEndOfListTwo() {
                return this.currentOffset <= (this.paginationFactor * -1) * (this.items.length - this.windowSizeTwo);
            },
            atHeadOfListTwo() {
                return this.currentOffset === 0;
            },
            atEndOfListMobile() {
                return this.currentOffset <= (this.paginationFactorMobile * -1) * (this.items.length - this.windowSizeMobile);
            },
            atHeadOfListMobile() {
                return this.currentOffset === 0;
            },
        },
        methods: {
            updateWidth() {
                this.width = window.innerWidth;
            },
            moveCarousel(direction) {
                // Find a more elegant way to express the :style. consider using props to make it truly generic
                if (direction === 1 && !this.atEndOfList) {
                    this.currentOffset -= this.paginationFactor;
                } else if (direction === -1 && !this.atHeadOfList) {
                    this.currentOffset += this.paginationFactor;
                }
            },
            moveCarouselThree(direction) {
                // Find a more elegant way to express the :style. consider using props to make it truly generic
                if (direction === 1 && !this.atEndOfListThree) {
                    this.currentOffset -= this.paginationFactor;
                } else if (direction === -1 && !this.atHeadOfListThree) {
                    this.currentOffset += this.paginationFactor;
                }
            },
            moveCarouselTwo(direction) {
                // Find a more elegant way to express the :style. consider using props to make it truly generic
                if (direction === 1 && !this.atEndOfListTwo) {
                    this.currentOffset -= this.paginationFactor;
                } else if (direction === -1 && !this.atHeadOfListTwo) {
                    this.currentOffset += this.paginationFactor;
                }
            },
            moveCarouselMobile(direction) {
                // Find a more elegant way to express the :style. consider using props to make it truly generic
                if (direction === 1 && !this.atEndOfListMobile) {
                    this.currentOffset -= this.paginationFactorMobile;
                } else if (direction === -1 && !this.atHeadOfListMobile) {
                    this.currentOffset += this.paginationFactorMobile;
                }
            },
        },
        created() {
            window.addEventListener('resize', this.updateWidth);
            this.updateWidth();
        }
    });

    new Vue({
        el:"#appcarousel"
    });
});