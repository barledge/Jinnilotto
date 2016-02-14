<?php
use WegeTech\LottoYard\Model\LotteryTypes;use WegeTech\LottoYard\Model\User;
/**
 * The header for our theme.
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Jinni_Lotto
 */
function resolveLottoImage($lottoName){
    switch($lottoName) {
        case "PowerBall":
            $imageClass = 'game-image-powerball';
            $countdownClass = 'game-countdown-powerball';
            $normalizedName = 'powerball-ticket';
            $gameLink = 'powerball-ticket';
            break;
        case "MegaMillions":
            $imageClass = 'game-image-megamillions';
            $countdownClass = 'game-countdown-megamillions';
            $normalizedName = 'megamillions-ticket';
            $gameLink = 'megamillions-ticket';
            break;
        case "EuroJackpot":
            $imageClass = 'game-image-eurojackpot';
            $countdownClass = 'game-countdown-eurojackpot';
            $normalizedName = 'eurojackpot';
            $gameLink = 'eurojackpot';
            break;
        case "LaPrimitiva":
            $imageClass = 'game-image-laprimitiva';
            $countdownClass = 'game-countdown-laprimitiva';
            $gameLink = 'la-primitiva-ticket';
            $normalizedName = 'la-primitiva-ticket';
            break;
        case "UkLotto":
            $imageClass = 'game-image-uk';
            $countdownClass = 'game-countdown-uk';
            $normalizedName = 'uk-lotto-ticket';
            $gameLink ='uk-lotto-ticket';
            break;
        case "EuroMillions":
            $imageClass = 'game-image-euromillion';
            $countdownClass = 'game-countdown-euromillion';
            $normalizedName = 'euromillion-ticket';
            $gameLink ='euromillion-ticket';
            break;
        case "Lotto649":
            $imageClass = 'game-image-649';
            $countdownClass = 'game-countdown-649';
            $normalizedName = 'lotto-649-ticket';
            $gameLink = 'lotto-649-ticket';
            break;
        case "NewYorkLotto":
            $imageClass = 'game-image-newyork';
            $countdownClass = 'game-countdown-newyork';
            $normalizedName = 'new-york-lotto-ticket';
            $gameLink = 'new-york-lotto-ticket';
            break;
        case "ElGordo":
            $imageClass = 'game-image-elgordo';
            $countdownClass = 'game-countdown-elgordo';
            $normalizedName = 'el-gordo-ticket';
            $gameLink = 'el-gordo-ticket';
            break;
        case "BonoLoto":
            $imageClass = 'game-image-bonnolotto';
            $countdownClass = 'game-countdown-bonnolotto';
            $normalizedName = 'bonnolotto-ticket';
            $gameLink = 'bonnolotto-ticket';
            break;
        case "SuperEnalotto":
            $imageClass = 'game-image-superena';
            $countdownClass = 'game-countdown-superena';
            $normalizedName = 'superena-ticket';
            $gameLink = 'superena-ticket';
            break;
        default:
            $imageClass = '';
            $countdownClass = '';
            $normalizedName = '';
            $gameLink = '';
    }

    return array($imageClass, $countdownClass, $normalizedName, $gameLink);
}

function getLottoName($lottoId){
    switch($lottoId){
        case LotteryTypes::PowerBall:
            $lottoName = 'PowerBall';
            break;
        case LotteryTypes::BonoLoto:
            $lottoName = 'BonoLoto';
            break;
        case LotteryTypes::Canada649:
            $lottoName = 'Canada649';
            break;
        case LotteryTypes::ElGordo:
            $lottoName = 'ElGordo';
            break;
        case LotteryTypes::EuroJackpot:
            $lottoName = 'EuroJackpot';
            break;
        case LotteryTypes::EuroMillions:
            $lottoName = 'EuroMillions';
            break;
        case LotteryTypes::LaPrimitiva:
            $lottoName = 'LaPrimitiva';
            break;
        case LotteryTypes::MegaMillions:
            $lottoName = 'MegaMillions';
            break;
        case LotteryTypes::Navidad:
            $lottoName = 'Navidad';
            break;
        case LotteryTypes::NYLotto:
            $lottoName = 'NYLotto';
            break;
        case LotteryTypes::SuperEnalotto:
            $lottoName = 'SuperEnalotto';
            break;
        case LotteryTypes::UKLotto:
            $lottoName = 'UKLotto';
            break;
        default:
            $lottoName = 'Undefined';
    }

    return $lottoName;
}


