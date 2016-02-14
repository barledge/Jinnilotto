/**
 * Created by Petar on 12/8/2015.
 */



/*----------------------------------------------------*/
/*-----------------uk Functions----------------*/
/*----------------------------------------------------*/


jQuery(function($){
    $('.uk-numbers').click(function() {
        $(this).addClass('uk-number-was-selected');
    })
});


jQuery(function($){
    $(".uk-main-numbers").on('mousedown',  function(evt) {

        evt.preventDefault();
        evt.stopPropagation();


        // get the number of items already selected:
        var ctSelected = $(this).parent().find('.uk-number-selected').length;

        if (ctSelected >= 6) {
            if($(this).hasClass('uk-number-selected')){
                $(this).toggleClass('uk-number-selected');
                ctSelected--;
            } else {
                jQuery(function($){
                    $('.error-message-for-main-numbers').addClass('bounceInUp').css('display', 'block').delay(3000).fadeOut('slow');
                });
                return;
            }
        } else {
            $(this).toggleClass('uk-number-selected');
            if($(this).hasClass('uk-number-selected')){
                ctSelected++;
            } else {
                ctSelected--;
            }
        }


        if (ctSelected >= 0) {
            $(this).parents('.ticket-holder').find('.quick-pick-button').css('background', '#ce93d8');
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



$(".quick-pick-button-1-uk").on("click", function first() {
    quickPickFirstTicket();
});


$(".quick-pick-button-2-uk").on("click", function() {
    quickPickSecondTicket();
});

$(".quick-pick-button-3-uk").on("click", function() {
    quickPickThirdTicket();
});


$(".quick-pick-button-4-uk").on("click", function() {
    quickPickFourthTicket();
});

$(".quick-pick-button-5-uk").on("click", function() {
    quickPickFifthTicket();
});

$(".quick-pick-button-6-uk").on("click", function() {
    quickPickSixthTicket();
});

$(".quick-pick-button-7-uk").on("click", function() {
    quickPickSeventhTicket();
});

$(".quick-pick-button-8-uk").on("click", function() {
    quickPickEightTicket();
});

$('.thrash-button-1').click(function() {
    $('.uk-first-ticket').removeClass('uk-number-selected').removeClass('uk-number-was-selected');
    $('.uk-first-ticket-power').removeClass('uk-number-selected').removeClass('uk-number-was-selected');
    trashLine.call(this);
});

$('.thrash-button-2').click(function() {
    $('.uk-second-ticket').removeClass('uk-number-selected').removeClass('uk-number-was-selected');
    $('.uk-second-ticket-power').removeClass('uk-number-selected').removeClass('uk-number-was-selected');
    trashLine.call(this);
});

$('.thrash-button-3').click(function() {
    $('.uk-third-ticket').removeClass('uk-number-selected').removeClass('uk-number-was-selected');
    $('.uk-third-ticket-power').removeClass('uk-number-selected').removeClass('uk-number-was-selected');
    trashLine.call(this);
});

$('.thrash-button-4').click(function() {
    $('.uk-fourth-ticket').removeClass('uk-number-selected').removeClass('uk-number-was-selected');
    $('.uk-fourth-ticket-power').removeClass('uk-number-selected').removeClass('uk-number-was-selected');
    trashLine.call(this);
});

$('.thrash-button-5').click(function() {
    $('.uk-fifth-ticket').removeClass('uk-number-selected').removeClass('uk-number-was-selected');
    $('.uk-fifth-ticket-power').removeClass('uk-number-selected').removeClass('uk-number-was-selected');
    trashLine.call(this);
});

$('.thrash-button-6').click(function() {
    $('.uk-sixth-ticket').removeClass('uk-number-selected').removeClass('uk-number-was-selected');
    $('.uk-sixth-ticket-power').removeClass('uk-number-selected').removeClass('uk-number-was-selected');
    trashLine.call(this);
});

$('.thrash-button-7').click(function() {
    $('.uk-seventh-ticket').removeClass('uk-number-selected').removeClass('uk-number-was-selected');
    $('.uk-seventh-ticket-power').removeClass('uk-number-selected').removeClass('uk-number-was-selected');
    trashLine.call(this);
});

$('.thrash-button-8').click(function() {
    $('.uk-eight-ticket').removeClass('uk-number-selected').removeClass('uk-number-was-selected');
    $('.uk-eight-ticket-power').removeClass('uk-number-selected').removeClass('uk-number-was-selected');
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
    $('.uk-fifth-ticket').removeClass('uk-number-selected');
    var randomNumbers = $(".uk-fifth-ticket").get().sort(function () {
        return Math.round(Math.random()) - 0.1;
    }).slice(0, 6);
    $(randomNumbers).addClass('uk-number-selected').addClass('uk-number-was-selected');

    $('.uk-fifth-ticket-power').removeClass('uk-number-selected');
    var randomPower = $(".uk-fifth-ticket-power").get().sort(function () {
        return Math.round(Math.random()) - 0.1;
    }).slice(0, 1);
    $(randomPower).addClass('uk-number-selected').addClass('uk-number-was-selected');
    markLineComplete($('.uk-fifth-ticket').parents('.ticket-holder'));
}

function quickPickSixthTicket() {
    $('.uk-sixth-ticket').removeClass('uk-number-selected');
    var randomNumbers = $(".uk-sixth-ticket").get().sort(function () {
        return Math.round(Math.random()) - 0.1;
    }).slice(0, 6);
    $(randomNumbers).addClass('uk-number-selected').addClass('uk-number-was-selected');

    $('.uk-sixth-ticket-power').removeClass('uk-number-selected');
    var randomPower = $(".uk-sixth-ticket-power").get().sort(function () {
        return Math.round(Math.random()) - 0.1;
    }).slice(0, 1);
    $(randomPower).addClass('uk-number-selected').addClass('uk-number-was-selected');
    markLineComplete($('.uk-sixth-ticket').parents('.ticket-holder'));
}

function quickPickSeventhTicket() {
    $('.uk-seventh-ticket').removeClass('uk-number-selected');
    var randomNumbers = $(".uk-seventh-ticket").get().sort(function () {
        return Math.round(Math.random()) - 0.1;
    }).slice(0, 6);
    $(randomNumbers).addClass('uk-number-selected').addClass('uk-number-was-selected');

    $('.uk-seventh-ticket-power').removeClass('uk-number-selected');
    var randomPower = $(".uk-seventh-ticket-power").get().sort(function () {
        return Math.round(Math.random()) - 0.1;
    }).slice(0, 1);
    $(randomPower).addClass('uk-number-selected').addClass('uk-number-was-selected');
    markLineComplete($('.uk-seventh-ticket').parents('.ticket-holder'));
}

function quickPickEightTicket() {
    $('.uk-eight-ticket').removeClass('uk-number-selected');
    var randomNumbers = $(".uk-eight-ticket").get().sort(function () {
        return Math.round(Math.random()) - 0.1;
    }).slice(0, 6);
    $(randomNumbers).addClass('uk-number-selected').addClass('uk-number-was-selected');

    $('.uk-eight-ticket-power').removeClass('uk-number-selected');
    var randomPower = $(".uk-eight-ticket-power").get().sort(function () {
        return Math.round(Math.random()) - 0.1;
    }).slice(0, 1);
    $(randomPower).addClass('uk-number-selected').addClass('uk-number-was-selected');
    markLineComplete($('.uk-eight-ticket').parents('.ticket-holder'));
}

function quickPickFirstTicket() {
    $('.uk-first-ticket').removeClass('uk-number-selected');
    var randomNumbers = $(".uk-first-ticket").get().sort(function () {
        return Math.round(Math.random()) - 0.1;
    }).slice(0, 6);
    $(randomNumbers).addClass('uk-number-selected').addClass('uk-number-was-selected');

    $('.uk-first-ticket-power').removeClass('uk-number-selected');
    var randomPower = $(".uk-first-ticket-power").get().sort(function () {
        return Math.round(Math.random()) - 0.1;
    }).slice(0, 1);
    $(randomPower).addClass('uk-number-selected').addClass('uk-number-was-selected');
    markLineComplete($('.uk-first-ticket').parents('.ticket-holder'));
}

function quickPickSecondTicket() {
    $('.uk-second-ticket').removeClass('uk-number-selected');
    var randomNumbers = $(".uk-second-ticket").get().sort(function () {
        return Math.round(Math.random()) - 0.1;
    }).slice(0, 6);
    $(randomNumbers).addClass('uk-number-selected').addClass('uk-number-was-selected');

    $('.uk-second-ticket-power').removeClass('uk-number-selected');
    var randomPower = $(".uk-second-ticket-power").get().sort(function () {
        return Math.round(Math.random()) - 0.1;
    }).slice(0, 1);
    $(randomPower).addClass('uk-number-selected').addClass('uk-number-was-selected');
    markLineComplete($('.uk-second-ticket').parents('.ticket-holder'));
}

function quickPickThirdTicket() {
    $('.uk-third-ticket').removeClass('uk-number-selected');
    var randomNumbers = $(".uk-third-ticket").get().sort(function () {
        return Math.round(Math.random()) - 0.1;
    }).slice(0, 6);
    $(randomNumbers).addClass('uk-number-selected').addClass('uk-number-was-selected');

    $('.uk-third-ticket-power').removeClass('uk-number-selected');
    var randomPower = $(".uk-third-ticket-power").get().sort(function () {
        return Math.round(Math.random()) - 0.1;
    }).slice(0, 1);
    $(randomPower).addClass('uk-number-selected').addClass('uk-number-was-selected');
    markLineComplete($('.uk-third-ticket').parents('.ticket-holder'));
}

function quickPickFourthTicket() {
    $('.uk-fourth-ticket').removeClass('uk-number-selected');
    var randomNumbers = $(".uk-fourth-ticket").get().sort(function () {
        return Math.round(Math.random()) - 0.1;
    }).slice(0, 6);
    $(randomNumbers).addClass('uk-number-selected').addClass('uk-number-was-selected');

    $('.uk-fourth-ticket-power').removeClass('uk-number-selected');
    var randomPower = $(".uk-fourth-ticket-power").get().sort(function () {
        return Math.round(Math.random()) - 0.1;
    }).slice(0, 1);
    $(randomPower).addClass('uk-number-selected').addClass('uk-number-was-selected');
    markLineComplete($('.uk-fourth-ticket').parents('.ticket-holder'));
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
    var regularNumbers = line.find('.uk-main-numbers.uk-number-selected').length;
    var extraNumbers = line.find('.uk-round-number.uk-number-selected').length;
    if(regularNumbers == 6){
        markLineComplete(line);
    } else {
        markLineUnComplete(line);
    }
}

$(".quick-pick-all-uk").click(function() {
    if($('.uk-fifth-ticket').is(':visible')){
        quickPickFifthTicket();
    }

    if( $('.uk-sixth-ticket').is(':visible')){
        quickPickSixthTicket();
    }

    if( $('.uk-seventh-ticket').is(':visible')) {
        quickPickSeventhTicket();
    }

    if( $('.uk-eight-ticket').is(':visible')) {
        quickPickEightTicket();
    }

    if( $('.uk-first-ticket').is(':visible')) {
        quickPickFirstTicket();
    }

    if( $('.uk-second-ticket').is(':visible')) {
        quickPickSecondTicket();
    }

    if( $('.uk-third-ticket').is(':visible')) {
        quickPickThirdTicket();
    }

    if( $('.uk-fourth-ticket').is(':visible')) {
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
    ticketHolder.find('.quick-pick-button').css('background', '#ce93d8 ');

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
    $('.uk-main-numbers').removeClass('uk-number-selected').removeClass('uk-number-was-selected');
    $('.round-number').removeClass('uk-number-selected').removeClass('uk-number-was-selected');
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
        var selected = ticketLine.find('.uk-number-selected');

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
            lottoType: 12
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

