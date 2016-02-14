/**

 * Created by Petar on 12/8/2015.

 */







/*----------------------------------------------------*/

/*-----------------lotto649 Functions----------------*/

/*----------------------------------------------------*/





jQuery(function($){

    $('.lotto649-numbers').click(function() {

        $(this).addClass('lotto649-number-was-selected');

    })

});





jQuery(function($){

    $(".lotto649-main-numbers").on('mousedown',  function(evt) {



        evt.preventDefault();

        evt.stopPropagation();





        // get the number of items already selected:

        var ctSelected = $(this).parent().find('.lotto649-number-selected').length;



        if (ctSelected >= 6) {

            if($(this).hasClass('lotto649-number-selected')){

                $(this).toggleClass('lotto649-number-selected');

                ctSelected--;

            } else {

                jQuery(function($){

                    $('.error-message-for-main-numbers').addClass('bounceInUp').css('display', 'block').delay(3000).fadeOut('slow');

                });

                return;

            }

        } else {

            $(this).toggleClass('lotto649-number-selected');

            if($(this).hasClass('lotto649-number-selected')){

                ctSelected++;

            } else {

                ctSelected--;

            }

        }





        if (ctSelected >= 0) {

            $(this).parents('.ticket-holder').find('.quick-pick-button').css('background', '#27286b');

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







$(".quick-pick-button-1-lotto649").on("click", function first() {

    quickPickFirstTicket();

});





$(".quick-pick-button-2-lotto649").on("click", function() {

    quickPickSecondTicket();

});



$(".quick-pick-button-3-lotto649").on("click", function() {

    quickPickThirdTicket();

});





$(".quick-pick-button-4-lotto649").on("click", function() {

    quickPickFourthTicket();

});



$(".quick-pick-button-5-lotto649").on("click", function() {

    quickPickFifthTicket();

});



$(".quick-pick-button-6-lotto649").on("click", function() {

    quickPickSixthTicket();

});



$(".quick-pick-button-7-lotto649").on("click", function() {

    quickPickSeventhTicket();

});



$(".quick-pick-button-8-lotto649").on("click", function() {

    quickPickEightTicket();

});



$('.thrash-button-1').click(function() {

    $('.lotto649-first-ticket').removeClass('lotto649-number-selected').removeClass('lotto649-number-was-selected');

    $('.lotto649-first-ticket-power').removeClass('lotto649-number-selected').removeClass('lotto649-number-was-selected');

    trashLine.call(this);

});



$('.thrash-button-2').click(function() {

    $('.lotto649-second-ticket').removeClass('lotto649-number-selected').removeClass('lotto649-number-was-selected');

    $('.lotto649-second-ticket-power').removeClass('lotto649-number-selected').removeClass('lotto649-number-was-selected');

    trashLine.call(this);

});



$('.thrash-button-3').click(function() {

    $('.lotto649-third-ticket').removeClass('lotto649-number-selected').removeClass('lotto649-number-was-selected');

    $('.lotto649-third-ticket-power').removeClass('lotto649-number-selected').removeClass('lotto649-number-was-selected');

    trashLine.call(this);

});



$('.thrash-button-4').click(function() {

    $('.lotto649-fourth-ticket').removeClass('lotto649-number-selected').removeClass('lotto649-number-was-selected');

    $('.lotto649-fourth-ticket-power').removeClass('lotto649-number-selected').removeClass('lotto649-number-was-selected');

    trashLine.call(this);

});



$('.thrash-button-5').click(function() {

    $('.lotto649-fifth-ticket').removeClass('lotto649-number-selected').removeClass('lotto649-number-was-selected');

    $('.lotto649-fifth-ticket-power').removeClass('lotto649-number-selected').removeClass('lotto649-number-was-selected');

    trashLine.call(this);

});



$('.thrash-button-6').click(function() {

    $('.lotto649-sixth-ticket').removeClass('lotto649-number-selected').removeClass('lotto649-number-was-selected');

    $('.lotto649-sixth-ticket-power').removeClass('lotto649-number-selected').removeClass('lotto649-number-was-selected');

    trashLine.call(this);

});



$('.thrash-button-7').click(function() {

    $('.lotto649-seventh-ticket').removeClass('lotto649-number-selected').removeClass('lotto649-number-was-selected');

    $('.lotto649-seventh-ticket-power').removeClass('lotto649-number-selected').removeClass('lotto649-number-was-selected');

    trashLine.call(this);

});



$('.thrash-button-8').click(function() {

    $('.lotto649-eight-ticket').removeClass('lotto649-number-selected').removeClass('lotto649-number-was-selected');

    $('.lotto649-eight-ticket-power').removeClass('lotto649-number-selected').removeClass('lotto649-number-was-selected');

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

    $('.lotto649-fifth-ticket').removeClass('lotto649-number-selected');

    var randomNumbers = $(".lotto649-fifth-ticket").get().sort(function () {

        return Math.round(Math.random()) - 0.1;

    }).slice(0, 6);

    $(randomNumbers).addClass('lotto649-number-selected').addClass('lotto649-number-was-selected');



    $('.lotto649-fifth-ticket-power').removeClass('lotto649-number-selected');

    var randomPower = $(".lotto649-fifth-ticket-power").get().sort(function () {

        return Math.round(Math.random()) - 0.1;

    }).slice(0, 1);

    $(randomPower).addClass('lotto649-number-selected').addClass('lotto649-number-was-selected');

    markLineComplete($('.lotto649-fifth-ticket').parents('.ticket-holder'));

}



function quickPickSixthTicket() {

    $('.lotto649-sixth-ticket').removeClass('lotto649-number-selected');

    var randomNumbers = $(".lotto649-sixth-ticket").get().sort(function () {

        return Math.round(Math.random()) - 0.1;

    }).slice(0, 6);

    $(randomNumbers).addClass('lotto649-number-selected').addClass('lotto649-number-was-selected');



    $('.lotto649-sixth-ticket-power').removeClass('lotto649-number-selected');

    var randomPower = $(".lotto649-sixth-ticket-power").get().sort(function () {

        return Math.round(Math.random()) - 0.1;

    }).slice(0, 1);

    $(randomPower).addClass('lotto649-number-selected').addClass('lotto649-number-was-selected');

    markLineComplete($('.lotto649-sixth-ticket').parents('.ticket-holder'));

}



function quickPickSeventhTicket() {

    $('.lotto649-seventh-ticket').removeClass('lotto649-number-selected');

    var randomNumbers = $(".lotto649-seventh-ticket").get().sort(function () {

        return Math.round(Math.random()) - 0.1;

    }).slice(0, 6);

    $(randomNumbers).addClass('lotto649-number-selected').addClass('lotto649-number-was-selected');



    $('.lotto649-seventh-ticket-power').removeClass('lotto649-number-selected');

    var randomPower = $(".lotto649-seventh-ticket-power").get().sort(function () {

        return Math.round(Math.random()) - 0.1;

    }).slice(0, 1);

    $(randomPower).addClass('lotto649-number-selected').addClass('lotto649-number-was-selected');

    markLineComplete($('.lotto649-seventh-ticket').parents('.ticket-holder'));

}



function quickPickEightTicket() {

    $('.lotto649-eight-ticket').removeClass('lotto649-number-selected');

    var randomNumbers = $(".lotto649-eight-ticket").get().sort(function () {

        return Math.round(Math.random()) - 0.1;

    }).slice(0, 6);

    $(randomNumbers).addClass('lotto649-number-selected').addClass('lotto649-number-was-selected');



    $('.lotto649-eight-ticket-power').removeClass('lotto649-number-selected');

    var randomPower = $(".lotto649-eight-ticket-power").get().sort(function () {

        return Math.round(Math.random()) - 0.1;

    }).slice(0, 1);

    $(randomPower).addClass('lotto649-number-selected').addClass('lotto649-number-was-selected');

    markLineComplete($('.lotto649-eight-ticket').parents('.ticket-holder'));

}



function quickPickFirstTicket() {

    $('.lotto649-first-ticket').removeClass('lotto649-number-selected');

    var randomNumbers = $(".lotto649-first-ticket").get().sort(function () {

        return Math.round(Math.random()) - 0.1;

    }).slice(0, 6);

    $(randomNumbers).addClass('lotto649-number-selected').addClass('lotto649-number-was-selected');



    $('.lotto649-first-ticket-power').removeClass('lotto649-number-selected');

    var randomPower = $(".lotto649-first-ticket-power").get().sort(function () {

        return Math.round(Math.random()) - 0.1;

    }).slice(0, 1);

    $(randomPower).addClass('lotto649-number-selected').addClass('lotto649-number-was-selected');

    markLineComplete($('.lotto649-first-ticket').parents('.ticket-holder'));

}



function quickPickSecondTicket() {

    $('.lotto649-second-ticket').removeClass('lotto649-number-selected');

    var randomNumbers = $(".lotto649-second-ticket").get().sort(function () {

        return Math.round(Math.random()) - 0.1;

    }).slice(0, 6);

    $(randomNumbers).addClass('lotto649-number-selected').addClass('lotto649-number-was-selected');



    $('.lotto649-second-ticket-power').removeClass('lotto649-number-selected');

    var randomPower = $(".lotto649-second-ticket-power").get().sort(function () {

        return Math.round(Math.random()) - 0.1;

    }).slice(0, 1);

    $(randomPower).addClass('lotto649-number-selected').addClass('lotto649-number-was-selected');

    markLineComplete($('.lotto649-second-ticket').parents('.ticket-holder'));

}



function quickPickThirdTicket() {

    $('.lotto649-third-ticket').removeClass('lotto649-number-selected');

    var randomNumbers = $(".lotto649-third-ticket").get().sort(function () {

        return Math.round(Math.random()) - 0.1;

    }).slice(0, 6);

    $(randomNumbers).addClass('lotto649-number-selected').addClass('lotto649-number-was-selected');



    $('.lotto649-third-ticket-power').removeClass('lotto649-number-selected');

    var randomPower = $(".lotto649-third-ticket-power").get().sort(function () {

        return Math.round(Math.random()) - 0.1;

    }).slice(0, 1);

    $(randomPower).addClass('lotto649-number-selected').addClass('lotto649-number-was-selected');

    markLineComplete($('.lotto649-third-ticket').parents('.ticket-holder'));

}



function quickPickFourthTicket() {

    $('.lotto649-fourth-ticket').removeClass('lotto649-number-selected');

    var randomNumbers = $(".lotto649-fourth-ticket").get().sort(function () {

        return Math.round(Math.random()) - 0.1;

    }).slice(0, 6);

    $(randomNumbers).addClass('lotto649-number-selected').addClass('lotto649-number-was-selected');



    $('.lotto649-fourth-ticket-power').removeClass('lotto649-number-selected');

    var randomPower = $(".lotto649-fourth-ticket-power").get().sort(function () {

        return Math.round(Math.random()) - 0.1;

    }).slice(0, 1);

    $(randomPower).addClass('lotto649-number-selected').addClass('lotto649-number-was-selected');

    markLineComplete($('.lotto649-fourth-ticket').parents('.ticket-holder'));

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

    var regularNumbers = line.find('.lotto649-main-numbers.lotto649-number-selected').length;

    var extraNumbers = line.find('.lotto649-round-number.lotto649-number-selected').length;

    if(regularNumbers == 6){

        markLineComplete(line);

    } else {

        markLineUnComplete(line);

    }

}



$(".quick-pick-all-lotto649").click(function() {

    if($('.lotto649-fifth-ticket').is(':visible')){

        quickPickFifthTicket();

    }



    if( $('.lotto649-sixth-ticket').is(':visible')){

        quickPickSixthTicket();

    }



    if( $('.lotto649-seventh-ticket').is(':visible')) {

        quickPickSeventhTicket();

    }



    if( $('.lotto649-eight-ticket').is(':visible')) {

        quickPickEightTicket();

    }



    if( $('.lotto649-first-ticket').is(':visible')) {

        quickPickFirstTicket();

    }



    if( $('.lotto649-second-ticket').is(':visible')) {

        quickPickSecondTicket();

    }



    if( $('.lotto649-third-ticket').is(':visible')) {

        quickPickThirdTicket();

    }



    if( $('.lotto649-fourth-ticket').is(':visible')) {

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

    ticketHolder.find('.quick-pick-button').css('background', '#27286b ');



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

    $('.lotto649-main-numbers').removeClass('lotto649-number-selected').removeClass('lotto649-number-was-selected');

    $('.round-number').removeClass('lotto649-number-selected').removeClass('lotto649-number-was-selected');

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

        var selected = ticketLine.find('.lotto649-number-selected');



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

            lottoType: 3

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