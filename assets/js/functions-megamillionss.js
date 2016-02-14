
/*-------------------------------------------------------*/
/*-----------------Megamillions Functions----------------*/
/*-------------------------------------------------------*/


jQuery(function($){
    $('.megamillions-numbers').click(function() {
        $(this).addClass('megamillions-number-was-selected');
    })
});

jQuery(function($){
    $(".megamillions-main-numbers").on('mousedown', function(e) {
        e.preventDefault();
        e.stopPropagation();


        // get the number of items already selected:
        var ctSelected = $(this).siblings('.megamillions-number-selected').length;

        if (ctSelected >= 5) {

            jQuery(function($){
                $('.error-message-for-main-numbers').addClass('bounceInUp').css('display', 'block').delay(3000).fadeOut('slow');
            });

        } else {
            $(this).toggleClass('megamillions-number-selected');
            if($(this).hasClass('megamillions-number-selected')){
                ctSelected++;
            } else {
                ctSelected--;
            }
        }

        if (ctSelected >= 0) {
            $(this).parents('.ticket-holder').find('.quick-pick-button').css('background', '#003B9A');
            $(this).parents('.ticket-holder').addClass('ticket-holder-shadow');
            $(this).parents('.main-numbers').find('p').css('display', 'none');
            $(this).parents('.ticket-holder').css('background', '#ffffff');

        } else {
            $(this).parents('.ticket-holder').find('.quick-pick-button').css('background', '#266CA8');
            $(this).parents('.ticket-holder').removeClass('ticket-holder-shadow');
            $(this).parents('.main-numbers').find('p').css('display', 'block');
            $(this).parents('.ticket-holder').css('background', '#ffffff');
        }

        if (ctSelected == 0) {
            $(this).parents('.ticket-holder').find('.ticket-select-info').html('Select 5 Numbers').css('color', '#333333');
        } else {
            if (ctSelected == 1) {
                $(this).parents('.ticket-holder').find('.ticket-select-info').html('Select 4 More').css('color', '#333333');
            } else {

                if (ctSelected == 2) {
                    $(this).parents('.ticket-holder').find('.ticket-select-info').html('Select 3 More').css('color', '#333333');
                } else {

                    if (ctSelected == 3) {
                        $(this).parents('.ticket-holder').find('.ticket-select-info').html('Select 2 More').css('color', '#333333');
                    } else {

                        if (ctSelected == 4) {
                            $(this).parents('.ticket-holder').find('.ticket-select-info').html('Select 1 More').css('color', '#333333');
                        } else {

                            if (ctSelected == 5) {
                                $(this).parents('.ticket-holder').find('.ticket-select-info').html('All good here!').css('color', 'green');
                            }
                        }
                    }
                }
            }
        }


    });
});

jQuery(function($){
    $(".megamillions-super").on('mousedown', function(e) {
        e.preventDefault();
        e.stopPropagation();

        // get the number of items already selected:
        var ctSelected = $(this).siblings('.megamillions-number-selected').length;

        if (ctSelected >= 1) {
            jQuery(function($){
                $('.error-message-for-power-numbers').addClass('bounceInUp').css('display', 'block').delay(3000).fadeOut('slow');
            });

        } else {
            $(this).toggleClass('megamillions-number-selected');

        }
        if (ctSelected == 0) {

            $(this).parents('.ticket-holder').find('.ticket-select-info-bottom p').html('All good here!').css('color', 'green');

        } else {

            $(this).parents('.ticket-holder').find('.ticket-select-info-bottom p').html('Select Your Mega Ball').css('color', '#333333');
        }

    });
});


