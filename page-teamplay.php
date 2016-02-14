<?php

/*
 * Template Name: Team Play
 */

get_header();
?>

<section id="teamplay-bg" style="background: url('<?php bloginfo("template_directory") ?>/assets/img/teamplay/header-teamplay.png') no-repeat 50% 50%">
</section>

<section class="teamplay-content">
    <div class="container">
        <div class="row">
            <div class="col-sm-9">
                <p>Check out our newest feature, TeamPlay Lottery Play, an undeniable hit in the world of online lotteries. It is a perfect way to minimize your expenses and, at the same time, maximize your chances of winning big money!</p>
                <div class="teamplay-row">
                    <div class="teamplay-flag teamplay-powerball-flag" style="background: url('<?php bloginfo("template_directory"); ?>/assets/img/teamplay/powerball-teamplay-flag.png') 50% 50%">
                    </div>
                    <div class="tickets-and-all">
                        <img src="<?php bloginfo('template_directory'); ?>/assets/img/teamplay/powerball-teamplay-tickets.png" alt="">
                        <br>
                        <button class="view-all-button-teamplay">View All</button>
                        <br>
                        <div class="teamplay-shares">
                            <p class="shares-left">59</p>
                            <p>Entries left (out of 70)</p>
                        </div>
                    </div>
                    <div class="donut-chart">
                        <div class="piePowerball pie">
                            <div class="pie-info">
                                <p><span class="blue">&euro;100 Mil</span></p>
                                <p><span class="red">&euro; 157685</span></p>
                            </div>
                        </div>
                        <div class="pie-stats">
                            <p class="blue">Total Jackpot: <br>
                                <span class="bolded">&euro; 100 Million</span> <br>
                                <span class="red">Jackpot per share:
                                <br>
                                <span class="bolded">&euro; 158434</span></span></p>
                        </div>
                        <!--This is where the pie chart populates it's stats-->
                        <ul class="piePowerball legend">
                            <li>
                                <em>Jackpot Per Share</em>
                                <span>66666666</span>
                            </li>
                            <li>
                                <em>Total Jackpot</em>
                                <span>100000000</span>
                            </li>
                        </ul>
                    </div>
                    <div class="teamplay-options">
                        <div class="number-of-entries">
                            <p>Choose number of entries:</p>
                            <button class="teamplay-minus" id="powerball-teamplay-minus">&mdash;</button>
                            <input disabled type="text" value="1">
                            <button class="teamplay-plus" id="powerball-teamplay-plus">&plus;</button>
                        </div>
                        <div class="draw-options">
                            <p>Choose the draws options:</p>
                            <select name="teamplay-draws" id="teamplay-draws">
                                <option value="1">This Draw Only</option>
                                <option value="4">4 draws</option>
                                <option value="8">8 draws</option>
                                <option value="26">26 draws</option>
                            </select>
                        </div>
                        <div class="teamplay-pay">
                            <input type="text" value="&euro;9875.00">
                            <button class="play-now-teamplay">PLAY NOW</button>
                        </div>
                    </div>
                </div>

                <div class="row"></div>

                <div class="teamplay-row">
                    <div class="teamplay-flag teamplay-powerball-flag" style="background: url('<?php bloginfo("template_directory"); ?>/assets/img/teamplay/megamillion-teamplay-flag.png')">
                    </div>
                    <div class="tickets-and-all">
                        <img src="<?php bloginfo('template_directory'); ?>/assets/img/teamplay/megamillion-teamplay-tickets.png" alt="">
                        <br>
                        <button class="view-all-button-teamplay">View All</button>
                        <br>
                        <div class="teamplay-shares">
                            <p class="shares-left">59</p>
                            <p>Entries left (out of 70)</p>
                        </div>
                    </div>
                    <div class="donut-chart">
                        <div class="pieMegamillion pie">
                            <div class="pie-info">
                                <p><span class="blue">&euro;100 Mil</span></p>
                                <p><span class="red">&euro; 157685</span></p>
                            </div>
                        </div>
                        <div class="pie-stats">
                            <p class="blue">Total Jackpot: <br>
                                <span class="bolded">&euro; 100 Million</span> <br>
                                <span class="red">Jackpot per share:
                                <br>
                                <span class="bolded">&euro; 158434</span></span></p>
                        </div>
                        <!--This is where the pie chart populates it's stats-->
                        <ul class="pieMegamillion legend">
                            <li>
                                <em>Jackpot Per Share</em>
                                <span>33333333</span>
                            </li>
                            <li>
                                <em>Total Jackpot</em>
                                <span>100000000</span>
                            </li>
                        </ul>
                    </div>
                    <div class="teamplay-options">
                        <div class="number-of-entries">
                            <p>Choose number of entries:</p>
                            <button class="teamplay-minus" id="powerball-teamplay-minus">&mdash;</button>
                            <input disabled type="text" value="1">
                            <button class="teamplay-plus" id="powerball-teamplay-plus">&plus;</button>
                        </div>
                        <div class="draw-options">
                            <p>Choose the draws options:</p>
                            <select name="teamplay-draws" id="teamplay-draws">
                                <option value="1">This Draw Only</option>
                                <option value="4">4 draws</option>
                                <option value="8">8 draws</option>
                                <option value="26">26 draws</option>
                            </select>
                        </div>
                        <div class="teamplay-pay">
                            <input type="text" value="&euro;9875.00">
                            <button class="play-now-teamplay">PLAY NOW</button>
                        </div>
                    </div>
                </div>

                <div class="row"></div>

                <div class="teamplay-row">
                    <div class="teamplay-flag teamplay-powerball-flag" style="background: url('<?php bloginfo("template_directory"); ?>/assets/img/teamplay/euromillion-teamplay-flag.png')">
                    </div>
                    <div class="tickets-and-all">
                        <img src="<?php bloginfo('template_directory'); ?>/assets/img/teamplay/euromillion-teamplay-tickets.png" alt="">
                        <br>
                        <button class="view-all-button-teamplay">View All</button>
                        <br>
                        <div class="teamplay-shares">
                            <p class="shares-left">59</p>
                            <p>Entries left (out of 70)</p>
                        </div>
                    </div>
                    <div class="donut-chart">
                        <div class="pieEuromillion pie">
                            <div class="pie-info">
                                <p><span class="blue">&euro;100 Mil</span></p>
                                <p><span class="red">&euro; 157685</span></p>
                            </div>
                        </div>
                        <div class="pie-stats">
                            <p class="blue">Total Jackpot: <br>
                                <span class="bolded">&euro; 100 Million</span> <br>
                                <span class="red">Jackpot per share:
                                <br>
                                <span class="bolded">&euro; 158434</span></span></p>
                        </div>
                        <!--This is where the pie chart populates it's stats-->
                        <ul class="pieEuromillion legend">
                            <li>
                                <em>Jackpot Per Share</em>
                                <span>33333333</span>
                            </li>
                            <li>
                                <em>Total Jackpot</em>
                                <span>100000000</span>
                            </li>
                        </ul>
                    </div>
                    <div class="teamplay-options">
                        <div class="number-of-entries">
                            <p>Choose number of entries:</p>
                            <button class="teamplay-minus" id="powerball-teamplay-minus">&mdash;</button>
                            <input disabled type="text" value="1">
                            <button class="teamplay-plus" id="powerball-teamplay-plus">&plus;</button>
                        </div>
                        <div class="draw-options">
                            <p>Choose the draws options:</p>
                            <select name="teamplay-draws" id="teamplay-draws">
                                <option value="1">This Draw Only</option>
                                <option value="4">4 draws</option>
                                <option value="8">8 draws</option>
                                <option value="26">26 draws</option>
                            </select>
                        </div>
                        <div class="teamplay-pay">
                            <input type="text" value="&euro;9875.00">
                            <button class="play-now-teamplay">PLAY NOW</button>
                        </div>
                    </div>
                </div>

                <div class="row"></div>

                <div class="teamplay-row">
                    <div class="teamplay-flag teamplay-powerball-flag" style="background: url('<?php bloginfo("template_directory"); ?>/assets/img/teamplay/eurojackpot-teamplay-flag.png')">
                    </div>
                    <div class="tickets-and-all">
                        <img src="<?php bloginfo('template_directory'); ?>/assets/img/teamplay/eurojackpot-teamplay-tickets.png" alt="">
                        <br>
                        <button class="view-all-button-teamplay">View All</button>
                        <br>
                        <div class="teamplay-shares">
                            <p class="shares-left">59</p>
                            <p>Entries left (out of 70)</p>
                        </div>
                    </div>
                    <div class="donut-chart">
                        <div class="pieEurojackpot pie">
                            <div class="pie-info">
                                <p><span class="blue">&euro;100 Mil</span></p>
                                <p><span class="red">&euro; 157685</span></p>
                            </div>
                        </div>
                        <div class="pie-stats">
                            <p class="blue">Total Jackpot: <br>
                                <span class="bolded">&euro; 100 Million</span> <br>
                                <span class="red">Jackpot per share:
                                <br>
                                <span class="bolded">&euro; 158434</span></span></p>
                        </div>
                        <!--This is where the pie chart populates it's stats-->
                        <ul class="pieEurojackpot legend">
                            <li>
                                <em>Jackpot Per Share</em>
                                <span>66666666</span>
                            </li>
                            <li>
                                <em>Total Jackpot</em>
                                <span>100000000</span>
                            </li>
                        </ul>
                    </div>
                    <div class="teamplay-options">
                        <div class="number-of-entries">
                            <p>Choose number of entries:</p>
                            <button class="teamplay-minus" id="powerball-teamplay-minus">&mdash;</button>
                            <input disabled type="text" value="1">
                            <button class="teamplay-plus" id="powerball-teamplay-plus">&plus;</button>
                        </div>
                        <div class="draw-options">
                            <p>Choose the draws options:</p>
                            <select name="teamplay-draws" id="teamplay-draws">
                                <option value="1">This Draw Only</option>
                                <option value="4">4 draws</option>
                                <option value="8">8 draws</option>
                                <option value="26">26 draws</option>
                            </select>
                        </div>
                        <div class="teamplay-pay">
                            <input type="text" value="&euro;9875.00">
                            <button class="play-now-teamplay">PLAY NOW</button>
                        </div>
                    </div>
                </div>

            </div>
            <div class="col-sm-3">
                sidebar
            </div>
        </div>
    </div>
</section>

<?php
get_footer();