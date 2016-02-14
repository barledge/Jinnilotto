/**

 * Created by Petar on 12/8/2015.

 */







/*----------------------------------------------------*/

/*-----------------newyork Functions----------------*/

/*----------------------------------------------------*/





jQuery(function($){

    $('.newyork-numbers').click(function() {

        $(this).addClass('newyork-number-was-selected');

    })

});





jQuery(function($){

    $(".newyork-main-numbers").on('mousedown',  function(evt) {



        evt.preventDefault();

        evt.stopPropagation();





        // get the number of items already selected:

        var ctSelected = $(this).parent().find('.newyork-number-selected').length;



        if (ctSelected >= 6) {

            if($(this).hasClass('newyork-number-selected')){

                $(this).toggleClass('newyork-number-selected');

                ctSelected--;

            } else {

                jQuery(function($){

                    $('.error-message-for-main-numbers').addClass('bounceInUp').css('display', 'block').delay(3000).fadeOut('slow');

                });

                return;

            }

        } else {

            $(this).toggleClass('newyork-number-selected');

            if($(this).hasClass('newyork-number-selected')){

                ctSelected++;

            } else {

                ctSelected--;

            }

        }





        if (ctSelected >= 0) {

            $(this).parents('.ticket-holder').find('.quick-pick-button').css('background', '#c80006');

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

            $(this).parents('.ticket-holder').find('.ticket-select-info').html('Select 6 Numbers').css('color', '#333333');

        } else {

            if (ctSelected == 1) {

                $(this).parents('.ticket-holder').find('.ticket-select-info').html('Select 5 More').css('color', '#333333');

            } else {

                if (ctSelected == 2) {

                    $(this).parents('.ticket-holder').find('.ticket-select-info').html('Select 4 More').css('color', '#333333');

                } else {

                    if (ctSelected == 3) {

                        $(this).parents('.ticket-holder').find('.ticket-select-info').html('Select 3 More').css('color', '#333333');

                    } else {

                        if (ctSelected == 4) {

                            $(this).parents('.ticket-holder').find('.ticket-select-info').html('Select 2 More').css('color', '#333333');

                        } else {

                            if (ctSelected == 5) {

                                $(this).parents('.ticket-holder').find('.ticket-select-info').html('Select 1 More').css('color', '#333333');

                            } else {

                                if (ctSelected == 6) {

                                    $(this).parents('.ticket-holder').find('.ticket-select-info').html('All good here!').css('color', 'green');

                                }

                            }

                        }

                    }

                }

            }

        }



        checkIfComplete($(this).parent().parent());

    });



});







$(".quick-pick-button-1-newyork").on("click", function first() {

    quickPickFirstTicket();

});





$(".quick-pick-button-2-newyork").on("click", function() {

    quickPickSecondTicket();

});



$(".quick-pick-button-3-newyork").on("click", function() {

    quickPickThirdTicket();

});





$(".quick-pick-button-4-newyork").on("click", function() {

    quickPickFourthTicket();

});



$(".quick-pick-button-5-newyork").on("click", function() {

    quickPickFifthTicket();

});



$(".quick-pick-button-6-newyork").on("click", function() {

    quickPickSixthTicket();

});



$(".quick-pick-button-7-newyork").on("click", function() {

    quickPickSeventhTicket();

});



$(".quick-pick-button-8-newyork").on("click", function() {

    quickPickEightTicket();

});



$('.thrash-button-1').click(function() {

    $('.newyork-first-ticket').removeClass('newyork-number-selected').removeClass('newyork-number-was-selected');

    $('.newyork-first-ticket-power').removeClass('newyork-number-selected').removeClass('newyork-number-was-selected');

    trashLine.call(this);

});



$('.thrash-button-2').click(function() {

    $('.newyork-second-ticket').removeClass('newyork-number-selected').removeClass('newyork-number-was-selected');

    $('.newyork-second-ticket-power').removeClass('newyork-number-selected').removeClass('newyork-number-was-selected');

    trashLine.call(this);

});



