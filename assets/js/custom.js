/**

 * Created by Petar on 11/20/2015.

 */





/*Handling the buttons*/



$(".cell-game-1-info").click(function(){

    $("#overlay-buttons-1").delay(100).fadeIn(300);

});



$(".cell-game-1").click(function(){

    $("#overlay-buttons-1").delay(100).fadeIn(300);

});



$("#cell-close-button-1").click(function() {

    $("#overlay-buttons-1").hide();

});



$(".cell-game-2-info").click(function(){

    $("#overlay-buttons-2").delay(100).fadeIn(300);

});



$(".cell-game-2").click(function(){

    $("#overlay-buttons-2").delay(100).fadeIn(300);

});



$("#cell-close-button-2").click(function() {

    $("#overlay-buttons-2").hide();

});



$(".cell-game-3-info").click(function(){

    $("#overlay-buttons-3").delay(100).fadeIn(300);

});



$(".cell-game-3").click(function(){

    $("#overlay-buttons-3").delay(100).fadeIn(300);

});



$("#cell-close-button-3").click(function() {

    $("#overlay-buttons-3").hide();

});



$(".cell-game-4-info").click(function(){

    $("#overlay-buttons-4").delay(100).fadeIn(300);

});



$(".cell-game-4").click(function(){

    $("#overlay-buttons-4").delay(100).fadeIn(300);

});



$("#cell-close-button-4").click(function() {

    $("#overlay-buttons-4").hide();

});



$(".cell-game-5-info").click(function(){

    $("#overlay-buttons-5").delay(250).fadeIn(400);

});



$(".cell-game-5").click(function(){

    $("#overlay-buttons-5").delay(250).fadeIn(400);

});



$("#cell-close-button-5").click(function() {

    $("#overlay-buttons-5").hide();

});



$('.overlay-buttons').on('click', function(e) {

    e.stopPropagation();

});



$(document).on('click', function (e) {

    $("#overlay-buttons-5").hide();

    $("#overlay-buttons-4").hide();

    $("#overlay-buttons-3").hide();

    $("#overlay-buttons-2").hide();

    $("#overlay-buttons-1").hide();

});





/*Handling the how it works slider*/



$('.how-it-works-steps').each(function(){

    (function($set){

        setInterval(function(){

            var $cur = $set.find('.active-list').removeClass('active-list');

            var $next = $cur.next().length?$cur.next():$set.children().eq(0);

            $next.addClass('active-list');

        },4000);

    })($(this));



});



$('.step-text').each(function(){

    (function($set){

        setInterval(function(){

            var $cur = $set.find('.active-list-step').removeClass('active-list-step');

            var $next = $cur.next().length?$cur.next():$set.children().eq(0);

            $next.addClass('active-list-step');

        },4000);

    })($(this));



});



$('.how-it-works-slider').each(function(){

    (function($set){

        setInterval(function(){

            var $cur = $set.find('.active-slider').removeClass('active-slider');

            var $next = $cur.next().length?$cur.next():$set.children().eq(0);

            $next.addClass('active-slider');

        },4000);

    })($(this));

});







$(".how-it-works-steps > button").click(function () {



});



$("#number1").click(function(){

    $(this).data('clicked1', true);

});





$("#number2").click(function(){

    $(this).data('clicked2', true);

});



$("#number3").click(function(){

    $(this).data('clicked3', true);

});



$("#number4").click(function(){

    $(this).data('clicked4', true);

});







$("#number1").click(function(){

    var $this = $(this);

    if($this.data('clicked1')) {

        $(".number").removeClass("active-list");

        $(this).addClass("active-list");

        $('.list').removeClass("active-list-step");

        $('#number1-text').addClass("active-list-step");

        $('.slider').removeClass('active-slider');

        $("#slider-1").addClass("active-slider");

    }

});



$("#number2").click(function(){

    var $this = $(this);

    if($this.data('clicked2')) {

        $(".number").removeClass("active-list");

        $(this).addClass("active-list");

        $('.list').removeClass("active-list-step");

        $('#number2-text').addClass("active-list-step");

        $('.slider').removeClass('active-slider');

        $("#slider-2").addClass("active-slider");

    }



});