$(".quick-pick-button-1-megamillions").on("click", function first() {



    $('.megamillions-first-ticket').removeClass('megamillions-number-selected');
    var randomNumbers = $(".megamillions-first-ticket").get().sort(function() {
        return Math.round(Math.random()) - 0.1;
    }).slice(0, 5);
    $(randomNumbers).addClass('megamillions-number-selected').addClass('megamillions-number-was-selected');

    $('.megamillions-first-ticket-power').removeClass('megamillions-number-selected');
    var randomPower = $(".megamillions-first-ticket-power").get().sort(function() {
        return Math.round(Math.random()) - 0.1;
    }).slice(0, 1);
    $(randomPower).addClass('megamillions-number-selected').addClass('megamillions-number-was-selected');

    $(this).parents('.ticket-holder').find('.quick-pick-button').css('background', '#003B9A ');

    $(this).parents('.ticket-holder').addClass('ticket-holder-shadow');

    $(this).parents('.ticket-holder').css('background', '#ffffff');
    $(this).parents('.ticket-holder').find('.main-numbers p').css('display', 'none');
    $(this).parents('.ticket-holder').find('.ticket-select-info').html('All good here!').css('color', 'green');
    $(this).parents('.ticket-holder').find('.ticket-select-info-bottom p').html('All good here!').css('color', 'green');



});


$(".quick-pick-button-2-megamillions").on("click", function() {
    $('.megamillions-second-ticket').removeClass('megamillions-number-selected');
    var randomNumbers = $(".megamillions-second-ticket").get().sort(function() {
        return Math.round(Math.random()) - 0.1;
    }).slice(15, 20);
    $(randomNumbers).addClass('megamillions-number-selected').addClass('megamillions-number-was-selected');

    $('.megamillions-second-ticket-power').removeClass('megamillions-number-selected');
    var randomPower = $(".megamillions-second-ticket-power").get().sort(function() {
        return Math.round(Math.random()) - 0.1;
    }).slice(0, 1);
    $(randomPower).addClass('megamillions-number-selected').addClass('megamillions-number-was-selected');

    $(this).parents('.ticket-holder').find('.quick-pick-button').css('background', '#003B9A ');

    $(this).parents('.ticket-holder').addClass('ticket-holder-shadow');

    $(this).parents('.ticket-holder').css('background', '#ffffff');
    $(this).parents('.ticket-holder').find('.main-numbers p').css('display', 'none');
    $(this).parents('.ticket-holder').find('.ticket-select-info').html('All good here!').css('color', 'green');
    $(this).parents('.ticket-holder').find('.ticket-select-info-bottom p').html('All good here!').css('color', 'green');

});

$(".quick-pick-button-3-megamillions").on("click", function() {
    $('.megamillions-third-ticket').removeClass('megamillions-number-selected');
    var randomNumbers = $(".megamillions-third-ticket").get().sort(function() {
        return Math.round(Math.random()) - 0.1;
    }).slice(15, 20);
    $(randomNumbers).addClass('megamillions-number-selected').addClass('megamillions-number-was-selected');

    $('.megamillions-third-ticket-power').removeClass('megamillions-number-selected');
    var randomPower = $(".megamillions-third-ticket-power").get().sort(function() {
        return Math.round(Math.random()) - 0.1;
    }).slice(0, 1);
    $(randomPower).addClass('megamillions-number-selected').addClass('megamillions-number-was-selected');

    $(this).parents('.ticket-holder').find('.quick-pick-button').css('background', '#003B9A ');

    $(this).parents('.ticket-holder').addClass('ticket-holder-shadow');

    $(this).parents('.ticket-holder').css('background', '#ffffff');
    $(this).parents('.ticket-holder').find('.main-numbers p').css('display', 'none');
    $(this).parents('.ticket-holder').find('.ticket-select-info').html('All good here!').css('color', 'green');
    $(this).parents('.ticket-holder').find('.ticket-select-info-bottom p').html('All good here!').css('color', 'green');
});


