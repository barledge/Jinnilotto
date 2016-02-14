/**

 * Created by Petar on 12/8/2015.

 */







/*----------------------------------------------------*/

/*-----------------megamillions Functions----------------*/

/*----------------------------------------------------*/





jQuery(function($){

    $('.megamillions-numbers').click(function() {

        $(this).addClass('megamillions-number-was-selected');

    })

});





jQuery(function($){

    $(".megamillions-main-numbers").on('mousedown',  function(evt) {



        evt.preventDefault();

        evt.stopPropagation();





        // get the number of items already selected:

        var ctSelected = $(this).parent().find('.megamillions-number-selected').length;



        if (ctSelected >= 5) {

            if($(this).hasClass('megamillions-number-selected')){

                $(this).toggleClass('megamillions-number-selected');

                ctSelected--;

            } else {

                jQuery(function($){

                    $('.error-message-for-main-numbers').addClass('bounceInUp').css('display', 'block').delay(3000).fadeOut('slow');

                });

                return;

            }

        } else {

            $(this).toggleClass('megamillions-number-selected');

            if($(this).hasClass('megamillions-number-selected')){

                ctSelected++;

            } else {

                ctSelected--;

            }

        }





        if (ctSelected >= 0) {

            $(this).parents('.ticket-holder').find('.quick-pick-button').css('background', '#e68000');

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



        checkIfComplete($(this).parent().parent());

    });



});







jQuery(function($){

    $(".megamillions-super").on('mousedown', function(evt) {

        evt.preventDefault();

        evt.stopPropagation();



        // get the number of items already selected:

        var ctSelected = $(this).siblings('.megamillions-number-selected').length;



        if (ctSelected >= 1) {

            jQuery(function($){

                $('.error-message-for-power-numbers').addClass('bounceInUp').css('display', 'block').delay(3000).fadeOut('slow');

            });

        } else {

            $(this).toggleClass('megamillions-number-selected');

            if($(this).hasClass('megamillions-number-selected')){

                ctSelected++;

            } else {

                ctSelected--;

            }



        }

        if (ctSelected == 1) {



            $(this).parents('.ticket-holder').find('.ticket-select-info-bottom p').html('All good here!').css('color', 'green');



        } else {



            $(this).parents('.ticket-holder').find('.ticket-select-info-bottom p').html('Select 1 Number').css('color', '#333333');

        }

        checkIfComplete($(this).parent().parent());

    });

});





$(".quick-pick-button-1-megamillions").on("click", function first() {

    quickPickFirstTicket();

});





$(".quick-pick-button-2-megamillions").on("click", function() {

    quickPickSecondTicket();

});



$(".quick-pick-button-3-megamillions").on("click", function() {

    quickPickThirdTicket();

});





$(".quick-pick-button-4-megamillions").on("click", function() {

    quickPickFourthTicket();

});



$(".quick-pick-button-5-megamillions").on("click", function() {

    quickPickFifthTicket();

});



$(".quick-pick-button-6-megamillions").on("click", function() {

    quickPickSixthTicket();

});



$(".quick-pick-button-7-megamillions").on("click", function() {

    quickPickSeventhTicket();

});



$(".quick-pick-button-8-megamillions").on("click", function() {

    quickPickEightTicket();

});



$('.thrash-button-1').click(function() {

    $('.megamillions-first-ticket').removeClass('megamillions-number-selected').removeClass('megamillions-number-was-selected');

    $('.megamillions-first-ticket-power').removeClass('megamillions-number-selected').removeClass('megamillions-number-was-selected');

    trashLine.call(this);

});



$('.thrash-button-2').click(function() {

    $('.megamillions-second-ticket').removeClass('megamillions-number-selected').removeClass('megamillions-number-was-selected');

    $('.megamillions-second-ticket-power').removeClass('megamillions-number-selected').removeClass('megamillions-number-was-selected');

    trashLine.call(this);

});



$('.thrash-button-3').click(function() {

    $('.megamillions-third-ticket').removeClass('megamillions-number-selected').removeClass('megamillions-number-was-selected');

    $('.megamillions-third-ticket-power').removeClass('megamillions-number-selected').removeClass('megamillions-number-was-selected');

    trashLine.call(this);

});



$('.thrash-button-4').click(function() {

    $('.megamillions-fourth-ticket').removeClass('megamillions-number-selected').removeClass('megamillions-number-was-selected');

    $('.megamillions-fourth-ticket-power').removeClass('megamillions-number-selected').removeClass('megamillions-number-was-selected');

    trashLine.call(this);

});



$('.thrash-button-5').click(function() {

    $('.megamillions-fifth-ticket').removeClass('megamillions-number-selected').removeClass('megamillions-number-was-selected');

    $('.megamillions-fifth-ticket-power').removeClass('megamillions-number-selected').removeClass('megamillions-number-was-selected');

    trashLine.call(this);

});



$('.thrash-button-6').click(function() {

    $('.megamillions-sixth-ticket').removeClass('megamillions-number-selected').removeClass('megamillions-number-was-selected');

    $('.megamillions-sixth-ticket-power').removeClass('megamillions-number-selected').removeClass('megamillions-number-was-selected');

    trashLine.call(this);

});



$('.thrash-button-7').click(function() {

    $('.megamillions-seventh-ticket').removeClass('megamillions-number-selected').removeClass('megamillions-number-was-selected');

    $('.megamillions-seventh-ticket-power').removeClass('megamillions-number-selected').removeClass('megamillions-number-was-selected');

    trashLine.call(this);

});



$('.thrash-button-8').click(function() {

    $('.megamillions-eight-ticket').removeClass('megamillions-number-selected').removeClass('megamillions-number-was-selected');

    $('.megamillions-eight-ticket-power').removeClass('megamillions-number-selected').removeClass('megamillions-number-was-selected');

    trashLine.call(this);

});





function trashLine() {

    $(this).parents('.ticket-holder').find('.quick-pick-button').css('background', '#266CA8 ');

    $(this).parents('.ticket-holder').removeClass('ticket-holder-shadow');

    $(this).parents('.ticket-holder').find('.main-numbers p').css('display', 'block');

    $(this).parents('.ticket-holder').css('background', '#ffffff');

    $(this).parents('.ticket-holder').find('.ticket-select-info').html('Select 5 Numbers').css('color', '#333333');

    $(this).parents('.ticket-holder').find('.ticket-select-info-bottom p').html('Select Your Mega Ball').css('color', '#333333');



    $(this).parents('.ticket-holder').find('.ticket-select-info').removeClass('line-complete');



    updatePrice();

    updateDiscountPercentage();

    updateDiscountTotal();

    updateLines();

    updateDraws();

}



function quickPickFifthTicket() {

    $('.megamillions-fifth-ticket').removeClass('megamillions-number-selected');

    var randomNumbers = $(".megamillions-fifth-ticket").get().sort(function () {

        return Math.round(Math.random()) - 0.1;

    }).slice(0, 5);

    $(randomNumbers).addClass('megamillions-number-selected').addClass('megamillions-number-was-selected');



    $('.megamillions-fifth-ticket-power').removeClass('megamillions-number-selected');

    var randomPower = $(".megamillions-fifth-ticket-power").get().sort(function () {

        return Math.round(Math.random()) - 0.1;

    }).slice(0, 1);

    $(randomPower).addClass('megamillions-number-selected').addClass('megamillions-number-was-selected');

    markLineComplete($('.megamillions-fifth-ticket').parents('.ticket-holder'));

}



function quickPickSixthTicket() {

    $('.megamillions-sixth-ticket').removeClass('megamillions-number-selected');

    var randomNumbers = $(".megamillions-sixth-ticket").get().sort(function () {

        return Math.round(Math.random()) - 0.1;

    }).slice(0, 5);

    $(randomNumbers).addClass('megamillions-number-selected').addClass('megamillions-number-was-selected');



    $('.megamillions-sixth-ticket-power').removeClass('megamillions-number-selected');

    var randomPower = $(".megamillions-sixth-ticket-power").get().sort(function () {

        return Math.round(Math.random()) - 0.1;

    }).slice(0, 1);

    $(randomPower).addClass('megamillions-number-selected').addClass('megamillions-number-was-selected');

    markLineComplete($('.megamillions-sixth-ticket').parents('.ticket-holder'));

}



function quickPickSeventhTicket() {

    $('.megamillions-seventh-ticket').removeClass('megamillions-number-selected');

    var randomNumbers = $(".megamillions-seventh-ticket").get().sort(function () {

        return Math.round(Math.random()) - 0.1;

    }).slice(0, 5);

    $(randomNumbers).addClass('megamillions-number-selected').addClass('megamillions-number-was-selected');



    $('.megamillions-seventh-ticket-power').removeClass('megamillions-number-selected');

    var randomPower = $(".megamillions-seventh-ticket-power").get().sort(function () {

        return Math.round(Math.random()) - 0.1;

    }).slice(0, 1);

    $(randomPower).addClass('megamillions-number-selected').addClass('megamillions-number-was-selected');

    markLineComplete($('.megamillions-seventh-ticket').parents('.ticket-holder'));

}



function quickPickEightTicket() {

    $('.megamillions-eight-ticket').removeClass('megamillions-number-selected');

    var randomNumbers = $(".megamillions-eight-ticket").get().sort(function () {

        return Math.round(Math.random()) - 0.1;

    }).slice(0, 5);

    $(randomNumbers).addClass('megamillions-number-selected').addClass('megamillions-number-was-selected');



    $('.megamillions-eight-ticket-power').removeClass('megamillions-number-selected');

    var randomPower = $(".megamillions-eight-ticket-power").get().sort(function () {

        return Math.round(Math.random()) - 0.1;

    }).slice(0, 1);

    $(randomPower).addClass('megamillions-number-selected').addClass('megamillions-number-was-selected');

    markLineComplete($('.megamillions-eight-ticket').parents('.ticket-holder'));

}



function quickPickFirstTicket() {

    $('.megamillions-first-ticket').removeClass('megamillions-number-selected');

    var randomNumbers = $(".megamillions-first-ticket").get().sort(function () {

        return Math.round(Math.random()) - 0.1;

    }).slice(0, 5);

    $(randomNumbers).addClass('megamillions-number-selected').addClass('megamillions-number-was-selected');



    $('.megamillions-first-ticket-power').removeClass('megamillions-number-selected');

    var randomPower = $(".megamillions-first-ticket-power").get().sort(function () {

        return Math.round(Math.random()) - 0.1;

    }).slice(0, 1);

    $(randomPower).addClass('megamillions-number-selected').addClass('megamillions-number-was-selected');

    markLineComplete($('.megamillions-first-ticket').parents('.ticket-holder'));

}



function quickPickSecondTicket() {

    $('.megamillions-second-ticket').removeClass('megamillions-number-selected');

    var randomNumbers = $(".megamillions-second-ticket").get().sort(function () {

        return Math.round(Math.random()) - 0.1;

    }).slice(0, 5);

    $(randomNumbers).addClass('megamillions-number-selected').addClass('megamillions-number-was-selected');



    $('.megamillions-second-ticket-power').removeClass('megamillions-number-selected');

    var randomPower = $(".megamillions-second-ticket-power").get().sort(function () {

        return Math.round(Math.random()) - 0.1;

    }).slice(0, 1);

    $(randomPower).addClass('megamillions-number-selected').addClass('megamillions-number-was-selected');

    markLineComplete($('.megamillions-second-ticket').parents('.ticket-holder'));

}



function quickPickThirdTicket() {

    $('.megamillions-third-ticket').removeClass('megamillions-number-selected');

    var randomNumbers = $(".megamillions-third-ticket").get().sort(function () {

        return Math.round(Math.random()) - 0.1;

    }).slice(0, 5);

    $(randomNumbers).addClass('megamillions-number-selected').addClass('megamillions-number-was-selected');



    $('.megamillions-third-ticket-power').removeClass('megamillions-number-selected');

    var randomPower = $(".megamillions-third-ticket-power").get().sort(function () {

        return Math.round(Math.random()) - 0.1;

    }).slice(0, 1);

    $(randomPower).addClass('megamillions-number-selected').addClass('megamillions-number-was-selected');

    markLineComplete($('.megamillions-third-ticket').parents('.ticket-holder'));

}



function quickPickFourthTicket() {

    $('.megamillions-fourth-ticket').removeClass('megamillions-number-selected');

    var randomNumbers = $(".megamillions-fourth-ticket").get().sort(function () {

        return Math.round(Math.random()) - 0.1;

    }).slice(0, 5);

    $(randomNumbers).addClass('megamillions-number-selected').addClass('megamillions-number-was-selected');



    $('.megamillions-fourth-ticket-power').removeClass('megamillions-number-selected');

    var randomPower = $(".megamillions-fourth-ticket-power").get().sort(function () {

        return Math.round(Math.random()) - 0.1;

    }).slice(0, 1);

    $(randomPower).addClass('megamillions-number-selected').addClass('megamillions-number-was-selected');

    markLineComplete($('.megamillions-fourth-ticket').parents('.ticket-holder'));

}



function markLineUnComplete(line) {

    line.find('.quick-pick-button').css('background', '#266CA8 ');

    line.removeClass('ticket-holder-shadow');

    line.find('.main-numbers p').css('display', 'block');

    line.css('background', '#ffffff');



    line.find('.ticket-select-info').removeClass('line-complete');



    updatePrice();

    updateDiscountPercentage();

    updateDiscountTotal();

    updateLines();

    updateDraws();

}



function checkIfComplete(line){

    var regularNumbers = line.find('.megamillions-main-numbers.megamillions-number-selected').length;

    var extraNumbers = line.find('.megamillions-round-number.megamillions-number-selected').length;

    if(regularNumbers == 5 && extraNumbers == 1){

        markLineComplete(line);

    } else {

        markLineUnComplete(line);

    }

}



$(".quick-pick-all-megamillions").click(function() {

    if($('.megamillions-fifth-ticket').is(':visible')){

        quickPickFifthTicket();

    }



    if( $('.megamillions-sixth-ticket').is(':visible')){

        quickPickSixthTicket();

    }



    if( $('.megamillions-seventh-ticket').is(':visible')) {

        quickPickSeventhTicket();

    }



    if( $('.megamillions-eight-ticket').is(':visible')) {

        quickPickEightTicket();

    }



    if( $('.megamillions-first-ticket').is(':visible')) {

        quickPickFirstTicket();

    }



    if( $('.megamillions-second-ticket').is(':visible')) {

        quickPickSecondTicket();

    }



    if( $('.megamillions-third-ticket').is(':visible')) {

        quickPickThirdTicket();

    }



    if( $('.megamillions-fourth-ticket').is(':visible')) {

        quickPickFourthTicket();

    }

});



function updatePrice(){

    var completedLines = $('.line-complete').length;

    var price = $('.sidebar-button.selected').parent().data('price');

    var draws = $('.sidebar-button.selected').parent().data('draws');

    $('.total-price-holder').find('p').html('&#8364;' + (completedLines*draws*price*100).toFixed(2)/100);

}



function updateDiscountPercentage(){

    var discount = $('.sidebar-button.selected').parent().data('discount');

    $('.percentage').html(discount*100);

}



function updateDiscountTotal() {

    var completedLines = $('.line-complete').length;

    var price = $('.sidebar-button.selected').parent().data('price');

    var discount = $('.sidebar-button.selected').parent().data('discount');

    var draws = $('.sidebar-button.selected').parent().data('draws');

    $('#number-discount').html((completedLines*price*draws*discount).toFixed(2));

}



function updateLines() {

    var completedLines = $('.line-complete').length;

    $('#number-of-single-lines').html(completedLines);

}



function updateDraws() {

    var draws = $('.sidebar-button.selected').parent().data('draws');

    $('#number-of-draws').html(draws);

}



function markLineComplete(ticketHolder){

    ticketHolder.find('.quick-pick-button').css('background', '#e68000 ');



    ticketHolder.addClass('ticket-holder-shadow');



    ticketHolder.css('background', '#ffffff');

    ticketHolder.find('.main-numbers p').css('display', 'none');

    ticketHolder.find('.ticket-select-info').html('All good here!').css('color', 'green');

    ticketHolder.find('.ticket-select-info').addClass('line-complete');

    ticketHolder.find('.ticket-select-info-bottom p').html('All good here!').css('color', 'green');



    updatePrice();

    updateDiscountPercentage();

    updateDiscountTotal();

    updateLines();

    updateDraws();

}





$(".clear-all").click(function() {

    $('.megamillions-main-numbers').removeClass('megamillions-number-selected').removeClass('megamillions-number-was-selected');

    $('.round-number').removeClass('megamillions-number-selected').removeClass('megamillions-number-was-selected');

    $('.quick-pick-button').css('background', '#266CA8 ');

    $('.ticket-holder').removeClass('ticket-holder-shadow');

    $('.ticket-holder').find('.ticket-select-info').removeClass('line-complete');

    $('.main-numbers').find('p').css('display', 'block');

    $('.ticket-holder').css('background', '#e5e5e5');

    $('.ticket-holder').find('.ticket-select-info').html('Select 5 Numbers').css('color', '#333333');

    $('.ticket-holder').find('.ticket-select-info-bottom p').html('Select 1 Number').css('color', '#333333');



    updatePrice();

    updateDiscountPercentage();

    updateDiscountTotal();

    updateLines();

    updateDraws();

});



$(function() {

    $('.sidebar-arrow').on("click", function () {

        if($("#desktop-view").data("product-id") == 1){
            updatePrice();
        }

        updateDiscountPercentage();

        updateDiscountTotal();

        if($("#desktop-view").data("product-id") == 1){
            updateLines();
        }

        updateDraws();

    });

});



$('body').on("click", '.button-div.personal', function () {

    var lines = [];

    var draws = $('.sidebar-button.selected').parent().data('draws');



    $.each($('.line-complete'), function (key, item) {

        var ticketLine = $(item).parent();

        var selected = ticketLine.find('.megamillions-number-selected');



        var line = {numbers: [], extraNumbers: []};

        $.each(selected, function (key2, item2) {

            if ($(item2).hasClass('round-number')) {

                line.extraNumbers.push($(item2).html());

            } else {

                line.numbers.push($(item2).html());

            }

        });

        lines.push(line);

    });



    $.ajax({

        url: '/wp-admin/admin-ajax.php',

        type: 'post',

        data: {

            action: 'add_to_cart',

            lines: lines,

            draws: draws,

            lottoType: 2

        }

    }).fail(function (r, status, jqXHR) {

        console.log('failed');

    }).done(function (r, status, jqXHR) {

        if(r.success){

            window.location = "/cart";

        } else {

            alert(r.message);

        }

    });

});

$('body').on("click", '.button-div.team', function () {

    var lines = [];

    var draws = $('.sidebar-button.selected').parent().data('draws');
    var randomGroupNumbers = $('.see-your-numbers').find('.random-group-numbers');
    var shares = $('#inputNumber').val();

    $.each(randomGroupNumbers, function (key, item) {
        var line = {numbers: [], extraNumbers: []};
        var choosenNumbers = $(item).text().split('#');
        if(choosenNumbers[0].length > 0){
            regularNumbers = choosenNumbers[0].split(', ');
            regularNumbers.pop();
            line.numbers.push(regularNumbers);
        }
        if(choosenNumbers[1].length > 0){
            extraNumbers = choosenNumbers[1].split(', ');
            line.extraNumbers.push(extraNumbers);
        }
        lines.push(line);
    });

    $.ajax({
        url: '/wp-admin/admin-ajax.php',
        type: 'post',
        data: {
            action: 'add_team_play_to_cart',
            lines: lines,
            draws: draws,
            shares: shares,
            type: 'team',
            lottoType: 2
        }

    }).fail(function (r, status, jqXHR) {

        console.log('failed');

    }).done(function (r, status, jqXHR) {

        if(r.success){

            window.location = "/cart";

        } else {

            alert(r.message);

        }

    });

});