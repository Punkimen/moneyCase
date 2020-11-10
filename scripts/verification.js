$('.account-verifications__exit').on('click', function() {
    $(this).parent().hide()
})

// function


if (jQuery(window).width() > 510) {
    var max_col_height = 0; // максимальная высота, первоначально 0
    $('.verification-item').each(function() { // цикл "для каждой из колонок"
        if ($(this).height() > max_col_height) { // если высота колонки больше значения максимальной высоты,
            max_col_height = $(this).height(); // то она сама становится новой максимальной высотой
        }
    });
    $('.verification-item').height(max_col_height); // устанавливаем высоту каждой колонки равной значению максимальной высоты
}

$('.photo__nowork-btn').on('click', function() {
    $('.photo__wrapper-do').hide();
    $('.photo__nowork').hide();
    $('.take__photo-phone').show();
    $('.photo-do .verification-content__subtitle').hide()
})
$('.photo__work-btn').on('click', function() {
    $('.photo__wrapper-do').show();
    $('.photo__nowork').show();
    $('.take__photo-phone').hide();
    $('.photo-do .verification-content__subtitle').show()
})