$("#number3").click(function(){

    var $this = $(this);

    if($this.data('clicked3')) {

        $(".number").removeClass("active-list");

        $(this).addClass("active-list");

        $('.list').removeClass("active-list-step");

        $('#number3-text').addClass("active-list-step");

        $('.slider').removeClass('active-slider');

        $("#slider-3").addClass("active-slider");

    }



});



$("#number4").click(function(){

    var $this = $(this);

    if($this.data('clicked4')) {

        $(".number").removeClass("active-list");

        $(this).addClass("active-list");

        $('.list').removeClass("active-list-step");

        $('#number4-text').addClass("active-list-step");

        $('.slider').removeClass('active-slider');

        $("#slider-4").addClass("active-slider");

    }

});





/*Video modal special*/

$(window).load(function(){
    if(window.location.hash.indexOf('teamPurchase') != -1){
        $('#team').click()
    }
     $('body').on('click', '.draws-quick-buy', function(){
        quickBuy($(this).data('lottery-type-id'))
    });

    $('body').on('click', '#header-quick-play', function(){
        quickBuy($(this).data('lottery-type-id'))
    });

    $('#videoModal').each(function(){

        var src = $(this).find('iframe').attr('src');



        $(this).on('click', function(){



            $(this).find('iframe').attr('src', '');

            $(this).find('iframe').attr('src', src);



        });

    });

});





/*Shrink logo on scroll*/

function init() {

    window.addEventListener('scroll', function(e){

        var distanceY = window.pageYOffset || document.documentElement.scrollTop,

            shrinkOn = 80,

            logo = document.querySelector("#logo");

        if (distanceY > shrinkOn) {

            classie.add(logo,"smaller-logo");

        } else {

            if (classie.has(logo,"smaller-logo")) {

                classie.remove(logo,"smaller-logo");

            }

        }

    });

}

window.onload = init();



/*Testimonials*/



$("#testimonial-1").click(function() {

    $("#testimonial-1").addClass('active-testimonial');

    $("#testimonial-2").removeClass('active-testimonial');

    $("#testimonial-3").removeClass('active-testimonial');

});



$("#testimonial-2").click(function() {

    $("#testimonial-2").addClass('active-testimonial');

    $("#testimonial-1").removeClass('active-testimonial');

    $("#testimonial-3").removeClass('active-testimonial');

});



$("#testimonial-3").click(function() {

    $("#testimonial-3").addClass('active-testimonial');

    $("#testimonial-1").removeClass('active-testimonial');

    $("#testimonial-2").removeClass('active-testimonial');

});







$("#testimonial-1").click(function(){

    $("#testimonial-1").addClass('active-testimonial');

    $("#testimonial-2").removeClass('active-testimonial');

    $("#testimonial-3").removeClass('active-testimonial');

    $("#testimonial-text-1").addClass('active-testimonial-text').removeClass('not-active-testimonial-text');

    $("#testimonial-text-2").removeClass('active-testimonial-text').addClass('not-active-testimonial-text');

    $("#testimonial-text-3").removeClass('active-testimonial-text').addClass('not-active-testimonial-text');

    $("#text-bubble").addClass('bubble-1').removeClass('bubble-2 bubble-3');



});



$("#testimonial-2").click(function(){

    $("#testimonial-2").addClass('active-testimonial');

    $("#testimonial-1").removeClass('active-testimonial');

    $("#testimonial-3").removeClass('active-testimonial');

    $("#testimonial-text-2").addClass('active-testimonial-text').removeClass('not-active-testimonial-text');

    $("#testimonial-text-1").removeClass('active-testimonial-text').addClass('not-active-testimonial-text');

    $("#testimonial-text-3").removeClass('active-testimonial-text').addClass('not-active-testimonial-text');

    $("#text-bubble").addClass('bubble-2').removeClass('bubble-1 bubble-3');

});