$('.thrash-button-3').click(function() {

    $('.newyork-third-ticket').removeClass('newyork-number-selected').removeClass('newyork-number-was-selected');

    $('.newyork-third-ticket-power').removeClass('newyork-number-selected').removeClass('newyork-number-was-selected');

    trashLine.call(this);

});



$('.thrash-button-4').click(function() {

    $('.newyork-fourth-ticket').removeClass('newyork-number-selected').removeClass('newyork-number-was-selected');

    $('.newyork-fourth-ticket-power').removeClass('newyork-number-selected').removeClass('newyork-number-was-selected');

    trashLine.call(this);

});



$('.thrash-button-5').click(function() {

    $('.newyork-fifth-ticket').removeClass('newyork-number-selected').removeClass('newyork-number-was-selected');

    $('.newyork-fifth-ticket-power').removeClass('newyork-number-selected').removeClass('newyork-number-was-selected');

    trashLine.call(this);

});



$('.thrash-button-6').click(function() {

    $('.newyork-sixth-ticket').removeClass('newyork-number-selected').removeClass('newyork-number-was-selected');

    $('.newyork-sixth-ticket-power').removeClass('newyork-number-selected').removeClass('newyork-number-was-selected');

    trashLine.call(this);

});



$('.thrash-button-7').click(function() {

    $('.newyork-seventh-ticket').removeClass('newyork-number-selected').removeClass('newyork-number-was-selected');

    $('.newyork-seventh-ticket-power').removeClass('newyork-number-selected').removeClass('newyork-number-was-selected');

    trashLine.call(this);

});



$('.thrash-button-8').click(function() {

    $('.newyork-eight-ticket').removeClass('newyork-number-selected').removeClass('newyork-number-was-selected');

    $('.newyork-eight-ticket-power').removeClass('newyork-number-selected').removeClass('newyork-number-was-selected');

    trashLine.call(this);

});





function trashLine() {

    $(this).parents('.ticket-holder').find('.quick-pick-button').css('background', '#266CA8 ');

    $(this).parents('.ticket-holder').removeClass('ticket-holder-shadow');

    $(this).parents('.ticket-holder').find('.main-numbers p').css('display', 'block');

    $(this).parents('.ticket-holder').css('background', '#ffffff');

    $(this).parents('.ticket-holder').find('.ticket-select-info').html('Select 6 Numbers').css('color', '#333333');

    $(this).parents('.ticket-holder').find('.ticket-select-info-bottom p').html('Select 1 Power Ball Number').css('color', '#333333');



    $(this).parents('.ticket-holder').find('.ticket-select-info').removeClass('line-complete');



    updatePrice();

    updateDiscountPercentage();

    updateDiscountTotal();

    updateLines();

    updateDraws();

}



function quickPickFifthTicket() {

    $('.newyork-fifth-ticket').removeClass('newyork-number-selected');

    var randomNumbers = $(".newyork-fifth-ticket").get().sort(function () {

        return Math.round(Math.random()) - 0.1;

    }).slice(0, 6);

    $(randomNumbers).addClass('newyork-number-selected').addClass('newyork-number-was-selected');



    $('.newyork-fifth-ticket-power').removeClass('newyork-number-selected');

    var randomPower = $(".newyork-fifth-ticket-power").get().sort(function () {

        return Math.round(Math.random()) - 0.1;

    }).slice(0, 1);

    $(randomPower).addClass('newyork-number-selected').addClass('newyork-number-was-selected');

    markLineComplete($('.newyork-fifth-ticket').parents('.ticket-holder'));

}



