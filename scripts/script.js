$('.language__link').on('click', function () {
    $('.language__list').toggleClass('active');
});


$('#about').on('click', function () {
    $('.mainMenu').slideToggle();;
});

$('.accordion__title').on('click', function () {
    $(this).toggleClass('active').next().slideToggle();
    return false;
});

$('.info__slider').slick({
    arrows: false,
    swipe: true,
    dots: true,
    adaptiveHeight: true
});

$('.burger__menu').on('click', function () {
    $('.header__menu').slideToggle();
    return false;
})


if ($(window).width() <= '750') {
    $('.menu__list-link').on('click', function () {
        $('.header__menu').slideToggle();
    })
}

$('.credits-contract').on('click', function () {
    $(this).toggleClass('active').parent(this).next().slideToggle();
})




$('.tabs__name-item').not('.active').click(function () {
    let index = $(this).index();
    let content = $('.tabs-content__item').eq(index);
    $(this).addClass('active').siblings().removeClass('active');
    $('.tabs__content-item').css('display', 'none').eq(index).css('display', 'block');
})

$(".tabs__name-item:first").addClass("active");
$(".tabs__content-item:first").css("display", "block");


$('.pay-cards-btn').on('click', function () {
    $('.pay-cards-add').slideToggle();
    return false;
})


$('.file').on('change', function () {
    $(this).children('.select-file').css('display', 'none');
    $(this).children('.downloaded-file').css('display', 'inline-block');
})

$('select').on('change', function () {
    $(this).css('color', '#333');
    $('.lang').css('color', '#fff');
})

$('#radio_idCard').on('click', function (event) {
    $('.passport__content-section').removeClass('visible');
    $('.idCard__content-section').addClass('visible');
    $('.passport__inner').removeClass('visible');
    $('.idCard__inner').addClass('visible');
})
$('#radio_passport').on('click', function (event) {
    $('.passport__content-section').addClass('visible');
    $('.idCard__content-section').removeClass('visible');
    $('.passport__inner').addClass('visible');
    $('.idCard__inner').removeClass('visible');
})
$('.passport__content-section').addClass('visible');
$('.passport__inner').addClass('visible');

$('#step__btn-next').on('click', function () {
    $('.reg__step-code').eq(0).fadeOut();
    $('.reg__step-code').eq(1).fadeIn();
    $('.step__inner-num>span').html('3')
    $('.svg__path.two').addClass('finish');
    $('.svg__path.three').addClass('active');
    return false;
})

$('#step__btn-prev').on('click', function () {
    $('.reg__step-code').eq(1).fadeOut();
    $('.reg__step-code').eq(0).fadeIn();
    $('.step__inner-num>span').html('2');
    $('.svg__path.two').removeClass('finish');
    $('.svg__path.three').removeClass('active');
    return false;
})

$('.reg__step-code').eq(1).css('display', 'none');

$('#price-range-filter-header').click(function () {
    FilterContainerSlideUpDown('filter_but', 'price-range-filter-header');
});
$(function () {
    $("#slider-range").slider({
        range: true,
        min: 0,
        max: 300,
        values: [0, 300],
        step: 5,
        slide: function (event, ui) {
            $("#slider-range-caption").html('<?=$currency_type->symbol?>' + ui.values[0] + ' - ' + '<?=$currency_type->symbol?>' + ui.values[1]);
        },
        change: function (event, ui) {
            ApplyPriceRangeFilter(ui.values[0], ui.values[1]);
        }

    });

    $("#slider-range-caption").html('<?=$currency_type->symbol?>' + $("#slider-range").slider("values", 0) + ' - ' + '<?=$currency_type->symbol?>' + $("#slider-range").slider("values", 1));

    //initialise jquery scrollbar
});


$('.account-name').on('click', function () {
    $('.account__menu').slideToggle()
})
$('.account__name-phone').on('click', function () {
    $('.account__menu-phone').slideToggle()
})