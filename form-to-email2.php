<?php
echo "Hello, world!";

if(!isset($_POST['submit']))
{
	//This page should not be accessed directly. Need to submit the form.
	echo "error; you need to submit the form!";
}
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$website = $_POST['website'];
$message = $_POST['message'];


//echo "entra al php";

//Validate first
if(empty($email))
{
    echo "Name is mandatory!";
    exit;
}

if(empty($name))
{
    echo "email is mandatory!";
    exit;
}

if(IsInjected($email))
{
    echo "Bad email value!";
    exit;
}

$email_from = 'fernando@fernandozega.com';
$email_subject = "Mail received from MyOfficialPage";
$email_body = "You have received a new message from \n $name.\n".
		"eMail: \n $email \n".
		"Phone: \n $phone \n".
		"Website: \n $website \n".
		"Message: \n $message \n";

$to = "fernando@fernandozega.com";
$headers = "From: $email_from \r\n";
$headers .= "Reply-To: $email \r\n";
//Send the email!
//mail($to,$email_subject,$email_body,$headers);
//done. redirect back
header('Location: index.html');


// Function to validate against any email injection attempts
function IsInjected($str)
{
  $injections = array('(\n+)',
              '(\r+)',
              '(\t+)',
              '(%0A+)',
              '(%0D+)',
              '(%08+)',
              '(%09+)'
              );
  $inject = join('|', $injections);
  $inject = "/$inject/i";
  if(preg_match($inject,$str))
    {
    return true;
  }
  else
    {
    return false;
  }
}

?>