?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <!-- <meta name="viewport" content="width=device-width, initial-scale=1"> -->
    <meta name="viewport" content="width=1024">
    <link rel="profile" href="http://gmpg.org/xfn/11">
    <link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">

    <!-- Responsive and reset styles -->
    <link href="<?php bloginfo('stylesheet_directory'); ?>/assets/css/bootstrap.css" rel="stylesheet">

    <!--Cell phone custom style -->
    <link href="<?php bloginfo('stylesheet_directory'); ?>/assets/css/cell-custom.css" rel="stylesheet">

    <!-- Font Awesome -->
    <link href="<?php bloginfo('stylesheet_directory'); ?>/assets/css/font-awesome.min.css" rel="stylesheet">

    <!-- CSS for Hover Animations -->
    <link href="<?php bloginfo('stylesheet_directory'); ?>/assets/css/hover-min.css" rel="stylesheet">

    <!-- CSS for dataTables -->
    <link href="<?php bloginfo('stylesheet_directory'); ?>/assets/css/dataTable.min.css" rel="stylesheet">

    <?php wp_head(); ?>

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->

</head>

<body <?php body_class(); ?>>
<div id="page" class="site">
    <a class="skip-link screen-reader-text" href="#content"><?php esc_html_e( 'Skip to content', 'jinni-lotto' ); ?></a>

    <script>
        function preload(arrayOfImages) {
            $(arrayOfImages).each(function(){
                $('<img/>')[0].src = this;
                // Alternatively you could use:
                // (new Image()).src = this;
            });
        }

        // Usage:

        preload([
            "<?php bloginfo('template_directory'); ?>/assets/img/icon-lotteries-hover.png",
            "<?php bloginfo('template_directory'); ?>/assets/img/icon-teamplay-hover.png",
            "<?php bloginfo('template_directory'); ?>/assets/img/icon-results-hover.png",
            // "<?php bloginfo('template_directory'); ?>/assets/img/icon-tools-hover.png",
            "<?php bloginfo('template_directory'); ?>/assets/img/icon-help-hover.png"
        ]);
    </script>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>

    <script type="text/javascript" src="//jinnilotto.com/wp-content/themes/jinni-lotto/assets/js/jquery.countdown.js"></script>

    <!---================  Header Area
    =======================================================================-->

    <header class="smaller-header" role="banner">

        <nav role="navigation">
            <!--Center Navigation-->
            <div class="center-navigation">

                <!--Logo image-->
                <a href="/"><img class="" id="logo" src="<?php bloginfo('stylesheet_directory'); ?>/assets/img/logo.png" alt="Jinni Lotto Logo"></a>

                <!--Menu list-->

                <div id="menu-button">
                    <button id="menu-small-desktop"><i class="fa fa-bars"></i></button>

                    <div class="menu-show">
                        <ul>
                            <li>
                                <button onclick="location.href='<?php bloginfo('url') ?>/see-all-individual-page';" class="menu-lotteries-button"><img class="menu-lotteries" src="<?php bloginfo('stylesheet_directory'); ?>/assets/img/icon-lotteries.png" alt="Lotteries Image"><br>LOTTERIES</button>
                            </li>
                            <li>
                                <button onclick="location.href='<?php bloginfo('url') ?>/powerball-ticket/#teamPurchase';"><img class="menu-teamplay" src="<?php bloginfo('stylesheet_directory'); ?>/assets/img/icon-teamplay.png" alt="Team Play Icon"><br>TEAM PLAY</button>
                            </li>
                            <li>
                                <button onclick="location.href='<?php bloginfo('url') ?>/see-all-results';"><img class="menu-results" src="<?php bloginfo('stylesheet_directory'); ?>/assets/img/icon-results.png" alt="Results"><br>RESULTS</button>
                            </li>
                            <!-- <li>
                                <button onclick="location.href='<?php bloginfo('url') ?>/commingsoon';"><img class="menu-lotterytools" src="<?php bloginfo('stylesheet_directory'); ?>/assets/img/icon-tools.png" alt="Tools"><br>LOTTERY TOOLS</button>
                            </li> -->
                            <li>
                                <button><img class="menu-help" src="<?php bloginfo('stylesheet_directory'); ?>/assets/img/icon-help.png" alt="Support"><br>HELP</button>
                            </li>
                        </ul><!--Menu list-->
                    </div>
                </div>

                <!--Menu list-->
                <ul id="large-desktop-menu">
                    <li>
                        <button onclick="location.href='<?php bloginfo('url') ?>/see-all-individual-page';" class="menu-lotteries-button"><img class="menu-lotteries" src="<?php bloginfo('stylesheet_directory'); ?>/assets/img/icon-lotteries.png" alt="Lotteries Image"><br>LOTTERIES</button>

                    </li>

                    <li>
                        <button onclick="location.href='<?php bloginfo('url') ?>/powerball-ticket/#teamPurchase';" class="menu-teamplay-button"><img class="menu-teamplay" src="<?php bloginfo('stylesheet_directory'); ?>/assets/img/icon-teamplay.png" alt="Team Play Icon"><br>TEAM PLAY</button>
                    </li>
                    <li>
                        <button onclick="location.href='<?php bloginfo('url') ?>/see-all-results';" class="menu-results-button"><img class="menu-results" src="<?php bloginfo('stylesheet_directory'); ?>/assets/img/icon-results.png" alt="Results"><br>RESULTS</button>
                    </li>
                    <!-- <li>
                        <button onclick="location.href='<?php bloginfo('url') ?>/commingsoon';" class="menu-lotterytools-button"><img class="menu-lotterytools" src="<?php bloginfo('stylesheet_directory'); ?>/assets/img/icon-tools.png" alt="Tools"><br>LOTTERY TOOLS</button>
                    </li> -->
                    <li>
                        <button class="menu-help-button"><img class="menu-help" src="<?php bloginfo('stylesheet_directory'); ?>/assets/img/icon-help.png" alt="Support"><br>HELP</button>
                        <div class="header-help-menu">
                            <ul>
                                <li class="list-items"><a href="<?php bloginfo('url'); ?>/about-us">About Us</a></li>
                                <li class="list-items"><a href="<?php bloginfo('url'); ?>/contact-us">Contact Us</a></li>
                                <li class="list-items"><a href="<?php bloginfo('url'); ?>/faq">FAQ</a></li>
                                <li class="list-items"><a href="<?php bloginfo('url'); ?>/safety-and-security">Safety & Security</a></li>
                                <li class="list-items"><a href="<?php bloginfo('url'); ?>/terms-conditions">Terms & Conditions</a></li>
                            </ul>
                        </div>
                    </li>
                </ul><!--Menu list-->

                <!--Sign Up and Log In-->
                <div class="client-login">
                <?php
                if (!is_user_logged_in()) : ?>
                    <button id="signup" class="">SIGN UP</button>
                    <img class="img-separator" src="<?php bloginfo('stylesheet_directory'); ?>/assets/img/login-separator.png" alt="|">
                    <button id="login" class="">LOG IN</button>

                    <div class="signup-bubble">

                        <div class="options">
                            <ul>
                                <li><img src="<?php bloginfo('stylesheet_directory'); ?>/assets/img/sign-up-icon.png" alt="Sign Up">

                                    <p>Sign up and get a FREE ticket</p></li>
                                <li><img src="<?php bloginfo('stylesheet_directory'); ?>/assets/img/easy-and-secure.png" alt="Secure">

                                    <p>Easy nad Secure Payments</p></li>
                                <li><img src="<?php bloginfo('stylesheet_directory'); ?>/assets/img/ticket-scan.png" alt="Scan">

                                    <p>Ticket Scan Guarantee</p></li>
                                <li><img src="<?php bloginfo('stylesheet_directory'); ?>/assets/img/smart-support.png" alt="Support">

                                    <p>24/7 Customer Support</p></li>
                                <li><img src="<?php bloginfo('stylesheet_directory'); ?>/assets/img/live-lotto.png" alt="Live Lotto">

                                    <p>Live Lottery Results</p></li>
                            </ul>
                        </div>

                        <div class="signup-form">
                            <h3>Welcome To Jinni Lotto</h3>
                            <button id="facebook-signup"><img src="<?php bloginfo('stylesheet_directory'); ?>/assets/img/connect-facebook.png" alt="Facebook"></button>

                            <form id="signup-header" action="/users/" method="POST">
                                    <input type="hidden" name="action" id="action" value="register" >
                                <div class="form-group">
                                    <input type="email" name="InputEmailSignup" class="form-control" id="InputEmailSignup" placeholder="E-mail">
                                </div>

                                <div class="form-group">
                                    <input type="password" name="InputPasswordSignup" class="form-control" id="InputPasswordSignup" placeholder="Password">
                                </div>

                                <div class="form-group">
                                    <input type="text" name="FullName" class="form-control" id="FullNameSignup" placeholder="Full Name">
                                </div>

                                <div class="form-group">
                                    <input type="text" name="PhoneNumber" class="form-control" id="PhoneNumber" placeholder="Phone Number">
                                </div>

                                

                                

                                <p class="hint-for-signup"><i class="fa fa-star"></i>Winnings are notified by phone
                                    Please make sure your number is correct</p>

                                <button type="button" class="submit-signup">CREATE ACCOUNT</button>
                            </form>

                            <p>Already a member? <a href="#" class="logInLink">Log In Here</a></p>
                        </div>

                    </div>

                    <div class="login-bubble">
                        <div class="login-form">
                            <h3>Welcome To Jinni Lotto</h3>
                            <button id="facebook-login"><img src="<?php bloginfo('stylesheet_directory'); ?>/assets/img/connect-facebook.png" alt="Facebook"></button>

                            <form id="login-header" action="/users" method="POST">
                                    <input type="hidden" name="action" id="action" value="login" >
                                <div class="form-group">
                                    <input type="email" name="InputEmailLogin" class="form-control" id="InputEmailLogin" placeholder="E-mail">
                                </div>

                                <div class="form-group">
                                    <input type="password" name="InputPasswordLogin" class="form-control" id="InputPasswordLogin" placeholder="Password">
                                </div>
                                <h6><a href="" id="forgot-password">Forgot password...?</a></h6>

                                <button type="button" class="submit-login">LOG IN</button>
                            </form>

                            <p>Not a member yet? <a href="/" class="signUpLink">Sign Up Here</a></p>
                        </div>
                    </div>
                    
                    <div class="forgot-bubble">
                        <h3>Forgot password</h3>
                        <p class="pForgot">Please enter your email adress</p>
                        <form id="forgot-header" action="#" method="POST">
                                <input type="hidden" name="action" id="action" value="login" >
                            <div class="form-group">
                                <input type="email" name="InputEmailForgot" class="form-control" id="InputEmailForgot" placeholder="E-mail">
                            </div>
                            <button type="button" class="submit-forgot hvr-shadow">RESET</button>
                        </form>
                    </div>


                    <?php else:?>
                        <?php /** @var User $currentUser */
                        session_start();
                        $currentUser = $_SESSION['userData']['user'];
                        $balance = $_SESSION['userData']['money'];
                    ?>
                    <div class="user-logged-in">
                        <div class="my-account-header">
                            <img src="<?php (bloginfo('template_directory')); ?>/assets/img/user-logged-in.png">
                            <p>My Account<br><span class="text-blue"><?php echo $currentUser->FirstName .' '. $currentUser->LastName ?></span></p>
                        </div>
                        <div class="my-account-dropdown">
                            <div class="dropdown-header">
                                <img src="<?php (bloginfo('template_directory')); ?>/assets/img/user-logged-in.png">
                                <p id="logged-in-user"><span class="text-blue"><?php echo $currentUser->FirstName .' '. $currentUser->LastName ?></span></p>
                            </div>
                            <div class="clearfix"></div>

                            <p><span class="pull-left">Real Money:</span> <span class="pull-right">&euro;<?= $balance->AccountBalance?></span></p>
                            <div class="clearfix"></div>
                            <p><span class="pull-left">Bonus Money:</span> <span class="pull-right">&euro;<?= $balance->BonusAmount?></span></p>
                            <div class="clearfix"></div>
                            <hr>
                            <button class="btn deposit-button">DEPOSIT</button>
                            <br>
                            <ul>
                                <a href="<?php bloginfo('url'); ?>/dashboard"><li><img src="<?php (bloginfo('template_directory')); ?>/assets/img/dropdown-icon-account.png" alt="">Account Details</li></a>
                                <a href="<?php bloginfo('url'); ?>/cart"><li><i class="fa fa-shopping-cart"></i>Cart</li></a>
                                <a href="<?php bloginfo('url'); ?>/dashboard"><li><img src="<?php (bloginfo('template_directory')); ?>/assets/img/dropdown-icon-tickets.png" alt="">My Tickets</li></a>
                                <a href="#" id="logout"><li>
                                    <img src="<?php (bloginfo('template_directory')); ?>/assets/img/dropdown-icon-logout.png" alt="">Logout
                                </li></a>
                            </ul>

                        </div>
                    </div>
                    <?php endif; ?>
                </div><!--Sign Up and Log In-->

                <!--Lotteries-->
                <?php
                /** @var \WegeTech\LottoYard\Service $lottoService */
                global $lottoService;
                $response = $lottoService->getAllDraws();
                /** @var \WegeTech\LottoYard\Model\Draw[] $drawsData */
                $drawsData = $response->data;
                ?>
                <div class="lotteries-dropdown">
                    <?php foreach ($drawsData as $key=>$item) : ?>
                        <?php
                        if($key >= 5){
                            break;
                        }
                        list($imageClass, $countdownClass, $normalizedName, $gameLink) = resolveLottoImage($item->LotteryName);
                        ?>
                        <div class="game-holder-header">
                            <img src="<?php bloginfo('stylesheet_directory'); ?>/assets/img/header-<?= $normalizedName?>.png" alt="<?= $item->LotteryName?>">
                            <h5 id="powerball-prize"><?= $item->LotteryCurrency2 ?><?= round($item->Jackpot/1000000, 2) ?> Millions</h5>
                            <p id="<?= $countdownClass?>"><i class="fa fa-clock-o"></i><?= $item->DrawDate?></p>
                            <div class="lotteries-buttons">
                                <a href="<?php bloginfo('url'); ?>/<?= $gameLink; ?>"><button class="header-play-now">PICK NUMBERS</button></a>
                                <a href="<?php bloginfo('url'); ?>/<?= $gameLink; ?>"><button class="header-quick-buy">QUICK BUY</button></a>
                            </div>
                        </div>

                        <script type="text/javascript">
                            $("#<?= $countdownClass ?>").countdown("<?= date("m/d/Y H:i:s" , strtotime($item->DrawDate)) ?>", function(event) {
                                $(this).text(
                                    event.strftime('%D:%H:%M:%S')
                                );
                            });
                        </script>

                        <div class="view-all-lotto-header">
                            <a href="<?php bloginfo('url'); ?>/see-all-individual-page"><button id="view-all-lotto-header">VIEW ALL LOTTERIES</button></a>
                        </div>
                    <?php endforeach; ?>
                </div>

                <!--Choose Language-->
                <div class="language">
                    <button id="language-selector"><img src="<?php bloginfo('stylesheet_directory'); ?>/assets/img/flag-uk.png" alt=">">EN<i class="fa fa-caret-down"></i></button>
                </div><!--Choose Language-->

                <div class="languages-choice">
                    <ul>
                        <li><button><img src="<?php bloginfo('stylesheet_directory'); ?>/assets/img/uk.png" alt="English"></button></li>
                        <!-- <li><button><img src="<?php bloginfo('stylesheet_directory'); ?>/assets/img/russia.png" alt="Russian"></button></li> -->
                    </ul>
                </div>

            </div><!--Center Navigation-->
        </nav>
    </header>