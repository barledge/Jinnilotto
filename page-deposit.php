<?php
/*
  Template Name: Deposit
*/

get_header();
?>

<section class="depositPage">
	<div class="depJaw">
		<ul class="depTabs">
			<li class="act"><img src="<?php bloginfo('template_directory'); ?>/assets/img/deposit/depos_visa.png" alt=""></li>
			<li><img src="<?php bloginfo('template_directory'); ?>/assets/img/deposit/depos_scrill.png" alt=""></li>
			<li><img src="<?php bloginfo('template_directory'); ?>/assets/img/deposit/depos_yandex.png" alt=""></li>
			<li><img src="<?php bloginfo('template_directory'); ?>/assets/img/deposit/depos_moneta.png" alt=""></li>
			<li><img src="<?php bloginfo('template_directory'); ?>/assets/img/deposit/depos_qiwi.png" alt=""></li>
			<li><img src="<?php bloginfo('template_directory'); ?>/assets/img/deposit/depos_c24.png" alt=""></li>
		</ul>
		<div class="depBoxs">
			<div class="depBox vis">
				<div class="depForm">
					<form action="#" class="depVisa">
						<div class="depItem_1">
							<label class="depLab" for="depLab1_1">Full Name:</label>
							<input type="tel" id="depLab1_1" value="" class="depText">
							<label class="depLab" for="depLab1_2">Card Number:</label>
							<input type="text" id="depLab1_2" value="" class="depText cardMask">
							<div class="depClear">
								<div class="forDate">
									<label class="depLab" for="depLab1_3">Expiration Date:</label>
									<div class="fSel">
										<select class="iSel" name="creditCard[expirationDateMonth]">
					                        <?php for ($i = 1; $i <= 12; $i++): $month = $i > 9 ? $i : "0$i"; ?>
					                            <option value="<?=$month?>"><?=$month?></option>
					                        <?php endfor;?>
					                    </select>
									</div>
									<div class="fSel2">
										<select class="iSel" name="creditCard[expirationDateYear]">
					                        <?php for ($i = date('Y'); $i <= date('Y') + 10; $i++):?>
					                            <option value="<?=$i?>"><?=$i?></option>
					                        <?php endfor;?>
					                    </select>
									</div>
								</div>
								<div class="fdCVV">
									<label class="depLab" for="depLab1_5">CVV</label>
									<input type="text" id="depLab1_5" value="" class="depText">
									<i class="cvvHelp">[?]</i>
								</div>
							</div>
							<div class="depCheckbox">
		                        <input class="depCheck" id="depCheck" type="checkbox" name="terms" value="terms">
		                        <label class="depCheckLabel" for="depCheck">I Agree with the <a href="<?php bloginfo('url'); ?>/terms-conditions" target="_blank">Terms&nbsp;&&nbsp;Conditions</a></label>
                        	</div>
							<div class="depTotal">
		                        <p class="depTLeft">Total:</p>
		                        <p class="depTRight">$0</p>
		                    </div>
							<button class="depBut hvr-shadow">Submit order</button>
						</div>
					</form>
				</div>
			</div><!-- .depBox -->
			<div class="depBox"><!-- skrill -->
				<div class="depForm dfMarg">
					<form action="#">
						<div class="depItem_4">
							<label  class="depLab" for="depLab2_1">Email</label>
							<input type="email" id="depLab2_1" value="" class="depText">
						</div>
						<div class="depItem_4">
							<label  class="depLab" for="depLab2_2">Amount to deposit</label>
							<input type="text" id="depLab2_2" value="" class="depText">
						</div>
						<div class="depItem_4">
							<label  class="depLab" for="depLab2_3">&nbsp;</label>
							<button class="depBut hvr-shadow">deposit</button>
						</div>
					</form>
				</div>
			</div><!-- .depBox -->
			<div class="depBox"><!-- yandex -->
				<div class="depForm dfMarg">
					<form action="#">
						<div class="depItem_4">
							<label  class="depLab" for="depLab3_2">Amount to deposit</label>
							<input type="text" id="depLab3_2" value="" class="depText">
						</div>
						<div class="depItem_4">&nbsp;</div>
						<div class="depItem_4">
							<label  class="depLab" for="depLab3_3">&nbsp;</label>
							<button class="depBut hvr-shadow">deposit</button>
						</div>
					</form>
				</div>
			</div><!-- .depBox -->
			<div class="depBox"><!-- Moneta -->
				<div class="depForm dfMarg">
					<form action="#">
						<div class="depItem_4">
							<label  class="depLab" for="depLab4_2">Amount to deposit</label>
							<input type="text" id="depLab4_2" value="" class="depText">
						</div>
						<div class="depItem_4">&nbsp;</div>
						<div class="depItem_4">
							<label  class="depLab" for="depLab4_3">&nbsp;</label>
							<button class="depBut hvr-shadow">deposit</button>
						</div>
					</form>
				</div>
			</div><!-- .depBox -->
			<div class="depBox"><!-- QIWI -->
				<div class="depForm dfMarg">
					<form action="#">
						<div class="depItem_4">
							<label  class="depLab" for="depLab5_1">Phone in Qiwi system</label>
							<input type="email" id="depLab5_1" value="" class="depText">
						</div>
						<div class="depItem_4">
							<label  class="depLab" for="depLab5_2">Amount to deposit</label>
							<input type="text" id="depLab5_2" value="" class="depText">
						</div>
						<div class="depItem_4">
							<label  class="depLab" for="depLab5_3">&nbsp;</label>
							<button class="depBut hvr-shadow">deposit</button>
						</div>
					</form>
				</div>
			</div><!-- .depBox -->
			<div class="depBox">
				<div class="depForm dfMarg">
					<form action="#">
						<div class="depItem_4">
							<label  class="depLab" for="depLab5_1">Phone in Contact24 system</label>
							<input type="tel" id="depLab5_1" value="" class="depText">
						</div>
						<div class="depItem_4">
							<label  class="depLab" for="depLab5_2">Amount to deposit</label>
							<input type="text" id="depLab5_2" value="" class="depText">
						</div>
						<div class="depItem_4">
							<label  class="depLab" for="depLab5_3">&nbsp;</label>
							<button class="depBut hvr-shadow">deposit</button>
						</div>
					</form>
				</div>
			</div><!-- .depBox -->
		</div>
	</div>
</section>
<script>
	$(function() {

	$('ul.depTabs').delegate('li:not(.act)', 'click', function() {
		$(this).addClass('act').siblings().removeClass('act').parents('div.depJaw').find('div.depBox').hide().eq($(this).index()).fadeIn(150);
	});

})

</script>


<?php
get_footer();
