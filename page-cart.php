<?php

/*

  Template Name: Cart

*/


$classes = get_body_class();



get_header();



session_start();

if(isset($_SESSION['cart'])){

    /** @var CartItem[] $cart */

    $cart = $_SESSION['cart'];
    // echo "<pre>";
    // print_r($cart);
    // exit;

} else {

    $cart = [];

}

//echo "<pre>";var_dump($cart[0]);die;


/** @var \WegeTech\LottoYard\Service $lottoService */

global $lottoService;

if (!empty($_POST)) {
    $prepare = $lottoService->prepareOrder($cart);

    $paymentResponse = $lottoService->confirmOrder($cart, $_POST, $prepare);
//    echo"<pre>";var_dump($paymentResponse, !empty($paymentResponse) && $paymentResponse->IsSuccess);die;
}



$response = $lottoService->getPersonalPricesAndDiscounts();
$groupPricesAndDiscounts = $lottoService-> getGroupPricesAndDiscounts(1);
/*echo "<pre>";
print_r($groupPricesAndDiscounts);
exit;*/

if($response->success){

    //error handling

}



/** @var \WegeTech\LottoYard\Model\PriceAndDiscount[] $pricesAndDiscounts */

$pricesAndDiscounts = $response->data;


if (1) :
?>



<section id="cart">



    <div class="container">

        <?php if (!empty($paymentResponse) && $paymentResponse->IsSuccess ):?>
            <h1>Thank You for choosing Jinni Lotto!</h1>
        <?php else: ?>
        <div class="row">
            <div class="col-md-8">

                <?php foreach ($cart as $cartItemId=>$cartItem): ?>

                    <?php

                    $lottoName = getLottoName($cartItem->lottoType);

                    $lottoPrice = 0;

                    if($cartItem->type == "team"){
                        foreach($groupPricesAndDiscounts as $groupPrice){
                            if($groupPrice->LotteryTypeId == $cartItem->lottoType){
                                switch ($cartItem->draws) {
                                    case 1:
                                        $lottoPrice = $groupPrice->Price;
                                        break;
                                    case 4:
                                        $lottoPrice = ($groupPrice->Price - (($groupPrice->Price*5)/100)) * 4;
                                        break;
                                    case 8:
                                        $lottoPrice = ($groupPrice->Price - (($groupPrice->Price*10)/100)) * 8;
                                        break;
                                    case 26:
                                        $lottoPrice = ($groupPrice->Price - (($groupPrice->Price*15)/100)) * 26;
                                        break;
                                }
                                $oneDrawPrice = $groupPrice->Price;
                            }
                            
                        }
                    }
                    else{
                        foreach ($pricesAndDiscounts as $priceAndDiscount){

                            if($priceAndDiscount->LotteryTypeId == $cartItem->lottoType && $cartItem->draws == $priceAndDiscount->NumberOfDraws){

                                $lottoPrice = $priceAndDiscount->Price;

                            }

                        }
                    }

                    ?>

                <div class="cart-item-wrapper">

                    <div class="cart-item-header">



                        <img class="cart-game-image"

                             src="<?php bloginfo('template_directory'); ?>/assets/img/allLottoFlags/game-image-<?= $lottoName?>-small.png"

                             alt="">



                        <p class="cart-game-name"><?= strtoupper($lottoName) ?>
                        <?php if($cartItem->type == "team"){
                            echo "<br><span class='group-label' data-onedraw-price='$oneDrawPrice' style='color: #ff8e00'>Group</span>";
                        } 

                        ?>
                        </p>


                        <div class="cart-lines">

                            <label id="cartLinesLabel" for="cartLines">
                                <?php if($cartItem->type == "team"){
                                    echo "Shares";
                                }else{
                                    echo "Lines"; 
                                } ?>                                
                            </label>

                            <input disabled onchange="handleChange(this);" type="text" id="cartLines" class="cartLines" value="<?php if($cartItem->type == "team") echo $cartItem->shares; else echo count($cartItem->lines); ?>">

                            <i id="linesUp" class="<?php if($cartItem->type == 'team') echo 'cartGroupSharesUp '; ?>cartLinesUp fa fa-caret-up" data-lotto-type-id="<?php echo $cartItem->lottoType ?>" ></i>

                            <i id="linesDown" class="<?php if($cartItem->type == 'team') echo 'cartGroupSharesDown '; ?>cartLinesDown fa fa-caret-down" data-lotto-type-id="<?php echo $cartItem->lottoType ?>" ></i>

                        </div>



                        <div class="cart-draws">

                            <label id="cartDrawsLabel" for="cartLines">Draws</label>

                            <input type="text" id="cartDraws" class="cartDraws" value="<?= $cartItem->draws?>">

                            <i id="drawsUp" class="<?php if($cartItem->type == 'team') echo 'cartGroupDrawsUp '; ?>cartDrawsUp fa fa-caret-up" data-lotto-type-id="<?php echo $cartItem->lottoType ?>" ></i>

                            <i id="drawsDown" class="<?php if($cartItem->type == 'team') echo 'cartGroupDrawsDown '; ?>cartDrawsDown fa fa-caret-down" data-lotto-type-id="<?php echo $cartItem->lottoType ?>" ></i>

                        </div>



                        <div class="cart-total-item" data-cart="<?php if($cartItem->type == "team") echo $lottoPrice*$cartItem->shares; else echo $lottoPrice*count($cartItem->lines) ?>">

                            <p class="cart-total-sum-header">TOTAL SUM</p>

                            <h4>&euro;<?php if($cartItem->type == "team") echo $lottoPrice*$cartItem->shares; else echo $lottoPrice*count($cartItem->lines) ?></h4>

                        </div>



                        <div class="cart-total-item-drop">
                            <?php if($cartItem->type != "team")
                                    echo '<i class="cart-item-up fa fa-chevron-circle-up"></i>';
                            ?>
                        </div>



                    </div>

                    <div class="cart-item-subscription">

                        <input id="cartSubscription" type="checkbox" name="subscription" value="subscription">

                        <label id="cartSubscriptionLabel" for="cartSubscription">Subscription - Never miss a

                            draw</label>



                        <div class="cart-subscription-help">

                            <i class="fa fa-question-circle"></i>

                        </div>



                        <div class="cart-subscription-info">

                            <h5>ON THIS PURCHASE YOU SAVE</h5>



                            <p><?= $cartItem->draws?> Draws Discount (2%)</p>

                        </div>



                        <div class="cart-subscription-discount">

                            <h3>-&euro;1.03</h3>

                        </div>



                        <div class="cart-subscription-thrash" data-cartid="<?= $cartItemId ?>">

                            <img src="<?php bloginfo('template_directory'); ?>/assets/img/cart-thrash.png" alt="">

                        </div>

                    </div>

                    <!--<i class="fa fa-pencil-square-o"></i>-->

                    <div class="additional-info-cart">

                        <h4>Your Lines</h4>



                        <div class="line-one-and-two">

                            <? if (array_key_exists(0, $cartItem->lines)): ?>

                                <div class="cart-line-one">

                                    <p>LINE 1</p>

                                    <? foreach ($cartItem->lines[0]['numbers'] as $number): ?>

                                        <button class="cart-number-lines"><?= $number ?></button>

                                    <? endforeach ?>

                                    <? foreach ($cartItem->lines[0]['extraNumbers'] as $number): ?>

                                        <button class="cart-number-super-lines"><?= $number ?></button>

                                    <? endforeach ?>

                                    <i class="fa fa-pencil-square-o"></i>

                                </div>

                            <? endif ?>

                            <? if (array_key_exists(1, $cartItem->lines)): ?>

                                <div class="cart-line-two">

                                    <p>LINE 2</p>

                                    <? foreach ($cartItem->lines[1]['numbers'] as $number): ?>

                                        <button class="cart-number-lines"><?= $number ?></button>

                                    <? endforeach ?>

                                    <? foreach ($cartItem->lines[1]['extraNumbers'] as $number): ?>

                                        <button class="cart-number-super-lines"><?= $number ?></button>

                                    <? endforeach ?>

                                    <i class="fa fa-pencil-square-o"></i>

                                </div>

                            <? endif ?>

                        </div>

                        <div class="line-three-and-four">

                            <? if (array_key_exists(2, $cartItem->lines)): ?>

                                <div class="cart-line-one">

                                    <p>LINE 3</p>

                                    <? foreach ($cartItem->lines[2]['numbers'] as $number): ?>

                                        <button class="cart-number-lines"><?= $number ?></button>

                                    <? endforeach ?>

                                    <? foreach ($cartItem->lines[2]['extraNumbers'] as $number): ?>

                                        <button class="cart-number-super-lines"><?= $number ?></button>

                                    <? endforeach ?>

                                    <i class="fa fa-pencil-square-o"></i>

                                </div>

                            <? endif ?>

                            <? if (array_key_exists(3, $cartItem->lines)): ?>

                                <div class="cart-line-two">

                                    <p>LINE 4</p>

                                    <? foreach ($cartItem->lines[3]['numbers'] as $number): ?>

                                        <button class="cart-number-lines"><?= $number ?></button>

                                    <? endforeach ?>

                                    <? foreach ($cartItem->lines[3]['extraNumbers'] as $number): ?>

                                        <button class="cart-number-super-lines"><?= $number ?></button>

                                    <? endforeach ?>

                                    <i class="fa fa-pencil-square-o"></i>

                                </div>

                            <? endif ?>

                        </div>

                        <div class="line-three-and-four">

                            <? if (array_key_exists(4, $cartItem->lines)): ?>

                                <div class="cart-line-one">

                                    <p>LINE 5</p>

                                    <? foreach ($cartItem->lines[4]['numbers'] as $number): ?>

                                        <button class="cart-number-lines"><?= $number ?></button>

                                    <? endforeach ?>

                                    <? foreach ($cartItem->lines[4]['extraNumbers'] as $number): ?>

                                        <button class="cart-number-super-lines"><?= $number ?></button>

                                    <? endforeach ?>

                                    <i class="fa fa-pencil-square-o"></i>

                                </div>

                            <? endif ?>

                            <? if (array_key_exists(5, $cartItem->lines)): ?>

                                <div class="cart-line-two">

                                    <p>LINE 6</p>

                                    <? foreach ($cartItem->lines[5]['numbers'] as $number): ?>

                                        <button class="cart-number-lines"><?= $number ?></button>

                                    <? endforeach ?>

                                    <? foreach ($cartItem->lines[5]['extraNumbers'] as $number): ?>

                                        <button class="cart-number-super-lines"><?= $number ?></button>

                                    <? endforeach ?>

                                    <i class="fa fa-pencil-square-o"></i>

                                </div>

                            <? endif ?>

                        </div>

                        <div class="line-three-and-four">

                            <? if (array_key_exists(6, $cartItem->lines)): ?>

                                <div class="cart-line-one">

                                    <p>LINE 7</p>

                                    <? foreach ($cartItem->lines[6]['numbers'] as $number): ?>

                                        <button class="cart-number-lines"><?= $number ?></button>

                                    <? endforeach ?>

                                    <? foreach ($cartItem->lines[6]['extraNumbers'] as $number): ?>

                                        <button class="cart-number-super-lines"><?= $number ?></button>

                                    <? endforeach ?>

                                    <i class="fa fa-pencil-square-o"></i>

                                </div>

                            <? endif ?>

                            <? if (array_key_exists(7, $cartItem->lines)): ?>

                                <div class="cart-line-two">

                                    <p>LINE 8</p>

                                    <? foreach ($cartItem->lines[7]['numbers'] as $number): ?>

                                        <button class="cart-number-lines"><?= $number ?></button>

                                    <? endforeach ?>

                                    <? foreach ($cartItem->lines[7]['extraNumbers'] as $number): ?>

                                        <button class="cart-number-super-lines"><?= $number ?></button>

                                    <? endforeach ?>

                                    <i class="fa fa-pencil-square-o"></i>

                                </div>

                            <? endif ?>

                        </div>

                    </div>



                </div>

                <?php endforeach; ?><!--cart item wrapper-->



                <div class="totals-area clearfix">

                    <h2>CHECKOUT</h2>

                    <ul>

                        <li class="farProcHide"><input type="checkbox">FAST PROCESSING 0.79 <i class="fa fa-question-circle"></i></li>

                        <li><input id="promo-code-check" type="checkbox">Promo Code</li>

                        <div class="cart-promo-code-holder">

                            <form action="" class="promo-code-redeem form-inline">

                                <div class="form-group">

                                    <input class="form-control" type="text">

                                </div>

                                <button type="submit" class="btn">REDEEM</button>

                            </form>

                        </div>



                    </ul>

                    <div class="total-order">

                        <h4>TOTAL ORDER</h4>

                        <p>&euro;0</p>

                    </div>



                    <div class="cart-panel panel panel-default hide">

                        <div class="panel-heading">

                            <h3 class="panel-title">Info</h3>

                        </div>

                        <div class="panel-body">

                            Enjoy a personal and fast processing and support.

                        </div>

                    </div>



                </div>



            </div><!--col-md-8-->
            <?php if (in_array('logged-in',$classes)) : ?>
                <?php if (!empty($paymentResponse) && $paymentResponse->ErrorMessage ):?>
                    <div><?= $paymentResponse->ErrorMessage ?></div>
                <?php endif; ?>
                <?php get_template_part('template-parts/content','loginSidebar') ?>

            <? else : ?>

                <?php get_template_part('template-parts/content','cartLogin') ?>

            <? endif; ?>
        </div>
        <?php endif; ?>

    </div>



</section>



<?php
endif;

get_footer();

