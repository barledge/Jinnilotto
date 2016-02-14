/**

 * Created by Petar on 12/8/2015.

 */







/*----------------------------------------------------*/

/*-----------------eurojackpot Functions----------------*/

/*----------------------------------------------------*/





jQuery(function($){

    $('.eurojackpot-numbers').click(function() {

        $(this).addClass('eurojackpot-number-was-selected');

    })

});





jQuery(function($){

    $(".eurojackpot-main-numbers").on('mousedown',  function(evt) {



        evt.preventDefault();

        evt.stopPropagation();





        // get the number of items already selected:

        var ctSelected = $(this).parent().find('.eurojackpot-number-selected').length;



        if (ctSelected >= 5) {

            if($(this).hasClass('eurojackpot-number-selected')){

                $(this).toggleClass('eurojackpot-number-selected');

                ctSelected--;

            } else {

                jQuery(function($){

                    $('.error-message-for-main-numbers').addClass('bounceInUp').css('display', 'block').delay(3000).fadeOut('slow');

                });

                return;

            }

        } else {

            $(this).toggleClass('eurojackpot-number-selected');

            if($(this).hasClass('eurojackpot-number-selected')){

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



        checkIfComplete($(this).parent().parent());

    });



});







jQuery(function($){

    $(".eurojackpot-super").on('mousedown', function(evt) {

        evt.preventDefault();

        evt.stopPropagation();



        // get the number of items already selected:

        var ctSelected = $(this).siblings('.eurojackpot-number-selected').length;



        if (ctSelected >= 2) {

            jQuery(function($){

                $('.error-message-for-power-numbers').addClass('bounceInUp').css('display', 'block').delay(3000).fadeOut('slow');

            });

        } else {

            $(this).toggleClass('eurojackpot-number-selected');

            if($(this).hasClass('eurojackpot-number-selected')){

                ctSelected++;

            } else {

                ctSelected--;

            }

        }



        if (ctSelected == 0) {

            $(this).parents('.ticket-holder').find('.ticket-select-info-bottom p').html('Select 2 EuroStars').css('color', '#333333');

        } else {

            if (ctSelected == 1) {

                $(this).parents('.ticket-holder').find('.ticket-select-info-bottom p').html('Select 1 EuroStar').css('color', '#333333');

             } else {

                $(this).parents('.ticket-holder').find('.ticket-select-info-bottom p').html('All Good Here!').css('color', 'green');

             }

        }



        checkIfComplete($(this).parent().parent());

    });

});





$(".quick-pick-button-1-eurojackpot").on("click", function first() {

    quickPickFirstTicket();

});





$(".quick-pick-button-2-eurojackpot").on("click", function() {

    quickPickSecondTicket();

});



$(".quick-pick-button-3-eurojackpot").on("click", function() {

    quickPickThirdTicket();

});





$(".quick-pick-button-4-eurojackpot").on("click", function() {

    quickPickFourthTicket();

});



$(".quick-pick-button-5-eurojackpot").on("click", function() {

    quickPickFifthTicket();

});



$(".quick-pick-button-6-eurojackpot").on("click", function() {

    quickPickSixthTicket();

});



$(".quick-pick-button-7-eurojackpot").on("click", function() {

    quickPickSeventhTicket();

});



$(".quick-pick-button-8-eurojackpot").on("click", function() {

    quickPickEightTicket();

});



$('.thrash-button-1').click(function() {

    $('.eurojackpot-first-ticket').removeClass('eurojackpot-number-selected').removeClass('eurojackpot-number-was-selected');

    $('.eurojackpot-first-ticket-power').removeClass('eurojackpot-number-selected').removeClass('eurojackpot-number-was-selected');

    trashLine.call(this);

});



$('.thrash-button-2').click(function() {

    $('.eurojackpot-second-ticket').removeClass('eurojackpot-number-selected').removeClass('eurojackpot-number-was-selected');

    $('.eurojackpot-second-ticket-power').removeClass('eurojackpot-number-selected').removeClass('eurojackpot-number-was-selected');

    trashLine.call(this);

});



$('.thrash-button-3').click(function() {

    $('.eurojackpot-third-ticket').removeClass('eurojackpot-number-selected').removeClass('eurojackpot-number-was-selected');

    $('.eurojackpot-third-ticket-power').removeClass('eurojackpot-number-selected').removeClass('eurojackpot-number-was-selected');

    trashLine.call(this);

});



$('.thrash-button-4').click(function() {

    $('.eurojackpot-fourth-ticket').removeClass('eurojackpot-number-selected').removeClass('eurojackpot-number-was-selected');

    $('.eurojackpot-fourth-ticket-power').removeClass('eurojackpot-number-selected').removeClass('eurojackpot-number-was-selected');

    trashLine.call(this);

});



$('.thrash-button-5').click(function() {

    $('.eurojackpot-fifth-ticket').removeClass('eurojackpot-number-selected').removeClass('eurojackpot-number-was-selected');

    $('.eurojackpot-fifth-ticket-power').removeClass('eurojackpot-number-selected').removeClass('eurojackpot-number-was-selected');

    trashLine.call(this);

});



$('.thrash-button-6').click(function() {

    $('.eurojackpot-sixth-ticket').removeClass('eurojackpot-number-selected').removeClass('eurojackpot-number-was-selected');

    $('.eurojackpot-sixth-ticket-power').removeClass('eurojackpot-number-selected').removeClass('eurojackpot-number-was-selected');

    trashLine.call(this);

});



$('.thrash-button-7').click(function() {

    $('.eurojackpot-seventh-ticket').removeClass('eurojackpot-number-selected').removeClass('eurojackpot-number-was-selected');

    $('.eurojackpot-seventh-ticket-power').removeClass('eurojackpot-number-selected').removeClass('eurojackpot-number-was-selected');

    trashLine.call(this);

});



$('.thrash-button-8').click(function() {

    $('.eurojackpot-eight-ticket').removeClass('eurojackpot-number-selected').removeClass('eurojackpot-number-was-selected');

    $('.eurojackpot-eight-ticket-power').removeClass('eurojackpot-number-selected').removeClass('eurojackpot-number-was-selected');

    trashLine.call(this);

});





function trashLine() {

    $(this).parents('.ticket-holder').find('.quick-pick-button').css('background', '#266CA8 ');

    $(this).parents('.ticket-holder').removeClass('ticket-holder-shadow');

    $(this).parents('.ticket-holder').find('.main-numbers p').css('display', 'block');

    $(this).parents('.ticket-holder').css('background', '#ffffff');

    $(this).parents('.ticket-holder').find('.ticket-select-info').html('Select 5 Numbers').css('color', '#333333');

    $(this).parents('.ticket-holder').find('.ticket-select-info-bottom p').html('Select 2 EuroStars').css('color', '#333333');



    $(this).parents('.ticket-holder').find('.ticket-select-info').removeClass('line-complete');



    updatePrice();

    updateDiscountPercentage();

    updateDiscountTotal();

    updateLines();

    updateDraws();

}



function quickPickFifthTicket() {

    $('.eurojackpot-fifth-ticket').removeClass('eurojackpot-number-selected');

    var randomNumbers = $(".eurojackpot-fifth-ticket").get().sort(function () {

        return Math.round(Math.random()) - 0.1;

    }).slice(0, 5);

    $(randomNumbers).addClass('eurojackpot-number-selected').addClass('eurojackpot-number-was-selected');



    $('.eurojackpot-fifth-ticket-power').removeClass('eurojackpot-number-selected');

    var randomPower = $(".eurojackpot-fifth-ticket-power").get().sort(function () {

        return Math.round(Math.random()) - 0.1;

    }).slice(0, 2);

    $(randomPower).addClass('eurojackpot-number-selected').addClass('eurojackpot-number-was-selected');

    markLineComplete($('.eurojackpot-fifth-ticket').parents('.ticket-holder'));

}



function quickPickSixthTicket() {

    $('.eurojackpot-sixth-ticket').removeClass('eurojackpot-number-selected');

    var randomNumbers = $(".eurojackpot-sixth-ticket").get().sort(function () {

        return Math.round(Math.random()) - 0.1;

    }).slice(0, 5);

    $(randomNumbers).addClass('eurojackpot-number-selected').addClass('eurojackpot-number-was-selected');



    $('.eurojackpot-sixth-ticket-power').removeClass('eurojackpot-number-selected');

    var randomPower = $(".eurojackpot-sixth-ticket-power").get().sort(function () {

        return Math.round(Math.random()) - 0.1;

    }).slice(0, 2);

    $(randomPower).addClass('eurojackpot-number-selected').addClass('eurojackpot-number-was-selected');

    markLineComplete($('.eurojackpot-sixth-ticket').parents('.ticket-holder'));

}



function quickPickSeventhTicket() {

    $('.eurojackpot-seventh-ticket').removeClass('eurojackpot-number-selected');

    var randomNumbers = $(".eurojackpot-seventh-ticket").get().sort(function () {

        return Math.round(Math.random()) - 0.1;

    }).slice(0, 5);

    $(randomNumbers).addClass('eurojackpot-number-selected').addClass('eurojackpot-number-was-selected');



    $('.eurojackpot-seventh-ticket-power').removeClass('eurojackpot-number-selected');

    var randomPower = $(".eurojackpot-seventh-ticket-power").get().sort(function () {

        return Math.round(Math.random()) - 0.1;

    }).slice(0, 2);

    $(randomPower).addClass('eurojackpot-number-selected').addClass('eurojackpot-number-was-selected');

    markLineComplete($('.eurojackpot-seventh-ticket').parents('.ticket-holder'));

}



function quickPickEightTicket() {

    $('.eurojackpot-eight-ticket').removeClass('eurojackpot-number-selected');

    var randomNumbers = $(".eurojackpot-eight-ticket").get().sort(function () {

        return Math.round(Math.random()) - 0.1;

    }).slice(0, 5);

    $(randomNumbers).addClass('eurojackpot-number-selected').addClass('eurojackpot-number-was-selected');



    $('.eurojackpot-eight-ticket-power').removeClass('eurojackpot-number-selected');

    var randomPower = $(".eurojackpot-eight-ticket-power").get().sort(function () {

        return Math.round(Math.random()) - 0.1;

    }).slice(0, 2);

    $(randomPower).addClass('eurojackpot-number-selected').addClass('eurojackpot-number-was-selected');

    markLineComplete($('.eurojackpot-eight-ticket').parents('.ticket-holder'));

}



function quickPickFirstTicket() {

    $('.eurojackpot-first-ticket').removeClass('eurojackpot-number-selected');

    var randomNumbers = $(".eurojackpot-first-ticket").get().sort(function () {

        return Math.round(Math.random()) - 0.1;

    }).slice(0, 5);

    $(randomNumbers).addClass('eurojackpot-number-selected').addClass('eurojackpot-number-was-selected');



    $('.eurojackpot-first-ticket-power').removeClass('eurojackpot-number-selected');

    var randomPower = $(".eurojackpot-first-ticket-power").get().sort(function () {

        return Math.round(Math.random()) - 0.1;

    }).slice(0, 2);

    $(randomPower).addClass('eurojackpot-number-selected').addClass('eurojackpot-number-was-selected');

    markLineComplete($('.eurojackpot-first-ticket').parents('.ticket-holder'));

}



function quickPickSecondTicket() {

    $('.eurojackpot-second-ticket').removeClass('eurojackpot-number-selected');

    var randomNumbers = $(".eurojackpot-second-ticket").get().sort(function () {

        return Math.round(Math.random()) - 0.1;

    }).slice(0, 5);

    $(randomNumbers).addClass('eurojackpot-number-selected').addClass('eurojackpot-number-was-selected');



    $('.eurojackpot-second-ticket-power').removeClass('eurojackpot-number-selected');

    var randomPower = $(".eurojackpot-second-ticket-power").get().sort(function () {

        return Math.round(Math.random()) - 0.1;

    }).slice(0, 2);

    $(randomPower).addClass('eurojackpot-number-selected').addClass('eurojackpot-number-was-selected');

    markLineComplete($('.eurojackpot-second-ticket').parents('.ticket-holder'));

}



function quickPickThirdTicket() {

    $('.eurojackpot-third-ticket').removeClass('eurojackpot-number-selected');

    var randomNumbers = $(".eurojackpot-third-ticket").get().sort(function () {

        return Math.round(Math.random()) - 0.1;

    }).slice(0, 5);

    $(randomNumbers).addClass('eurojackpot-number-selected').addClass('eurojackpot-number-was-selected');



    $('.eurojackpot-third-ticket-power').removeClass('eurojackpot-number-selected');

    var randomPower = $(".eurojackpot-third-ticket-power").get().sort(function () {

        return Math.round(Math.random()) - 0.1;

    }).slice(0, 2);

    $(randomPower).addClass('eurojackpot-number-selected').addClass('eurojackpot-number-was-selected');

    markLineComplete($('.eurojackpot-third-ticket').parents('.ticket-holder'));

}



function quickPickFourthTicket() {

    $('.eurojackpot-fourth-ticket').removeClass('eurojackpot-number-selected');

    var randomNumbers = $(".eurojackpot-fourth-ticket").get().sort(function () {

        return Math.round(Math.random()) - 0.1;

    }).slice(0, 5);

    $(randomNumbers).addClass('eurojackpot-number-selected').addClass('eurojackpot-number-was-selected');



    $('.eurojackpot-fourth-ticket-power').removeClass('eurojackpot-number-selected');

    var randomPower = $(".eurojackpot-fourth-ticket-power").get().sort(function () {

        return Math.round(Math.random()) - 0.1;

    }).slice(0, 2);

    $(randomPower).addClass('eurojackpot-number-selected').addClass('eurojackpot-number-was-selected');

    markLineComplete($('.eurojackpot-fourth-ticket').parents('.ticket-holder'));

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

    var regularNumbers = line.find('.eurojackpot-main-numbers.eurojackpot-number-selected').length;

    var extraNumbers = line.find('.eurojackpot-round-number.eurojackpot-number-selected').length;

    if(regularNumbers == 5 && extraNumbers == 2){

        markLineComplete(line);

    } else {

        markLineUnComplete(line);

    }

}



$(".quick-pick-all-eurojackpot").click(function() {

    if($('.eurojackpot-fifth-ticket').is(':visible')){

        quickPickFifthTicket();

    }



    if( $('.eurojackpot-sixth-ticket').is(':visible')){

        quickPickSixthTicket();

    }



    if( $('.eurojackpot-seventh-ticket').is(':visible')) {

        quickPickSeventhTicket();

    }



    if( $('.eurojackpot-eight-ticket').is(':visible')) {

        quickPickEightTicket();

    }



    if( $('.eurojackpot-first-ticket').is(':visible')) {

        quickPickFirstTicket();

    }



    if( $('.eurojackpot-second-ticket').is(':visible')) {

        quickPickSecondTicket();

    }



    if( $('.eurojackpot-third-ticket').is(':visible')) {

        quickPickThirdTicket();

    }



    if( $('.eurojackpot-fourth-ticket').is(':visible')) {

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

    ticketHolder.find('.quick-pick-button').css('background', '#003B9A ');



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

    $('.eurojackpot-main-numbers').removeClass('eurojackpot-number-selected').removeClass('eurojackpot-number-was-selected');

    $('.round-number').removeClass('eurojackpot-number-selected').removeClass('eurojackpot-number-was-selected');

    $('.quick-pick-button').css('background', '#266CA8 ');

    $('.ticket-holder').removeClass('ticket-holder-shadow');

    $('.ticket-holder').find('.ticket-select-info').removeClass('line-complete');

    $('.main-numbers').find('p').css('display', 'block');

    $('.ticket-holder').css('background', '#e5e5e5');

    $('.ticket-holder').find('.ticket-select-info').html('Select 5 Numbers').css('color', '#333333');

    $('.ticket-holder').find('.ticket-select-info-bottom p').html('Select 2 EuroStars').css('color', '#333333');



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

    /*alert('clicked');*/

    var lines = [];

    var draws = $('.sidebar-button.selected').parent().data('draws');



    $.each($('.line-complete'), function (key, item) {

        var ticketLine = $(item).parent();

        var selected = ticketLine.find('.eurojackpot-number-selected');



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

            lottoType: 9

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
            lottoType: 9
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