$("#testimonial-3").click(function(){

    $("#testimonial-3").addClass('active-testimonial');

    $("#testimonial-2").removeClass('active-testimonial');

    $("#testimonial-1").removeClass('active-testimonial');

    $("#testimonial-text-3").addClass('active-testimonial-text').removeClass('not-active-testimonial-text');

    $("#testimonial-text-2").removeClass('active-testimonial-text').addClass('not-active-testimonial-text');

    $("#testimonial-text-1").removeClass('active-testimonial-text').addClass('not-active-testimonial-text');

    $("#text-bubble").addClass('bubble-3').removeClass('bubble-2 bubble-1');

});









/*Toggle logo when menu is turned on*/



$("#menu-small-desktop").click(function() {

    $('.menu-show').toggle();

    $('#logo').toggle();



});



$("#signup,.signUpLink").click(function() {

    $('.signup-bubble').toggle();

    $('.login-bubble').hide();

    $('.lotteries-dropdown').hide();

    $(".languages-choice").hide();
    return false;
});



$("#login,.logInLink").click(function() {

    $('.login-bubble').toggle();

    $('.signup-bubble').hide();

    $('.lotteries-dropdown').hide();

    $(".languages-choice").hide();

});



$("#forgot-password").click(function() {

    $('.login-bubble').hide();

    $('.signup-bubble').hide();

    $('.lotteries-dropdown').hide();

    $(".languages-choice").hide();

    $(".forgot-bubble").toggle();

    return false;

});



$('.signup-bubble').on('click', function(e) {

    e.stopPropagation();

});



$('#signup').on('click', function(e) {

    e.stopPropagation();

});



$('#login').on('click', function(e) {

    e.stopPropagation();

});



$('.submit-signup').on('click', function (e) {

    var fullName = $('#FullNameSignup').val();

    var email = $('#InputEmailSignup').val();

    var password = $('#InputPasswordSignup').val();

    $.ajax({

        url: '/wp-admin/admin-ajax.php',

        type: 'post',

        data: {

            action: 'sign_up',

            FullName: fullName,

            InputPasswordSignup: password,

            InputEmailSignup: email

        }

    }).fail(function (r, status, jqXHR) {

        console.log('failed');

    }).done(function (r, status, jqXHR) {

        if (r.success) {

            window.location = "/";

        } else {

            alert(r.message);

        }

    });

});



$('#logout').on('click', function (e) {

    $.ajax({

        url: '/wp-admin/admin-ajax.php',

        type: 'post',

        data: {

            action: 'logout',

        }

    }).fail(function (r, status, jqXHR) {

        console.log('failed');

    }).done(function (r, status, jqXHR) {

        if (r.success) {

            window.location = "/";

        } else {

            alert(r.message);

        }

    });

});



$('.submit-login').on('click', function (e) {

    var username = $('#InputEmailLogin').val();

    var password = $('#InputPasswordLogin').val();

    $.ajax({

        url: '/wp-admin/admin-ajax.php',

        type: 'post',

        data: {

            action: 'login',

            InputEmailLogin: username,

            InputPasswordLogin: password

        }

    }).fail(function (r, status, jqXHR) {

        console.log('failed');

    }).done(function (r, status, jqXHR) {

        if (r.success) {

            window.location = "/";

        } else {

            alert("Invalid Email or password"/*r.message*/);

        }

    });

});



$('.login-bubble').on('click', function(e) {

    e.stopPropagation();

});

$('.forgot-bubble').on('click', function(e) {

    e.stopPropagation();

});



$(".menu-lotteries-button").mouseover(function() {

    $('.lotteries-dropdown').show();

    $('.login-bubble').hide();

    $('.signup-bubble').hide();

    $(".languages-choice").hide();

    $('.header-help-menu').hide();

});



$('.menu-lotteries-button').on('click', function(e) {

    e.stopPropagation();

});



$("section").on('mouseover', function() {

    $('.lotteries-dropdown').hide();

});



$('.lotteries-dropdown').on('click', function(e) {

    e.stopPropagation();

});



$('#language-selector').on('click', function(e) {

    e.stopPropagation();

});



$('.languages-choice').on('click', function(e) {

    e.stopPropagation();

});



$("#language-selector").click(function() {

    $('.languages-choice').toggle();

    $('.lotteries-dropdown').hide();

    $('.login-bubble').hide();

    $('.signup-bubble').hide();

});



