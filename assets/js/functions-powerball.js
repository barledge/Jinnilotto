/**

 * Created by Petar on 12/8/2015.

 */







/*----------------------------------------------------*/

/*-----------------Powerball Functions----------------*/

/*----------------------------------------------------*/





jQuery(function($){

    $('.powerball-numbers').click(function() {

        $(this).addClass('powerball-number-was-selected');

    })

});





jQuery(function($){

    $(".powerball-main-numbers").on('mousedown',  function(evt) {

        evt.preventDefault();

        evt.stopPropagation();

        // get the number of items already selected:

        var ctSelected = $(this).parent().find('.powerball-number-selected').length;



        if (ctSelected >= 5) {

            if($(this).hasClass('powerball-number-selected')){

                $(this).toggleClass('powerball-number-selected');

                ctSelected--;

            } else {

                jQuery(function($){

                    $('.error-message-for-main-numbers').addClass('bounceInUp').css('display', 'block').delay(3000).fadeOut('slow');

                });

                return;

            }

        } else {

            $(this).toggleClass('powerball-number-selected');

            if($(this).hasClass('powerball-number-selected')){

                ctSelected++;

            } else {

                ctSelected--;

            }

        }





        if (ctSelected >= 0) {

            $(this).parents('.ticket-holder').find('.quick-pick-button').css('background', '#E84E4A');

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

    $(".powerball-super").on('mousedown', function(evt) {

        evt.preventDefault();

        evt.stopPropagation();



        // get the number of items already selected:

        var ctSelected = $(this).siblings('.powerball-number-selected').length;



        if (ctSelected >= 1) {

            jQuery(function($){

                $('.error-message-for-power-numbers').addClass('bounceInUp').css('display', 'block').delay(3000).fadeOut('slow');

            });

        } else {

            $(this).toggleClass('powerball-number-selected');

            if($(this).hasClass('powerball-number-selected')){

                ctSelected++;

            } else {

                ctSelected--;

            }



        }

        if (ctSelected == 1) {



            $(this).parents('.ticket-holder').find('.ticket-select-info-bottom p').html('All good here!').css('color', 'green');



        } else {



            $(this).parents('.ticket-holder').find('.ticket-select-info-bottom p').html('Select 1 Power Ball Number').css('color', '#333333');

        }

        checkIfComplete($(this).parent().parent());

    });

});





$(".quick-pick-button-1-powerball").on("click", function first() {

    quickPickFirstTicket();

});





$(".quick-pick-button-2-powerball").on("click", function() {

    quickPickSecondTicket();

});



$(".quick-pick-button-3-powerball").on("click", function() {

    quickPickThirdTicket();

});





$(".quick-pick-button-4-powerball").on("click", function() {

    quickPickFourthTicket();

});



$(".quick-pick-button-5-powerball").on("click", function() {

    quickPickFifthTicket();

});



$(".quick-pick-button-6-powerball").on("click", function() {

    quickPickSixthTicket();

});



$(".quick-pick-button-7-powerball").on("click", function() {

    quickPickSeventhTicket();

});



$(".quick-pick-button-8-powerball").on("click", function() {

    quickPickEightTicket();

});



$('.thrash-button-1').click(function() {

    $('.powerball-first-ticket').removeClass('powerball-number-selected').removeClass('powerball-number-was-selected');

    $('.powerball-first-ticket-power').removeClass('powerball-number-selected').removeClass('powerball-number-was-selected');

    trashLine.call(this);

});



$('.thrash-button-2').click(function() {

    $('.powerball-second-ticket').removeClass('powerball-number-selected').removeClass('powerball-number-was-selected');

    $('.powerball-second-ticket-power').removeClass('powerball-number-selected').removeClass('powerball-number-was-selected');

    trashLine.call(this);

});



$('.thrash-button-3').click(function() {

    $('.powerball-third-ticket').removeClass('powerball-number-selected').removeClass('powerball-number-was-selected');

    $('.powerball-third-ticket-power').removeClass('powerball-number-selected').removeClass('powerball-number-was-selected');

    trashLine.call(this);

});



$('.thrash-button-4').click(function() {

    $('.powerball-fourth-ticket').removeClass('powerball-number-selected').removeClass('powerball-number-was-selected');

    $('.powerball-fourth-ticket-power').removeClass('powerball-number-selected').removeClass('powerball-number-was-selected');

    trashLine.call(this);

});



$('.thrash-button-5').click(function() {

    $('.powerball-fifth-ticket').removeClass('powerball-number-selected').removeClass('powerball-number-was-selected');

    $('.powerball-fifth-ticket-power').removeClass('powerball-number-selected').removeClass('powerball-number-was-selected');

    trashLine.call(this);

});



$('.thrash-button-6').click(function() {

    $('.powerball-sixth-ticket').removeClass('powerball-number-selected').removeClass('powerball-number-was-selected');

    $('.powerball-sixth-ticket-power').removeClass('powerball-number-selected').removeClass('powerball-number-was-selected');

    trashLine.call(this);

});



$('.thrash-button-7').click(function() {

    $('.powerball-seventh-ticket').removeClass('powerball-number-selected').removeClass('powerball-number-was-selected');

    $('.powerball-seventh-ticket-power').removeClass('powerball-number-selected').removeClass('powerball-number-was-selected');

    trashLine.call(this);

});



$('.thrash-button-8').click(function() {

    $('.powerball-eight-ticket').removeClass('powerball-number-selected').removeClass('powerball-number-was-selected');

    $('.powerball-eight-ticket-power').removeClass('powerball-number-selected').removeClass('powerball-number-was-selected');

    trashLine.call(this);

});





function trashLine() {

    $(this).parents('.ticket-holder').find('.quick-pick-button').css('background', '#266CA8 ');

    $(this).parents('.ticket-holder').removeClass('ticket-holder-shadow');

    $(this).parents('.ticket-holder').find('.main-numbers p').css('display', 'block');

    $(this).parents('.ticket-holder').css('background', '#ffffff');

    $(this).parents('.ticket-holder').find('.ticket-select-info').html('Select 5 Numbers').css('color', '#333333');

    $(this).parents('.ticket-holder').find('.ticket-select-info-bottom p').html('Select 1 Power Ball Number').css('color', '#333333');



    $(this).parents('.ticket-holder').find('.ticket-select-info').removeClass('line-complete');



    updatePrice();

    updateDiscountPercentage();

    updateDiscountTotal();

    updateLines();

    updateDraws();

}



function quickPickFifthTicket() {

    $('.powerball-fifth-ticket').removeClass('powerball-number-selected');

    var randomNumbers = $(".powerball-fifth-ticket").get().sort(function () {

        return Math.round(Math.random()) - 0.1;

    }).slice(0, 5);

    $(randomNumbers).addClass('powerball-number-selected').addClass('powerball-number-was-selected');



    $('.powerball-fifth-ticket-power').removeClass('powerball-number-selected');

    var randomPower = $(".powerball-fifth-ticket-power").get().sort(function () {

        return Math.round(Math.random()) - 0.1;

    }).slice(0, 1);

    $(randomPower).addClass('powerball-number-selected').addClass('powerball-number-was-selected');

    markLineComplete($('.powerball-fifth-ticket').parents('.ticket-holder'));

}



function quickPickSixthTicket() {

    $('.powerball-sixth-ticket').removeClass('powerball-number-selected');

    var randomNumbers = $(".powerball-sixth-ticket").get().sort(function () {

        return Math.round(Math.random()) - 0.1;

    }).slice(0, 5);

    $(randomNumbers).addClass('powerball-number-selected').addClass('powerball-number-was-selected');



    $('.powerball-sixth-ticket-power').removeClass('powerball-number-selected');

    var randomPower = $(".powerball-sixth-ticket-power").get().sort(function () {

        return Math.round(Math.random()) - 0.1;

    }).slice(0, 1);

    $(randomPower).addClass('powerball-number-selected').addClass('powerball-number-was-selected');

    markLineComplete($('.powerball-sixth-ticket').parents('.ticket-holder'));

}



function quickPickSeventhTicket() {

    $('.powerball-seventh-ticket').removeClass('powerball-number-selected');

    var randomNumbers = $(".powerball-seventh-ticket").get().sort(function () {

        return Math.round(Math.random()) - 0.1;

    }).slice(0, 5);

    $(randomNumbers).addClass('powerball-number-selected').addClass('powerball-number-was-selected');



    $('.powerball-seventh-ticket-power').removeClass('powerball-number-selected');

    var randomPower = $(".powerball-seventh-ticket-power").get().sort(function () {

        return Math.round(Math.random()) - 0.1;

    }).slice(0, 1);

    $(randomPower).addClass('powerball-number-selected').addClass('powerball-number-was-selected');

    markLineComplete($('.powerball-seventh-ticket').parents('.ticket-holder'));

}



function quickPickEightTicket() {

    $('.powerball-eight-ticket').removeClass('powerball-number-selected');

    var randomNumbers = $(".powerball-eight-ticket").get().sort(function () {

        return Math.round(Math.random()) - 0.1;

    }).slice(0, 5);

    $(randomNumbers).addClass('powerball-number-selected').addClass('powerball-number-was-selected');



    $('.powerball-eight-ticket-power').removeClass('powerball-number-selected');

    var randomPower = $(".powerball-eight-ticket-power").get().sort(function () {

        return Math.round(Math.random()) - 0.1;

    }).slice(0, 1);

    $(randomPower).addClass('powerball-number-selected').addClass('powerball-number-was-selected');

    markLineComplete($('.powerball-eight-ticket').parents('.ticket-holder'));

}



function quickPickFirstTicket() {

    $('.powerball-first-ticket').removeClass('powerball-number-selected');

    var randomNumbers = $(".powerball-first-ticket").get().sort(function () {

        return Math.round(Math.random()) - 0.1;

    }).slice(0, 5);

    $(randomNumbers).addClass('powerball-number-selected').addClass('powerball-number-was-selected');



    $('.powerball-first-ticket-power').removeClass('powerball-number-selected');

    var randomPower = $(".powerball-first-ticket-power").get().sort(function () {

        return Math.round(Math.random()) - 0.1;

    }).slice(0, 1);

    $(randomPower).addClass('powerball-number-selected').addClass('powerball-number-was-selected');

    markLineComplete($('.powerball-first-ticket').parents('.ticket-holder'));

}



function quickPickSecondTicket() {

    $('.powerball-second-ticket').removeClass('powerball-number-selected');

    var randomNumbers = $(".powerball-second-ticket").get().sort(function () {

        return Math.round(Math.random()) - 0.1;

    }).slice(0, 5);

    $(randomNumbers).addClass('powerball-number-selected').addClass('powerball-number-was-selected');



    $('.powerball-second-ticket-power').removeClass('powerball-number-selected');

    var randomPower = $(".powerball-second-ticket-power").get().sort(function () {

        return Math.round(Math.random()) - 0.1;

    }).slice(0, 1);

    $(randomPower).addClass('powerball-number-selected').addClass('powerball-number-was-selected');

    markLineComplete($('.powerball-second-ticket').parents('.ticket-holder'));

}



function quickPickThirdTicket() {

    $('.powerball-third-ticket').removeClass('powerball-number-selected');

    var randomNumbers = $(".powerball-third-ticket").get().sort(function () {

        return Math.round(Math.random()) - 0.1;

    }).slice(0, 5);

    $(randomNumbers).addClass('powerball-number-selected').addClass('powerball-number-was-selected');



    $('.powerball-third-ticket-power').removeClass('powerball-number-selected');

    var randomPower = $(".powerball-third-ticket-power").get().sort(function () {

        return Math.round(Math.random()) - 0.1;

    }).slice(0, 1);

    $(randomPower).addClass('powerball-number-selected').addClass('powerball-number-was-selected');

    markLineComplete($('.powerball-third-ticket').parents('.ticket-holder'));

}



function quickPickFourthTicket() {

    $('.powerball-fourth-ticket').removeClass('powerball-number-selected');

    var randomNumbers = $(".powerball-fourth-ticket").get().sort(function () {

        return Math.round(Math.random()) - 0.1;

    }).slice(0, 5);

    $(randomNumbers).addClass('powerball-number-selected').addClass('powerball-number-was-selected');



    $('.powerball-fourth-ticket-power').removeClass('powerball-number-selected');

    var randomPower = $(".powerball-fourth-ticket-power").get().sort(function () {

        return Math.round(Math.random()) - 0.1;

    }).slice(0, 1);

    $(randomPower).addClass('powerball-number-selected').addClass('powerball-number-was-selected');

    markLineComplete($('.powerball-fourth-ticket').parents('.ticket-holder'));

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

    var regularNumbers = line.find('.powerball-main-numbers.powerball-number-selected').length;

    var extraNumbers = line.find('.powerball-round-number.powerball-number-selected').length;

    if(regularNumbers == 5 && extraNumbers == 1){

        markLineComplete(line);

    } else {

        markLineUnComplete(line);

    }

}



$(".quick-pick-all-powerball").click(function() {

    if($('.powerball-fifth-ticket').is(':visible')){

        quickPickFifthTicket();

    }



    if( $('.powerball-sixth-ticket').is(':visible')){

        quickPickSixthTicket();

    }



    if( $('.powerball-seventh-ticket').is(':visible')) {

        quickPickSeventhTicket();

    }



    if( $('.powerball-eight-ticket').is(':visible')) {

        quickPickEightTicket();

    }



    if( $('.powerball-first-ticket').is(':visible')) {

        quickPickFirstTicket();

    }



    if( $('.powerball-second-ticket').is(':visible')) {

        quickPickSecondTicket();

    }



    if( $('.powerball-third-ticket').is(':visible')) {

        quickPickThirdTicket();

    }



    if( $('.powerball-fourth-ticket').is(':visible')) {

        quickPickFourthTicket();

    }

});



function updatePrice(){

    var completedLines = $('.line-complete').length;

    var price = $('.sidebar-button.selected').parent().data('price');

    var draws = $('.sidebar-button.selected').parent().data('draws');

    $('.total-price-holder').find('p').html('&euro;' + (completedLines*draws*price*100).toFixed(2)/100);

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

    ticketHolder.find('.quick-pick-button').css('background', '#E84E4A ');



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

    $('.powerball-main-numbers').removeClass('powerball-number-selected').removeClass('powerball-number-was-selected');

    $('.round-number').removeClass('powerball-number-selected').removeClass('powerball-number-was-selected');

    $('.quick-pick-button').css('background', '#266CA8 ');

    $('.ticket-holder').removeClass('ticket-holder-shadow');

    $('.ticket-holder').find('.ticket-select-info').removeClass('line-complete');

    $('.main-numbers').find('p').css('display', 'block');

    $('.ticket-holder').css('background', '#e5e5e5');

    $('.ticket-holder').find('.ticket-select-info').html('Select 5 Numbers').css('color', '#333333');

    $('.ticket-holder').find('.ticket-select-info-bottom p').html('Select 1 Power Ball Number').css('color', '#333333');



    updatePrice();

    updateDiscountPercentage();

    updateDiscountTotal();

    updateLines();

    updateDraws();

});

$(function() {

    $('.sidebar-arrow').on( "click", function() {

        if($("#desktop-view").data("product-id") == 1){
            updatePrice();
        }/*else{
            getGroupPrice('#inputNumber');
        }*/

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

        var selected = ticketLine.find('.powerball-number-selected');



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

            lottoType: 1

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
            lottoType: 1
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