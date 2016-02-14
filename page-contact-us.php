<?php
/*
  Template Name: Contact Us
*/


get_header(); ?>

<section id="contact-us-header" style="background: url('<?php bloginfo('template_directory'); ?>/assets/img/contact-us-bg.png') 45% 50% no-repeat">
    <h1>Contact</h1>
    <img src="<?php bloginfo('template_directory'); ?>/assets/img/about-us-separator.png" alt="">
</section>

<section class="contact-form">

    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <p>If you have any questions or queries our helpful support team are waiting and ready to assist. Simply leave a message and a member of our team will promptly get in touch.</p>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">


                <?php echo do_shortcode('[contact-form-7 id="225" title="Primary Contact Form"]') ?>


<!--
                <form>
                    <div class="form-group">
                        <input type="text" class="form-control" id="contactFirstName" placeholder="First Name">
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control" id="contactLastName" placeholder="Last Name">
                    </div>
                    <div class="form-group">
                        <input type="email" class="form-control" id="contactEmail" placeholder="Email">
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control" id="contactPhoneNumber" placeholder="+1 123-456-7899">
                    </div>
                    <div class="form-group">
                        <textarea class="form-control" id="contactText" placeholder="Message"></textarea>
                    </div>
                    <button id="contact-us-submit" type="submit" class="btn">SEND</button>
                </form>
                -->

            </div>

            <div class="col-md-6 contact-normal">
                <p>
                    Our office is located at 7A ,Sir Luigi Camilleri Street, Sliema, SLM 1843, Malta.
                </p>
                <p>
                    Contact Us Sunday to Friday, 10am to 7pm GMT
                </p>
                <p>
                    Phone UK: +44 20 3514 6988
                </p>
                <p>
                    E-mail to: support@JinniLotto.com
                </p>
                <p>
                    <br>
                    Please enter our Frequent Asked Questions (<a href="<?php bloginfo('url'); ?>/faq">FAQ</a>) page to read more information.
                </p>
            </div>
        </div>
    </div>

</section>

<?php

get_footer();
