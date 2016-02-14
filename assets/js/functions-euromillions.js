/**

 * Created by Petar on 12/8/2015.

 */







/*----------------------------------------------------*/

/*-----------------euromillion Functions----------------*/

/*----------------------------------------------------*/





jQuery(function($){

    $('.euromillion-numbers').click(function() {

        $(this).addClass('euromillion-number-was-selected');

    })

});





jQuery(function($){

    $(".euromillion-main-numbers").on('mousedown',  function(evt) {



        evt.preventDefault();

        evt.stopPropagation();





        // get the number of items already selected:

        var ctSelected = $(this).parent().find('.euromillion-number-selected').length;



        if (ctSelected >= 5) {

            if($(this).hasClass('euromillion-number-selected')){

                $(this).toggleClass('euromillion-number-selected');

                ctSelected--;

            } else {

                jQuery(function($){

                    $('.error-message-for-main-numbers').addClass('bounceInUp').css('display', 'block').delay(3000).fadeOut('slow');

                });

                return;

            }

        } else {

            $(this).toggleClass('euromillion-number-selected');

            if($(this).hasClass('euromillion-number-selected')){

                ctSelected++;

            } else {

                ctSelected--;

            }

        }





        if (ctSelected >= 0) {

            $(this).parents('.ticket-holder').find('.quick-pick-button').css('background', '#25aae2');

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

    $(".euromillion-super").on('mousedown', function(evt) {

        evt.preventDefault();

        evt.stopPropagation();



        // get the number of items already selected:

        var ctSelected = $(this).siblings('.euromillion-number-selected').length;



        if (ctSelected >= 2) {

            jQuery(function($){

                $('.error-message-for-power-numbers').addClass('bounceInUp').css('display', 'block').delay(3000).fadeOut('slow');

            });

        } else {

            $(this).toggleClass('euromillion-number-selected');

            if($(this).hasClass('euromillion-number-selected')){

                ctSelected++;

            } else {

                ctSelected--;

            }

        }



        if (ctSelected == 0) {

            $(this).parents('.ticket-holder').find('.ticket-select-info-bottom p').html('Select 2 Lucky Numbers').css('color', '#333333');

        } else {

            if (ctSelected == 1) {

                $(this).parents('.ticket-holder').find('.ticket-select-info-bottom p').html('Select 1 Lucky Number').css('color', '#333333');

            } else {

                $(this).parents('.ticket-holder').find('.ticket-select-info-bottom p').html('All Good Here!').css('color', 'green');

            }

        }



        checkIfComplete($(this).parent().parent());

    });

});





$(".quick-pick-button-1-euromillion").on("click", function first() {

    quickPickFirstTicket();

});





$(".quick-pick-button-2-euromillion").on("click", function() {

    quickPickSecondTicket();

});



$(".quick-pick-button-3-euromillion").on("click", function() {

    quickPickThirdTicket();

});





$(".quick-pick-button-4-euromillion").on("click", function() {

    quickPickFourthTicket();

});



$(".quick-pick-button-5-euromillion").on("click", function() {

    quickPickFifthTicket();

});



$(".quick-pick-button-6-euromillion").on("click", function() {

    quickPickSixthTicket();

});



$(".quick-pick-button-7-euromillion").on("click", function() {

    quickPickSeventhTicket();

});



$(".quick-pick-button-8-euromillion").on("click", function() {

    quickPickEightTicket();

});



$('.thrash-button-1').click(function() {

    $('.euromillion-first-ticket').removeClass('euromillion-number-selected').removeClass('euromillion-number-was-selected');

    $('.euromillion-first-ticket-power').removeClass('euromillion-number-selected').removeClass('euromillion-number-was-selected');

    trashLine.call(this);

});



$('.thrash-button-2').click(function() {

    $('.euromillion-second-ticket').removeClass('euromillion-number-selected').removeClass('euromillion-number-was-selected');

    $('.euromillion-second-ticket-power').removeClass('euromillion-number-selected').removeClass('euromillion-number-was-selected');

    trashLine.call(this);

});



$('.thrash-button-3').click(function() {

    $('.euromillion-third-ticket').removeClass('euromillion-number-selected').removeClass('euromillion-number-was-selected');

    $('.euromillion-third-ticket-power').removeClass('euromillion-number-selected').removeClass('euromillion-number-was-selected');

    trashLine.call(this);

});



$('.thrash-button-4').click(function() {

    $('.euromillion-fourth-ticket').removeClass('euromillion-number-selected').removeClass('euromillion-number-was-selected');

    $('.euromillion-fourth-ticket-power').removeClass('euromillion-number-selected').removeClass('euromillion-number-was-selected');

    trashLine.call(this);

});



$('.thrash-button-5').click(function() {

    $('.euromillion-fifth-ticket').removeClass('euromillion-number-selected').removeClass('euromillion-number-was-selected');

    $('.euromillion-fifth-ticket-power').removeClass('euromillion-number-selected').removeClass('euromillion-number-was-selected');

    trashLine.call(this);

});



$('.thrash-button-6').click(function() {

    $('.euromillion-sixth-ticket').removeClass('euromillion-number-selected').removeClass('euromillion-number-was-selected');

    $('.euromillion-sixth-ticket-power').removeClass('euromillion-number-selected').removeClass('euromillion-number-was-selected');

    trashLine.call(this);

});



$('.thrash-button-7').click(function() {

    $('.euromillion-seventh-ticket').removeClass('euromillion-number-selected').removeClass('euromillion-number-was-selected');

    $('.euromillion-seventh-ticket-power').removeClass('euromillion-number-selected').removeClass('euromillion-number-was-selected');

    trashLine.call(this);

});



$('.thrash-button-8').click(function() {

    $('.euromillion-eight-ticket').removeClass('euromillion-number-selected').removeClass('euromillion-number-was-selected');

    $('.euromillion-eight-ticket-power').removeClass('euromillion-number-selected').removeClass('euromillion-number-was-selected');

    trashLine.call(this);

});





function trashLine() {

    $(this).parents('.ticket-holder').find('.quick-pick-button').css('background', '#266CA8 ');

    $(this).parents('.ticket-holder').removeClass('ticket-holder-shadow');

    $(this).parents('.ticket-holder').find('.main-numbers p').css('display', 'block');

    $(this).parents('.ticket-holder').css('background', '#ffffff');

    $(this).parents('.ticket-holder').find('.ticket-select-info').html('Select 5 Numbers').css('color', '#333333');

    $(this).parents('.ticket-holder').find('.ticket-select-info-bottom p').html('Select 2 Lucky Numbers').css('color', '#333333');



    $(this).parents('.ticket-holder').find('.ticket-select-info').removeClass('line-complete');



    updatePrice();

    updateDiscountPercentage();

    updateDiscountTotal();

    updateLines();

    updateDraws();

}



function quickPickFifthTicket() {

    $('.euromillion-fifth-ticket').removeClass('euromillion-number-selected');

    var randomNumbers = $(".euromillion-fifth-ticket").get().sort(function () {

        return Math.round(Math.random()) - 0.1;

    }).slice(0, 5);

    $(randomNumbers).addClass('euromillion-number-selected').addClass('euromillion-number-was-selected');



    $('.euromillion-fifth-ticket-power').removeClass('euromillion-number-selected');

    var randomPower = $(".euromillion-fifth-ticket-power").get().sort(function () {

        return Math.round(Math.random()) - 0.1;

    }).slice(0, 2);

    $(randomPower).addClass('euromillion-number-selected').addClass('euromillion-number-was-selected');

    markLineComplete($('.euromillion-fifth-ticket').parents('.ticket-holder'));

}



function quickPickSixthTicket() {

    $('.euromillion-sixth-ticket').removeClass('euromillion-number-selected');

    var randomNumbers = $(".euromillion-sixth-ticket").get().sort(function () {

        return Math.round(Math.random()) - 0.1;

    }).slice(0, 5);

    $(randomNumbers).addClass('euromillion-number-selected').addClass('euromillion-number-was-selected');



    $('.euromillion-sixth-ticket-power').removeClass('euromillion-number-selected');

    var randomPower = $(".euromillion-sixth-ticket-power").get().sort(function () {

        return Math.round(Math.random()) - 0.1;

    }).slice(0, 2);

    $(randomPower).addClass('euromillion-number-selected').addClass('euromillion-number-was-selected');

    markLineComplete($('.euromillion-sixth-ticket').parents('.ticket-holder'));

}



function quickPickSeventhTicket() {

    $('.euromillion-seventh-ticket').removeClass('euromillion-number-selected');

    var randomNumbers = $(".euromillion-seventh-ticket").get().sort(function () {

        return Math.round(Math.random()) - 0.1;

    }).slice(0, 5);

    $(randomNumbers).addClass('euromillion-number-selected').addClass('euromillion-number-was-selected');



    $('.euromillion-seventh-ticket-power').removeClass('euromillion-number-selected');

    var randomPower = $(".euromillion-seventh-ticket-power").get().sort(function () {

        return Math.round(Math.random()) - 0.1;

    }).slice(0, 2);

    $(randomPower).addClass('euromillion-number-selected').addClass('euromillion-number-was-selected');

    markLineComplete($('.euromillion-seventh-ticket').parents('.ticket-holder'));

}



function quickPickEightTicket() {

    $('.euromillion-eight-ticket').removeClass('euromillion-number-selected');

    var randomNumbers = $(".euromillion-eight-ticket").get().sort(function () {

        return Math.round(Math.random()) - 0.1;

    }).slice(0, 5);

    $(randomNumbers).addClass('euromillion-number-selected').addClass('euromillion-number-was-selected');



    $('.euromillion-eight-ticket-power').removeClass('euromillion-number-selected');

    var randomPower = $(".euromillion-eight-ticket-power").get().sort(function () {

        return Math.round(Math.random()) - 0.1;

    }).slice(0, 2);

    $(randomPower).addClass('euromillion-number-selected').addClass('euromillion-number-was-selected');

    markLineComplete($('.euromillion-eight-ticket').parents('.ticket-holder'));

}



function quickPickFirstTicket() {

    $('.euromillion-first-ticket').removeClass('euromillion-number-selected');

    var randomNumbers = $(".euromillion-first-ticket").get().sort(function () {

        return Math.round(Math.random()) - 0.1;

    }).slice(0, 5);

    $(randomNumbers).addClass('euromillion-number-selected').addClass('euromillion-number-was-selected');



    $('.euromillion-first-ticket-power').removeClass('euromillion-number-selected');

    var randomPower = $(".euromillion-first-ticket-power").get().sort(function () {

        return Math.round(Math.random()) - 0.1;

    }).slice(0, 2);

    $(randomPower).addClass('euromillion-number-selected').addClass('euromillion-number-was-selected');

    markLineComplete($('.euromillion-first-ticket').parents('.ticket-holder'));

}



function quickPickSecondTicket() {

    $('.euromillion-second-ticket').removeClass('euromillion-number-selected');

    var randomNumbers = $(".euromillion-second-ticket").get().sort(function () {

        return Math.round(Math.random()) - 0.1;

    }).slice(0, 5);

    $(randomNumbers).addClass('euromillion-number-selected').addClass('euromillion-number-was-selected');



    $('.euromillion-second-ticket-power').removeClass('euromillion-number-selected');

    var randomPower = $(".euromillion-second-ticket-power").get().sort(function () {

        return Math.round(Math.random()) - 0.1;

    }).slice(0, 2);

    $(randomPower).addClass('euromillion-number-selected').addClass('euromillion-number-was-selected');

    markLineComplete($('.euromillion-second-ticket').parents('.ticket-holder'));

}



function quickPickThirdTicket() {

    $('.euromillion-third-ticket').removeClass('euromillion-number-selected');

    var randomNumbers = $(".euromillion-third-ticket").get().sort(function () {

        return Math.round(Math.random()) - 0.1;

    }).slice(0, 5);

    $(randomNumbers).addClass('euromillion-number-selected').addClass('euromillion-number-was-selected');



    $('.euromillion-third-ticket-power').removeClass('euromillion-number-selected');

    var randomPower = $(".euromillion-third-ticket-power").get().sort(function () {

        return Math.round(Math.random()) - 0.1;

    }).slice(0, 2);

    $(randomPower).addClass('euromillion-number-selected').addClass('euromillion-number-was-selected');

    markLineComplete($('.euromillion-third-ticket').parents('.ticket-holder'));

}



function quickPickFourthTicket() {

    $('.euromillion-fourth-ticket').removeClass('euromillion-number-selected');

    var randomNumbers = $(".euromillion-fourth-ticket").get().sort(function () {

        return Math.round(Math.random()) - 0.1;

    }).slice(0, 5);

    $(randomNumbers).addClass('euromillion-number-selected').addClass('euromillion-number-was-selected');



    $('.euromillion-fourth-ticket-power').removeClass('euromillion-number-selected');

    var randomPower = $(".euromillion-fourth-ticket-power").get().sort(function () {

        return Math.round(Math.random()) - 0.1;

    }).slice(0, 2);

    $(randomPower).addClass('euromillion-number-selected').addClass('euromillion-number-was-selected');

    markLineComplete($('.euromillion-fourth-ticket').parents('.ticket-holder'));

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

    var regularNumbers = line.find('.euromillion-main-numbers.euromillion-number-selected').length;

    var extraNumbers = line.find('.euromillion-round-number.euromillion-number-selected').length;

    if(regularNumbers == 5 && extraNumbers == 2){

        markLineComplete(line);

    } else {

        markLineUnComplete(line);

    }

}



$(".quick-pick-all-euromillion").click(function() {

    if($('.euromillion-fifth-ticket').is(':visible')){

        quickPickFifthTicket();

    }



    if( $('.euromillion-sixth-ticket').is(':visible')){

        quickPickSixthTicket();

    }



    if( $('.euromillion-seventh-ticket').is(':visible')) {

        quickPickSeventhTicket();

    }



    if( $('.euromillion-eight-ticket').is(':visible')) {

        quickPickEightTicket();

    }



    if( $('.euromillion-first-ticket').is(':visible')) {

        quickPickFirstTicket();

    }



    if( $('.euromillion-second-ticket').is(':visible')) {

        quickPickSecondTicket();

    }



    if( $('.euromillion-third-ticket').is(':visible')) {

        quickPickThirdTicket();

    }



    if( $('.euromillion-fourth-ticket').is(':visible')) {

        quickPickFourthTicket();

    }

});



function updatePrice(){

    var completedLines = $('.line-complete').length;

    var price = $('.sidebar-button.selected').parent().data('price');

    var draws = $('.sidebar-button.selected').parent().data('draws');

    $('.total-price-holder').find('p').html('$' + (completedLines*draws*price*100).toFixed(2)/100);

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

    ticketHolder.find('.quick-pick-button').css('background', '#25aae2 ');



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

    $('.euromillion-main-numbers').removeClass('euromillion-number-selected').removeClass('euromillion-number-was-selected');

    $('.round-number').removeClass('euromillion-number-selected').removeClass('euromillion-number-was-selected');

    $('.quick-pick-button').css('background', '#266CA8 ');

    $('.ticket-holder').removeClass('ticket-holder-shadow');

    $('.ticket-holder').find('.ticket-select-info').removeClass('line-complete');

    $('.main-numbers').find('p').css('display', 'block');

    $('.ticket-holder').css('background', '#e5e5e5');

    $('.ticket-holder').find('.ticket-select-info').html('Select 5 Numbers').css('color', '#333333');

    $('.ticket-holder').find('.ticket-select-info-bottom p').html('Select 2 Lucky Numbers').css('color', '#333333');



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
            /*updateLines();*/
        }

        updateDiscountPercentage();

        updateDiscountTotal();

        if($("#desktop-view").data("product-id") == 1){
            /*updatePrice();*/
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

        var selected = ticketLine.find('.euromillion-number-selected');



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

            lottoType: 5

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
            lottoType: 5
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