
$(document).ready(function () {

    $('.more').click(function () {
        $(this).toggleClass('in').prev().slideToggle(1000);
        $('.more').not(this).removeClass('in').prev().slideUp(1000);
        $('.more').not(this).children('p').html('Подробнее');
        $('.more').not(this).find('.fa-angle-up').css('display', 'none')
        $('.more').not(this).find('.fa-angle-down').css('display', 'block')

        if ($(this).find('.fa-angle-up').css('display') == 'none') {
            $(this).find('.fa-angle-up').css('display', 'block');
            $(this).find('.fa-angle-down').css('display', 'none');
            $(this).children('p').html('Свернуть');
        } else {
            $(this).find('.fa-angle-up').css('display') == 'block'
            $(this).find('.fa-angle-up').css('display', 'none');
            $(this).find('.fa-angle-down').css('display', 'block');
            $(this).children('p').html('Подробнее')
        }
    })

    $('.new').click(function () {
        alert('Мы работаем над этим!');
    })
})