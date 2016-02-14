/**
 * Created by Petar on 12/8/2015.
 */



/*----------------------------------------------------*/
/*-----------------superena Functions----------------*/
/*----------------------------------------------------*/


jQuery(function($){
    $('.superena-numbers').click(function() {
        $(this).addClass('superena-number-was-selected');
    })
});


jQuery(function($){
    $(".superena-main-numbers").on('mousedown',  function(evt) {

        evt.preventDefault();
        evt.stopPropagation();


        // get the number of items already selected:
        var ctSelected = $(this).parent().find('.superena-number-selected').length;

        if (ctSelected >= 6) {
            if($(this).hasClass('superena-number-selected')){
                $(this).toggleClass('superena-number-selected');
                ctSelected--;
            } else {
                jQuery(function($){
                    $('.error-message-for-main-numbers').addClass('bounceInUp').css('display', 'block').delay(3000).fadeOut('slow');
                });
                return;
            }
        } else {
            $(this).toggleClass('superena-number-selected');
            if($(this).hasClass('superena-number-selected')){
                ctSelected++;
            } else {
                ctSelected--;
            }
        }


        if (ctSelected >= 0) {
            $(this).parents('.ticket-holder').find('.quick-pick-button').css('background', '#FF8E00');
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



$(".quick-pick-button-1-superena").on("click", function first() {
    quickPickFirstTicket();
});


$(".quick-pick-button-2-superena").on("click", function() {
    quickPickSecondTicket();
});

$(".quick-pick-button-3-superena").on("click", function() {
    quickPickThirdTicket();
});


$(".quick-pick-button-4-superena").on("click", function() {
    quickPickFourthTicket();
});

$(".quick-pick-button-5-superena").on("click", function() {
    quickPickFifthTicket();
});

$(".quick-pick-button-6-superena").on("click", function() {
    quickPickSixthTicket();
});

$(".quick-pick-button-7-superena").on("click", function() {
    quickPickSeventhTicket();
});

$(".quick-pick-button-8-superena").on("click", function() {
    quickPickEightTicket();
});

$('.thrash-button-1').click(function() {
    $('.superena-first-ticket').removeClass('superena-number-selected').removeClass('superena-number-was-selected');
    $('.superena-first-ticket-power').removeClass('superena-number-selected').removeClass('superena-number-was-selected');
    trashLine.call(this);
});

$('.thrash-button-2').click(function() {
    $('.superena-second-ticket').removeClass('superena-number-selected').removeClass('superena-number-was-selected');
    $('.superena-second-ticket-power').removeClass('superena-number-selected').removeClass('superena-number-was-selected');
    trashLine.call(this);
});

$('.thrash-button-3').click(function() {
    $('.superena-third-ticket').removeClass('superena-number-selected').removeClass('superena-number-was-selected');
    $('.superena-third-ticket-power').removeClass('superena-number-selected').removeClass('superena-number-was-selected');
    trashLine.call(this);
});

$('.thrash-button-4').click(function() {
    $('.superena-fourth-ticket').removeClass('superena-number-selected').removeClass('superena-number-was-selected');
    $('.superena-fourth-ticket-power').removeClass('superena-number-selected').removeClass('superena-number-was-selected');
    trashLine.call(this);
});

$('.thrash-button-5').click(function() {
    $('.superena-fifth-ticket').removeClass('superena-number-selected').removeClass('superena-number-was-selected');
    $('.superena-fifth-ticket-power').removeClass('superena-number-selected').removeClass('superena-number-was-selected');
    trashLine.call(this);
});

$('.thrash-button-6').click(function() {
    $('.superena-sixth-ticket').removeClass('superena-number-selected').removeClass('superena-number-was-selected');
    $('.superena-sixth-ticket-power').removeClass('superena-number-selected').removeClass('superena-number-was-selected');
    trashLine.call(this);
});

$('.thrash-button-7').click(function() {
    $('.superena-seventh-ticket').removeClass('superena-number-selected').removeClass('superena-number-was-selected');
    $('.superena-seventh-ticket-power').removeClass('superena-number-selected').removeClass('superena-number-was-selected');
    trashLine.call(this);
});

$('.thrash-button-8').click(function() {
    $('.superena-eight-ticket').removeClass('superena-number-selected').removeClass('superena-number-was-selected');
    $('.superena-eight-ticket-power').removeClass('superena-number-selected').removeClass('superena-number-was-selected');
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
    $('.superena-fifth-ticket').removeClass('superena-number-selected');
    var randomNumbers = $(".superena-fifth-ticket").get().sort(function () {
        return Math.round(Math.random()) - 0.1;
    }).slice(0, 6);
    $(randomNumbers).addClass('superena-number-selected').addClass('superena-number-was-selected');

    $('.superena-fifth-ticket-power').removeClass('superena-number-selected');
    var randomPower = $(".superena-fifth-ticket-power").get().sort(function () {
        return Math.round(Math.random()) - 0.1;
    }).slice(0, 1);
    $(randomPower).addClass('superena-number-selected').addClass('superena-number-was-selected');
    markLineComplete($('.superena-fifth-ticket').parents('.ticket-holder'));
}

function quickPickSixthTicket() {
    $('.superena-sixth-ticket').removeClass('superena-number-selected');
    var randomNumbers = $(".superena-sixth-ticket").get().sort(function () {
        return Math.round(Math.random()) - 0.1;
    }).slice(0, 6);
    $(randomNumbers).addClass('superena-number-selected').addClass('superena-number-was-selected');

    $('.superena-sixth-ticket-power').removeClass('superena-number-selected');
    var randomPower = $(".superena-sixth-ticket-power").get().sort(function () {
        return Math.round(Math.random()) - 0.1;
    }).slice(0, 1);
    $(randomPower).addClass('superena-number-selected').addClass('superena-number-was-selected');
    markLineComplete($('.superena-sixth-ticket').parents('.ticket-holder'));
}

function quickPickSeventhTicket() {
    $('.superena-seventh-ticket').removeClass('superena-number-selected');
    var randomNumbers = $(".superena-seventh-ticket").get().sort(function () {
        return Math.round(Math.random()) - 0.1;
    }).slice(0, 6);
    $(randomNumbers).addClass('superena-number-selected').addClass('superena-number-was-selected');

    $('.superena-seventh-ticket-power').removeClass('superena-number-selected');
    var randomPower = $(".superena-seventh-ticket-power").get().sort(function () {
        return Math.round(Math.random()) - 0.1;
    }).slice(0, 1);
    $(randomPower).addClass('superena-number-selected').addClass('superena-number-was-selected');
    markLineComplete($('.superena-seventh-ticket').parents('.ticket-holder'));
}

function quickPickEightTicket() {
    $('.superena-eight-ticket').removeClass('superena-number-selected');
    var randomNumbers = $(".superena-eight-ticket").get().sort(function () {
        return Math.round(Math.random()) - 0.1;
    }).slice(0, 6);
    $(randomNumbers).addClass('superena-number-selected').addClass('superena-number-was-selected');

    $('.superena-eight-ticket-power').removeClass('superena-number-selected');
    var randomPower = $(".superena-eight-ticket-power").get().sort(function () {
        return Math.round(Math.random()) - 0.1;
    }).slice(0, 1);
    $(randomPower).addClass('superena-number-selected').addClass('superena-number-was-selected');
    markLineComplete($('.superena-eight-ticket').parents('.ticket-holder'));
}

function quickPickFirstTicket() {
    $('.superena-first-ticket').removeClass('superena-number-selected');
    var randomNumbers = $(".superena-first-ticket").get().sort(function () {
        return Math.round(Math.random()) - 0.1;
    }).slice(0, 6);
    $(randomNumbers).addClass('superena-number-selected').addClass('superena-number-was-selected');

    $('.superena-first-ticket-power').removeClass('superena-number-selected');
    var randomPower = $(".superena-first-ticket-power").get().sort(function () {
        return Math.round(Math.random()) - 0.1;
    }).slice(0, 1);
    $(randomPower).addClass('superena-number-selected').addClass('superena-number-was-selected');
    markLineComplete($('.superena-first-ticket').parents('.ticket-holder'));
}

function quickPickSecondTicket() {
    $('.superena-second-ticket').removeClass('superena-number-selected');
    var randomNumbers = $(".superena-second-ticket").get().sort(function () {
        return Math.round(Math.random()) - 0.1;
    }).slice(0, 6);
    $(randomNumbers).addClass('superena-number-selected').addClass('superena-number-was-selected');

    $('.superena-second-ticket-power').removeClass('superena-number-selected');
    var randomPower = $(".superena-second-ticket-power").get().sort(function () {
        return Math.round(Math.random()) - 0.1;
    }).slice(0, 1);
    $(randomPower).addClass('superena-number-selected').addClass('superena-number-was-selected');
    markLineComplete($('.superena-second-ticket').parents('.ticket-holder'));
}

function quickPickThirdTicket() {
    $('.superena-third-ticket').removeClass('superena-number-selected');
    var randomNumbers = $(".superena-third-ticket").get().sort(function () {
        return Math.round(Math.random()) - 0.1;
    }).slice(0, 6);
    $(randomNumbers).addClass('superena-number-selected').addClass('superena-number-was-selected');

    $('.superena-third-ticket-power').removeClass('superena-number-selected');
    var randomPower = $(".superena-third-ticket-power").get().sort(function () {
        return Math.round(Math.random()) - 0.1;
    }).slice(0, 1);
    $(randomPower).addClass('superena-number-selected').addClass('superena-number-was-selected');
    markLineComplete($('.superena-third-ticket').parents('.ticket-holder'));
}

function quickPickFourthTicket() {
    $('.superena-fourth-ticket').removeClass('superena-number-selected');
    var randomNumbers = $(".superena-fourth-ticket").get().sort(function () {
        return Math.round(Math.random()) - 0.1;
    }).slice(0, 6);
    $(randomNumbers).addClass('superena-number-selected').addClass('superena-number-was-selected');

    $('.superena-fourth-ticket-power').removeClass('superena-number-selected');
    var randomPower = $(".superena-fourth-ticket-power").get().sort(function () {
        return Math.round(Math.random()) - 0.1;
    }).slice(0, 1);
    $(randomPower).addClass('superena-number-selected').addClass('superena-number-was-selected');
    markLineComplete($('.superena-fourth-ticket').parents('.ticket-holder'));
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
    var regularNumbers = line.find('.superena-main-numbers.superena-number-selected').length;
    var extraNumbers = line.find('.superena-round-number.superena-number-selected').length;
    if(regularNumbers == 6){
        markLineComplete(line);
    } else {
        markLineUnComplete(line);
    }
}

$(".quick-pick-all-superena").click(function() {
    if($('.superena-fifth-ticket').is(':visible')){
        quickPickFifthTicket();
    }

    if( $('.superena-sixth-ticket').is(':visible')){
        quickPickSixthTicket();
    }

    if( $('.superena-seventh-ticket').is(':visible')) {
        quickPickSeventhTicket();
    }

    if( $('.superena-eight-ticket').is(':visible')) {
        quickPickEightTicket();
    }

    if( $('.superena-first-ticket').is(':visible')) {
        quickPickFirstTicket();
    }

    if( $('.superena-second-ticket').is(':visible')) {
        quickPickSecondTicket();
    }

    if( $('.superena-third-ticket').is(':visible')) {
        quickPickThirdTicket();
    }

    if( $('.superena-fourth-ticket').is(':visible')) {
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
    ticketHolder.find('.quick-pick-button').css('background', '#FF8E00 ');

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
    $('.superena-main-numbers').removeClass('superena-number-selected').removeClass('superena-number-was-selected');
    $('.round-number').removeClass('superena-number-selected').removeClass('superena-number-was-selected');
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

$(document).ready(function() {
    $('.sidebar-arrow').on( "click", function() {
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
        var selected = ticketLine.find('.superena-number-selected');

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
            lottoType: 8
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