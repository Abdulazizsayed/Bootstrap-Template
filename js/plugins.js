$(document).ready(function(){
    // trigger carousel
    $('.carousel').carousel({
        interval: 5000,
    });

    // show gear
    $('.gear-check').click(function(){
        $('.color-option').fadeToggle(1000);
    });

    // change colors
    $.each($('.option-box .color-option .colors li'), function(i, li){
        $(li).click(function(){
            document.documentElement.style.setProperty('--main-color', `${$(this).css('backgroundColor')}`);
        });
    });

    // scroll to top
    $('.top-scroll').click(function(){
        $('html, body').animate({
            scrollTop: $('body').offset().top,
        }, 1000);
    });

    // trigger wow
    new WOW().init();
});

// loading screen
$(window).load(function(){
    
    $('.loading-overlay .sk-chase').fadeOut(1000, function(){
        // show scroll
        $('body').css('overflow', 'auto');

        $(this).parent().fadeOut(1000, function(){
            $(this).remove();
        });
    });
});