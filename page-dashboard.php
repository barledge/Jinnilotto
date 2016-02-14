<?php
/*
  Template Name: Dashboard Page
*/

use WegeTech\LottoYard\Model\PaymentMethod;
use WegeTech\LottoYard\Model\Ticket;
use WegeTech\LottoYard\Model\Transaction;
use WegeTech\LottoYard\Model\User;

get_header(); ?>

<?php
if (!is_user_logged_in()) {
    header('Location: http://wpjl.2hypnotize.com/');
}else {
    if(isset($_GET['action'])){
        global $lottoService;
        global $lottoPlugin;
        switch($_GET['action']){
            case 'update':
                $response = $lottoService->updateUser($_POST);
                var_dump($response);
                break;
            case 'changePassword':
                $response = $lottoPlugin->updatePassword($_POST);
                break;
            default:
                return;
        }

        var_dump($response);
    }

    $currentUser = $_SESSION['userData'];
    /** @var User $userDetails */
    $userDetails = $currentUser['user'];
    /** @var Transaction[] $userTransactions */
    $userTransactions = $currentUser['transactions'];
    /** @var PaymentMethod[] $userPaymentMethods */
    $userPaymentMethods = $currentUser['paymentMethods'];
    /** @var Ticket[] $tickets */
    $tickets = $currentUser['tickets'];
    /** @var Ticket[] $products */
    $products = $currentUser['tickets'];
}

