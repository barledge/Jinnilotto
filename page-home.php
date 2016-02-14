

<?php

/*

  Template Name: Home Page

 */



// -----Header Area Stuff



use WegeTech\LottoYard\Model\Draw;

use WegeTech\LottoYard\Service;



$header_text                                =   get_field('header_text');

$online_users_desktop_stats                 =   get_field('online_users_desktop_stats');

$total_jackpots_desktop_stats               =   get_field('total_jackpots_desktop_stats');

$participating_tickets_desktop_stats        =   get_field('participating_tickets_desktop_stats');



// -----How It Works Steps

$how_it_works_first_heading                 =   get_field('how_it_works_first_heading');

$how_it_works_first_text                    =   get_field('how_it_works_first_text');

$how_it_works_first_image                   =   get_field('how_it_works_first_image');

$how_it_works_second_heading                =   get_field('how_it_works_second_heading');

$how_it_works_second_text                   =   get_field('how_it_works_second_text');

$how_it_works_second_image                  =   get_field('how_it_works_second_image');

$how_it_works_third_heading                 =   get_field('how_it_works_third_heading');

$how_it_works_third_text                    =   get_field('how_it_works_third_text');

$how_it_works_third_image                   =   get_field('how_it_works_third_image');

$how_it_works_fourth_heading                =   get_field('how_it_works_fourth_heading');

$how_it_works_fourth_text                   =   get_field('how_it_works_fourth_text');

$how_it_works_fourth_image                  =   get_field('how_it_works_fourth_image');



//----- Benefts Section



//Title

$benefits_section_title                     =   get_field('benefits_section_title');



//First Benefit

$first_benefit_image                        =   get_field('first_benefit_image');

$first_benefit_title                        =   get_field('first_benefit_title');

$first_benefit_text                         =   get_field('first_benefit_text');



//Second Benefit

$second_benefit_image                       =   get_field('second_benefit_image');

$second_benefit_title                       =   get_field('second_benefit_title');

$second_benefit_text                        =   get_field('second_benefit_text');



//Third Benefit

$third_benefit_image                        =   get_field('third_benefit_image');

$third_benefit_title                        =   get_field('third_benefit_title');

$third_benefit_text                         =   get_field('third_benefit_text');



//Fourth Benefit

$fourth_benefit_image                       =   get_field('fourth_benefit_image');

$fourth_benefit_title                       =   get_field('fourth_benefit_title');

$fourth_benefit_text                        =   get_field('fourth_benefit_text');



//----- Testimonials

$latest_winners_header                      =   get_field('latest_winners_header');



//First Testimonial

$first_testimonial_text                     =   get_field('first_testimonial_text');

$first_testimonial_winner_name              =   get_field('first_testimonial_winner_name');

$first_testimonial_winner_occupation        =   get_field('first_testimonial_winner_occupation');



//Second Testimonial

$second_testimonial_text                    =   get_field('second_testimonial_text');

$second_testimonial_winner_name             =   get_field('second_testimonial_winner_name');

$second_testimonial_winner_occupation       =   get_field('second_testimonial_winner_occupation');



//Third Testimonial

$third_testimonial_text                     =   get_field('third_testimonial_text');

$third_testimonial_winner_name              =   get_field('third_testimonial_winner_name');

$third_testimonial_winner_occupation        =   get_field('third_testimonial_winner_occupation');



//----- Winners

$winner_image                               =   get_field('winner_image');

$winner_name                                =   get_field('winner_name');

$winner_country                             =   get_field('winner_country');

$winner_currency                            =   get_field('winner_currency');

$winner_total_prize                         =   get_field('winner_total_prize');

$winner_game_played                         =   get_field('winner_game_played');





//Winners Totals

$winners_totals                             =   get_field('winners_totals');



global /** @var Service $lottoService */

$lottoService;

$response = $lottoService->getAllDraws();

/** @var Draw[] $drawsData */

$drawsData = $response->data;



/**

 * @param Draw[] $draws

 * @return Draw

 */

function getBiggestDraw($draws){

    $biggestDraw = $draws[0];

    foreach ($draws as $draw) {

        if($draw->Jackpot > $biggestDraw->Jackpot){

            $biggestDraw = $draw;

        }

    }



    return $biggestDraw;

}