$(document).on('click', function (e) {

    $(".signup-bubble").hide();

    $(".login-bubble").hide();

    $(".forgot-bubble").hide();

    $(".lotteries-dropdown").hide();

    $(".languages-choice").hide();

});



document.getElementById('inputNumber').value = '1';

function getGroupPrice(input){
    var shareCount = $(input).val();
    /*alert(shareCount);*/
    var price = $('.sidebar-button.selected').parent().data('price');
    var draws = $('.sidebar-button.selected').parent().data('draws');
    $('.total-price-holder').find('p').html('&euro;' + (shareCount/**draws*/*price*100).toFixed(2)/100);
    /*$('#number-of-single-lines').text($('#inputNumber').val());*/
    console.log(shareCount+"---"+price+"---"+draws+"---"+shareCount*draws*price*100);
}

$('#add-number').on('click', function () {

    var input = $('#inputNumber');

    if((input.val()) <= 149){
        input.val(parseFloat(input.val()) + 1);
    }

    /*$('#number-of-single-lines').parent().html("Shares: ").append('<span id="number-of-single-lines"></span>');*/
    $('#number-of-single-lines').text($('#inputNumber').val());
    getGroupPrice(input);

    return false;
});



$('#deduct-number').on('click', function () {
    var input = $('#inputNumber');
    
    if((input.val()) >= 2){
       input.val(parseFloat(input.val()) - 1); 
    }

    /*$('#number-of-single-lines').parent().html("Shares: ").append('<span id="number-of-single-lines"></span>');*/
    $('#number-of-single-lines').text($('#inputNumber').val());
    getGroupPrice(input);

    return false;
});


$('#shares-submit').click(function() {

    $('.see-your-numbers').toggle();

});







/*$("#personal").click(function(e) {

    $(this).addClass("active").removeClass("inactive");

    $("#team").removeClass("active").addClass("inactive");

    $(".main-group").toggle();

    $(".main-content").hide();

    $(".additional-tickets").hide();

});*/



/*$("#team").click(function() {

    $(this).addClass("active").removeClass("inactive");

    $("#personal").removeClass("active").addClass("inactive");

    $(".main-group").hide();

    $(".main-content").toggle();

    $(".additional-tickets").hide();


});
*/


$(document).ready(function(){

    $("#option1").addClass("selected");

    $("#option2").removeClass("selected");

    $("#option3").removeClass("selected");

    $("#option4").removeClass("selected");

    $("#option5").removeClass("selected");

    $(".sidebar-arrow-5").css("background", "#ffffff");

    $(".arrow-left-5").hide();

    $(".ticket-amount-5").css("color", "#555555");

    $(".ticket-info-5").css("color", "#919191");

    $(".bluer5").css("color", "#266ca8");

    $(".sidebar-arrow-1").css("background", "#ff8e00");

    $(".arrow-left-1").show();

    $(".ticket-amount-1").css("color", "#ffffff");

    $(".ticket-info-1").css("color", "#ffffff");

    $(".bluer1").css("color", "#ffffff");

    $(".sidebar-arrow-2").css("background", "#ffffff");

    $(".sidebar-arrow-3").css("background", "#ffffff");

    $(".sidebar-arrow-4").css("background", "#ffffff");

    $(".arrow-left-2").hide();

    $(".arrow-left-3").hide();

    $(".arrow-left-4").hide();

    $(".ticket-amount-2").css("color", "#555555");

    $(".ticket-amount-3").css("color", "#555555");

    $(".ticket-amount-4").css("color", "#555555");

    $(".ticket-info-2").css("color", "#919191");

    $(".ticket-info-3").css("color", "#919191");

    $(".ticket-info-4").css("color", "#919191");

    $(".bluer2").css("color", "#266ca8");

    $(".bluer3").css("color", "#266ca8");

    $(".bluer4").css("color", "#266ca8");

    $(".billing-period").slideUp("slow");

    $("#sub-2").removeClass("selected");

    $("#sub-3").removeClass("selected");

    $("#sub-1").removeClass("selected");

});