$(".quick-pick-button-4-megamillions").on("click", function() {
    $('.megamillions-fourth-ticket').removeClass('megamillions-number-selected');
    var randomNumbers = $(".megamillions-fourth-ticket").get().sort(function() {
        return Math.round(Math.random()) - 0.1;
    }).slice(15, 20);
    $(randomNumbers).addClass('megamillions-number-selected').addClass('megamillions-number-was-selected');

    $('.megamillions-fourth-ticket-power').removeClass('megamillions-number-selected');
    var randomPower = $(".megamillions-fourth-ticket-power").get().sort(function() {
        return Math.round(Math.random()) - 0.1;
    }).slice(0, 1);
    $(randomPower).addClass('megamillions-number-selected').addClass('megamillions-number-was-selected');

    $(this).parents('.ticket-holder').find('.quick-pick-button').css('background', '#003B9A ');

    $(this).parents('.ticket-holder').addClass('ticket-holder-shadow');

    $(this).parents('.ticket-holder').css('background', '#ffffff');
    $(this).parents('.ticket-holder').find('.main-numbers p').css('display', 'none');
    $(this).parents('.ticket-holder').find('.ticket-select-info').html('All good here!').css('color', 'green');
    $(this).parents('.ticket-holder').find('.ticket-select-info-bottom p').html('All good here!').css('color', 'green');
});

$(".quick-pick-button-5-megamillions").on("click", function() {
    $('.megamillions-fifth-ticket').removeClass('megamillions-number-selected');
    var randomNumbers = $(".megamillions-fifth-ticket").get().sort(function() {
        return Math.round(Math.random()) - 0.1;
    }).slice(15, 20);
    $(randomNumbers).addClass('megamillions-number-selected').addClass('megamillions-number-was-selected');

    $('.megamillions-fifth-ticket-power').removeClass('megamillions-number-selected');
    var randomPower = $(".megamillions-fifth-ticket-power").get().sort(function() {
        return Math.round(Math.random()) - 0.1;
    }).slice(0, 1);
    $(randomPower).addClass('megamillions-number-selected').addClass('megamillions-number-was-selected');

    $(this).parents('.ticket-holder').find('.quick-pick-button').css('background', '#003B9A ');

    $(this).parents('.ticket-holder').addClass('ticket-holder-shadow');

    $(this).parents('.ticket-holder').css('background', '#ffffff');
    $(this).parents('.ticket-holder').find('.main-numbers p').css('display', 'none');
    $(this).parents('.ticket-holder').find('.ticket-select-info').html('All good here!').css('color', 'green');
    $(this).parents('.ticket-holder').find('.ticket-select-info-bottom p').html('All good here!').css('color', 'green');
});

$(".quick-pick-button-6-megamillions").on("click", function() {
    $('.megamillions-sixth-ticket').removeClass('megamillions-number-selected');
    var randomNumbers = $(".megamillions-sixth-ticket").get().sort(function() {
        return Math.round(Math.random()) - 0.1;
    }).slice(15, 20);
    $(randomNumbers).addClass('megamillions-number-selected').addClass('megamillions-number-was-selected');

    $('.megamillions-sixth-ticket-power').removeClass('megamillions-number-selected');
    var randomPower = $(".megamillions-sixth-ticket-power").get().sort(function() {
        return Math.round(Math.random()) - 0.1;
    }).slice(0, 1);
    $(randomPower).addClass('megamillions-number-selected').addClass('megamillions-number-was-selected');

    $(this).parents('.ticket-holder').find('.quick-pick-button').css('background', '#003B9A ');

    $(this).parents('.ticket-holder').addClass('ticket-holder-shadow');

    $(this).parents('.ticket-holder').css('background', '#ffffff');
    $(this).parents('.ticket-holder').find('.main-numbers p').css('display', 'none');
    $(this).parents('.ticket-holder').find('.ticket-select-info').html('All good here!').css('color', 'green');
    $(this).parents('.ticket-holder').find('.ticket-select-info-bottom p').html('All good here!').css('color', 'green');
});