/**

 * @param \WegeTech\LottoYard\Model\LottoResult[] $results

 * @return \WegeTech\LottoYard\Model\LottoResult[]

 */

function latestResults($results)

{

    uasort($results, 'drawDateSort');



    return $results;

}



/**

 * @param Draw[] $draws

 * @return float

 */

function getTotalDrawSum($draws){

    $sum = 0;

    foreach ($draws as $draw) {

        $sum += $draw->Jackpot;

    }



    return round($sum/1000000);

}



function getTotalUsers(){

    $result = count_users();



    return $result['total_users'];

}



/**

 * @param \WegeTech\LottoYard\Model\LottoResult $a

 * @param \WegeTech\LottoYard\Model\LottoResult $b

 * @return int

 */

function drawDateSort($a, $b) {

    if ($a->DrawDate == $b->DrawDate) {

        return 0;

    }



    return ($a->DrawDate < $b->DrawDate) ? -1 : 1;

}



$lastResults = latestResults($lottoService->getLottoResults()->data);



$bestDraw = getBiggestDraw($drawsData);

$bestDrawLotteryId = $bestDraw->LotteryTypeId;

/*echo "<pre>";
print_r($bestDraw);
exit;*/



get_header();

?>



<script type="text/javascript" src="//jinnilotto.com/wp-content/themes/jinni-lotto/assets/js/jquery.countdown.js"></script>



<!---================  Hero Area



=======================================================================-->



<?php 

    if(($bestDraw->LotteryName) == PowerBall){

        $bgClass = 'haPowerBall';

    } elseif (($bestDraw->LotteryName) == MegaMillions){

        $bgClass = 'haMegaMillion';

    }elseif (($bestDraw->LotteryName) == EuroMillions){

        $bgClass = 'haEuroMillion';

    }elseif (($bestDraw->LotteryName) == EuroJackpot){

        $bgClass = 'haEuroJackpot';

    }

?>

<section id="hero-area" class="<?php echo $bgClass?>"><!-- .haMegaMillion.haEuroMillion.haPowerBall.haEuroJackpot -->





    <div class="container reseet">

        <div class="row">

            <div class="col-sm-6 header-countdown">

                <!--Title-->

                <h4><?php echo $header_text; ?></h4>

                <p class="best-draw-name"><?= $bestDraw->LotteryName ?></p>

                <h1><?= $bestDraw->LotteryCurrency2 ?><?= round($bestDraw->Jackpot/1000000, 2) ?> Million</h1>

                <!--Countdown Timer-->

                <div class="header-countdown-time">

                    <i class="fa fa-clock-o"></i>

                    <p id="header-countdown-clock"></p>

                    <h6>days hrs min sec</h6>

                </div>

                <script type="text/javascript">

                    $("#header-countdown-clock").countdown("<?= date("m/d/Y H:i:s" , strtotime($bestDraw->DrawDate)) ?>", function(event) {

                        $(this).text(

                            event.strftime('%D:%H:%M:%S')

                        );

                    });

                </script>

                    <!--Call to action buttons-->

                    <div class="header-buttons">

                        <button onclick="location.href='<?php bloginfo('url'); ?>/<?= $bestDraw->LotteryName; ?>-ticket';" id="header-play-now" class="hvr-buzz-out">CHOOSE NUMBERS</button>

                        <p>Or</p>

                        <a href="javascript:void(0)"><button id="header-quick-play" class="hvr-buzz-out" data-lottery-type-id="<?php echo $bestDrawLotteryId; ?>">QUICK BUY <br><span class="smaller">5 Tickets</span><span class="absolute-tickets">5 Tickets</span></button></a>

                    </div>

            </div><!--col-md-5-->

            <div class="col-sm-4 col-sm-offset-2 header-statistics">

                <div class="online-users relative">

                    <h4>Online Users</h4>

                    <img class="online-user-image" src="<?php bloginfo('stylesheet_directory'); ?>/assets/img/icon-online-users.png" alt="Users:">

                    <p class="absolute online-users-absolute iCount" data-value="<?= getTotalUsers() + '10000'?>"></p>

                    <h3 class="million">Millions</h3>

                </div>

                <hr>

                <div class="online-users relative">

                    <h4>Total Jackpots</h4>

                    <img class="moneybag" src="<?php bloginfo('stylesheet_directory'); ?>/assets/img/icon-total-jackpots.png" alt="Jp:">

                    <p class="absolute iCount2" data-value="<?= getTotalDrawSum($drawsData)?>"></p>

                </div>

                <hr>

                <div class="online-users relative">

                    <h4>Participating Tickets</h4>

                    <img class="" src="<?php bloginfo('stylesheet_directory'); ?>/assets/img/icon-participating-tickets.png" alt="Users:">

                    <p class="absolute iCount" data-value="<?php echo $participating_tickets_desktop_stats; ?>"></p>

                </div>

            </div>

        </div><!--Row-->

    </div><!--Container-->

