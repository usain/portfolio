<?php
# define a recipient email CONSTANT
define('RECIPIENT','DMTutors@mediadesign.school.nz');


# catch the POST variables
$name		= $_POST['name'];
$email		= $_POST['email'];
$message	= $_POST['message'];


# format the email output (body and headers)
$body		= $message."\n\n";
$body		.=$name."<$email>";
$headers	="From: $name<$email>";


# send email and reply to the referrer script
if (mail(RECIPIENT, $body, $headers)) {
	echo 'success';
} else {
	echo 'fail';
}