$(".quick-pick-button-7-megamillions").on("click", function() {
    $('.megamillions-seventh-ticket').removeClass('megamillions-number-selected');
    var randomNumbers = $(".megamillions-seventh-ticket").get().sort(function() {
        return Math.round(Math.random()) - 0.1;
    }).slice(15, 20);
    $(randomNumbers).addClass('megamillions-number-selected').addClass('megamillions-number-was-selected');

    $('.megamillions-seventh-ticket-power').removeClass('megamillions-number-selected');
    var randomPower = $(".megamillions-seventh-ticket-power").get().sort(function() {
        return Math.round(Math.random()) - 0.1;
    }).slice(0, 1);
    $(randomPower).addClass('megamillions-number-selected').addClass('megamillions-number-was-selected');

    $(this).parents('.ticket-holder').find('.quick-pick-button').css('background', '#003B9A ');

    $(this).parents('.ticket-holder').addClass('ticket-holder-shadow');

    $(this).parents('.ticket-holder').css('background', '#ffffff');
    $(this).parents('.ticket-holder').find('.main-numbers p').css('display', 'none');
    $(this).parents('.ticket-holder').find('.ticket-select-info').html('All good here!').css('color', 'green');
    $(this).parents('.ticket-holder').find('.ticket-select-info-bottom p').html('All good here!').css('color', 'green');
});

$(".quick-pick-button-8-megamillions").on("click", function() {
    $('.megamillions-eight-ticket').removeClass('megamillions-number-selected');
    var randomNumbers = $(".megamillions-eight-ticket").get().sort(function() {
        return Math.round(Math.random()) - 0.1;
    }).slice(15, 20);
    $(randomNumbers).addClass('megamillions-number-selected').addClass('megamillions-number-was-selected');

    $('.megamillions-eight-ticket-power').removeClass('megamillions-number-selected');
    var randomPower = $(".megamillions-eight-ticket-power").get().sort(function() {
        return Math.round(Math.random()) - 0.1;
    }).slice(0, 1);
    $(randomPower).addClass('megamillions-number-selected').addClass('megamillions-number-was-selected');

    $(this).parents('.ticket-holder').find('.quick-pick-button').css('background', '#003B9A ');

    $(this).parents('.ticket-holder').addClass('ticket-holder-shadow');

    $(this).parents('.ticket-holder').css('background', '#ffffff');
    $(this).parents('.ticket-holder').find('.main-numbers p').css('display', 'none');
    $(this).parents('.ticket-holder').find('.ticket-select-info').html('All good here!').css('color', 'green');
    $(this).parents('.ticket-holder').find('.ticket-select-info-bottom p').html('All good here!').css('color', 'green');
});

$('.thrash-button-1').click(function() {
    $('.megamillions-first-ticket').removeClass('megamillions-number-selected').removeClass('megamillions-number-was-selected');
    $('.megamillions-first-ticket-power').removeClass('megamillions-number-selected').removeClass('megamillions-number-was-selected');
    $(this).parents('.ticket-holder').find('.quick-pick-button').css('background', '#266CA8 ');
    $(this).parents('.ticket-holder').removeClass('ticket-holder-shadow');
    $(this).parents('.ticket-holder').find('.main-numbers p').css('display', 'block');
    $(this).parents('.ticket-holder').css('background', '#ffffff');
    $(this).parents('.ticket-holder').find('.ticket-select-info').html('Select 5 Numbers').css('color', '#333333');
    $(this).parents('.ticket-holder').find('.ticket-select-info-bottom p').html('Select Your Mega Ball').css('color', '#333333');

});

$('.thrash-button-2').click(function() {
    $('.megamillions-second-ticket').removeClass('megamillions-number-selected').removeClass('megamillions-number-was-selected');
    $('.megamillions-second-ticket-power').removeClass('megamillions-number-selected').removeClass('megamillions-number-was-selected');
    $(this).parents('.ticket-holder').find('.quick-pick-button').css('background', '#266CA8 ');
    $(this).parents('.ticket-holder').removeClass('ticket-holder-shadow');
    $(this).parents('.ticket-holder').find('.main-numbers p').css('display', 'block');
    $(this).parents('.ticket-holder').css('background', '#ffffff');
    $(this).parents('.ticket-holder').find('.ticket-select-info').html('Select 5 Numbers').css('color', '#333333');
    $(this).parents('.ticket-holder').find('.ticket-select-info-bottom p').html('Select Your Mega Ball').css('color', '#333333');
});