$(".sidebar-arrow-1").click(function() {

    $("#option1").addClass("selected");

    $("#option2").removeClass("selected");

    $("#option3").removeClass("selected");

    $("#option4").removeClass("selected");

    $("#option5").removeClass("selected");

    $(".sidebar-arrow-5").css("background", "#ffffff");

    $(".arrow-left-5").hide();

    $(".ticket-amount-5").css("color", "#555555");

    $(".ticket-info-5").css("color", "#919191");

    $(".bluer5").css("color", "#266ca8");

    $(".sidebar-arrow-1").css("background", "#ff8e00");

    $(".arrow-left-1").show();

    $(".ticket-amount-1").css("color", "#ffffff");

    $(".ticket-info-1").css("color", "#ffffff");

    $(".bluer1").css("color", "#ffffff");

    $(".sidebar-arrow-2").css("background", "#ffffff");

    $(".sidebar-arrow-3").css("background", "#ffffff");

    $(".sidebar-arrow-4").css("background", "#ffffff");

    $(".arrow-left-2").hide();

    $(".arrow-left-3").hide();

    $(".arrow-left-4").hide();

    $(".ticket-amount-2").css("color", "#555555");

    $(".ticket-amount-3").css("color", "#555555");

    $(".ticket-amount-4").css("color", "#555555");

    $(".ticket-info-2").css("color", "#919191");

    $(".ticket-info-3").css("color", "#919191");

    $(".ticket-info-4").css("color", "#919191");

    $(".bluer2").css("color", "#266ca8");

    $(".bluer3").css("color", "#266ca8");

    $(".bluer4").css("color", "#266ca8");

    $(".billing-period").slideUp("slow");

    $("#sub-2").removeClass("selected");

    $("#sub-3").removeClass("selected");

    $("#sub-1").removeClass("selected");

    if($("#desktop-view").data("product-id") == 1){
        updatePrice();
        /*updateLines();*/
    }else{
        getGroupPrice('#inputNumber');
    }

});



$(".sidebar-arrow-2").click(function() {

    $("#option2").addClass("selected");

    $("#option1").removeClass("selected");

    $("#option3").removeClass("selected");

    $("#option4").removeClass("selected");

    $("#option5").removeClass("selected");

    $(".sidebar-arrow-5").css("background", "#ffffff");

    $(".arrow-left-5").hide();

    $(".ticket-amount-5").css("color", "#555555");

    $(".ticket-info-5").css("color", "#919191");

    $(".bluer5").css("color", "#266ca8");

    $(".sidebar-arrow-2").css("background", "#ff8e00");

    $(".arrow-left-2").show();

    $(".ticket-amount-2").css("color", "#ffffff");

    $(".ticket-info-2").css("color", "#ffffff");

    $(".bluer2").css("color", "#ffffff");

    $(".sidebar-arrow-1").css("background", "#ffffff");

    $(".sidebar-arrow-3").css("background", "#ffffff");

    $(".sidebar-arrow-4").css("background", "#ffffff");

    $(".arrow-left-1").hide();

    $(".arrow-left-3").hide();

    $(".arrow-left-4").hide();

    $(".ticket-amount-1").css("color", "#555555");

    $(".ticket-amount-3").css("color", "#555555");

    $(".ticket-amount-4").css("color", "#555555");

    $(".ticket-info-1").css("color", "#919191");

    $(".ticket-info-3").css("color", "#919191");

    $(".ticket-info-4").css("color", "#919191");

    $(".bluer1").css("color", "#266ca8");

    $(".bluer3").css("color", "#266ca8");

    $(".bluer4").css("color", "#266ca8");

    $(".billing-period").slideUp("slow");

    $("#sub-2").removeClass("selected");

    $("#sub-3").removeClass("selected");

    $("#sub-1").removeClass("selected");

    if($("#desktop-view").data("product-id") == 1){
        updatePrice();
        /*updateLines();*/
    }else{
        getGroupPrice('#inputNumber');
    }

});