</section>



<section id="upcoming-draws">



    <div class="container upcoming-draws">

        <div class="row">

            <h4>Upcoming Draws</h4>

            <p class="absolute">Sort by:</p>

            <button id="sort-time" class="hvr-grow-shadow"><img src="<?php bloginfo('stylesheet_directory'); ?>/assets/img/icon-time.png" alt="Hrs">TIME</button>

            <button id="sort-jackpot" class="hvr-grow-shadow"><img src="<?php bloginfo('stylesheet_directory'); ?>/assets/img/icon-moneybag.png" alt="$">JACKPOT</button>



        </div>

    </div>



    <h5>Jackpot</h5>

    <h6><i class="fa fa-clock-o"></i>Next Draw</h6>



</section>



<section id="games">



    <div class="all-games-wrapper">

        <!---All Games -->

        <?php /** @var Draw $item */

        foreach ($drawsData as $item) :?>

            <div class="container container-game">

                <div class="row game">



                    <!--container image holder-->

                    <?php list($imageClass, $countdownClass, $gameLink) = resolveLottoImage($item->LotteryName);?>

                    <div id="<?= $imageClass ?>" class="col-sm-2">

                    </div><!--container image holder-->



                    <!--Name of the game and prize-->

                    <div class="col-sm-3 name-and-prize">

                        <h5><?= $item->LotteryName?></h5>

                        <?php if($item->Jackpot == -1) : ?>

                            <h2>Pending</h2>

                            <img src="<?php bloginfo('stylesheet_directory'); ?>/assets/img/separator.png" alt="|">

                        <?php else: ?>

                            <h2><?= $item->LotteryCurrency2 ?><?= round($item->Jackpot/1000000,2) ?> Millions</h2>

                            <img src="<?php bloginfo('stylesheet_directory'); ?>/assets/img/separator.png" alt="|">

                        <?php endif; ?>

                    </div>

                    <!--Name of the game and prize-->



                    <!--Countdown until the game draw-->

                    <div id="<?= $countdownClass?>" class="col-sm-3 games-countdown">

                        <h6><i>Days</i> <i>Hrs</i> <i>Min</i> <i>Sec</i></h6>

                        <div class="box"></div>

                        <div class="box"></div>

                        <div class="box"></div>

                        <div class="box"></div>

                        <h5></h5>

                        <img src="<?php bloginfo('stylesheet_directory'); ?>/assets/img/separator.png" alt="|">

                    </div><!--Countdown until the game draw-->



                    <!--Buttons-->

                    <div class="col-sm-4 call-to-actions">

                        <button onclick="location.href='<?php bloginfo('url'); ?>/<?= $gameLink; ?>';" class="draws-play-now hvr-shadow">CHOOSE NUMBERS</button>Or

                        <a href="javascript:void(0)"><button class="draws-quick-buy hvr-shadow" data-lottery-type-id = <?php echo($item->LotteryTypeId) ?>>QUICK BUY</button></a>

                        <h6 class="absolute">5 tickets</h6>

                    </div><!--Buttons-->



                </div><!--Row-->

                <script type="text/javascript">

                    $("#<?= $countdownClass ?> h5").countdown("<?= date("m/d/Y H:i:s" , strtotime($item->DrawDate)) ?>", function(event) {

                        $(this).text(

                            event.strftime('%D %H %M %S')

                        );

                    });

                </script>

            </div><!--Container-->







            <div class="container"><div class="row"><div class="one-pixel"></div></div></div>

        <?php endforeach;?>

    </div>



    <!--View All Lotteries-->

    <div class="container fixrow">

        <div class="row">

            <button id="view-all-lotto" class="hvr-shadow">VIEW ALL LOTTERIES</button>

        </div>

    </div><!--View All Lotteries-->





