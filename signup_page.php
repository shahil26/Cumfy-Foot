<?php
// database connection code
// $con = mysqli_connect('localhost', 'database_user', 'database_password','database');

$con = mysqli_connect('localhost', 'root', 'Shahil@26','cumfyfoot');

// get the post records
$txtUsername = $_POST['username'];
$txtPassword = $_POST['password'];
$txtConfirmPassword = $_POST['confirm_password'];
$txtEmail = $_POST['Email'];
// database insert SQL code
if($txtPassword == $txtConfirmPassword)
{
    $sql = "INSERT INTO `users`
            VALUES ('$txtUsername ', 
                    '$txtPassword', 
                    '$txtEmail')";
    $rs = mysqli_query($con, $sql);
    if($rs)
    {
        // echo '<script>alert("Signed Up Succesfully")</script>';
        echo '<script>window.location = "login_page.html"</script>';
    }
}
else
{
    echo '<script>alert("Passwords do not match")</script>';
    include 'login_page.html';
}


?>