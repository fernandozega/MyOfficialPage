<!DOCTYPE HTML>
<html>
<head>
<style>
<!-- .error {color: #FF0000;} -->
</style>
</head>
<body>

<?php

//echo "Entre el el PHP";


// define variables and set to empty values
//$nameErr = $emailErr = $websiteErr = "";
$name = $email = $phone = $website = $message = $msg = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  if (empty($_POST["name"])) {
    $name = "Name is required";
  } else {
    $name = test_input($_POST["name"]);
  }

  if (empty($_POST["email"])) {
      $email = "Email is required";
    } else {
      $email = test_input($_POST["email"]);
      // check if e-mail address is well-formed
      if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $email = "Invalid email format";
      }
    }

  if (empty($_POST["website"])) {
      $website = "";
    } else {
      $website = test_input($_POST["website"]);
      // check if URL address syntax is valid (this regular expression also allows dashes in the URL)
      if (!preg_match("/\b(?:(?:https?|ftp):\/\/|www\.)[-a-z0-9+&@#\/%?=~_|!:,.;]*[-a-z0-9+&@#\/%=~_|]/i",$website)) {
        $website = "Invalid URL";
      }
    }

  if (empty($_POST["phone"])) {
    $phone = "";
  } else {
    $phone = test_input($_POST["phone"]);
  }

  if (empty($_POST["message"])) {
    $message = "";
  } else {
    $message = test_input($_POST["message"]);
  }

}

function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}
?>

<?php
$msg = $name . ' ' . $email . ' ' . $phone . ' ' . $website . ' ' . $message;

//echo "variables $msg<br>";
//echo "error1 $nameErr<br>";
//echo "error2 $emailErr<br>";
//echo "error3 $websiteErr<br>";

// send email
//mail("fernando@fernandozega.com","Mail received from MyOfficialPage",$msg);
//echo "Envie el mail";

//clear fields
//$name = $email = $phone = $website = $message = $msg = "";

//done. redirect back
header('Location: index.html');

?>

</body>
</html>
