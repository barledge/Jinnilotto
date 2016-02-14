<div class="col-md-4 payment-cart">

    <div class="cart-payment cart-payment-1 activePayment">

        <img src="<?php bloginfo('template_directory'); ?>/assets/img/cart-payment-visa.png" alt="">

    </div>

    <div class="cart-payment cart-payment-2">

        <img src="<?php bloginfo('template_directory'); ?>/assets/img/cart-payment-skrill.png" alt="">

    </div>

    <div class="cart-payment cart-payment-3">

        <img src="<?php bloginfo('template_directory'); ?>/assets/img/cart-payment-yandex.png" alt="">

    </div>

    <div class="cart-payment cart-payment-4">

        <img src="<?php bloginfo('template_directory'); ?>/assets/img/cart-payment-moneta.png" alt="">

    </div>

    <div class="cart-payment cart-payment-5">

        <img src="<?php bloginfo('template_directory'); ?>/assets/img/cart-payment-qiwi.png" alt="">

    </div>

    <div class="cart-payment cart-payment-6">

        <img src="<?php bloginfo('template_directory'); ?>/assets/img/cart-payment-c24.png" alt="">

    </div>



    <div class="cart-payment-information">

        <div class="cart-payment-visa">



            <form class="cartPaymentMethodForm" method="post">
                <input type="hidden" name="amount" value="5">


                <div class="form-group">

                    <label for="fullName">Full Name</label>

                    <input type="text" class="form-control" id="fullName" name="creditCard[cardHolderName]" placeholder="John Smith">

                </div>



                <div class="form-group">

                    <label for="exampleInputEmail1">Card Number</label>

                    <input type="text" class="form-control" id="exampleInputEmail1" name="creditCard[creditCardNumber]" placeholder="xxxx-xxxx-xxxx-xxxx">

                </div>

                <div class="form-group pick-a-date">

                    <label for="expirationDay">Expiration Date:</label>

                    <br/>

                    <select id="expirationDay" name="creditCard[expirationDateMonth]">
                        <?php for ($i = 1; $i <= 12; $i++): $month = $i > 9 ? $i : "0$i"; ?>
                            <option value="<?=$month?>"><?=$month?></option>
                        <?php endfor;?>
                    </select>



                    <select id="expirationDate" name="creditCard[expirationDateYear]">
                        <?php for ($i = date('Y'); $i <= date('Y') + 10; $i++):?>
                            <option value="<?=$i?>"><?=$i?></option>
                        <?php endfor;?>
                    </select>



                    <div class="form-group cvv">

                        <label for="cvv">CVV</label>

                        <input type="text" class="form-control" name="creditCard[cvv]" id="cvv" placeholder="123">

                    </div>



                    <div class="form-group checkbox-payment">

                        <input class="pull-left" id="cartTerms" type="checkbox" name="terms" value="terms">

                        <label class="payment-checkbox" id="cartSubscriptionLabel" for="terms">I Agree with the <a

                                href="<?php bloginfo('url'); ?>/terms-conditions" target="_blank">Terms & Conditions</a></label>

                    </div>



                    <div class="visa-help-info">

                        <p>[?]</p>

                    </div>



                    <div class="cart-total form-group">

                        <p class="pull-left">Total:</p>

                        <h3 class="pull-right">$0</h3>

                    </div>



                </div>
                
                <p class="pSecr">Upon purchase at our website, please note your billing descriptor will be <a href="https://www.jinnilotto.com">"Jinnilotto.com"</a></p>


                <!------ Submit Button ------>

                <div class="form-group submit-form-method-cart">

                    <button type="submit" class="btn btn-success">SUBMIT ORDER</button>

                </div>





                <img class="cart-img-card" src="<?php bloginfo('stylesheet_directory'); ?>/assets/img/cart-payment-card.png" alt="Credit Card Image"/>



            </form>

        </div>

    </div>



    <div class="cart-security">

        <div class="safety-image pull-left">

            <img src="<?php bloginfo('template_directory'); ?>/assets/img/cart-payment-shield.png" alt="">

        </div>



        <div class="safety-text pull-right">

            <h5><span class="strong">Safety & Security</span> <br>

                JinniLotto guarantees its customers by using the highest level of security &dash; SSL.</h5>



        </div>

    </div>





</div>