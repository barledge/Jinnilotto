<?php
/*
  Template Name: Bonus And Loyalty Programs
*/

get_header(); ?>


<section id="privacy-header" style="background: url('<?php bloginfo('template_directory'); ?>/assets/img/loyalty/loyalty-bg.png') 45% 50% no-repeat">
    <h1>Loyalty Program</h1>
    <img src="<?php bloginfo('template_directory'); ?>/assets/img/about-us-separator.png" alt="">
</section>

<section id="loyalty-content">

    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h2>Welcome to the JinniLotto Loyalty Program! </h2>
                <p>
                    We believe in giving back to our regular players. You&apos;ve trusted in us to deliver the best online lottery experience and now we want to reward you and make it even easier to make your lottery wishes come true.
                    <br><br>
                    The JinniLotto Loyalty Program is simple &mdash; every time you purchase a ticket we gift you Frequent Purchase Points (FPPs). FPPs can be used to redeem extra benefits and discounts so you can play more lotteries for less money.
                </p>
            </div>
        </div>
    </div>

    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <img src="<?php bloginfo('template_directory'); ?>/assets/img/loyalty/loyalty-vip-levels.png" alt="">
                <h4>User Class / VIP Levels</h4>
                <p>The more you play with JinniLotto the more you save. To be a JinniLotto VIP member all you have to do is play and we&apos;ll pay you back with increasing discounts. </p>

                <div class="row loyalty-table-row">
                    <div class="col-xs-1">
                        <i class="fa fa-check-circle"></i>
                    </div>
                    <div class="col-xs-3">
                        <p>Diamond</p>
                    </div>
                    <div class="col-xs-1">
                        <p>=</p>
                    </div>
                    <div class="col-xs-3 col-xs-offset-1">
                        <p>1000+ FPPs</p>
                    </div>
                    <div class="col-xs-3">
                        <p>10% discount</p>
                    </div>
                </div>

                <div class="row loyalty-table-row">
                    <div class="col-xs-1">
                        <i class="fa fa-check-circle"></i>
                    </div>
                    <div class="col-xs-3">
                        <p>Platinum</p>
                    </div>
                    <div class="col-xs-1">
                        <p>=</p>
                    </div>
                    <div class="col-xs-3 col-xs-offset-1">
                        <p>501-1000 FPPs</p>
                    </div>
                    <div class="col-xs-3">
                        <p>7% discount</p>
                    </div>
                </div>

                <div class="row loyalty-table-row">
                    <div class="col-xs-1">
                        <i class="fa fa-check-circle"></i>
                    </div>
                    <div class="col-xs-3">
                        <p>Gold</p>
                    </div>
                    <div class="col-xs-1">
                        <p>=</p>
                    </div>
                    <div class="col-xs-3 col-xs-offset-1">
                        <p>301-500 FPPs</p>
                    </div>
                    <div class="col-xs-3">
                        <p>5% discount</p>
                    </div>
                </div>

                <div class="row loyalty-table-row">
                    <div class="col-xs-1">
                        <i class="fa fa-check-circle"></i>
                    </div>
                    <div class="col-xs-3">
                        <p>Silver</p>
                    </div>
                    <div class="col-xs-1">
                        <p>=</p>
                    </div>
                    <div class="col-xs-3 col-xs-offset-1">
                        <p>151-300 FPPs</p>
                    </div>
                    <div class="col-xs-3">
                        <p>3% discount</p>
                    </div>
                </div>

                <div class="row loyalty-table-row">
                    <div class="col-xs-1">
                        <i class="fa fa-check-circle"></i>
                    </div>
                    <div class="col-xs-3">
                        <p>Bronze</p>
                    </div>
                    <div class="col-xs-1">
                        <p>=</p>
                    </div>
                    <div class="col-xs-3 col-xs-offset-1">
                        <p>51-150 FPPs</p>
                    </div>
                    <div class="col-xs-3">
                        <p>2% discount</p>
                    </div>
                </div>

                <div class="row loyalty-table-row">
                    <div class="col-xs-1">
                        <i class="fa fa-check-circle"></i>
                    </div>
                    <div class="col-xs-3">
                        <p>Regular</p>
                    </div>
                    <div class="col-xs-1">
                        <p>=</p>
                    </div>
                    <div class="col-xs-3 col-xs-offset-1">
                        <p>0-50 FPPs</p>
                    </div>
                    <div class="col-xs-3">
                        <p>1% discount</p>
                    </div>
                </div>

                <div class="row">
                    <div class="col-sm-12">
                        <p>Play your win to huge discounts and life changing winnings. <br>
                            To check your FPP and VIP level simply go to the user details section of your JinniLotto account.
                        </p>

                        <h5>Start playing and become a <span class="text-dark-blue">JinniLotto VIP today!</span> </h5>
                    </div>
                    
                    <button class="btn loyalty-buy-now-button" onclick="location.href='<?php bloginfo('url') ?>/see-all-individual-page';">BUY NOW</button>

                </div>

            </div>
            <div class="col-md-6">
                <img src="<?php bloginfo('template_directory'); ?>/assets/img/loyalty/loyalty-fpps.png" alt="">
                <h4>Frequent Purchase Points (FPPs)</h4>
                <p>For every ticket purchased you earn Frequent Purchase Points. FFP can be used to redeem more tickets or can even be exchanged for cash. </p>
                <img src="<?php bloginfo('template_directory'); ?>/assets/img/loyalty/loyalty-graphic.png" alt="">


            </div>
        </div>
    </div>

</section>

<?php

get_footer();
