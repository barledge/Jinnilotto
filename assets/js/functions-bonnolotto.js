/**

 * Created by Petar on 12/8/2015.

 */







/*----------------------------------------------------*/

/*-----------------bonnolotto Functions----------------*/

/*----------------------------------------------------*/





jQuery(function($){

    $('.bonnolotto-numbers').click(function() {

        $(this).addClass('bonnolotto-number-was-selected');

    })

});





jQuery(function($){

    $(".bonnolotto-main-numbers").on('mousedown',  function(evt) {



        evt.preventDefault();

        evt.stopPropagation();





        // get the number of items already selected:

        var ctSelected = $(this).parent().find('.bonnolotto-number-selected').length;



        if (ctSelected >= 6) {

            if($(this).hasClass('bonnolotto-number-selected')){

                $(this).toggleClass('bonnolotto-number-selected');

                ctSelected--;

            } else {

                jQuery(function($){

                    $('.error-message-for-main-numbers').addClass('bounceInUp').css('display', 'block').delay(3000).fadeOut('slow');

                });

                return;

            }

        } else {

            $(this).toggleClass('bonnolotto-number-selected');

            if($(this).hasClass('bonnolotto-number-selected')){

                ctSelected++;

            } else {

                ctSelected--;

            }

        }





        if (ctSelected >= 0) {

            $(this).parents('.ticket-holder').find('.quick-pick-button').css('background', '#339e36');

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







$(".quick-pick-button-1-bonnolotto").on("click", function first() {

    quickPickFirstTicket();

});





$(".quick-pick-button-2-bonnolotto").on("click", function() {

    quickPickSecondTicket();

});



$(".quick-pick-button-3-bonnolotto").on("click", function() {

    quickPickThirdTicket();

});





$(".quick-pick-button-4-bonnolotto").on("click", function() {

    quickPickFourthTicket();

});



$(".quick-pick-button-5-bonnolotto").on("click", function() {

    quickPickFifthTicket();

});



$(".quick-pick-button-6-bonnolotto").on("click", function() {

    quickPickSixthTicket();

});



$(".quick-pick-button-7-bonnolotto").on("click", function() {

    quickPickSeventhTicket();

});



$(".quick-pick-button-8-bonnolotto").on("click", function() {

    quickPickEightTicket();

});



$('.thrash-button-1').click(function() {

    $('.bonnolotto-first-ticket').removeClass('bonnolotto-number-selected').removeClass('bonnolotto-number-was-selected');

    $('.bonnolotto-first-ticket-power').removeClass('bonnolotto-number-selected').removeClass('bonnolotto-number-was-selected');

    trashLine.call(this);

});



$('.thrash-button-2').click(function() {

    $('.bonnolotto-second-ticket').removeClass('bonnolotto-number-selected').removeClass('bonnolotto-number-was-selected');

    $('.bonnolotto-second-ticket-power').removeClass('bonnolotto-number-selected').removeClass('bonnolotto-number-was-selected');

    trashLine.call(this);

});



$('.thrash-button-3').click(function() {

    $('.bonnolotto-third-ticket').removeClass('bonnolotto-number-selected').removeClass('bonnolotto-number-was-selected');

    $('.bonnolotto-third-ticket-power').removeClass('bonnolotto-number-selected').removeClass('bonnolotto-number-was-selected');

    trashLine.call(this);

});



$('.thrash-button-4').click(function() {

    $('.bonnolotto-fourth-ticket').removeClass('bonnolotto-number-selected').removeClass('bonnolotto-number-was-selected');

    $('.bonnolotto-fourth-ticket-power').removeClass('bonnolotto-number-selected').removeClass('bonnolotto-number-was-selected');

    trashLine.call(this);

});



$('.thrash-button-5').click(function() {

    $('.bonnolotto-fifth-ticket').removeClass('bonnolotto-number-selected').removeClass('bonnolotto-number-was-selected');

    $('.bonnolotto-fifth-ticket-power').removeClass('bonnolotto-number-selected').removeClass('bonnolotto-number-was-selected');

    trashLine.call(this);

});



$('.thrash-button-6').click(function() {

    $('.bonnolotto-sixth-ticket').removeClass('bonnolotto-number-selected').removeClass('bonnolotto-number-was-selected');

    $('.bonnolotto-sixth-ticket-power').removeClass('bonnolotto-number-selected').removeClass('bonnolotto-number-was-selected');

    trashLine.call(this);

});



$('.thrash-button-7').click(function() {

    $('.bonnolotto-seventh-ticket').removeClass('bonnolotto-number-selected').removeClass('bonnolotto-number-was-selected');

    $('.bonnolotto-seventh-ticket-power').removeClass('bonnolotto-number-selected').removeClass('bonnolotto-number-was-selected');

    trashLine.call(this);

});



$('.thrash-button-8').click(function() {

    $('.bonnolotto-eight-ticket').removeClass('bonnolotto-number-selected').removeClass('bonnolotto-number-was-selected');

    $('.bonnolotto-eight-ticket-power').removeClass('bonnolotto-number-selected').removeClass('bonnolotto-number-was-selected');

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

    $('.bonnolotto-fifth-ticket').removeClass('bonnolotto-number-selected');

    var randomNumbers = $(".bonnolotto-fifth-ticket").get().sort(function () {

        return Math.round(Math.random()) - 0.1;

    }).slice(0, 6);

    $(randomNumbers).addClass('bonnolotto-number-selected').addClass('bonnolotto-number-was-selected');



    $('.bonnolotto-fifth-ticket-power').removeClass('bonnolotto-number-selected');

    var randomPower = $(".bonnolotto-fifth-ticket-power").get().sort(function () {

        return Math.round(Math.random()) - 0.1;

    }).slice(0, 1);

    $(randomPower).addClass('bonnolotto-number-selected').addClass('bonnolotto-number-was-selected');

    markLineComplete($('.bonnolotto-fifth-ticket').parents('.ticket-holder'));

}



function quickPickSixthTicket() {

    $('.bonnolotto-sixth-ticket').removeClass('bonnolotto-number-selected');

    var randomNumbers = $(".bonnolotto-sixth-ticket").get().sort(function () {

        return Math.round(Math.random()) - 0.1;

    }).slice(0, 6);

    $(randomNumbers).addClass('bonnolotto-number-selected').addClass('bonnolotto-number-was-selected');



    $('.bonnolotto-sixth-ticket-power').removeClass('bonnolotto-number-selected');

    var randomPower = $(".bonnolotto-sixth-ticket-power").get().sort(function () {

        return Math.round(Math.random()) - 0.1;

    }).slice(0, 1);

    $(randomPower).addClass('bonnolotto-number-selected').addClass('bonnolotto-number-was-selected');

    markLineComplete($('.bonnolotto-sixth-ticket').parents('.ticket-holder'));

}



function quickPickSeventhTicket() {

    $('.bonnolotto-seventh-ticket').removeClass('bonnolotto-number-selected');

    var randomNumbers = $(".bonnolotto-seventh-ticket").get().sort(function () {

        return Math.round(Math.random()) - 0.1;

    }).slice(0, 6);

    $(randomNumbers).addClass('bonnolotto-number-selected').addClass('bonnolotto-number-was-selected');



    $('.bonnolotto-seventh-ticket-power').removeClass('bonnolotto-number-selected');

    var randomPower = $(".bonnolotto-seventh-ticket-power").get().sort(function () {

        return Math.round(Math.random()) - 0.1;

    }).slice(0, 1);

    $(randomPower).addClass('bonnolotto-number-selected').addClass('bonnolotto-number-was-selected');

    markLineComplete($('.bonnolotto-seventh-ticket').parents('.ticket-holder'));

}



function quickPickEightTicket() {

    $('.bonnolotto-eight-ticket').removeClass('bonnolotto-number-selected');

    var randomNumbers = $(".bonnolotto-eight-ticket").get().sort(function () {

        return Math.round(Math.random()) - 0.1;

    }).slice(0, 6);

    $(randomNumbers).addClass('bonnolotto-number-selected').addClass('bonnolotto-number-was-selected');



    $('.bonnolotto-eight-ticket-power').removeClass('bonnolotto-number-selected');

    var randomPower = $(".bonnolotto-eight-ticket-power").get().sort(function () {

        return Math.round(Math.random()) - 0.1;

    }).slice(0, 1);

    $(randomPower).addClass('bonnolotto-number-selected').addClass('bonnolotto-number-was-selected');

    markLineComplete($('.bonnolotto-eight-ticket').parents('.ticket-holder'));

}



function quickPickFirstTicket() {

    $('.bonnolotto-first-ticket').removeClass('bonnolotto-number-selected');

    var randomNumbers = $(".bonnolotto-first-ticket").get().sort(function () {

        return Math.round(Math.random()) - 0.1;

    }).slice(0, 6);

    $(randomNumbers).addClass('bonnolotto-number-selected').addClass('bonnolotto-number-was-selected');



    $('.bonnolotto-first-ticket-power').removeClass('bonnolotto-number-selected');

    var randomPower = $(".bonnolotto-first-ticket-power").get().sort(function () {

        return Math.round(Math.random()) - 0.1;

    }).slice(0, 1);

    $(randomPower).addClass('bonnolotto-number-selected').addClass('bonnolotto-number-was-selected');

    markLineComplete($('.bonnolotto-first-ticket').parents('.ticket-holder'));

}



function quickPickSecondTicket() {

    $('.bonnolotto-second-ticket').removeClass('bonnolotto-number-selected');

    var randomNumbers = $(".bonnolotto-second-ticket").get().sort(function () {

        return Math.round(Math.random()) - 0.1;

    }).slice(0, 6);

    $(randomNumbers).addClass('bonnolotto-number-selected').addClass('bonnolotto-number-was-selected');



    $('.bonnolotto-second-ticket-power').removeClass('bonnolotto-number-selected');

    var randomPower = $(".bonnolotto-second-ticket-power").get().sort(function () {

        return Math.round(Math.random()) - 0.1;

    }).slice(0, 1);

    $(randomPower).addClass('bonnolotto-number-selected').addClass('bonnolotto-number-was-selected');

    markLineComplete($('.bonnolotto-second-ticket').parents('.ticket-holder'));

}



function quickPickThirdTicket() {

    $('.bonnolotto-third-ticket').removeClass('bonnolotto-number-selected');

    var randomNumbers = $(".bonnolotto-third-ticket").get().sort(function () {

        return Math.round(Math.random()) - 0.1;

    }).slice(0, 6);

    $(randomNumbers).addClass('bonnolotto-number-selected').addClass('bonnolotto-number-was-selected');



    $('.bonnolotto-third-ticket-power').removeClass('bonnolotto-number-selected');

    var randomPower = $(".bonnolotto-third-ticket-power").get().sort(function () {

        return Math.round(Math.random()) - 0.1;

    }).slice(0, 1);

    $(randomPower).addClass('bonnolotto-number-selected').addClass('bonnolotto-number-was-selected');

    markLineComplete($('.bonnolotto-third-ticket').parents('.ticket-holder'));

}



function quickPickFourthTicket() {

    $('.bonnolotto-fourth-ticket').removeClass('bonnolotto-number-selected');

    var randomNumbers = $(".bonnolotto-fourth-ticket").get().sort(function () {

        return Math.round(Math.random()) - 0.1;

    }).slice(0, 6);

    $(randomNumbers).addClass('bonnolotto-number-selected').addClass('bonnolotto-number-was-selected');



    $('.bonnolotto-fourth-ticket-power').removeClass('bonnolotto-number-selected');

    var randomPower = $(".bonnolotto-fourth-ticket-power").get().sort(function () {

        return Math.round(Math.random()) - 0.1;

    }).slice(0, 1);

    $(randomPower).addClass('bonnolotto-number-selected').addClass('bonnolotto-number-was-selected');

    markLineComplete($('.bonnolotto-fourth-ticket').parents('.ticket-holder'));

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

    var regularNumbers = line.find('.bonnolotto-main-numbers.bonnolotto-number-selected').length;

    var extraNumbers = line.find('.bonnolotto-round-number.bonnolotto-number-selected').length;

    if(regularNumbers == 6){

        markLineComplete(line);

    } else {

        markLineUnComplete(line);

    }

}



$(".quick-pick-all-bonnolotto").click(function() {

    if($('.bonnolotto-fifth-ticket').is(':visible')){

        quickPickFifthTicket();

    }



    if( $('.bonnolotto-sixth-ticket').is(':visible')){

        quickPickSixthTicket();

    }



    if( $('.bonnolotto-seventh-ticket').is(':visible')) {

        quickPickSeventhTicket();

    }



    if( $('.bonnolotto-eight-ticket').is(':visible')) {

        quickPickEightTicket();

    }



    if( $('.bonnolotto-first-ticket').is(':visible')) {

        quickPickFirstTicket();

    }



    if( $('.bonnolotto-second-ticket').is(':visible')) {

        quickPickSecondTicket();

    }



    if( $('.bonnolotto-third-ticket').is(':visible')) {

        quickPickThirdTicket();

    }



    if( $('.bonnolotto-fourth-ticket').is(':visible')) {

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

    ticketHolder.find('.quick-pick-button').css('background', '#339e36 ');



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

    $('.bonnolotto-main-numbers').removeClass('bonnolotto-number-selected').removeClass('bonnolotto-number-was-selected');

    $('.round-number').removeClass('bonnolotto-number-selected').removeClass('bonnolotto-number-was-selected');

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

    /*alert('clicked');*/

    var lines = [];

    var draws = $('.sidebar-button.selected').parent().data('draws');



    $.each($('.line-complete'), function (key, item) {

        var ticketLine = $(item).parent();

        var selected = ticketLine.find('.bonnolotto-number-selected');



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

            lottoType: 11

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