$(".sidebar-arrow-3").click(function() {

    $("#option3").addClass("selected");

    $("#option1").removeClass("selected");

    $("#option2").removeClass("selected");

    $("#option4").removeClass("selected");

    $("#option5").removeClass("selected");

    $(".sidebar-arrow-5").css("background", "#ffffff");

    $(".arrow-left-5").hide();

    $(".ticket-amount-5").css("color", "#555555");

    $(".ticket-info-5").css("color", "#919191");

    $(".bluer5").css("color", "#266ca8");

    $(".sidebar-arrow-3").css("background", "#ff8e00");

    $(".arrow-left-3").show();

    $(".ticket-amount-3").css("color", "#ffffff");

    $(".ticket-info-3").css("color", "#ffffff");

    $(".bluer3").css("color", "#ffffff");

    $(".sidebar-arrow-2").css("background", "#ffffff");

    $(".sidebar-arrow-1").css("background", "#ffffff");

    $(".sidebar-arrow-4").css("background", "#ffffff");

    $(".arrow-left-2").hide();

    $(".arrow-left-1").hide();

    $(".arrow-left-4").hide();

    $(".ticket-amount-2").css("color", "#555555");

    $(".ticket-amount-1").css("color", "#555555");

    $(".ticket-amount-4").css("color", "#555555");

    $(".ticket-info-2").css("color", "#919191");

    $(".ticket-info-1").css("color", "#919191");

    $(".ticket-info-4").css("color", "#919191");

    $(".bluer2").css("color", "#266ca8");

    $(".bluer1").css("color", "#266ca8");

    $(".bluer4").css("color", "#266ca8");

    $(".billing-period").slideUp("slow");

    $("#sub-2").removeClass("selected");

    $("#sub-3").removeClass("selected");

    $("#sub-1").removeClass("selected");

    if($("#desktop-view").data("product-id") == 1){
        updatePrice();
        /*updateLines();*/
    }else{
        getGroupPrice('#inputNumber');
    }

});



$(".sidebar-arrow-4").click(function(){

    $("#option4").addClass("selected");

    $("#option1").removeClass("selected");

    $("#option2").removeClass("selected");

    $("#option3").removeClass("selected");

    $("#option5").removeClass("selected");

    $(".sidebar-arrow-5").css("background", "#ffffff");

    $(".arrow-left-5").hide();

    $(".ticket-amount-5").css("color", "#555555");

    $(".ticket-info-5").css("color", "#919191");

    $(".bluer5").css("color", "#266ca8");

    $(".sidebar-arrow-4").css("background", "#ff8e00");

    $(".arrow-left-4").show();

    $(".ticket-amount-4").css("color", "#ffffff");

    $(".ticket-info-4").css("color", "#ffffff");

    $(".bluer4").css("color", "#ffffff");

    $(".sidebar-arrow-2").css("background", "#ffffff");

    $(".sidebar-arrow-3").css("background", "#ffffff");

    $(".sidebar-arrow-1").css("background", "#ffffff");

    $(".arrow-left-2").hide();

    $(".arrow-left-3").hide();

    $(".arrow-left-1").hide();

    $(".ticket-amount-2").css("color", "#555555");

    $(".ticket-amount-3").css("color", "#555555");

    $(".ticket-amount-1").css("color", "#555555");

    $(".ticket-info-2").css("color", "#919191");

    $(".ticket-info-3").css("color", "#919191");

    $(".ticket-info-1").css("color", "#919191");

    $(".bluer2").css("color", "#266ca8");

    $(".bluer3").css("color", "#266ca8");

    $(".bluer1").css("color", "#266ca8");

    $(".billing-period").slideUp("slow");

    $("#sub-2").removeClass("selected");

    $("#sub-3").removeClass("selected");

    $("#sub-1").removeClass("selected");

    if($("#desktop-view").data("product-id") == 1){
        updatePrice();
        /*updateLines();*/
    }else{
        getGroupPrice('#inputNumber');
    }

});



