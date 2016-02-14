/**
 * Created by Petar on 12/8/2015.
 */



/*----------------------------------------------------*/
/*-----------------laprimitiva Functions----------------*/
/*----------------------------------------------------*/


jQuery(function($){
    $('.laprimitiva-numbers').click(function() {
        $(this).addClass('laprimitiva-number-was-selected');
    })
});


jQuery(function($){
    $(".laprimitiva-main-numbers").on('mousedown',  function(evt) {

        evt.preventDefault();
        evt.stopPropagation();


        // get the number of items already selected:
        var ctSelected = $(this).parent().find('.laprimitiva-number-selected').length;

        if (ctSelected >= 6) {
            if($(this).hasClass('laprimitiva-number-selected')){
                $(this).toggleClass('laprimitiva-number-selected');
                ctSelected--;
            } else {
                jQuery(function($){
                    $('.error-message-for-main-numbers').addClass('bounceInUp').css('display', 'block').delay(3000).fadeOut('slow');
                });
                return;
            }
        } else {
            $(this).toggleClass('laprimitiva-number-selected');
            if($(this).hasClass('laprimitiva-number-selected')){
                ctSelected++;
            } else {
                ctSelected--;
            }
        }


        if (ctSelected >= 0) {
            $(this).parents('.ticket-holder').find('.quick-pick-button').css('background', '#58b669');
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



$(".quick-pick-button-1-laprimitiva").on("click", function first() {
    quickPickFirstTicket();
});


$(".quick-pick-button-2-laprimitiva").on("click", function() {
    quickPickSecondTicket();
});

$(".quick-pick-button-3-laprimitiva").on("click", function() {
    quickPickThirdTicket();
});


$(".quick-pick-button-4-laprimitiva").on("click", function() {
    quickPickFourthTicket();
});

$(".quick-pick-button-5-laprimitiva").on("click", function() {
    quickPickFifthTicket();
});

$(".quick-pick-button-6-laprimitiva").on("click", function() {
    quickPickSixthTicket();
});

$(".quick-pick-button-7-laprimitiva").on("click", function() {
    quickPickSeventhTicket();
});

$(".quick-pick-button-8-laprimitiva").on("click", function() {
    quickPickEightTicket();
});

$('.thrash-button-1').click(function() {
    $('.laprimitiva-first-ticket').removeClass('laprimitiva-number-selected').removeClass('laprimitiva-number-was-selected');
    $('.laprimitiva-first-ticket-power').removeClass('laprimitiva-number-selected').removeClass('laprimitiva-number-was-selected');
    trashLine.call(this);
});

$('.thrash-button-2').click(function() {
    $('.laprimitiva-second-ticket').removeClass('laprimitiva-number-selected').removeClass('laprimitiva-number-was-selected');
    $('.laprimitiva-second-ticket-power').removeClass('laprimitiva-number-selected').removeClass('laprimitiva-number-was-selected');
    trashLine.call(this);
});

$('.thrash-button-3').click(function() {
    $('.laprimitiva-third-ticket').removeClass('laprimitiva-number-selected').removeClass('laprimitiva-number-was-selected');
    $('.laprimitiva-third-ticket-power').removeClass('laprimitiva-number-selected').removeClass('laprimitiva-number-was-selected');
    trashLine.call(this);
});

$('.thrash-button-4').click(function() {
    $('.laprimitiva-fourth-ticket').removeClass('laprimitiva-number-selected').removeClass('laprimitiva-number-was-selected');
    $('.laprimitiva-fourth-ticket-power').removeClass('laprimitiva-number-selected').removeClass('laprimitiva-number-was-selected');
    trashLine.call(this);
});

$('.thrash-button-5').click(function() {
    $('.laprimitiva-fifth-ticket').removeClass('laprimitiva-number-selected').removeClass('laprimitiva-number-was-selected');
    $('.laprimitiva-fifth-ticket-power').removeClass('laprimitiva-number-selected').removeClass('laprimitiva-number-was-selected');
    trashLine.call(this);
});

$('.thrash-button-6').click(function() {
    $('.laprimitiva-sixth-ticket').removeClass('laprimitiva-number-selected').removeClass('laprimitiva-number-was-selected');
    $('.laprimitiva-sixth-ticket-power').removeClass('laprimitiva-number-selected').removeClass('laprimitiva-number-was-selected');
    trashLine.call(this);
});

$('.thrash-button-7').click(function() {
    $('.laprimitiva-seventh-ticket').removeClass('laprimitiva-number-selected').removeClass('laprimitiva-number-was-selected');
    $('.laprimitiva-seventh-ticket-power').removeClass('laprimitiva-number-selected').removeClass('laprimitiva-number-was-selected');
    trashLine.call(this);
});

$('.thrash-button-8').click(function() {
    $('.laprimitiva-eight-ticket').removeClass('laprimitiva-number-selected').removeClass('laprimitiva-number-was-selected');
    $('.laprimitiva-eight-ticket-power').removeClass('laprimitiva-number-selected').removeClass('laprimitiva-number-was-selected');
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
    $('.laprimitiva-fifth-ticket').removeClass('laprimitiva-number-selected');
    var randomNumbers = $(".laprimitiva-fifth-ticket").get().sort(function () {
        return Math.round(Math.random()) - 0.1;
    }).slice(0, 6);
    $(randomNumbers).addClass('laprimitiva-number-selected').addClass('laprimitiva-number-was-selected');

    $('.laprimitiva-fifth-ticket-power').removeClass('laprimitiva-number-selected');
    var randomPower = $(".laprimitiva-fifth-ticket-power").get().sort(function () {
        return Math.round(Math.random()) - 0.1;
    }).slice(0, 1);
    $(randomPower).addClass('laprimitiva-number-selected').addClass('laprimitiva-number-was-selected');
    markLineComplete($('.laprimitiva-fifth-ticket').parents('.ticket-holder'));
}

function quickPickSixthTicket() {
    $('.laprimitiva-sixth-ticket').removeClass('laprimitiva-number-selected');
    var randomNumbers = $(".laprimitiva-sixth-ticket").get().sort(function () {
        return Math.round(Math.random()) - 0.1;
    }).slice(0, 6);
    $(randomNumbers).addClass('laprimitiva-number-selected').addClass('laprimitiva-number-was-selected');

    $('.laprimitiva-sixth-ticket-power').removeClass('laprimitiva-number-selected');
    var randomPower = $(".laprimitiva-sixth-ticket-power").get().sort(function () {
        return Math.round(Math.random()) - 0.1;
    }).slice(0, 1);
    $(randomPower).addClass('laprimitiva-number-selected').addClass('laprimitiva-number-was-selected');
    markLineComplete($('.laprimitiva-sixth-ticket').parents('.ticket-holder'));
}

function quickPickSeventhTicket() {
    $('.laprimitiva-seventh-ticket').removeClass('laprimitiva-number-selected');
    var randomNumbers = $(".laprimitiva-seventh-ticket").get().sort(function () {
        return Math.round(Math.random()) - 0.1;
    }).slice(0, 6);
    $(randomNumbers).addClass('laprimitiva-number-selected').addClass('laprimitiva-number-was-selected');

    $('.laprimitiva-seventh-ticket-power').removeClass('laprimitiva-number-selected');
    var randomPower = $(".laprimitiva-seventh-ticket-power").get().sort(function () {
        return Math.round(Math.random()) - 0.1;
    }).slice(0, 1);
    $(randomPower).addClass('laprimitiva-number-selected').addClass('laprimitiva-number-was-selected');
    markLineComplete($('.laprimitiva-seventh-ticket').parents('.ticket-holder'));
}

function quickPickEightTicket() {
    $('.laprimitiva-eight-ticket').removeClass('laprimitiva-number-selected');
    var randomNumbers = $(".laprimitiva-eight-ticket").get().sort(function () {
        return Math.round(Math.random()) - 0.1;
    }).slice(0, 6);
    $(randomNumbers).addClass('laprimitiva-number-selected').addClass('laprimitiva-number-was-selected');

    $('.laprimitiva-eight-ticket-power').removeClass('laprimitiva-number-selected');
    var randomPower = $(".laprimitiva-eight-ticket-power").get().sort(function () {
        return Math.round(Math.random()) - 0.1;
    }).slice(0, 1);
    $(randomPower).addClass('laprimitiva-number-selected').addClass('laprimitiva-number-was-selected');
    markLineComplete($('.laprimitiva-eight-ticket').parents('.ticket-holder'));
}

function quickPickFirstTicket() {
    $('.laprimitiva-first-ticket').removeClass('laprimitiva-number-selected');
    var randomNumbers = $(".laprimitiva-first-ticket").get().sort(function () {
        return Math.round(Math.random()) - 0.1;
    }).slice(0, 6);
    $(randomNumbers).addClass('laprimitiva-number-selected').addClass('laprimitiva-number-was-selected');

    $('.laprimitiva-first-ticket-power').removeClass('laprimitiva-number-selected');
    var randomPower = $(".laprimitiva-first-ticket-power").get().sort(function () {
        return Math.round(Math.random()) - 0.1;
    }).slice(0, 1);
    $(randomPower).addClass('laprimitiva-number-selected').addClass('laprimitiva-number-was-selected');
    markLineComplete($('.laprimitiva-first-ticket').parents('.ticket-holder'));
}

function quickPickSecondTicket() {
    $('.laprimitiva-second-ticket').removeClass('laprimitiva-number-selected');
    var randomNumbers = $(".laprimitiva-second-ticket").get().sort(function () {
        return Math.round(Math.random()) - 0.1;
    }).slice(0, 6);
    $(randomNumbers).addClass('laprimitiva-number-selected').addClass('laprimitiva-number-was-selected');

    $('.laprimitiva-second-ticket-power').removeClass('laprimitiva-number-selected');
    var randomPower = $(".laprimitiva-second-ticket-power").get().sort(function () {
        return Math.round(Math.random()) - 0.1;
    }).slice(0, 1);
    $(randomPower).addClass('laprimitiva-number-selected').addClass('laprimitiva-number-was-selected');
    markLineComplete($('.laprimitiva-second-ticket').parents('.ticket-holder'));
}

function quickPickThirdTicket() {
    $('.laprimitiva-third-ticket').removeClass('laprimitiva-number-selected');
    var randomNumbers = $(".laprimitiva-third-ticket").get().sort(function () {
        return Math.round(Math.random()) - 0.1;
    }).slice(0, 6);
    $(randomNumbers).addClass('laprimitiva-number-selected').addClass('laprimitiva-number-was-selected');

    $('.laprimitiva-third-ticket-power').removeClass('laprimitiva-number-selected');
    var randomPower = $(".laprimitiva-third-ticket-power").get().sort(function () {
        return Math.round(Math.random()) - 0.1;
    }).slice(0, 1);
    $(randomPower).addClass('laprimitiva-number-selected').addClass('laprimitiva-number-was-selected');
    markLineComplete($('.laprimitiva-third-ticket').parents('.ticket-holder'));
}

function quickPickFourthTicket() {
    $('.laprimitiva-fourth-ticket').removeClass('laprimitiva-number-selected');
    var randomNumbers = $(".laprimitiva-fourth-ticket").get().sort(function () {
        return Math.round(Math.random()) - 0.1;
    }).slice(0, 6);
    $(randomNumbers).addClass('laprimitiva-number-selected').addClass('laprimitiva-number-was-selected');

    $('.laprimitiva-fourth-ticket-power').removeClass('laprimitiva-number-selected');
    var randomPower = $(".laprimitiva-fourth-ticket-power").get().sort(function () {
        return Math.round(Math.random()) - 0.1;
    }).slice(0, 1);
    $(randomPower).addClass('laprimitiva-number-selected').addClass('laprimitiva-number-was-selected');
    markLineComplete($('.laprimitiva-fourth-ticket').parents('.ticket-holder'));
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
    var regularNumbers = line.find('.laprimitiva-main-numbers.laprimitiva-number-selected').length;
    var extraNumbers = line.find('.laprimitiva-round-number.laprimitiva-number-selected').length;
    if(regularNumbers == 6){
        markLineComplete(line);
    } else {
        markLineUnComplete(line);
    }
}

$(".quick-pick-all-laprimitiva").click(function() {
    if($('.laprimitiva-fifth-ticket').is(':visible')){
        quickPickFifthTicket();
    }

    if( $('.laprimitiva-sixth-ticket').is(':visible')){
        quickPickSixthTicket();
    }

    if( $('.laprimitiva-seventh-ticket').is(':visible')) {
        quickPickSeventhTicket();
    }

    if( $('.laprimitiva-eight-ticket').is(':visible')) {
        quickPickEightTicket();
    }

    if( $('.laprimitiva-first-ticket').is(':visible')) {
        quickPickFirstTicket();
    }

    if( $('.laprimitiva-second-ticket').is(':visible')) {
        quickPickSecondTicket();
    }

    if( $('.laprimitiva-third-ticket').is(':visible')) {
        quickPickThirdTicket();
    }

    if( $('.laprimitiva-fourth-ticket').is(':visible')) {
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
    ticketHolder.find('.quick-pick-button').css('background', '#58b669 ');

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
    $('.laprimitiva-main-numbers').removeClass('laprimitiva-number-selected').removeClass('laprimitiva-number-was-selected');
    $('.round-number').removeClass('laprimitiva-number-selected').removeClass('laprimitiva-number-was-selected');
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
        var selected = ticketLine.find('.laprimitiva-number-selected');

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
            lottoType: 4
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