</section>





<section id="how-it-works-section">

    <div class="container">

        <div class="row">

            <div class="col-sm-4">

                <div class="column-box">

                    <h2>How It Works</h2>

                    <hr class="title-separator-2">



                    <div class="col-md-1 how-it-works-steps">

                        <button id="number1" class="number desktop-step-number active-list">1</button>

                        <button id="number2" class="number desktop-step-number">2</button>

                        <button id="number3" class="number desktop-step-number">3</button>

                        <button id="number4" class="number desktop-step-number">4</button>



                    </div>



                    <div class="col-md-4 step-text">



                        <h4 id="number1-text" class="active-list-step text-fields list"><?php echo $how_it_works_first_heading; ?></h4>

                        <h4 class="text-fields list" id="number2-text"><?php echo $how_it_works_second_heading; ?></h4>

                        <h4 class="text-fields list" id="number3-text"><?php echo $how_it_works_third_heading; ?></h4>

                        <h4 class="text-fields list" id="number4-text"><?php echo $how_it_works_fourth_heading; ?></h4>





                    </div>



                    <div class="col-md-6 how-it-works-slider">



                        <div id="slider-1" class="slider active-slider"><p><?php echo $how_it_works_first_text; ?></p><img src="<?php echo $how_it_works_first_image; ?>" alt=""></div>

                        <div id="slider-2" class="slider"><p><?php echo $how_it_works_second_text; ?></p><img src="<?php echo $how_it_works_second_image; ?>" alt=""></div>

                        <div id="slider-3" class="slider"><p><?php echo $how_it_works_third_text; ?></p><img src="<?php echo $how_it_works_third_image; ?>" alt=""></div>

                        <div id="slider-4" class="slider"><p><?php echo $how_it_works_fourth_text; ?></p><img src="<?php echo $how_it_works_fourth_image; ?>" alt=""></div>



                    </div>





                </div>

            </div>



            <div class="col-sm-4">

                <div class="tablet-desktop">

                    <h2>Watch Our Video</h2>

                    <hr class="title-separator-2">



                    <!-- Large modal -->

                    <button id="video-button" type="button" class="" data-toggle="modal" data-target=".bs-example-modal-lg">

                        <img id="video-placeholder-picture" src="<?php bloginfo('stylesheet_directory'); ?>/assets/img/video-placeholder.png" alt="Video"></button>



                    <div id="videoModal" class="modal fade bs-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel">

                        <div class="modal-dialog modal-lg">>

                            <div class="modal-content">

                                <div class="modal-header">

                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>

                                    <h4 class="modal-title" id="myModalLabel">Jinni Lotto's Official Video!</h4>

                                </div>

                                <div class="modal-body">

                                    <iframe id="featured_video"  src="https://www.youtube.com/embed/kJ2tp1tf2PA?rel=0" frameborder="0" allowfullscreen></iframe>

                                </div>

                                <div class="modal-footer">

                                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>



            <div class="col-sm-4">

                <div class="column-box">

                    <h2>Live Results</h2>

                    <hr class="title-separator-2">



                    <div class="live-results-wrapper">

                        <?php foreach ($lastResults as  $lastResult) :?>

                            <?php if($lastResult->WinningResult !== null && $lastResult->WinningResult !== '') : ?>

                                <div class="live-result-holder active-result-holder">

                                    <div class="col-md-3">

                                        <img class="live-game-image" src="<?php bloginfo('stylesheet_directory'); ?>/assets/img/allLottoFlags/game-image-<?= strtolower($lastResult->LotteryName)?>-small.png" alt="Game Image">

                                    </div>

                                    <div class="col-md-9">

                                        <p class="draw-name"><?= $lastResult->LotteryName ?></p>

                                        <p class="draw-date"><?= date("d M", strtotime($lastResult->DrawDate)) ?></p>

                                        <?php

                                        $result = $lastResult->WinningResult;

                                        list($numbers, $bonusNumbers) = explode('#', $result);

                                        $numberList = explode(',', $numbers);

                                        ?>

                                        <?php foreach($numberList as $number) : ?>

                                            <button class="live-result-numbers"><?= $number ?></button>

                                        <?php endforeach; ?>

                                        <?php if(!empty($bonusNumbers)) : ?>

                                            <?php $bonusList = explode(',', $bonusNumbers); ?>

                                            <?php foreach($bonusList as $number) : ?>

                                                <button class="live-result-extra-numbers"><?= $number ?></button>

                                            <?php endforeach; ?>

                                        <?php endif; ?>

                                    </div>

                                </div>

                            <?php endif; ?>

                        <?php endforeach; ?>

                    </div>

                    <a class="relative" href="<?php bloginfo('url'); ?>/see-all-results">See All Results</a>

                </div>

            </div>





        </div>

    </div>



