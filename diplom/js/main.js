(function($) {

$('.js-open').on('click', function(){
    $('.menu').addClass('mob-menu');
    $('.js-close').addClass('close');
})
$('.js-close').on('click', function(){
    $('.menu').removeClass('mob-menu');
    $('.close').removeClass('close');
})

})(jQuery);