$('.thrash-button-3').click(function() {
    $('.megamillions-third-ticket').removeClass('megamillions-number-selected').removeClass('megamillions-number-was-selected');
    $('.megamillions-third-ticket-power').removeClass('megamillions-number-selected').removeClass('megamillions-number-was-selected');
    $(this).parents('.ticket-holder').find('.quick-pick-button').css('background', '#266CA8 ');
    $(this).parents('.ticket-holder').removeClass('ticket-holder-shadow');
    $(this).parents('.ticket-holder').find('.main-numbers p').css('display', 'block');
    $(this).parents('.ticket-holder').css('background', '#ffffff');
    $(this).parents('.ticket-holder').find('.ticket-select-info').html('Select 5 Numbers').css('color', '#333333');
    $(this).parents('.ticket-holder').find('.ticket-select-info-bottom p').html('Select Your Mega Ball').css('color', '#333333');
});

$('.thrash-button-4').click(function() {
    $('.megamillions-fourth-ticket').removeClass('megamillions-number-selected').removeClass('megamillions-number-was-selected');
    $('.megamillions-fourth-ticket-power').removeClass('megamillions-number-selected').removeClass('megamillions-number-was-selected');
    $(this).parents('.ticket-holder').find('.quick-pick-button').css('background', '#266CA8 ');
    $(this).parents('.ticket-holder').removeClass('ticket-holder-shadow');
    $(this).parents('.ticket-holder').find('.main-numbers p').css('display', 'block');
    $(this).parents('.ticket-holder').css('background', '#ffffff');
    $(this).parents('.ticket-holder').find('.ticket-select-info').html('Select 5 Numbers').css('color', '#333333');
    $(this).parents('.ticket-holder').find('.ticket-select-info-bottom p').html('Select Your Mega Ball').css('color', '#333333');
});

$('.thrash-button-5').click(function() {
    $('.megamillions-fifth-ticket').removeClass('megamillions-number-selected').removeClass('megamillions-number-was-selected');
    $('.megamillions-fifth-ticket-power').removeClass('megamillions-number-selected').removeClass('megamillions-number-was-selected');
    $(this).parents('.ticket-holder').find('.quick-pick-button').css('background', '#266CA8 ');
    $(this).parents('.ticket-holder').removeClass('ticket-holder-shadow');
    $(this).parents('.ticket-holder').find('.main-numbers p').css('display', 'block');
    $(this).parents('.ticket-holder').css('background', '#ffffff');
    $(this).parents('.ticket-holder').find('.ticket-select-info').html('Select 5 Numbers').css('color', '#333333');
    $(this).parents('.ticket-holder').find('.ticket-select-info-bottom p').html('Select Your Mega Ball').css('color', '#333333');
});

$('.thrash-button-6').click(function() {
    $('.megamillions-sixth-ticket').removeClass('megamillions-number-selected').removeClass('megamillions-number-was-selected');
    $('.megamillions-sixth-ticket-power').removeClass('megamillions-number-selected').removeClass('megamillions-number-was-selected');
    $(this).parents('.ticket-holder').find('.quick-pick-button').css('background', '#266CA8 ');
    $(this).parents('.ticket-holder').removeClass('ticket-holder-shadow');
    $(this).parents('.ticket-holder').find('.main-numbers p').css('display', 'block');
    $(this).parents('.ticket-holder').css('background', '#ffffff');
    $(this).parents('.ticket-holder').find('.ticket-select-info').html('Select 5 Numbers').css('color', '#333333');
    $(this).parents('.ticket-holder').find('.ticket-select-info-bottom p').html('Select Your Mega Ball').css('color', '#333333');
});

$('.thrash-button-7').click(function() {
    $('.megamillions-seventh-ticket').removeClass('megamillions-number-selected').removeClass('megamillions-number-was-selected');
    $('.megamillions-seventh-ticket-power').removeClass('megamillions-number-selected').removeClass('megamillions-number-was-selected');
    $(this).parents('.ticket-holder').find('.quick-pick-button').css('background', '#266CA8 ');
    $(this).parents('.ticket-holder').removeClass('ticket-holder-shadow');
    $(this).parents('.ticket-holder').find('.main-numbers p').css('display', 'block');
    $(this).parents('.ticket-holder').css('background', '#ffffff');
    $(this).parents('.ticket-holder').find('.ticket-select-info').html('Select 5 Numbers').css('color', '#333333');
    $(this).parents('.ticket-holder').find('.ticket-select-info-bottom p').html('Select Your Mega Ball').css('color', '#333333');
});

