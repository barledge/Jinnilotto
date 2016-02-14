<?php

/*

  Template Name: Eurojackpot Ticket

*/



use WegeTech\LottoYard\Service;

use WegeTech\LottoYard\Model\Draw;



wp_enqueue_script( 'script', '//jinnilotto.com/wp-content/themes/jinni-lotto/assets/js/functions-eurojackpot.js', array ( 'jquery' ), 1.1, true);



//-----Custom Fields

//Promo 1

$eurojackpot_image_1        =   get_field('eurojackpot_image_1');

$eurojackpot_title_1        =   get_field('eurojackpot_title_1');

$eurojackpot_text_1         =   get_field('eurojackpot_text_1');



//Promo 2

$eurojackpot_image_2        =   get_field('eurojackpot_image_2');

$eurojackpot_title_2        =   get_field('eurojackpot_title_2');

$eurojackpot_text_2         =   get_field('eurojackpot_text_2');



//Promo 3

$eurojackpot_image_3        =   get_field('eurojackpot_image_3');

$eurojackpot_title_3        =   get_field('eurojackpot_title_3');

$eurojackpot_text_3         =   get_field('eurojackpot_text_3');



global /** @var Service $lottoService */

$lottoService;

$response = $lottoService->getAllDraws();

/** @var Draw[] $drawsData */

$drawsData = $response->data;



/**

 * @param Draw[] $draws

 * @return Draw

 */

function getPowerball($draws){



    foreach ($draws as $draw ) {

        if ($draw->LotteryName == 'EuroJackpot') {

            return $draw;

        }

    }

    return "Lottery Missing";

};



$euroJackpotLotto = getPowerball($drawsData);



//Prices Stuff

$response = $lottoService->getPersonalPricesAndDiscounts();

if(!$response->success){

    //error handling

}



$response1 = $lottoService->getGroupPricesAndDiscounts(1);
/*$response4 = $lottoService->getGroupPricesAndDiscounts(4);
$response8 = $lottoService->getGroupPricesAndDiscounts(8);
$response26 = $lottoService->getGroupPricesAndDiscounts(26);*/

foreach($response1 as $val){
    if($val->LotteryTypeId == $euroJackpotLotto->LotteryTypeId){
        $drawGroupPrice1 = $val->Price;
        break;
    }
}
/*foreach($response4 as $val){
    if($val->LotteryTypeId == $euroJackpotLotto->LotteryTypeId){
        $drawGroupPrice4 = $val->Price;
        break;
    }
}
foreach($response8 as $val){
    if($val->LotteryTypeId == $euroJackpotLotto->LotteryTypeId){
        $drawGroupPrice8 = $val->Price;
        break;
    }
}
foreach($response26 as $val){
    if($val->LotteryTypeId == $euroJackpotLotto->LotteryTypeId){
        $drawGroupPrice26 = $val->Price;
        break;
    }
}*/
$drawGroupPrice4 = ($drawGroupPrice1 - (($drawGroupPrice1 * 5) / 100))*4;
$drawGroupPrice8 = ($drawGroupPrice1 - (($drawGroupPrice1 * 10) / 100))*8;
$drawGroupPrice26 = ($drawGroupPrice1 - (($drawGroupPrice1 * 15) / 100))*26;

if(!$response1->success){

    //error handling

}



/** @var \WegeTech\LottoYard\Model\PriceAndDiscount[] $powerBallPrices */

$powerBallPrices = array_filter($response->data, function($value){

    /** @var \WegeTech\LottoYard\Model\PriceAndDiscount $value */

    if($value->LotteryTypeId == \WegeTech\LottoYard\Model\LotteryTypes::EuroJackpot){

        return $value;

    }

});



$oneDrawPrice = 0;

$fourDrawsPrice = 0;

$eightDrawsPrice = 0;

$twentySixDrawsPrice = 0;



foreach ($powerBallPrices as $powerBallPrice) {

    switch($powerBallPrice->NumberOfDraws){

        case 1:

            $oneDrawPrice = $powerBallPrice->Price;

            break;

        case 4:

            $fourDrawsPrice = $powerBallPrice->Price;

            break;

        case 8:

            $eightDrawsPrice = $powerBallPrice->Price;

            break;

        case 26:

            $twentySixDrawsPrice = $powerBallPrice->Price;

            break;

        default:



    }

}



get_header(); ?>


<script>
$(document).ready(function(){
    $("#team").click(function() {

        $('.button-div').removeClass('personal').addClass('team');

        $(this).addClass("active").removeClass("inactive");

        $("#personal").removeClass("active").addClass("inactive");

        $(".main-group").hide();

        $(".main-content").show();

        $(".additional-tickets").hide();

        updateDraws();
        $("#desktop-view").data("product-id", 3);
        $('#number-of-single-lines').parent().html("Shares: ").append('<span id="number-of-single-lines"></span>');
        $('#number-of-single-lines').text($('#inputNumber').val());
        /*alert($("#desktop-view").data("product-id"));*/
        $(".sidebar-arrow-1").data("price", <?php echo $drawGroupPrice1; ?>);
        $(".sidebar-arrow-2").data("price", <?php echo round($drawGroupPrice4, 2); ?>);
        $(".sidebar-arrow-3").data("price", <?php echo round($drawGroupPrice8, 2); ?>);
        $(".sidebar-arrow-4").data("price", <?php echo round($drawGroupPrice26, 26); ?>);

        $(".ticket-info-1").text('\u20AC'+<?php echo $drawGroupPrice1; ?>+' / Share').append('<br> <span class="bluer bluer1">Regular Price</span>');
        $(".ticket-info-2").text('\u20AC'+<?php echo round($drawGroupPrice4/4, 2); ?>+' / Share').append('<br> <span class="bluer bluer2">Save 5%</span>');
        $(".ticket-info-3").text('\u20AC'+<?php echo round($drawGroupPrice8/8, 2); ?>+' / Share').append('<br> <span class="bluer bluer3">Save 10%</span>');
        $(".ticket-info-4").text('\u20AC'+<?php echo round($drawGroupPrice26/26, 2); ?>+' / Share').append('<br> <span class="bluer bluer4">Save 15%</span>');

        getGroupPrice('#inputNumber');
    });


    $("#personal").click(function(e) {

        $('.button-div').removeClass('team').addClass('personal');

        $(this).addClass("active").removeClass("inactive");

        $("#team").removeClass("active").addClass("inactive");

        $(".main-group")..show();

        $(".main-content").hide();

        $(".additional-tickets").hide();

        updateDraws();
        $("#desktop-view").data("product-id", 1);
        $('#number-of-single-lines').parent().html("Single Lines: ").append('<span id="number-of-single-lines"></span>');
        updateLines();
        $(".sidebar-arrow-1").data("price", <?php echo $oneDrawPrice; ?>);
        $(".sidebar-arrow-2").data("price", <?php echo round($fourDrawsPrice/4, 2); ?>);
        $(".sidebar-arrow-3").data("price", <?php echo round($eightDrawsPrice/8, 2); ?>);
        $(".sidebar-arrow-4").data("price", <?php echo round($twentySixDrawsPrice/26, 2); ?>);

        $(".ticket-info-1").text('\u20AC'+<?php echo $oneDrawPrice; ?>+' / Line').append('<br> <span class="bluer bluer1">Regular Price</span>');
        $(".ticket-info-2").text('\u20AC'+<?php echo round($fourDrawsPrice/4, 2); ?>+' / Line').append('<br> <span class="bluer bluer2">Save 5%</span>');
        $(".ticket-info-3").text('\u20AC'+<?php echo round($eightDrawsPrice/8, 2); ?>+' / Line').append('<br> <span class="bluer bluer3">Save 10%</span>');
        $(".ticket-info-4").text('\u20AC'+<?php echo round($twentySixDrawsPrice/26, 2); ?>+' / Line').append('<br> <span class="bluer bluer4">Save 15%</span>');
        updatePrice();
    });

});
</script>


