<?php
/*
  Template Name: See All Results
*/

/** @var \WegeTech\LottoYard\Service $lottoService */
global $lottoService;

$lastResultResponse = $lottoService->getLottoResults();
if(!$lastResultResponse->success){
  //error page
}

/** @var \WegeTech\LottoYard\Model\LottoResult[] $lastResults */
$lastResults = $lastResultResponse->data;

$drawsResponse = $lottoService->getAllDraws();
if(!$drawsResponse->success){
   //error page
}

/** @var \WegeTech\LottoYard\Model\Draw[] $draws */
$draws = $drawsResponse->data;

get_header(); ?>


  <section class="lattest-main-hero">
    <div class="container">
      <div class="row">

        <img src="<?php bloginfo('stylesheet_directory'); ?>/assets/img/allLottoFlags/game-image-powerball-small.png" alt="PowerBall">

        <div class="latest-game-prize"><h1><?= $draws[0]->LotteryCurrency. round($draws[0]->Jackpot / 1000000). ' Million' ?></h1></div>

        <div class="latest-draw-cta">

          <p>Draw closes in:</p>
          <div class="latest-countdown">
            <h5><i class="fa fa-clock-o"></i><?= date('H:i:s' , strtotime($draws[0]->DrawDate)); ?></h5>
            <h6>days hrs min sec</h6>
          </div>

          <a href="<?php bloginfo('url'); ?>/powerball-ticket"><button class="latest-draw-button-play-now">PLAY NOW</button></a>
        </div>

      </div>
    </div>
  </section>
  <script type="text/javascript">
    $(".latest-countdown").find('h5').countdown("<?= date("m/d/Y H:i:s" , strtotime($draws[0]->DrawDate)) ?>", function(event) {
      $(this).text(
          event.strftime('%D %H %M %S')
      );
    });
  </script>

  <section id="latest-main-content">
    <div class="container">
      <div class="row">
        <div class="col-sm-12 latest-lead-text">
          <h3>Welcome to the JinniLotto Results Section</h3>
          <p>On this page you will find the latest lottery results for all of our lotteries from around the world. Get inspiration from the recent lucky winning numbers and create your own lucky combination.<br>Get your tickets now and next time your wish might be granted and you&apos;ll be staring at your numbers on this page.
          </p>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row lastResRow">

        <!---  Table Head  --->
        <div class="col-sm-12 table-head">

          <div class="col-sm-2">
            <p>Lottery</p>
          </div>

          <div class="col-sm-2">
            <p>Country</p>
          </div>

          <div class="col-sm-2">
            <p>Last Draw</p>
          </div>

          <div class="col-sm-4">
            <p>Draw Numbers</p>
          </div>

        </div> <!---  Table Head  --->

        <!---  Game 1  --->
        <? foreach ($lastResults as $result): ?>
            <? list($imageClass, $countdownClass, $normalizedName) = resolveLottoImage($result->LotteryName);?>
          <div class="col-sm-12 game-model">

            <div class="col-sm-2 latest-game-image">
              <img src="<?php bloginfo('stylesheet_directory'); ?>/assets/img/latest/latest-<?= $normalizedName?>-table.png"
                   alt="<?=$result->LotteryName ?>">
            </div>

            <div class="col-sm-2 latest-flag">
<!--              <img src="--><?php //bloginfo('stylesheet_directory'); ?><!--/assets/img/latest/latest-flag-eu.png" alt="--><?//= $result->CountryCode?><!--">-->
              <img src="<?php bloginfo('stylesheet_directory'); ?>/assets/img/latest/latest-flag-<?= $result->CountryCode?>.png" alt="<?= $result->CountryCode?>">
            </div>

            <div class="col-sm-2 last-draw-date">
              <p><?= date('d-M-Y' ,strtotime($result->DrawDate)) ?></p>
            </div>

            <div class="col-sm-6 latest-draw-numbers">
              <?php
              $winningNumbers = $result->WinningResult;
              list($numbers, $bonusNumbers) = explode('#', $winningNumbers);
              $numberList = explode(',', $numbers);
              ?>
              <?php foreach($numberList as $number) : ?>
                <button class="latest-draw-blue"><?= $number ?></button>
              <?php endforeach; ?>
              <?php if(!empty($bonusNumbers)) : ?>
                <?php $bonusList = explode(',', $bonusNumbers); ?>
                <?php foreach($bonusList as $number) : ?>
                  <button class="latest-draw-green"><?= $number ?></button>
                <?php endforeach; ?>
              <?php endif; ?>
            </div>

            <!-- <div class="col-sm-2 table-button">
              <button>PAST RESULTS</button>
            </div> -->

          </div>
        <? endforeach ?> <!---  Game 1  --->

      </div>
    </div>

  </section>

<?php

get_footer();
