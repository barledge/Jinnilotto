<?php
/*
  Template Name: Withdraw
*/


get_header(); ?>

<section class="withdrawJaw">
    <div class="rowIn">
        <div class="wd1">
            <div class="withInfo">
                <h3>Withdraw Your Winnings and Account Balance</h3>
                <div class="with_1">
                    <p>At any time you may ask to withdraw your winnings and your account’s balance. After requesting to withdraw, Your withdrawal request will be processed within 48 hours. Please make sure your contact details are fully updated.</p>
                </div>
                <div class="with_2">
                    <h4>WITHDRAW YOUR MONEY:</h4>
                    <p>On your account (Winnings & Balance) you have an overall amount of: €0.00</p>
                </div>
                <div class="with_3">
                    <p class="withP">Choose how much you would like to withdraw:</p>
                    <form action="#" class="withForm">
                        <div class="withFormIn">
                            <input type="text">
                            <button class="hvr-shadow">Request withdraw</button>
                        </div>
                    </form>
                    <div class="forAlert">
                        <p>*You cannot withdraw more money than you have on your account’s balance.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="wd2">
            <div class="withSec">
                <div class="wSec_1">
                    <h4>Safety & Security</h4>
                    <p>JinniLotto guarantees its customers’ by using the highest level of security -SSL.</p>
                    <img src="<?php bloginfo('template_directory'); ?>/assets/img/withSec_1.png" width="60" height="60" alt="">
                </div>
                <div class="wSec_2">
                    <h4>Scanned Ticket</h4>
                    <p>Every ticket you purchase will be bought in the proper lottery jurisdiction and scanned for your convenience.</p>
                    <img src="<?php bloginfo('template_directory'); ?>/assets/img/withSec_2.png" width="68" height="68" alt="">
                </div>
            </div>
        </div>
    </div>
</section>


<?php

get_footer();