<div id="desktop-view" data-product-id="1"><div>

    <section id="teamplay-content">

        <div class="container">

            <div class="row">

                <div class="col-sm-9 teamplay-main">



                    <!---  This is for the Main Content here  --->



                    <!---  Top CTA  --->

                    <div class="col-sm-12 teamplay-cta">

                        <img src="<?php bloginfo('stylesheet_directory'); ?>/assets/img/groupplay/group-eurojackpot.png" alt="eurojackpot">

                        <h4>Win the EuroJackpot</h4>

                        <div class="teamplay-countdown-cta">

                            <h3>

                                <?php if ($euroJackpotLotto->Jackpot == -1) : ?>

                                <?= 'Prize Pending' ?></h3><br>

                            <?php else: ?>

                                <?= $euroJackpotLotto->LotteryCurrency2; ?><?= round($euroJackpotLotto->Jackpot)/1000000; ?>Millions</h3><br>

                                <?php endif; ?>

                            <p><i class="fa fa-clock-o"></i><span class="drawDatePowerball"><?= $euroJackpotLotto->DrawDate; ?></span></p>

                        </div>

                    </div><!---  Top CTA  --->



                    <script type="text/javascript">

                        $(".drawDatePowerball").countdown("<?= date("m/d/Y H:i:s" , strtotime($euroJackpotLotto->DrawDate)) ?>", function(event) {

                            $(this).text(

                                event.strftime('%-D day%!D %H:%M:%S')

                            );

                        });

                    </script>



                    <!---  Main Content Goes Here  --->

                    <div class="container">

                        <div class="row">

                            <div class="col-sm-9">

                                <ul class="nav nav-tabs">

                                    <li id="personal" role="presentation" class="active"><a href="#">PERSONAL TICKETS</a></li>

                                    <li id="team" role="presentation" class="inactive"><a href="#">TEAM PURCHASE</a></li>



                                </ul>

                                <div class="main-content">

                                    <div class="col-left-50 left">

                                        <h4>Together anything is possible</h4>

                                        <p>It&rsquo;s not widely known but the secret to many lottery successes is the concept of group play. One of every four jackpots is won not by individuals but by groups. JinniLotto&rsquo;s Team Play enables you to purchase tickets with a group so that you lower your expenses while raising your chances of winning.

                                            <br><br>



                                            Share the joy of lotto with your friends, family or colleagues and experience the most exciting form of lottery plat. <span class="bolded">With our Group Deal you get 50 CHANCES to WIN and up to 100 shares on a single draw</span>. Your slice of the winning pie is determined by how many shares you have purchased.

                                        </p>



                                        <div class="call-to-shares">

                                            <p>How many shares would you like?</p>



                                            <form class="form-group">

                                                <button id="deduct-number">&minus;</button>



                                                <input value="1" type="text" class="input-number" id="inputNumber" readonly>

                                                <button id="add-number">+</button>

                                                <br>

                                                <a href="#"><button type="submit" id="shares-submit">See your numbers</button></a>

                                            </form>

                                        </div>



                                    </div>



                                    <div class="col-left-50 right">



                                        <div class="three-facts">

                                            <div class="col-3-33">

                                                <img src="<?php bloginfo('stylesheet_directory'); ?>/assets/img/groupplay/50x1.png" alt="50x1">

                                                <p>Play with 50 lines on each draw</p>

                                            </div>

                                            <div class="col-3-33">

                                                <img src="<?php bloginfo('stylesheet_directory'); ?>/assets/img/groupplay/winners.png" alt="Winners">

                                                <p>Get the share in group lottery</p>

                                            </div>

                                            <div class="col-3-33">

                                                <img src="<?php bloginfo('stylesheet_directory'); ?>/assets/img/groupplay/people.png" alt="People Won">

                                                <p>1 in 4 Lotto jackpot are won by a group</p>

                                            </div>

                                        </div>



                                        <div class="bottom-right">

                                            <img id="teamplay-badge" src="<?php bloginfo('stylesheet_directory'); ?>/assets/img/groupplay/team-play.png" alt="Teamplay">

                                            <img id="group-trophy" src="<?php bloginfo('stylesheet_directory'); ?>/assets/img/groupplay/trophy.png" alt="Trophy">

                                            <p>With team play we Guarantee at least one win every month with a monthly subscription</p>

                                        </div>



                                        <div class="see-your-numbers">

                                            <div class="top-see-your-numbers">

                                                <p>These are your numbers:</p>

                                            </div>

                                            <div class="col-sm-6">

                                                <div class="random-group-numbers">02, 15, 12, 38, 41, 54, #66</div>

                                                <div class="random-group-numbers">02, 15, 12, 38, 41, 54, #66</div>

                                                <div class="random-group-numbers">02, 15, 12, 38, 41, 54, #66</div>

                                                <div class="random-group-numbers">02, 15, 12, 38, 41, 54, #66</div>

                                                <div class="random-group-numbers">02, 15, 12, 38, 41, 54, #66</div>

                                                <div class="random-group-numbers">02, 15, 12, 38, 41, 54, #66</div>

                                                <div class="random-group-numbers">02, 15, 12, 38, 41, 54, #66</div>

                                                <div class="random-group-numbers">02, 15, 12, 38, 41, 54, #66</div>

                                                <div class="random-group-numbers">02, 15, 12, 38, 41, 54, #66</div>

                                                <div class="random-group-numbers">02, 15, 12, 38, 41, 54, #66</div>

                                                <div class="random-group-numbers">02, 15, 12, 38, 41, 54, #66</div>

                                                <div class="random-group-numbers">02, 15, 12, 38, 41, 54, #66</div>

                                                <div class="random-group-numbers">02, 15, 12, 38, 41, 54, #66</div>

                                                <div class="random-group-numbers">02, 15, 12, 38, 41, 54, #66</div>

                                                <div class="random-group-numbers">02, 15, 12, 38, 41, 54, #66</div>

                                                <div class="random-group-numbers">02, 15, 12, 38, 41, 54, #66</div>

                                                <div class="random-group-numbers">02, 15, 12, 38, 41, 54, #66</div>

                                                <div class="random-group-numbers">02, 15, 12, 38, 41, 54, #66</div>

                                                <div class="random-group-numbers">02, 15, 12, 38, 41, 54, #66</div>

                                                <div class="random-group-numbers">02, 15, 12, 38, 41, 54, #66</div>

                                                <div class="random-group-numbers">02, 15, 12, 38, 41, 54, #66</div>

                                                <div class="random-group-numbers">02, 15, 12, 38, 41, 54, #66</div>

                                                <div class="random-group-numbers">02, 15, 12, 38, 41, 54, #66</div>

                                                <div class="random-group-numbers">02, 15, 12, 38, 41, 54, #66</div>

                                                <div class="random-group-numbers">02, 15, 12, 38, 41, 54, #66</div>

                                            </div>



                                            <div class="col-sm-6">

                                                <div class="random-group-numbers">02, 15, 12, 38, 41, 54, #66</div>

                                                <div class="random-group-numbers">02, 15, 12, 38, 41, 54, #66</div>

                                                <div class="random-group-numbers">02, 15, 12, 38, 41, 54, #66</div>

                                                <div class="random-group-numbers">02, 15, 12, 38, 41, 54, #66</div>

                                                <div class="random-group-numbers">02, 15, 12, 38, 41, 54, #66</div>

                                                <div class="random-group-numbers">02, 15, 12, 38, 41, 54, #66</div>

                                                <div class="random-group-numbers">02, 15, 12, 38, 41, 54, #66</div>

                                                <div class="random-group-numbers">02, 15, 12, 38, 41, 54, #66</div>

                                                <div class="random-group-numbers">02, 15, 12, 38, 41, 54, #66</div>

                                                <div class="random-group-numbers">02, 15, 12, 38, 41, 54, #66</div>

                                                <div class="random-group-numbers">02, 15, 12, 38, 41, 54, #66</div>

                                                <div class="random-group-numbers">02, 15, 12, 38, 41, 54, #66</div>

                                                <div class="random-group-numbers">02, 15, 12, 38, 41, 54, #66</div>

                                                <div class="random-group-numbers">02, 15, 12, 38, 41, 54, #66</div>

                                                <div class="random-group-numbers">02, 15, 12, 38, 41, 54, #66</div>

                                                <div class="random-group-numbers">02, 15, 12, 38, 41, 54, #66</div>

                                                <div class="random-group-numbers">02, 15, 12, 38, 41, 54, #66</div>

                                                <div class="random-group-numbers">02, 15, 12, 38, 41, 54, #66</div>

                                                <div class="random-group-numbers">02, 15, 12, 38, 41, 54, #66</div>

                                                <div class="random-group-numbers">02, 15, 12, 38, 41, 54, #66</div>

                                                <div class="random-group-numbers">02, 15, 12, 38, 41, 54, #66</div>

                                                <div class="random-group-numbers">02, 15, 12, 38, 41, 54, #66</div>

                                                <div class="random-group-numbers">02, 15, 12, 38, 41, 54, #66</div>

                                                <div class="random-group-numbers">02, 15, 12, 38, 41, 54, #66</div>

                                                <div class="random-group-numbers">02, 15, 12, 38, 41, 54, #66</div>

                                            </div>

                                        </div>



                                    </div>



                                </div><!---  main content  --->







                                <!---  Ticket for eurojackpot  --->



                                <!---  Top Content  --->

                                <div class="main-group main-group-powerball-tickets main-group-eurojackpot-tickets">



                                    <button id="group-step-1">1</button>

                                    <img id="arrow-down-1" src="<?php bloginfo('stylesheet_directory'); ?>/assets/img/groupplay/arrow-down.png" alt="/">

                                    <h5>Pick Your Number</h5>



                                    <button class="quick-pick-all quick-pick-all-eurojackpot">QUICK PICK ALL</button>

                                    <button class="clear-all clear-all-eurojackpot">CLEAR ALL</button>

                                    <button class="see-more-lines">SEE MORE LINES <span class="plus-or-minus">+</span></button>



                                    <!---  Ticket Holder  --->

                                    <div class="ticket-holder eurojackpot-ticket-holder">



                                        <div class="ticket-header">

                                            <button class="star-button"><img src="<?php bloginfo('stylesheet_directory'); ?>/assets/img/groupplay/star.png" alt="Star"></button>

                                            <button class="quick-pick-button quick-pick-button-1-eurojackpot">QUICK PICK</button>

                                            <button class="thrash-button thrash-button-1"><img src="<?php bloginfo('stylesheet_directory'); ?>/assets/img/groupplay/thrash.png" alt="Thrash"></button>



                                        </div><!---  Top Content  --->





                                        <div class="ticket-select-info">

                                            <p>Select 5 Numbers</p>

                                        </div>



                                        <div class="main-numbers eurojackpot-main-numbers-main">



                                            <p>1</p>



                                            <div class="eurojackpot-main-numbers eurojackpot-first-ticket eurojackpot-numbers">1</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-first-ticket eurojackpot-numbers">2</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-first-ticket eurojackpot-numbers">3</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-first-ticket eurojackpot-numbers">4</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-first-ticket eurojackpot-numbers">5</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-first-ticket eurojackpot-numbers">6</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-first-ticket eurojackpot-numbers">7</div>

                                            <div class="next-row"></div>

                                            <div class="eurojackpot-main-numbers eurojackpot-first-ticket eurojackpot-numbers">8</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-first-ticket eurojackpot-numbers">9</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-first-ticket eurojackpot-numbers">10</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-first-ticket eurojackpot-numbers">11</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-first-ticket eurojackpot-numbers">12</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-first-ticket eurojackpot-numbers">13</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-first-ticket eurojackpot-numbers">14</div>

                                            <div class="next-row"></div>

                                            <div class="eurojackpot-main-numbers eurojackpot-first-ticket eurojackpot-numbers">15</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-first-ticket eurojackpot-numbers">16</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-first-ticket eurojackpot-numbers">17</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-first-ticket eurojackpot-numbers">18</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-first-ticket eurojackpot-numbers">19</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-first-ticket eurojackpot-numbers">20</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-first-ticket eurojackpot-numbers">21</div>

                                            <div class="next-row"></div>

                                            <div class="eurojackpot-main-numbers eurojackpot-first-ticket eurojackpot-numbers">22</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-first-ticket eurojackpot-numbers">23</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-first-ticket eurojackpot-numbers">24</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-first-ticket eurojackpot-numbers">25</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-first-ticket eurojackpot-numbers">26</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-first-ticket eurojackpot-numbers">27</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-first-ticket eurojackpot-numbers">28</div>

                                            <div class="next-row"></div>

                                            <div class="eurojackpot-main-numbers eurojackpot-first-ticket eurojackpot-numbers">29</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-first-ticket eurojackpot-numbers">30</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-first-ticket eurojackpot-numbers">31</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-first-ticket eurojackpot-numbers">32</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-first-ticket eurojackpot-numbers">33</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-first-ticket eurojackpot-numbers">34</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-first-ticket eurojackpot-numbers">35</div>

                                            <div class="next-row"></div>

                                            <div class="eurojackpot-main-numbers eurojackpot-first-ticket eurojackpot-numbers">36</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-first-ticket eurojackpot-numbers">37</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-first-ticket eurojackpot-numbers">38</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-first-ticket eurojackpot-numbers">39</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-first-ticket eurojackpot-numbers">40</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-first-ticket eurojackpot-numbers">41</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-first-ticket eurojackpot-numbers">42</div>

                                            <div class="next-row"></div>

                                            <div class="eurojackpot-main-numbers eurojackpot-first-ticket eurojackpot-numbers">43</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-first-ticket eurojackpot-numbers">44</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-first-ticket eurojackpot-numbers">45</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-first-ticket eurojackpot-numbers">46</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-first-ticket eurojackpot-numbers">47</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-first-ticket eurojackpot-numbers">48</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-first-ticket eurojackpot-numbers">49</div>

                                            <div class="next-row"></div>

                                            <div class="eurojackpot-main-numbers eurojackpot-first-ticket eurojackpot-numbers">50</div>

                                        </div>



                                        <div class="ticket-select-info-bottom">

                                            <p>Select 2 EuroStars</p>

                                        </div>



                                        <div class="power-numbers">

                                            <div class="round-number eurojackpot-round-number eurojackpot-first-ticket-power eurojackpot-numbers eurojackpot-super">1</div>

                                            <div class="round-number eurojackpot-round-number eurojackpot-first-ticket-power eurojackpot-numbers eurojackpot-super">2</div>

                                            <div class="round-number eurojackpot-round-number eurojackpot-first-ticket-power eurojackpot-numbers eurojackpot-super">3</div>

                                            <div class="round-number eurojackpot-round-number eurojackpot-first-ticket-power eurojackpot-numbers eurojackpot-super">4</div>

                                            <div class="round-number eurojackpot-round-number eurojackpot-first-ticket-power eurojackpot-numbers eurojackpot-super">5</div>

                                            <div class="round-number eurojackpot-round-number eurojackpot-first-ticket-power eurojackpot-numbers eurojackpot-super">6</div>

                                            <div class="round-number eurojackpot-round-number eurojackpot-first-ticket-power eurojackpot-numbers eurojackpot-super">7</div>

                                            <div class="next-row"></div>

                                            <div class="round-number eurojackpot-round-number eurojackpot-first-ticket-power eurojackpot-numbers eurojackpot-super">8</div>

                                            <div class="round-number eurojackpot-round-number eurojackpot-first-ticket-power eurojackpot-numbers eurojackpot-super">9</div>

                                            <div class="round-number eurojackpot-round-number eurojackpot-first-ticket-power eurojackpot-numbers eurojackpot-super">10</div>



                                        </div>





                                    </div><!---  Ticket Holder  --->





                                    <!---  Ticket Holder  --->

                                    <div class="ticket-holder eurojackpot-ticket-holder">



                                        <div class="ticket-header">

                                            <button class="star-button"><img src="<?php bloginfo('stylesheet_directory'); ?>/assets/img/groupplay/star.png" alt="Star"></button>

                                            <button class="quick-pick-button quick-pick-button-2-eurojackpot">QUICK PICK</button>

                                            <button class="thrash-button thrash-button-2"><img src="<?php bloginfo('stylesheet_directory'); ?>/assets/img/groupplay/thrash.png" alt="Thrash"></button>



                                        </div>



                                        <div class="ticket-select-info">

                                            <p>Select 5 Numbers</p>

                                        </div>



                                        <div class="main-numbers eurojackpot-main-numbers-main">



                                            <p>2</p>



                                            <div class="eurojackpot-main-numbers eurojackpot-second-ticket eurojackpot-numbers">1</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-second-ticket eurojackpot-numbers">2</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-second-ticket eurojackpot-numbers">3</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-second-ticket eurojackpot-numbers">4</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-second-ticket eurojackpot-numbers">5</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-second-ticket eurojackpot-numbers">6</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-second-ticket eurojackpot-numbers">7</div>

                                            <div class="next-row"></div>

                                            <div class="eurojackpot-main-numbers eurojackpot-second-ticket eurojackpot-numbers">8</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-second-ticket eurojackpot-numbers">9</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-second-ticket eurojackpot-numbers">10</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-second-ticket eurojackpot-numbers">11</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-second-ticket eurojackpot-numbers">12</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-second-ticket eurojackpot-numbers">13</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-second-ticket eurojackpot-numbers">14</div>

                                            <div class="next-row"></div>

                                            <div class="eurojackpot-main-numbers eurojackpot-second-ticket eurojackpot-numbers">15</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-second-ticket eurojackpot-numbers">16</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-second-ticket eurojackpot-numbers">17</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-second-ticket eurojackpot-numbers">18</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-second-ticket eurojackpot-numbers">19</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-second-ticket eurojackpot-numbers">20</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-second-ticket eurojackpot-numbers">21</div>

                                            <div class="next-row"></div>

                                            <div class="eurojackpot-main-numbers eurojackpot-second-ticket eurojackpot-numbers">22</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-second-ticket eurojackpot-numbers">23</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-second-ticket eurojackpot-numbers">24</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-second-ticket eurojackpot-numbers">25</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-second-ticket eurojackpot-numbers">26</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-second-ticket eurojackpot-numbers">27</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-second-ticket eurojackpot-numbers">28</div>

                                            <div class="next-row"></div>

                                            <div class="eurojackpot-main-numbers eurojackpot-second-ticket eurojackpot-numbers">29</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-second-ticket eurojackpot-numbers">30</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-second-ticket eurojackpot-numbers">31</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-second-ticket eurojackpot-numbers">32</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-second-ticket eurojackpot-numbers">33</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-second-ticket eurojackpot-numbers">34</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-second-ticket eurojackpot-numbers">35</div>

                                            <div class="next-row"></div>

                                            <div class="eurojackpot-main-numbers eurojackpot-second-ticket eurojackpot-numbers">36</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-second-ticket eurojackpot-numbers">37</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-second-ticket eurojackpot-numbers">38</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-second-ticket eurojackpot-numbers">39</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-second-ticket eurojackpot-numbers">40</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-second-ticket eurojackpot-numbers">41</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-second-ticket eurojackpot-numbers">42</div>

                                            <div class="next-row"></div>

                                            <div class="eurojackpot-main-numbers eurojackpot-second-ticket eurojackpot-numbers">43</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-second-ticket eurojackpot-numbers">44</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-second-ticket eurojackpot-numbers">45</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-second-ticket eurojackpot-numbers">46</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-second-ticket eurojackpot-numbers">47</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-second-ticket eurojackpot-numbers">48</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-second-ticket eurojackpot-numbers">49</div>

                                            <div class="next-row"></div>

                                            <div class="eurojackpot-main-numbers eurojackpot-second-ticket eurojackpot-numbers">50</div>

                                        </div>



                                        <div class="ticket-select-info-bottom">

                                            <p>Select 2 EuroStars</p>

                                        </div>



                                        <div class="power-numbers">

                                            <div class="round-number eurojackpot-round-number eurojackpot-second-ticket-power eurojackpot-numbers eurojackpot-super">1</div>

                                            <div class="round-number eurojackpot-round-number eurojackpot-second-ticket-power eurojackpot-numbers eurojackpot-super">2</div>

                                            <div class="round-number eurojackpot-round-number eurojackpot-second-ticket-power eurojackpot-numbers eurojackpot-super">3</div>

                                            <div class="round-number eurojackpot-round-number eurojackpot-second-ticket-power eurojackpot-numbers eurojackpot-super">4</div>

                                            <div class="round-number eurojackpot-round-number eurojackpot-second-ticket-power eurojackpot-numbers eurojackpot-super">5</div>

                                            <div class="round-number eurojackpot-round-number eurojackpot-second-ticket-power eurojackpot-numbers eurojackpot-super">6</div>

                                            <div class="round-number eurojackpot-round-number eurojackpot-second-ticket-power eurojackpot-numbers eurojackpot-super">7</div>

                                            <div class="next-row"></div>

                                            <div class="round-number eurojackpot-round-number eurojackpot-second-ticket-power eurojackpot-numbers eurojackpot-super">8</div>

                                            <div class="round-number eurojackpot-round-number eurojackpot-second-ticket-power eurojackpot-numbers eurojackpot-super">9</div>

                                            <div class="round-number eurojackpot-round-number eurojackpot-second-ticket-power eurojackpot-numbers eurojackpot-super">10</div>

                                        </div>





                                    </div><!---  Ticket Holder  --->



                                    <!---  Ticket Holder  --->

                                    <div class="ticket-holder eurojackpot-ticket-holder">



                                        <div class="ticket-header">

                                            <button class="star-button"><img src="<?php bloginfo('stylesheet_directory'); ?>/assets/img/groupplay/star.png" alt="Star"></button>

                                            <button class="quick-pick-button quick-pick-button-3-eurojackpot">QUICK PICK</button>

                                            <button class="thrash-button thrash-button-3"><img src="<?php bloginfo('stylesheet_directory'); ?>/assets/img/groupplay/thrash.png" alt="Thrash"></button>



                                        </div>



                                        <div class="ticket-select-info">

                                            <p>Select 5 Numbers</p>

                                        </div>



                                        <div class="main-numbers eurojackpot-main-numbers-main">



                                            <p>3</p>



                                            <div class="eurojackpot-main-numbers eurojackpot-third-ticket eurojackpot-numbers">1</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-third-ticket eurojackpot-numbers">2</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-third-ticket eurojackpot-numbers">3</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-third-ticket eurojackpot-numbers">4</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-third-ticket eurojackpot-numbers">5</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-third-ticket eurojackpot-numbers">6</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-third-ticket eurojackpot-numbers">7</div>

                                            <div class="next-row"></div>

                                            <div class="eurojackpot-main-numbers eurojackpot-third-ticket eurojackpot-numbers">8</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-third-ticket eurojackpot-numbers">9</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-third-ticket eurojackpot-numbers">10</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-third-ticket eurojackpot-numbers">11</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-third-ticket eurojackpot-numbers">12</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-third-ticket eurojackpot-numbers">13</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-third-ticket eurojackpot-numbers">14</div>

                                            <div class="next-row"></div>

                                            <div class="eurojackpot-main-numbers eurojackpot-third-ticket eurojackpot-numbers">15</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-third-ticket eurojackpot-numbers">16</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-third-ticket eurojackpot-numbers">17</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-third-ticket eurojackpot-numbers">18</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-third-ticket eurojackpot-numbers">19</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-third-ticket eurojackpot-numbers">20</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-third-ticket eurojackpot-numbers">21</div>

                                            <div class="next-row"></div>

                                            <div class="eurojackpot-main-numbers eurojackpot-third-ticket eurojackpot-numbers">22</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-third-ticket eurojackpot-numbers">23</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-third-ticket eurojackpot-numbers">24</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-third-ticket eurojackpot-numbers">25</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-third-ticket eurojackpot-numbers">26</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-third-ticket eurojackpot-numbers">27</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-third-ticket eurojackpot-numbers">28</div>

                                            <div class="next-row"></div>

                                            <div class="eurojackpot-main-numbers eurojackpot-third-ticket eurojackpot-numbers">29</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-third-ticket eurojackpot-numbers">30</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-third-ticket eurojackpot-numbers">31</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-third-ticket eurojackpot-numbers">32</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-third-ticket eurojackpot-numbers">33</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-third-ticket eurojackpot-numbers">34</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-third-ticket eurojackpot-numbers">35</div>

                                            <div class="next-row"></div>

                                            <div class="eurojackpot-main-numbers eurojackpot-third-ticket eurojackpot-numbers">36</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-third-ticket eurojackpot-numbers">37</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-third-ticket eurojackpot-numbers">38</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-third-ticket eurojackpot-numbers">39</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-third-ticket eurojackpot-numbers">40</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-third-ticket eurojackpot-numbers">41</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-third-ticket eurojackpot-numbers">42</div>

                                            <div class="next-row"></div>

                                            <div class="eurojackpot-main-numbers eurojackpot-third-ticket eurojackpot-numbers">43</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-third-ticket eurojackpot-numbers">44</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-third-ticket eurojackpot-numbers">45</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-third-ticket eurojackpot-numbers">46</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-third-ticket eurojackpot-numbers">47</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-third-ticket eurojackpot-numbers">48</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-third-ticket eurojackpot-numbers">49</div>

                                            <div class="next-row"></div>

                                            <div class="eurojackpot-main-numbers eurojackpot-third-ticket eurojackpot-numbers">50</div>

                                        </div>



                                        <div class="ticket-select-info-bottom">

                                            <p>Select 2 Eurostars</p>

                                        </div>



                                        <div class="power-numbers">

                                            <div class="round-number eurojackpot-round-number eurojackpot-third-ticket-power eurojackpot-numbers eurojackpot-super">1</div>

                                            <div class="round-number eurojackpot-round-number eurojackpot-third-ticket-power eurojackpot-numbers eurojackpot-super">2</div>

                                            <div class="round-number eurojackpot-round-number eurojackpot-third-ticket-power eurojackpot-numbers eurojackpot-super">3</div>

                                            <div class="round-number eurojackpot-round-number eurojackpot-third-ticket-power eurojackpot-numbers eurojackpot-super">4</div>

                                            <div class="round-number eurojackpot-round-number eurojackpot-third-ticket-power eurojackpot-numbers eurojackpot-super">5</div>

                                            <div class="round-number eurojackpot-round-number eurojackpot-third-ticket-power eurojackpot-numbers eurojackpot-super">6</div>

                                            <div class="round-number eurojackpot-round-number eurojackpot-third-ticket-power eurojackpot-numbers eurojackpot-super">7</div>

                                            <div class="next-row"></div>

                                            <div class="round-number eurojackpot-round-number eurojackpot-third-ticket-power eurojackpot-numbers eurojackpot-super">8</div>

                                            <div class="round-number eurojackpot-round-number eurojackpot-third-ticket-power eurojackpot-numbers eurojackpot-super">9</div>

                                            <div class="round-number eurojackpot-round-number eurojackpot-third-ticket-power eurojackpot-numbers eurojackpot-super">10</div>

                                        </div>





                                    </div><!---  Ticket Holder  --->

                                    <!---  Ticket Holder  --->

                                    <div class="ticket-holder eurojackpot-ticket-holder">



                                        <div class="ticket-header">

                                            <button class="star-button"><img src="<?php bloginfo('stylesheet_directory'); ?>/assets/img/groupplay/star.png" alt="Star"></button>

                                            <button class="quick-pick-button quick-pick-button-4-eurojackpot">QUICK PICK</button>

                                            <button class="thrash-button thrash-button-4"><img src="<?php bloginfo('stylesheet_directory'); ?>/assets/img/groupplay/thrash.png" alt="Thrash"></button>



                                        </div>



                                        <div class="ticket-select-info">

                                            <p>Select 5 Numbers</p>

                                        </div>



                                        <div class="main-numbers eurojackpot-main-numbers-main">



                                            <p>4</p>



                                            <div class="eurojackpot-main-numbers eurojackpot-fourth-ticket eurojackpot-numbers">1</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-fourth-ticket eurojackpot-numbers">2</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-fourth-ticket eurojackpot-numbers">3</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-fourth-ticket eurojackpot-numbers">4</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-fourth-ticket eurojackpot-numbers">5</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-fourth-ticket eurojackpot-numbers">6</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-fourth-ticket eurojackpot-numbers">7</div>

                                            <div class="next-row"></div>

                                            <div class="eurojackpot-main-numbers eurojackpot-fourth-ticket eurojackpot-numbers">8</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-fourth-ticket eurojackpot-numbers">9</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-fourth-ticket eurojackpot-numbers">10</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-fourth-ticket eurojackpot-numbers">11</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-fourth-ticket eurojackpot-numbers">12</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-fourth-ticket eurojackpot-numbers">13</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-fourth-ticket eurojackpot-numbers">14</div>

                                            <div class="next-row"></div>

                                            <div class="eurojackpot-main-numbers eurojackpot-fourth-ticket eurojackpot-numbers">15</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-fourth-ticket eurojackpot-numbers">16</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-fourth-ticket eurojackpot-numbers">17</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-fourth-ticket eurojackpot-numbers">18</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-fourth-ticket eurojackpot-numbers">19</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-fourth-ticket eurojackpot-numbers">20</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-fourth-ticket eurojackpot-numbers">21</div>

                                            <div class="next-row"></div>

                                            <div class="eurojackpot-main-numbers eurojackpot-fourth-ticket eurojackpot-numbers">22</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-fourth-ticket eurojackpot-numbers">23</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-fourth-ticket eurojackpot-numbers">24</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-fourth-ticket eurojackpot-numbers">25</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-fourth-ticket eurojackpot-numbers">26</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-fourth-ticket eurojackpot-numbers">27</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-fourth-ticket eurojackpot-numbers">28</div>

                                            <div class="next-row"></div>

                                            <div class="eurojackpot-main-numbers eurojackpot-fourth-ticket eurojackpot-numbers">29</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-fourth-ticket eurojackpot-numbers">30</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-fourth-ticket eurojackpot-numbers">31</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-fourth-ticket eurojackpot-numbers">32</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-fourth-ticket eurojackpot-numbers">33</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-fourth-ticket eurojackpot-numbers">34</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-fourth-ticket eurojackpot-numbers">35</div>

                                            <div class="next-row"></div>

                                            <div class="eurojackpot-main-numbers eurojackpot-fourth-ticket eurojackpot-numbers">36</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-fourth-ticket eurojackpot-numbers">37</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-fourth-ticket eurojackpot-numbers">38</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-fourth-ticket eurojackpot-numbers">39</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-fourth-ticket eurojackpot-numbers">40</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-fourth-ticket eurojackpot-numbers">41</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-fourth-ticket eurojackpot-numbers">42</div>

                                            <div class="next-row"></div>

                                            <div class="eurojackpot-main-numbers eurojackpot-fourth-ticket eurojackpot-numbers">43</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-fourth-ticket eurojackpot-numbers">44</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-fourth-ticket eurojackpot-numbers">45</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-fourth-ticket eurojackpot-numbers">46</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-fourth-ticket eurojackpot-numbers">47</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-fourth-ticket eurojackpot-numbers">48</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-fourth-ticket eurojackpot-numbers">49</div>

                                            <div class="next-row"></div>

                                            <div class="eurojackpot-main-numbers eurojackpot-fourth-ticket eurojackpot-numbers">50</div>

                                        </div>



                                        <div class="ticket-select-info-bottom">

                                            <p>Select 2 EuroStars</p>

                                        </div>



                                        <div class="power-numbers">

                                            <div class="round-number eurojackpot-round-number eurojackpot-fourth-ticket-power eurojackpot-numbers eurojackpot-super">1</div>

                                            <div class="round-number eurojackpot-round-number eurojackpot-fourth-ticket-power eurojackpot-numbers eurojackpot-super">2</div>

                                            <div class="round-number eurojackpot-round-number eurojackpot-fourth-ticket-power eurojackpot-numbers eurojackpot-super">3</div>

                                            <div class="round-number eurojackpot-round-number eurojackpot-fourth-ticket-power eurojackpot-numbers eurojackpot-super">4</div>

                                            <div class="round-number eurojackpot-round-number eurojackpot-fourth-ticket-power eurojackpot-numbers eurojackpot-super">5</div>

                                            <div class="round-number eurojackpot-round-number eurojackpot-fourth-ticket-power eurojackpot-numbers eurojackpot-super">6</div>

                                            <div class="round-number eurojackpot-round-number eurojackpot-fourth-ticket-power eurojackpot-numbers eurojackpot-super">7</div>

                                            <div class="next-row"></div>

                                            <div class="round-number eurojackpot-round-number eurojackpot-fourth-ticket-power eurojackpot-numbers eurojackpot-super">8</div>

                                            <div class="round-number eurojackpot-round-number eurojackpot-fourth-ticket-power eurojackpot-numbers eurojackpot-super">9</div>

                                            <div class="round-number eurojackpot-round-number eurojackpot-fourth-ticket-power eurojackpot-numbers eurojackpot-super">10</div>

                                        </div>





                                    </div><!---  Ticket Holder  --->







                                </div><!---  Main Group  --->



                                <!---  Paste additional here  --->



                                <!---  Top Content  --->

                                <div class="main-group main-group-eurojackpot-tickets additional-tickets additional-jackpot-tickets">

                                    <button class="quick-pick-all quick-pick-all-eurojackpot">QUICK PICK ALL</button>

                                    <button class="clear-all clear-all-eurojackpot">CLEAR ALL</button>



                                    <!---  Ticket Holder  --->

                                    <div class="ticket-holder eurojackpot-ticket-holder">



                                        <div class="ticket-header">

                                            <button class="star-button"><img src="<?php bloginfo('stylesheet_directory'); ?>/assets/img/groupplay/star.png" alt="Star"></button>

                                            <button class="quick-pick-button quick-pick-button-5-eurojackpot">QUICK PICK</button>

                                            <button class="thrash-button thrash-button-5"><img src="<?php bloginfo('stylesheet_directory'); ?>/assets/img/groupplay/thrash.png" alt="Thrash"></button>



                                        </div><!---  Top Content  --->





                                        <div class="ticket-select-info">

                                            <p>Select 5 Numbers</p>

                                        </div>



                                        <div class="main-numbers eurojackpot-main-numbers-main">



                                            <p>5</p>



                                            <div class="eurojackpot-main-numbers eurojackpot-fifth-ticket eurojackpot-numbers">1</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-fifth-ticket eurojackpot-numbers">2</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-fifth-ticket eurojackpot-numbers">3</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-fifth-ticket eurojackpot-numbers">4</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-fifth-ticket eurojackpot-numbers">5</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-fifth-ticket eurojackpot-numbers">6</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-fifth-ticket eurojackpot-numbers">7</div>

                                            <div class="next-row"></div>

                                            <div class="eurojackpot-main-numbers eurojackpot-fifth-ticket eurojackpot-numbers">8</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-fifth-ticket eurojackpot-numbers">9</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-fifth-ticket eurojackpot-numbers">10</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-fifth-ticket eurojackpot-numbers">11</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-fifth-ticket eurojackpot-numbers">12</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-fifth-ticket eurojackpot-numbers">13</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-fifth-ticket eurojackpot-numbers">14</div>

                                            <div class="next-row"></div>

                                            <div class="eurojackpot-main-numbers eurojackpot-fifth-ticket eurojackpot-numbers">15</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-fifth-ticket eurojackpot-numbers">16</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-fifth-ticket eurojackpot-numbers">17</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-fifth-ticket eurojackpot-numbers">18</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-fifth-ticket eurojackpot-numbers">19</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-fifth-ticket eurojackpot-numbers">20</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-fifth-ticket eurojackpot-numbers">21</div>

                                            <div class="next-row"></div>

                                            <div class="eurojackpot-main-numbers eurojackpot-fifth-ticket eurojackpot-numbers">22</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-fifth-ticket eurojackpot-numbers">23</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-fifth-ticket eurojackpot-numbers">24</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-fifth-ticket eurojackpot-numbers">25</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-fifth-ticket eurojackpot-numbers">26</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-fifth-ticket eurojackpot-numbers">27</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-fifth-ticket eurojackpot-numbers">28</div>

                                            <div class="next-row"></div>

                                            <div class="eurojackpot-main-numbers eurojackpot-fifth-ticket eurojackpot-numbers">29</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-fifth-ticket eurojackpot-numbers">30</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-fifth-ticket eurojackpot-numbers">31</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-fifth-ticket eurojackpot-numbers">32</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-fifth-ticket eurojackpot-numbers">33</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-fifth-ticket eurojackpot-numbers">34</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-fifth-ticket eurojackpot-numbers">35</div>

                                            <div class="next-row"></div>

                                            <div class="eurojackpot-main-numbers eurojackpot-fifth-ticket eurojackpot-numbers">36</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-fifth-ticket eurojackpot-numbers">37</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-fifth-ticket eurojackpot-numbers">38</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-fifth-ticket eurojackpot-numbers">39</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-fifth-ticket eurojackpot-numbers">40</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-fifth-ticket eurojackpot-numbers">41</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-fifth-ticket eurojackpot-numbers">42</div>

                                            <div class="next-row"></div>

                                            <div class="eurojackpot-main-numbers eurojackpot-fifth-ticket eurojackpot-numbers">43</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-fifth-ticket eurojackpot-numbers">44</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-fifth-ticket eurojackpot-numbers">45</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-fifth-ticket eurojackpot-numbers">46</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-fifth-ticket eurojackpot-numbers">47</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-fifth-ticket eurojackpot-numbers">48</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-fifth-ticket eurojackpot-numbers">49</div>

                                            <div class="next-row"></div>

                                            <div class="eurojackpot-main-numbers eurojackpot-fifth-ticket eurojackpot-numbers">50</div>

                                        </div>



                                        <div class="ticket-select-info-bottom">

                                            <p>Select 2 EuroStars</p>

                                        </div>



                                        <div class="power-numbers">

                                            <div class="round-number eurojackpot-round-number eurojackpot-fifth-ticket-power eurojackpot-numbers eurojackpot-super">1</div>

                                            <div class="round-number eurojackpot-round-number eurojackpot-fifth-ticket-power eurojackpot-numbers eurojackpot-super">2</div>

                                            <div class="round-number eurojackpot-round-number eurojackpot-fifth-ticket-power eurojackpot-numbers eurojackpot-super">3</div>

                                            <div class="round-number eurojackpot-round-number eurojackpot-fifth-ticket-power eurojackpot-numbers eurojackpot-super">4</div>

                                            <div class="round-number eurojackpot-round-number eurojackpot-fifth-ticket-power eurojackpot-numbers eurojackpot-super">5</div>

                                            <div class="round-number eurojackpot-round-number eurojackpot-fifth-ticket-power eurojackpot-numbers eurojackpot-super">6</div>

                                            <div class="round-number eurojackpot-round-number eurojackpot-fifth-ticket-power eurojackpot-numbers eurojackpot-super">7</div>

                                            <div class="next-row"></div>

                                            <div class="round-number eurojackpot-round-number eurojackpot-fifth-ticket-power eurojackpot-numbers eurojackpot-super">8</div>

                                            <div class="round-number eurojackpot-round-number eurojackpot-fifth-ticket-power eurojackpot-numbers eurojackpot-super">9</div>

                                            <div class="round-number eurojackpot-round-number eurojackpot-fifth-ticket-power eurojackpot-numbers eurojackpot-super">10</div>

                                        </div>





                                    </div><!---  Ticket Holder  --->





                                    <!---  Ticket Holder  --->

                                    <div class="ticket-holder eurojackpot-ticket-holder">



                                        <div class="ticket-header">

                                            <button class="star-button"><img src="<?php bloginfo('stylesheet_directory'); ?>/assets/img/groupplay/star.png" alt="Star"></button>

                                            <button class="quick-pick-button quick-pick-button-6-eurojackpot">QUICK PICK</button>

                                            <button class="thrash-button thrash-button-6"><img src="<?php bloginfo('stylesheet_directory'); ?>/assets/img/groupplay/thrash.png" alt="Thrash"></button>



                                        </div>



                                        <div class="ticket-select-info">

                                            <p>Select 5 Numbers</p>

                                        </div>



                                        <div class="main-numbers eurojackpot-main-numbers-main">



                                            <p>6</p>



                                            <div class="eurojackpot-main-numbers eurojackpot-sixth-ticket eurojackpot-numbers">1</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-sixth-ticket eurojackpot-numbers">2</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-sixth-ticket eurojackpot-numbers">3</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-sixth-ticket eurojackpot-numbers">4</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-sixth-ticket eurojackpot-numbers">5</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-sixth-ticket eurojackpot-numbers">6</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-sixth-ticket eurojackpot-numbers">7</div>

                                            <div class="next-row"></div>

                                            <div class="eurojackpot-main-numbers eurojackpot-sixth-ticket eurojackpot-numbers">8</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-sixth-ticket eurojackpot-numbers">9</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-sixth-ticket eurojackpot-numbers">10</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-sixth-ticket eurojackpot-numbers">11</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-sixth-ticket eurojackpot-numbers">12</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-sixth-ticket eurojackpot-numbers">13</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-sixth-ticket eurojackpot-numbers">14</div>

                                            <div class="next-row"></div>

                                            <div class="eurojackpot-main-numbers eurojackpot-sixth-ticket eurojackpot-numbers">15</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-sixth-ticket eurojackpot-numbers">16</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-sixth-ticket eurojackpot-numbers">17</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-sixth-ticket eurojackpot-numbers">18</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-sixth-ticket eurojackpot-numbers">19</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-sixth-ticket eurojackpot-numbers">20</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-sixth-ticket eurojackpot-numbers">21</div>

                                            <div class="next-row"></div>

                                            <div class="eurojackpot-main-numbers eurojackpot-sixth-ticket eurojackpot-numbers">22</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-sixth-ticket eurojackpot-numbers">23</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-sixth-ticket eurojackpot-numbers">24</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-sixth-ticket eurojackpot-numbers">25</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-sixth-ticket eurojackpot-numbers">26</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-sixth-ticket eurojackpot-numbers">27</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-sixth-ticket eurojackpot-numbers">28</div>

                                            <div class="next-row"></div>

                                            <div class="eurojackpot-main-numbers eurojackpot-sixth-ticket eurojackpot-numbers">29</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-sixth-ticket eurojackpot-numbers">30</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-sixth-ticket eurojackpot-numbers">31</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-sixth-ticket eurojackpot-numbers">32</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-sixth-ticket eurojackpot-numbers">33</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-sixth-ticket eurojackpot-numbers">34</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-sixth-ticket eurojackpot-numbers">35</div>

                                            <div class="next-row"></div>

                                            <div class="eurojackpot-main-numbers eurojackpot-sixth-ticket eurojackpot-numbers">36</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-sixth-ticket eurojackpot-numbers">37</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-sixth-ticket eurojackpot-numbers">38</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-sixth-ticket eurojackpot-numbers">39</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-sixth-ticket eurojackpot-numbers">40</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-sixth-ticket eurojackpot-numbers">41</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-sixth-ticket eurojackpot-numbers">42</div>

                                            <div class="next-row"></div>

                                            <div class="eurojackpot-main-numbers eurojackpot-sixth-ticket eurojackpot-numbers">43</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-sixth-ticket eurojackpot-numbers">44</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-sixth-ticket eurojackpot-numbers">45</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-sixth-ticket eurojackpot-numbers">46</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-sixth-ticket eurojackpot-numbers">47</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-sixth-ticket eurojackpot-numbers">48</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-sixth-ticket eurojackpot-numbers">49</div>

                                            <div class="next-row"></div>

                                            <div class="eurojackpot-main-numbers eurojackpot-sixth-ticket eurojackpot-numbers">50</div>

                                        </div>



                                        <div class="ticket-select-info-bottom">

                                            <p>Select 2 EuroStars</p>

                                        </div>



                                        <div class="power-numbers">

                                            <div class="round-number eurojackpot-round-number eurojackpot-sixth-ticket-power eurojackpot-numbers eurojackpot-super">1</div>

                                            <div class="round-number eurojackpot-round-number eurojackpot-sixth-ticket-power eurojackpot-numbers eurojackpot-super">2</div>

                                            <div class="round-number eurojackpot-round-number eurojackpot-sixth-ticket-power eurojackpot-numbers eurojackpot-super">3</div>

                                            <div class="round-number eurojackpot-round-number eurojackpot-sixth-ticket-power eurojackpot-numbers eurojackpot-super">4</div>

                                            <div class="round-number eurojackpot-round-number eurojackpot-sixth-ticket-power eurojackpot-numbers eurojackpot-super">5</div>

                                            <div class="round-number eurojackpot-round-number eurojackpot-sixth-ticket-power eurojackpot-numbers eurojackpot-super">6</div>

                                            <div class="round-number eurojackpot-round-number eurojackpot-sixth-ticket-power eurojackpot-numbers eurojackpot-super">7</div>

                                            <div class="next-row"></div>

                                            <div class="round-number eurojackpot-round-number eurojackpot-sixth-ticket-power eurojackpot-numbers eurojackpot-super">8</div>

                                            <div class="round-number eurojackpot-round-number eurojackpot-sixth-ticket-power eurojackpot-numbers eurojackpot-super">9</div>

                                            <div class="round-number eurojackpot-round-number eurojackpot-sixth-ticket-power eurojackpot-numbers eurojackpot-super">10</div>

                                        </div>





                                    </div><!---  Ticket Holder  --->



                                    <!---  Ticket Holder  --->

                                    <div class="ticket-holder eurojackpot-ticket-holder">



                                        <div class="ticket-header">

                                            <button class="star-button"><img src="<?php bloginfo('stylesheet_directory'); ?>/assets/img/groupplay/star.png" alt="Star"></button>

                                            <button class="quick-pick-button quick-pick-button-7-eurojackpot">QUICK PICK</button>

                                            <button class="thrash-button thrash-button-7"><img src="<?php bloginfo('stylesheet_directory'); ?>/assets/img/groupplay/thrash.png" alt="Thrash"></button>



                                        </div>



                                        <div class="ticket-select-info">

                                            <p>Select 5 Numbers</p>

                                        </div>



                                        <div class="main-numbers eurojackpot-main-numbers-main">



                                            <p>7</p>



                                            <div class="eurojackpot-main-numbers eurojackpot-seventh-ticket eurojackpot-numbers">1</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-seventh-ticket eurojackpot-numbers">2</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-seventh-ticket eurojackpot-numbers">3</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-seventh-ticket eurojackpot-numbers">4</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-seventh-ticket eurojackpot-numbers">5</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-seventh-ticket eurojackpot-numbers">6</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-seventh-ticket eurojackpot-numbers">7</div>

                                            <div class="next-row"></div>

                                            <div class="eurojackpot-main-numbers eurojackpot-seventh-ticket eurojackpot-numbers">8</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-seventh-ticket eurojackpot-numbers">9</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-seventh-ticket eurojackpot-numbers">10</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-seventh-ticket eurojackpot-numbers">11</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-seventh-ticket eurojackpot-numbers">12</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-seventh-ticket eurojackpot-numbers">13</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-seventh-ticket eurojackpot-numbers">14</div>

                                            <div class="next-row"></div>

                                            <div class="eurojackpot-main-numbers eurojackpot-seventh-ticket eurojackpot-numbers">15</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-seventh-ticket eurojackpot-numbers">16</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-seventh-ticket eurojackpot-numbers">17</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-seventh-ticket eurojackpot-numbers">18</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-seventh-ticket eurojackpot-numbers">19</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-seventh-ticket eurojackpot-numbers">20</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-seventh-ticket eurojackpot-numbers">21</div>

                                            <div class="next-row"></div>

                                            <div class="eurojackpot-main-numbers eurojackpot-seventh-ticket eurojackpot-numbers">22</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-seventh-ticket eurojackpot-numbers">23</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-seventh-ticket eurojackpot-numbers">24</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-seventh-ticket eurojackpot-numbers">25</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-seventh-ticket eurojackpot-numbers">26</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-seventh-ticket eurojackpot-numbers">27</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-seventh-ticket eurojackpot-numbers">28</div>

                                            <div class="next-row"></div>

                                            <div class="eurojackpot-main-numbers eurojackpot-seventh-ticket eurojackpot-numbers">29</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-seventh-ticket eurojackpot-numbers">30</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-seventh-ticket eurojackpot-numbers">31</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-seventh-ticket eurojackpot-numbers">32</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-seventh-ticket eurojackpot-numbers">33</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-seventh-ticket eurojackpot-numbers">34</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-seventh-ticket eurojackpot-numbers">35</div>

                                            <div class="next-row"></div>

                                            <div class="eurojackpot-main-numbers eurojackpot-seventh-ticket eurojackpot-numbers">36</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-seventh-ticket eurojackpot-numbers">37</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-seventh-ticket eurojackpot-numbers">38</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-seventh-ticket eurojackpot-numbers">39</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-seventh-ticket eurojackpot-numbers">40</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-seventh-ticket eurojackpot-numbers">41</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-seventh-ticket eurojackpot-numbers">42</div>

                                            <div class="next-row"></div>

                                            <div class="eurojackpot-main-numbers eurojackpot-seventh-ticket eurojackpot-numbers">43</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-seventh-ticket eurojackpot-numbers">44</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-seventh-ticket eurojackpot-numbers">45</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-seventh-ticket eurojackpot-numbers">46</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-seventh-ticket eurojackpot-numbers">47</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-seventh-ticket eurojackpot-numbers">48</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-seventh-ticket eurojackpot-numbers">49</div>

                                            <div class="next-row"></div>

                                            <div class="eurojackpot-main-numbers eurojackpot-seventh-ticket eurojackpot-numbers">50</div>

                                        </div>



                                        <div class="ticket-select-info-bottom">

                                            <p>Select 2 EuroStars</p>

                                        </div>



                                        <div class="power-numbers">

                                            <div class="round-number eurojackpot-round-number eurojackpot-seventh-ticket-power eurojackpot-numbers eurojackpot-super">1</div>

                                            <div class="round-number eurojackpot-round-number eurojackpot-seventh-ticket-power eurojackpot-numbers eurojackpot-super">2</div>

                                            <div class="round-number eurojackpot-round-number eurojackpot-seventh-ticket-power eurojackpot-numbers eurojackpot-super">3</div>

                                            <div class="round-number eurojackpot-round-number eurojackpot-seventh-ticket-power eurojackpot-numbers eurojackpot-super">4</div>

                                            <div class="round-number eurojackpot-round-number eurojackpot-seventh-ticket-power eurojackpot-numbers eurojackpot-super">5</div>

                                            <div class="round-number eurojackpot-round-number eurojackpot-seventh-ticket-power eurojackpot-numbers eurojackpot-super">6</div>

                                            <div class="round-number eurojackpot-round-number eurojackpot-seventh-ticket-power eurojackpot-numbers eurojackpot-super">7</div>

                                            <div class="next-row"></div>

                                            <div class="round-number eurojackpot-round-number eurojackpot-seventh-ticket-power eurojackpot-numbers eurojackpot-super">8</div>

                                            <div class="round-number eurojackpot-round-number eurojackpot-seventh-ticket-power eurojackpot-numbers eurojackpot-super">9</div>

                                            <div class="round-number eurojackpot-round-number eurojackpot-seventh-ticket-power eurojackpot-numbers eurojackpot-super">10</div>

                                        </div>





                                    </div><!---  Ticket Holder  --->

                                    <!---  Ticket Holder  --->

                                    <div class="ticket-holder eurojackpot-ticket-holder">



                                        <div class="ticket-header">

                                            <button class="star-button"><img src="<?php bloginfo('stylesheet_directory'); ?>/assets/img/groupplay/star.png" alt="Star"></button>

                                            <button class="quick-pick-button quick-pick-button-8-eurojackpot">QUICK PICK</button>

                                            <button class="thrash-button thrash-button-8"><img src="<?php bloginfo('stylesheet_directory'); ?>/assets/img/groupplay/thrash.png" alt="Thrash"></button>



                                        </div>



                                        <div class="ticket-select-info">

                                            <p>Select 5 Numbers</p>

                                        </div>



                                        <div class="main-numbers eurojackpot-main-numbers-main">



                                            <p>8</p>



                                            <div class="eurojackpot-main-numbers eurojackpot-eight-ticket eurojackpot-numbers">1</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-eight-ticket eurojackpot-numbers">2</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-eight-ticket eurojackpot-numbers">3</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-eight-ticket eurojackpot-numbers">4</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-eight-ticket eurojackpot-numbers">5</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-eight-ticket eurojackpot-numbers">6</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-eight-ticket eurojackpot-numbers">7</div>

                                            <div class="next-row"></div>

                                            <div class="eurojackpot-main-numbers eurojackpot-eight-ticket eurojackpot-numbers">8</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-eight-ticket eurojackpot-numbers">9</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-eight-ticket eurojackpot-numbers">10</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-eight-ticket eurojackpot-numbers">11</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-eight-ticket eurojackpot-numbers">12</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-eight-ticket eurojackpot-numbers">13</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-eight-ticket eurojackpot-numbers">14</div>

                                            <div class="next-row"></div>

                                            <div class="eurojackpot-main-numbers eurojackpot-eight-ticket eurojackpot-numbers">15</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-eight-ticket eurojackpot-numbers">16</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-eight-ticket eurojackpot-numbers">17</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-eight-ticket eurojackpot-numbers">18</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-eight-ticket eurojackpot-numbers">19</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-eight-ticket eurojackpot-numbers">20</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-eight-ticket eurojackpot-numbers">21</div>

                                            <div class="next-row"></div>

                                            <div class="eurojackpot-main-numbers eurojackpot-eight-ticket eurojackpot-numbers">22</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-eight-ticket eurojackpot-numbers">23</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-eight-ticket eurojackpot-numbers">24</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-eight-ticket eurojackpot-numbers">25</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-eight-ticket eurojackpot-numbers">26</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-eight-ticket eurojackpot-numbers">27</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-eight-ticket eurojackpot-numbers">28</div>

                                            <div class="next-row"></div>

                                            <div class="eurojackpot-main-numbers eurojackpot-eight-ticket eurojackpot-numbers">29</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-eight-ticket eurojackpot-numbers">30</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-eight-ticket eurojackpot-numbers">31</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-eight-ticket eurojackpot-numbers">32</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-eight-ticket eurojackpot-numbers">33</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-eight-ticket eurojackpot-numbers">34</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-eight-ticket eurojackpot-numbers">35</div>

                                            <div class="next-row"></div>

                                            <div class="eurojackpot-main-numbers eurojackpot-eight-ticket eurojackpot-numbers">36</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-eight-ticket eurojackpot-numbers">37</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-eight-ticket eurojackpot-numbers">38</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-eight-ticket eurojackpot-numbers">39</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-eight-ticket eurojackpot-numbers">40</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-eight-ticket eurojackpot-numbers">41</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-eight-ticket eurojackpot-numbers">42</div>

                                            <div class="next-row"></div>

                                            <div class="eurojackpot-main-numbers eurojackpot-eight-ticket eurojackpot-numbers">43</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-eight-ticket eurojackpot-numbers">44</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-eight-ticket eurojackpot-numbers">45</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-eight-ticket eurojackpot-numbers">46</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-eight-ticket eurojackpot-numbers">47</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-eight-ticket eurojackpot-numbers">48</div>

                                            <div class="eurojackpot-main-numbers eurojackpot-eight-ticket eurojackpot-numbers">49</div>

                                            <div class="next-row"></div>

                                            <div class="eurojackpot-main-numbers eurojackpot-eight-ticket eurojackpot-numbers">50</div>

                                        </div>



                                        <div class="ticket-select-info-bottom">

                                            <p>Select 2 EuroStars</p>

                                        </div>



                                        <div class="power-numbers">

                                            <div class="round-number eurojackpot-round-number eurojackpot-eight-ticket-power eurojackpot-numbers eurojackpot-super">1</div>

                                            <div class="round-number eurojackpot-round-number eurojackpot-eight-ticket-power eurojackpot-numbers eurojackpot-super">2</div>

                                            <div class="round-number eurojackpot-round-number eurojackpot-eight-ticket-power eurojackpot-numbers eurojackpot-super">3</div>

                                            <div class="round-number eurojackpot-round-number eurojackpot-eight-ticket-power eurojackpot-numbers eurojackpot-super">4</div>

                                            <div class="round-number eurojackpot-round-number eurojackpot-eight-ticket-power eurojackpot-numbers eurojackpot-super">5</div>

                                            <div class="round-number eurojackpot-round-number eurojackpot-eight-ticket-power eurojackpot-numbers eurojackpot-super">6</div>

                                            <div class="round-number eurojackpot-round-number eurojackpot-eight-ticket-power eurojackpot-numbers eurojackpot-super">7</div>

                                            <div class="next-row"></div>

                                            <div class="round-number eurojackpot-round-number eurojackpot-eight-ticket-power eurojackpot-numbers eurojackpot-super">8</div>

                                            <div class="round-number eurojackpot-round-number eurojackpot-eight-ticket-power eurojackpot-numbers eurojackpot-super">9</div>

                                            <div class="round-number eurojackpot-round-number eurojackpot-eight-ticket-power eurojackpot-numbers eurojackpot-super">10</div>

                                        </div>





                                    </div><!---  Ticket Holder  --->







                                </div><!---  Main Group  --->



                                <!---  additional  --->



                            </div>

                        </div>

                    </div>



                </div><!---  Main Teamplay  --->



                <div class="col-sm-3 teamplay-sidebar">

                    <button id="group-step-2">2</button>



                    <div class="question-2"><i class="fa fa-question-circle"></i></div>



                    <div class="panel panel-default question-2-panel">

                        <div class="panel-heading">

                            <h3 class="panel-title">Information</h3>

                        </div>

                        <div class="panel-body">

                            You can either choose to participate only in the next upcoming Draw or try a Multi-Draw or Subscription and get higher discount per draw.

                        </div>

                    </div>



                    <img src="<?php bloginfo('stylesheet_directory'); ?>/assets/img/groupplay/arrow-down.png" alt="next" class="arrow-down">

                    <h5>Choose Number of Draws</h5>



                    <div class="sidebar-arrow sidebar-arrow-1" data-discount="0" data-price="<?= $oneDrawPrice ?>" data-draws="1">

                        <div class="arrow-left arrow-left-1"></div>

                        <p class="ticket-amount ticket-amount-1 one-digit">1</p>

                        <p class="ticket-info ticket-info-1">

                            &euro;<?= $oneDrawPrice ?> / Line <br> <span class="bluer bluer1">Regular Price</span>

                        </p>

                        <button id="option1" class="sidebar-button"></button>

                    </div>





                    <div class="sidebar-arrow sidebar-arrow-2" data-discount="0.05" data-price="<?= round($fourDrawsPrice/4, 2) ?>" data-discounted="0.35" data-draws="4">

                        <div class="arrow-left arrow-left-2"></div>

                        <p class="ticket-amount ticket-amount-2 one-digit">4</p>

                        <p class="ticket-info ticket-info-2">

                            &euro;<?= round($fourDrawsPrice/4, 2) ?> / Line <br> <span class="bluer bluer2">Save 5%</span>

                        </p>

                        <button id="option2" class="sidebar-button"></button>

                    </div>



                    <div class="sidebar-arrow sidebar-arrow-3" data-discount="0.1" data-price="<?= round($eightDrawsPrice/8, 2) ?>" data-discounted="0.7" data-draws="8">

                        <div class="arrow-left arrow-left-3"></div>

                        <p class="ticket-amount ticket-amount-3">8</p>

                        <p class="ticket-info ticket-info-3">

                            &euro;<?= round($eightDrawsPrice/8, 2) ?> / Line <br> <span class="bluer bluer3">Save 10%</span>

                        </p>

                        <button id="option3" class="sidebar-button"></button>

                    </div>



                    <div class="sidebar-arrow sidebar-arrow-4" data-discount="0.15" data-price="<?= round($twentySixDrawsPrice/26, 2) ?>" data-discounted="1.05" data-draws="26">

                        <div class="arrow-left arrow-left-4"></div>

                        <p class="ticket-amount ticket-amount-4">26</p>

                        <p class="ticket-info ticket-info-4">

                            &euro;<?= round($twentySixDrawsPrice/26, 2) ?> / Line <br> <span class="bluer bluer4">Save 15%</span>

                        </p>

                        <button id="option4" class="sidebar-button"></button>

                    </div>



                    <div class="sidebar-arrow sidebar-arrow-5" data-discount="0.20" data-price="5.6" data-discounted="1.40" data-draws="1">

                        <div class="arrow-left arrow-left-5"></div>

                        <p class="ticket-amount ticket-amount-5 ticket-amount-absolute">SUBSCRIBE</p>

                        <p class="ticket-info ticket-info-5">

                            5.60 / Line <span class="bluer bluer5">Save 20%</span>

                        </p>

                        <button id="option5" class="sidebar-button"></button>

                    </div>



                    <div class="billing-period">

                        <p class="billing-period-title">BILLING PERIOD</p>



                        <div class="positioning"><p>Every 1 Week</p><button id="sub-1" class="sidebar-button"></button></div>



                        <div class="positioning"><p>Every 2 Weeks</p><button id="sub-2" class="sidebar-button"></button></div>



                        <div class="positioning"><p>Every 4 Weeks</p><button id="sub-3" class="sidebar-button"></button></div>



                    </div>





                    <div class="selected-information">

                        <p class="get-ticket">Get Your Ticket</p>

                        <p>Single Lines: <span id="number-of-single-lines">0</span></p>

                        <p>Draws: <span id="number-of-draws">0</span></p>

                        <p>Billing Period: <span id="number-of-weeks">1</span>Week</p>

                        <p class="total-discount">Total Discount: -&euro;<span id="number-discount">0.00</span>&nbsp;(<span class="percentage">0</span>%)</p>

                        <button id="group-step-3">3</button>

                        <img src="<?php bloginfo('stylesheet_directory'); ?>/assets/img/groupplay/arrow-down.png" alt="next" class="arrow-down-third">

                    </div>



                    <div class="button-div personal">

                        <div class="total-price-holder">

                            <p><?= $euroJackpotLotto->LotteryCurrency2; ?>0</p>

                        </div>

                        <p>BUY TICKET</p>

                    </div>



                </div><!--  sidebar  -->

            </div><!---  main row  --->

        </div><!---  main conainer  --->

    </section>



    <section id="group-benefits">

        <div class="container">

            <div class="row">

                <div class="col-sm-4 benefit">



                    <img src="<?php bloginfo('stylesheet_directory'); ?>/assets/img/groupplay/shield20.png" alt="Shield">



                    <div class="benefit-text">

                        <p class="benefit-title">Safety & Security</p>

                        <p>JinniLotto guarantees its customers&apos; safety and security - your protection is our utmost value.</p>

                    </div>



                </div>

                <div class="col-sm-4 benefit">

                    <img src="<?php bloginfo('stylesheet_directory'); ?>/assets/img/groupplay/scan-ticket.png" alt="Scan Ticket">



                    <div class="benefit-text">

                        <p class="benefit-title">Safety & Security</p>

                        <p>Every ticket you purchase will be bought in the proper lottery jurisdiction and scanned for your convenience.</p>

                    </div>

                </div>

                <div class="col-sm-4 benefit guarantee">

                    <img src="<?php bloginfo('stylesheet_directory'); ?>/assets/img/groupplay/satisfaction.png" alt="Satisfaction Guarantee">

                </div>

            </div>

        </div>

    </section>







    <!---================  Promos Start Here

    =======================================================================-->





    <div class="container-fluid">

        <div class="row">

            <div class="col-sm-12 dropper">

                <p><i class="fa fa-chevron-down"></i>&nbsp;Show More Details About The Draw&nbsp;<i class="fa fa-chevron-down"></i></p>

            </div>

        </div>

    </div>





    <div class="droppable-wrapper">





        <!---  MegaMillion  --->

        <section id="group-play-promo" class="promo-megamillion group-play-promo">



            <!---  First Promo  --->

            <div class="container promo-1">

                <div class="row">

                    <img id="matters" src="<?php echo $eurojackpot_image_1; ?> ">



                    <p class="lead"><?php echo $eurojackpot_title_1; ?> </p>

                    <hr>

                    <p><?php echo $eurojackpot_text_1; ?> </p>

                </div>

            </div><!---  First Promo  --->



            <!---  Second Promo  --->

            <div class="container promo-2">

                <div class="row">

                    <img id="seven" src="<?php echo $eurojackpot_image_2; ?> ">



                    <p class="lead"><?php echo $eurojackpot_title_2; ?> </p>

                    <hr>

                    <p><?php echo $eurojackpot_text_2; ?> </p>

                </div>

            </div><!---  Second Promo  --->



            <!---  Third Promo  --->

            <div class="container promo-3">

                <div class="row">

                    <img id="eurojackpot-tips" src="<?php echo $eurojackpot_image_3; ?> ">



                    <p class="lead"><?php echo $eurojackpot_title_3; ?> </p>

                    <hr>

                    <p><?php echo $eurojackpot_text_3; ?> </p>

                </div>

            </div><!---  Third Promo  --->



        </section><!---  MegaMillion  --->













        <!---  eurojackpot and Mega Million  --->

        <section id="table-mega-power">



            <!---  Table Header and Images  --->

            <div class="group-table-container">

                <div class="group-table-image">

                    <img src="<?php bloginfo('stylesheet_directory'); ?>/assets/img/groupplay/eurojackpot-table.png" alt="eurojackpot">

                </div>



                <div class="group-table-versus">

                    <p>vs</p>

                </div>



                <div class="group-table-image">

                    <img src="<?php bloginfo('stylesheet_directory'); ?>/assets/img/groupplay/euromillion-table.png" alt="Mega Million">

                </div>

            </div><!---  Table Header and Images  --->



            <!--  Table Body  -->

            <div class="group-table">



                <div class="side-table-column">

                    <div class="table-row-regular"><p>5 of 50 + 2 of 10 Eurorooms</p></div>

                    <div class="table-row-stripe"><p>&euro; 10,000,000</p></div>

                    <div class="table-row-regular"><p>&euro; 46,000,000</p></div>

                    <div class="table-row-stripe"><p>1:12</p></div>

                    <div class="table-row-regular"><p>&euro;5.9</p></div>

                    <div class="table-row-stripe"><p>2</p></div>

                    <div class="table-row-regular"><p>Friday</p></div>

                </div>



                <div class="mid-table-column">

                    <div class="table-row-regular"><p>Number election</p></div>

                    <div class="table-row-stripe"><p>Starting Jackpot</p></div>

                    <div class="table-row-regular"><p>Jackpot Record</p></div>

                    <div class="table-row-stripe"><p>Winning Odds</p></div>

                    <div class="table-row-regular"><p>Price Per Line</p></div>

                    <div class="table-row-stripe"><p>Minimum Lines</p></div>

                    <div class="table-row-regular"><p>Draw Days</p></div>

                </div>



                <div class="side-table-column">

                    <div class="table-row-regular"><p>5 of 50 + 2 of 11 Lucky Stars</p></div>

                    <div class="table-row-stripe"><p>&euro;15,000,000</p></div>

                    <div class="table-row-regular"><p>&euro;190,000,000</p></div>

                    <div class="table-row-stripe"><p>1:13</p></div>

                    <div class="table-row-regular"><p>&euro;4.9</p></div>

                    <div class="table-row-stripe"><p>1</p></div>

                    <div class="table-row-regular"><p>Wednesday And Saturday</p></div>

                </div>



            </div><!--  Table Body  -->



        </section><!---  eurojackpot and Mega Million  --->





    </div>



<!-- Custom Lotto JS -->

<!-- <script src="assets/js/functions-eurojackpot.js"></script> -->



<?php



get_footer();

