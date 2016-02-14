/**

 * Created by Petar on 12/8/2015.

 */







/*----------------------------------------------------*/

/*-----------------elgordo Functions----------------*/

/*----------------------------------------------------*/





jQuery(function($){

    $('.elgordo-numbers').click(function() {

        $(this).addClass('elgordo-number-was-selected');

    })

});





jQuery(function($){

    $(".elgordo-main-numbers").on('mousedown',  function(evt) {



        evt.preventDefault();

        evt.stopPropagation();





        // get the number of items already selected:

        var ctSelected = $(this).parent().find('.elgordo-number-selected').length;



        if (ctSelected >= 5) {

            if($(this).hasClass('elgordo-number-selected')){

                $(this).toggleClass('elgordo-number-selected');

                ctSelected--;

            } else {

                jQuery(function($){

                    $('.error-message-for-main-numbers').addClass('bounceInUp').css('display', 'block').delay(3000).fadeOut('slow');

                });

                return;

            }

        } else {

            $(this).toggleClass('elgordo-number-selected');

            if($(this).hasClass('elgordo-number-selected')){

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

    $(".elgordo-super").on('mousedown', function(evt) {

        evt.preventDefault();

        evt.stopPropagation();



        // get the number of items already selected:

        var ctSelected = $(this).siblings('.elgordo-number-selected').length;



        if (ctSelected >= 1) {

            jQuery(function($){

                $('.error-message-for-power-numbers').addClass('bounceInUp').css('display', 'block').delay(3000).fadeOut('slow');

            });

        } else {

            $(this).toggleClass('elgordo-number-selected');

            if($(this).hasClass('elgordo-number-selected')){

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





$(".quick-pick-button-1-elgordo").on("click", function first() {

    quickPickFirstTicket();

});





$(".quick-pick-button-2-elgordo").on("click", function() {

    quickPickSecondTicket();

});



$(".quick-pick-button-3-elgordo").on("click", function() {

    quickPickThirdTicket();

});





$(".quick-pick-button-4-elgordo").on("click", function() {

    quickPickFourthTicket();

});



$(".quick-pick-button-5-elgordo").on("click", function() {

    quickPickFifthTicket();

});



$(".quick-pick-button-6-elgordo").on("click", function() {

    quickPickSixthTicket();

});



$(".quick-pick-button-7-elgordo").on("click", function() {

    quickPickSeventhTicket();

});



$(".quick-pick-button-8-elgordo").on("click", function() {

    quickPickEightTicket();

});



$('.thrash-button-1').click(function() {

    $('.elgordo-first-ticket').removeClass('elgordo-number-selected').removeClass('elgordo-number-was-selected');

    $('.elgordo-first-ticket-power').removeClass('elgordo-number-selected').removeClass('elgordo-number-was-selected');

    trashLine.call(this);

});



$('.thrash-button-2').click(function() {

    $('.elgordo-second-ticket').removeClass('elgordo-number-selected').removeClass('elgordo-number-was-selected');

    $('.elgordo-second-ticket-power').removeClass('elgordo-number-selected').removeClass('elgordo-number-was-selected');

    trashLine.call(this);

});



$('.thrash-button-3').click(function() {

    $('.elgordo-third-ticket').removeClass('elgordo-number-selected').removeClass('elgordo-number-was-selected');

    $('.elgordo-third-ticket-power').removeClass('elgordo-number-selected').removeClass('elgordo-number-was-selected');

    trashLine.call(this);

});



$('.thrash-button-4').click(function() {

    $('.elgordo-fourth-ticket').removeClass('elgordo-number-selected').removeClass('elgordo-number-was-selected');

    $('.elgordo-fourth-ticket-power').removeClass('elgordo-number-selected').removeClass('elgordo-number-was-selected');

    trashLine.call(this);

});



$('.thrash-button-5').click(function() {

    $('.elgordo-fifth-ticket').removeClass('elgordo-number-selected').removeClass('elgordo-number-was-selected');

    $('.elgordo-fifth-ticket-power').removeClass('elgordo-number-selected').removeClass('elgordo-number-was-selected');

    trashLine.call(this);

});



$('.thrash-button-6').click(function() {

    $('.elgordo-sixth-ticket').removeClass('elgordo-number-selected').removeClass('elgordo-number-was-selected');

    $('.elgordo-sixth-ticket-power').removeClass('elgordo-number-selected').removeClass('elgordo-number-was-selected');

    trashLine.call(this);

});



$('.thrash-button-7').click(function() {

    $('.elgordo-seventh-ticket').removeClass('elgordo-number-selected').removeClass('elgordo-number-was-selected');

    $('.elgordo-seventh-ticket-power').removeClass('elgordo-number-selected').removeClass('elgordo-number-was-selected');

    trashLine.call(this);

});



$('.thrash-button-8').click(function() {

    $('.elgordo-eight-ticket').removeClass('elgordo-number-selected').removeClass('elgordo-number-was-selected');

    $('.elgordo-eight-ticket-power').removeClass('elgordo-number-selected').removeClass('elgordo-number-was-selected');

    trashLine.call(this);

});





function trashLine() {

    $(this).parents('.ticket-holder').find('.quick-pick-button').css('background', '#266CA8 ');

    $(this).parents('.ticket-holder').removeClass('ticket-holder-shadow');

    $(this).parents('.ticket-holder').find('.main-numbers p').css('display', 'block');

    $(this).parents('.ticket-holder').css('background', '#ffffff');

    $(this).parents('.ticket-holder').find('.ticket-select-info').html('Select 5 Numbers').css('color', '#333333');

    $(this).parents('.ticket-holder').find('.ticket-select-info-bottom p').html('Select 1 Number').css('color', '#333333');



    $(this).parents('.ticket-holder').find('.ticket-select-info').removeClass('line-complete');



    updatePrice();

    updateDiscountPercentage();

    updateDiscountTotal();

    updateLines();

    updateDraws();

}



function quickPickFifthTicket() {

    $('.elgordo-fifth-ticket').removeClass('elgordo-number-selected');

    var randomNumbers = $(".elgordo-fifth-ticket").get().sort(function () {

        return Math.round(Math.random()) - 0.1;

    }).slice(0, 5);

    $(randomNumbers).addClass('elgordo-number-selected').addClass('elgordo-number-was-selected');



    $('.elgordo-fifth-ticket-power').removeClass('elgordo-number-selected');

    var randomPower = $(".elgordo-fifth-ticket-power").get().sort(function () {

        return Math.round(Math.random()) - 0.1;

    }).slice(0, 1);

    $(randomPower).addClass('elgordo-number-selected').addClass('elgordo-number-was-selected');

    markLineComplete($('.elgordo-fifth-ticket').parents('.ticket-holder'));

}



function quickPickSixthTicket() {

    $('.elgordo-sixth-ticket').removeClass('elgordo-number-selected');

    var randomNumbers = $(".elgordo-sixth-ticket").get().sort(function () {

        return Math.round(Math.random()) - 0.1;

    }).slice(0, 5);

    $(randomNumbers).addClass('elgordo-number-selected').addClass('elgordo-number-was-selected');



    $('.elgordo-sixth-ticket-power').removeClass('elgordo-number-selected');

    var randomPower = $(".elgordo-sixth-ticket-power").get().sort(function () {

        return Math.round(Math.random()) - 0.1;

    }).slice(0, 1);

    $(randomPower).addClass('elgordo-number-selected').addClass('elgordo-number-was-selected');

    markLineComplete($('.elgordo-sixth-ticket').parents('.ticket-holder'));

}



function quickPickSeventhTicket() {

    $('.elgordo-seventh-ticket').removeClass('elgordo-number-selected');

    var randomNumbers = $(".elgordo-seventh-ticket").get().sort(function () {

        return Math.round(Math.random()) - 0.1;

    }).slice(0, 5);

    $(randomNumbers).addClass('elgordo-number-selected').addClass('elgordo-number-was-selected');



    $('.elgordo-seventh-ticket-power').removeClass('elgordo-number-selected');

    var randomPower = $(".elgordo-seventh-ticket-power").get().sort(function () {

        return Math.round(Math.random()) - 0.1;

    }).slice(0, 1);

    $(randomPower).addClass('elgordo-number-selected').addClass('elgordo-number-was-selected');

    markLineComplete($('.elgordo-seventh-ticket').parents('.ticket-holder'));

}



function quickPickEightTicket() {

    $('.elgordo-eight-ticket').removeClass('elgordo-number-selected');

    var randomNumbers = $(".elgordo-eight-ticket").get().sort(function () {

        return Math.round(Math.random()) - 0.1;

    }).slice(0, 5);

    $(randomNumbers).addClass('elgordo-number-selected').addClass('elgordo-number-was-selected');



    $('.elgordo-eight-ticket-power').removeClass('elgordo-number-selected');

    var randomPower = $(".elgordo-eight-ticket-power").get().sort(function () {

        return Math.round(Math.random()) - 0.1;

    }).slice(0, 1);

    $(randomPower).addClass('elgordo-number-selected').addClass('elgordo-number-was-selected');

    markLineComplete($('.elgordo-eight-ticket').parents('.ticket-holder'));

}



function quickPickFirstTicket() {

    $('.elgordo-first-ticket').removeClass('elgordo-number-selected');

    var randomNumbers = $(".elgordo-first-ticket").get().sort(function () {

        return Math.round(Math.random()) - 0.1;

    }).slice(0, 5);

    $(randomNumbers).addClass('elgordo-number-selected').addClass('elgordo-number-was-selected');



    $('.elgordo-first-ticket-power').removeClass('elgordo-number-selected');

    var randomPower = $(".elgordo-first-ticket-power").get().sort(function () {

        return Math.round(Math.random()) - 0.1;

    }).slice(0, 1);

    $(randomPower).addClass('elgordo-number-selected').addClass('elgordo-number-was-selected');

    markLineComplete($('.elgordo-first-ticket').parents('.ticket-holder'));

}



function quickPickSecondTicket() {

    $('.elgordo-second-ticket').removeClass('elgordo-number-selected');

    var randomNumbers = $(".elgordo-second-ticket").get().sort(function () {

        return Math.round(Math.random()) - 0.1;

    }).slice(0, 5);

    $(randomNumbers).addClass('elgordo-number-selected').addClass('elgordo-number-was-selected');



    $('.elgordo-second-ticket-power').removeClass('elgordo-number-selected');

    var randomPower = $(".elgordo-second-ticket-power").get().sort(function () {

        return Math.round(Math.random()) - 0.1;

    }).slice(0, 1);

    $(randomPower).addClass('elgordo-number-selected').addClass('elgordo-number-was-selected');

    markLineComplete($('.elgordo-second-ticket').parents('.ticket-holder'));

}



function quickPickThirdTicket() {

    $('.elgordo-third-ticket').removeClass('elgordo-number-selected');

    var randomNumbers = $(".elgordo-third-ticket").get().sort(function () {

        return Math.round(Math.random()) - 0.1;

    }).slice(0, 5);

    $(randomNumbers).addClass('elgordo-number-selected').addClass('elgordo-number-was-selected');



    $('.elgordo-third-ticket-power').removeClass('elgordo-number-selected');

    var randomPower = $(".elgordo-third-ticket-power").get().sort(function () {

        return Math.round(Math.random()) - 0.1;

    }).slice(0, 1);

    $(randomPower).addClass('elgordo-number-selected').addClass('elgordo-number-was-selected');

    markLineComplete($('.elgordo-third-ticket').parents('.ticket-holder'));

}



function quickPickFourthTicket() {

    $('.elgordo-fourth-ticket').removeClass('elgordo-number-selected');

    var randomNumbers = $(".elgordo-fourth-ticket").get().sort(function () {

        return Math.round(Math.random()) - 0.1;

    }).slice(0, 5);

    $(randomNumbers).addClass('elgordo-number-selected').addClass('elgordo-number-was-selected');



    $('.elgordo-fourth-ticket-power').removeClass('elgordo-number-selected');

    var randomPower = $(".elgordo-fourth-ticket-power").get().sort(function () {

        return Math.round(Math.random()) - 0.1;

    }).slice(0, 1);

    $(randomPower).addClass('elgordo-number-selected').addClass('elgordo-number-was-selected');

    markLineComplete($('.elgordo-fourth-ticket').parents('.ticket-holder'));

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

    var regularNumbers = line.find('.elgordo-main-numbers.elgordo-number-selected').length;

    var extraNumbers = line.find('.elgordo-round-number.elgordo-number-selected').length;

    if(regularNumbers == 5 && extraNumbers == 1){

        markLineComplete(line);

    } else {

        markLineUnComplete(line);

    }

}



$(".quick-pick-all-elgordo").click(function() {

    if($('.elgordo-fifth-ticket').is(':visible')){

        quickPickFifthTicket();

    }



    if( $('.elgordo-sixth-ticket').is(':visible')){

        quickPickSixthTicket();

    }



    if( $('.elgordo-seventh-ticket').is(':visible')) {

        quickPickSeventhTicket();

    }



    if( $('.elgordo-eight-ticket').is(':visible')) {

        quickPickEightTicket();

    }



    if( $('.elgordo-first-ticket').is(':visible')) {

        quickPickFirstTicket();

    }



    if( $('.elgordo-second-ticket').is(':visible')) {

        quickPickSecondTicket();

    }



    if( $('.elgordo-third-ticket').is(':visible')) {

        quickPickThirdTicket();

    }



    if( $('.elgordo-fourth-ticket').is(':visible')) {

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

    $('.elgordo-main-numbers').removeClass('elgordo-number-selected').removeClass('elgordo-number-was-selected');

    $('.round-number').removeClass('elgordo-number-selected').removeClass('elgordo-number-was-selected');

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

        var selected = ticketLine.find('.elgordo-number-selected');



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

            lottoType: 10

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

