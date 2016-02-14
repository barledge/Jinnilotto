<div class="col-md-4">

    <div class="cart-panel-header">

        ALREADY A MEMBER? <span class="strong">LOGIN HERE</span>

    </div>



    <div class="cart-panel-body">



        <form>

            <div class="form-group">

                <input type="email" class="form-control" id="cartEmailLogin" placeholder="Email">

            </div>

            <div class="form-group">

                <input type="password" class="form-control" id="cartPasswordLogin" placeholder="Password">

            </div>



            <a href="#">Forgot Password? Click here...</a>

            <br>



            <button id="loginCart" type="button" class="btn">LOGIN</button>

        </form>



    </div>



    <div class="cart-panel-header">

        NOT A MEMBER YET? <span class="strong">SIGN UP HERE</span>

    </div>



    <div class="cart-panel-body">



        <form>

            <button id="cart-facebook"><img src="<?php bloginfo('stylesheet_directory'); ?>/assets/img/connect-facebook.png" alt="Facebook"></button>

            <div class="form-group">

                <input type="email" class="form-control" id="cartEmailRegister" placeholder="Email">

            </div>

            <div class="form-group">

                <input type="password" class="form-control" id="cartPasswordRegister" placeholder="Password">

            </div>

            <div class="form-group">

                <input type="text" class="form-control" id="cartNameRegister" placeholder="Full Name">

            </div>

            <div class="form-group">

                <input type="text" class="form-control" id="cartPhoneRegister" placeholder="Phone Number">

            </div>

            

            <button id="registerCart" type="button" class="btn">SIGNUP</button>

        </form>



    </div>



    <script>

        $('#loginCart').on('click', function(data){

            var username = $('#cartEmailLogin').val();

            var password = $('#cartPasswordLogin').val();

            $.ajax({

                url: '/wp-admin/admin-ajax.php',

                type: 'post',

                data: {

                    action: 'login',

                    InputEmailLogin: username,

                    InputPasswordLogin: password

                }

            }).fail(function (r, status, jqXHR) {

                console.log('failed');

            }).done(function (r, status, jqXHR) {

                if(r.success){

                    window.location = "/cart";

                } else {

                    alert("Invalid Email or password");

                }

            });

        });

        $('#registerCart').on('click', function(data){

            var fullName = $('#cartNameRegister').val();

            var email = $('#cartEmailRegister').val();

            var password = $('#cartPasswordRegister').val();

            var phone = $('#cartPhoneRegister').val();

            var flag = 0;

            var refn = /^[A-Za-z ]+$/;
            if(refn.test(fullName)){
                /*alert('true');*/
            }
            else{
                $('#cartNameRegister').attr("placeholder", "Invalid Full Name").val("");
                $('#cartNameRegister').addClass('place-holder');
                flag = 1;
            }

            var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if(re.test(email)){
                /*alert("Valid email");*/
            }
            else{
                $('#cartEmailRegister').attr("placeholder", "Invalid Email").val("");
                $('#cartEmailRegister').addClass('place-holder');
                flag = 1;
            }

            var rep = /^[a-zA-Z0-9!@#$%^&*]{8,}$/;
            if(rep.test(password)){
                /*alert("Password is valid");*/
            }
            else{
                $('#cartPasswordRegister').attr("placeholder", "Invalid password(more 8 character)").val("");
                $('#cartPasswordRegister').addClass('place-holder');
                flag = 1;
            }

            var rephone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
            if(rephone.test(phone)){
                /*alert("Phone is valid");*/
            }
            else{
                $('#cartPhoneRegister').attr("placeholder", "Invalid Phone number").val("");
                $('#cartPhoneRegister').addClass('place-holder');
                flag = 1;
            }



            if(fullName=="" || email=="" || password=="" || phone==""){

                alert("Please fill all fields");
                return;
            }

            if(flag == 1){
                return;
            }else{

                $.ajax({

                    url: '/wp-admin/admin-ajax.php',

                    type: 'post',

                    data: {

                        action: 'sign_up',

                        FullName: fullName,

                        InputPasswordSignup: password,

                        InputEmailSignup: email

                    }

                }).fail(function (r, status, jqXHR) {

                    console.log('failed');

                }).done(function (r, status, jqXHR) {

                    if(r.success){

                        window.location = "/cart";

                    } else {

                        alert(r.message);

                    }

                });
            }

        });

    </script>



</div>