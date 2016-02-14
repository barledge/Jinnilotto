<?php
/*
 * Template Name: See All Individual Page
*/
// -----Header Area Stuff

use WegeTech\LottoYard\Model\Draw;
use WegeTech\LottoYard\Service;

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

get_header();
?>
   
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <script type="text/javascript" src="//www.jinnilotto.com/wp-content/themes/jinni-lotto/assets/js/jquery.countdown.js"></script>




    <div class="see-all-lotto-page" style="background: url('<?php bloginfo('template_directory'); ?>/assets/img/see-all-lotto-bg.png') no-repeat 50% 45%">

        <h2>No matter where you live, play any lottery you like!</h2>

    </div>

    <section id="upcoming-draw">

        <div class="container upcoming-draw">
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

    <div id="see-all-games-page">
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
                            <h6>days hrs min sec</h6>
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
                            <a href="<?php bloginfo('url'); ?>/cart"><button class="draws-quick-buy hvr-shadow">QUICK BUY</button></a>
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



<?php
get_footer();