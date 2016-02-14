<?php
/*
 *  Template Name: Users
 */

use WegeTech\LottoYard\Model\User;

//get_header();
if (isset($_POST['action'])) {
    $action = $_POST['action'];
} else if (isset($_GET['action'])) {
    $action = $_GET['action'];
} else {
    header('Location: http://wpjl.2hypnotize.com/');
    die();
}

switch ($action) {
    case 'register':
        registerUser();
        break;
    case 'login':
        loginUser($_POST['InputEmailLogin'], $_POST['InputPasswordLogin']);
        break;
    case 'logout':
        logoutUser();
        break;
    default:
        wp_send_json(array('message' => 'Unknown action, please provide valid action and data!'));

}

function registerUser()
{
    if (isset($_POST['FullName']) && isset($_POST['InputPasswordSignup']) && isset($_POST['InputEmailSignup'])) {
        /**
         * @var \WegeTech\LottoYard\Service $lottoService
         */
        global $lottoService;
        $user = new User;

        $name = explode(' ', $_POST['FullName']);
        $user->FirstName = htmlspecialchars($name[0]);
        $user->LastName = htmlspecialchars($name[1]);
        $user->Email = $_POST['InputEmailSignup'];
        $user->IP = $_SERVER['REMOTE_ADDR'];
        $response = $lottoService->signUpUser($user);
        if ($response->success) {
            $userResponse = wp_create_user($_POST['InputEmailSignup'], $_POST['InputPasswordSignup'], $_POST['InputEmailSignup']);
            if (is_wp_error($userResponse)) {
                wp_send_json(array('message' => $userResponse->get_error_message()));
            }
            add_user_meta($userResponse, 'lottoPass', $response->data->Password, true);
            loginUser($_POST['InputEmailSignup'] ,$_POST['InputPasswordSignup']);
            wp_send_json(array('data' => $response->data));
        } else {
            wp_send_json(array('message' => $response->message));
        }
    }
}

function loginUser($email, $password)
{
    if ($email !== null && $password !== null) {
        /**
         * @var \WegeTech\LottoYard\Service $lottoService
         */
        global $lottoService;


        $credentials = array();
        $credentials['user_login'] = $email;
        $credentials['user_password'] = $password;
        $credentials['remember'] = true;
        $user = wp_signon($credentials, false);
        if (is_wp_error($user)) {
            wp_send_json(array('data' => $user->get_error_message()));
        } else {
            $userData = new User;
            $lottoPass = get_user_meta($user->id, 'lottoPass', true);
            $userData->Email = $email;
            $userData->Password = $lottoPass;
            $response = $lottoService->loginUser($userData);
            session_start();
            $_SESSION['userData'] = $response->data;
            if ($response->success) {
                header('Location: http://wpjl.2hypnotize.com/');
            } else {
                wp_send_json(array('data' => $response->message));
            }

        }

    }
}

function logoutUser()
{
    session_destroy();
    wp_logout();
    header('Location: http://wpjl.2hypnotize.com/');
}

?>
