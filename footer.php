<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Jinni_Lotto
 */

?>


<?php wp_footer(); ?>

    <section id="footer-payments">
        <img src="<?php bloginfo('stylesheet_directory'); ?>/assets/img/payment-options.png" alt="Payement Options">
    </section>

    <section id="footer">
        <div class="container">
            <div class="row">

                <div class="social-footer">
                    <img src="<?php bloginfo('stylesheet_directory'); ?>/assets/img/logo.png" alt="Jinni Lotto">
                    <p>Share Jinnilotto with friends</p>
                    <div class="social-circle hvr-bounce-in"><a target="_blank" href="https://www.facebook.com/JinniLotto-1077438272290716/"><i class="fa fa-facebook"></i></a></div>
<!--                    <div class="social-circle hvr-bounce-in"><a href="/"><i class="fa fa-twitter"></i></a></div>-->
<!--                    <div class="social-circle hvr-bounce-in"><a href="/"><i class="fa fa-google-plus"></i></a></div>-->
                    <div class="social-circle hvr-bounce-in"><a target="_blank" href="https://www.youtube.com/channel/UC4RsEz4TxUWKvCSYanloDeA"><i class="fa fa-youtube"></i></a></div>

                </div>

                <div id="footer-lotteries" class="col-sm-2 col-sm-offset-4">
                    <h4>About JinniLotto</h4>
                    <ul>
                        <li><a href="<?php bloginfo('url'); ?>/contact-us">Contact JinniLotto</a></li>
                        <li><a href="<?php bloginfo('url'); ?>/privacy-policy">Privacy Policy</a></li>
                        <li><a href="<?php bloginfo('url'); ?>/safety-and-security">Safety And Security</a></li>
                        <li><a href="<?php bloginfo('url'); ?>/terms-conditions">Terms And Conditions</a></li>
                    </ul>
                </div>

                <div class="col-sm-2">
                    <h4>Official Lottery</h4>
                    <ul>
                        <li><a href="<?php bloginfo('url'); ?>/see-all-results">View All Lotteries</a></li>
                        <li><a href="<?php bloginfo('url'); ?>/powerball-ticket">Play Powerball</a></li>
                        <li><a href="<?php bloginfo('url'); ?>/megamillions-ticket">Play MegaMillions</a></li>
                        <li><a href="<?php bloginfo('url'); ?>/euromillion-ticket">Play EuroMillions</a></li>
                        <li><a href="<?php bloginfo('url'); ?>/lotto-649-ticket">Play Lotto649</a></li>
                        <li><a href="<?php bloginfo('url'); ?>/la-primitiva-ticket">Play La Primitiva</a></li>
                        <li><a href="<?php bloginfo('url'); ?>/superena-ticket">Play SuperEnaLotto</a></li>
                        <li><a href="<?php bloginfo('url'); ?>/eurojackpot">Play EuroJackpot</a></li>
                    </ul>
                </div>

                <div class="col-sm-2">
                    <h4>Lottery Results</h4>
                    <ul>
                        <li><a href="<?php bloginfo('url'); ?>/see-all-results">View All Results</a></li>
                        <li><a href="<?php bloginfo('url'); ?>/see-all-results">Powerball Results</a></li>
                        <li><a href="<?php bloginfo('url'); ?>/see-all-results">MegaMillions Results</a></li>
                        <li><a href="<?php bloginfo('url'); ?>/see-all-results">EuroMillions Results</a></li>
                        <li><a href="<?php bloginfo('url'); ?>/see-all-results">Lotto649 Results</a></li>
                        <li><a href="<?php bloginfo('url'); ?>/see-all-results">La Primitiva Results</a></li>
                        <li><a href="<?php bloginfo('url'); ?>/see-all-results">SuperEnalotto Results</a></li>
                        <li><a href="<?php bloginfo('url'); ?>/see-all-results">EuroJackpot Results</a></li>
                    </ul>
                </div>

                <div class="col-sm-2">
                    <h4>For Players</h4>
                    <ul>
                        <li><a href="<?php bloginfo('url'); ?>/bonus-loyalty-program">Bonus & Loyalty Program</a></li>
                        <li><a href="<?php bloginfo('url'); ?>/payment-methods">Payment Methods</a></li>
                        <li><a href="<?php bloginfo('url'); ?>/faq">Lottery FAQ</a></li>
                        <!--<li><a href="<?php /*bloginfo('url'); */?>/commingsoon">Lottery News</a></li>-->
                    </ul>
                </div>
