<?php
// database connection code
// $con = mysqli_connect('localhost', 'database_user', 'database_password','database');

$con = mysqli_connect('localhost', 'root', 'Shahil@26','cumfyfoot');

// get the post records
$Username = $_POST['login_username'];
$Password = $_POST['login_password'];
$Username = preg_replace("/[^[:alnum:]]/u", '', $Username);
$Password = preg_replace("/[^[:alnum:]]/u", '', $Password);
// echo "Username: ".$Username. " Password: ".$Password."<br>";
$flag = 0;
$done = 0;
$sql = "SELECT * FROM `users`";

$result = mysqli_query($con, $sql);
while($row = mysqli_fetch_assoc($result)) {
    // echo "Username: ".$row['Username']. " Password: ".$row['Password']."<br>";
    $row['Username'] = preg_replace("/[^[:alnum:]]/u", '', $row['Username']);
    $row['Password'] = preg_replace("/[^[:alnum:]]/u", '', $row['Password']);
    if($Username == $row['Username'])
    {
       
        if($Password == $row['Password'])
        {
            $flag = 1;
            $txtName = $row['Username'];
            // $txtRoom = $row['RoomNo'];
            // $txtRoll = $row['RollNo'];
            // $txtMobile = $row['MobileNo'];
            $txtEmail = $row['Gmail'];
            // $txtDepartment = $row['Department'];
            break;
        }
    }
}

// echo "Username: ".$Username. "Password: ".$Passowrd."<br>";
if($flag == 1)
{
    // include 'index.html';
    echo '
        <script type="text/javascript">
            function setCookie(cName, cValue, expDays) {
                let date = new Date();
                date. setTime(date. getTime() + (expDays * 24 * 60 * 60 * 1000));
                const expires = "expires=" + date. toUTCString();
                document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
            }
            setCookie("Name", "'.$txtName.'", 30);
            setCookie("Email", "'.$txtEmail.'", 30);
            console.log(document.cookie);
        </script>
    ';
    echo("<script>window.location = 'index.html';</script>"); 
    // header('Location: index.html'); 
    // exit;
}   
else
{
    include 'login_page.html';
    echo '<script type="text/javascript">
    document.getElementById("username").value = "'.$Username.'";
    </script>';
    echo '<script type="text/javascript">
    document.getElementById("incorrect").innerHTML = "username and password did not match";
    </script>';
    // echo '<h3 style="color:red; text-align:center" >Email Id and password did not match</h3>';
    // header('Location: index.html');
    // exit;
}
?>