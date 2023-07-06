<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];

    $to = 'green_factor_duel@hotmail.com';
    $subject = 'Correo de PROWEBDEV';
    $message = 'From: ' . $name . "\r\n" . 'Email: ' . $email . "\r\n" . 'Phone: ' . $phone . "\r\n" . 'Message: ' . $message;

    mail($to, $subject, utf8_decode($message), $header);

    //echo 'Thank you for your submission!';
    header('location:thankyou.html');
}
?>