?>

    <section id="dashboard-content">

        <div class="container">
            <div class="row">
                <div class="col-sm-9">
                    <div class="navigation-block my-details-block active-block"><img src="<?php bloginfo('stylesheet_directory'); ?>/assets/img/dashboard/user.png" alt="User"/><p>My Details</p></div>
                    <div class="navigation-block my-payments-block"><img src="<?php bloginfo('stylesheet_directory'); ?>/assets/img/dashboard/payment-methods.png" alt="Credit Card Image"/><p>My Payment</p></div>
                    <div class="navigation-block my-transactions-block"><img src="<?php bloginfo('stylesheet_directory'); ?>/assets/img/dashboard/transactions.png" alt="Transactions"/><p>My Transactions</p></div>
                    <div class="navigation-block my-tickets-block"><img src="<?php bloginfo('stylesheet_directory'); ?>/assets/img/dashboard/tickets.png" alt="Image of tickets"/><p>My Tickets</p></div>
                    <div class="navigation-block my-products-block"><img src="<?php bloginfo('stylesheet_directory'); ?>/assets/img/dashboard/products.png" alt="Cart"/><p>My Products</p></div>

                    <div class="row">

                        <div class="content-dashboard-my-details content-dashboard">

                            <!------ Form ------>

                            <!------ Personal Info ------>
                            <form class="form-horizontal top-form" method="post" action="?action=update">
                                <div class="form-group">
                                    <div class="col-sm-1">
                                        <img class="user-badge" src="<?php bloginfo('stylesheet_directory'); ?>/assets/img/dashboard/personal-info.png" alt="User"/>
                                    </div>
                                    <!------ First Name ------>
                                    <label for="inputFirstName" class="col-sm-3 control-label">First Name</label>
                                    <div class="col-sm-8 ">
                                        <input type="text" name="firstName" class="form-control" id="inputFirstName" placeholder="" value="<?= $userDetails->FirstName ?>">
                                    </div>
                                </div><!------ First Name ------>
                                <!------ Last Name ------>
                                <div class="form-group">
                                    <label for="inputLastName" class="col-sm-3 col-sm-offset-1 control-label">Last Name</label>
                                    <div class="col-sm-8">
                                        <input type="text" name="lastName" class="form-control" id="inputLastName" placeholder="" value="<?= $userDetails->LastName ?>">
                                    </div>
                                </div><!------ Last Name ------>

                                <hr/>

                                <!------ Email Field ------>
                                <div class="form-group">
                                    <div class="col-sm-1">
                                        <img class="email-badge" src="<?php bloginfo('stylesheet_directory'); ?>/assets/img/dashboard/email.png" alt="Email"/>
                                    </div>
                                    <label for="inputEmail" class="col-sm-3 control-label">your@email.com</label>
                                    <div class="col-sm-8 ">
                                        <input type="email" name="email" class="form-control" id="inputEmail" placeholder="" value="<?= $userDetails->Email ?>">
                                    </div>
                                </div><!------ Email Field ------>

                                <hr/>

                                <!------ Region and Address ------>
                                <!------ Country ------>
                                <div class="form-group">
                                    <div class="col-sm-1">
                                        <img class="planet-badge" src="<?php bloginfo('stylesheet_directory'); ?>/assets/img/dashboard/country.png" alt="Globe"/>
                                    </div>
                                    <label for="inputCountry" class="col-sm-3 control-label">Country</label>
                                    <div class="col-sm-8 ">
                                        <input type="text" name="country" class="form-control" id="inputCountry" placeholder="" value="<?= $userDetails->Country ?>">
                                    </div>
                                </div><!------ Country ------>
                                <!------ City ------>
                                <div class="form-group">
                                    <label for="inputCity" class="col-sm-3 col-sm-offset-1 control-label">City</label>
                                    <div class="col-sm-8">
                                        <input type="text" name="city" class="form-control" id="inputCity" placeholder="" value="<?= $userDetails->City ?>">
                                    </div>
                                </div><!------ City ------>
                                <!------ Address ------>
                                <div class="form-group">
                                    <label for="inputAddress" class="col-sm-3 col-sm-offset-1 control-label">Address</label>
                                    <div class="col-sm-8 ">
                                        <input type="text" name="address" class="form-control" id="inputAddress" placeholder="" value="<?= $userDetails->Address ?>">
                                    </div>
                                </div><!------ Address ------>
                                <!------ Zip Code ------>
                                <div class="form-group">
                                    <label for="inputZipCode" class="col-sm-3 col-sm-offset-1 control-label">Postal Code</label>
                                    <div class="col-sm-8">
                                        <input type="text" name="zipCode" class="form-control" id="inputZipCode" placeholder="" value="<?= $userDetails->ZipCode ?>">
                                    </div>
                                </div><!------ Zip Code ------>

                                <!------ Save Changes and Change Password Buttons ------>
                                <div class="form-group">
                                    <div class="col-sm-offset-2 col-sm-10">
                                        <button type="submit" class="btn btn-success">Save Changes</button>
                                    </div>
                                </div>

                            </form><!------ Save Changes and Change Password Buttons ------>

                            <button class="btn btn-danger" id="dashboard-change-password-btn">Change Password</button>






                            <!------ Form for Password Change ------>
                            <form class="form-horizontal bottom-form" method="post" action="?action=changePassword">

                                <hr class="form-main-separator" >

                                <!------ Old Password ------>
                                <div class="form-group">
                                    <label for="inputOldPassword" class="col-sm-4 control-label">Old Password</label>
                                    <div class="col-sm-8 ">
                                        <input type="password" class="form-control" id="inputOldPassword" placeholder="">
                                    </div>
                                </div><!------ Old Password ------>

                                <!------ New Password ------>
                                <div class="form-group">
                                    <label for="inputNewPassword" class="col-sm-4 control-label">New Password</label>
                                    <div class="col-sm-8">
                                        <input type="password" name="password" class="form-control" id="inputNewPassword" placeholder="">
                                    </div>
                                </div><!------ New Password ------>

                                <!------ Repeat New Password ------>
                                <div class="form-group">
                                    <label id="inputRetypeLabel" for="inputRetype" class="col-sm-4  control-label">Repeat Password</label>
                                    <div class="col-sm-8 ">
                                        <input type="password" class="form-control" id="inputRetype" placeholder="">
                                    </div>
                                </div><!------ Repeat New Password ------>

                                <!------ Password Change Button ------>
                                <div class="form-group">
                                    <div class="col-sm-offset-2 col-sm-10">
                                        <button type="submit" class="btn btn-success">Save Changes</button>
                                    </div>
                                </div>
                            </form>

                        </div><!------ Content Dashboard End ------>

                        <div class="content-dashboard-my-payment content-dashboard">


                            <table id="paymentTable" class="">
                                <thead>
                                <tr class="" >
                                    <th >Payment Method</th>
                                    <th>Status</th>
                                    <th class="not-sortable">Default</th>
                                    <th class="not-sortable">Update</th>
                                    <th class="not-sortable">Delete</th>
                                </tr>
                                </thead>

                                <tbody>
                                <?php foreach ($userPaymentMethods as $paymentMethod) : ?>
                                    <tr>
                                        <td><?= $paymentMethod->CardType .'('.substr($paymentMethod->CreditCardNumber, -4).')'?></td>
                                        <td><?= $paymentMethod->IsActive?></td>
                                        <td><?= $paymentMethod->IsDefault ?></td>
                                        <td><i class="fa-refresh fa"></i></td>
                                        <td><i class="fa-trash fa"></i></td>
                                    </tr>
                                <?php endforeach;?>
                                </tbody>

                            </table>


                            <div>
                                <button class="btn btn-primary show-panel add-payment-method-btn">ADD PAYMENT METHOD</button>
                            </div>

                            <p>*By holding SHIFT and left-clicking on table headers you can sort multiple columns</p>

                        </div><!------ Payment Dashboard End ------>

                        <!------ My Transactions Dashboard ------>
                        <div class="content-dashboard-my-transactions content-dashboard">
                            <table id="" class="">
                                <thead>
                                <tr class="" >
                                    <th>Transaction</th>
                                    <th>ID</th>
                                    <th>Date</th>
                                    <th>Amount</th>
                                    <th>Lottery</th>
                                    <th>Product</th>
                                    <th>Method</th>
                                </tr>
                                </thead>

                                <tbody>
                                <?php foreach ($userTransactions as $userTransaction) : ?>
                                <tr>
                                    <td><?= $userTransaction->Name?></td>
                                    <td><?= $userTransaction->TransactionId?></td>
                                    <td><?= $userTransaction->Date ?></td>
                                    <td><?= $userTransaction->Amount?></td>
                                    <td><?= $userTransaction->TransactionType?></td>
                                    <td><?= $userTransaction->ProductName?></td>
                                    <td><?= $userTransaction->Method?></td>
                                </tr>
                                <?php endforeach;?>
                                </tbody>
                            </table>
                            <p>*By holding SHIFT and left-clicking on table headers you can sort multiple columns</p>
                        </div><!------ My Transactions Dashboard ------>


                        <!------ My Tickets Dashboard ------>
                        <div class="content-dashboard-my-tickets content-dashboard">

                            <table id="ticketsTable" class="">
                                <thead>
                                <tr class="" >
                                    <th>Country</th>
                                    <th>Lottery</th>
                                    <th>Date</th>
                                    <th>Status</th>
                                    <th>Winnings</th>
                                    <th>Details</th>
                                </tr>
                                </thead>

                                <tbody>
                                <?php foreach ($tickets as $ticket) : ?>
                                    <tr>
                                        <td><?= $ticket->LotteryName ?></td>
                                        <td><?= $ticket->DrawDate ?></td>
                                        <td><?= $ticket->WinMoney == 0 ? 'Lost' : "Win"?>/td>
                                        <td><?= $ticket->WinMoney ?></td>
                                        <td><i class="fa fa-chevron-circle-up"></i></td>
                                    </tr>
                                <?php endforeach;?>
                                </tbody>

                            </table>
                            <br/>


                            <p>*By holding SHIFT and left-clicking on table headers you can sort multiple columns</p>
                        </div><!------ My Tickets Dashboard ------>


                        <!------ My Products Dashboard ------>
                        <div class="content-dashboard-my-products content-dashboard">

                            <table id="productsTable" class="">
                                <thead>
                                <tr class="" >
                                    <th>Country</th>
                                    <th>Lottery</th>
                                    <th>Group Shares</th>
                                    <th>Draws Left</th>
                                    <th>Total Lines</th>
                                    <th>Start Date</th>
                                    <th>End Date</th>
                                    <th>Status</th>
                                    <th></th>
                                </tr>
                                </thead>

                                <tbody>
                                <?php foreach ($products as $product) : ?>
                                    <tr>
                                        <td><img src="<?php bloginfo('stylesheet_directory'); ?>/assets/img/dashboard/mini-flag-usa.png" alt="USA"/>MC</td>
                                        <td>PowerBall</td>
                                        <td>0</td>
                                        <td><span class="table-color-red">0</span>/1</td>
                                        <td>1</td>
                                        <td>01 Dec 2015</td>
                                        <td>02 Dec 2015</td>
                                        <td>Inactive</td>
                                        <td><i class="fa fa-chevron-circle-up"></i></td>
                                    </tr>
                                <?php endforeach;?>

                                </tbody>

                            </table>
                            <br/>


                            <p>*By holding SHIFT and left-clicking on table headers you can sort multiple columns</p>
                        </div><!------ My Products Dashboard ------>









                        <!------ Banner ------>
                        <div class="dashboard-banner">
                            <img src="<?php bloginfo('stylesheet_directory'); ?>/assets/img/dashboard/dashboard-banner-powerball.png" alt="Banner"/>
                            <div class="dashboard-banner-countdown">
                                <i class="fa fa-clock-o"></i>
                                <div class="countdown-timer">
                                    <p>03:12:45:23</p>
                                    <h6>days hrs min sec</h6>
                                </div>
                            </div>
                            <a href="<?php bloginfo('url') ?>/see-all-individual-page"><button class="btn btn-success">BUY TICKETS</button></a>
                        </div><!------ Banner ------>

                        <div class="panel panel-default" id="addPaymentMethodPanel">
                            <div class="panel-heading">ADD PAYMENT METHOD
                                <button type="button" class="close-panel">
                                    <span aria-hidden="true">&times;</span><span class="sr-only">Close</span>
                                </button>
                            </div>
                            <div class="panel-body">
                                <p class="panel-body-title">Credit Card</p>
                                <hr/>
                                <form class="paymentMethodForm">
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Card Number</label>
                                        <input type="text" class="form-control" id="exampleInputEmail1" placeholder="xxxx-xxxx-xxxx-xxxx">
                                    </div>
                                    <div class="form-group pick-a-date">
                                        <label for="expirationDay">Expiration Date:</label>
                                        <br/>
                                        <select id="expirationDay">
                                            <option value="01">01</option>
                                            <option value="02">02</option>
                                            <option value="03">03</option>
                                            <option value="04">04</option>
                                            <option value="05">05</option>
                                            <option value="06">06</option>
                                            <option value="07">07</option>
                                            <option value="08">08</option>
                                            <option value="09">09</option>
                                            <option value="10">10</option>
                                            <option value="11">11</option>
                                            <option value="12">12</option>
                                            <option value="13">13</option>
                                            <option value="14">14</option>
                                            <option value="15">15</option>
                                            <option value="16">16</option>
                                            <option value="17">17</option>
                                            <option value="18">18</option>
                                            <option value="19">19</option>
                                            <option value="20">20</option>
                                            <option value="21">21</option>
                                            <option value="22">22</option>
                                            <option value="23">23</option>
                                            <option value="24">24</option>
                                            <option value="25">25</option>
                                            <option value="26">26</option>
                                            <option value="27">27</option>
                                            <option value="28">28</option>
                                            <option value="29">29</option>
                                            <option value="30">30</option>
                                            <option value="31">31</option>
                                        </select>

                                        <select id="expirationDate">
                                            <option value="2015">2015</option>
                                            <option value="2016">2016</option>
                                            <option value="2017">2017</option>
                                            <option value="2018">2018</option>
                                            <option value="2019">2019</option>
                                            <option value="2020">2020</option>
                                            <option value="2021">2021</option>
                                            <option value="2022">2022</option>
                                            <option value="2023">2023</option>
                                            <option value="2024">2024</option>
                                            <option value="2025">2025</option>
                                        </select>

                                        <div class="form-group cvv">
                                            <label for="cvv">CVV</label>
                                            <input type="text" class="form-control" id="cvv" placeholder="123">
                                        </div>

                                    </div>

                                    <div class="form-group">
                                        <label for="fullName">Full Name</label>
                                        <input type="text" class="form-control" id="fullName" placeholder="John Smith">
                                    </div>

                                    <!------ Submit Button ------>
                                    <div class="form-group submit-form-method">
                                        <button type="submit" class="btn btn-success">Save Changes</button>
                                    </div>

                                    <img src="<?php bloginfo('stylesheet_directory'); ?>/assets/img/dashboard/credit-card.png" alt="Credit Card Image"/>



                                </form>

                            </div>
                        </div>


                    </div><!-- Row -->
                </div><!-- Container -->

                <!------ Sidebar ------>
                <div class="col-sm-3 dashboard-sidebar">
                    <!------ Sidebar My Account Header ------>
                    <h3>My Account</h3>

                    <!------ Username Field ------>
                    <div class="sidebar-username">
                        <img src="<?php bloginfo('stylesheet_directory'); ?>/assets/img/dashboard/sidebar-user.png" alt="User"/>
                        <?= $userDetails->FirstName . ' ' . $userDetails->LastName ?>
                    </div><!------ Username Field ------>
                    <!------ Money Field ------>
                    <div class="sidebar-money">
                        <img src="<?php bloginfo('stylesheet_directory'); ?>/assets/img/dashboard/sidebar-money.png" alt="Money"/>
                        <div>
                            <p class="money-text">Real Money:</p><p class="amount">$0.00</p>
                            <p class="money-text">Bonus Money:</p><p class="amount">$0.00</p>
                        </div>
                    </div><!------ Money Field ------>

                    <!------ Progress Field ------>
                    <div class="progress-field">
                        <div class="container">
                            <img src="<?php bloginfo('stylesheet_directory'); ?>/assets/img/dashboard/sidebar-coin.png" alt="Coin"/>

                            <p class="my-jinni-points">My Jinni Points</p>
                            <p class="actual-points">30</p>
                            <div class="progress">
                                <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100" style="width: 30%">
                                    <span class="sr-only">40% Complete (success)</span>
                                </div>
                            </div>
                            <p class="points-to-next-level">Points to next level</p>
                            <p class="target-points">100</p>

                        </div>
                        <div class="container">
                            <a href="<?php bloginfo('url') ?>/deposit"><button class="btn btn-primary">Deposit</button></a>
                            <a href="<?php bloginfo('url') ?>/withdraw"><button class="btn btn-primary">Withdraw</button></a>
                        </div>
                    </div>

                    <!------ Sidebar Call To Action ------>
                    <div class="sidebar-cta-holder"><button class="sidebar-cta btn">BUY A TICKET</button></div>

                    <!------ Sidebar Tips ------>
                    <div class="join-our-lotto-groups">
                        <a href="#"><img src="<?php bloginfo('stylesheet_directory'); ?>/assets/img/dashboard/lotto-groups.png" alt=""/></a>
                    </div>
                    <div class="sidebar-tip">
                        <h5>Increase your winning chances</h5>
                        <img src="<?php bloginfo('stylesheet_directory'); ?>/assets/img/dashboard/sidebar-tip.png" alt="Tip"/>
                        <p><span class="bolded">Did you know?</span> <br/>
                            That 1 out of 3 wins in Lottery Groups</p>
                    </div><!------ Sidebar Tips ------>

                    <!------ Sidebar Lotto Game ------>
                    <div class="sidebar-cta-lotto">
                        <img src="<?php bloginfo('stylesheet_directory'); ?>/assets/img/groupplay/group-powerball.png" alt="Powerball"/>
                        <div>
                            <h5>POWERBALL</h5>
                            <p>$110 Million</p>
                        </div>
                        <button class="btn btn-primary">JOIN NOW!</button>
                    </div>

                </div><!------ Sidebar ------>

            </div>
        </div>

    </section>

<?php

get_footer();