<!--
                <div class="col-sm-2">
                    <h4>Help</h4>
                    <ul>
                        <li><a href="/">How To Buy Tickets</a></li>
                        <li><a href="/">Glossary</a></li>
                        <li><a href="/">FAQ</a></li>
                        <li><a href="/">Payment Methodds</a></li>
                        <li><a href="/">Responsible Gaming</a></li>
                    </ul>
                </div>
-->
            </div>
        </div>

        <div class="container bottom-footer">
            <div class="row">
                <div class="col-sm-2 reserved">
                    <p>&copy; 2015 JinniLotto</p>
                    <p>All Rights Reserved</p>
                </div>
                <div class="col-sm-10">
                    <img src="<?php bloginfo('stylesheet_directory'); ?>/assets/img/footer-sponsors.png" alt="A list of all sponsors">
                </div>
            </div>
            <div class="row">
                <p class="center">www.JinniLotto.com is owned and operated by Jinni Tech Limited (Company Registration Number: C 72030) located at 7A ,Sir Luigi Camilleri Street, Sliema, SLM 1843, Malta and is powered by LottoYard.</p>
            </div>
        </div>
    </section>

</div><!--desktop view-->

<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>

<!-- Include all compiled plugins (below), or include individual files as needed -->
<script src="<?php bloginfo('template_directory'); ?>/assets/js/bootstrap.min.js"></script>

<!-- Custom JS -->
<script src="<?php bloginfo('template_directory'); ?>/assets/js/custom.js"></script>

<!-- Tablesorter JS -->
<script src="<?php bloginfo('template_directory'); ?>/assets/js/dataTables.min.js"></script>

<script src="<?php bloginfo('template_directory'); ?>/assets/js/classie.js"></script>

<script src="<?php bloginfo('template_directory'); ?>/assets/js/jquery.nicescroll.min.js"></script>

<script src="<?php bloginfo('template_directory'); ?>/assets/js/jquery.countdown.js"></script>

<script src="<?php bloginfo('template_directory'); ?>/assets/js/cart.js"></script>

<script src="<?php bloginfo('template_directory'); ?>/assets/js/pie.js"></script>

<script src="<?php bloginfo('template_directory'); ?>/assets/js/arcticmodal.min.js"></script>

<script src="<?php bloginfo('template_directory'); ?>/assets/js/jquery.maskedinput.min.js"></script>

<script src="<?php bloginfo('template_directory'); ?>/assets/js/ikSelect.js"></script>

<script src="<?php bloginfo('template_directory'); ?>/assets/js/incremental-counter.js"></script>



<!--

<script type="text/javascript">
    /*Handling the scroller*/
    $(document).ready(
            function() {
                $("body").niceScroll({cursorcolor:"#0a548b", smoothscroll:"true", zindex:"9999", cursorwidth:"7" });
            }
    );
</script>
-->

<script type="text/javascript">

    var menuLeft = document.getElementById( 'cbp-spmenu-s1' ),

            body = document.body;

    showLeft.onclick = function() {
        classie.toggle( this, 'active' );
        classie.toggle( menuLeft, 'cbp-spmenu-open' );
        disableOther( 'showLeft' );
    };

    function disableOther( button ) {
        if( button !== 'showLeft' ) {
            classie.toggle( showLeft, 'disabled' );
        }
        if( button !== 'showRight' ) {
            classie.toggle( showRight, 'disabled' );
        }
        if( button !== 'showTop' ) {
            classie.toggle( showTop, 'disabled' );
        }
        if( button !== 'showBottom' ) {
            classie.toggle( showBottom, 'disabled' );
        }
        if( button !== 'showLeftPush' ) {
            classie.toggle( showLeftPush, 'disabled' );
        }
        if( button !== 'showRightPush' ) {
            classie.toggle( showRightPush, 'disabled' );
        }
    }

    $("#close-menu").click(function() {
        classie.toggle( showLeft, 'active' );
        classie.toggle( menuLeft, 'cbp-spmenu-open' );
        disableOther( 'showLeft' );
    });