</section>



<section id="our-benefits">





    <!--title-->

    <div class="container">

        <div class="row">

            <div class="col-sm-12">

                <h2><?php echo $benefits_section_title; ?></h2>

                <hr class="title-separator-3">

            </div>

        </div>

    </div><!--title-->



    <!--benefits section options-->

    <div class="container benefits">

        <div class="row">

            <!--support-->

            <div class="col-sm-3">



                <img src="<?php echo $first_benefit_image; ?>" alt="">

                <h3><?php echo $first_benefit_title; ?> </h3>

                <p><?php echo $first_benefit_text; ?> </p>



            </div><!--support-->



            <!--cashback-->

            <div class="col-sm-3">



                <img src="<?php echo $second_benefit_image; ?> " alt="">

                <h3><?php echo $second_benefit_title; ?> </h3>

                <p><?php echo $second_benefit_text; ?> </p>



            </div><!--cashback-->



            <!--Jinni VIP club-->

            <div class="col-sm-3">



                <img src="<?php echo $third_benefit_image; ?> " alt="">

                <h3><?php echo $third_benefit_title; ?> </h3>

                <p><?php echo $third_benefit_text; ?> </p>



            </div><!--Jinni VIP club-->



            <!--Secure-->

            <div class="col-sm-3">



                <img class="secure" src="<?php echo $fourth_benefit_image; ?>" alt="">

                <h3><?php echo $fourth_benefit_title; ?> </h3>

                <p><?php echo $fourth_benefit_text; ?> </p>



            </div><!--Secure-->

        </div>

    </div>





</section><!--Benefits-->





<section id="optin">



    <img src="<?php bloginfo('stylesheet_directory'); ?>/assets/img/optin-tickets.png" alt="Free Tickets!" id="free-ticket">

    <img src="<?php bloginfo('stylesheet_directory'); ?>/assets/img/optin-jinni.png" alt="Jinni Lotto" id="jinny">

    <div id="optin-cta">

        <p>The&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span id="jinny-words"><img src="<?php bloginfo('stylesheet_directory'); ?>/assets/img/jinni-words.png" alt="Jinny"></span>is so happy you've made it here so he decided to give you a free ticket!</p>

        <button class="hvr-grow" id="optin-button">CLAIM TICKET</button>

    </div>





</section><!--Optin-->