$('.thrash-button-8').click(function() {
    $('.megamillions-eight-ticket').removeClass('megamillions-number-selected').removeClass('megamillions-number-was-selected');
    $('.megamillions-eight-ticket-power').removeClass('megamillions-number-selected').removeClass('megamillions-number-was-selected');
    $(this).parents('.ticket-holder').find('.quick-pick-button').css('background', '#266CA8 ');
    $(this).parents('.ticket-holder').removeClass('ticket-holder-shadow');
    $(this).parents('.ticket-holder').find('.main-numbers p').css('display', 'block');
    $(this).parents('.ticket-holder').css('background', '#ffffff');
    $(this).parents('.ticket-holder').find('.ticket-select-info').html('Select 5 Numbers').css('color', '#333333');
    $(this).parents('.ticket-holder').find('.ticket-select-info-bottom p').html('Select Your Mega Ball').css('color', '#333333');
});




$(".quick-pick-all-megamillions").click(function() {

    $('.megamillions-fifth-ticket').removeClass('megamillions-number-selected');
    var randomNumbers = $(".megamillions-fifth-ticket").get().sort(function() {
        return Math.round(Math.random()) - 0.1;
    }).slice(0, 5);
    $(randomNumbers).addClass('megamillions-number-selected').addClass('megamillions-number-was-selected');

    $('.megamillions-fifth-ticket-power').removeClass('megamillions-number-selected');
    var randomPower = $(".megamillions-fifth-ticket-power").get().sort(function() {
        return Math.round(Math.random()) - 0.1;
    }).slice(0, 1);
    $(randomPower).addClass('megamillions-number-selected').addClass('megamillions-number-was-selected');

    $('.megamillions-sixth-ticket').removeClass('megamillions-number-selected');
    var randomNumbers = $(".megamillions-sixth-ticket").get().sort(function() {
        return Math.round(Math.random()) - 0.1;
    }).slice(0, 5);
    $(randomNumbers).addClass('megamillions-number-selected').addClass('megamillions-number-was-selected');

    $('.megamillions-sixth-ticket-power').removeClass('megamillions-number-selected');
    var randomPower = $(".megamillions-sixth-ticket-power").get().sort(function() {
        return Math.round(Math.random()) - 0.1;
    }).slice(0, 1);
    $(randomPower).addClass('megamillions-number-selected').addClass('megamillions-number-was-selected');

    $('.megamillions-seventh-ticket').removeClass('megamillions-number-selected');
    var randomNumbers = $(".megamillions-seventh-ticket").get().sort(function() {
        return Math.round(Math.random()) - 0.1;
    }).slice(0, 5);
    $(randomNumbers).addClass('megamillions-number-selected').addClass('megamillions-number-was-selected');

    $('.megamillions-seventh-ticket-power').removeClass('megamillions-number-selected');
    var randomPower = $(".megamillions-seventh-ticket-power").get().sort(function() {
        return Math.round(Math.random()) - 0.1;
    }).slice(0, 1);
    $(randomPower).addClass('megamillions-number-selected').addClass('megamillions-number-was-selected');

    $('.megamillions-eight-ticket').removeClass('megamillions-number-selected');
    var randomNumbers = $(".megamillions-eight-ticket").get().sort(function() {
        return Math.round(Math.random()) - 0.1;
    }).slice(0, 5);
    $(randomNumbers).addClass('megamillions-number-selected').addClass('megamillions-number-was-selected');

    $('.megamillions-eight-ticket-power').removeClass('megamillions-number-selected');
    var randomPower = $(".megamillions-eight-ticket-power").get().sort(function() {
        return Math.round(Math.random()) - 0.1;
    }).slice(0, 1);
    $(randomPower).addClass('megamillions-number-selected').addClass('megamillions-number-was-selected');

    $('.megamillions-first-ticket').removeClass('megamillions-number-selected');
    var randomNumbers = $(".megamillions-first-ticket").get().sort(function() {
        return Math.round(Math.random()) - 0.1;
    }).slice(0, 5);
    $(randomNumbers).addClass('megamillions-number-selected').addClass('megamillions-number-was-selected');

    $('.megamillions-first-ticket-power').removeClass('megamillions-number-selected');
    var randomPower = $(".megamillions-first-ticket-power").get().sort(function() {
        return Math.round(Math.random()) - 0.1;
    }).slice(0, 1);
    $(randomPower).addClass('megamillions-number-selected').addClass('megamillions-number-was-selected');

    $('.megamillions-second-ticket').removeClass('megamillions-number-selected');
    var randomNumbers = $(".megamillions-second-ticket").get().sort(function() {
        return Math.round(Math.random()) - 0.1;
    }).slice(0, 5);
    $(randomNumbers).addClass('megamillions-number-selected').addClass('megamillions-number-was-selected');

    $('.megamillions-second-ticket-power').removeClass('megamillions-number-selected');
    var randomPower = $(".megamillions-second-ticket-power").get().sort(function() {
        return Math.round(Math.random()) - 0.1;
    }).slice(0, 1);
    $(randomPower).addClass('megamillions-number-selected').addClass('megamillions-number-was-selected');

    $('.megamillions-third-ticket').removeClass('megamillions-number-selected');
    var randomNumbers = $(".megamillions-third-ticket").get().sort(function() {
        return Math.round(Math.random()) - 0.1;
    }).slice(0, 5);
    $(randomNumbers).addClass('megamillions-number-selected').addClass('megamillions-number-was-selected');

    $('.megamillions-third-ticket-power').removeClass('megamillions-number-selected');
    var randomPower = $(".megamillions-third-ticket-power").get().sort(function() {
        return Math.round(Math.random()) - 0.1;
    }).slice(0, 1);
    $(randomPower).addClass('megamillions-number-selected').addClass('megamillions-number-was-selected');

    $('.megamillions-fourth-ticket').removeClass('megamillions-number-selected');
    var randomNumbers = $(".megamillions-fourth-ticket").get().sort(function() {
        return Math.round(Math.random()) - 0.1;
    }).slice(0, 5);
    $(randomNumbers).addClass('megamillions-number-selected').addClass('megamillions-number-was-selected');

    $('.megamillions-fourth-ticket-power').removeClass('megamillions-number-selected');
    var randomPower = $(".megamillions-fourth-ticket-power").get().sort(function() {
        return Math.round(Math.random()) - 0.1;
    }).slice(0, 1);
    $(randomPower).addClass('megamillions-number-selected').addClass('megamillions-number-was-selected');

    $('.quick-pick-button').css('background', '#003B9A ');
    $('.ticket-holder').addClass('ticket-holder-shadow');
    $('.main-numbers').find('p').css('display', 'none');
    $('.ticket-holder').css('background', '#ffffff');
    $('.ticket-holder').find('.ticket-select-info').html('All good here!').css('color', 'green');
    $('.ticket-holder').find('.ticket-select-info-bottom p').html('All good here!').css('color', 'green');



});




$(".clear-all").click(function() {
    $('.megamillions-main-numbers').removeClass('megamillions-number-selected').removeClass('megamillions-number-was-selected');
    $('.round-number').removeClass('megamillions-number-selected').removeClass('megamillions-number-was-selected');
    $('.quick-pick-button').css('background', '#266CA8 ');
    $('.ticket-holder').removeClass('ticket-holder-shadow');
    $('.main-numbers').find('p').css('display', 'block');
    $('.ticket-holder').css('background', '#e5e5e5');
    $('.ticket-holder').find('.ticket-select-info').html('Select 5 Numbers').css('color', '#333333');
    $('.ticket-holder').find('.ticket-select-info-bottom p').html('Select Your Mega Ball').css('color', '#333333');
});