</script>

<script type="text/javascript">
    $('#view-all-lotto').click(function() {
        $('.all-games-wrapper').toggleClass('all-games-wrapper-toggler', 'slow');
    })

    $(function(){
        $("#view-all-lotto").click(function () {
            $(this).text(function(i, text){
                return text === "VIEW ALL LOTTERIES" ? "VIEW LESS LOTTERIES" : "VIEW ALL LOTTERIES";
            })
        });
    })


</script>

<script>

    $('.navigation-block').click(function() {
        $('.navigation-block').removeClass('active-block');
        $(this).addClass("active-block");
    });

    $('.my-details-block').click(function() {
        $('.content-dashboard').css('display', 'none');
        $('.content-dashboard-my-details').css('display', 'block');
    });

    $('.my-payments-block').click(function() {
        $('.content-dashboard').css('display', 'none');
        $('.content-dashboard-my-payment').css('display', 'block');
    });


    $('.my-transactions-block').click(function() {
        $('.content-dashboard').css('display', 'none');
        $('.content-dashboard-my-transactions').css('display', 'block');
    });

    $('.my-tickets-block').click(function() {
        $('.content-dashboard').css('display', 'none');
        $('.content-dashboard-my-tickets').css('display', 'block');
    });

    $('.my-products-block').click(function() {
        $('.content-dashboard').css('display', 'none');
        $('.content-dashboard-my-products').css('display', 'block');
    });
</script>

<script type="text/javascript">

    $(document).ready(function(){
        $('table').DataTable();
    });

    $('#paymentTable').dataTable( {
        "columnDefs": [
            { "orderable": false, "targets": [2, 3, 4] }
        ]
    } );

    $('#productsTable').dataTable( {
        "columnDefs": [
            { "orderable": false, "targets": 8 }
        ]
    } );

</script>

<script type="text/javascript">
    $('.show-panel').click(function() {
        $('#addPaymentMethodPanel').show();
    });

    $('.close-panel').click(function() {
        $('#addPaymentMethodPanel').hide();
    })
</script>

<script>



    $('#dashboard-change-password-btn').click(function() {
        $('.bottom-form').toggle();
    })

</script>

<script type="text/javascript">

    var table = $('#ticketsTable').DataTable();

    table.rows().every( function () {
        this
            .child( [
                $(
                    '<tr class="ticket-preview">'+
                    '<td colspan="1">My Tiket</td>'+
                    '<td colspan="3">Draw Results</td>'+
                    '<td colspan="1" class="">Ticket Scan</td>'+
                    '<td colspan="1" class="">Print</td>'+
                    '</tr>'
                ),
                $(
                    '<tr class="ticket-preview-body" >'+
                    '<td colspan="1">Free Ticket</td>'+

                    '<td colspan="3">'+
                    '<button class="dashboard-table-ticket-number">'+'1'+'</button>'+
                    '<button class="dashboard-table-ticket-number">'+'2'+'</button>'+
                    '<button class="dashboard-table-ticket-number">'+'3'+'</button>'+
                    '<button class="dashboard-table-ticket-number">'+'4'+'</button>'+
                    '<button class="dashboard-table-ticket-number">'+'5'+'</button>'+
                    '<button class="dashboard-table-ticket-number-extra">'+'6'+'</button>'+
                    '<button class="dashboard-table-ticket-number-extra">'+'7'+'</button>'+
                    '</td>'+

                    '<td colspan="1"><a href="#"><img class="scanned-ticket" src="<?php bloginfo('template_directory') ?>/assets/img/dashboard/ticket-scan.png" alt="Scanned Ticket"/></a></td>'+
                    '<td colspan="1"><a href="#"><img src="<?php bloginfo('template_directory') ?>/assets/img/dashboard/print.png" alt="Print"/></a></td>'+
                    '</tr>'
                )
            ] ).show();
    } );
</script>

<script>
    $('.client-login').mouseover(function() {
        $('.my-account-dropdown').addClass('show');
    });
    $('section').mouseover(function() {
        $('.my-account-dropdown').removeClass('show');
    });
