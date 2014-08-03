<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $title = $_POST['title'];
    $message = $_POST['message'];
    $from = 'From jessevaughan.com'; 
    $to = 'jesse.s.vaughan@gmail.com'; 
    $subject = 'Hello!';
    $human = $_POST['human'];
			
    $body = "From: $name\n E-Mail: $email\n Subject: $title\n Message:\n $message";
				
    if ($_POST['submit']) {				 
        if (mail ($to, $subject, $body, $from)) { 
	    echo '<p style="font-family: Helvetica, sans-serif;
	font-size: 18px;
	font-weight: normal;
	text-decoration: none;
	color: black;
	padding: 0;
	letter-spacing: 3px;
	text-transform: uppercase;
	margin: 12px auto 0 auto;
	text-align: center;
	display: block;">Your message has been sent!</p>';
	} else { 
	    echo '<p style="font-family: Helvetica, sans-serif;
	font-size: 18px;
	font-weight: normal;
	text-decoration: none;
	color: black;
	padding: 0;
	letter-spacing: 3px;
	text-transform: uppercase;
	margin: 12px auto 0 auto;
	text-align: center;
	display: block;">Something went wrong, go back and try again!</p>'; 
	} 
    } else if ($_POST['submit'] && $human != '4') {
	echo '<p style="font-family: Helvetica, sans-serif;
	font-size: 18px;
	font-weight: normal;
	text-decoration: none;
	color: black;
	padding: 0;
	letter-spacing: 3px;
	text-transform: uppercase;
	margin: 12px auto 0 auto;
	text-align: center;
	display: block;">You answered the anti-spam question incorrectly!</p>';
    }
?>