/** * Created by Petar on 1/19/2016. */
$('.visa-help-info').mouseover(function() {    
    $('.cart-img-card').addClass('show');
});

$('.visa-help-info').mouseout(function() {    
    $('.cart-img-card').removeClass('show');
});

$('.totals-area').find('i').hover(    function() {        
    $('.cart-panel').addClass('show');    
},    

function() {        
    $('.cart-panel').removeClass('show');    
});

$(document).ready(function() {    //set initial state.    
    $('#promo-code-check').val($(this).is(':checked'));    

    $('#promo-code-check').change(function() {        
        if($(this).is(":checked")) {            
            var returnVal = $('.cart-promo-code-holder').css('display', 'block');            
            $(this).attr("checked", returnVal);        
        } else {            
            var returnVal = $('.cart-promo-code-holder').css('display', 'none');            
            $(this).attr("checked", returnVal);        
        }        
        $('#promo-code-check').val($(this).is(':checked'));    
    });
});

$(document).ready(function() {    
    var links = []; //array for links    
    var totalamount = 0;    
    $('.cart-total-sum-header').parent().each(function () {        
        links.push($(this).data('link')); //get links        
        totalamount += ($(this).data('cart'));        
        totalamount = +totalamount.toFixed(2);    
    });    
    $('.total-order').find('p').html('€' + totalamount);
});

function updateamount() {    
    var links = []; //array for table    
    var totalamount = 0;    
    $('.cart-total-sum-header').parent().each(function () {        
        links.push($(this).data('link')); //get links        
        totalamount += parseFloat($(this).data('cart'));
    });    
    $('.cart-total').find('h3').html('\u20AC' + totalamount.toFixed(2));
}

$(document).ready(function() {    
    updateamount();
    getLottoPrices();

    $('.loyalty-buy-now-button').on('click',function(){
        window.location.replace(window.location.protocol + "//" + window.location.host + "/"+"see-all-individual-page");
    });
});

$('.cart-total-item-drop').find('.cart-item-up').click(function() {    
    $(this).toggleClass("fa-chevron-circle-down fa-chevron-circle-up");    
    $(this).toggleClass('active-faq-item');    
    $(this).parents('.cart-item-wrapper').find('.additional-info-cart').toggle();
});

$('.cartLinesUp').on('click', function () {    
    var input = $(this).parents('.cart-lines').find('.cartLines');    
    if(input.val() >= 30) {        
        $(this).val(30);    
    } else {        
        input.val(parseFloat(input.val()) + 1);    
    }
    if($(this).hasClass('cartGroupSharesUp')){
        groupchangesprice(input);
    }else{   
        lineChangePrice(input); 
    }
});

$('.cartLinesDown').on('click', function () {    
    var input = $(this).parents('.cart-lines').find('.cartLines');    
    if (input.val() <= 1) {        
        $(this).val(1);    
    } else {        
        input.val(parseFloat(input.val()) - 1);    
    }
    if($(this).hasClass('cartGroupSharesDown')){
        groupchangesprice(input);
    }else{   
        lineChangePrice(input); 
    }

    /*var cart_line = input.val();
    var cart_draw = $(this).closest('.cart-item-header').find('.cartDraws').val();
    var lotto_type_id = $(this).data('lotto-type-id');
    console.log(cart_line+'---'+cart_draw+'---'+lotto_type_id); 
    $.ajax({
        url: '/wp-admin/admin-ajax.php',        
        type: 'post',        
        data: {            
            action: 'line_up_price',            
            cart_line: cart_line,
            cart_draw: cart_draw,
            lotto_type_id: lotto_type_id       
        }
    }).fail(function (r, status, jqXHR) {        
        alert('fail');    
    }).done(function (r, status, jqXHR) {        
        if(r.success){            
            alert(r.message);
            $(input).closest('.cart-item-header').find('h4').text('$'+r.message);     
        } else {            
            alert('r not success');        
        }    
    });*/

});

$('.cartDrawsUp').on('click', function () {    
    var input = $(this).parents('.cart-draws').find('.cartDraws');    
    if(input.val() == 1) {        
        input.val(parseFloat(input.val()) + 3);    
    } else {        
        if(input.val() == 4) {            
            input.val(parseFloat(input.val()) + 4);        
        } else {            
            if(input.val() == 8) {                
                input.val(parseFloat(input.val()) + 18);            
            }        
        }    
    }
    if($(this).hasClass('cartGroupDrawsUp')){
        groupchangesprice(input);
    }else{   
        lineChangePrice(input); 
    }
    /*updateTotalamount();*/
    // lineChangePrice(input);
});

$('.cartDrawsDown').on('click', function () {    
    var input = $(this).parents('.cart-draws').find('.cartDraws');    
    if(input.val() == 26) {        
        input.val(parseFloat(input.val()) - 18);    
    } else {        
        if (input.val() == 8) {            
            input.val(parseFloat(input.val()) - 4);        
        } else {            
            if(input.val() == 4) {                
                input.val(parseFloat(input.val()) - 3);            
            }        
        }    
    }  
    if($(this).hasClass('cartGroupDrawsDown')){
        groupchangesprice(input);
    }else{   
        lineChangePrice(input); 
    }  
    /*updateTotalamount();*/
    /*lineChangePrice(input);*/
});