</script>

<script>
    $('.menu-lotteries-button').mouseover(function() {
        $('.menu-lotteries').attr('src', "<?php bloginfo('template_directory'); ?>/assets/img/icon-lotteries-hover.png");
        $('.my-account-dropdown').removeClass('show');
    });

    $('.menu-lotteries-button').mouseout(function() {
        $('.menu-lotteries').attr('src', "<?php bloginfo('template_directory'); ?>/assets/img/icon-lotteries.png");
    });

    $('.menu-teamplay-button').mouseover(function() {
        $('.menu-teamplay').attr('src', "<?php bloginfo('template_directory'); ?>/assets/img/icon-teamplay-hover.png");
        $('.lotteries-dropdown').hide();
        $('.my-account-dropdown').removeClass('show');
    });

    $('.menu-teamplay-button').mouseout(function() {
        $('.menu-teamplay').attr('src', "<?php bloginfo('template_directory'); ?>/assets/img/icon-teamplay.png");
    });

    $('.menu-results-button').mouseover(function() {
        $('.menu-results').attr('src', "<?php bloginfo('template_directory'); ?>/assets/img/icon-results-hover.png");
        $('.lotteries-dropdown').hide();
        $('.my-account-dropdown').removeClass('show');
    });

    $('.menu-results-button').mouseout(function() {
        $('.menu-results').attr('src', "<?php bloginfo('template_directory'); ?>/assets/img/icon-results.png");
    });

    $('.menu-lotterytools-button').mouseover(function() {
        $('.menu-lotterytools').attr('src', "<?php bloginfo('template_directory'); ?>/assets/img/icon-tools-hover.png");
        $('.lotteries-dropdown').hide();
        $('.my-account-dropdown').removeClass('show');
    });

    $('.menu-lotterytools-button').mouseout(function() {
        $('.menu-lotterytools').attr('src', "<?php bloginfo('template_directory'); ?>/assets/img/icon-tools.png");
    });

    $('.menu-help-button').mouseover(function() {
        $('.menu-help').attr('src', "<?php bloginfo('template_directory'); ?>/assets/img/icon-help-hover.png");
        $('.lotteries-dropdown').hide();
        $('.my-account-dropdown').removeClass('show');
    });

    $('.menu-help-button').mouseout(function() {
        $('.menu-help').attr('src', "<?php bloginfo('template_directory'); ?>/assets/img/icon-help.png");
    });

</script>


<script type="text/javascript">

    $('.faq-target').click(function() { return false; });
    $('.terms-target').click(function() { return false; });

    $('.faq-single').find('li').click(function() {
        $(this).toggleClass('active-faq-item');
        $(this).find('i').toggleClass("fa-chevron-down fa-chevron-up");
        $(this).find(".faq-content-text").slideToggle('slow');
    });

</script>

<script>
    function offsetAnchor() {
        if(location.hash.length !== 0) {
            window.scrollTo(window.scrollX, window.scrollY - 100);
        }
    }

    $(window).on("hashchange", function () {
        offsetAnchor();
    });

    window.setTimeout(function() {
        offsetAnchor();
    }, 1);
</script>

<script type="text/javascript">
    $('.menu-help-button').mouseover(function() {
        $('.header-help-menu').show();
    });


    $(".menu-teamplay-button").on('mouseover', function() {
        $('.header-help-menu').hide();
    });

    $(".menu-results-button").on('mouseover', function() {
        $('.header-help-menu').hide();
    });

    $(".menu-lotterytools").on('mouseover', function() {
        $('.header-help-menu').hide();
    });

    $("section").on('mouseover', function() {
        $('.header-help-menu').hide();
    });

    $('.my-account-dropdown').mouseover(function() {
        $('.header-help-menu').hide();
    });

    // for CLAIM TICKET button
    $('#optin-button').on('click', function(){
        var ourBody = $("html, body");
        ourBody.stop().animate({scrollTop:0}, '500', 'swing');
        setTimeout("$('#signup').click()", 500)
    });
</script>


<script>
    $('.deposit-page').find('.submit-form-method-cart').find('button').click(function() {
        window.open('http://wpjl.2hypnotize.com');
    });
</script>

</body>
</html>
