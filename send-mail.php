<?php
# define a recipient email CONSTANT
define('RECIPIENT','dylanscott87@gmail.com');


# catch the POST variables
$name		= $_POST['name'];
$email		= $_POST['email'];
$message	= $_POST['message'];


# format the email output (body and headers)
$body		= $message."\n\n";
$body		.=$name."<$email>"." This is sent from the dmlive website.";
$headers	="From: $name<$email>";


# send email and reply to the referrer script
if (mail(RECIPIENT, $headers, $body)) {
	echo 'success';
} else {
	echo 'fail';
}