function updateTotalamount() {   
    var totalCartSum = 0;
    $.each($('.cart-total-item'), function(key, item){     
        totalCartSum += parseFloat($(item).data('cart')); 
    });    
    $('.total-order').find('p').html('€' + totalCartSum.toFixed(2));
}

function lineChangePrice(input){
    var adjustedPrice = 0;
    var cart_line = $(input).closest('.cart-item-header').find('.cartLines').val();/*input.val();*/
    /*var cart_draw = $(this).closest('.cart-item-header').find('.cartDraws').val();
    var lotto_type_id = $(this).data('lotto-type-id');*/
    var cart_draw = $(input).closest('.cart-item-header').find('.cartDraws').val();
    var lotto_type_id = $(input).closest('.cart-item-header').find('.cartLinesUp').data('lotto-type-id');
    // console.log(cart_line+'---'+cart_draw+'---'+lotto_type_id); 
    if(allPrices.length != 0){
        adjustedPrice = (allPrices[lotto_type_id][cart_draw]*cart_line).toFixed(2);
        $(input).closest('.cart-item-header').find('h4').text('\u20AC'+adjustedPrice);  
        $(input).closest('.cart-item-header').find('.cart-total-item').data('cart',adjustedPrice);
        updateTotalamount();
        updateamount();
    }else{
        return;
    }
//  $.ajax({
//      url: '/wp-admin/admin-ajax.php',        
//      type: 'post',        
//      data: {            
//          action: 'line_up_price',            
//          cart_line: cart_line,
//          cart_draw: cart_draw,
//          lotto_type_id: lotto_type_id       
//      }
//  }).fail(function (r, status, jqXHR) {        
//      alert('fail');    
//  }).done(function (r, status, jqXHR) {        
//      if(r.success){            
//          /*alert(r.message);*/
//          $(input).closest('.cart-item-header').find('h4').text('\u20AC'+r.message.toFixed(2));  
//          $(input).closest('.cart-item-header').find('.cart-total-item').data('cart',r.message);/*attr('data-cart', r.message);*/ 
//          updateTotalamount();
//          updateamount();  
//      } else {            
//          alert('r not success');        
//      }    
//  });

}

function groupchangesprice(input){
        var cart_line = $(input).closest('.cart-item-header').find('.cartLines').val();
        var cart_draw = $(input).closest('.cart-item-header').find('.cartDraws').val();
        var one_draw_price = $(input).closest('.cart-item-header').find('.group-label').data('onedraw-price');
        
        if(cart_draw == 1){
            var group_price = cart_line * cart_draw * one_draw_price;
        }
        if(cart_draw == 4){
            group_price = cart_line * cart_draw * (one_draw_price - (one_draw_price*5)/100);   
        }
        if(cart_draw == 8){
            group_price = cart_line * cart_draw * (one_draw_price - (one_draw_price*10)/100);   
        }
        if(cart_draw == 26){
            group_price = cart_line * cart_draw * (one_draw_price - (one_draw_price*15)/100);   
        }
        console.log(cart_line+'---'+cart_draw+'---'+one_draw_price+'---'+group_price);
        $(input).closest('.cart-item-header').find('h4').text('\u20AC'+group_price.toFixed(2));  
        $(input).closest('.cart-item-header').find('.cart-total-item').data('cart',group_price.toFixed(2));
        updateTotalamount();
        updateamount();
}

$('.cart-subscription-thrash').on('click', function(e){    
    updateTotalamount();    
    var cartItem = $(this);    
    var cartItemId = $(this).data('cartid');    
    console.log(cartItemId);    
    $.ajax({        
        url: '/wp-admin/admin-ajax.php',        
        type: 'post',        
        data: {            
            action: 'remove_from_cart',            
            cartItemId: cartItemId        
        }    
    }).fail(function (r, status, jqXHR) {        
        alert('Unable to remove items from cart!');    
    }).done(function (r, status, jqXHR) {        
        if(r.success){            
            cartItem.parents('.cart-item-wrapper').remove();            
            updateTotalamount(); 
            updateamount();       
        } else {            
            alert(r.message);        
        }    
    });
});

function handleChange(input) {    
    if (input.value < 0) 
        input.value = 0;    
    if (input.value > 30) 
        input.value = 30;
}

var allPrices = {};
function getLottoPrices(){
    $.ajax({        
        url: '/wp-admin/admin-ajax.php',        
        type: 'post',        
        data: {            
            action: 'line_up_price'        
        }    
    }).fail(function (r, status, jqXHR) {        
        alert('Unable to get the prices.');    
    }).done(function (data, status, jqXHR) {        
        allPrices = data;
    });
};