function quickPickSixthTicket() {

    $('.newyork-sixth-ticket').removeClass('newyork-number-selected');

    var randomNumbers = $(".newyork-sixth-ticket").get().sort(function () {

        return Math.round(Math.random()) - 0.1;

    }).slice(0, 6);

    $(randomNumbers).addClass('newyork-number-selected').addClass('newyork-number-was-selected');



    $('.newyork-sixth-ticket-power').removeClass('newyork-number-selected');

    var randomPower = $(".newyork-sixth-ticket-power").get().sort(function () {

        return Math.round(Math.random()) - 0.1;

    }).slice(0, 1);

    $(randomPower).addClass('newyork-number-selected').addClass('newyork-number-was-selected');

    markLineComplete($('.newyork-sixth-ticket').parents('.ticket-holder'));

}



function quickPickSeventhTicket() {

    $('.newyork-seventh-ticket').removeClass('newyork-number-selected');

    var randomNumbers = $(".newyork-seventh-ticket").get().sort(function () {

        return Math.round(Math.random()) - 0.1;

    }).slice(0, 6);

    $(randomNumbers).addClass('newyork-number-selected').addClass('newyork-number-was-selected');



    $('.newyork-seventh-ticket-power').removeClass('newyork-number-selected');

    var randomPower = $(".newyork-seventh-ticket-power").get().sort(function () {

        return Math.round(Math.random()) - 0.1;

    }).slice(0, 1);

    $(randomPower).addClass('newyork-number-selected').addClass('newyork-number-was-selected');

    markLineComplete($('.newyork-seventh-ticket').parents('.ticket-holder'));

}



function quickPickEightTicket() {

    $('.newyork-eight-ticket').removeClass('newyork-number-selected');

    var randomNumbers = $(".newyork-eight-ticket").get().sort(function () {

        return Math.round(Math.random()) - 0.1;

    }).slice(0, 6);

    $(randomNumbers).addClass('newyork-number-selected').addClass('newyork-number-was-selected');



    $('.newyork-eight-ticket-power').removeClass('newyork-number-selected');

    var randomPower = $(".newyork-eight-ticket-power").get().sort(function () {

        return Math.round(Math.random()) - 0.1;

    }).slice(0, 1);

    $(randomPower).addClass('newyork-number-selected').addClass('newyork-number-was-selected');

    markLineComplete($('.newyork-eight-ticket').parents('.ticket-holder'));

}



function quickPickFirstTicket() {

    $('.newyork-first-ticket').removeClass('newyork-number-selected');

    var randomNumbers = $(".newyork-first-ticket").get().sort(function () {

        return Math.round(Math.random()) - 0.1;

    }).slice(0, 6);

    $(randomNumbers).addClass('newyork-number-selected').addClass('newyork-number-was-selected');



    $('.newyork-first-ticket-power').removeClass('newyork-number-selected');

    var randomPower = $(".newyork-first-ticket-power").get().sort(function () {

        return Math.round(Math.random()) - 0.1;

    }).slice(0, 1);

    $(randomPower).addClass('newyork-number-selected').addClass('newyork-number-was-selected');

    markLineComplete($('.newyork-first-ticket').parents('.ticket-holder'));

}



function quickPickSecondTicket() {

    $('.newyork-second-ticket').removeClass('newyork-number-selected');

    var randomNumbers = $(".newyork-second-ticket").get().sort(function () {

        return Math.round(Math.random()) - 0.1;

    }).slice(0, 6);

    $(randomNumbers).addClass('newyork-number-selected').addClass('newyork-number-was-selected');



    $('.newyork-second-ticket-power').removeClass('newyork-number-selected');

    var randomPower = $(".newyork-second-ticket-power").get().sort(function () {

        return Math.round(Math.random()) - 0.1;

    }).slice(0, 1);

    $(randomPower).addClass('newyork-number-selected').addClass('newyork-number-was-selected');

    markLineComplete($('.newyork-second-ticket').parents('.ticket-holder'));

}