$(".sidebar-arrow-5").click(function(){

    $("#option5").addClass("selected");

    $("#option1").removeClass("selected");

    $("#option2").removeClass("selected");

    $("#option3").removeClass("selected");

    $("#option4").removeClass("selected");

    $(".sidebar-arrow-5").css("background", "#ff8e00");

    $(".arrow-left-5").show();

    $(".ticket-amount-5").css("color", "#ffffff");

    $(".ticket-info-5").css("color", "#ffffff");

    $(".bluer5").css("color", "#ffffff");

    $(".sidebar-arrow-2").css("background", "#ffffff");

    $(".sidebar-arrow-3").css("background", "#ffffff");

    $(".sidebar-arrow-1").css("background", "#ffffff");

    $(".sidebar-arrow-4").css("background", "#ffffff");

    $(".arrow-left-2").hide();

    $(".arrow-left-3").hide();

    $(".arrow-left-1").hide();

    $(".arrow-left-4").hide();

    $(".ticket-amount-2").css("color", "#555555");

    $(".ticket-amount-3").css("color", "#555555");

    $(".ticket-amount-1").css("color", "#555555");

    $(".ticket-amount-4").css("color", "#555555");

    $(".ticket-info-2").css("color", "#919191");

    $(".ticket-info-3").css("color", "#919191");

    $(".ticket-info-1").css("color", "#919191");

    $(".ticket-info-4").css("color", "#919191");

    $(".bluer2").css("color", "#266ca8");

    $(".bluer3").css("color", "#266ca8");

    $(".bluer1").css("color", "#266ca8");

    $(".bluer4").css("color", "#266ca8");

    updatePrice();

});



$("#sub-1").click(function() {

    $(this).addClass("selected");

    $("#sub-2").removeClass("selected");

    $("#sub-3").removeClass("selected");



});



$("#sub-2").click(function() {

    $(this).addClass("selected");

    $("#sub-1").removeClass("selected");

    $("#sub-3").removeClass("selected");



});



$("#sub-3").click(function() {

    $(this).addClass("selected");



    $("#sub-2").removeClass("selected");

    $("#sub-1").removeClass("selected");

});





$(document).ready(function(){

    $(".sidebar-arrow-5").click(function(){

        $(".billing-period").slideDown("slow");

    });

});





$(".dropper").click(function() {

    $('.droppable-wrapper').slideToggle("slow");

    $(this).find('i').toggleClass('fa-chevron-down');

    $(this).find('i').toggleClass('fa-chevron-up');



});



$(".see-more-lines").click(function() {

    $('.plus-or-minus').toggle(function(){

        $(this).html('+');

    });

    $(this).toggleClass('see-more-lines-dropper');

    $(".additional-tickets").slideToggle('slow');

});



$(".question-2").hover(function(){

    $('.question-2-panel').slideToggle();

});



$(".close").click(function() {



    $('.error-message-for-main-numbers').removeClass('bounceInUp').css('display', 'none');

});



$(function(){

    $("[data-hide]").on("click", function(){

        $(this).closest("." + $(this).attr("data-hide")).hide();

    });

});



$("section").on('mouseover', function() {

    $('.lotteries-dropdown').hide();

    $('.header-help-menu').hide();

});



$('.nav').mouseover(function() {

    $('.lotteries-dropdown').hide();

    $('.header-help-menu').hide();

});





// for hashtag link

function hashTest(){

    if(window.location.hash === '#teamPurchase'){

        $("#team").addClass("active").removeClass("inactive");

        $("#personal").removeClass("active").addClass("inactive");

        $(".main-group").hide();

        $(".main-content").toggle();

        $(".additional-tickets").hide();

    }

};

function quickBuy(lotto_id){
    /*if(lotto_id == 0){
        lotto_id = 0;
        var lotto_id_numbers = Array(1,2,8,12,5,9,14,3,10,4,11);
        lotto_id = lotto_id_numbers[Math.floor(Math.random()*lotto_id_numbers.length)];
    }*/
    /*alert(lotto_id);*/
    $.ajax({
        url: '/wp-admin/admin-ajax.php',
        type: 'post',
        /*data: {'loto_id':loto_id},*/
        data: {            
            action: 'get_quick_picks',
            lotto_id: lotto_id        
        },
        /*dataType: 'JSON',*/
        success: function(response){
            if(response.success == true){
                window.location = 'cart'
            }else{
                alert('Unable to add quick ')
            }
        },
        error: function(){
            console.error('unable to get random lines');
        }
    })
}