<section id="winners">



    <div class="container">

        <div class="row">



            <!--Latest Winners-->

            <div id="latest-winners" class="col-sm-6">



                <!--Winners title-->

                <div id="winners-title" class="col-sm-12">

                    <h2>Latest Winners</h2>

                    <hr class="title-separator-2">

                </div><!--Winners title-->



                <div id="total-wins" class="col-sm-12">

                    <img id="trophy" src="<?php bloginfo('stylesheet_directory'); ?>/assets/img/trophy.png" alt="Trophy Image">

                    <div class="col-sm-8 col-sm-offset-4">

                        <h5>Total Wins</h5>

                        <p>$<?php echo $winners_totals; ?> </p>

                    </div>



                    <div class="winners-total-height">



                        <?php $loop = new WP_Query( array( 'post_type' => 'winners', 'orderby' => 'post_id', 'order' => 'ASC') ); ?>

                        <?php while( $loop -> have_posts()) : $loop -> the_post(); ?>

                            <!--Winner 1-->

                            <div class="col-sm-12 winner-holder">

                                <!--Winner Picture-->

                                <div class="col-sm-2">

                                    <img class="winner-picture" src="<?php the_field('winner_image'); ?> ">

                                </div><!--Winner Picture-->

                                <!--Winner Statistics-->

                                <div class="col-sm-10 generate-winner">

                                    <br>

                                    <p class="winner-name"><?php the_field('winner_name'); ?> </p>

                                    <p class="winner-country"><?php the_field('winner_country'); ?> </p>

                                    <p class="prize-currency"><?php the_field('winner_currency'); ?> </p>

                                    <p class="prize-won"><?php the_field('winner_total_prize'); ?> </p>

                                    <br>

                                    <p class="game-played"><?php the_field('winner_game_played');; ?> </p>

                                </div><!--Winner Statistics-->

                            </div><!--Winner 1-->

                            <div class="clearfix"></div>

                            <hr class="winners-separator"><!--Winner 1 holder-->

                        <?php endwhile; ?>



                    </div>



                </div><!--Latest Winners-->

            </div><!--Latest Winners-->









            <!--What winners say-->

            <div id="testimonials" class="col-sm-6">



                <!--testemonial title-->

                <div id="testimonial-title" class="col-sm-12">

                    <h2><?php echo $latest_winners_header; ?> </h2>

                    <hr class="title-separator-2">

                </div><!--testemonial title-->



                <!--chat bubble-->

                <div id="text-bubble" class="col-sm-12 bubble-1">



                    <div id="testimonial-text-1" class="active-testimonial-text">

                        <p class="testimonial-text winner-1"><?php echo $first_testimonial_text; ?> </p>

                        <br><br>

                        <p class="testimonial-user"><?php echo $first_testimonial_winner_name; ?> </p> / <p class="testimonial-user-title"><?php echo $first_testimonial_winner_occupation; ?> </p>

                    </div>



                    <div id="testimonial-text-2" class="not-active-testimonial-text">

                        <p class="testimonial-text winner-2"><?php echo $second_testimonial_text; ?> </p>

                        <br><br>

                        <p class="testimonial-user"><?php echo $second_testimonial_winner_name; ?> </p> / <p class="testimonial-user-title"><?php echo $second_testimonial_winner_occupation; ?> </p>

                    </div>



                    <div id="testimonial-text-3" class="not-active-testimonial-text">

                        <p class="testimonial-text winner-3"><?php echo $third_testimonial_text; ?> </p>

                        <br><br>

                        <p class="testimonial-user"><?php echo $third_testimonial_winner_name; ?> </p> / <p class="testimonial-user-title"><?php echo $third_testimonial_winner_occupation; ?> </p>

                    </div>



                </div><!--chat bubble-->



                <!--First winner's testemonial-->

                <div class="col-sm-4">

                    <img src="<?php bloginfo('stylesheet_directory'); ?>/assets/img/winner-1.png" alt="Winner 1">

                    <button id="testimonial-1" class="active-testimonial hvr-shadow"><?php echo $first_testimonial_winner_name; ?> </button>

                </div><!--First winner's testemonial-->



                <!--Second winner's testemonial-->

                <div class="col-sm-4">

                    <img src="<?php bloginfo('stylesheet_directory'); ?>/assets/img/winner-2.png" alt="Winner 1">

                    <button id="testimonial-2" class="hvr-shadow"><?php echo $second_testimonial_winner_name; ?> </button>

                </div><!--Second winner's testemonial-->



                <!--Third winner's testemonial-->

                <div class="col-sm-4">

                    <img src="<?php bloginfo('stylesheet_directory'); ?>/assets/img/winner-3.png" alt="Winner 1">

                    <button id="testimonial-3" class="hvr-shadow"><?php echo $third_testimonial_winner_name; ?> </button>

                </div><!--Third winner's testemonial-->



            </div><!--What winners say-->



        </div>

    </div>



</section>





<?php

get_footer();