function quickPickThirdTicket() {

    $('.newyork-third-ticket').removeClass('newyork-number-selected');

    var randomNumbers = $(".newyork-third-ticket").get().sort(function () {

        return Math.round(Math.random()) - 0.1;

    }).slice(0, 6);

    $(randomNumbers).addClass('newyork-number-selected').addClass('newyork-number-was-selected');



    $('.newyork-third-ticket-power').removeClass('newyork-number-selected');

    var randomPower = $(".newyork-third-ticket-power").get().sort(function () {

        return Math.round(Math.random()) - 0.1;

    }).slice(0, 1);

    $(randomPower).addClass('newyork-number-selected').addClass('newyork-number-was-selected');

    markLineComplete($('.newyork-third-ticket').parents('.ticket-holder'));

}



function quickPickFourthTicket() {

    $('.newyork-fourth-ticket').removeClass('newyork-number-selected');

    var randomNumbers = $(".newyork-fourth-ticket").get().sort(function () {

        return Math.round(Math.random()) - 0.1;

    }).slice(0, 6);

    $(randomNumbers).addClass('newyork-number-selected').addClass('newyork-number-was-selected');



    $('.newyork-fourth-ticket-power').removeClass('newyork-number-selected');

    var randomPower = $(".newyork-fourth-ticket-power").get().sort(function () {

        return Math.round(Math.random()) - 0.1;

    }).slice(0, 1);

    $(randomPower).addClass('newyork-number-selected').addClass('newyork-number-was-selected');

    markLineComplete($('.newyork-fourth-ticket').parents('.ticket-holder'));

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

    var regularNumbers = line.find('.newyork-main-numbers.newyork-number-selected').length;

    var extraNumbers = line.find('.newyork-round-number.newyork-number-selected').length;

    if(regularNumbers == 6){

        markLineComplete(line);

    } else {

        markLineUnComplete(line);

    }

}



$(".quick-pick-all-newyork").click(function() {

    if($('.newyork-fifth-ticket').is(':visible')){

        quickPickFifthTicket();

    }



    if( $('.newyork-sixth-ticket').is(':visible')){

        quickPickSixthTicket();

    }



    if( $('.newyork-seventh-ticket').is(':visible')) {

        quickPickSeventhTicket();

    }



    if( $('.newyork-eight-ticket').is(':visible')) {

        quickPickEightTicket();

    }



    if( $('.newyork-first-ticket').is(':visible')) {

        quickPickFirstTicket();

    }



    if( $('.newyork-second-ticket').is(':visible')) {

        quickPickSecondTicket();

    }



    if( $('.newyork-third-ticket').is(':visible')) {

        quickPickThirdTicket();

    }



    if( $('.newyork-fourth-ticket').is(':visible')) {

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

    ticketHolder.find('.quick-pick-button').css('background', '#c80006 ');



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

    $('.newyork-main-numbers').removeClass('newyork-number-selected').removeClass('newyork-number-was-selected');

    $('.round-number').removeClass('newyork-number-selected').removeClass('newyork-number-was-selected');

    $('.quick-pick-button').css('background', '#266CA8 ');

    $('.ticket-holder').removeClass('ticket-holder-shadow');

    $('.ticket-holder').find('.ticket-select-info').removeClass('line-complete');

    $('.main-numbers').find('p').css('display', 'block');

    $('.ticket-holder').css('background', '#e5e5e5');

    $('.ticket-holder').find('.ticket-select-info').html('Select 6 Numbers').css('color', '#333333');

    $('.ticket-holder').find('.ticket-select-info-bottom p').html('Select 1 Power Ball Number').css('color', '#333333');



    updatePrice();

    updateDiscountPercentage();

    updateDiscountTotal();

    updateLines();

    updateDraws();

});



$(function() {

    $('.sidebar-arrow').on("click", function () {

        updatePrice();

        updateDiscountPercentage();

        updateDiscountTotal();

        updateLines();

        updateDraws();

    });

});



$('.button-div').on("click", function () {

    var lines = [];

    var draws = $('.sidebar-button.selected').parent().data('draws');



    $.each($('.line-complete'), function (key, item) {

        var ticketLine = $(item).parent();

        var selected = ticketLine.find('.newyork-number-selected');



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

            lottoType: 14

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